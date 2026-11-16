import './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { createScene } from './scene.js';
import { loadDinoModel } from './dino.js';
import { KEYFRAMES } from './acts.js';
import { initialTier, QualityMonitor } from './quality.js';

document.documentElement.classList.add('js');
document.body.classList.add('is-loading');
gsap.registerPlugin(ScrollTrigger);

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* ---------- loading: progresso real por tarefas ---------- */
const loader = { num: $('#loader-num'), bar: $('#loader-bar'), el: $('#loader'), target: 0, shown: 0 };
const tasks = { fonts: 0, scene: 0, model: 0 };
const setTask = (k, v) => { tasks[k] = v; loader.target = (tasks.fonts + tasks.scene + tasks.model) / 3; };
(function paintLoader() {
  loader.shown += (loader.target - loader.shown) * 0.12;
  const pct = Math.round(loader.shown * 100);
  loader.num.textContent = pct; loader.bar.style.width = pct + '%';
  if (!loader.done) requestAnimationFrame(paintLoader);
})();

document.fonts.ready.then(() => setTask('fonts', 1));

/* ---------- cena ---------- */
const { tier, locked } = initialTier();
const gl = createScene($('#gl'), tier);
const DEBUG = new URLSearchParams(location.search).has('debug');
if (DEBUG) window.__gl = gl; // ?debug expõe a cena no console
const monitor = new QualityMonitor(tier, locked, (t) => gl.setTier(t));
setTask('scene', 1);

// modelo real (se existir); senão fica o placeholder
// ?debug&model=nome carrega assets/models/nome.glb (para comparar variantes do modelo)
const MODEL_NAME = (DEBUG && new URLSearchParams(location.search).get('model')) || 'yutyrannus';
const MODEL_URL = import.meta.env.BASE_URL + 'assets/models/' + MODEL_NAME.replace(/[^\w.-]/g, '') + '.glb';
loadDinoModel(MODEL_URL, (p) => setTask('model', p)).then((m) => {
  if (m) gl.setModel(m.object);
  setTask('model', 1);
}).catch((e) => { console.warn('Modelo não carregou, usando placeholder:', e); setTask('model', 1); });

/* ---------- scroll suave + keyframes ---------- */
const lenis = reduce ? null : new Lenis({ lerp: 0.09, smoothWheel: true });
if (lenis) {
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  lenis.stop();
}

// posição em pixels de cada keyframe (recalculada quando o layout muda)
let stops = [];
function measure() {
  const secs = $$('.act');
  stops = KEYFRAMES.map((k) => {
    const el = secs[k.act - 1], top = el.offsetTop, h = el.offsetHeight - innerHeight;
    return { ...k, y: top + Math.max(0, h) * k.at };
  }).sort((a, b) => a.y - b.y);
  buildSlopes();
}
// campos interpolados entre keyframes (ver src/acts.js)
const VEC = ['cam', 'look', 'glow', 'bg', 'ink', 'acc'];
const THEME = ['bg', 'ink', 'acc']; // cores do tema trocam rápido (quase um corte), o resto flui
const sharp = (r) => smooth(Math.min(1, Math.max(0, (r - 0.38) / 0.24)));
const NUM = ['rot', 'pitch', 'roll', 'shift', 'fov', 'glowA', 'glowX', 'glowY', 'light', 'human', 'walk', 'roar', 'sniff', 'ruffle', 'grab', 'nk', 'flora'];
const lerp = (a, b, t) => a + (b - a) * t;
const lerpArr = (a, b, t) => a.map((v, i) => lerp(v, b[i], t));
const smooth = (t) => t * t * (3 - 2 * t);
// Entre keyframes, cada valor segue uma curva que passa por todos eles sem quinas e sem parar em cada um (cúbica
// monótona: não passa do ponto). Antes cada trecho começava e terminava parado, e a câmera "freava" a cada keyframe
// no meio de uma rolagem contínua. Ela só para onde o movimento muda de sentido ou fica parado de propósito.
let slopes = null;
function buildSlopes() {
  const n = stops.length, comp = (k) => (VEC.includes(k) ? stops[0][k].length : 1), val = (s, k, c) => (VEC.includes(k) ? s[k][c] : s[k]);
  slopes = {};
  for (const k of [...VEC, ...NUM]) {
    if (THEME.includes(k)) continue;
    slopes[k] = [];
    for (let c = 0; c < comp(k); c++) {
      const d = [], m = new Array(n).fill(0);
      for (let i = 0; i < n - 1; i++) { const h = stops[i + 1].y - stops[i].y; d.push(h > 0 ? (val(stops[i + 1], k, c) - val(stops[i], k, c)) / h : 0); }
      for (let i = 1; i < n - 1; i++) m[i] = d[i - 1] * d[i] > 0 ? (3 * (stops[i + 1].y - stops[i - 1].y)) / ((2 * stops[i + 1].y - stops[i].y - stops[i - 1].y) / d[i - 1] + (stops[i + 1].y + stops[i].y - 2 * stops[i - 1].y) / d[i]) : 0;
      slopes[k].push(m);
    }
  }
}
function hermite(a, b, ma, mb, h, u) {
  const u2 = u * u, u3 = u2 * u;
  return (2 * u3 - 3 * u2 + 1) * a + (u3 - 2 * u2 + u) * h * ma + (-2 * u3 + 3 * u2) * b + (u3 - u2) * h * mb;
}
function stateAt(y) {
  if (y <= stops[0].y) return stops[0];
  const last = stops[stops.length - 1];
  if (y >= last.y) return last;
  let i = 0; while (stops[i + 1].y <= y) i++;
  const A = stops[i], B = stops[i + 1], h = B.y - A.y;
  const r = h > 0 ? (y - A.y) / h : 1;
  const o = {};
  for (const k of VEC) {
    o[k] = THEME.includes(k) ? lerpArr(A[k], B[k], sharp(r)) : A[k].map((a, c) => hermite(a, B[k][c], slopes[k][c][i], slopes[k][c][i + 1], h, r));
  }
  for (const k of NUM) o[k] = hermite(A[k], B[k], slopes[k][0][i], slopes[k][0][i + 1], h, r);
  return o;
}

