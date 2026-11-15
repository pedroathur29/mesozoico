"""Prepara o modelo do Yutyrannus para o site (rodar com o Blender como módulo Python: pip install bpy pillow).

Uso: python tools/clean_model.py -- entrada.glb saida.glb [tex=1024] [trim=0.5] [white=1] [bulk=1] [plume=1] [pattern=1]

O que faz, nesta ordem:
  1. remove a sela (Object_10) e uma esfera solta (Icosphere);
  2. trim: apara a camada de plumagem. Cada vértice dos cartões (Object_8) é puxado em direção ao ponto mais
     próximo do corpo (Object_6). 0 mantém, 0.5 corta pela metade;
  3. bulk: dá volume. Os vértices do corpo andam para fora, ao longo da normal, tanto quanto o osso que os
     comanda pede: mais nas coxas, no quadril e na base da cauda, pouco no tronco e na barriga (robusto, mas esguio).
     Cabeça, mãos, pés, dentes e garras não mudam. Os cartões de plumagem acompanham a pele;
  4. plume: varia o comprimento e a direção dos cartões e cria os tufos longos: um penacho na ponta da cauda
     e uma crina na nuca (cartões duplicados, alongados e penteados para trás);
  5. troca a textura da plumagem por um desenho próprio de FILAMENTOS SIMPLES (fios sem ramificação), gerado
     aqui por código. A textura original mostrava penas com raque e barbas, o que contradiz o texto do site;
  6. white: clareia a textura de cor do corpo. Áreas coloridas (olho, boca, língua) ficam como estão;
  7. pattern: pinta um padrão de plumagem, desenho próprio (a cor real do animal é desconhecida): listras
     escuras inclinadas do dorso para os flancos, anéis na cauda, penacho creme, máscara escura no focinho e
     em volta do olho, crista ferrugem, "meias" escuras nas pernas e nas mãos. No corpo o padrão vai para a
     textura (nítido mesmo com poucos vértices); na plumagem, uma cor por cartão (cores de vértice);
  8. adapta o rig: três chaves de forma (morph targets) que o esqueleto não tinha: "chest" (tórax expande),
     "belly" (abdômen expande) e "nostril" (narinas abrem). Os olhos ganham material próprio ("..._Eye");
  9. grava em cada cartão os atributos _TIP (0 na base, cresce até a ponta) e _SEED (número fixo por cartão),
     que o site usa para balançar os filamentos; reduz as texturas para tex px e exporta .glb (WebP).

Espaço de mundo do Blender neste modelo: nariz em -Y, cauda em +Y, cima em +Z, lado em X; 2 unidades = 1 m.
"""
import sys, os, re, math, bpy, bmesh
import numpy as np
from mathutils.bvhtree import BVHTree
from mathutils.kdtree import KDTree

a = sys.argv[sys.argv.index('--') + 1:]
src, dst = a[0], a[1]
opt = dict(x.split('=') for x in a[2:])
tex = int(opt.get('tex', 1024))
trim = float(opt.get('trim', 0.5))
white = float(opt.get('white', 1))
bulk = float(opt.get('bulk', 1))
plume = float(opt.get('plume', 1))
pattern = float(opt.get('pattern', 1))
rng = np.random.default_rng(7)

bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=src)
for n in ('Object_10', 'Icosphere'):
    o = bpy.data.objects.get(n)
    if o:
        bpy.data.objects.remove(o, do_unlink=True)
body = bpy.data.objects['Object_6']
feat = bpy.data.objects['Object_8']
arm = next(o for o in bpy.data.objects if o.type == 'ARMATURE')


# ------------------------------------------------------------------ utilidades
def smooth(a_, b_, x):
    t = np.clip((x - a_) / (b_ - a_), 0, 1)
    return t * t * (3 - 2 * t)


def hash2(i, j):
    v = np.sin(i * 127.1 + j * 311.7) * 43758.5453
    return v - np.floor(v)


def noise(x, y):  # ruído de valor suave, 0..1
    xi, yi = np.floor(x), np.floor(y)
    xf, yf = x - xi, y - yi
    xf, yf = xf * xf * (3 - 2 * xf), yf * yf * (3 - 2 * yf)
    p, q, r, s = hash2(xi, yi), hash2(xi + 1, yi), hash2(xi, yi + 1), hash2(xi + 1, yi + 1)
    return p + (q - p) * xf + (r - p) * yf + (p - q - r + s) * xf * yf


def unit(v):
    return v / np.maximum(np.linalg.norm(v, axis=-1, keepdims=True), 1e-9)


def world_co(o):
    me = o.data
    co = np.empty(len(me.vertices) * 3, np.float64)
    me.vertices.foreach_get('co', co)
    m = np.array(o.matrix_world)
    return co.reshape(-1, 3) @ m[:3, :3].T + m[:3, 3]


def set_world_co(o, w):
    m = np.array(o.matrix_world.inverted())
    o.data.vertices.foreach_set('co', (w @ m[:3, :3].T + m[:3, 3]).ravel())
    o.data.update()


def world_normals(o):
    me = o.data
    nr = np.empty(len(me.vertices) * 3, np.float64)
    me.vertices.foreach_get('normal', nr)
    return unit(nr.reshape(-1, 3) @ np.array(o.matrix_world)[:3, :3].T)


def tris_of(o):
    me = o.data
    assert all(p.loop_total == 3 for p in me.polygons), 'a malha precisa ser de triângulos'
    li = np.empty(len(me.loops), np.int64)
    me.loops.foreach_get('vertex_index', li)
    return li.reshape(-1, 3)


def weights(o):
    names = [g.name for g in o.vertex_groups]
    w = np.zeros((len(o.data.vertices), len(names)), np.float32)
    for v in o.data.vertices:
        for g in v.groups:
            w[v.index, g.group] = g.weight
    return names, w / np.maximum(w.sum(1, keepdims=True), 1e-6)


