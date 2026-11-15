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
const NUM = ['rot', 'pitch', 'roll', 'shift', 'fov', 'glowA', 'glowX', 'glowY', 'light', 'human', 'walk', 'roar', 'sniff', 'ruffle', 'grab', 'nk', 'flora'];
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

// entrada: quando o loading termina, o dino chega andando pela esquerda e freia até parar no lugar
const intro = { total: 8.5, from: null };   // "from" = quanto ele já tinha andado quando a entrada começou
function playIntro() {
  const rig = gl.rig();
  if (reduce || DEBUG || scrollY > 40 || !rig) return;
  intro.from = rig.travel;
}

// velocidade pedida ao dino (m/s). Ele anda nos atos com "walk" enquanto a página rola; o controlador de
// passada (src/anim.js) acelera, freia e termina o passo sozinho, então parar de rolar não congela a pose.
function walkCommand(s, remaining) {
  if (reduce) return 0;
  if (remaining > 0) return Math.min(2.1, Math.sqrt(2 * 1.5 * remaining) + 0.3);      // entrada: freia para parar no ponto
  if (loop.scrollV < 45) return 0;
  return s.walk * Math.min(2.4, 0.85 + loop.scrollV / 900);
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
  const s = follow(target, reduce || FROZEN ? 1 : 1 - Math.exp(-dt * 8.5));
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
  gl.apply(s, time, step, m);
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
