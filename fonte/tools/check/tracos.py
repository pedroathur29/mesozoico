"""Analisa o movimento gravado por tracos.cjs (não faz parte do site). Precisa de numpy e Pillow.

Uso: python3 tools/check/tracos.py tracos.json [grafico.png]

Mostra, para a caminhada: variação entre passos, velocidade do pé em relação ao chão ao pousar e ao sair, quanto o pé
plantado se move, amplitude de cada parte do corpo e com que atraso tronco, cabeça e cauda respondem ao quadril.
Para o repouso: quanto tempo a boca fica fechada, variação da respiração e quanto tempo cabeça e cauda ficam paradas.
"""
import sys, json
import numpy as np
from PIL import Image, ImageDraw

d = json.load(open(sys.argv[1]))
FPS = 60.0


def col(rows, f):
    return np.array([f(r) for r in rows], float)


def heading(a, b):   # direção (rad) do ponto a para o ponto b, vista de cima: positivo = nariz para -Z
    return np.arctan2(-(b[:, 2] - a[:, 2]), b[:, 0] - a[:, 0])


def lag_ms(x, y, max_s=0.6):
    """atraso de y em relação a x (ms, positivo = y vem depois) e a correlação nesse atraso."""
    x, y = x - x.mean(), y - y.mean()
    if x.std() < 1e-9 or y.std() < 1e-9:
        return 0, 0
    best = (0, 0)
    for k in range(0, int(max_s * FPS)):
        c = np.corrcoef(x[:len(x) - k], y[k:])[0, 1]
        if abs(c) > abs(best[1]):
            best = (k, c)
    return round(best[0] / FPS * 1000), round(float(best[1]), 2)


def pp(x):
    return float(x.max() - x.min())


def series(rows):
    P = lambda k: np.array([r[k] for r in rows], float)
    s = dict(t=col(rows, lambda r: r['t']), v=col(rows, lambda r: r['v']), travel=col(rows, lambda r: r['travel']),
             hip=P('hip'), chest=P('chest'), head=P('head'), nose=P('nose'), tailBase=P('tailBase') if 'tailBase' in rows[0] else P('tailMid'), tailMid=P('tailMid'), tailTip=P('tailTip'),
             hipYaw=col(rows, lambda r: r['hipYaw']), jaw=col(rows, lambda r: r['jaw']), breath=col(rows, lambda r: r['breath']))
    s['chestYaw'] = heading(s['hip'], s['chest'])
    s['headYaw'] = heading(s['head'], s['nose'])
    s['feet'] = [dict(p=np.array([r['feet'][i]['p'] for r in rows], float), planted=np.array([r['feet'][i]['planted'] for r in rows], bool),
                      gx=col(rows, lambda r: r['feet'][i]['gx'])) for i in range(2)]
    return s


W = series(d['walk'])
I = series(d['idle'])
out = {}

# ------------------------------------------------------------ caminhada
steady = (W['t'] > 3.5) & (W['t'] < 10.5)
lands, lifts, drift, stride = [], [], [], []
for f in W['feet']:
    g = W['travel'] + f['p'][:, 0]                     # posição do pé em relação ao chão
    pl = f['planted']
    for k in range(1, len(pl)):
        if pl[k] and not pl[k - 1]:
            lands.append((W['t'][k], (g[k] - g[k - 1]) * FPS, (f['p'][k - 1, 1] - f['p'][k - 2, 1]) * FPS))
        if not pl[k] and pl[k - 1]:
            lifts.append((W['t'][k], (g[k] - g[k - 1]) * FPS))
    k = 0
    while k < len(pl):
        if pl[k]:
            j = k
            while j < len(pl) and pl[j]:
                j += 1
            if W['v'][k:j].max() > 0.3:
                drift.append(float(np.abs(g[k:j] - g[k]).max()))
            k = j
        else:
            k += 1
    plants = [W['travel'][k] + f['p'][k, 0] for k in range(1, len(pl)) if pl[k] and not pl[k - 1] and steady[k]]
    stride += list(np.diff(plants))