# regiões do corpo: soma dos pesos dos ossos cujo nome casa com o padrão
REGIONS = {
    'hip': r'^Hip_', 'sp1': r'^Spine_01', 'sp2': r'^Spine_02', 'spt': r'^Spine_Top',
    'nk1': r'^Neck_01', 'nk2': r'^Neck_02', 'nkt': r'^Neck_Top', 'head': r'^Head_', 'jaw': r'^Jaw_',
    't1': r'^Tail_01_01', 't2': r'^Tail_01_02', 't3': r'^Tail_01_03', 't4': r'^Tail_01_04', 't5': r'^Tail_01_05', 't6': r'^Tail_01_06',
    'thigh': r'HindLeg_Hip', 'shin': r'HindLeg_Knee1', 'foot': r'HindLeg_Knee2|HindLeg_Ankle|HindLeg_Ball|LegToe',
    'clav': r'Clavicle', 'uarm': r'FrontLeg_Hip', 'farm': r'FrontLeg_Knee', 'hand': r'FrontLeg_Ankle|FrontLeg_Ball|WristToe',
    'eye': r'_Eye_|eyeupper|eyelower', 'tongue': r'Tongue',
}


def regions(o):
    names, w = weights(o)
    return {k: w[:, [i for i, n in enumerate(names) if re.search(p, n)]].sum(1) for k, p in REGIONS.items()}


def components(tris, n, rep=None):
    """rótulo do pedaço conexo de cada vértice (rep junta vértices na mesma posição)."""
    parent = list(range(n))

    def find(i):
        while parent[i] != i:
            parent[i] = parent[parent[i]]
            i = parent[i]
        return i
    for t in (tris if rep is None else rep[tris]):
        r0 = find(int(t[0]))
        for v in t[1:]:
            r1 = find(int(v))
            if r0 != r1:
                parent[r1] = r0
    return np.array([find(int(i if rep is None else rep[i])) for i in range(n)])


def merged(co):
    """índice do primeiro vértice em cada posição (o importador separa vértices nas costuras de UV)."""
    key, rep = {}, np.arange(len(co))
    for i, c in enumerate(map(tuple, np.round(co, 4))):
        rep[i] = key.setdefault(c, i)
    return rep


def bone_head(pat):
    b = next(b for b in arm.data.bones if re.search(pat, b.name))
    return np.array(arm.matrix_world @ b.head_local)


# ------------------------------------------------------------------ medidas do corpo
bco = world_co(body)
btris = tris_of(body)
brep = merged(bco)
bcomp = components(btris, len(bco), brep)
main = bcomp == np.bincount(bcomp).argmax()            # a pele (um pedaço só); o resto são dentes, garras, olhos e língua
BR = regions(body)
ymin, ymax = bco[:, 1].min(), bco[:, 1].max()
L = ymax - ymin
M = L / 9.0                                            # unidades por metro (o animal mede 9 m no site)
zground = bco[:, 2].min()
print(f'corpo: {len(bco)} vertices, {len(btris)} triangulos, {len(set(bcomp))} pedacos; {M:.3f} unidades por metro')


def merged_normals(o, co, rep):
    nr = world_normals(o)
    acc = np.zeros_like(nr)
    np.add.at(acc, rep, nr)
    return unit(acc[rep])


bnrm = merged_normals(body, bco, brep)

# ------------------------------------------------------------------ 2. apara a plumagem
fco = world_co(feat)
if trim > 0:
    tree = BVHTree.FromPolygons([tuple(c) for c in bco], [tuple(int(i) for i in t) for t in btris])
    for i, c in enumerate(fco):
        hit = tree.find_nearest(tuple(c))
        if hit[0] is not None:
            fco[i] = c + (np.array(hit[0]) - c) * trim
    print(f'plumagem aparada: fator {trim}')

# ------------------------------------------------------------------ 3. volume
if bulk > 0:
    # robusto, mas esguio: o volume vai para as coxas, o quadril e a base da cauda; tronco e barriga ganham pouco
    AMT = {'hip': .05, 'sp1': .0, 'sp2': .01, 'spt': .015, 'nk1': .03, 'nk2': .03, 'nkt': .02, 't1': .07, 't2': .065, 't3': .05, 't4': .035, 't5': .015,
           'thigh': .14, 'shin': .09, 'foot': .012, 'clav': .02, 'uarm': .03, 'farm': .012}
    amt = sum(BR[k] * v for k, v in AMT.items()) * M * bulk
    disp = bnrm * amt[:, None]
    # peito e barriga mais fundos: os vértices virados para baixo descem mais
    torso = BR['sp1'] + BR['sp2'] + 0.8 * BR['spt'] + 0.6 * BR['hip'] + 0.4 * BR['nk1']
    # barriga recolhida (silhueta atlética): o ventre entre o peito e o quadril sobe e a cintura afina um pouco
    waist = BR['sp1'] + 0.55 * BR['hip'] + 0.35 * BR['sp2']
    under = np.clip(-bnrm[:, 2], 0, 1) ** 1.3
    disp[:, 2] += 0.22 * M * bulk * waist * under
    disp[:, 2] += 0.07 * M * bulk * (BR['sp2'] + 0.6 * BR['spt']) * under          # o peito também sobe um pouco: fica proporcional à cintura
    # tronco mais estreito: os lados fecham em direção ao meio (mais na cintura, menos no peito e no quadril)
    narrow = 0.2 * BR['sp1'] + 0.15 * BR['sp2'] + 0.1 * BR['spt'] + 0.09 * BR['hip'] + 0.06 * BR['nk1'] + 0.06 * BR['clav']
    disp[:, 0] -= bco[:, 0] * narrow * bulk
    disp[~main] = 0
    # suaviza o deslocamento pelos vizinhos (duas passadas), para não marcar a fronteira entre ossos
    e = np.concatenate([brep[btris[:, [0, 1]]], brep[btris[:, [1, 2]]], brep[btris[:, [2, 0]]]])
    e = np.concatenate([e, e[:, ::-1]])
    for _ in range(2):
        acc = np.zeros_like(disp)
        cnt = np.zeros(len(disp))
        np.add.at(acc, e[:, 0], disp[e[:, 1]])
        np.add.at(cnt, e[:, 0], 1)
        avg = acc / np.maximum(cnt, 1)[:, None]
        disp = np.where((main & (cnt > 0))[:, None], 0.5 * disp + 0.5 * avg[brep], disp)
        disp = disp[brep]
    kd = KDTree(len(bco))
    for i, c in enumerate(bco):
        kd.insert(tuple(c), i)
    kd.balance()
    bco_old = bco.copy()
    bco = bco + disp
    print(f'volume: deslocamento medio {np.linalg.norm(disp[main], axis=1).mean() / M * 100:.1f} cm, maximo {np.linalg.norm(disp, axis=1).max() / M * 100:.1f} cm')
