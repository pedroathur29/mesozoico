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
}
// campos interpolados entre keyframes (ver src/acts.js)
const VEC = ['cam', 'look', 'glow', 'bg', 'ink', 'acc'];
const THEME = ['bg', 'ink', 'acc']; // cores do tema trocam rápido (quase um corte), o resto flui
const sharp = (r) => smooth(Math.min(1, Math.max(0, (r - 0.38) / 0.24)));
const NUM = ['rot', 'pitch', 'roll', 'shift', 'fov', 'glowA', 'glowX', 'glowY', 'light', 'human', 'walk', 'roar', 'sniff', 'ruffle', 'grab', 'nk'];
const lerp = (a, b, t) => a + (b - a) * t;
const lerpArr = (a, b, t) => a.map((v, i) => lerp(v, b[i], t));
const smooth = (t) => t * t * (3 - 2 * t);
function stateAt(y) {
  if (y <= stops[0].y) return stops[0];
  const last = stops[stops.length - 1];
  if (y >= last.y) return last;
  let i = 0; while (stops[i + 1].y < y) i++;
  const A = stops[i], B = stops[i + 1];
  const t = smooth((y - A.y) / (B.y - A.y));
  const o = {};
  const r = (y - A.y) / (B.y - A.y);
  for (const k of VEC) o[k] = lerpArr(A[k], B[k], THEME.includes(k) ? sharp(r) : t);
  for (const k of NUM) o[k] = lerp(A[k], B[k], t);
  return o;
}

// suaviza o estado para a câmera "chegar" sem trancos
let cur = null;
function follow(target, k) {
  if (!cur) return (cur = JSON.parse(JSON.stringify(target)));
  for (const key of VEC) cur[key] = lerpArr(cur[key], target[key], k);
  for (const key of NUM) cur[key] = lerp(cur[key], target[key], k);
  return cur;
}

const root = document.documentElement;
function paintGlow(s) {
  const rgb = (a) => a.map(Math.round).join(',');
  root.style.setProperty('--bg', `rgb(${rgb(s.bg)})`);
  root.style.setProperty('--bg-rgb', rgb(s.bg));
  root.style.setProperty('--ink-rgb', rgb(s.ink));
  root.style.setProperty('--acc-rgb', rgb(s.acc));
  root.style.setProperty('--glow-c', s.glow.map(Math.round).join(','));
  root.style.setProperty('--glow-a', s.glowA.toFixed(3));
  const narrow = innerWidth < 760;
  root.style.setProperty('--glow-x', (narrow ? 50 : s.glowX) + '%');
  root.style.setProperty('--glow-y', (narrow ? 28 : s.glowY) + '%');
}

/* ---------- textos: revelação e contadores ---------- */
function setupReveals() {
  const dots = $$('[data-dot]'), navs = $$('[data-nav]'), ghosts = $$('[data-ghost]');
  $$('.act').forEach((sec) => {
    const n = +sec.dataset.act;
    // o texto de cada ato aparece junto (com escalonamento via CSS) enquanto o ato está na tela
    ScrollTrigger.create({
      trigger: sec, start: 'top 70%', end: 'bottom 35%',
      onToggle: (self) => sec.classList.toggle('is-in', self.isActive),
    });
    ScrollTrigger.create({
      trigger: sec, start: 'top 55%', end: 'bottom 55%',
      onToggle: (self) => {
        if (!self.isActive) return;
        dots.forEach((d) => d.classList.toggle('is-on', +d.dataset.dot === n));
        navs.forEach((a) => a.classList.toggle('is-on', +a.dataset.nav === n));
        ghosts.forEach((g) => g.classList.toggle('is-on', +g.dataset.ghost === n));
      },
    });
  });
}

/* ---------- loop de desenho ---------- */
// movimento do dino: a fase do passo avança com a rolagem, e ele para (suavemente) quando a página para
const motion = { phase: 0, moving: 0, lastY: null, idle: reduce ? 0 : 1 };
const QS = new URLSearchParams(location.search);
const STRIDE = 2.9; // metros que o dino avança num ciclo completo de passo (para o pé não patinar na entrada)

// ponteiro (só mouse): a cabeça do dino acompanha de leve
const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
addEventListener('pointermove', (e) => {
  if (e.pointerType !== 'mouse') return;
  pointer.tx = (e.clientX / innerWidth) * 2 - 1; pointer.ty = (e.clientY / innerHeight) * 2 - 1;
}, { passive: true });

// entrada: quando o loading termina, o dino chega andando pela esquerda
const intro = { total: 12, dist: 0 };
function playIntro() {
  if (reduce || DEBUG || scrollY > 40) return;
  intro.dist = intro.total;
  gsap.to(intro, { dist: 0, duration: 2.8, ease: 'power2.out', delay: 0.1 });
}
function frame(now) {
  if (document.hidden) return;
  const y = lenis ? lenis.scroll : scrollY;
  const dy = motion.lastY === null ? 0 : Math.abs(y - motion.lastY);
  motion.lastY = y;
  motion.phase += Math.min(dy, 120) * 0.011;            // ~570 px de rolagem = um ciclo completo (dois passos)
  motion.moving += ((dy > 0.4 ? 1 : 0) - motion.moving) * (dy > 0.4 ? 0.2 : 0.06);
  const target = stateAt(y);
  const s = follow(target, reduce || DEBUG ? 1 : 0.14); // ?debug: sem atraso (testes em máquinas lentas)
  paintGlow(s);
  pointer.x += (pointer.tx - pointer.x) * 0.06; pointer.y += (pointer.ty - pointer.y) * 0.06;
  const arriving = Math.min(1, intro.dist / 1.4); // as pernas assentam no último metro e meio
  const m = {
    walk: reduce ? 0 : Math.max(s.walk * motion.moving, arriving),
    phase: motion.phase + ((intro.total - intro.dist) / STRIDE) * Math.PI * 2,
    roar: s.roar, idle: motion.idle, enter: intro.dist, pointer, snap: reduce || DEBUG,
  };
  // ?debug&walk=1&phase=1.5&roar=1&enter=5&t=2 fixa a pose (para capturas de teste)
  if (DEBUG) for (const k of ['walk', 'phase', 'roar', 'idle', 'enter']) if (QS.has(k)) m[k] = +QS.get(k);
  gl.apply(s, DEBUG && QS.has('t') ? +QS.get('t') * 1000 : now, m);
  gl.render();
  monitor.tick(now);
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
