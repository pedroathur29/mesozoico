// Qualidade adaptativa simples (inspirada na ideia do site da DGL: mede, desce rápido, só sobe com folga).
// Níveis: 0 baixa · 1 média · 2 alta. Força com ?q=0|1|2 e mostra fps com ?fps.
const params = new URLSearchParams(location.search);

export const TIERS = [
  { name: 'baixa', dpr: 1,   particles: 250,  shadows: false },
  { name: 'média', dpr: 1.5, particles: 600,  shadows: false },
  { name: 'alta',  dpr: 2,   particles: 1000, shadows: true  },
];

export function initialTier() {
  const forced = params.get('q');
  if (forced !== null && TIERS[+forced]) return { tier: +forced, locked: true };
  const mobile = matchMedia('(pointer: coarse)').matches || innerWidth < 768;
  const cores = navigator.hardwareConcurrency || 4;
  const mem = navigator.deviceMemory || 4;
  const saveData = navigator.connection && navigator.connection.saveData;
  if (saveData || cores <= 2 || mem <= 2) return { tier: 0, locked: false };
  if (mobile) return { tier: 1, locked: false };
  return { tier: 2, locked: false };
}

export class QualityMonitor {
  constructor(tier, locked, onChange) {
    this.tier = tier; this.locked = locked; this.onChange = onChange;
    this.frames = 0; this.slow = 0; this.last = performance.now(); this.good = 0;
    this.showFps = params.has('fps');
    if (this.showFps) { this.el = document.createElement('div'); this.el.className = 'fps'; document.body.append(this.el); }
  }
  // chamado uma vez por quadro desenhado
  tick(now) {
    const dt = now - this.last; this.last = now;
    if (dt > 250) return; // aba voltou do segundo plano: ignora
    this.frames++; if (dt > 34) this.slow++;
    if (this.frames < 45) return;
    const ratio = this.slow / this.frames;
    if (this.el) this.el.textContent = `${TIERS[this.tier].name} · ${Math.round(1000 / (dt || 16))} fps`;
    if (!this.locked) {
      if (ratio > 0.5 && this.tier > 0) { this.tier--; this.onChange(this.tier); this.good = 0; }
      else if (ratio < 0.05) { if (++this.good >= 6 && this.tier < 2) { this.tier++; this.onChange(this.tier); this.good = 0; } }
      else this.good = 0;
    }
    this.frames = 0; this.slow = 0;
  }
}