else:
    disp = np.zeros_like(bco)
    bco_old = bco
    kd = KDTree(len(bco))
    for i, c in enumerate(bco):
        kd.insert(tuple(c), i)
    kd.balance()
set_world_co(body, bco)


def from_body(points, field):
    """valor de um campo do corpo (por vértice) no ponto mais próximo: média dos 3 vértices vizinhos."""
    out = np.zeros((len(points),) + field.shape[1:])
    for i, p in enumerate(points):
        near = kd.find_n(tuple(p), 3)
        w = np.array([1.0 / (d + 1e-4) for _, _, d in near])
        out[i] = (field[[j for _, j, _ in near]] * w.reshape(-1, *([1] * (field.ndim - 1)))).sum(0) / w.sum()
    return out


# ------------------------------------------------------------------ cartões de plumagem
def card_data():
    """estrutura dos cartões: cada cartão é um retângulo que mostra um tufo; a base fica em v alto na textura."""
    me = feat.data
    tr = tris_of(feat)
    n = len(me.vertices)
    uv = np.zeros((n, 2))
    luv = np.empty(len(me.loops) * 2)
    me.uv_layers[0].data.foreach_get('uv', luv)
    uv[tr.ravel()] = luv.reshape(-1, 2)
    fr = uv - np.floor(uv)
    t = np.clip(1 - (fr[:, 1] - 0.01) / 0.98, 0, 1)          # 0 na base, 1 na ponta
    card = components(tr, n)
    _, card = np.unique(card, return_inverse=True)
    return tr, card, t, fr[:, 0]


set_world_co(feat, fco)
ftris, card, tpar, upar = card_data()
ncard = card.max() + 1
# os cartões acompanham a pele que engordou: cada um anda junto com o ponto do corpo onde nasce
root_pt = np.zeros((ncard, 3))
cnt = np.zeros(ncard)
isroot = tpar < 0.25
np.add.at(root_pt, card[isroot], fco[isroot])
np.add.at(cnt, card[isroot], 1)
root_pt /= np.maximum(cnt, 1)[:, None]
fco = fco + from_body(root_pt, disp)[card]
set_world_co(feat, fco)

tail0 = bone_head(r'^Tail_01_01')[1]                       # onde a cauda começa (y)
FR = regions(feat)

# 4. penacho e crina: duplica os cartões dessas regiões antes de pentear
if plume > 0:
    def per_card(v):
        out = np.zeros(ncard)
        np.add.at(out, card, v)
        return out / np.bincount(card, minlength=ncard)
    ut = (root_pt[:, 1] - tail0) / (ymax - tail0)
    nape = per_card(FR['nk2'] + FR['nkt'] + 0.5 * FR['nk1'] + 0.5 * FR['head'])
    upness = from_body(root_pt, bnrm)[:, 2]
    copies = np.zeros(ncard, int)
    copies[ut > 0.62] = 1
    copies[ut > 0.78] = 2
    copies[(nape > 0.5) & (upness > 0.55)] = 1
    bm = bmesh.new()
    bm.from_mesh(feat.data)
    bm.faces.ensure_lookup_table()
    fcard = card[ftris[:, 0]]
    for faces in [[bm.faces[i] for i in np.where(copies[fcard] >= k)[0]] for k in (1, 2)]:
        if faces:
            bmesh.ops.duplicate(bm, geom=faces)
    bm.to_mesh(feat.data)
    bm.free()
    feat.data.update()
    n_before = ncard
    fco = world_co(feat)
    ftris, card, tpar, upar = card_data()
    ncard = card.max() + 1
    FR = regions(feat)
    print(f'tufos longos: {ncard - n_before} cartoes novos (cauda e nuca), total {ncard}')

# geometria de cada cartão
isroot = tpar < 0.25
root_pt = np.zeros((ncard, 3))
cnt = np.zeros(ncard)
np.add.at(root_pt, card[isroot], fco[isroot])
np.add.at(cnt, card[isroot], 1)
root_pt /= np.maximum(cnt, 1)[:, None]
card_n = unit(from_body(root_pt - from_body(root_pt, disp), bnrm))   # normal da pele onde o cartão nasce
cseed = rng.random(ncard)

