import * as THREE from 'three';
import { buildPlaceholderDino } from './dino.js';
import { TIERS } from './quality.js';
import { createRig } from './anim.js';

// Onde fica a pessoa de 1,75 m do ato 3: um pouco à frente do focinho, do lado da câmera.
const HUMAN = { x: 5.0, z: 1.0, height: 1.75 };

// Pontos do corpo onde as anotações se prendem: [osso, posição em repouso no espaço do dino (m)].
const ANCHORS = {
  feathers: [/^Spine_01/, [0.5, 2.74, 0]],
  crest: [/^Head_/, [4.15, 2.9, 0]],
  teeth: [/^Head_/, [4.2, 2.48, 0.22]],
  hand: [/^r_FrontLeg_Ball_/, [2.72, 0.95, 0.52]],
};

// rótulo de texto como sprite (usado na régua do ato 3)
function textSprite(text, w) {
  const c = document.createElement('canvas'); c.width = 320; c.height = 80;
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  const draw = () => {
    const g = c.getContext('2d'); g.clearRect(0, 0, 320, 80);
    g.font = '600 40px "JetBrains Mono", monospace'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = '#fff';
    g.fillText(text, 160, 42); tex.needsUpdate = true;
  };
  draw();
  if (document.fonts && document.fonts.load) document.fonts.load('600 40px "JetBrains Mono"').then(draw).catch(() => {});
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, color: 0x9fd3ff, transparent: true, depthWrite: false }));
  s.scale.set(w, w / 4, 1);
  return s;
}

