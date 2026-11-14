import * as THREE from 'three';

// PLACEHOLDER: dinossauro simples feito de formas, só para testar câmera e scroll.
// Será substituído pelo .glb em /public/assets/models/yutyrannus.glb quando o arquivo existir.
// Comprimento total ≈ 9 m, nariz em +X, chão em y = 0.
export function buildPlaceholderDino() {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0x2c3e4d, roughness: 0.75, metalness: 0.05 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x1a2733, roughness: 0.8 });
  const add = (geo, m, pos, rot = [0, 0, 0], scale = [1, 1, 1]) => {
    const mesh = new THREE.Mesh(geo, m);
    mesh.position.set(...pos); mesh.rotation.set(...rot); mesh.scale.set(...scale);
    g.add(mesh); return mesh;
  };
  const sph = new THREE.SphereGeometry(1, 28, 20);
  add(sph, mat, [0, 2.6, 0], [0, 0, 0], [2.1, 1.25, 1.0]);              // tronco
  add(sph, mat, [-1.9, 2.5, 0], [0, 0, 0], [1.3, 0.8, 0.7]);            // quadril
  add(new THREE.CylinderGeometry(0.42, 0.7, 2.0, 16), mat, [2.3, 3.6, 0], [0, 0, -0.95]); // pescoço
  add(sph, mat, [3.55, 4.25, 0], [0, 0, -0.12], [0.95, 0.5, 0.46]);     // cabeça
  add(sph, dark, [3.4, 3.95, 0], [0, 0, -0.1], [0.8, 0.22, 0.38]);      // mandíbula
  add(new THREE.ConeGeometry(0.72, 4.6, 16), mat, [-4.3, 2.4, 0], [0, 0, Math.PI / 2 + 0.08]); // cauda
  for (const z of [-0.65, 0.65]) {                                       // pernas
    add(new THREE.CylinderGeometry(0.28, 0.4, 2.1, 12), mat, [0.2, 1.3, z], [0, 0, 0.12]);
    add(new THREE.BoxGeometry(0.9, 0.2, 0.34), dark, [0.55, 0.1, z]);
  }
  for (const z of [-0.5, 0.5]) add(new THREE.CylinderGeometry(0.08, 0.1, 0.8, 8), dark, [2.0, 2.6, z], [0.3, 0, -0.4]); // braços curtos
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = false; } });
  return g;
}

// O modelo do Sketchfab vem com o nariz em +Z; giramos 90° para o nariz ficar em +X (convenção da cena).
// Se trocar o modelo e ele aparecer de lado/de costas, ajuste só este valor.
const MODEL_ROT_Y = Math.PI / 2;

// Carrega o .glb se existir. Sem arquivo, devolve null e a cena usa o placeholder.
export async function loadDinoModel(url, onProgress) {
  const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
  let gltf;
  if (window.__MODEL_B64) {
    // build de arquivo único (página compartilhável): o modelo vem embutido em base64
    const bin = atob(window.__MODEL_B64);
    const buf = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
    gltf = await new GLTFLoader().parseAsync(buf.buffer, '');
  } else {
    try {
      const head = await fetch(url, { method: 'HEAD' });
      const type = head.headers.get('content-type') || '';
      if (!head.ok || type.includes('text/html')) return null; // o dev server devolve index.html quando o arquivo não existe
    } catch { return null; }
    gltf = await new GLTFLoader().loadAsync(url, (e) => e.total && onProgress?.(e.loaded / e.total));
  }
  const root = gltf.scene;
  root.rotation.y = MODEL_ROT_Y;
  root.updateMatrixWorld(true);
  // normaliza: comprimento do eixo mais longo = 9 m, centrado em X/Z, pés no chão.
  // setFromObject(..., true) usa os vértices já deformados pelo esqueleto (o modo rápido erra em modelos com rig).
  const box = new THREE.Box3().setFromObject(root, true);
  const size = box.getSize(new THREE.Vector3());
  const s = 9 / Math.max(size.x, size.z);
  root.scale.multiplyScalar(s);
  root.updateMatrixWorld(true);
  box.setFromObject(root, true);
  const c = box.getCenter(new THREE.Vector3());
  root.position.set(-c.x, -box.min.y, -c.z);
  const wrap = new THREE.Group(); wrap.add(root);
  return { object: wrap, animations: gltf.animations };
}
