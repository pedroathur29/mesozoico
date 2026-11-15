import * as THREE from 'three';

// Animação procedural do dino. O .glb tem esqueleto (95 ossos), mas nenhuma animação pronta:
// tudo aqui é calculado a cada quadro, em cima da pose de repouso. É animação ilustrativa, não um dado científico.
//
// O que o rig permite animar (conferido no modelo): quadril, 3 ossos de tronco, 3 de pescoço, cabeça, mandíbula,
// língua (4), pálpebras de cima e de baixo, globos oculares, clavículas (ombros), braço, antebraço, pulso e 3 dedos
// com 3 falanges, coxa, canela, metatarso, pé e 3 dedos, e 6 ossos de cauda. O esqueleto NÃO tem costelas, barriga
// nem narinas: para isso o modelo ganhou três chaves de forma (chest, belly, nostril) em tools/clean_model.py.
//
// Como funciona:
//   PERNAS   cinemática inversa. Cada pé tem um alvo; a perna (coxa, canela, metatarso) é resolvida para alcançá-lo.
//            Parado, os pés ficam plantados e o quadril se mexe por cima deles.
//   ANDAR    um controlador de passada: o corpo avança "travel" metros e cada pé plantado fica preso a um ponto do
//            chão. Quando um pé fica para trás o suficiente, ele levanta, vai à frente e pousa. Por construção o pé
//            não desliza. A cena desloca o chão por "travel" (ver src/scene.js), então o dino fica no centro do quadro.
//   CORPO    o quadril sobe no meio do passo, pende para a perna de apoio e gira com a passada; o tronco gira ao contrário.
//   ATRASO   cauda, pescoço, cabeça e braços seguem o quadril com atraso (filtros em cadeia), em vez de ondas fixas.
//   PARADO   respira (tórax e abdômen, com pausa entre os ciclos), passa o peso de uma perna para a outra, move os
//            olhos e, de tempos em tempos, faz UMA ação: observar o entorno, olhar de relance, farejar o chão,
//            farejar o ar, trocar um pé de lugar, ajustar a postura, abanar a cauda ou bocejar. Os intervalos
//            variam (às vezes há uma pausa longa) e a ordem é sorteada, sem repetir a anterior.
//
// Parâmetros de update(): speed (m/s pedidos; o controlador acelera e freia sozinho), roar, sniff, ruffle, grab
// (0..1, vindos da rolagem em src/acts.js), idle (0 desliga tudo que é "vida própria": movimento reduzido),
// look (alvo do olhar no espaço do dino).
//
// Convenção de ângulos no "espaço do dino" (nariz em +X, cima em +Y, lado direito em +Z):
//   rz > 0  levanta o que aponta para a frente (cabeça sobe) e leva a perna para a frente
//   ry > 0  vira o nariz para -Z        rx > 0  inclina o topo do corpo para +Z
// rot() converte isso para o eixo local de cada osso, então não importa como o osso foi modelado.

const _q = new THREE.Quaternion(), _d = new THREE.Quaternion(), _e = new THREE.Euler();
const _v = new THREE.Vector3(), _h = new THREE.Vector3(), _inv = new THREE.Matrix4();
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const hash = (n) => { const v = Math.sin(n * 127.1 + 311.7) * 43758.5453; return v - Math.floor(v); };
const wrapPi = (a) => { while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a; };
// ruído suave em -1..1 (soma de senos com períodos que não coincidem, para não parecer um pêndulo)
const wob = (x, s = 0) => Math.sin(x + s) * 0.5 + Math.sin(x * 2.13 + s * 1.7 + 1.3) * 0.3 + Math.sin(x * 4.57 + s * 2.9 + 4.1) * 0.2;
// sobe, segura e desce (0..1) ao longo de u = 0..1
const pulse = (u, a = 0.25, b = 0.75) => smooth(0, a, u) * (1 - smooth(b, 1, u));
// valor que muda de alvo a cada "period" segundos, com transição macia, e fica parado
// "move" = quantos segundos dura a troca de alvo; o resto do período é pausa
function drift(t, period, seed, move = 0.55) {
  const k = Math.floor(t / period), u = t - k * period;
  const prev = hash(k - 1 + seed) * 2 - 1, cur = hash(k + seed) * 2 - 1;
  return prev + (cur - prev) * smooth(0, move, u);
}
// 0 ou 1, alternando devagar: liga e desliga um movimento contínuo, para ele ter fases de atividade e de pausa
const phase = (t, rate, seed) => smooth(0.34, 0.6, 0.5 + 0.5 * wob(t * rate, seed));
const bump = (u, c, w) => Math.exp(-(((u - c) / w) ** 2));
const lag = (cur, target, tau, dt) => cur + (target - cur) * (1 - Math.exp(-dt / tau));
// quanto a cauda responde ao quadril (de lado e para cima e para baixo). Ajustado por medição (tools/check/tracos.py)
// para a ponta balançar uns 40 cm de lado e uns 20 cm na vertical ao andar; valores maiores viram pêndulo ou chicote.
const TAIL_Y = 0.62, TAIL_P = 0.62;
// sacadas dos olhos: o alvo muda de repente (em ~0,1 s) e fica; em parte dos intervalos ele não muda
function sacc(t, period, seed) {
  const k = Math.floor(t / period), u = t - k * period;
  const val = (i) => (hash(i * 1.3 + seed + 9) > 0.4 ? hash(i + seed) : hash(i - 1 + seed)) * 2 - 1;
  const prev = val(k - 1), cur = val(k);
  return prev + (cur - prev) * smooth(0, 0.1, u);
}
// um ciclo de respiração (0..1): inspira, expira mais devagar e faz uma pausa curta antes do próximo
const breathWave = (ph) => { const u = ph - Math.floor(ph); return u < 0.38 ? smooth(0, 0.38, u) : 1 - smooth(0.38, 0.86, u); };

// Mandíbula (rad): na pose de repouso do modelo a boca vem aberta. JAW_CLOSE é o giro que encosta os dentes
// (medido em capturas: com 0,32 ainda sobra uma fresta e com 0,56 a mandíbula entra na maxila).
const JAW_CLOSE = 0.47, JAW_OPEN = 0.42;
// Pálpebras: deslocamento (m) para fechar o olho.
const LID_UP = 0.05, LID_LOW = 0.022;
// Passada: fração do ciclo com o pé no chão, e onde fica o meio do apoio em relação à posição de repouso do pé (m).
const DUTY = 0.62, STANCE_SHIFT = -0.2;
// Andando, os pés pisam mais perto da linha do meio do corpo (trilha estreita, como nas pegadas de terópodes);
// 1 = na largura do quadril, que dá um andar de pernas abertas. Ao parar, ele reabre a base com um passo de ajuste.
const TRACK = 0.55;
const REACH_BACK = -1.0;   // o mais para trás (m) que um pé plantado pode ficar: além disso a perna não alcança
const strideLength = (v) => lerp(1.35, 2.25, clamp(v / 2.3, 0, 1));   // passada longa: a perna estica para trás no impulso e alcança à frente

// Pose de repouso dos braços (rad, em cima da pose do modelo, que vem com o braço pendurado e os dedos retos):
// upper: braço para trás (-) ou para a frente (+); lower: cotovelo dobra (+); wrist: punho solta (-);
// tuck: cotovelo para junto do corpo; inward: antebraço para dentro; curl: quanto cada dedo curva; spread: abertura entre os dedos.
const ARM = { upper: -0.25, lower: 0.8, wrist: -0.4, tuck: 0, inward: 0.18, curl: [0.4, 0.55, 0.62], spread: 0.1 };

