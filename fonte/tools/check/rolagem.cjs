// Verificação automática do site (não faz parte do site).
// Precisa do Playwright (npm i -D playwright) e do site servido: npm run build && npm run preview -- --port 4173
// Uso: node tools/check/rolagem.cjs
// Rola a página inteira como um usuário e mede, quadro a quadro, se algo salta:
// câmera, ponta do focinho na tela, quadril e pés plantados (no referencial do chão).
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
  const p = await (await b.newContext({ viewport: {width: 900, height: 520} })).newPage();
  p.on('pageerror', e => console.log('PAGEERROR', e.message));
  await p.goto('http://127.0.0.1:4173/?q=0&debug&live', { waitUntil: 'load' });
  await p.waitForTimeout(9000);
  await p.evaluate(() => {
    const g = window.__gl, rec = (window.__rec = []), nose = {}, V = g.camera.position.constructor;
    const st = [{}, {}];
    window.__onFrame = (s) => {
      g.anchor('nose', nose);
      const fg = g.footGround() || [];
      rec.push({ y: Math.round(scrollY), cam: g.camera.position.toArray(), nose: [nose.x, nose.y], rot: s.rot, v: g.rig().speed,
        feet: fg.map(f => [f.x, f.z, f.planted]) });
    };
  });
  const H = await p.evaluate(() => document.documentElement.scrollHeight - innerHeight);
  // rolagem em rajadas, com pausas (como alguém lendo), e um trecho rápido
  let y = 0;
  while (y < H) {
    const fast = y > H * 0.55 && y < H * 0.7;
    const burst = fast ? 14 : 6 + Math.floor(Math.random() * 5);
    for (let i = 0; i < burst && y < H; i++) { const d = fast ? 150 : 70; await p.mouse.wheel(0, d); y += d; await p.waitForTimeout(40); }
    await p.waitForTimeout(fast ? 150 : 700);
  }
  await p.waitForTimeout(2500);
  const out = await p.evaluate(() => {
    const r = window.__rec, n = r.length, res = { frames: n };
    const d = (a, b) => Math.hypot(...a.map((v, i) => v - b[i]));
    let camMax = 0, noseMax = 0, camAcc = 0, noseAcc = 0, slide = 0, drift = 0, at = {};
    const st = [{}, {}];
    for (let i = 1; i < n; i++) {
      const dc = d(r[i].cam, r[i - 1].cam), dn = d(r[i].nose, r[i - 1].nose);
      if (dc > camMax) { camMax = dc; at.cam = r[i].y; }
      if (dn > noseMax) { noseMax = dn; at.nose = r[i].y; }
      if (i > 1) {
        const ac = Math.abs(dc - d(r[i - 1].cam, r[i - 2].cam)), an = Math.abs(dn - d(r[i - 1].nose, r[i - 2].nose));
        if (ac > camAcc) { camAcc = ac; at.camAcc = r[i].y; }
        if (an > noseAcc) { noseAcc = an; at.noseAcc = r[i].y; }
      }
      r[i].feet.forEach((f, k) => {
        const pf = r[i - 1].feet[k];
        if (pf && f[2] && pf[2]) { slide = Math.max(slide, Math.hypot(f[0] - pf[0], f[1] - pf[1])); if (st[k].x0 != null) drift = Math.max(drift, Math.hypot(f[0] - st[k].x0, f[1] - st[k].z0)); }
        if (f[2] && (!pf || !pf[2])) { st[k].x0 = f[0]; st[k].z0 = f[1]; }
        if (i === 1) { st[k].x0 = f[0]; st[k].z0 = f[1]; }
      });
    }
    const med = (arr) => arr.sort((a, b) => a - b)[Math.floor(arr.length / 2)];
    const cams = []; for (let i = 1; i < n; i++) cams.push(d(r[i].cam, r[i - 1].cam));
    return { ...res, camMaxStep: +camMax.toFixed(3), camMedianStep: +med(cams).toFixed(4), camMaxAccel: +camAcc.toFixed(3), noseMaxStepPx: +noseMax.toFixed(1), noseMaxAccelPx: +noseAcc.toFixed(1),
      footSlidePerFrame: +slide.toFixed(4), footStanceDrift: +drift.toFixed(4), vmax: +Math.max(...r.map(x => x.v)).toFixed(2), travel: +window.__gl.rig().travel.toFixed(1), at };
  });
  console.log(JSON.stringify(out));
  await b.close();
})();
