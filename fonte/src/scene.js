import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { buildPlaceholderDino } from './dino.js';
import { TIERS } from './quality.js';
import { createRig } from './anim.js';

// Como a cena é montada:
//   palco (scene)          câmera e luzes. A câmera segue os keyframes de src/acts.js.
//   └─ dinoPivot           gira com "rot/pitch/roll" dos keyframes. Como o cenário gira junto, isso equivale a
//      │                   a câmera orbitar em volta do dino (e não a ele rodar numa base).
//      ├─ dino             o modelo e o esqueleto (animado em src/anim.js)
//      └─ env              o chão do dino: terreno, sombras de contato, coníferas, pessoa e régua do ato 3.
// Quando o dino anda, ele fica no centro do quadro e é o cenário que passa: a textura do terreno e as coníferas
// se deslocam pelo mesmo tanto que o corpo avançou ("travel"), então os pés plantados não deslizam no chão.

// Onde fica a pessoa de 1,75 m do ato 3: um pouco à frente do focinho, do lado da câmera.
const HUMAN = { x: 5.0, z: 1.0, height: 1.75 };
const TILE = 8;          // tamanho (m) de um ladrilho da textura do terreno
const TREE_SPAN = 140;   // as coníferas se repetem a cada 140 m de caminhada

// Pontos do corpo onde as anotações se prendem: [osso, posição em repouso no espaço do dino (m)].
const ANCHORS = {
  feathers: [/^Spine_01/, [0.5, 2.74, 0]],
  crest: [/^Head_/, [4.15, 2.9, 0]],
  teeth: [/^Head_/, [4.2, 2.48, 0.22]],
  hand: [/^r_FrontLeg_Ball_/, [2.72, 0.95, 0.52]],
  // extremos do corpo, usados só para conferir o enquadramento
  nose: [/^Head_/, [4.5, 2.6, 0]],
  tailTip: [/^Tail_01_06/, [-4.5, 2.35, 0]],
  plumeTip: [/^Tail_01_06/, [-4.95, 2.5, 0]],
};

const rnd = (() => { let s = 7; return () => { s = (s * 16807) % 2147483647; return s / 2147483647; }; })();   // sorteio fixo: a cena é sempre igual

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