// textura de mancha radial (usada na sombra de contato e na poça de luz do chão)
function radialTexture(stops) {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'), gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  stops.forEach(([p, col]) => gr.addColorStop(p, col));
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

// pictograma de pessoa em pé, desenhado em canvas (silhueta chapada)
function humanTexture() {
  const c = document.createElement('canvas'); c.width = 256; c.height = 512;
  const g = c.getContext('2d');
  g.fillStyle = '#fff';
  const rr = (x, y, w, h, r) => { g.beginPath(); g.roundRect(x, y, w, h, r); g.fill(); };
  g.beginPath(); g.arc(128, 44, 36, 0, Math.PI * 2); g.fill(); // cabeça
  rr(72, 92, 112, 190, 34);    // tronco
  rr(34, 100, 34, 176, 17);    // braço esquerdo
  rr(188, 100, 34, 176, 17);   // braço direito
  rr(76, 250, 48, 258, 22);    // perna esquerda
  rr(132, 250, 48, 258, 22);   // perna direita
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

// Cena única e fixa. A rolagem só muda o "estado" (câmera, giro, luz, pessoa de escala) e o movimento do dino.
export function createScene(canvas, tier) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.type = THREE.PCFShadowMap;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 400);

  // luzes neutras (luz colorida tingia a plumagem branca): chave levemente quente, contraluz fria e forte para recortar a silhueta
  const hemi = new THREE.HemisphereLight(0xffffff, 0x8f96a3, 1.0);
  const key = new THREE.DirectionalLight(0xfff3e4, 2.2);
  key.position.set(8, 12, 9);
  key.castShadow = true; key.shadow.mapSize.set(1024, 1024);
  Object.assign(key.shadow.camera, { left: -12, right: 12, top: 12, bottom: -12, near: 1, far: 40 });
  key.shadow.bias = -0.0004;
  const rim = new THREE.DirectionalLight(0xdbe8ff, 3.2);
  rim.position.set(-9, 7, -10);
  scene.add(hemi, key, rim);

  // chão sugerido só por duas manchas: uma poça de luz fria (assenta o dino no fundo escuro) e a sombra de contato
  const pool = new THREE.Mesh(new THREE.PlaneGeometry(22, 9), new THREE.MeshBasicMaterial({
    map: radialTexture([[0, 'rgba(255,255,255,1)'], [0.45, 'rgba(255,255,255,0.35)'], [1, 'rgba(255,255,255,0)']]),
    color: 0x9fd3ff, transparent: true, opacity: 0.1, depthWrite: false, blending: THREE.AdditiveBlending }));
  pool.rotation.x = -Math.PI / 2; pool.position.y = 0.01;
  const contact = new THREE.Mesh(new THREE.PlaneGeometry(13, 4.2), new THREE.MeshBasicMaterial({
    map: radialTexture([[0, 'rgba(0,0,0,0.85)'], [0.5, 'rgba(0,0,0,0.35)'], [1, 'rgba(0,0,0,0)']]), transparent: true, opacity: 0.4, depthWrite: false }));
  contact.rotation.x = -Math.PI / 2; contact.position.y = 0.02;
  scene.add(pool, contact);

  // dinossauro (placeholder até o .glb carregar)
  // o pivô fica no centro do corpo (y = 1,7 m): assim o dino gira, inclina e rola em torno do tronco, e os pés continuam no chão em rotação 0
  const PIVOT_Y = 1.7;
  const dinoPivot = new THREE.Group();
  dinoPivot.position.y = PIVOT_Y;
  dinoPivot.rotation.order = 'YXZ';
  let dino = buildPlaceholderDino();
  dino.position.y = -PIVOT_Y;
  dinoPivot.add(dino);
  scene.add(dinoPivot);

  // pessoa de 1,75 m para a escala (ato 3): silhueta plana que sempre encara a câmera
  const humanMat = new THREE.MeshBasicMaterial({ map: humanTexture(), color: 0x9fd3ff, transparent: true, alphaTest: 0.4, side: THREE.DoubleSide });
  const human = new THREE.Mesh(new THREE.PlaneGeometry(HUMAN.height / 2, HUMAN.height), humanMat);
  human.geometry.translate(0, HUMAN.height / 2, 0); // origem nos pés
  human.position.set(HUMAN.x, 0, HUMAN.z);
  human.visible = false;
  scene.add(human);

  // régua do ato 3: linha de 9 m no chão, com um traço por metro, e os rótulos das duas medidas
  const ruler = new THREE.Group();
  const rulerMat = new THREE.MeshBasicMaterial({ color: 0x9fd3ff, transparent: true, depthWrite: false });
  {
    const bar = (w, d, x, z) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), rulerMat); m.rotation.x = -Math.PI / 2; m.position.set(x, 0.03, z); ruler.add(m); };
    const Z = 1.7;
    bar(9, 0.035, 0, Z);
    for (let i = 0; i <= 9; i++) bar(0.035, i === 0 || i === 9 ? 0.5 : 0.2, -4.5 + i, Z);
    const l9 = textSprite('9 m', 2.4); l9.position.set(0, -0.55, Z); ruler.add(l9);
    const lh = textSprite('1,75 m', 2.4); lh.position.set(HUMAN.x, HUMAN.height + 0.42, HUMAN.z); ruler.add(lh);
    ruler.userData.sprites = [l9, lh];
  }
  ruler.visible = false;
  scene.add(ruler);

  const state = { tier, w: 1, h: 1, narrow: false, lastRot: null, spin: 0 };
  let feather = null;      // malha da camada de penas (some no nível baixo de qualidade)
  const anchors = {};      // nome -> { bone, local }
  const _t = new THREE.Vector3(), _r = new THREE.Vector3(), _u = new THREE.Vector3(), _h = new THREE.Vector3();

  function applyTier(t) {
    const T = TIERS[t];
    state.tier = t;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, T.dpr));
    renderer.shadowMap.enabled = T.shadows; key.castShadow = T.shadows;
    renderer.shadowMap.needsUpdate = true;
    if (feather) feather.visible = T.feathers;
    resize();
  }
  function resize() {
    state.w = innerWidth; state.h = innerHeight; state.narrow = state.w < 760;
    renderer.setSize(state.w, state.h, false);
    camera.aspect = state.w / state.h;
    camera.updateProjectionMatrix();
  }

  // aplica um estado interpolado vindo do scroll; motion traz o que move o dino (ver src/anim.js e src/main.js)
  let rig = null; // animação procedural, criada quando o modelo real carrega
  function apply(s, time, motion) {
    // em tela estreita, afasta a câmera para o dino caber na largura
    const k = state.narrow ? Math.pow(1.78 / camera.aspect, 0.62) * (s.nk || 1) : 1;
    camera.position.set(
      s.look[0] + (s.cam[0] - s.look[0]) * k,
      s.look[1] + (s.cam[1] - s.look[1]) * k,
      s.look[2] + (s.cam[2] - s.look[2]) * k);
    camera.lookAt(s.look[0], s.look[1], s.look[2]);
    camera.fov = s.fov;
    // desloca o dino na tela: de lado no desktop, para cima no celular
    const w = state.w, h = state.h;
    if (state.narrow) camera.setViewOffset(w, h, 0, h * 0.14, w, h);
    else camera.setViewOffset(w, h, -s.shift * w * 0.5, 0, w, h);
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();

    // entrada: o dino chega andando de fora da tela (motion.enter = metros que faltam)
    const enter = (motion && motion.enter) || 0;
    dinoPivot.position.x = -enter;
    pool.position.x = contact.position.x = -enter;
    dinoPivot.rotation.set(s.pitch, s.rot, s.roll);
    dinoPivot.updateMatrixWorld(true);

    if (rig && motion) {
      // giro do corpo por quadro (para a cauda e o pescoço ficarem para trás)
      const d = state.lastRot === null ? 0 : s.rot - state.lastRot;
      state.lastRot = s.rot;
      state.spin += (Math.min(0.06, Math.max(-0.06, d)) - state.spin) * 0.15;
      // alvo do olhar: a câmera, deslocada pelo ponteiro; no ato 3 passa a ser a pessoa
      const p = motion.pointer || { x: 0, y: 0 };
      _r.setFromMatrixColumn(camera.matrixWorld, 0); _u.setFromMatrixColumn(camera.matrixWorld, 1);
      _t.copy(camera.position).addScaledVector(_r, p.x * 5).addScaledVector(_u, -p.y * 3);
      _h.set(HUMAN.x, HUMAN.height * 0.72, HUMAN.z);
      _t.lerp(_h, s.sniff);
      dino.worldToLocal(_t);
      rig.update(time / 1000, { ...motion, sniff: s.sniff, ruffle: s.ruffle, grab: s.grab, spin: motion.snap ? 0 : state.spin, look: _t, lookK: 0.5 + 0.45 * s.sniff });
    }

    // chão: em fundo claro a sombra escurece; em fundo escuro quem aparece é a poça de luz
    const lum = (s.bg[0] + s.bg[1] + s.bg[2]) / 765;
    contact.material.opacity = 0.2 + 0.3 * lum;
    pool.material.opacity = 0.11 * (1 - lum);
    key.intensity = 0.4 + 2.0 * s.light; rim.intensity = 1.0 + 2.4 * s.light;

    human.visible = ruler.visible = s.human > 0.01;
    if (human.visible) {
      rulerMat.opacity = 0.8 * s.human;
      ruler.userData.sprites.forEach((sp) => { sp.material.opacity = s.human; });
      humanMat.opacity = Math.min(1, s.human * 1.4);
      human.position.y = (1 - s.human) * -0.25;
      human.rotation.y = Math.atan2(camera.position.x - HUMAN.x, camera.position.z - HUMAN.z);
    }
  }

  function setModel(obj) {
    dinoPivot.remove(dino);
    rig = createRig(obj); // antes de pendurar na cena: mede os ossos com o dino sem giro
    // âncoras das anotações: guarda cada ponto no espaço do osso, para acompanhar a animação
    obj.updateMatrixWorld(true);
    const bones = []; obj.traverse((o) => { if (o.isBone) bones.push(o); if (o.isMesh && o.material && /Feather/i.test(o.material.name)) feather = o; });
    for (const [name, [re, p]] of Object.entries(ANCHORS)) {
      const bone = bones.find((b) => re.test(b.name));
      if (bone) anchors[name] = { bone, local: bone.worldToLocal(obj.localToWorld(new THREE.Vector3(...p))) };
    }
    if (feather) feather.visible = TIERS[state.tier].feathers;
    dino = obj; dino.position.y = -PIVOT_Y; dinoPivot.add(dino);
  }

  applyTier(tier);
  return {
    renderer, scene, camera, apply, resize, setTier: applyTier, setModel, rig: () => rig,
    // posição na tela (px) de um ponto do corpo; chamar depois de render(), quando as matrizes estão atualizadas
    anchor(name, out) {
      const a = anchors[name];
      if (!a) return null;
      _t.copy(a.local); a.bone.localToWorld(_t); _t.project(camera);
      out.x = (_t.x + 1) / 2 * state.w; out.y = (1 - _t.y) / 2 * state.h;
      out.visible = _t.z < 1 && _t.x > -0.96 && _t.x < 0.96 && _t.y > -0.9 && _t.y < 0.9;
      return out;
    },
    // limites do dino no mundo (para depuração e ajuste de câmera): [[minx,miny,minz],[maxx,maxy,maxz]]
    bounds: () => { dinoPivot.updateMatrixWorld(true); const b = new THREE.Box3().setFromObject(dinoPivot, true); return [b.min.toArray(), b.max.toArray()]; },
    render: () => renderer.render(scene, camera),
    // compila shaders antes do 1º quadro visível (evita travada ao entrar)
    warm: () => renderer.compile(scene, camera),
  };
}