if plume > 0:
    def per_card(v):
        out = np.zeros(ncard)
        np.add.at(out, card, v)
        return out / np.bincount(card, minlength=ncard)
    ut = np.clip((root_pt[:, 1] - tail0) / (ymax - tail0), 0, 1)
    nape = per_card(FR['nk2'] + FR['nkt'] + 0.5 * FR['nk1'] + 0.5 * FR['head']) * smooth(0.45, 0.8, card_n[:, 2])
    arm_back = per_card(FR['farm'] + 0.5 * FR['uarm'])
    pl = smooth(0.58, 0.9, ut) * plume                              # 0..1: quanto o cartão é do penacho da cauda
    # comprimento: varia de cartão para cartão; cresce no penacho, na crina e atrás do antebraço
    s = (0.82 + 0.6 * cseed ** 2) * (1 + 1.9 * pl) * (1 + 0.9 * nape * plume) * (1 + 0.5 * arm_back * plume)
    # plumagem curta na barriga e no peito por baixo: é o que mais engordava a silhueta
    s *= 1 - 0.45 * per_card(FR['sp1'] + FR['sp2'] + FR['hip'] + FR['spt']) * smooth(0.2, 0.7, -card_n[:, 2])
    back = np.array([0.0, 1.0, 0.0])
    radial = card_n.copy()
    radial[:, 1] = 0
    radial = unit(radial)
    target = unit(back + (0.42 + 0.3 * rng.random(ncard))[:, None] * radial + 0.16 * rng.normal(size=(ncard, 3)))
    k = 0.78 * pl
    tn = unit(0.85 * back + 0.75 * np.array([0.0, 0.0, 1.0]) + 0.12 * rng.normal(size=(ncard, 3)))   # crina: para trás e para cima
    target = np.where((nape * plume > pl)[:, None], tn, target)
    k = np.maximum(k, 0.55 * nape * plume)
    jit = 0.06 * rng.normal(size=(ncard, 3))
    flat = 0.65 * np.clip(per_card(FR['sp1'] + FR['sp2'] + FR['spt'] + FR['hip'] + 0.6 * FR['nk1']), 0, 1)
    s *= 1 - 0.2 * flat
    # cada vértice fora da base é reposicionado a partir do vértice da base que fica na mesma coluna do cartão
    order = np.argsort(card, kind='stable')
    start = np.searchsorted(card[order], np.arange(ncard + 1))
    new = fco.copy()
    length = np.zeros(ncard)
    for c in range(ncard):
        idx = order[start[c]:start[c + 1]]
        roots = idx[tpar[idx] < 0.25]
        if len(roots) == 0:
            continue
        if c >= n_before:                                         # cópias: saem um pouco do lugar, senão ficariam coladas ao original
            tng = rng.normal(size=3)
            tng -= card_n[c] * tng.dot(card_n[c])
            new[idx] += tng / max(np.linalg.norm(tng), 1e-6) * 0.07 * M * rng.random()
        for j in idx[tpar[idx] >= 0.25]:
            r = roots[np.abs(upar[roots] - upar[j]).argmin()]
            o = fco[j] - fco[r]
            ln = np.linalg.norm(o)
            d = unit(unit(o) * (1 - k[c]) + target[c] * k[c] + jit[c])
            vec = d * ln * s[c]
            vec -= card_n[c] * max(0.0, vec.dot(card_n[c])) * flat[c]      # no tronco os tufos deitam: menos volume
            new[j] = new[r] + vec
            length[c] = max(length[c], ln * s[c])
    fco = new
    set_world_co(feat, fco)
    print(f'cartoes: comprimento mediano {np.median(length) / M * 100:.0f} cm, penacho ate {length.max() / M * 100:.0f} cm')
else:
    length = np.full(ncard, 0.4 * M)
    pl = np.zeros(ncard)

# normais dos cartões = normal da pele por baixo (a plumagem recebe a luz como um volume, não como lâminas soltas)
feat.data.normals_split_custom_set_from_vertices([tuple(v) for v in unit(card_n[card] @ np.array(feat.matrix_world)[:3, :3])])


# ------------------------------------------------------------------ 5. textura de filamentos simples
def filament_atlas(n):
    """Tufo de fios simples, sem ramificação: duas fileiras, base em cima, pontas finas embaixo. RGBA n x n."""
    from PIL import Image, ImageDraw, ImageChops
    S = n * 2
    r = np.random.default_rng(23)
    col = Image.new('L', (S, S), 235)
    alpha = Image.new('L', (S, S), 0)
    dc = ImageDraw.Draw(col)

    def tier(y0, y1, count, lmin, lmax, wmin, wmax, a0):
        nonlocal alpha
        layer = Image.new('L', (S, S), 0)
        da = ImageDraw.Draw(layer)
        segs = []
        xs = (np.arange(count) + r.random(count)) / count * 0.9 + 0.05        # espalhados, sem buracos
        r.shuffle(xs)
        for x0 in xs:
            ln = r.uniform(lmin, lmax) * S
            lean, curl = r.normal(0, 0.07), r.normal(0, 0.09)
            w0, shade = r.uniform(wmin, wmax), r.uniform(0.78, 1.0)
            ya = r.uniform(y0, y1) * S
            pts = [(x0 * S + (lean * u + curl * math.sin(u * math.pi) * 0.6 + 0.05 * curl * u * u) * ln, ya + ln * u) for u in np.linspace(0, 1, 17)]
            for i in range(16):
                u = (i + 0.5) / 16
                w = max(1.5, w0 * (1 - u) ** 0.75 * (0.75 + 0.25 * math.sin(min(1, u * 6) * math.pi / 2)))
                segs.append((a0 * (1 - 0.6 * u ** 1.5), pts[i], pts[i + 1], w, shade * (0.66 + 0.34 * u)))
                # contorno mais escuro por baixo e o fio claro por cima: é o que separa um fio do outro
                dc.line([pts[i], pts[i + 1]], fill=int(255 * shade * 0.5), width=int(round(w + 3)))
            for i in range(16):
                u = (i + 0.5) / 16
                w = max(1.5, w0 * (1 - u) ** 0.75 * (0.75 + 0.25 * math.sin(min(1, u * 6) * math.pi / 2)))
                dc.line([pts[i], pts[i + 1]], fill=int(255 * shade * (0.66 + 0.34 * u)), width=int(round(w)))
        for a_, p0, p1, w, _ in sorted(segs, key=lambda sg: sg[0]):   # alfa: os trechos mais opacos ficam por cima
            da.line([p0, p1], fill=int(255 * a_), width=int(round(w + 3)))
        alpha = ImageChops.lighter(alpha, layer)

    tier(0.40, 0.50, 44, 0.36, 0.52, 20, 34, 0.95)      # fileira de baixo (desenhada primeiro: fica por trás)
    tier(0.40, 0.50, 60, 0.10, 0.22, 8, 14, 0.9)        # penugem curta na base da fileira de baixo
    tier(0.00, 0.07, 48, 0.50, 0.80, 22, 38, 1.0)       # fileira de cima
    tier(0.00, 0.07, 70, 0.12, 0.26, 8, 14, 0.95)       # penugem curta na base
    col = np.asarray(col.resize((n, n), Image.LANCZOS), np.float32) / 255
    al = np.asarray(alpha.resize((n, n), Image.LANCZOS), np.float32) / 255
    x = np.linspace(0, 1, n)[None, :]
    al = al * smooth(0.0, 0.05, x) * smooth(0.0, 0.05, 1 - x)
    px = np.dstack([col, col, col, al])[::-1]            # o Blender guarda a imagem de baixo para cima
    return np.ascontiguousarray(px, dtype=np.float32)


