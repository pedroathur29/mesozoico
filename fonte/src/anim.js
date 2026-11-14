import * as THREE from 'three';

// Animação procedural do dino (o .glb tem esqueleto, mas nenhuma animação pronta).
// Tudo é calculado por código a cada quadro, em cima da pose de repouso:
//   - parado: respira, balança a cauda, pisca e acompanha a câmera (ou o ponteiro) com a cabeça
//   - walk (0..1): ciclo de caminhada; a fase avança com a rolagem da página
//   - roar (0..1): rugido; abre a mandíbula, ergue o pescoço e treme a cabeça
//   - sniff (0..1): abaixa a cabeça e fareja o alvo do olhar (a pessoa do ato 3)
//   - ruffle (0..1): de tempos em tempos sacode o corpo, como uma ave ajeitando as penas
//   - grab (0..1): estende os braços e abre e fecha as garras
//   - spin: velocidade de giro do corpo; a cauda e o pescoço ficam "para trás" (inércia)
//
// Convenção: os ângulos são dados no "espaço do dino" (nariz em +X, cima em +Y, lado em +Z):
//   rz > 0  levanta o que aponta para a frente (cabeça sobe) e joga a perna para a frente
//   ry > 0  vira o nariz para -Z        rx  rola em torno do eixo do corpo
// A função rot() converte isso para o eixo local de cada osso, então não importa como o osso foi modelado.

const _q = new THREE.Quaternion(), _d = new THREE.Quaternion(), _e = new THREE.Euler(), _v = new THREE.Vector3();
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