// Suaviza o estado para a câmera "chegar" sem trancos: uma mola amortecida (sem passar do ponto). Diferente do filtro
// simples de antes, ela também suaviza a aceleração: a câmera não arranca nem para de uma vez quando a rolagem começa
// ou termina. dt = 0: copia o alvo (movimento reduzido e capturas de teste).
let cur = null, vel = null;
const W = 8.5;
function follow(target, dt) {
  if (!cur) { cur = JSON.parse(JSON.stringify(target)); vel = {}; }
  const n = Math.max(1, Math.ceil(dt * 120)), h = dt / n;
  const step = (key, c, x, tgt) => {
    if (!dt) { vel[key + c] = 0; return tgt; }
    let v = vel[key + c] || 0;
    for (let i = 0; i < n; i++) { v += (W * W * (tgt - x) - 2 * W * v) * h; x += v * h; }
    vel[key + c] = v; return x;
  };
  for (const key of VEC) cur[key] = cur[key].map((x, c) => step(key, c, x, target[key][c]));
  for (const key of NUM) cur[key] = step(key, 0, cur[key], target[key]);
  return cur;
}

// testes (?debug): percorre uma rolagem sintética (lista de posições, um quadro a cada dt) e devolve a câmera de cada quadro
if (DEBUG) window.__camPath = (ys, dt) => {
  const keep = [cur, vel]; cur = null; vel = null;
  const out = ys.map((y) => { const s = follow(stateAt(y), dt); return [...s.cam, ...s.look, s.rot, s.shift, s.fov]; });
  [cur, vel] = keep; return out;
};

const root = document.documentElement;
function paintGlow(s) {
  const rgb = (a) => a.map(Math.round).join(',');
  root.style.setProperty('--bg', `rgb(${rgb(s.bg)})`);
  root.style.setProperty('--bg-rgb', rgb(s.bg));
  root.style.setProperty('--ink-rgb', rgb(s.ink));
  root.style.setProperty('--acc-rgb', rgb(s.acc));
  root.style.setProperty('--glow-c', s.glow.map(Math.round).join(','));
  root.style.setProperty('--glow-a', s.glowA.toFixed(3));
  root.style.setProperty('--glow-x', (gl.stacked ? 50 : s.glowX) + '%');
  root.style.setProperty('--glow-y', (gl.stacked ? 28 : s.glowY) + '%');
}