fmat = feat.data.materials[0]
fnode = next(nd for nd in fmat.node_tree.nodes if nd.type == 'TEX_IMAGE' and any(lk.to_socket.name == 'Base Color' for o_ in nd.outputs for lk in o_.links))
atlas = bpy.data.images.new('Yutyrannus_Filaments', tex, tex, alpha=True)
atlas.pixels.foreach_set(filament_atlas(tex).ravel())
atlas.file_format = 'PNG'
atlas.pack()
fnode.image = atlas
for nd in [nd for nd in fmat.node_tree.nodes if nd.type == 'NORMAL_MAP']:   # o mapa de relevo era das penas antigas
    fmat.node_tree.nodes.remove(nd)
print('textura de filamentos simples gerada:', tex, 'px')

for im in bpy.data.images:
    if im.size[0] > tex:
        im.scale(tex, tex)

# ------------------------------------------------------------------ 6. clareia a textura do corpo
bmat = body.data.materials[0]
bimg = next(nd for nd in bmat.node_tree.nodes if nd.type == 'TEX_IMAGE' and any(lk.to_socket.name == 'Base Color' for o_ in nd.outputs for lk in o_.links)).image
H = W = bimg.size[0]
px = np.empty(H * W * 4, np.float32)
bimg.pixels.foreach_get(px)
px = px.reshape(H, W, 4)
rgb = px[:, :, :3]
mx, mn = rgb.max(2, keepdims=True), rgb.min(2, keepdims=True)
keep = np.clip(((mx - mn) / np.maximum(mx, 1e-4) - 0.16) / 0.22, 0, 1)     # pixels saturados (olho, boca) ficam como estão
keep = keep * keep * (3 - 2 * keep)
if white > 0:
    lum = rgb.mean(2, keepdims=True)
    bright = 1.0 - (1.0 - lum) ** (1.0 + 1.3 * white)
    rgb[:] = np.clip((bright + (rgb - lum) * 0.5) * (1 - keep) + rgb * keep, 0, 1)

# ------------------------------------------------------------------ 7. padrão de plumagem
# perfil do tronco (sem os membros): para cada fatia do comprimento, topo, fundo e meia-largura
NB = 90
axial = BR['hip'] + BR['sp1'] + BR['sp2'] + BR['spt'] + BR['nk1'] + BR['nk2'] + BR['nkt'] + BR['head'] + BR['jaw'] + sum(BR[f't{i}'] for i in range(1, 7))
sl = np.clip(((bco[:, 1] - ymin) / L * NB).astype(int), 0, NB - 1)
top, bot, wid = np.full(NB, np.nan), np.full(NB, np.nan), np.full(NB, np.nan)
for b in range(NB):
    m = (sl == b) & (axial > 0.6) & main
    if m.any():
        top[b], bot[b], wid[b] = bco[m, 2].max(), bco[m, 2].min(), np.abs(bco[m, 0]).max()
for arr in (top, bot, wid):
    ok = ~np.isnan(arr)
    arr[:] = np.interp(np.arange(NB), np.where(ok)[0], arr[ok])
    arr[:] = np.convolve(np.pad(arr, 2, mode='edge'), np.ones(5) / 5, mode='valid')
head_back = bco[(BR['head'] + BR['jaw'] > 0.5) & main, 1].max()
eye = np.abs(bone_head(r'^l_Eye_'))

SLATE = np.array([0.028, 0.03, 0.038])     # listras e máscara
SOCK = np.array([0.05, 0.05, 0.058])       # pernas e mãos
RUST = np.array([0.3, 0.085, 0.045])       # crista
CREAM = np.array([1.0, 0.83, 0.6])         # penacho da cauda
WARM = np.array([1.0, 0.975, 0.94])        # branco de base, levemente quente


