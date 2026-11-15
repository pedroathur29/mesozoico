// Verificação automática do site (não faz parte do site).
// Precisa do Playwright (npm i -D playwright) e do site servido: npm run build && npm run preview -- --port 4173
// Uso: node tools/check/passada.cjs
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
  const p = await (await b.newContext({ viewport: {width:500,height:300} })).newPage();
  p.on('pageerror', e => console.log('PAGEERROR', e.message));
  p.on('console', m => { if (m.type() === 'error') console.log('console.error', m.text().slice(0, 300)); });
  await p.goto('http://127.0.0.1:4173/?q=0&debug&t=0', { waitUntil: 'load' });
  await p.waitForTimeout(8000);
  for (const mode of ['walk', 'idle']) {
  await p.evaluate((m) => { window.__mode = m; }, mode);
  const res = await p.evaluate(() => {
    const gl = window.__gl, rig = gl.rig();
    if (!rig) return { err: 'sem rig' };
    const MODE = window.__mode || 'walk';
    const prof = (t) => (MODE === 'idle' ? 0 : t < 4 ? 1.8 : t < 6.5 ? 0 : t < 10 ? 2.4 : t < 12 ? 0.9 : 0);
    const N = (MODE === 'idle' ? 70 : 15) * 60, st = [{}, {}], out = { found: rig.found, steps: 0, maxSlide: 0, maxStanceDrift: 0, maxYerr: 0, maxReachErr: 0, swingT: [], maxHeadJump: 0, maxHipJump: 0, minFootY: 9, v: [] };
    let prevHead = null, prevVel = null; out.maxHeadAccel = 0;
    const hv = new (gl.camera.position.constructor)();
    for (let i = 0; i < N; i++) {
      const t = i / 60;
      rig.update(t + (MODE === 'idle' ? 100 : 0), 1 / 60, { speed: prof(t), idle: 1 });
      const fg = gl.footGround(), feet = rig.feet();
      fg.forEach((f, k) => {
        const s = st[k];
        if (f.planted && s.planted) {
          out.maxSlide = Math.max(out.maxSlide, Math.hypot(f.x - s.x, f.z - s.z));
          out.maxStanceDrift = Math.max(out.maxStanceDrift, Math.hypot(f.x - s.x0, f.z - s.z0));
          out.maxYerr = Math.max(out.maxYerr, Math.abs(f.y - s.y0));
          out.maxReachErr = Math.max(out.maxReachErr, Math.abs(f.x - feet[k].gx));
        }
        if (f.planted && !s.planted) { s.x0 = f.x; s.z0 = f.z; s.y0 = f.y; if (s.air != null) { out.steps++; out.swingT.push(+((i - s.air) / 60).toFixed(2)); } }
        if (!f.planted && s.planted) s.air = i;
        if (i === 0) { s.x0 = f.x; s.z0 = f.z; s.y0 = f.y; }
        s.planted = f.planted; s.x = f.x; s.z = f.z;
        out.minFootY = Math.min(out.minFootY, f.y);
      });
      rig.bones.head.updateWorldMatrix(true, false);
      hv.setFromMatrixPosition(rig.bones.head.matrixWorld);
      if (prevHead) { const vel = hv.clone().sub(prevHead); out.maxHeadJump = Math.max(out.maxHeadJump, vel.length()); if (prevVel) { const a = vel.distanceTo(prevVel); if (a > out.maxHeadAccel) { out.maxHeadAccel = a; out.tAccel = +t.toFixed(2); } } prevVel = vel; }
      prevHead = hv.clone();
      if (i % 60 === 0) out.v.push(+rig.speed.toFixed(2));
    }
    out.travel = +rig.travel.toFixed(2);
    out.finalFeet = rig.feet().map(f => ({ x: +f.x.toFixed(2), planted: f.planted }));
    for (const k of ['maxSlide', 'maxStanceDrift', 'maxYerr', 'maxReachErr', 'maxHeadJump', 'maxHeadAccel', 'minFootY']) out[k] = +out[k].toFixed(4);
    return out;
  });
  console.log(mode, JSON.stringify(res));
  }
  await b.close();
})();
