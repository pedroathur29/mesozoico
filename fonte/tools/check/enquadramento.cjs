// Verificação automática do site (não faz parte do site).
// Precisa do Playwright (npm i -D playwright) e do site servido: npm run build && npm run preview -- --port 4173
// Uso: node tools/check/enquadramento.cjs
// Confere enquadramento e sobreposição com o texto em vários tamanhos de tela, sem depender de imagens.
const { chromium } = require('playwright');
const VPS = JSON.parse(process.argv[2] || '[[1440,810],[1280,720],[1024,768],[820,1180,1],[390,844,1],[360,640,1]]');
const FS = [0.05, 0.5, 0.95];
(async () => {
  const b = await chromium.launch({ args: ['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'] });
  for (const [W, H, mob] of VPS) {
    const p = await (await b.newContext({ viewport: {width: W, height: H}, isMobile: !!mob, hasTouch: !!mob })).newPage();
    p.on('pageerror', e => console.log('PAGEERROR', e.message));
    await p.goto('http://127.0.0.1:4173/?q=0&debug&t=3', { waitUntil: 'load' });
    await p.waitForTimeout(8000);
    const acts = await p.evaluate(() => [...document.querySelectorAll('.act')].map(a => [a.offsetTop, a.offsetHeight]));
    const rows = [];
    for (let a = 1; a <= 7; a++) for (const f of FS) {
      const [top, h] = acts[a - 1];
      await p.evaluate(y => window.scrollTo(0, y), Math.round(top + Math.max(0, h - H) * f));
      await p.waitForTimeout(900);
      const r = await p.evaluate((act) => {
        const g = window.__gl, W = innerWidth, H = innerHeight, pts = g.extent(), M = 24;
        const sec = document.querySelector('#ato-' + act);
        const rects = [...sec.querySelectorAll('.copy .kicker, .copy .num, .copy h2, .copy p')].map(e => e.getBoundingClientRect()).filter(r => r.width > 0 && r.bottom > 0 && r.top < H);
        let hit = 0;
        for (const [x, y] of pts) for (const r of rects) if (x > r.left - M && x < r.right + M && y > r.top - M && y < r.bottom + M) { hit++; break; }
        const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]);
        const inside = pts.filter(([x, y]) => x >= 0 && x <= W && y >= 0 && y <= H).length;
        return [hit, Math.round(100 * inside / pts.length), Math.round(Math.min(...xs)), Math.round(Math.max(...xs)), Math.round(Math.min(...ys)), Math.round(Math.max(...ys)), g.stacked ? 's' : 'w'];
      }, a);
      rows.push(`${a}@${f}: hit=${r[0]} in=${r[1]}% x[${r[2]},${r[3]}] y[${r[4]},${r[5]}]`);
    }
    console.log(`\n== ${W}x${H} ==\n` + rows.join('\n'));
    await p.close();
  }
  await b.close();
})();