// mancha radial (sombras de contato e a borda esfumada do terreno)
function radialTexture(stops) {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'), gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  stops.forEach(([p, col]) => gr.addColorStop(p, col));
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

// textura do terreno: solo com manchas, pedrinhas e agulhas caídas. É desenhada com as bordas emendadas (ladrilho).
function groundTexture() {
  const S = 512, c = document.createElement('canvas'); c.width = c.height = S;
  const g = c.getContext('2d');
  g.fillStyle = '#9a9a9a'; g.fillRect(0, 0, S, S);
  const tiled = (x, y, r, fn) => { for (const ox of [-S, 0, S]) for (const oy of [-S, 0, S]) if (x + ox > -r && x + ox < S + r && y + oy > -r && y + oy < S + r) fn(x + ox, y + oy); };
  for (let i = 0; i < 240; i++) {      // manchas grandes de claro e escuro
    const x = rnd() * S, y = rnd() * S, r = 18 + rnd() * 70, dark = rnd() < 0.55, a = 0.07 + rnd() * 0.13;
    tiled(x, y, r, (px, py) => { const gr = g.createRadialGradient(px, py, 0, px, py, r); gr.addColorStop(0, dark ? `rgba(0,0,0,${a})` : `rgba(255,255,255,${a})`); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(px - r, py - r, r * 2, r * 2); });
  }
  for (let i = 0; i < 420; i++) {      // agulhas e gravetos: traços curtos
    const x = rnd() * S, y = rnd() * S, l = 4 + rnd() * 9, an = rnd() * Math.PI, dark = rnd() < 0.6;
    g.strokeStyle = dark ? `rgba(0,0,0,${0.2 + rnd() * 0.25})` : `rgba(255,255,255,${0.12 + rnd() * 0.2})`; g.lineWidth = 1;
    tiled(x, y, l, (px, py) => { g.beginPath(); g.moveTo(px, py); g.lineTo(px + Math.cos(an) * l, py + Math.sin(an) * l); g.stroke(); });
  }
  for (let i = 0; i < 1500; i++) {     // grãos e pedrinhas
    const x = rnd() * S, y = rnd() * S, r = 0.6 + rnd() * rnd() * 3.2;
    g.fillStyle = rnd() < 0.5 ? `rgba(0,0,0,${0.15 + rnd() * 0.3})` : `rgba(255,255,255,${0.1 + rnd() * 0.25})`;
    tiled(x, y, r, (px, py) => { g.beginPath(); g.arc(px, py, r, 0, Math.PI * 2); g.fill(); });
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4;
  return t;
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

// uma conífera: tronco fino e sete andares de copa que diminuem para o alto, com as pontas caídas.
// A cor de vértice some na base, para ela "nascer" da névoa, e escurece um pouco de andar em andar.
function coniferGeometry() {
  const parts = [];
  const add = (geo, shade) => {
    const pos = geo.attributes.position, col = new Float32Array(pos.count * 4);
    for (let i = 0; i < pos.count; i++) {
      const a = Math.min(1, Math.max(0, (pos.getY(i) - 0.03) / 0.34));     // altura normalizada 0..1 da árvore inteira
      col.set([shade, shade, shade, a * a * (3 - 2 * a)], i * 4);
    }
    geo.setAttribute('color', new THREE.BufferAttribute(col, 4));
    geo.deleteAttribute('uv'); geo.deleteAttribute('normal');
    parts.push(geo);
  };
  const trunk = new THREE.CylinderGeometry(0.008, 0.016, 0.6, 5); trunk.translate(0, 0.3, 0); add(trunk, 0.7);
  const TIERS_N = 7;
  for (let n = 0; n < TIERS_N; n++) {
    const u = n / (TIERS_N - 1), y0 = 0.2 + 0.68 * u * (1 - 0.12 * u), hgt = 0.2 - 0.07 * u, r = 0.17 * (1 - 0.72 * u) + 0.012;
    const cone = new THREE.ConeGeometry(r, hgt, 8, 1, true);
    cone.translate(0, y0 + hgt / 2 - 0.05, 0); cone.rotateY(n * 0.7);
    add(cone, 0.78 + 0.22 * u);
  }
  return mergeGeometries(parts);
}

// Cena única e fixa. A rolagem só muda o "estado" (câmera, giro, luz, pessoa de escala) e o movimento do dino.
export function createScene(canvas, tier) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.98;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 400);

  // luz ambiente por imagem: uma "sala" neutra gerada por código (sem arquivo), que dá reflexos suaves na pele, nos dentes e nas garras
  {
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environmentIntensity = 0.38;
    pmrem.dispose();
  }
  // luzes neutras (luz colorida tingia a plumagem branca): chave levemente quente, contraluz fria e forte para recortar a silhueta
  const hemi = new THREE.HemisphereLight(0xffffff, 0x4d5560, 0.42);
  const key = new THREE.DirectionalLight(0xfff3e4, 2.2);
  key.position.set(8, 12, 9);
  key.castShadow = true; key.shadow.mapSize.set(1024, 1024);
  Object.assign(key.shadow.camera, { left: -12, right: 12, top: 12, bottom: -12, near: 1, far: 40 });
  key.shadow.bias = -0.0006; key.shadow.normalBias = 0.04; key.shadow.radius = 3;
  const back = new THREE.DirectionalLight(0xdbe8ff, 3.2);
  back.position.set(-9, 7, -10);
  scene.add(hemi, key, back);

  // dinossauro (placeholder até o .glb carregar)
  // o pivô fica no centro do corpo (y = 1,7 m): a câmera orbita em torno do tronco
  const PIVOT_Y = 1.7;
  const dinoPivot = new THREE.Group();
  dinoPivot.position.y = PIVOT_Y;
  dinoPivot.rotation.order = 'YXZ';
  let dino = buildPlaceholderDino();
  dino.position.y = -PIVOT_Y;
  dinoPivot.add(dino);
  scene.add(dinoPivot);

  // ---------- cenário preso ao dino ----------
  const env = new THREE.Group();
  env.position.y = -PIVOT_Y;
  dinoPivot.add(env);

  // terreno: um disco de solo que se esfuma nas bordas (não tapa o fundo nem as palavras gigantes atrás)
  const groundMap = groundTexture();
  groundMap.repeat.set(64 / TILE, 64 / TILE);
  const groundMat = new THREE.MeshBasicMaterial({
    map: groundMap, transparent: true, depthWrite: false, toneMapped: false,
    alphaMap: radialTexture([[0, '#fff'], [0.28, '#e6e6e6'], [0.62, '#555'], [1, '#000']]),
  });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(64, 64), groundMat);
  ground.rotation.x = -Math.PI / 2; ground.renderOrder = -3;
  env.add(ground);

  // sombras de contato: uma mancha sob o tronco e uma sob cada pé (some quando o pé levanta)
  const blobTex = radialTexture([[0, 'rgba(0,0,0,0.9)'], [0.45, 'rgba(0,0,0,0.4)'], [1, 'rgba(0,0,0,0)']]);
  const blob = (w, d) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), new THREE.MeshBasicMaterial({ map: blobTex, transparent: true, depthWrite: false, toneMapped: false })); m.rotation.x = -Math.PI / 2; m.renderOrder = -2; env.add(m); return m; };
  const bodyShadow = blob(11.5, 3.6); bodyShadow.position.set(-0.2, 0.012, 0);
  // no nível alto, o chão também recebe a sombra de verdade do corpo (projetada pela luz principal)
  const shadowCatcher = new THREE.Mesh(new THREE.PlaneGeometry(44, 30), new THREE.ShadowMaterial({ opacity: 0.42, transparent: true, depthWrite: false }));
  shadowCatcher.rotation.x = -Math.PI / 2; shadowCatcher.position.y = 0.01; shadowCatcher.receiveShadow = true; shadowCatcher.renderOrder = -2; shadowCatcher.visible = false;
  env.add(shadowCatcher);
  const footShadow = [blob(1.5, 1.0), blob(1.5, 1.0)];

  // coníferas ao fundo: silhuetas quase da cor do fundo, só atrás do dino (as que ficariam na frente não são desenhadas)
  const treeMat = new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, toneMapped: false, side: THREE.DoubleSide });
  const treeU = { uCut: { value: 20 } };
  treeMat.onBeforeCompile = (sh) => {
    sh.uniforms.uCut = treeU.uCut;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying float vDepth;')
      .replace('#include <project_vertex>', '#include <project_vertex>\nvDepth = -mvPosition.z;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying float vDepth;\nuniform float uCut;')
      .replace('#include <color_fragment>', '#include <color_fragment>\ndiffuseColor.a *= smoothstep(uCut, uCut + 8.0, vDepth) * (1.0 - 0.75 * smoothstep(34.0, 80.0, vDepth));');
  };
  const TREES = 34;
  const trees = new THREE.InstancedMesh(coniferGeometry(), treeMat, TREES);
  trees.renderOrder = -4; trees.frustumCulled = false;
  const treeData = [];
  for (let i = 0; i < TREES; i++) treeData.push({ x: (rnd() - 0.5) * TREE_SPAN, z: (i % 2 ? 1 : -1) * (19 + rnd() * 38), h: 11 + rnd() * 10, w: 0.8 + rnd() * 0.45, r: rnd() * 6.28 });
  const _m = new THREE.Object3D();
  let treeTravel = null;
  function placeTrees(travel) {
    if (treeTravel !== null && Math.abs(travel - treeTravel) < 0.004) return;
    treeTravel = travel;
    treeData.forEach((t, i) => {
      const x = ((((t.x - travel) + TREE_SPAN / 2) % TREE_SPAN) + TREE_SPAN) % TREE_SPAN - TREE_SPAN / 2;
      _m.position.set(x, -0.2, t.z); _m.rotation.set(0, t.r, 0); _m.scale.set(t.h * t.w, t.h, t.h * t.w); _m.updateMatrix();
      trees.setMatrixAt(i, _m.matrix);
    });
    trees.instanceMatrix.needsUpdate = true;
  }
  placeTrees(0);
  env.add(trees);

  // pessoa de 1,75 m para a escala (ato 3): silhueta plana que sempre encara a câmera
  const humanMat = new THREE.MeshBasicMaterial({ map: humanTexture(), color: 0x9fd3ff, transparent: true, alphaTest: 0.4, side: THREE.DoubleSide, toneMapped: false });
  const human = new THREE.Mesh(new THREE.PlaneGeometry(HUMAN.height / 2, HUMAN.height), humanMat);
  human.geometry.translate(0, HUMAN.height / 2, 0); // origem nos pés
  human.position.set(HUMAN.x, 0, HUMAN.z);
  human.visible = false;
  env.add(human);

  // régua do ato 3: linha de 9 m no chão, com um traço por metro, e os rótulos das duas medidas
  const ruler = new THREE.Group();
  const rulerMat = new THREE.MeshBasicMaterial({ color: 0x9fd3ff, transparent: true, depthWrite: false, toneMapped: false });
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
  env.add(ruler);

  // ---------- materiais do dino ----------
  // brilho de contorno (contraluz na pelagem), mais forte nas bordas viradas para cima
  const rim = { value: new THREE.Color(0.8, 0.9, 1.0) };
  // filamentos: as pontas das penas cedem ao movimento do corpo e a uma brisa leve
  const fur = { uSway: { value: new THREE.Vector3() }, uWind: { value: new THREE.Vector3() }, uTime: { value: 0 }, uPat: { value: null } };
  // Padrão da plumagem: um "mapa em volume" (grade 32 x 256 x 80 em volta do corpo, guardada como imagem de fatias
  // lado a lado). Cada pedacinho de filamento consulta a grade pela posição de repouso, então as listras atravessam
  // os cartões com nitidez. Os números são os mesmos de tools/clean_model.py.
  const PAT = { tx: 32, tz: 80, ny: 256, cols: 16 };
  function dress(mat, isFeather) {
    mat.onBeforeCompile = (sh) => {
      sh.uniforms.uRim = rim;
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', '#include <common>\nuniform vec3 uRim;')
        .replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
          float rimF = pow(1.0 - saturate(dot(normal, normalize(vViewPosition))), 2.4);
          totalEmissiveRadiance += uRim * rimF * (0.3 + 0.7 * saturate(normal.y)) * (0.35 + 0.65 * diffuseColor.r);`);
      if (!isFeather) return;
      Object.assign(sh.uniforms, fur);
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nattribute float aTip;\nattribute float aSeed;\nattribute vec3 aPat;\nvarying vec3 vPat;\nuniform vec3 uSway;\nuniform vec3 uWind;\nuniform float uTime;')
        .replace('#include <skinning_vertex>', `#include <skinning_vertex>
          vPat = aPat;
          float tipW = aTip * aTip;
          transformed += uSway * tipW;
          transformed += uWind * tipW * (sin(uTime * 1.1 + aSeed * 6.2831) + 0.5 * sin(uTime * 2.3 + aSeed * 17.0));`);
      if (!fur.uPat.value) return;
      const rows = PAT.ny / PAT.cols;
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', `#include <common>
          uniform sampler2D uPat;
          varying vec3 vPat;
          vec3 patSlice(float i, vec2 inTile) { return texture2D(uPat, (vec2(mod(i, ${PAT.cols}.0), floor(i / ${PAT.cols}.0)) + inTile) / vec2(${PAT.cols}.0, ${rows}.0)).rgb; }
          vec3 patAt(vec3 g) {
            float fy = clamp(g.y, 0.0, 1.0) * ${PAT.ny - 1}.0, i0 = floor(fy);
            vec2 inTile = vec2(clamp(g.x, ${(0.5 / PAT.tx).toFixed(5)}, ${(1 - 0.5 / PAT.tx).toFixed(5)}), clamp(g.z, ${(0.5 / PAT.tz).toFixed(5)}, ${(1 - 0.5 / PAT.tz).toFixed(5)}));
            return mix(patSlice(i0, inTile), patSlice(min(i0 + 1.0, ${PAT.ny - 1}.0), inTile), fy - i0);
          }`)
        // de longe os fios ficam menores que um pixel e a pelagem viraria chuvisco: quanto mais longe, mais cheio o cartão
        .replace('#include <color_fragment>', `#include <color_fragment>
          diffuseColor.rgb *= patAt(vPat);
          #ifdef USE_MAP
            diffuseColor.a = min(1.0, diffuseColor.a * (1.0 + 0.38 * max(0.0, log2(length(fwidth(vMapUv)) * 1024.0))));
          #endif`);
    };
    mat.customProgramCacheKey = () => (isFeather ? 'dino-fur' : 'dino-skin');
    mat.needsUpdate = true;
  }

  const state = { tier, w: 1, h: 1, stacked: false };
  let feather = null;      // malha da camada de penas (some no nível baixo de qualidade)
  const anchors = {};      // nome -> { bone, local }
  let allBones = [];
  const _t = new THREE.Vector3(), _r = new THREE.Vector3(), _u = new THREE.Vector3(), _h = new THREE.Vector3(), _m3 = new THREE.Matrix3(), _m4 = new THREE.Matrix4();
  const layout = matchMedia('(max-aspect-ratio: 29/20), (max-width: 760px)');   // mesmo corte do CSS: texto embaixo, dino em cima

  function applyTier(t) {
    const T = TIERS[t];
    state.tier = t;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, T.dpr));
    renderer.shadowMap.enabled = T.shadows; key.castShadow = T.shadows;
    renderer.shadowMap.needsUpdate = true;
    if (feather) feather.visible = T.feathers;
    shadowCatcher.visible = T.shadows;
    resize();
  }
  function resize() {
    state.w = innerWidth; state.h = innerHeight; state.stacked = layout.matches;
    renderer.setSize(state.w, state.h, false);
    camera.aspect = state.w / state.h;
    camera.updateProjectionMatrix();
  }

  // aplica um estado interpolado vindo do scroll; motion traz o que move o dino (ver src/anim.js e src/main.js)
  let rig = null; // animação procedural, criada quando o modelo real carrega
  function apply(s, time, dt, motion) {
    // quanto afastar a câmera para o dino caber: telas em pé (texto embaixo) e telas largas mas "quadradas" precisam de mais recuo
    const asp = camera.aspect;
    // entrada (motion.enter = metros que faltam até a marca): a câmera começa mais longe e se aproxima enquanto ele anda
    const enter = (motion && motion.enter) || 0;
    const k = (state.stacked ? Math.pow(1.78 / asp, 0.62) * (s.nk || 1) : (asp < 1.78 ? Math.pow(1.78 / asp, 1.3) : 1)) * (1 + 0.1 * enter);
    camera.position.set(
      s.look[0] + (s.cam[0] - s.look[0]) * k,
      s.look[1] + (s.cam[1] - s.look[1]) * k,
      s.look[2] + (s.cam[2] - s.look[2]) * k);
    camera.lookAt(s.look[0], s.look[1], s.look[2]);
    camera.fov = s.fov;
    // desloca o dino na tela: de lado quando o texto fica ao lado, para cima quando o texto fica embaixo
    const w = state.w, h = state.h;
    if (state.stacked) camera.setViewOffset(w, h, 0, h * 0.17, w, h);
    else camera.setViewOffset(w, h, -s.shift * w * 0.5, 0, w, h);
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();

    dinoPivot.position.x = -enter;
    dinoPivot.rotation.set(s.pitch, s.rot, s.roll);
    dinoPivot.updateMatrixWorld(true);

    let travel = 0, feet = null;
    if (rig && motion) {
      // alvo do olhar: a câmera, deslocada pelo ponteiro; no ato 3 passa a ser a pessoa
      const p = motion.pointer || { x: 0, y: 0 };
      _r.setFromMatrixColumn(camera.matrixWorld, 0); _u.setFromMatrixColumn(camera.matrixWorld, 1);
      _t.copy(camera.position).addScaledVector(_r, p.x * 5).addScaledVector(_u, -p.y * 3);
      dino.worldToLocal(_t);
      _h.set(HUMAN.x, HUMAN.height * 0.72, HUMAN.z);
      _t.lerp(_h, s.sniff);
      rig.update(time / 1000, dt, { ...motion, sniff: s.sniff, ruffle: s.ruffle, grab: s.grab, look: _t, lookK: 0.5 + 0.45 * s.sniff });
      travel = rig.travel; feet = rig.feet();
      // filamentos: o empurrão vem no espaço do dino e o shader trabalha no espaço da malha
      if (feather) {
        _m3.setFromMatrix4(_m4.copy(feather.matrixWorld).invert().multiply(dino.matrixWorld));
        fur.uSway.value.copy(rig.sway).applyMatrix3(_m3);
        fur.uWind.value.set(-0.004, 0.001, 0.005).multiplyScalar(motion.idle ?? 1).applyMatrix3(_m3);
        fur.uTime.value = time / 1000;
      }
    }

    // ---------- cenário ----------
    const lum = (s.bg[0] + s.bg[1] + s.bg[2]) / 765;
    const dark = 1 - Math.min(1, lum * 2.5);                 // 1 nos fundos escuros, 0 nos claros
    groundMap.offset.x = (travel / TILE) % 1;
    // terreno e árvores tomam a cor do fundo do ato, um pouco mais claros, para não brigar com o dino nem com o texto
    groundMat.color.setRGB((s.bg[0] * 2.3 + 22) / 255, (s.bg[1] * 2.1 + 26) / 255, (s.bg[2] * 1.9 + 26) / 255, THREE.SRGBColorSpace);
    groundMat.opacity = 0.92;
    treeMat.color.setRGB((s.bg[0] * 1.5 + 10 * dark) / 255, (s.bg[1] * 1.55 + 16 * dark) / 255, (s.bg[2] * 1.5 + 16 * dark) / 255, THREE.SRGBColorSpace);
    treeMat.opacity = 0.85 * (s.flora ?? 0.5);
    trees.visible = treeMat.opacity > 0.01;
    placeTrees(travel);
    // só entram as árvores mais fundas que o dino, vistas da câmera
    treeU.uCut.value = _t.copy(dinoPivot.position).sub(camera.position).dot(_r.setFromMatrixColumn(camera.matrixWorld, 2).negate()) + 5;
    bodyShadow.material.opacity = (0.55 + 0.2 * lum) * (shadowCatcher.visible ? 0.6 : 1);
    footShadow.forEach((m, i) => {
      const f = feet && feet[i];
      m.visible = !!f;
      if (!f) return;
      m.position.set(f.x + 0.18, 0.014, f.z);
      m.material.opacity = 0.9 * Math.max(0, 1 - f.h / 0.22);
      m.scale.setScalar(1 + f.h * 1.5);
    });

    key.intensity = 0.4 + 2.0 * s.light; back.intensity = 1.0 + 2.4 * s.light;
    rim.value.setRGB(0.8, 0.9, 1.0).multiplyScalar(0.38 * s.light);

    human.visible = ruler.visible = s.human > 0.01;
    if (human.visible) {
      rulerMat.opacity = 0.8 * s.human;
      ruler.userData.sprites.forEach((sp) => { sp.material.opacity = s.human; });
      humanMat.opacity = Math.min(1, s.human * 1.4);
      human.position.y = (1 - s.human) * -0.25;
      env.worldToLocal(_t.copy(camera.position));
      human.rotation.y = Math.atan2(_t.x - HUMAN.x, _t.z - HUMAN.z);
    }
  }

  function setModel(obj) {
    dinoPivot.remove(dino);
    rig = createRig(obj); // antes de pendurar na cena: mede os ossos com o dino sem giro
    // âncoras das anotações: guarda cada ponto no espaço do osso, para acompanhar a animação
    obj.updateMatrixWorld(true);
    allBones = [];
    obj.traverse((o) => {
      if (o.isBone && !/^(_rootJoint|Yutyrannus_)/.test(o.name)) allBones.push(o);   // sem os ossos-raiz, que ficam fora do corpo
      if (!o.isMesh || !o.material) return;
      const isFeather = /Feather/i.test(o.material.name);
      if (isFeather) {
        feather = o;
        const g = o.geometry, n = g.attributes.position.count;
        // "aTip" (0 na base da pena, 1 na ponta) e "aSeed" vêm do modelo; sem eles as penas simplesmente não balançam
        g.setAttribute('aTip', g.attributes._tip || new THREE.BufferAttribute(new Float32Array(n), 1));
        g.setAttribute('aSeed', g.attributes._seed || new THREE.BufferAttribute(new Float32Array(n), 1));
        g.setAttribute('aPat', g.attributes._pat || new THREE.BufferAttribute(new Float32Array(n * 3), 3));
        // o mapa em volume do padrão viaja no .glb como textura de emissão; aqui ele vira só uma tabela de consulta
        const pat = g.attributes._pat && o.material.emissiveMap;
        if (pat) { pat.generateMipmaps = false; pat.minFilter = pat.magFilter = THREE.LinearFilter; pat.wrapS = pat.wrapT = THREE.ClampToEdgeWrapping; pat.needsUpdate = true; fur.uPat.value = pat; }
        o.material.emissiveMap = null; o.material.emissive.setScalar(0);
        // filamentos recortados (não translúcidos): gravam profundidade, então se ordenam direito e pesam menos
        o.material.transparent = false; o.material.depthWrite = true; o.material.alphaTest = 0.32; o.material.alphaToCoverage = true;
        o.material.side = THREE.DoubleSide;
      }
      const isEye = /Eye/i.test(o.material.name);
      // penas foscas (pelagem não brilha); pele um pouco mais lisa. Sombras próprias só valem no nível alto.
      o.material.roughness = isFeather ? 0.92 : isEye ? 0.08 : 0.68;   // olhos lisos e úmidos
      o.material.envMapIntensity = isFeather ? 0.6 : isEye ? 2.2 : 1;
      o.castShadow = !isFeather; o.receiveShadow = true;
      dress(o.material, isFeather);
    });
    for (const [name, [re, p]] of Object.entries(ANCHORS)) {
      const bone = allBones.find((b) => re.test(b.name));
      if (bone) anchors[name] = { bone, local: bone.worldToLocal(obj.localToWorld(new THREE.Vector3(...p))) };
    }
    if (feather) feather.visible = TIERS[state.tier].feathers;
    dino = obj; dino.position.y = -PIVOT_Y; dinoPivot.add(dino);
  }

  const project = (v, out) => { v.project(camera); out.x = (v.x + 1) / 2 * state.w; out.y = (1 - v.y) / 2 * state.h; out.front = v.z < 1; return out; };

  applyTier(tier);
  return {
    renderer, scene, camera, apply, resize, setTier: applyTier, setModel, rig: () => rig,
    get stacked() { return state.stacked; },
    // posição na tela (px) de um ponto do corpo; chamar depois de render(), quando as matrizes estão atualizadas
    anchor(name, out) {
      const a = anchors[name];
      if (!a) return null;
      project(a.bone.localToWorld(_t.copy(a.local)), out);
      out.visible = out.front && out.x > state.w * 0.02 && out.x < state.w * 0.98 && out.y > state.h * 0.05 && out.y < state.h * 0.95;
      return out;
    },
    // caixa do dino na tela (px), pelos ossos e pelas pontas do focinho e da cauda: para conferir enquadramento e sobreposição com o texto
    extent() {
      const pts = [], o = {};
      for (const b of allBones) { project(_t.setFromMatrixPosition(b.matrixWorld), o); if (o.front) pts.push([o.x, o.y]); }
      for (const n of ['nose', 'tailTip', 'plumeTip']) { const a = anchors[n]; if (a) { project(a.bone.localToWorld(_t.copy(a.local)), o); if (o.front) pts.push([o.x, o.y]); } }
      return pts;
    },
    // onde está a base dos dedos de cada pé no chão (m, no referencial do terreno): para medir se o pé desliza
    footGround() {
      if (!rig) return null;
      return rig.bones.ball.map((b, i) => { env.worldToLocal(_t.setFromMatrixPosition(b.matrixWorld)); const f = rig.feet()[i]; return { x: _t.x + rig.travel, y: _t.y, z: _t.z, planted: f.planted }; });
    },
    render: () => renderer.render(scene, camera),
    // compila shaders antes do 1º quadro visível (evita travada ao entrar)
    warm: () => renderer.compile(scene, camera),
  };
}
