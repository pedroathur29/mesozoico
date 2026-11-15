import * as THREE from 'three';

// Animação procedural do dino (o .glb tem esqueleto, mas nenhuma animação pronta).
// Tudo é calculado por código a cada quadro, em cima da pose de repouso.
//
// Parado, ele nunca fica imóvel:
//   - respira, passa o peso de uma perna para a outra (os pés ficam plantados) e balança a cauda;
//   - move a cabeça em saltos curtos, como uma ave, pisca e acompanha a câmera ou o ponteiro;
//   - de tempos em tempos faz uma ação espontânea: olha para o lado, abaixa a cabeça, fareja o ar,
//     abana a cauda, troca um pé de lugar, sacode a cabeça ou boceja.
// Parâmetros que vêm da rolagem (src/acts.js) e do loop (src/main.js):
//   walk (0..1) caminhada, com a fase ligada à rolagem      roar (0..1) rugido
//   sniff (0..1) fareja o alvo do olhar (a pessoa do ato 3)  ruffle (0..1) sacode as penas
//   grab (0..1) estende os braços e mexe as garras           spin: giro do corpo (cauda e pescoço ficam para trás)
//
// Convenção: os ângulos são dados no "espaço do dino" (nariz em +X, cima em +Y, lado em +Z):
//   rz > 0  levanta o que aponta para a frente (cabeça sobe) e joga a perna para a frente
//   ry > 0  vira o nariz para -Z        rx  rola em torno do eixo do corpo
// A função rot() converte isso para o eixo local de cada osso, então não importa como o osso foi modelado.

const _q = new THREE.Quaternion(), _d = new THREE.Quaternion(), _e = new THREE.Euler(), _v = new THREE.Vector3();
const TAU = Math.PI * 2;
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const hash = (n) => { const v = Math.sin(n * 127.1 + 311.7) * 43758.5453; return v - Math.floor(v); };
// ruído suave em -1..1 (soma de senos com frequências que não se repetem juntas)
const wob = (x, s = 0) => Math.sin(x + s) * 0.5 + Math.sin(x * 2.13 + s * 1.7 + 1.3) * 0.3 + Math.sin(x * 4.57 + s * 2.9 + 4.1) * 0.2;
// sobe, segura e desce (0..1) ao longo de u = 0..1
const pulse = (u, a = 0.25, b = 0.75) => smooth(0, a, u) * (1 - smooth(b, 1, u));
// valor que salta para um novo alvo a cada "period" segundos e fica parado (movimento de cabeça de ave)
function dart(t, period, seed) {
  const k = Math.floor(t / period), u = t - k * period;
  const prev = hash(k - 1 + seed) * 2 - 1, cur = hash(k + seed) * 2 - 1;
  return prev + (cur - prev) * smooth(0, 0.2, u);
}

// Ângulos (rad) da mandíbula: na pose de repouso do modelo a boca já vem entreaberta.
const JAW_CLOSE = 0.2;
const JAW_OPEN = 0.42;
// Quanto as pálpebras se deslocam (m) para fechar o olho.
const LID_UP = 0.05, LID_LOW = 0.022;
// Geometria da perna, medida no modelo (m por rad): quanto o pé anda quando a coxa gira, e quanto sobe quando a perna dobra.
const LEG_SWING = 2.25, LEG_FLEX = 0.78, HIP_HALF = 0.42;

// ações espontâneas: nome -> duração em s. Acontecem na ordem de ORDER, uma a cada SLOT segundos, e a lista se repete.
const ACTIONS = { look: 3.1, peck: 2.2, sniffAir: 2.6, swish: 1.8, step: 1.3, shake: 0.9, yawn: 3.0 };
const ORDER = ['look', 'step', 'sniffAir', 'swish', 'peck', 'look', 'shake', 'step', 'yawn', 'look', 'swish'];
const SLOT = 5.2;

