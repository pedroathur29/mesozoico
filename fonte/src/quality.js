// Qualidade adaptativa (inspirada na ideia do site da DGL: mede, desce rápido, só sobe com folga).
// Níveis: 0 baixa · 1 média · 2 alta. Força com ?q=0|1|2 e mostra fps com ?fps.
//
// O nível é escolhido UMA vez, na abertura, pelo tipo de aparelho. Depois disso o ajuste em tempo real mexe só na
// resolução do desenho (de 0,25 em 0,25), que não recompila nada e quase não se nota. Antes o monitor ligava e
// desligava sombras e plumagem: cada troca recompilava todos os materiais (um tranco visível) e, em máquinas no
// limite, isso podia se repetir a cada meio minuto. A plumagem só sai em último caso, se mesmo na menor resolução
// a página continuar travando, e não volta (sem vai e vem).
const params = new URLSearchParams(location.search);

export const TIERS = [
  // feathers: a camada de plumagem é o que mais pesa; no nível baixo fica só a penugem pintada no corpo
  // dpr: resolução máxima de partida (multiplica os pixels da tela); dprMin: até onde o ajuste pode descer
  { name: 'baixa', dpr: 1,    dprMin: 0.75, feathers: false, shadows: false },
  { name: 'média', dpr: 1.5,  dprMin: 1,    feathers: true,  shadows: false },
  { name: 'alta',  dpr: 2,    dprMin: 1,    feathers: true,  shadows: true  },
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
  // onScale(fator): muda a resolução (1 = a de partida); onDrop(): último recurso, esconde a plumagem
  constructor(tier, locked, onScale, onDrop) {
    this.tier = tier; this.locked = locked; this.onScale = onScale; this.onDrop = onDrop;
    const T = TIERS[tier], dev = Math.min(window.devicePixelRatio || 1, T.dpr);
    this.dpr = dev; this.max = dev; this.min = Math.min(dev, T.dprMin);
    this.last = performance.now(); this.since = performance.now();   // carência: os primeiros segundos não contam
    this.avg = 16.7; this.slowFor = 0; this.goodFor = 0; this.drops = 0; this.dropped = false;
    this.showFps = params.has('fps');
    if (this.showFps) { this.el = document.createElement('div'); this.el.className = 'fps'; document.body.append(this.el); }
  }
  // chamado uma vez por quadro desenhado
  tick(now) {
    const dt = now - this.last; this.last = now;
    if (dt > 250) return;                                    // aba voltou do segundo plano: ignora
    this.avg += (dt - this.avg) * 0.06;                      // média móvel do tempo de quadro (ms)
    if (this.el && Math.random() < 0.1) this.el.textContent = `${TIERS[this.tier].name} · ${this.dpr.toFixed(2)}x · ${Math.round(1000 / this.avg)} fps`;
    if (this.locked || now - this.since < 3500) return;
    const s = dt / 1000;
    // abaixo de ~45 quadros por segundo por 1,5 s: reduz a resolução um degrau
    if (this.avg > 22) { this.slowFor += s; this.goodFor = 0; } else { this.slowFor = 0; if (this.avg < 18) this.goodFor += s; }
    if (this.slowFor > 1.5) {
      this.slowFor = 0; this.drops++;
      if (this.dpr > this.min + 0.01) { this.dpr = Math.max(this.min, this.dpr - 0.25); this.onScale(this.dpr); }
      else if (!this.dropped && TIERS[this.tier].feathers && this.avg > 34) { this.dropped = true; this.onDrop(); }
    }
    // sobe de volta só com folga longa (12 s fluindo) e no máximo duas vezes: evita o vai e vem
    if (this.goodFor > 12 && this.dpr < this.max - 0.01 && this.drops < 4) { this.goodFor = 0; this.dpr = Math.min(this.max, this.dpr + 0.25); this.onScale(this.dpr); }
  }
}
