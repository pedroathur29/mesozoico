// Grava o movimento do dino ao longo do tempo (não faz parte do site): posições de quadril, tronco, cabeça, cauda e pés
// a 60 quadros por segundo, em duas cenas: caminhada (parte, anda, freia) e repouso. Depois: python3 tools/check/tracos.py
// Precisa do Playwright e do site servido: npm run build && npm run preview -- --port 4173
// Uso: node tools/check/tracos.cjs saida.json
const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  const p = await (await b.newContext({ viewport: { width: 900, height: 500 } })).newPage();
  p.on('pageerror', (e) => console.log('PAGEERROR', e.message));
  await p.goto('http://127.0.0.1:4173/?q=0&debug', { waitUntil: 'load' });
  await p.waitForFunction(() => document.getElementById('loader').classList.contains('is-done'), null, { timeout: 90000 });
  await p.waitForTimeout(1200);
  const out = await p.evaluate(() => {
    const rig = window.__gl.rig();
    const run = (seconds, speedAt, t0) => {
      const rows = [];
      for (let i = 0; i < seconds * 60; i++) {
        const t = t0 + i / 60;
        rig.update(t, 1 / 60, { speed: speedAt(i / 60), idle: 1 });
        const a = rig.actionAt(t);
        rows.push({ t: i / 60, act: a ? a.id : '', ...rig.probe() });
      }
      return rows;
    };
    // caminhada: 1 s parado, 10 s andando (com a velocidade pedida oscilando como numa rolagem real), 4 s parado
    const walk = run(15, (t) => (t < 1 || t > 11 ? 0 : 1.75), 1000);
    const idle = run(120, () => 0, 2000);
    return { walk, idle };
  });
  fs.writeFileSync(process.argv[2] || 'tracos.json', JSON.stringify(out));
  console.log('quadros:', out.walk.length, out.idle.length);
  await b.close();
})();