// ações espontâneas (só parado): nome -> duração base em s
const ACTIONS = { look: 4.6, glance: 1.9, sniffGround: 6.6, sniffAir: 3.8, step: 1.0, settle: 3.4, swish: 2.6, yawn: 3.6 };
// "saco" de 16 ações, embaralhado de novo a cada rodada: observar e farejar aparecem mais; o bocejo, uma vez por rodada
const PICK = ['look', 'look', 'look', 'glance', 'glance', 'sniffGround', 'sniffGround', 'sniffGround', 'sniffAir', 'sniffAir', 'step', 'step', 'settle', 'settle', 'swish', 'yawn'];

export function createRig(wrap) {
  wrap.updateMatrixWorld(true);
  const wqi = wrap.getWorldQuaternion(new THREE.Quaternion()).invert();
  const wScale = wrap.getWorldScale(new THREE.Vector3()).x;
  const byName = {};
  wrap.traverse((o) => { if (o.isBone) byName[o.name] = o; if (o.isSkinnedMesh) o.frustumCulled = false; });
  const names = Object.keys(byName);
  const dinoPos = (bone, out = new THREE.Vector3()) => wrap.worldToLocal(bone.getWorldPosition(out));

  // guarda a pose de repouso e a orientação do pai (para converter espaço do dino -> espaço local do osso)
  const joint = (re) => {
    const n = names.find((k) => re.test(k));
    if (!n) return null;
    const bone = byName[n];
    const pw = bone.parent.getWorldQuaternion(new THREE.Quaternion()).premultiply(wqi);
    return {
      bone, rest: bone.quaternion.clone(), restPos: bone.position.clone(), restScale: bone.scale.clone(),
      pw, pwi: pw.clone().invert(), unit: bone.parent.getWorldScale(new THREE.Vector3()).x / wScale,
    };
  };
  const J = {
    hip: joint(/^Hip_/), spine1: joint(/^Spine_01/), spine2: joint(/^Spine_02/), spineTop: joint(/^Spine_Top/),
    neck1: joint(/^Neck_01/), neck2: joint(/^Neck_02/), neckTop: joint(/^Neck_Top/), head: joint(/^Head_/),
    jaw: joint(/^Jaw_\d+$/), tongue: [1, 2, 3, 4].map((i) => joint(new RegExp(`^Tongue_01_0${i}_\\d+$`))),
    tail: [1, 2, 3, 4, 5, 6].map((i) => joint(new RegExp(`^Tail_01_0${i}_`))),
    lids: ['l', 'r'].map((s) => ({ up: joint(new RegExp(`^${s}_eyeupper_`)), low: joint(new RegExp(`^${s}_eyelower_`)) })),
    eyes: ['l', 'r'].map((s) => joint(new RegExp(`^${s}_Eye_`))),
    arms: ['l', 'r'].map((s) => ({
      clav: joint(new RegExp(`^${s}_Clavicle_\\d+$`)),
      upper: joint(new RegExp(`^${s}_FrontLeg_Hip_`)), lower: joint(new RegExp(`^${s}_FrontLeg_Knee_\\d+$`)), wrist: joint(new RegExp(`^${s}_FrontLeg_Ankle_`)),
      fingers: [1, 2, 3].map((f) => [1, 2, 3].map((k) => joint(new RegExp(`^${s}_WristToe_0${f}_0${k}_\\d+$`)))),  // três dedos, três falanges
    })),
  };

  // pernas: ossos + geometria de repouso no plano lateral (comprimentos e ângulos de cada segmento)
  const ang = (a, b) => Math.atan2(b.y - a.y, b.x - a.x);
  const len = (a, b) => Math.hypot(b.x - a.x, b.y - a.y);
  const legs = ['l', 'r'].map((s) => {
    const L = {
      thigh: joint(new RegExp(`^${s}_HindLeg_Hip_\\d+$`)), shin: joint(new RegExp(`^${s}_HindLeg_Knee1_`)),
      meta: joint(new RegExp(`^${s}_HindLeg_Knee2_\\d+$`)), ankle: joint(new RegExp(`^${s}_HindLeg_Ankle_`)), ball: joint(new RegExp(`^${s}_HindLeg_Ball_`)),
      toes: [1, 2, 3].map((f) => joint(new RegExp(`^${s}_LegToe_0${f}_01_`))),
    };
    if (!L.thigh || !L.shin || !L.meta || !L.ball) return null;
    const H = dinoPos(L.thigh.bone), K1 = dinoPos(L.shin.bone), K2 = dinoPos(L.meta.bone), B = dinoPos(L.ball.bone);
    Object.assign(L, { L1: len(H, K1), L2: len(K1, K2), L3: len(K2, B), a1: ang(H, K1), a2: ang(K1, K2), a3: ang(K2, B), home: B.clone(), dz0: B.z - H.z, side: Math.sign(H.z) || 1 });
    return L;
  });
  const hasLegs = legs.every(Boolean) && !!J.hip;
  // de que lado fica cada olho e cada braço (+1 = lado direito, +Z no espaço do dino)
  const eyes = J.eyes.filter(Boolean).map((j) => ({ j, side: Math.sign(dinoPos(j.bone).z) || 1 }));
  J.arms.forEach((Arm) => { Arm.side = Arm.upper ? Math.sign(dinoPos(Arm.upper.bone).z) || 1 : 1; });
  // chaves de forma (respiração e narinas): podem existir em mais de uma malha (pele, olhos, plumagem)
  const morphs = {};
  wrap.traverse((o) => { if (o.isMesh && o.morphTargetDictionary) for (const [n, i] of Object.entries(o.morphTargetDictionary)) (morphs[n] ||= []).push([o, i]); });
  const morph = (n, v) => { const list = morphs[n]; if (list) for (const [m, i] of list) m.morphTargetInfluences[i] = v; };
  // posição da cabeça em repouso, no espaço do dino (para calcular para onde olhar)
  const headPos = new THREE.Vector3(3.6, 2.7, 0);
  if (J.head) dinoPos(J.head.bone, headPos);

  function rot(j, rx, ry, rz) {
    if (!j) return;
    _d.setFromEuler(_e.set(rx, ry, rz, 'YZX'));
    _q.copy(j.pwi).multiply(_d).multiply(j.pw);
    j.bone.quaternion.copy(_q).multiply(j.rest);
  }
  // desloca um osso em metros, no espaço do dino
  function move(j, x, y, z) {
    if (!j) return;
    _v.set(x, y, z).applyQuaternion(j.pwi).divideScalar(j.unit || 1);
    j.bone.position.copy(j.restPos).add(_v);
  }
  const refresh = (bone) => { bone.updateMatrix(); bone.matrixWorld.multiplyMatrices(bone.parent.matrixWorld, bone.matrix); };

  // ---------- cinemática inversa de uma perna ----------
  // Leva a articulação da base dos dedos (ball) até F, no espaço do dino. dm: giro extra do metatarso
  // (calcanhar sobe ou a perna dobra no ar). toe: inclinação da ponta do pé. P, R, Y: inclinação, rolagem e giro já dados ao quadril.
  function solveLeg(L, F, dm, toe, P, R, Y) {
    let fx = F.x, fy = F.y, fz = F.z;
    for (let pass = 0; pass < 3; pass++) {
      _h.copy(L.thigh.bone.position).applyMatrix4(J.hip.bone.matrixWorld).applyMatrix4(_inv); // articulação do quadril, já com o quadril movido
      const rx = -((fz - _h.z) - L.dz0) / Math.max(0.6, _h.y - fy);
      const am = L.a3 + dm;
      let dx = fx - L.L3 * Math.cos(am) - _h.x, dy = fy - L.L3 * Math.sin(am) - _h.y;
      let d = Math.hypot(dx, dy);
      const dmax = L.L1 + L.L2 - 0.012;
      if (d > dmax) { dx *= dmax / d; dy *= dmax / d; d = dmax; }      // alvo fora de alcance: estica o que dá
      const a1 = Math.atan2(dy, dx) + Math.acos(clamp((L.L1 * L.L1 + d * d - L.L2 * L.L2) / (2 * L.L1 * d), -1, 1)); // joelho para a frente
      const a2 = Math.atan2(dy - L.L1 * Math.sin(a1), dx - L.L1 * Math.cos(a1));
      const d1 = wrapPi(a1 - L.a1), d2 = wrapPi(a2 - L.a2);
      rot(L.thigh, rx - R, 0, d1 - P);
      rot(L.shin, 0, 0, d2 - d1);
      rot(L.meta, 0, 0, dm - d2);
      rot(L.ankle, 0, 0, 0);
      rot(L.ball, -rx, -Y, toe - dm);      // desfaz os giros acima: a sola fica no chão, apontando para a frente
      refresh(L.thigh.bone); refresh(L.shin.bone); refresh(L.meta.bone); if (L.ankle) refresh(L.ankle.bone); refresh(L.ball.bone);
      if (pass === 2) break;
      // confere onde o pé foi parar e corrige o alvo, duas vezes (as aproximações acima erram alguns milímetros)
      _v.setFromMatrixPosition(L.ball.bone.matrixWorld).applyMatrix4(_inv);
      fx += F.x - _v.x; fy += F.y - _v.y; fz += F.z - _v.z;
    }
  }

  // ---------- controlador de passada ----------
  const G = { travel: 0, v: 0, lastSide: 1, stillT: 0, stepSlot: -1, feet: [], land: 9, n: 0, acc: 0 };   // land: s desde o último pouso; n: passos dados; acc: aceleração suavizada
  // cada passo sai um pouco diferente do anterior (comprimento, altura, tempo e onde o pé pisa de lado)
  const vary = (k) => hash(G.n * 3.71 + k * 11.3) * 2 - 1;
  if (hasLegs) G.feet = legs.map((L) => ({ L, planted: true, gx: L.home.x, x: L.home.x, y: L.home.y, z: L.home.z, h: 0, p: 0, x0: 0, z0: 0, tz: L.home.z, T: 0.5, lift: 0.2, txr: 0, dm: 0, dm0: 0, toe: 0, toe0: 0, since: 9, load: 0, walkStep: false }));
  const midA = () => DUTY * strideLength(G.v) / 2;

  function startSwing(f, txr, T, lift, walkStep, tz) {
    f.planted = false; f.p = 0; f.x0 = f.x; f.z0 = f.z; f.dm0 = f.dm;
    f.txr = txr; f.T = T; f.lift = lift; f.walkStep = walkStep; f.tz = tz ?? f.L.home.z;
    G.lastSide = f.L.side;
  }

  function stepGait(dt, vCmd) {
    if (!hasLegs || dt <= 0) return;
    const acc = vCmd > G.v ? 1.7 : 2.8;                       // acelera e freia aos poucos (m/s²)
    const v0 = G.v;
    G.v += clamp(vCmd - G.v, -acc * dt, acc * dt);
    if (vCmd === 0 && G.v < 0.03) G.v = 0;
    // o corpo não passa do alcance da perna de apoio: se o pé de trás chegou ao limite, espera o outro pousar
    let ds = G.v * dt;
    for (const f of G.feet) if (f.planted) ds = Math.min(ds, Math.max(0, f.gx - G.travel - f.L.home.x - REACH_BACK));
    if (ds < G.v * dt) G.v = ds / dt;
    G.travel += ds;
    G.acc = lag(G.acc, (G.v - v0) / dt, 0.22, dt);
    const moving = G.v > 0.06;
    G.stillT = moving ? 0 : G.stillT + dt;
    G.land += dt;
    const A = midA();
    const air = G.feet.find((f) => !f.planted);
    if (!air) {
      // quem levanta: andando, o pé que ficou para trás; parado há um tempo, um pé que parou longe do lugar
      let pick = null;
      for (const f of G.feet) {
        const xr = f.gx - G.travel - f.L.home.x;
        const other = G.feet.find((o) => o !== f), gap = Math.abs((other.gx - G.travel - other.L.home.x) - xr);
        // andando: levanta o pé que ficou para trás (ou, na partida, com os pés lado a lado, dá logo o primeiro passo)
        const want = moving ? (xr <= STANCE_SHIFT - A * (1 + 0.08 * vary(1)) || (xr <= -0.1 && gap < 0.25)) : (G.stillT > 0.7 && (xr < -0.34 || xr > 0.42 || Math.abs(f.z - f.L.home.z) > 0.1));
        if (want && (!pick || xr < pick.xr)) pick = { f, xr };
      }
      if (pick) {
        const L = strideLength(G.v);
        G.n++;
        if (moving) startSwing(pick.f, -0.07 * (1 + vary(2)) * A, clamp((1 - DUTY) * L / Math.max(G.v, 0.55), 0.3, 0.58) * (1 + 0.06 * vary(3)), (0.2 + 0.1 * clamp(G.v / 2.3, 0, 1)) * (1 + 0.16 * vary(4)), true, pick.f.L.home.z * TRACK + 0.03 * vary(5));
        else startSwing(pick.f, (hash(G.travel * 7.1 + pick.f.L.side) - 0.5) * 0.14, 0.62, 0.11, false);
      }
    }
    for (const f of G.feet) {
      const home = f.L.home;
      if (f.planted) {
        f.x = f.gx - G.travel; f.y = home.y; f.h = 0;
        const xr = f.x - home.x - STANCE_SHIFT, ref = Math.max(A, 0.45);
        // calcanhar sobe quando o pé fica para trás (impulso) e desce quando está à frente
        f.dm = -0.4 * clamp(-xr / ref, 0, 1) ** 2 - 0.2 * clamp((-xr - ref) / 0.25, 0, 1) + 0.1 * clamp(xr / ref, 0, 1);
        f.since += dt;
        f.toe = f.toe0 * Math.exp(-f.since / 0.06);          // os dedos chegam um pouco erguidos e assentam logo depois do contato
      } else {
        // se o corpo acelerou depois que o pé saiu do chão, o passo também acelera
        const T = f.walkStep ? clamp((1 - DUTY) * strideLength(G.v) / Math.max(G.v, 0.55), 0.3, f.T) : f.T;
        const left = (1 - f.p) * T;                       // tempo que falta para o pé tocar o chão
        f.p = Math.min(1, f.p + dt / T);
        const q = f.p, q2 = q * q, q3 = q2 * q;
        const e = q3 * (q * (q * 6 - 15) + 10);
        const land = home.x + (f.walkStep ? STANCE_SHIFT + A + f.txr : f.txr);
        // O pé sai e chega com a velocidade do chão. No referencial do corpo o chão anda para trás a G.v, então a
        // curva começa e termina com essa velocidade: o pé ainda recua um pouco ao sair, passa do ponto e volta
        // antes de tocar. Sem isso ele chegaria "patinando" (era o que tirava o peso da pisada).
        const m = -(f.walkStep ? G.v : 0) * T;
        f.x = (2 * q3 - 3 * q2 + 1) * f.x0 + (q3 - 2 * q2 + q) * m + (-2 * q3 + 3 * q2) * land + (q3 - q2) * m;
        f.z = lerp(f.z0, f.tz, e) + f.L.side * 0.07 * Math.sin(Math.PI * q) * (f.walkStep ? 1 : 0.3);   // no ar o pé contorna a perna de apoio por fora
        // sobe descolando devagar e desce com alguma velocidade: pisa com decisão
        f.h = f.lift * ((0.5 - 0.5 * Math.cos(2 * Math.PI * q)) + 0.1 * Math.sin(Math.PI * q) * smooth(0.45, 1, q));
        f.y = home.y + f.h;
        const bell = Math.sin(Math.PI * f.p);
        f.dm = lerp(f.dm0, f.walkStep ? 0.1 : 0, e) + 0.42 * bell * (f.lift / 0.3);   // a perna dobra no ar
        f.toe = -0.5 * bell * (1 - 0.6 * f.p) * (f.lift / 0.3) + 0.16 * smooth(0.7, 1, f.p) * (f.lift / 0.25);   // os dedos pendem e esticam antes de pousar
        if (f.p >= 1) {
          // o pé toca o chão no meio do quadro: daí até o fim do quadro ele já anda junto com o chão
          f.planted = true; f.gx = G.travel - G.v * Math.max(0, dt - left) + f.x; f.x = f.gx - G.travel; f.h = 0; f.y = home.y; f.since = 0; f.toe0 = f.toe; f.load = f.walkStep ? 1 : 0.4; G.land = 0;
        }
      }
    }
  }

  // ---------- estado com memória (molas e atrasos) ----------
  const S = {
    py: 0, pyV: 0, pz: 0, pzV: 0, yaw: 0, yawV: 0, roll: 0, rollV: 0, pitch: 0, pitchV: 0,   // quadril (molas)
    lagY: 0, lagYaw: 0, lagZ: 0, armY: 0,                                                    // versões atrasadas do quadril
    cy: [0, 0, 0, 0, 0, 0, 0], cp: [0, 0, 0, 0, 0, 0, 0],                                    // cadeia de atraso da cauda
    fy: [0, 0, 0, 0, 0, 0], fr: [0, 0, 0, 0, 0, 0], fp: [0, 0, 0, 0, 0, 0],                  // cadeias de atraso do tronco à cabeça (giro, rolagem, inclinação)
    gazeY: 0, gazeP: 0, gate: 0, actK: null,
    bph: 0, effort: 0, ti: 0, tj: 0, rest: 0,                                                                       // respiração: fase (ciclos) e esforço recente
  };
  // z < 1: a mola passa um pouco do alvo e assenta (é o que dá a sensação de massa); z = 1: chega sem passar
  function spring(key, target, w, dt, z = 1) {
    const n = Math.max(1, Math.ceil(dt * 90));
    const h = dt / n;
    for (let i = 0; i < n; i++) {
      S[key + 'V'] += (w * w * (target - S[key]) - 2 * z * w * S[key + 'V']) * h;
      S[key] += S[key + 'V'] * h;
    }
  }

  // piscadas em intervalos irregulares (3 a 6 s): fecha rápido, abre um pouco mais devagar
  function blinkAt(t) {
    const slot = Math.floor(t / 3.1), u = t - slot * 3.1;
    const start = 0.3 + ((slot * 7919) % 100) / 100 * 2.2;
    if (slot % 3 === 2) return 0;
    const x = u - start;
    if (x < 0 || x > 0.26) return 0;
    return x < 0.08 ? x / 0.08 : 1 - (x - 0.08) / 0.18;
  }
  // Agenda das ações de parado. É gerada sob demanda e é sempre a mesma para o mesmo relógio (o sorteio usa hash),
  // mas não é um ciclo: cada ação tem duração um pouco diferente e é seguida de um intervalo de 1,6 a 6 s; de vez em
  // quando entra uma pausa longa, só com respiração e olhar. A escolha nunca repete a anterior.
  const TL = [];
  const bags = {};
  function bag(b) {   // ordem da rodada b: embaralha e separa as repetições que ficaram coladas
    if (bags[b]) return bags[b];
    const o = PICK.map((id, i) => [hash(b * 31.7 + i * 7.3 + 5), id]).sort((x, y) => x[0] - y[0]).map((x) => x[1]);
    for (let i = 1; i < o.length; i++) if (o[i] === o[i - 1]) { const j = o.findIndex((id, n) => n > i && id !== o[i]); if (j > 0) [o[i], o[j]] = [o[j], o[i]]; }
    return (bags[b] = o);
  }
  const pickAt = (k) => { const n = PICK.length, id = bag(Math.floor(k / n))[k % n]; return k > 0 && id === TL[k - 1].id ? (id === 'look' ? 'glance' : 'look') : id; };
  function extendTo(t) {
    let last = TL[TL.length - 1];
    while (!last || last.t0 + last.dur + last.gap < t + 20) {
      const k = TL.length, id = pickAt(k);
      last = {
        id, k, t0: last ? last.t0 + last.dur + last.gap : 2.4, dur: ACTIONS[id] * (0.88 + 0.26 * hash(k + 3)),
        gap: 1.6 + 4.6 * hash(k + 71) ** 1.5 + (hash(k + 5) < 0.1 ? 5 : 0), side: hash(k + 13) > 0.5 ? 1 : -1,
      };
      TL.push(last);
    }
  }
  let tlI = 0;
  function actionAt(t) {
    if (t < 0) return null;
    extendTo(t);
    while (tlI > 0 && TL[tlI].t0 > t) tlI--;
    while (tlI < TL.length - 1 && TL[tlI + 1].t0 <= t) tlI++;
    const e = TL[tlI], u = (t - e.t0) / e.dur;
    return u < 0 || u > 1 ? null : { id: e.id, u, k: e.k, side: e.side };
  }

  // Filamentos: cinco pontos do corpo (cabeça, peito, quadril, meio e ponta da cauda) têm cada um um "seguidor"
  // preso por uma mola frouxa. Quando o corpo se mexe, o seguidor fica para trás, passa um pouco do ponto e assenta.
  // A distância entre os dois é para onde os filamentos daquela região são empurrados (espaço do dino, m).
  // Não há vento: parado o corpo, a plumagem para.
  const FUR = [J.head, J.spineTop, J.hip, J.tail[2], J.tail[5]].map((j, i) => j && {
    bone: j.bone, x: dinoPos(j.bone).x, p: new THREE.Vector3(), q: null, v: new THREE.Vector3(), out: new THREE.Vector3(), max: [0.035, 0.035, 0.035, 0.05, 0.07][i],
  }).filter(Boolean);
  function stepFur(dt, snap) {
    for (const f of FUR) {
      f.p.setFromMatrixPosition(f.bone.matrixWorld).applyMatrix4(_inv);
      if (!f.q || snap) { f.q = f.p.clone(); f.v.set(0, 0, 0); }
      const n = Math.max(1, Math.ceil(dt * 120)), h = dt / n, w = 9.5, z = 0.42;
      for (let i = 0; i < n; i++) {
        f.v.x += (w * w * (f.p.x - f.q.x) - 2 * z * w * f.v.x) * h; f.v.y += (w * w * (f.p.y - f.q.y) - 2 * z * w * f.v.y) * h; f.v.z += (w * w * (f.p.z - f.q.z) - 2 * z * w * f.v.z) * h;
        f.q.addScaledVector(f.v, h);
      }
      f.out.subVectors(f.q, f.p).multiplyScalar(0.45);
      f.out.x -= 0.012 * G.v;                       // andando, o ar empurra de leve para trás
      f.out.clampLength(0, f.max);
    }
  }

  // t: relógio em s; dt: passo em s (0 = só reaplica a pose); o: ver cabeçalho
  function update(t, dt, o) {
    dt = clamp(dt || 0, 0, 0.05);
    const idle = o.idle ?? 1, r = o.roar || 0, sniff = o.sniff || 0, grab = o.grab || 0;
    _inv.copy(wrap.matrixWorld).invert();

    stepGait(dt, idle ? (o.speed || 0) * (1 + 0.07 * wob(t * 0.55, 81)) : 0);
    const wk = smooth(0.06, 1.0, G.v);            // 0 parado, 1 andando
    const still = idle * (1 - wk);
    const calm = still * (1 - smooth(0.15, 0.5, r));
    const rHigh = smooth(0.55, 1, r);
    // respiração: o ritmo acelera depois de esforço (andar, rugir) e volta devagar; nunca é exatamente regular
    const effT = clamp(0.9 * wk + 0.7 * r, 0, 1);
    // Cada respiração é diferente: umas mais curtas, outras mais fundas, e a pausa depois de expirar muda de tamanho.
    // De vez em quando vem uma respiração bem funda (um suspiro).
    const bN = Math.floor(S.bph), bU = S.bph - bN;
    const sigh = hash(bN * 1.9 + 4) > 0.9 ? 1 : 0;
    if (dt > 0) {
      S.effort = lag(S.effort, effT, effT > S.effort ? 1.2 : 5, dt);
      const pace = (0.84 + 0.36 * hash(bN * 2.3 + 1)) * (bU > 0.86 ? lerp(0.45, 1.5, hash(bN * 3.1 + 7)) * (1 + 1.5 * S.effort) : 1) * (sigh ? 0.72 : 1);
      S.bph += dt / lerp(3.7, 2.2, S.effort) * pace;
    } else if (o.snap) { S.effort = effT; S.bph = t / 3.9; }
    const bw = breathWave(S.bph) * idle, bw2 = breathWave(S.bph - 0.07) * idle;   // o abdômen vem um pouco depois do tórax
    const bdepth = (0.62 + 0.3 * hash(bN * 1.3 + 2) + 0.5 * sigh) * (1 - 0.3 * S.effort) + 0.42 * S.effort;
    const breath = (2 * bw - idle);                                                // -1..1, para o que acompanha a respiração
    const growl = rHigh * (Math.sin(t * 23) * 0.6 + Math.sin(t * 31 + 1) * 0.4);   // vibração do rugido, baixa e curta

    // Relógios do repouso. Os pequenos movimentos de equilíbrio, cabeça e cauda não correm no relógio de parede:
    // de tempos em tempos o relógio deles desacelera até parar e depois retoma. É isso que cria as pausas, em que
    // ele fica só respirando e piscando. A cauda tem o seu, para não parar sempre junto com o resto.
    if (dt > 0) { S.ti += dt * 1.2 * smooth(-0.36, 0.06, wob(t * 0.47, 131)); S.tj += dt * 1.25 * smooth(-0.3, 0.1, wob(t * 0.39, 137)); }
    else if (o.snap) { S.ti = t * 0.72; S.tj = t * 0.75; }
    const ti = S.ti, tj = S.tj;
    // as poses de repouso da cabeça e da cauda voltam devagar depois que ele para (e saem depressa quando arranca):
    // sem isso a cauda dava um chicote a cada parada
    if (dt > 0) S.rest = lag(S.rest, still, still > S.rest ? 1.3 : 0.4, dt); else if (o.snap) S.rest = still;
    const rest = S.rest;

    // sacudida do corpo (ato das penas): uma passada lenta de ~1,3 s a cada 7,5 s
    const ru = ((t + 5.5) % 7.5) / 1.3;
    const ruf = (o.ruffle || 0) * idle * (ru < 1 ? Math.sin(Math.PI * ru) ** 2 : 0);
    const rufA = ruf * Math.sin(t * 19), rufB = ruf * Math.sin(t * 19 - 1.1), rufC = ruf * Math.sin(t * 19 - 2.2);

    // ---------- ação espontânea ----------
    // Só começa uma ação com ele já parado há um instante, e nunca "entra pelo meio" de uma em andamento.
    // Se ele volta a andar durante a ação, ela se desfaz aos poucos (gate), sem corte seco.
    const A = { yaw: 0, pitch: 0, tilt: 0, jaw: 0, lid: 0, swish: 0, dy: 0, dz: 0, roll: 0, down: 0, sniff: 0, eye: 0 };
    const open = calm > 0.4 && G.stillT > 1.0;
    if (dt > 0) S.gate = lag(S.gate, open ? 1 : 0, 0.3, dt); else if (o.snap) S.gate = open ? 1 : 0;
    let act = actionAt(t);
    if (act && act.k !== S.actK) { if (open && (act.u < 0.08 || o.snap)) S.actK = act.k; else act = null; }
    if (o.force) { act = { id: o.force.id, u: o.force.u, side: o.force.side || 1, k: -1 }; S.gate = 1; }   // testes: força uma ação num instante
    if (act) {
      const { id, u, side } = act, k = S.gate * calm * (1 - sniff), bell = Math.sin(Math.PI * u);
      if (id === 'look') {
        // observa o entorno: os olhos vão primeiro, a cabeça segue, ele fica um tempo, ajusta o olhar e volta
        const p = pulse(u, 0.2, 0.8), more = 0.13 * smooth(0.44, 0.5, u) * (1 - smooth(0.72, 0.8, u));
        // ao voltar, a cabeça passa um pouco do ponto e assenta
        A.yaw = side * (0.6 * p + more - 0.035 * bump(u, 0.95, 0.035)) * k; A.pitch = 0.05 * p * k; A.tilt = side * 0.07 * p * k;
        A.eye = side * (smooth(0, 0.06, u) * (1 - smooth(0.16, 0.26, u)) - smooth(0.74, 0.79, u) * (1 - smooth(0.9, 1, u))) * k;
        A.lid = smooth(0.0, 0.015, u) * (1 - smooth(0.02, 0.05, u)) * k;          // pisca ao mudar o olhar
      } else if (id === 'glance') {
        const p = pulse(u, 0.25, 0.6);
        A.yaw = side * 0.2 * p * k; A.tilt = -side * 0.03 * p * k; A.eye = side * smooth(0, 0.12, u) * (1 - smooth(0.5, 0.7, u)) * k;
      } else if (id === 'sniffGround') {
        // fareja o chão: baixa a cabeça, aspira em rajadas curtas varrendo de um lado para o outro e ergue de novo
        A.down = pulse(u, 0.27, 0.75) * k;
        A.sniff = smooth(0.22, 0.32, u) * (1 - smooth(0.66, 0.76, u)) * k;
        A.yaw = side * 0.15 * Math.sin((u - 0.27) * 10) * A.sniff;
        // a boca entreabre por um instante no meio e, ao erguer a cabeça, dá duas mexidas curtas (como quem engole)
        A.jaw = (0.17 * smooth(0.46, 0.5, u) * (1 - smooth(0.55, 0.61, u)) + 0.1 * bump(u, 0.83, 0.022) + 0.07 * bump(u, 0.9, 0.018)) * k;
      } else if (id === 'sniffAir') {
        const p = pulse(u, 0.26, 0.72) * k;
        A.pitch = 0.2 * p; A.yaw = side * 0.12 * p; A.sniff = smooth(0.2, 0.32, u) * (1 - smooth(0.62, 0.74, u)) * k;
        A.jaw = 0.14 * smooth(0.42, 0.48, u) * (1 - smooth(0.56, 0.64, u)) * k;
      } else if (id === 'settle') {
        // ajuste de postura: abaixa um pouco, joga o peso para um lado e volta
        const p = pulse(u, 0.3, 0.7) * k;
        A.dy = -0.05 * p; A.dz = side * 0.05 * p; A.roll = side * 0.02 * p; A.pitch = -0.04 * p;
      } else if (id === 'swish') { A.swish = bell * S.gate * calm; }
      else if (id === 'yawn') { const p = pulse(u, 0.32, 0.68) * k; A.jaw = 0.58 * p; A.pitch = 0.11 * p; A.tilt = side * 0.07 * p; A.lid = smooth(0.3, 0.8, p); }
      else if (id === 'step' && act.k !== G.stepSlot && hasLegs && dt > 0 && G.feet.every((f) => f.planted)) {
        // troca um pé de lugar: um passo curto, no mesmo mecanismo da caminhada
        G.stepSlot = act.k;
        const f = G.feet[side > 0 ? 1 : 0], xr = f.x - f.L.home.x;
        startSwing(f, clamp(xr + (hash(act.k + 5) - 0.4) * 0.3, -0.22, 0.3), 0.66, 0.13, false, f.L.home.z + (hash(act.k + 8) - 0.5) * 0.08);
      }
    }
    // farejar: rajadas de aspirações curtas (as narinas abrem e a cabeça dá pequenos trancos), com pausas entre elas
    const snK = Math.max(sniff * idle, A.sniff);
    const snPulse = Math.max(0, Math.sin(t * 19.5)) ** 2 * smooth(-0.2, 0.5, Math.sin(t * 2.7 + 1));

    // ---------- quadril ----------
    // alvo vindo da passada: sobe no meio do passo, pende para a perna de apoio, gira adiantando o lado que avança
    const air = G.feet.find((f) => !f.planted);
    const sg = air ? air.L.side : G.lastSide, p = air ? air.p : 1, g = air ? Math.sin(Math.PI * p) : 0;
    const stepK = air && !air.walkStep ? 0.45 : wk;                 // passo no lugar também desloca o peso, menos
    // Parado: o peso fica um tempo numa perna, passa para a outra e fica de novo (não é um vai e vem contínuo).
    const shift = (0.7 * drift(ti, 5.1, 3, 1.7) + 0.3 * drift(ti, 8.3, 13, 2.2)) * still;
    // recebe o peso: logo depois de cada pouso o corpo cede um pouco e volta (o pico vem ~0,1 s depois do contato)
    const accept = wk * (G.land / 0.1) * Math.exp(1 - G.land / 0.1);
    // Peso de um lado para o outro na caminhada: o corpo vai para a perna de apoio ANTES de o outro pé sair do chão
    // e, no fim do passo, já começa a ir para o pé que vai pousar.
    const lean = air ? -sg * lerp(1, -0.35, smooth(0.55, 1, p)) : sg * 0.7;
    const tgtY = wk * (-0.062 + 0.092 * g) - 0.034 * accept + (-0.012 - 0.008 * breath - 0.012 * Math.abs(shift)) * idle - 0.065 * r - 0.04 * sniff + A.dy - 0.15 * A.down - 0.015 * ruf + (air && !air.walkStep ? 0.012 * g : 0);
    const tgtZ = stepK * 0.07 * lean + 0.085 * shift + A.dz;
    const tgtYaw = wk * sg * 0.1 * (air ? 2 * smooth(0, 1, p) - 1 : 1) + 0.03 * shift;
    const tgtRoll = wk * sg * 0.045 * g + 0.03 * shift * (1 - 0.5 * r) + rufA * 0.025 + A.roll;
    // inclina para a frente ao arrancar e para trás ao frear
    const tgtPitch = wk * (-0.026 + 0.022 * g) - 0.018 * accept + clamp(-0.015 * G.acc, -0.035, 0.035) - 0.03 * r - 0.03 * sniff - 0.2 * A.down + 0.014 * drift(ti, 6.7, 3, 2.0) * still;
    if (dt > 0) {
      spring('py', tgtY, 13, dt, 0.82); spring('pz', tgtZ, 8.5, dt, 0.8); spring('yaw', tgtYaw, 11, dt, 0.86);
      spring('roll', tgtRoll, 10, dt, 0.8); spring('pitch', tgtPitch, 8, dt, 0.72);
    } else if (o.snap) { S.py = tgtY; S.pz = tgtZ; S.yaw = tgtYaw; S.roll = tgtRoll; S.pitch = tgtPitch; }
    const px = 0.04 * drift(ti, 7.9, 7, 2.2) * still + 0.05 * r;
    move(J.hip, px, S.py, S.pz);
    rot(J.hip, S.roll, S.yaw, S.pitch);
    if (hasLegs) {
      refresh(J.hip.bone);
      for (const f of G.feet) {
        solveLeg(f.L, f, f.dm, f.toe, S.pitch, S.roll, S.yaw);
        // dedos: espalham ao receber o peso, abrem de novo no impulso e relaxam no ar
        const loadK = f.load * (f.since / 0.09) * Math.exp(1 - f.since / 0.09);
        const open = f.planted ? 0.12 * clamp(-(f.x - f.L.home.x - STANCE_SHIFT) / 0.8, 0, 1) + 0.07 * loadK : -0.3 * Math.sin(Math.PI * f.p);
        f.L.toes.forEach((j, n) => rot(j, 0, (n - 1) * -f.L.side * 0.1 * (f.planted ? loadK : 0), open));
      }
    }

    // ---------- atrasos: o que vem depois do quadril chega um pouco depois ----------
    // Do quadril para a frente (tronco, pescoço, cabeça) e para trás (cauda), cada segmento recebe o movimento do
    // anterior com um pequeno atraso. Para a frente o movimento também vai diminuindo, e a cabeça quase não gira:
    // é o resto do corpo que se mexe por baixo dela. O que vem de uma ação (baixar para farejar) não entra aqui.
    const pitchAct = -0.2 * A.down, pitchDyn = S.pitch - pitchAct;
    if (dt > 0) {
      S.lagY = lag(S.lagY, S.py, 0.2, dt); S.lagYaw = lag(S.lagYaw, S.yaw, 0.22, dt); S.lagZ = lag(S.lagZ, S.pz, 0.28, dt);
      S.armY = lag(S.armY, S.py, 0.11, dt);
      S.cy[0] = S.yaw + S.pz * 0.5; S.cp[0] = pitchDyn - S.py * 0.5;
      for (let i = 1; i < 7; i++) { const tau = 0.07 + 0.035 * i; S.cy[i] = lag(S.cy[i], S.cy[i - 1], tau, dt); S.cp[i] = lag(S.cp[i], S.cp[i - 1], tau, dt); }
      S.fy[0] = S.yaw; S.fr[0] = S.roll; S.fp[0] = pitchDyn;
      for (let i = 1; i < 6; i++) { const tau = 0.05 + 0.012 * i; S.fy[i] = lag(S.fy[i], S.fy[i - 1], tau, dt); S.fr[i] = lag(S.fr[i], S.fr[i - 1], tau, dt); S.fp[i] = lag(S.fp[i], S.fp[i - 1], tau, dt); }
    } else if (o.snap) { for (let i = 0; i < 6; i++) { S.fy[i] = S.yaw; S.fr[i] = S.roll; S.fp[i] = pitchDyn; } }
    // quanto de cada giro do quadril chega a: tronco 1, tronco 2, base do pescoço, meio do pescoço, cabeça
    const KY = [1, 0.5, 0.26, 0.18, 0.2, 0.24], KR = [1, 0.55, 0.3, 0.15, 0.08, 0.03], KP = [1, 0.55, 0.28, 0.14, 0.06, 0];
    const cY = (i) => KY[i] * S.fy[i] - KY[i - 1] * S.fy[i - 1], cR = (i) => KR[i] * S.fr[i] - KR[i - 1] * S.fr[i - 1], cP = (i) => KP[i] * S.fp[i] - KP[i - 1] * S.fp[i - 1];
    // a cabeça segura a altura e a posição de lado: o pescoço compensa o sobe e desce e o vai e vem do quadril, com atraso
    const holdY = clamp((S.lagY - S.py) * 1.9, -0.12, 0.12), holdZ = clamp((S.pz - S.lagZ) * 0.5, -0.06, 0.06);

    // ---------- tronco ----------
    const und = 0.024 * wob(ti * 0.5, 11) * still;
    rot(J.spine1, rufA * 0.04 + cR(1), cY(1) + und, 0.03 * r + 0.006 * breath - 0.03 * sniff - 0.05 * A.down - pitchAct * 0.4 + cP(1));
    rot(J.spine2, rufB * 0.05 + cR(2), cY(2) - und, 0.04 * r - 0.04 * sniff - 0.07 * A.down + 0.005 * breath + cP(2));
    // respiração visível: o tórax abre para os lados e o abdômen acompanha logo depois (chaves de forma do modelo);
    // rugido e bocejo enchem o peito; ao farejar e ao inspirar as narinas abrem
    morph('chest', clamp((0.08 + 0.92 * bw) * bdepth + 0.5 * rHigh + 0.4 * A.jaw + 0.25 * ruf, 0, 1.4));
    morph('belly', clamp((0.08 + 0.92 * bw2) * bdepth * 0.9 + 0.2 * rHigh, 0, 1.4));
    morph('nostril', o.nostril ?? clamp(idle * 0.3 * smooth(0, 0.16, bU) * (1 - smooth(0.24, 0.4, bU)) + snK * (0.25 + 0.75 * snPulse) + 0.6 * rHigh, 0, 1));

    // ---------- olhar ----------
    let ty = 0, tp = 0;
    if (o.look) {
      const dx = o.look.x - headPos.x, dy = o.look.y - headPos.y, dz = o.look.z - headPos.z;
      const flat = Math.hypot(dx, dz) || 1;
      const k = (o.lookK ?? 0.5) * smooth(-0.35, 0.45, dx / flat);     // só vira quando o alvo está mais ou menos à frente
      ty = clamp(Math.atan2(-dz, dx), -1.15, 1.15) * k;
      tp = clamp(Math.atan2(dy, flat), -0.65, 0.5) * k;
    }
    if (dt > 0) { S.gazeY = lag(S.gazeY, ty, 0.45, dt); S.gazeP = lag(S.gazeP, tp, 0.45, dt); } else if (o.snap) { S.gazeY = ty; S.gazeP = tp; }
    // pequenas mudanças de direção da cabeça: escolhe um ponto, vai devagar e fica
    const quiet = Math.min(calm, rest) * (1 - 0.8 * sniff);
    const dYaw = 0.14 * drift(ti, 3.4, 5, 0.75) * quiet, dPitch = 0.055 * drift(ti, 4.6, 17, 0.85) * quiet, dTilt = 0.065 * drift(ti, 5.7, 29, 0.95) * quiet;
    const gy = S.gazeY + A.yaw, gp = S.gazeP + A.pitch;

    // ---------- pescoço e cabeça ----------
    // o balanço lento do pescoço vem em fases: um tempo mexendo, um tempo parado
    const nod = 0.032 * wob(ti * 0.6, 2) * idle + 0.008 * breath;
    const snf = snK * 0.016 * (snPulse - 0.3);
    rot(J.neck1, rufB * 0.04 + cR(3), gy * 0.22 + cY(3) + holdZ * 0.55, nod + gp * 0.3 + 0.13 * r - 0.46 * A.down + cP(3) + holdY * 0.55);
    rot(J.neck2, rufC * 0.05 + cR(4), gy * 0.26 + cY(4) + holdZ * 0.45, nod * 0.6 + gp * 0.3 + 0.12 * r - 0.44 * A.down + cP(4) + holdY * 0.45);
    rot(J.neckTop, dTilt * 0.3 + A.tilt * 0.4, gy * 0.2 + dYaw * 0.3, gp * 0.15 + 0.05 * r + dPitch * 0.4 - 0.2 * A.down);
    rot(J.head, dTilt + A.tilt + growl * 0.014 + rufC * 0.07 + cR(5), gy * 0.32 + dYaw + growl * 0.012 + cY(5) - holdZ, gp * 0.25 + dPitch + 0.1 * r + growl * 0.006 + snf - 0.06 * A.down - pitchAct * 0.5 + cP(5) - holdY);
    // no ato 3 (fareja a pessoa) a boca entreabre por um instante a cada poucos segundos
    const sniffPart = sniff * idle * 0.15 * pulse(((t + 2) % 6.3) / 1.0, 0.3, 0.6) * (((t + 2) % 6.3) < 1.0 ? 1 : 0);
    const jawOpen = clamp(r + Math.max(A.jaw, sniffPart) * (1 - r), 0, 1);
    // boca: fechada no repouso. Abre no rugido e no bocejo e, por um instante, ao farejar
    const JC = o.jawClose ?? JAW_CLOSE;
    rot(J.jaw, 0, 0, JC - (JC + JAW_OPEN) * jawOpen + growl * 0.012);
    S.jawOut = jawOpen; S.breathOut = bw * bdepth;
    J.tongue.forEach((j, i) => rot(j, 0, rHigh * 0.04 * Math.sin(t * 6 + i) + A.jaw * 0.04 * Math.sin(t * 2 + i), -0.05 * jawOpen * (i + 1) * 0.5));

    // pálpebras: piscada, olhos semicerrados no rugido e fechados no bocejo
    const lid = Math.max(idle * blinkAt(t), 0.5 * rHigh, ruf * 0.7, A.lid);
    for (const L of J.lids) { move(L.up, 0, -LID_UP * lid, 0); move(L.low, 0, LID_LOW * lid, 0); }
    // olhos: pequenos saltos de direção (sacadas); nas ações de olhar eles vão na frente da cabeça
    const eF = clamp(0.55 * sacc(t, 1.7, 51) * quiet + A.eye + S.gazeY * 0.3, -1, 1), eU = 0.45 * sacc(t, 2.3, 57) * quiet + S.gazeP * 0.4;
    for (const E of eyes) rot(E.j, -E.side * eU * 0.1, eF * 0.16, 0);

    // ---------- cauda: contrapeso do quadril, com atraso que cresce até a ponta ----------
    // parado, a cauda assume uma curva suave para um lado, fica, e de tempos em tempos muda; por cima disso vem um
    // balanço lento que aparece e some (fases), em vez de um vai e vem sem fim
    const curl = 0.08 * drift(tj, 6.9, 23, 2.6) * rest;
    J.tail.forEach((j, i) => {
      // a base da cauda desfaz boa parte do giro do quadril: ela fica na linha do corpo (contrapeso), em vez de varrer como um pêndulo
      const follow = -TAIL_Y * (S.cy[i] - S.cy[i + 1]) - (i === 0 ? S.yaw * 0.42 : i === 1 ? S.yaw * 0.26 : 0);
      const slow = idle * (0.09 * wob(tj * 0.68 - i * 0.5, 31) + 0.04 * wob(tj * 0.31 - i * 0.3, 37)) * (0.4 + 0.6 * rest);
      const sw = follow + slow + curl + ruf * 0.035 * Math.sin(t * 19 - 1.5 - i * 0.8) + A.swish * 0.13 * Math.sin(t * 4.2 - i * 0.85);
      const up = TAIL_P * (S.cp[i] - S.cp[i + 1]) + idle * 0.02 * wob(tj * 0.55 - i * 0.4, 43) + 0.014 * drift(tj, 8.7, 47, 2.6) * rest - 0.03 * r + 0.012 * sniff + 0.01 * A.swish + 0.012 * wk + 0.036 * A.down;   // ao baixar a cabeça a cauda não sobe junto: fica quase nivelada
      rot(j, i === 0 ? -S.roll * 0.6 : 0, sw, up);      // a base da cauda desfaz parte da inclinação do quadril
    });

    // ---------- braços e mãos ----------
    // Repouso: braço curto recolhido junto ao peito, cotovelo dobrado, punho solto e os três dedos levemente curvados
    // e separados (palmas viradas uma para a outra, como num terópode; nada de mão espalmada nem gesto de gente).
    // Andando: só um contrapeso pequeno. Parado: punho e dedos mudam de leve, cada mão no seu tempo.
    // "grab" (ato das garras): o braço avança um pouco e os dedos abrem e fecham um depois do outro.
    const AP = o.armPose ? { ...ARM, ...o.armPose } : ARM;
    J.arms.forEach((Arm, n) => {
      const sgn = n ? -1 : 1, sd = Arm.side;
      const foot = G.feet.find((f) => f.L.side === Arm.side);
      const bal = foot ? -0.06 * wk * clamp((foot.x - foot.L.home.x - STANCE_SHIFT) / 0.7, -1, 1) : 0;   // recua quando a perna do mesmo lado avança
      const swing = clamp((S.armY - S.py) * 1.1, -0.06, 0.06) - sgn * (S.yaw - S.lagYaw) * 0.35 + bal;
      const ease = 1 - 0.55 * grab;                                                    // no ato das garras a pose recolhida abre
      const wristV = still * 0.11 * drift(ti, 5.3, 201 + n * 7, 1.5), curlV = still * 0.13 * drift(ti, 4.1, 211 + n * 7, 1.3);
      rot(Arm.clav, 0, 0, bal * 0.4 + 0.012 * breath + 0.02 * r);
      rot(Arm.upper, sd * AP.tuck, 0, AP.upper * ease + swing + 0.1 * r + 0.3 * grab + 0.02 * still * drift(ti, 7.3, 221 + n, 2));
      rot(Arm.lower, 0, sd * AP.inward, AP.lower * ease + swing * 0.5 - 0.12 * r + 0.1 * grab);
      rot(Arm.wrist, 0, 0, AP.wrist * ease + wristV + 0.1 * grab);
      Arm.fingers.forEach((F, f) => {
        // abre e fecha: cada dedo no seu tempo (o primeiro puxa, os outros seguem); parado, um dedo ou outro mexe sozinho
        const cyc = grab * (0.5 + 0.5 * Math.sin(t * 1.7 + sgn * 0.9 - f * 0.55));
        const fid = still * 0.22 * Math.max(0, wob(ti * 0.7, 40 + sgn * 9 + f * 13)) ** 2;
        const curl = AP.curl[f] * (1 - 0.75 * grab) + curlV * (0.7 + 0.3 * f) + 0.6 * cyc + fid + 0.1 * r;
        rot(F[0], 0, 0, (1 - f) * (AP.spread + 0.07 * grab * (1 - cyc)) - curl * 0.55);
        rot(F[1], 0, 0, -curl * 0.9);
        rot(F[2], 0, 0, -curl * 0.8);
      });
    });

    // ---------- filamentos: empurrados para trás pela velocidade e para o lado oposto de cada movimento do quadril ----------
    wrap.updateMatrixWorld(true);
    stepFur(dt, dt === 0 && o.snap);
    if (rig.debug) rig.debug(J, rot, move, G, S);
  }

  // roda a animação "por baixo dos panos" (testes e capturas): anda "seconds" a "speed" m/s a partir de t0
  function simulate(seconds, speed, o = {}, t0 = 0) {
    const n = Math.round(seconds * 60);
    for (let i = 0; i < n; i++) update(t0 + i / 60, 1 / 60, { ...o, speed: typeof speed === 'function' ? speed(i / 60) : speed });
    return t0 + n / 60;
  }

  // pontos de referência para as medições de tools/check: tudo no espaço do dino, em metros
  const mark = (j, x, y, z) => j && { bone: j.bone, local: j.bone.worldToLocal(wrap.localToWorld(new THREE.Vector3(x, y, z))) };
  const marks = { nose: mark(J.head, 4.5, 2.6, 0), tailTip: mark(J.tail[5], -4.5, 2.35, 0) };
  const _p = new THREE.Vector3(), _o = new THREE.Vector3();
  const where = (bone, local) => { _p.copy(local || _o).applyMatrix4(bone.matrixWorld); wrap.worldToLocal(_p); return [_p.x, _p.y, _p.z]; };
  function probe() {
    wrap.updateMatrixWorld(true);
    return {
      v: G.v, travel: G.travel, hipYaw: S.yaw, hipRoll: S.roll, hipPitch: S.pitch, jaw: S.jawOut || 0, breath: S.breathOut || 0,
      hip: where(J.hip.bone), chest: where(J.spineTop.bone), head: where(J.head.bone), nose: where(marks.nose.bone, marks.nose.local),
      tailMid: where(J.tail[2].bone), tailTip: where(marks.tailTip.bone, marks.tailTip.local),
      feet: G.feet.map((f) => ({ p: where(f.L.ball.bone), planted: f.planted, gx: f.gx, side: f.L.side })),
    };
  }

  const rig = {
    probe,
    update, simulate, headPos, actionAt, fur: FUR, debug: null, timeline: (t) => { extendTo(t); return TL; },
    get travel() { return G.travel; }, get speed() { return G.v; },
    // pés no espaço do dino: posição da base dos dedos e altura acima do chão (para sombras e testes)
    feet: () => G.feet.map((f) => ({ x: f.x, z: f.z, h: f.h, planted: f.planted, gx: f.gx, side: f.L.side })),
    bones: { ball: legs.map((L) => L && L.ball.bone), head: J.head && J.head.bone },
    geom: legs.map((L) => L && ({ L1: L.L1, L2: L.L2, L3: L.L3, a1: L.a1, a2: L.a2, a3: L.a3, home: L.home.toArray(), hip: dinoPos(L.thigh.bone).toArray() })),
    found: { legs: hasLegs, tail: J.tail.filter(Boolean).length, arms: J.arms.length, eyes: eyes.length, clavicles: J.arms.filter((a) => a.clav).length, morphs: Object.keys(morphs) },
  };
  return rig;
}