export function createRig(wrap) {
  wrap.updateMatrixWorld(true);
  const wqi = wrap.getWorldQuaternion(new THREE.Quaternion()).invert();
  const wScale = wrap.getWorldScale(new THREE.Vector3()).x;
  const byName = {};
  wrap.traverse((o) => { if (o.isBone) byName[o.name] = o; if (o.isSkinnedMesh) o.frustumCulled = false; });
  const names = Object.keys(byName);

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
  };
  for (const s of ['l', 'r']) {
    J[s + 'Leg'] = {
      thigh: joint(new RegExp(`^${s}_HindLeg_Hip_\\d+$`)), shin: joint(new RegExp(`^${s}_HindLeg_Knee1_`)),
      meta: joint(new RegExp(`^${s}_HindLeg_Knee2_\\d+$`)), ankle: joint(new RegExp(`^${s}_HindLeg_Ankle_`)), ball: joint(new RegExp(`^${s}_HindLeg_Ball_`)),
      toes: [1, 2, 3].map((f) => joint(new RegExp(`^${s}_LegToe_0${f}_01_`))),
    };
    J[s + 'Arm'] = {
      upper: joint(new RegExp(`^${s}_FrontLeg_Hip_`)), lower: joint(new RegExp(`^${s}_FrontLeg_Knee_\\d+$`)), wrist: joint(new RegExp(`^${s}_FrontLeg_Ankle_`)),
      // três dedos, três falanges cada
      fingers: [1, 2, 3].map((f) => [1, 2, 3].map((k) => joint(new RegExp(`^${s}_WristToe_0${f}_0${k}_\\d+$`)))),
    };
  }
  // posição da cabeça em repouso, no espaço do dino (para calcular para onde olhar)
  const headPos = new THREE.Vector3(3.6, 2.7, 0);
  if (J.head) { J.head.bone.getWorldPosition(headPos); wrap.worldToLocal(headPos); }

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

  // Uma perna. ph/w: ciclo de caminhada; lift: levanta o pé (0..1) fora do ciclo;
  // ex: compensação para o pé ficar plantado enquanto o quadril se mexe { rx, rz, flex }.
  function leg(L, ph, w, lift, ex) {
    if (!L.thigh) return;
    const c = Math.cos(ph), s = Math.sin(ph);
    const up = w * Math.max(0, -s) + lift;                      // 0 no apoio, 1 no meio do balanço
    const push = w * Math.max(0, -c) * Math.max(0, s + 0.4);    // fim do apoio: o pé empurra o chão
    rot(L.thigh, ex.rx, 0, w * 0.36 * c + 0.16 * up + ex.rz + 0.91 * ex.flex);
    rot(L.shin, 0, 0, -0.62 * up - 0.1 * push - 2 * ex.flex);
    rot(L.meta, 0, 0, 0.55 * up + 0.22 * push + ex.flex);
    rot(L.ankle, 0, 0, 0.12 * up - 0.12 * push);
    rot(L.ball, -ex.rx, 0, -0.4 * up - 0.18 * push - ex.rz + 0.09 * ex.flex);   // desfaz a soma dos giros acima: a sola fica no chão
    L.toes.forEach((j) => rot(j, 0, 0, -0.25 * up + 0.2 * push));   // dedos relaxam no ar e abrem no empurrão
  }

  // piscadas em intervalos irregulares (3 a 6 s): fecha rápido, abre um pouco mais devagar
  function blinkAt(t) {
    const slot = Math.floor(t / 3.1), u = t - slot * 3.1;
    const start = 0.3 + ((slot * 7919) % 100) / 100 * 2.2;
    if (slot % 3 === 2) return 0;              // pula uma de vez em quando
    const x = u - start;
    if (x < 0 || x > 0.26) return 0;
    return x < 0.08 ? x / 0.08 : 1 - (x - 0.08) / 0.18;
  }

  // qual ação espontânea está em curso no instante t (ou null)
  function actionAt(t) {
    const k = Math.floor(t / SLOT), u0 = t - k * SLOT;
    const id = ORDER[((k % ORDER.length) + ORDER.length) % ORDER.length];
    const u = (u0 - (0.4 + hash(k + 71) * 1.5)) / ACTIONS[id];
    return u < 0 || u > 1 ? null : { id, u, side: k % 2 ? 1 : -1 };
  }

  // olhar suavizado (guarda o estado entre quadros)
  const gaze = { yaw: 0, pitch: 0 };

  // t em segundos; o = { walk, roar, phase, idle, sniff, ruffle, grab, spin, look: Vector3 no espaço do dino, lookK, snap }
  function update(t, o) {
    const w = clamp(o.walk || 0, 0, 1), r = o.roar || 0, ph = o.phase || 0, idle = o.idle ?? 1;
    const sniff = o.sniff || 0, grab = o.grab || 0, spin = o.spin || 0;
    const still = idle * (1 - w);                 // quanto ele está "parado" (ações e troca de peso só valem parado)
    const calm = still * (1 - smooth(0.15, 0.5, r));
    const breath = Math.sin(t * 1.45) * idle;
    const rHigh = smooth(0.55, 1, r);
    const shake = rHigh * Math.sin(t * 41) * 0.5 + rHigh * Math.sin(t * 57 + 1) * 0.5;

    // sacudida das penas: uma rajada de ~1,2 s a cada 5,2 s
    const ru = ((t + 4.4) % 5.2) / 1.2;
    const ruf = (o.ruffle || 0) * idle * (ru < 1 ? Math.sin(Math.PI * ru) ** 2 : 0);
    const rufA = ruf * Math.sin(t * 50), rufB = ruf * Math.sin(t * 50 - 1.3), rufC = ruf * Math.sin(t * 50 - 2.6);

    // ---------- ação espontânea ----------
    const A = { yaw: 0, pitch: 0, tilt: 0, jaw: 0, lid: 0, swish: 0, liftL: 0, liftR: 0, dz: 0, dy: 0, shk: 0 };
    const act = calm > 0.05 ? actionAt(t) : null;
    if (act) {
      const { id, u, side } = act, k = calm, bell = Math.sin(Math.PI * u);
      if (id === 'look') { A.yaw = side * 0.72 * pulse(u, 0.2, 0.74) * k * (1 - sniff); A.pitch = 0.05 * bell * k; A.tilt = side * 0.06 * bell * k; }
      else if (id === 'peck') { const p = pulse(u, 0.32, 0.6) * k * (1 - sniff); A.pitch = -0.42 * p; A.dy = -0.05 * p; A.jaw = 0.25 * smooth(0.42, 0.5, u) * (1 - smooth(0.5, 0.62, u)) * k; }
      else if (id === 'sniffAir') { const p = pulse(u, 0.25, 0.7) * k * (1 - sniff); A.pitch = 0.26 * p + 0.025 * Math.sin(t * 9) * p; A.yaw = side * 0.12 * p; }
      else if (id === 'swish') { A.swish = bell * k; }
      else if (id === 'step') { const up = bell * k; if (side > 0) A.liftR = up; else A.liftL = up; A.dz = -side * 0.07 * up; A.dy = 0.015 * up; }
      else if (id === 'shake') { A.shk = bell * k * (1 - sniff); }
      else if (id === 'yawn') { const p = pulse(u, 0.3, 0.68) * k * (1 - sniff); A.jaw = 0.62 * p; A.pitch = 0.13 * p; A.tilt = side * 0.09 * p; A.lid = smooth(0.3, 0.8, p); }
    }
    const shk = A.shk * Math.sin(t * 34);

    // ---------- olhar: vira a cabeça para o alvo (câmera, ponteiro ou a pessoa), só quando ele está à frente ----------
    let ty = 0, tp = 0;
    if (o.look) {
      const dx = o.look.x - headPos.x, dy = o.look.y - headPos.y, dz = o.look.z - headPos.z;
      const flat = Math.hypot(dx, dz) || 1;
      const k = (o.lookK ?? 0.5) * smooth(-0.35, 0.45, dx / flat);
      ty = clamp(Math.atan2(-dz, dx), -1.15, 1.15) * k;
      tp = clamp(Math.atan2(dy, flat), -0.65, 0.5) * k;
    }
    const ease = o.snap ? 1 : 0.07;
    gaze.yaw += (ty - gaze.yaw) * ease; gaze.pitch += (tp - gaze.pitch) * ease;
    // saltos curtos de cabeça (ave): a cabeça muda de alvo de repente e fica parada
    const quiet = calm * (1 - 0.8 * sniff);
    const dYaw = 0.14 * dart(t, 1.9, 5) * quiet, dPitch = 0.05 * dart(t, 2.6, 17) * quiet, dTilt = 0.09 * dart(t, 3.3, 29) * quiet;
    const gy = gaze.yaw - spin * 1.2 + A.yaw, gp = gaze.pitch + A.pitch;

    // ---------- corpo sobre os pés ----------
    // deslocamentos "parados" do quadril (os pés ficam plantados, as pernas compensam)
    const sway = wob(t * 0.23, 1) * still;                 // peso de um lado para o outro
    const sDz = 0.085 * sway + A.dz;
    const sDx = 0.045 * wob(t * 0.17, 7) * still + 0.06 * r;
    const sDy = -0.014 * idle - 0.014 * breath - 0.07 * r - 0.04 * sniff + A.dy - 0.02 * ruf;
    const sRoll = 0.03 * sway * (1 - 0.5 * r);              // a bacia inclina junto com o peso
    const sPitch = -0.03 * r - 0.03 * sniff + 0.012 * wob(t * 0.19, 3) * still;
    // deslocamentos do passo (sem compensação: é a própria caminhada)
    const bob = Math.cos(ph * 2);
    move(J.hip, sDx, sDy + w * 0.05 * bob, sDz + w * 0.045 * Math.sin(ph));
    rot(J.hip, sRoll + w * 0.04 * Math.sin(ph) + rufA * 0.03, w * 0.07 * Math.sin(ph) + 0.025 * sway, sPitch + w * 0.015 * Math.sin(ph * 2));
    const ex = (side) => ({
      rx: sDz / LEG_SWING - 0.95 * sRoll,
      rz: -sDx / LEG_SWING - 0.95 * sPitch,
      flex: -sDy / LEG_FLEX + side * HIP_HALF * sRoll / LEG_FLEX,
    });
    leg(J.lLeg, ph, w, A.liftL, ex(-1));
    leg(J.rLeg, ph + Math.PI, w, A.liftR, ex(1));

    // coluna: contrabalança o quadril (o tronco não tomba junto) e ondula de leve
    const und = 0.02 * wob(t * 0.4, 11) * still;
    rot(J.spine1, rufA * 0.05 - sRoll * 0.5, -w * 0.045 * Math.sin(ph) + gy * 0.06 + und, 0.03 * r + 0.008 * breath - 0.03 * sniff - sPitch * 0.4);
    rot(J.spine2, rufB * 0.07 - sRoll * 0.4, -w * 0.035 * Math.sin(ph) + gy * 0.08 - und, 0.04 * r - 0.04 * sniff + 0.006 * breath);
    // respiração: o peito incha; o osso seguinte desfaz a escala para pescoço e braços não incharem junto
    if (J.spine2 && J.spineTop) {
      const k = 1 + 0.028 * breath + 0.03 * rHigh + 0.02 * ruf + 0.03 * A.jaw;
      J.spine2.bone.scale.copy(J.spine2.restScale).multiplyScalar(k);
      J.spineTop.bone.scale.copy(J.spineTop.restScale).multiplyScalar(1 / k);
    }

    // ---------- pescoço e cabeça ----------
    const nod = 0.022 * wob(t * 0.47, 2) * idle + w * 0.035 * Math.cos(ph * 2 + 1) + 0.012 * breath;
    const snf = sniff * idle * 0.03 * Math.sin(t * 6.5) * (0.5 + 0.5 * Math.sin(t * 0.9));
    rot(J.neck1, rufB * 0.05 + sRoll * 0.3, gy * 0.22 + shk * 0.03, nod + gp * 0.3 + 0.13 * r - w * 0.02 * bob);
    rot(J.neck2, rufC * 0.07, gy * 0.26 + shk * 0.05, nod * 0.6 + gp * 0.3 + 0.12 * r);
    rot(J.neckTop, dTilt * 0.3 + A.tilt * 0.4, gy * 0.2 + dYaw * 0.3 + shk * 0.07, gp * 0.15 + 0.05 * r + dPitch * 0.4);
    rot(J.head,
      dTilt + A.tilt + shake * 0.035 + rufC * 0.1 + A.shk * 0.1 * Math.sin(t * 34 + 1.2),
      gy * 0.32 + dYaw + shake * 0.03 + shk * 0.13,
      -0.035 * w * bob + gp * 0.25 + dPitch + 0.1 * r + shake * 0.012 + snf);
    const jawOpen = clamp(r + A.jaw * (1 - r), 0, 1);
    rot(J.jaw, 0, 0, JAW_CLOSE - (JAW_CLOSE + JAW_OPEN) * jawOpen - 0.03 * (0.5 + 0.5 * breath) * (1 - jawOpen) + shake * 0.02 - Math.abs(snf) * 1.2 - Math.abs(shk) * 0.08);
    J.tongue.forEach((j, i) => rot(j, 0, rHigh * 0.05 * Math.sin(t * 9 + i) + A.jaw * 0.04 * Math.sin(t * 2 + i), -0.05 * jawOpen * (i + 1) * 0.5));

    // pálpebras: piscada, olhos semicerrados no rugido e fechados no bocejo
    const lid = Math.max(idle * blinkAt(t), 0.5 * rHigh, ruf * 0.8, A.lid, A.shk * 0.7);
    for (const L of J.lids) { move(L.up, 0, -LID_UP * lid, 0); move(L.low, 0, LID_LOW * lid, 0); }

    // ---------- cauda: onda lenta, curva que muda de lado, contrabalanço do passo e do peso ----------
    const curl = 0.05 * wob(t * 0.11, 23) * still;
    J.tail.forEach((j, i) => {
      const sw = idle * (0.07 * Math.sin(t * 0.85 - i * 0.55) + 0.035 * Math.sin(t * 0.37 - i * 0.3)) + curl
        + w * 0.09 * Math.sin(ph - 0.6 - i * 0.5) - sway * 0.03
        - spin * (0.9 + i * 0.25) + ruf * 0.06 * Math.sin(t * 50 - 1.5 - i * 0.9)
        + A.swish * 0.17 * Math.sin(t * 7.5 - i * 0.9) - shk * 0.02 * (i + 1);
      const up = idle * 0.022 * Math.sin(t * 0.6 - i * 0.4) + w * 0.025 * Math.cos(ph * 2 - i * 0.4) - 0.03 * r + 0.015 * sniff + 0.01 * A.swish - sPitch * 0.3;
      rot(j, 0, sw, up);
    });

    // ---------- braços e garras ----------
    for (const [Arm, sgn] of [[J.lArm, 1], [J.rArm, -1]]) {
      const sw = idle * 0.04 * wob(t * 0.9, sgn * 5) + w * 0.07 * Math.sin(ph + sgn * 1.2);
      const flex = grab * (0.5 + 0.5 * Math.sin(t * 2.4 + sgn * 0.9));
      const twitch = still * 0.22 * Math.max(0, wob(t * 0.8, 40 + sgn * 9)) ** 2;   // dedos mexem sozinhos de vez em quando
      rot(Arm.upper, 0, 0, sw + 0.12 * r + 0.3 * grab);
      rot(Arm.lower, 0, 0, sw * 0.6 - 0.15 * r + 0.22 * grab - 0.12 * flex);
      rot(Arm.wrist, 0, 0, 0.15 * grab - 0.2 * flex - 0.1 * twitch);
      Arm.fingers.forEach((F, f) => {
        const spread = grab * (f - 1) * 0.18;                 // abre os dedos em leque
        rot(F[0], spread, 0, 0.3 * grab - 0.55 * flex - 0.1 * r - 0.3 * twitch);
        rot(F[1], 0, 0, -0.5 * flex - 0.12 * r - 0.35 * twitch);
        rot(F[2], 0, 0, -0.45 * flex - 0.12 * r - 0.3 * twitch);
      });
    }
    if (rig.debug) rig.debug(J, rot, move);
  }

  const count = (v) => (Array.isArray(v) ? v.flat().filter(Boolean).length : v && v.bone ? 1 : Object.values(v || {}).flat(2).filter(Boolean).length);
  const rig = { update, headPos, actionAt, debug: null, found: Object.fromEntries(Object.entries(J).map(([k, v]) => [k, count(v)])) };
  return rig;
}