// Ângulos (rad) da mandíbula: na pose de repouso do modelo a boca já vem entreaberta.
const JAW_CLOSE = 0.2;
const JAW_OPEN = 0.42;
// Quanto as pálpebras se deslocam (m) para fechar o olho.
const LID_UP = 0.05, LID_LOW = 0.022;

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

  function leg(L, ph, w) {
    if (!L.thigh) return;
    const c = Math.cos(ph), s = Math.sin(ph);
    const lift = Math.max(0, -s);            // 0 no apoio, sobe até 1 no meio do balanço
    const push = Math.max(0, -c) * Math.max(0, s + 0.4); // fim do apoio: o pé empurra o chão
    rot(L.thigh, 0, 0, w * (0.34 * c + 0.16 * lift));
    rot(L.shin, 0, 0, w * (-0.62 * lift - 0.1 * push));
    rot(L.meta, 0, 0, w * (0.55 * lift + 0.22 * push));
    rot(L.ankle, 0, 0, w * (0.12 * lift - 0.12 * push));
    rot(L.ball, 0, 0, w * (-0.4 * lift - 0.18 * push));
    L.toes.forEach((j) => rot(j, 0, 0, w * (-0.25 * lift + 0.2 * push))); // dedos relaxam no ar e abrem no empurrão
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

  // olhar suavizado (guarda o estado entre quadros)
  const gaze = { yaw: 0, pitch: 0 };

  // t em segundos; o = { walk, roar, phase, idle, sniff, ruffle, grab, spin, look: Vector3 no espaço do dino, lookK, snap }
  function update(t, o) {
    const w = o.walk || 0, r = o.roar || 0, ph = o.phase || 0, idle = o.idle ?? 1;
    const sniff = o.sniff || 0, grab = o.grab || 0, spin = o.spin || 0;
    const breath = Math.sin(t * 1.5) * idle;
    const rHigh = smooth(0.55, 1, r);
    const shake = rHigh * Math.sin(t * 41) * 0.5 + rHigh * Math.sin(t * 57 + 1) * 0.5;

    // sacudida das penas: uma rajada de ~1,2 s a cada 5,2 s
    const ru = ((t + 4.4) % 5.2) / 1.2;
    const ruf = (o.ruffle || 0) * idle * (ru < 1 ? Math.sin(Math.PI * ru) ** 2 : 0);
    const rufA = ruf * Math.sin(t * 50), rufB = ruf * Math.sin(t * 50 - 1.3), rufC = ruf * Math.sin(t * 50 - 2.6);

    // olhar: vira a cabeça em direção ao alvo (câmera, ponteiro ou a pessoa), só quando o alvo está mais ou menos à frente
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
    const gy = gaze.yaw - spin * 1.2, gp = gaze.pitch;

    // corpo: sobe e desce no passo, abaixa e inclina no rugido
    const bob = Math.cos(ph * 2);
    move(J.hip, 0.06 * r, w * 0.045 * bob - 0.07 * r - 0.006 * breath - 0.04 * sniff, 0);
    rot(J.hip, w * 0.03 * Math.sin(ph) + rufA * 0.03, w * 0.05 * Math.sin(ph), -0.03 * r - 0.03 * sniff + w * 0.012 * Math.sin(ph * 2));
    rot(J.spine1, rufA * 0.05, -w * 0.035 * Math.sin(ph) + gy * 0.06, 0.03 * r + 0.006 * breath - 0.03 * sniff);
    rot(J.spine2, rufB * 0.07, -w * 0.025 * Math.sin(ph) + gy * 0.08, 0.04 * r - 0.04 * sniff);
    // respiração: o peito incha um pouco; o osso seguinte desfaz a escala para pescoço e braços não incharem junto
    if (J.spine2 && J.spineTop) {
      const k = 1 + 0.018 * breath + 0.03 * rHigh + 0.02 * ruf;
      J.spine2.bone.scale.copy(J.spine2.restScale).multiplyScalar(k);
      J.spineTop.bone.scale.copy(J.spineTop.restScale).multiplyScalar(1 / k);
    }

    // pescoço e cabeça: olhar + pequenas variações; no rugido erguem e tremem; farejando, a cabeça dá puxadinhas
    const wander = idle * (1 - 0.8 * r) * (1 - 0.7 * sniff) * (0.05 * Math.sin(t * 0.31) + 0.025 * Math.sin(t * 0.73 + 1));
    const nod = idle * 0.02 * Math.sin(t * 0.47 + 2) + w * 0.03 * Math.cos(ph * 2 + 1) + 0.01 * breath;
    const snf = sniff * idle * 0.03 * Math.sin(t * 6.5) * (0.5 + 0.5 * Math.sin(t * 0.9));
    const yaw = gy + wander;
    rot(J.neck1, rufB * 0.05, yaw * 0.2, nod + gp * 0.3 + 0.13 * r);
    rot(J.neck2, rufC * 0.07, yaw * 0.25, nod * 0.6 + gp * 0.3 + 0.12 * r);
    rot(J.neckTop, 0, yaw * 0.2, gp * 0.15 + 0.05 * r);
    rot(J.head, wander * 0.3 + shake * 0.035 + rufC * 0.1, yaw * 0.35 + shake * 0.03, -0.03 * w * bob + gp * 0.25 + 0.1 * r + shake * 0.012 + snf);
    rot(J.jaw, 0, 0, JAW_CLOSE - (JAW_CLOSE + JAW_OPEN) * r - 0.012 * breath * (1 - r) + shake * 0.02 - Math.abs(snf) * 1.2);
    J.tongue.forEach((j, i) => rot(j, 0, rHigh * 0.05 * Math.sin(t * 9 + i), -0.05 * r * (i + 1) * 0.5));

    // pálpebras: piscada (e olhos semicerrados no rugido)
    const lid = Math.max(idle * blinkAt(t), 0.5 * rHigh, ruf * 0.8);
    for (const L of J.lids) { move(L.up, 0, -LID_UP * lid, 0); move(L.low, 0, LID_LOW * lid, 0); }

    // cauda: onda lenta parado, contrabalanço no passo, levanta um pouco no rugido, fica para trás quando o corpo gira
    J.tail.forEach((j, i) => {
      const sway = idle * (0.05 * Math.sin(t * 0.9 - i * 0.55) + 0.03 * Math.sin(t * 0.37 - i * 0.3)) + w * 0.07 * Math.sin(ph - 0.6 - i * 0.5)
        - spin * (0.9 + i * 0.25) + ruf * 0.06 * Math.sin(t * 50 - 1.5 - i * 0.9);
      const lift = idle * 0.012 * Math.sin(t * 0.6 - i * 0.4) + w * 0.02 * Math.cos(ph * 2 - i * 0.4) - 0.03 * r + 0.015 * sniff;
      rot(j, 0, sway, lift);
    });

    // pernas (esquerda e direita em oposição)
    leg(J.lLeg, ph, w);
    leg(J.rLeg, ph + Math.PI, w);

    // braços e garras: balanço leve; no "grab" estendem e as garras abrem e fecham, um braço depois do outro
    for (const [A, sgn] of [[J.lArm, 1], [J.rArm, -1]]) {
      const sw = idle * 0.03 * Math.sin(t * 1.1 + sgn) + w * 0.06 * Math.sin(ph + sgn * 1.2);
      const flex = grab * (0.5 + 0.5 * Math.sin(t * 2.4 + sgn * 0.9));
      rot(A.upper, 0, 0, sw + 0.12 * r + 0.3 * grab);
      rot(A.lower, 0, 0, sw * 0.6 - 0.15 * r + 0.22 * grab - 0.12 * flex);
      rot(A.wrist, 0, 0, 0.15 * grab - 0.2 * flex);
      A.fingers.forEach((F, f) => {
        const spread = grab * (f - 1) * 0.18;                 // abre os dedos em leque
        rot(F[0], spread, 0, 0.3 * grab - 0.55 * flex - 0.1 * r);
        rot(F[1], 0, 0, -0.5 * flex - 0.12 * r);
        rot(F[2], 0, 0, -0.45 * flex - 0.12 * r);
      });
    }
    if (rig.debug) rig.debug(J, rot, move);
  }

  const count = (v) => (Array.isArray(v) ? v.flat().filter(Boolean).length : v && v.bone ? 1 : Object.values(v || {}).flat(2).filter(Boolean).length);
  const rig = { update, headPos, debug: null, found: Object.fromEntries(Object.entries(J).map(([k, v]) => [k, count(v)])) };
  return rig;
}