/* ---------- textos: revelação, contagem dos números e títulos por palavra ---------- */
let activeAct = 1;
function splitHeadings() {
  $$('.act h2').forEach((h) => {
    const words = h.textContent.trim().split(/\s+/);
    h.removeAttribute('data-reveal');
    h.setAttribute('aria-label', h.textContent.trim());
    h.innerHTML = words.map((w, i) => `<span class="w" aria-hidden="true"><span style="--i:${i}">${w}</span></span>`).join(' ');
  });
}
// "~20" -> conta de 0 a 20 mantendo o prefixo
function countUp(el) {
  const full = el.dataset.full || (el.dataset.full = el.textContent); // guarda o valor final: a contagem pode ser interrompida no meio
  const m = full.match(/^(\D*)(\d+)$/);
  if (!m || reduce) return;
  const o = { v: 0 }, end = +m[2];
  if (el._tw) el._tw.kill();
  el._tw = gsap.to(o, { v: end, duration: 0.9 + Math.min(0.6, end / 200), ease: 'power2.out', onUpdate: () => { el.textContent = m[1] + Math.round(o.v); }, onComplete: () => { el.textContent = m[1] + end; } });
}
function setupReveals() {
  splitHeadings();
  const dots = $$('[data-dot]'), navs = $$('[data-nav]'), ghosts = $$('[data-ghost]');
  // fecho: o título da abertura volta atrás do dino e as anotações somem
  const showGhost = (n) => ghosts.forEach((g) => g.classList.toggle('is-on', +g.dataset.ghost === n));
  const outro = $('.outro');
  if (outro) ScrollTrigger.create({
    trigger: outro, start: 'top 55%',
    onToggle: (self) => { activeAct = self.isActive ? 0 : 7; showGhost(self.isActive ? 1 : 7); },
  });
  $$('.act').forEach((sec) => {
    const n = +sec.dataset.act;
    // o texto de cada ato aparece junto (com escalonamento via CSS) enquanto o ato está na tela
    ScrollTrigger.create({
      trigger: sec, start: 'top 70%', end: 'bottom 35%',
      onToggle: (self) => { sec.classList.toggle('is-in', self.isActive); if (self.isActive) $$('.num > span', sec).forEach(countUp); },
    });
    ScrollTrigger.create({
      trigger: sec, start: 'top 55%', end: 'bottom 55%',
      onToggle: (self) => {
        if (!self.isActive) return;
        activeAct = n;
        dots.forEach((d) => d.classList.toggle('is-on', +d.dataset.dot === n));
        navs.forEach((a) => a.classList.toggle('is-on', +a.dataset.nav === n));
        showGhost(n);
      },
    });
  });
}

/* ---------- loop de desenho ---------- */
const QS = new URLSearchParams(location.search);
const FROZEN = DEBUG && !QS.has('live');   // ?debug congela atrasos e suavizações (capturas); ?debug&live mantém tudo como no site
const callouts = $$('.callout').map((el) => ({ el, name: el.dataset.callout, act: +el.dataset.in, pos: { x: 0, y: 0, visible: false }, on: false }));
// estado do loop: última posição da página, velocidade de rolagem suavizada (px/s) e relógio
const loop = { lastY: null, lastT: 0, scrollV: 0, idle: reduce ? 0 : 1 };

// ponteiro (só mouse): a cabeça do dino acompanha de leve
const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
addEventListener('pointermove', (e) => {
  if (e.pointerType !== 'mouse') return;
  pointer.tx = (e.clientX / innerWidth) * 2 - 1; pointer.ty = (e.clientY / innerHeight) * 2 - 1;
}, { passive: true });

// entrada: quando o loading termina, o dino já está inteiro no quadro, um pouco atrás da marca. Ele dá alguns passos
// até o lugar e freia, enquanto a câmera se aproxima (ver "enter" em src/scene.js). Nada dele sai da tela.
const intro = { total: 3.2, from: null };   // "from" = quanto ele já tinha andado quando a entrada começou
function playIntro() {
  const rig = gl.rig();
  if (reduce || DEBUG || scrollY > 40 || !rig) return;
  intro.total = gl.stacked ? 2.2 : 3.2;
  intro.from = rig.travel;
}

// velocidade pedida ao dino (m/s). Ele anda nos atos com "walk" enquanto a página rola; o controlador de
// passada (src/anim.js) acelera, freia e termina o passo sozinho, então parar de rolar não congela a pose.
function walkCommand(s, remaining) {
  if (reduce) return 0;
  if (remaining > 0) return Math.min(1.6, Math.sqrt(2 * 1.2 * remaining) + 0.25);     // entrada: passo calmo, freia para parar no ponto
  // sem degrau: a vontade de andar cresce aos poucos com a velocidade da rolagem (antes ligava de uma vez em 45 px/s)
  const go = Math.min(1, Math.max(0, (loop.scrollV - 20) / 110));
  return s.walk * go * go * (3 - 2 * go) * Math.min(2.4, 0.85 + loop.scrollV / 900);
}