def paint(P, R):
    """cor que multiplica o branco (linear), para pontos P do corpo com pesos de região R."""
    x, y, z = P[:, 0], P[:, 1], P[:, 2]
    u = (y - ymin) / L
    s = u * 9.0                                                  # metros a partir do focinho
    b = np.clip((u * NB).astype(int), 0, NB - 1)
    zc, rz, rx = (top[b] + bot[b]) / 2, np.maximum(0.05, (top[b] - bot[b]) / 2), np.maximum(0.05, wid[b])
    th = np.arctan2(np.abs(x) / rx, (z - zc) / rz)               # 0 no topo do dorso, pi/2 no flanco, pi na barriga
    hgt = (z - zground) / M
    ax = np.clip(R['hip'] + R['sp1'] + R['sp2'] + R['spt'] + R['nk1'] + R['nk2'] + R['nkt'] + sum(R[f't{i}'] for i in range(1, 7)), 0, 1)
    # listras: nascem no dorso, descem inclinadas para trás e afinam até sumir antes da barriga; na cauda viram anéis
    lam = 0.34 + 0.1 * smooth(2.2, 3.2, s) + 0.1 * smooth(5.4, 7.0, s)
    warp = 0.6 * (noise(s * 1.25, th * 1.9) - 0.5) + 0.22 * (noise(s * 3.3 + 7, th * 3.1) - 0.5)
    wave = np.sin((s / lam - 0.5 * th ** 1.25 + warp) * 2 * np.pi) * 0.5 + 0.5
    thr = 0.55 + 0.2 * smooth(0.4, 2.1, th) + 0.3 * (noise(s * 0.8 + 3, th * 0.9 + 5) - 0.5)
    band = smooth(thr, thr + 0.09, wave)
    kt = smooth(5.3, 6.3, s)
    fade = (1 - smooth(1.7, 2.3, th)) * (1 - kt) + (1 - smooth(2.4, 2.95, th)) * kt
    tip = smooth(7.5, 8.3, s)                                    # ponta da cauda: sem listras, creme
    stripe = band * fade * smooth(1.0, 1.5, s) * (1 - tip) * ax
    # coxas e canelas: barras inclinadas, só do lado de fora
    lw = np.sin((hgt / 0.27 + (y / M) / 0.75 + 0.9 * (noise(hgt * 3.0, y / M * 2 + 9) - 0.5)) * 2 * np.pi) * 0.5 + 0.5
    stripe = np.maximum(stripe, smooth(0.58, 0.7, lw) * smooth(0.75, 1.1, np.abs(x)) * np.clip(R['thigh'] + 0.9 * R['shin'], 0, 1) * smooth(0.75, 1.0, hgt))
    # braços: duas barras no braço
    aw = np.sin((hgt / 0.2 + 0.6 * (noise(hgt * 4.0, y / M * 3) - 0.5)) * 2 * np.pi) * 0.5 + 0.5
    stripe = np.maximum(stripe, smooth(0.62, 0.74, aw) * np.clip(R['uarm'] + R['clav'] * 0.3, 0, 1) * smooth(0.5, 0.8, np.abs(x)))
    # "meias": canela para baixo e mãos escuras
    sock = np.clip(R['foot'] + R['shin'] * (1 - smooth(0.72, 1.0, hgt)) + R['hand'] + R['farm'] * 0.75, 0, 1)
    # cabeça: máscara escura no focinho e em volta do olho, que segue para trás; queixo acinzentado; crista ferrugem
    t = (head_back - y) / (head_back - ymin)                     # 0 na nuca, 1 na ponta do focinho
    up, low = R['head'], R['jaw']
    muzzle = smooth(0.4, 0.62, t) * up
    de = np.hypot((y - eye[1]) / 0.52, (z - eye[2]) / 0.36)
    patch = (1 - smooth(0.7, 1.15, de)) * smooth(0.12, 0.26, np.abs(x)) * up
    trail = (1 - smooth(0.1, 0.24, np.abs(z - (eye[2] + 0.1 * (y - eye[1]))))) * smooth(eye[1], eye[1] + 0.2, y) * (1 - smooth(eye[1] + 1.2, eye[1] + 2.0, y)) * smooth(0.15, 0.3, np.abs(x)) * np.clip(up + R['nkt'] + R['nk2'], 0, 1)
    chin = smooth(0.62, 0.9, t) * low * 0.75
    mask = np.clip(np.maximum.reduce([muzzle, patch, trail, chin]), 0, 1)
    crest = up * (1 - smooth(0.12, 0.3, np.abs(x))) * smooth(0.3, 0.5, t) * (1 - smooth(0.9, 1.0, t)) * smooth(top[b] - 0.34, top[b] - 0.12, z)
    dorsal = (1 - smooth(0.0, 0.5, th)) * ax
    c = np.tile(WARM, (len(P), 1)) * (1 - 0.14 * dorsal)[:, None]
    c = c + (CREAM - c) * (tip * ax)[:, None]
    for m, colr in ((stripe, SLATE), (sock, SOCK), (mask, SLATE), (crest, RUST)):
        c = c + (colr - c) * (np.clip(m, 0, 1) * 0.97 * pattern)[:, None]
    keepw = np.clip(R['eye'] + R['tongue'], 0, 1)[:, None]       # olhos e língua não são pintados
    return c * (1 - keepw) + keepw


