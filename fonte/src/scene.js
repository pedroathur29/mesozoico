import * as THREE from 'three';
import { buildPlaceholderDino } from './dino.js';
import { TIERS } from './quality.js';
import { createRig } from './anim.js';

// Cena única e fixa. A rolagem só muda o "estado" (câmera, giro, luz, humano, cenário).
export function createScene(canvas, tier) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.type = THREE.PCFShadowMap;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 400);

  // luzes neutras (luz colorida tingia a plumagem branca): chave levemente quente, contraluz levemente fria
  const hemi = new THREE.HemisphereLight(0xffffff, 0xa39d90, 1.1);
  const key = new THREE.DirectionalLight(0xfff3e4, 2.2);
  key.position.set(8, 12, 9);
  key.castShadow = true; key.shadow.mapSize.set(1024, 1024);
  Object.assign(key.shadow.camera, { left: -12, right: 12, top: 12, bottom: -12, near: 1, far: 40 });
  key.shadow.bias = -0.0004;
  const rim = new THREE.DirectionalLight(0xe4ecff, 2.4);
  rim.position.set(-9, 6, -10);
  scene.add(hemi, key, rim);

  // sombra de contato: uma mancha suave sob o dino (substitui o chão). A opacidade segue a cor de fundo do ato.
  const shadowTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const g = c.getContext('2d'), gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    gr.addColorStop(0, 'rgba(0,0,0,0.85)'); gr.addColorStop(0.5, 'rgba(0,0,0,0.35)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  const contact = new THREE.Mesh(new THREE.PlaneGeometry(13, 4.2), new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, opacity: 0.4, depthWrite: false }));
  contact.rotation.x = -Math.PI / 2; contact.position.y = 0.02;
  scene.add(contact);

  // dinossauro (placeholder até existir o .glb)
  // o pivô fica no centro do corpo (y = 1,7 m): assim o dino gira, inclina e rola em torno do tronco, e os pés continuam no chão em rotação 0
  const PIVOT_Y = 1.7;
  const dinoPivot = new THREE.Group();
  dinoPivot.position.y = PIVOT_Y;
  dinoPivot.rotation.order = 'YXZ';
  let dino = buildPlaceholderDino();
  dino.position.y = -PIVOT_Y;
  dinoPivot.add(dino);
  scene.add(dinoPivot);

  // humano de 1,75 m para a escala (ato 3), um boneco simples
  const human = new THREE.Group();
  {
    const m = new THREE.MeshBasicMaterial({ color: 0x9fd3ff }) /* silhueta chapada na cor de destaque, para ler bem no fundo escuro */;
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 1.1, 6, 12), m); body.position.y = 0.95;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.115, 16, 12), m); head.position.y = 1.64;
    human.add(body, head);
  }
  human.position.set(0.9, 0, 1.15); // quase no mesmo plano do dino, para a comparação de tamanho ser justa
  human.visible = false;
  scene.add(human);

  const state = { tier, w: 1, h: 1, shift: 0, narrow: false };

  function applyTier(t) {
    const T = TIERS[t];
    state.tier = t;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, T.dpr));
    renderer.shadowMap.enabled = T.shadows; key.castShadow = T.shadows;
    renderer.shadowMap.needsUpdate = true;
    resize();
  }
  function resize() {
    state.w = innerWidth; state.h = innerHeight; state.narrow = state.w < 760;
    renderer.setSize(state.w, state.h, false);
    camera.aspect = state.w / state.h;
    camera.updateProjectionMatrix();
  }

  // aplica um estado interpolado vindo do scroll
  let rig = null; // animação procedural, criada quando o modelo real carrega
  function apply(s, time, motion) {
    // em tela estreita, afasta a câmera para o dino caber na largura
    const k = state.narrow ? Math.pow(1.78 / camera.aspect, 0.62) : 1;
    camera.position.set(
      s.look[0] + (s.cam[0] - s.look[0]) * k,
      s.look[1] + (s.cam[1] - s.look[1]) * k,
      s.look[2] + (s.cam[2] - s.look[2]) * k);
    camera.lookAt(s.look[0], s.look[1], s.look[2]);
    if (camera.fov !== s.fov) { camera.fov = s.fov; }
    // desloca o dino na tela: de lado no desktop, para cima no celular
    const w = state.w, h = state.h;
    if (state.narrow) camera.setViewOffset(w, h, 0, s.shift * -h * 0.0 + h * 0.14, w, h);
    else camera.setViewOffset(w, h, -s.shift * w * 0.5, 0, w, h);
    camera.updateProjectionMatrix();
    dinoPivot.rotation.set(s.pitch, s.rot, s.roll);
    if (rig && motion) rig.update(time / 1000, motion);
    // a sombra de contato escurece mais em fundo claro
    const lum = (s.bg[0] + s.bg[1] + s.bg[2]) / 765;
    contact.material.opacity = 0.16 + 0.34 * lum;
    key.intensity = 0.4 + 2.0 * s.light; rim.intensity = 0.8 + 1.8 * s.light;
    human.visible = s.human > 0.01;
    human.scale.setScalar(1);
    human.position.y = (1 - s.human) * -2.2;
  }

  function setModel(obj) {
    dinoPivot.remove(dino);
    rig = createRig(obj); // antes de pendurar na cena: mede os ossos com o dino sem giro
    dino = obj; dino.position.y = -PIVOT_Y; dinoPivot.add(dino);
  }

  applyTier(tier);
  return {
    renderer, scene, camera, apply, resize, setTier: applyTier, setModel, rig: () => rig,
    // limites do dino no mundo (para depuração e ajuste de câmera): [[minx,miny,minz],[maxx,maxy,maxz]]
    bounds: () => { dinoPivot.updateMatrixWorld(true); const b = new THREE.Box3().setFromObject(dinoPivot, true); return [b.min.toArray(), b.max.toArray()]; },
    render: () => renderer.render(scene, camera),
    // compila shaders antes do 1º quadro visível (evita travada ao entrar)
    warm: () => renderer.compile(scene, camera),
  };
}