lt = np.array(sorted(t for t, _, _ in lands if 3.5 < t < 10.5))
step_dur = np.diff(lt)
out['caminhada'] = {
    'passos no trecho estável': int(len(lt)),
    'duração do passo (s): média e variação': [round(float(step_dur.mean()), 3), f'{step_dur.std() / step_dur.mean():.1%}'],
    'comprimento da passada (m): média e variação': [round(float(np.mean(stride)), 2), f'{np.std(stride) / np.mean(stride):.1%}'],
    'velocidade do pé contra o chão ao pousar (m/s), pior caso': round(max(abs(v) for t, v, _ in lands if t > 2), 3),
    'velocidade vertical do pé ao pousar (m/s), média': round(float(np.mean([vy for t, _, vy in lands if 3.5 < t < 10.5])), 2),
    'velocidade do pé contra o chão ao sair (m/s), pior caso': round(max(abs(v) for t, v in lifts if t > 2), 3),
    'pé plantado se move (mm), pior caso': round(max(drift) * 1000, 2),
    'sobe e desce (cm): quadril, cabeça, focinho, ponta da cauda': [round(pp(W[k][steady, 1]) * 100, 1) for k in ('hip', 'head', 'nose', 'tailTip')],
    'vai e vem lateral (cm): quadril, focinho, ponta da cauda': [round(pp(W[k][steady, 2]) * 100, 1) for k in ('hip', 'nose', 'tailTip')],
    'cauda, vai e vem lateral (cm): base, meio, ponta': [round(pp(W[k][steady, 2]) * 100, 1) for k in ('tailBase', 'tailMid', 'tailTip')],
    'cauda, sobe e desce (cm): base, meio, ponta': [round(pp(W[k][steady, 1]) * 100, 1) for k in ('tailBase', 'tailMid', 'tailTip')],
    'ponta da cauda: velocidade lateral máx (m/s), andando e na parada': [round(float(np.abs(np.diff(W['tailTip'][:, 2]))[steady[1:]].max() * FPS), 2), round(float(np.abs(np.diff(W['tailTip'][:, 2]))[(W['t'][1:] > 10.5)].max() * FPS), 2)],
    'giro (graus): quadril, tronco, cabeça': [round(np.degrees(pp(W[k][steady])), 1) for k in ('hipYaw', 'chestYaw', 'headYaw')],
    'giro do peito em relação ao quadril (graus)': round(np.degrees(pp((W['chestYaw'] - W['hipYaw'])[steady])), 1),
    'atraso em relação ao giro do quadril (ms, correlação)': {
        'tronco': lag_ms(W['hipYaw'][steady], W['chestYaw'][steady]), 'cabeça': lag_ms(W['hipYaw'][steady], W['headYaw'][steady]),
        'meio da cauda (lateral)': lag_ms(W['hipYaw'][steady], W['tailMid'][steady, 2]), 'ponta da cauda (lateral)': lag_ms(W['hipYaw'][steady], W['tailTip'][steady, 2])},
    'atraso em relação à altura do quadril (ms, correlação)': {
        'tronco': lag_ms(W['hip'][steady, 1], W['chest'][steady, 1]), 'cabeça': lag_ms(W['hip'][steady, 1], W['head'][steady, 1]),
        'ponta da cauda': lag_ms(W['hip'][steady, 1], W['tailTip'][steady, 1])},
    'aceleração máxima da cabeça (m/s²)': round(float(np.linalg.norm(np.diff(W['head'], 2, axis=0), axis=1).max() * FPS * FPS), 1),
}

# ------------------------------------------------------------ repouso
jaw = I['jaw']
opens = int(((jaw[1:] > 0.03) & (jaw[:-1] <= 0.03)).sum())
br = I['breath']
peaks = [br[k] for k in range(1, len(br) - 1) if br[k] > br[k - 1] and br[k] >= br[k + 1] and br[k] > 0.3]
pk_t = [I['t'][k] for k in range(1, len(br) - 1) if br[k] > br[k - 1] and br[k] >= br[k + 1] and br[k] > 0.3]
sp = lambda x: np.linalg.norm(np.diff(x, axis=0), axis=1) * FPS
acts = [r['act'] for r in d['idle']]
names = sorted(set(a for a in acts if a))
free = np.array([not a for a in acts[1:]])
out['repouso (120 s)'] = {
    'boca fechada': f'{(jaw < 0.03).mean():.0%} do tempo', 'vezes que a boca abre': opens,
    'respirações': len(peaks), 'profundidade: variação entre respirações': f'{np.std(peaks) / np.mean(peaks):.1%}',
    'intervalo entre respirações (s): mín, máx': [round(float(np.diff(pk_t).min()), 2), round(float(np.diff(pk_t).max()), 2)],
    'fora das ações, cabeça em pausa (< 3 cm/s)': f'{(sp(I["nose"])[free] < 0.03).mean():.0%} do tempo', 'fora das ações, cabeça em movimento claro (> 8 cm/s)': f'{(sp(I["nose"])[free] > 0.08).mean():.0%}',
    'fora das ações, cauda em pausa (< 3 cm/s)': f'{(sp(I["tailTip"])[free] < 0.03).mean():.0%} do tempo', 'fora das ações, cauda em movimento claro (> 8 cm/s)': f'{(sp(I["tailTip"])[free] > 0.08).mean():.0%}',
    'caminho percorrido em 120 s (m): focinho, ponta da cauda': [round(float(sp(I['nose']).sum() / FPS), 1), round(float(sp(I['tailTip']).sum() / FPS), 1)],
    'quadril: vai e vem lateral (cm)': round(pp(I['hip'][:, 2]) * 100, 1),
    'ações diferentes': names, 'tempo em ação': f'{np.mean([bool(a) for a in acts]):.0%}',
    'aceleração máxima da cabeça (m/s²)': round(float(np.linalg.norm(np.diff(I['head'], 2, axis=0), axis=1).max() * FPS * FPS), 1),
}
print(json.dumps(out, ensure_ascii=False, indent=1))