if pattern > 0:
    # corpo: o padrão é rasterizado na textura, triângulo por triângulo, a partir da posição 3D de cada ponto
    uvs = np.empty(len(body.data.loops) * 2)
    body.data.uv_layers[0].data.foreach_get('uv', uvs)
    uvs = uvs.reshape(-1, 3, 2)
    uvs = uvs - np.floor(uvs.min(1, keepdims=True))
    keys = list(REGIONS)
    RV = np.stack([BR[k] for k in keys], 1)
    pix, Ps, Rs, edge = [], [], [], []
    for ti in np.where(main[btris[:, 0]])[0]:
        p = uvs[ti] * [W, H] - 0.5
        lo = np.floor(p.min(0) - 1).astype(int)
        hi = np.ceil(p.max(0) + 1).astype(int)
        d = (p[1, 1] - p[2, 1]) * (p[0, 0] - p[2, 0]) + (p[2, 0] - p[1, 0]) * (p[0, 1] - p[2, 1])
        if abs(d) < 1e-9 or (hi - lo).max() > 600:
            continue
        gx, gy = np.meshgrid(np.arange(lo[0], hi[0] + 1), np.arange(lo[1], hi[1] + 1))
        w0 = ((p[1, 1] - p[2, 1]) * (gx - p[2, 0]) + (p[2, 0] - p[1, 0]) * (gy - p[2, 1])) / d
        w1 = ((p[2, 1] - p[0, 1]) * (gx - p[2, 0]) + (p[0, 0] - p[2, 0]) * (gy - p[2, 1])) / d
        w2 = 1 - w0 - w1
        eps = min(0.5, 2.5 / math.sqrt(abs(d)))                               # folga de ~2 px: cobre as costuras de UV
        m = (w0 >= -eps) & (w1 >= -eps) & (w2 >= -eps)
        if not m.any():
            continue
        edge.append(np.minimum(np.minimum(w0[m], w1[m]), w2[m]) < -1e-4)
        wb = np.clip(np.stack([w0[m], w1[m], w2[m]], 1), 0, 1)
        wb /= wb.sum(1, keepdims=True)
        vi = btris[ti]
        pix.append((gy[m] % H) * W + (gx[m] % W))
        Ps.append(wb @ bco[vi])
        Rs.append(wb @ RV[vi])
    pix, Ps, Rs, edge = np.concatenate(pix), np.concatenate(Ps), np.concatenate(Rs), np.concatenate(edge)
    mult = paint(Ps, {k: Rs[:, i] for i, k in enumerate(keys)})
    canvas = np.ones((H * W, 3), np.float32)
    canvas[pix[edge]] = mult[edge]          # primeiro a folga, depois o interior exato por cima
    canvas[pix[~edge]] = mult[~edge]
    canvas = canvas.reshape(H, W, 3)
    # a textura é guardada em sRGB e as cores acima são lineares: converte o multiplicador
    rgb[:] = rgb * (canvas ** (1 / 2.2) * (1 - keep) + keep)
    print(f'padrao na textura do corpo: {len(np.unique(pix))} texels pintados ({len(np.unique(pix)) / (H * W):.0%})')
bimg.pixels.foreach_set(px.ravel())
bimg.update()

# plumagem: o padrão vai num "mapa em volume". O espaço em volta do corpo é dividido numa grade; cada célula guarda
# a cor do ponto da pele mais próximo. No site, cada pedacinho de filamento consulta a grade pela posição de repouso,
# então as listras atravessam os cartões com nitidez (uma cor por cartão deixava as listras em blocos).
# A grade é guardada como uma imagem de fatias lado a lado, ligada à emissão do material só para viajar dentro do .glb.
PAT = dict(tx=32, tz=80, ny=256, cols=16)             # os mesmos números estão em src/scene.js
if pattern > 0:
    TX, TZ, NY, COLS = PAT['tx'], PAT['tz'], PAT['ny'], PAT['cols']
    ROWS = NY // COLS
    g0 = np.array([0.0, ymin - 0.25 * M, zground - 0.1 * M])
    gs = np.array([1.4 * M, L + 1.7 * M, 3.7 * M])
    mtris = btris[main[btris[:, 0]]]
    tree = BVHTree.FromPolygons([tuple(c) for c in bco], [tuple(int(i) for i in t) for t in mtris])
    gxs = (np.arange(TX) + 0.5) / TX * gs[0]
    gzs = g0[2] + (np.arange(TZ) + 0.5) / TZ * gs[2]
    gys = g0[1] + np.arange(NY) / (NY - 1) * gs[1]
    hits = np.zeros((NY, TZ, TX, 3))
    hidx = np.zeros((NY, TZ, TX), int)
    for iy, y_ in enumerate(gys):
        for iz, z_ in enumerate(gzs):
            for ix, x_ in enumerate(gxs):
                h = tree.find_nearest((x_, y_, z_))
                hits[iy, iz, ix] = h[0]
                hidx[iy, iz, ix] = h[2]
    Ph = hits.reshape(-1, 3)
    tv = mtris[hidx.ravel()]
    A_, B_, C_ = bco[tv[:, 0]], bco[tv[:, 1]], bco[tv[:, 2]]
    v0, v1, v2 = B_ - A_, C_ - A_, Ph - A_
    d00, d01, d11, d20, d21 = (v0 * v0).sum(1), (v0 * v1).sum(1), (v1 * v1).sum(1), (v2 * v0).sum(1), (v2 * v1).sum(1)
    den = np.maximum(d00 * d11 - d01 * d01, 1e-12)
    wb_ = np.clip((d11 * d20 - d01 * d21) / den, 0, 1)
    wc_ = np.clip((d00 * d21 - d01 * d20) / den, 0, 1)
    wa_ = np.clip(1 - wb_ - wc_, 0, 1)
    Rh = wa_[:, None] * RV[tv[:, 0]] + wb_[:, None] * RV[tv[:, 1]] + wc_[:, None] * RV[tv[:, 2]]
    vol = paint(Ph, {k: Rh[:, i] for i, k in enumerate(keys)}).reshape(NY, TZ, TX, 3)
    img = np.ones((ROWS * TZ, COLS * TX, 4), np.float32)
    for i in range(NY):
        r_, c_ = divmod(i, COLS)
        img[r_ * TZ:(r_ + 1) * TZ, c_ * TX:(c_ + 1) * TX, :3] = vol[i] ** (1 / 2.2)
    pat_img = bpy.data.images.new('Yutyrannus_Pattern', COLS * TX, ROWS * TZ, alpha=False)
    pat_img.pixels.foreach_set(np.ascontiguousarray(img[::-1]).ravel())      # o Blender guarda a imagem de baixo para cima
    pat_img.file_format = 'PNG'
    pat_img.pack()
    bsdf = next(nd for nd in fmat.node_tree.nodes if nd.type == 'BSDF_PRINCIPLED')
    pnode = fmat.node_tree.nodes.new('ShaderNodeTexImage')
    pnode.image = pat_img
    fmat.node_tree.links.new(pnode.outputs['Color'], bsdf.inputs['Emission Color'])
    bsdf.inputs['Emission Strength'].default_value = 1.0
    # posição de cada vértice da plumagem dentro da grade (0..1): lado, comprimento, altura
    gpos = (np.stack([np.abs(fco[:, 0]), fco[:, 1], fco[:, 2]], 1) - g0) / gs
    at = feat.data.attributes.new(name='_PAT', type='FLOAT_VECTOR', domain='POINT')
    at.data.foreach_set('vector', np.clip(gpos, 0, 1).astype(np.float32).ravel())
    # cor de vértice: só a variação de tom de cartão para cartão e as pontas um pouco mais claras
    vc = np.repeat((0.88 + 0.14 * cseed)[card][:, None], 3, 1)
    vc = np.clip(vc + (1 - vc) * 0.35 * tpar[:, None], 0, 1)
    attr = feat.data.color_attributes.new(name='Col', type='FLOAT_COLOR', domain='POINT')
    attr.data.foreach_set('color', np.concatenate([vc, np.ones((len(vc), 1))], 1).astype(np.float32).ravel())
    feat.data.color_attributes.active_color = attr
    feat.data.color_attributes.render_color_index = feat.data.color_attributes.find('Col')
    print(f'padrao em volume: grade {TX}x{NY}x{TZ}, imagem {COLS * TX}x{ROWS * TZ}, {(vol.mean(3) < 0.4).mean():.0%} das celulas escuras')

