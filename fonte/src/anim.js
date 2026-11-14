import * as THREE from 'three';

// Animação procedural do dino (o .glb tem esqueleto, mas nenhuma animação pronta).
// Tudo é calculado por código a cada quadro, em cima da pose de repouso:
//   - parado: respiração, cauda balançando, cabeça olhando devagar em volta
//   - walk (0..1): ciclo de caminhada; a fase avança com a rolagem da página
//   - roar (0..1): rugido; abre a mandíbula, ergue o pescoço e treme a cabeça
//
// Convenção: os ângulos são dados no "espaço do dino" (nariz em +X, cima em +Y, lado em +Z):
//   rz > 0  levanta o que aponta para a frente (cabeça sobe) e joga a perna para a frente
//   ry      vira para os lados         rx  rola em torno do eixo do corpo
// A função rot() converte isso para o eixo local de cada osso, então não importa como o osso foi modelado.

const _q = new THREE.Quaternion(), _d = new THREE.Quaternion(), _e = new THREE.Euler(), _v = new THREE.Vector3();
const TAU = Math.PI * 2;
const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

// Ângulo (rad) que fecha a boca: na pose de repouso do modelo ela já vem entreaberta.
const JAW_CLOSE = 0.2;
const JAW_OPEN = 0.42;

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
  };
  for (const s of ['l', 'r']) {
    J[s + 'Leg'] = {
      thigh: joint(new RegExp(`^${s}_HindLeg_Hip_\\d+$`)), shin: joint(new RegExp(`^${s}_HindLeg_Knee1_`)),
      meta: joint(new RegExp(`^${s}_HindLeg_Knee2_\\d+$`)), ankle: joint(new RegExp(`^${s}_HindLeg_Ankle_`)), ball: joint(new RegExp(`^${s}_HindLeg_Ball_`)),
    };
    J[s + 'Arm'] = { upper: joint(new RegExp(`^${s}_FrontLeg_Hip_`)), lower: joint(new RegExp(`^${s}_FrontLeg_Knee_\\d+$`)) };
  }

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
  }

  // t em segundos; o = { walk, roar, phase, idle } (idle = 0 desliga o movimento de "parado")
  function update(t, o) {
    const w = o.walk || 0, r = o.roar || 0, ph = o.phase || 0, idle = o.idle ?? 1;
    const breath = Math.sin(t * 1.5) * idle;
    const rHigh = smooth(0.55, 1, r);
    const shake = rHigh * Math.sin(t * 41) * 0.5 + rHigh * Math.sin(t * 57 + 1) * 0.5;

    // corpo: sobe e desce no passo, abaixa e inclina no rugido
    const bob = Math.cos(ph * 2);
    move(J.hip, 0.06 * r, w * 0.045 * bob - 0.07 * r - 0.006 * breath, 0);
    rot(J.hip, w * 0.03 * Math.sin(ph), w * 0.05 * Math.sin(ph), -0.03 * r + w * 0.012 * Math.sin(ph * 2));
    rot(J.spine1, 0, -w * 0.035 * Math.sin(ph), 0.03 * r + 0.006 * breath);
    rot(J.spine2, 0, -w * 0.025 * Math.sin(ph), 0.04 * r);
    // respiração: o peito incha um pouco; o osso seguinte desfaz a escala para pescoço e braços não incharem junto
    if (J.spine2 && J.spineTop) {
      const k = 1 + 0.018 * breath + 0.03 * rHigh;
      J.spine2.bone.scale.copy(J.spine2.restScale).multiplyScalar(k);
      J.spineTop.bone.scale.copy(J.spineTop.restScale).multiplyScalar(1 / k);
    }

    // pescoço e cabeça: olham devagar em volta; no rugido erguem e tremem
    const look = idle * (1 - 0.8 * r) * (0.07 * Math.sin(t * 0.31) + 0.035 * Math.sin(t * 0.73 + 1));
    const nod = idle * 0.02 * Math.sin(t * 0.47 + 2) + w * 0.03 * Math.cos(ph * 2 + 1) + 0.01 * breath;
    rot(J.neck1, 0, look * 0.6, nod + 0.13 * r);
    rot(J.neck2, 0, look * 0.7, nod * 0.6 + 0.12 * r);
    rot(J.neckTop, 0, look * 0.4, 0.05 * r);
    rot(J.head, look * 0.3 + shake * 0.035, look * 0.8 + shake * 0.03, -0.03 * w * bob + 0.1 * r + shake * 0.012);
    rot(J.jaw, 0, 0, JAW_CLOSE - (JAW_CLOSE + JAW_OPEN) * r - 0.012 * breath * (1 - r) + shake * 0.02);
    J.tongue.forEach((j, i) => rot(j, 0, rHigh * 0.05 * Math.sin(t * 9 + i), -0.05 * r * (i + 1) * 0.5));

    // cauda: onda lenta parado, contrabalanço no passo, levanta um pouco no rugido
    J.tail.forEach((j, i) => {
      const sway = idle * (0.05 * Math.sin(t * 0.9 - i * 0.55) + 0.03 * Math.sin(t * 0.37 - i * 0.3)) + w * 0.07 * Math.sin(ph - 0.6 - i * 0.5);
      const lift = idle * 0.012 * Math.sin(t * 0.6 - i * 0.4) + w * 0.02 * Math.cos(ph * 2 - i * 0.4) - 0.03 * r;
      rot(j, 0, sway, lift);
    });

    // pernas (esquerda e direita em oposição) e braços
    leg(J.lLeg, ph, w);
    leg(J.rLeg, ph + Math.PI, w);
    for (const [A, sgn] of [[J.lArm, 1], [J.rArm, -1]]) {
      const sw = idle * 0.03 * Math.sin(t * 1.1 + sgn) + w * 0.06 * Math.sin(ph + sgn * 1.2);
      rot(A.upper, 0, 0, sw + 0.12 * r);
      rot(A.lower, 0, 0, sw * 0.6 - 0.15 * r);
    }
  }

  return { update, found: Object.fromEntries(Object.entries(J).map(([k, v]) => [k, Array.isArray(v) ? v.filter(Boolean).length : (v && v.bone ? 1 : Object.values(v || {}).filter(Boolean).length)])) };
}