function frame(now) {
  if (document.hidden) { loop.lastT = 0; return; }
  const dt = loop.lastT ? Math.min(0.05, (now - loop.lastT) / 1000) : 1 / 60;
  loop.lastT = now;
  const y = lenis ? lenis.scroll : scrollY;
  const dy = loop.lastY === null ? 0 : Math.abs(y - loop.lastY);
  loop.lastY = y;
  loop.scrollV += (Math.min(dy / dt, 6000) - loop.scrollV) * (1 - Math.exp(-dt * 9));
  const target = stateAt(y);
  // a câmera "chega" sem trancos; o fator não depende da taxa de quadros. ?debug: sem atraso (testes em máquinas lentas)
  const s = follow(target, reduce || FROZEN ? 0 : dt);
  paintGlow(s);
  pointer.x += (pointer.tx - pointer.x) * (1 - Math.exp(-dt * 4)); pointer.y += (pointer.ty - pointer.y) * (1 - Math.exp(-dt * 4));
  const rig = gl.rig();
  const remaining = rig && intro.from !== null ? Math.max(0, intro.total - (rig.travel - intro.from)) : 0;
  const m = { speed: walkCommand(s, remaining), roar: s.roar, idle: loop.idle, enter: remaining, pointer, snap: reduce || FROZEN };
  // Testes: ?debug liga window.__dbg. { t: 3 } congela o relógio; { speed, roar, enter, idle } trocam os comandos;
  // { sim: { time: 2.5, speed: 1.8 } } faz o dino andar "por baixo dos panos" antes da captura.
  const dbg = DEBUG && window.__dbg;
  let time = now, step = dt;
  if (DEBUG) {
    for (const k of ['speed', 'roar', 'idle', 'enter']) if (QS.has(k)) m[k] = +QS.get(k);
    if (QS.has('t')) { time = +QS.get('t') * 1000; step = 0; }
    if (dbg) {
      const { t, sim, ...rest } = dbg;
      Object.assign(m, rest);
      if (sim && rig) { dbg.simEnd = rig.simulate(sim.time, sim.speed, { ...m, look: null }, sim.t0 || 0); delete dbg.sim; }
      if (t != null) { time = t * 1000; step = 0; } else if (dbg.simEnd != null) { time = dbg.simEnd * 1000; step = 0; }
    }
  }
  // testes: window.__cam = { cam, look, fov, shift, rot, ... } troca o enquadramento (para olhar um detalhe de perto)
  gl.apply(DEBUG && window.__cam ? { ...s, ...window.__cam } : s, time, step, m);
  gl.render();
  // anotações de anatomia: seguem o ponto do corpo e só aparecem no ato delas
  for (const c of callouts) {
    const a = c.act === activeAct ? gl.anchor(c.name, c.pos) : null;
    const on = !!(a && a.visible);
    if (on) {
      c.el.style.transform = `translate(${a.x.toFixed(1)}px, ${a.y.toFixed(1)}px)`;
      const left = a.x > innerWidth * 0.62; // perto da borda direita, o rótulo abre para a esquerda
      if (left !== c.left) { c.left = left; c.el.classList.toggle('callout--left', left); }
    }
    if (on !== c.on) { c.on = on; c.el.classList.toggle('is-on', on); }
  }
  monitor.tick(now);
  if (DEBUG && window.__onFrame) window.__onFrame(s);
}

function start() {
  measure(); setupReveals();
  ScrollTrigger.addEventListener('refresh', measure);
  ScrollTrigger.refresh();
  gl.warm();
  gsap.ticker.add((_, __, ___, ____) => frame(performance.now()));
  loader.done = true;
  loader.el.classList.add('is-done');
  document.body.classList.remove('is-loading');
  if (lenis) lenis.start();
  playIntro();
  const hash = location.hash && $(location.hash);
  if (hash) lenis ? lenis.scrollTo(hash, { immediate: true }) : hash.scrollIntoView();
}

// espera o loading chegar a 100% (e um mínimo para a tela não piscar)
const t0 = performance.now();
(function wait() {
  if (loader.target >= 0.999 && performance.now() - t0 > 700) { loader.target = 1; setTimeout(start, 350); }
  else requestAnimationFrame(wait);
})();

addEventListener('resize', () => { gl.resize(); ScrollTrigger.refresh(); });
$$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
  const t = $(a.getAttribute('href')); if (!t) return;
  e.preventDefault(); lenis ? lenis.scrollTo(t, { duration: 1.6 }) : t.scrollIntoView();
}));