# 9. atributos para o balanço dos filamentos (nomes com "_" na frente saem no glTF como atributos próprios)
tipv = tpar * np.clip(length[card] / (0.4 * M), 0.6, 2.0)
for name, data in (('_TIP', tipv), ('_SEED', cseed[card])):
    at = feat.data.attributes.new(name=name, type='FLOAT', domain='POINT')
    at.data.foreach_set('value', data.astype(np.float32))

# olhos com material próprio (no site ficam mais lisos e brilhantes que a pele)
eye_mat = bmat.copy()
eye_mat.name = 'Yutyrannus_Eye'
body.data.materials.append(eye_mat)
eye_comp = np.zeros(len(bco), bool)
for cid in np.unique(bcomp[~main]):
    m = bcomp == cid
    if BR['eye'][m].mean() > 0.8:
        eye_comp |= m
ne = 0
for p in body.data.polygons:
    if eye_comp[p.vertices[0]]:
        p.material_index = 1
        ne += 1
print('olhos:', ne, 'triangulos com material proprio')


# ------------------------------------------------------------------ 8. chaves de forma
def add_key(o, name, delta_world, base_world):
    if not o.data.shape_keys:
        o.shape_key_add(name='Basis')
    k = o.shape_key_add(name=name)
    m = np.array(o.matrix_world.inverted())
    k.data.foreach_set('co', ((base_world + delta_world) @ m[:3, :3].T + m[:3, 3]).ravel())


sb = np.clip(((bco[:, 1] - ymin) / L * NB).astype(int), 0, NB - 1)
zc = (top[sb] + bot[sb]) / 2
rad = np.stack([bco[:, 0], np.zeros(len(bco)), bco[:, 2] - zc], 1)
rad = unit(rad)
th_b = np.arctan2(np.abs(bco[:, 0]) / np.maximum(0.05, wid[sb]), (bco[:, 2] - zc) / np.maximum(0.05, (top[sb] - bot[sb]) / 2))
side = 0.25 + 0.75 * smooth(0.5, 1.5, th_b)                       # as costelas abrem para os lados e para baixo; o dorso quase não se mexe
chest = (BR['sp2'] + 0.85 * BR['spt'] + 0.35 * BR['sp1'] + 0.3 * BR['clav'] + 0.2 * BR['nk1']) * side
belly = (BR['sp1'] + 0.55 * BR['hip'] + 0.3 * BR['sp2']) * (0.2 + 0.8 * smooth(1.2, 2.4, th_b))
d_chest = rad * (chest * 0.05 * M * main)[:, None]
d_belly = rad * (belly * 0.055 * M * main)[:, None]
# narinas: na lateral da ponta do focinho; a pele em volta abre para fora
nose_tip = bco[main & (BR['head'] > 0.5)][bco[main & (BR['head'] > 0.5), 1].argmin()]
NOSTRIL = np.array([float(opt.get('nx', 0.11)), float(opt.get('ny', 0.19)), float(opt.get('nz', 0.02))]) * M   # lado, atrás da ponta, acima da ponta
nc = np.array([NOSTRIL[0], nose_tip[1] + NOSTRIL[1], nose_tip[2] + NOSTRIL[2]])
dn = np.linalg.norm(np.stack([np.abs(bco[:, 0]) - nc[0], bco[:, 1] - nc[1], bco[:, 2] - nc[2]], 1), axis=1)
wn = (1 - smooth(0.03 * M, 0.1 * M, dn)) * BR['head'] * main
d_nostril = bnrm * (wn * 0.014 * M)[:, None]
for name, dlt in (('chest', d_chest), ('belly', d_belly), ('nostril', d_nostril)):
    add_key(body, name, dlt, bco)
# a plumagem acompanha a respiração: cada cartão anda junto com a pele onde nasce
kd = KDTree(len(bco))
for i, c in enumerate(bco):
    kd.insert(tuple(c), i)
kd.balance()
for name, dlt in (('chest', d_chest), ('belly', d_belly)):
    add_key(feat, name, from_body(root_pt, dlt)[card], fco)
print(f'chaves de forma: chest, belly, nostril ({int((wn > 0.3).sum())} vertices nas narinas)')

bpy.ops.export_scene.gltf(filepath=dst, export_vertex_color='ACTIVE' if pattern > 0 else 'NONE', export_all_vertex_colors=False,
                          export_active_vertex_color_when_no_material=True, export_attributes=True, export_format='GLB', export_image_format='WEBP',
                          export_animations=False, export_skins=True, export_morph=True, export_morph_normal=False, export_morph_tangent=False)
print('tamanho final MB', round(os.path.getsize(dst) / 1e6, 2))