# ------------------------------------------------------------ gráfico
if len(sys.argv) > 2:
    PW, PH, PAD = 1500, 150, 46
    panels = [
        ('caminhada: altura (m, cada curva centrada)  quadril=branco  cabeça=azul  ponta da cauda=laranja', W['t'], [(W['hip'][:, 1], '#fff'), (W['head'][:, 1], '#6cf'), (W['tailTip'][:, 1], '#fa3')], True),
        ('caminhada: giro visto de cima (rad)  quadril=branco  tronco=verde  cabeça=azul', W['t'], [(W['hipYaw'], '#fff'), (W['chestYaw'], '#7e7'), (W['headYaw'], '#6cf')], True),
        ('caminhada: lateral (m)  quadril=branco  focinho=azul  meio da cauda=amarelo  ponta da cauda=laranja', W['t'], [(W['hip'][:, 2], '#fff'), (W['nose'][:, 2], '#6cf'), (W['tailMid'][:, 2], '#ee6'), (W['tailTip'][:, 2], '#fa3')], True),
        ('caminhada: pés contra o chão (m) e altura x4  esquerdo=verde  direito=rosa  velocidade=cinza', W['t'], [(W['travel'] + W['feet'][0]['p'][:, 0] - W['travel'], '#7e7'), (W['feet'][1]['p'][:, 0], '#f7b'), (W['feet'][0]['p'][:, 1] * 4 - 2, '#7e7'), (W['feet'][1]['p'][:, 1] * 4 - 2, '#f7b'), (W['v'] - 2, '#888')], False),
        ('repouso: lateral do quadril x4=branco  giro da cabeça=azul  altura do focinho-2=verde', I['t'], [(I['hip'][:, 2] * 4, '#fff'), (I['headYaw'], '#6cf'), (I['nose'][:, 1] - 2, '#7e7')], False),
        ('repouso: ponta da cauda lateral=laranja  altura-2=amarelo', I['t'], [(I['tailTip'][:, 2], '#fa3'), (I['tailTip'][:, 1] - 2, '#ee6')], False),
        ('repouso: respiração=branco  boca=vermelho', I['t'], [(I['breath'], '#fff'), (I['jaw'], '#f55')], False),
    ]
    img = Image.new('RGB', (PW, (PH + PAD) * len(panels) + 10), '#10161c')
    dr = ImageDraw.Draw(img)
    for n, (title, t, curves, center) in enumerate(panels):
        y0 = n * (PH + PAD) + 22
        dr.text((8, y0 - 18), title, fill='#9ab')
        dr.rectangle([0, y0, PW - 1, y0 + PH], outline='#243')
        ys = [c - c.mean() if center else c for c, _ in curves]
        lo, hi = min(y.min() for y in ys), max(y.max() for y in ys)
        hi = hi if hi > lo else lo + 1
        for sec in range(0, int(t.max()) + 1, 1 if t.max() < 30 else 10):
            x = int(sec / t.max() * (PW - 1))
            dr.line([x, y0, x, y0 + PH], fill='#1c2a33')
            dr.text((x + 2, y0 + PH + 2), f'{sec}s', fill='#567')
        dr.text((PW - 150, y0 + 2), f'faixa: {hi - lo:.3f}', fill='#567')
        for y, (_, colr) in zip(ys, curves):
            pts = [(tt / t.max() * (PW - 1), y0 + PH - 3 - (v - lo) / (hi - lo) * (PH - 6)) for tt, v in zip(t, y)]
            dr.line(pts, fill=colr, width=1)
        if 'repouso' in title and n == 4:
            last = ''
            for r in d['idle']:
                if r['act'] and r['act'] != last:
                    dr.text((r['t'] / t.max() * (PW - 1), y0 + 2), r['act'], fill='#c9a')
                last = r['act']
    img.save(sys.argv[2])
