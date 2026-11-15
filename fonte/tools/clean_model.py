"""Prepara o modelo do Yutyrannus para o site (rodar com o Blender como módulo Python: pip install bpy).

Uso: python tools/clean_model.py -- entrada.glb saida.glb [tex=1024] [trim=0.5] [white=1] [pattern=1]

O que faz:
  1. remove a sela (Object_10) e uma esfera solta (Icosphere);
  2. trim: apara as penas. Cada vértice da malha de penas (Object_8) é puxado em direção ao ponto
     mais próximo da superfície do corpo (Object_6). 0 mantém, 0.5 corta pela metade, 1 cola no corpo;
  3. white: clareia as texturas de cor (corpo e penas) para a plumagem ficar branca. Áreas coloridas
     (olho, boca, língua) são preservadas. 0 mantém o cinza original, 1 é o branco padrão;
  4. pattern: pinta um padrão de plumagem nas cores de vértice (multiplicam a textura): dorso mais
     escuro, faixas irregulares do dorso para os flancos, anéis na cauda, focinho escuro e uma faixa
     atrás do olho. É um desenho próprio (a cor real do animal é desconhecida). 0 desliga, 1 é o padrão;
     Também grava em cada pena os atributos _TIP (0 na base, 1 na ponta) e _SEED (número fixo por pena),
     que o site usa para balançar os filamentos;
  5. reduz as texturas para tex px e exporta .glb (WebP), mantendo o esqueleto.
"""
import sys, os, math, bpy
from mathutils.bvhtree import BVHTree

a = sys.argv[sys.argv.index('--') + 1:]
src, dst = a[0], a[1]
opt = dict(x.split('=') for x in a[2:])
tex = int(opt.get('tex', 1024))
trim = float(opt.get('trim', 0))
white = float(opt.get('white', 0))
pattern = float(opt.get('pattern', 0))

bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.gltf(filepath=src)

for n in ('Object_10', 'Icosphere'):
    o = bpy.data.objects.get(n)
    if o:
        bpy.data.objects.remove(o, do_unlink=True)

body = bpy.data.objects.get('Object_6')
feat = bpy.data.objects.get('Object_8')
if trim > 0 and body and feat:
    # as duas malhas estão na pose de repouso e têm o mesmo pai; trabalhamos em espaço de mundo
    bw = body.matrix_world
    verts = [bw @ v.co for v in body.data.vertices]
    polys = [tuple(p.vertices) for p in body.data.polygons]
    tree = BVHTree.FromPolygons(verts, polys)
    fw = feat.matrix_world
    fwi = fw.inverted()
    moved = 0
    total = 0.0
    for v in feat.data.vertices:
        w = fw @ v.co
        hit = tree.find_nearest(w)
        if hit[0] is None:
            continue
        d = (hit[0] - w).length
        total += d
        v.co = fwi @ (w + (hit[0] - w) * trim)
        moved += 1
    print(f'penas aparadas: {moved} vertices, fator {trim}, distancia media ao corpo {total / max(1, moved):.3f} (unidades do modelo)')

for im in bpy.data.images:
    if im.size[0] > tex:
        im.scale(tex, tex)

if white > 0:
    import numpy as np
    # só as texturas de COR dos materiais do corpo e das penas (não mexe nos mapas de normal)
    targets = set()
    for m in bpy.data.materials:
        if not m.use_nodes:
            continue
        bsdf = next((n for n in m.node_tree.nodes if n.type == 'BSDF_PRINCIPLED'), None)
        link = bsdf and bsdf.inputs['Base Color'].links
        if link and link[0].from_node.type == 'TEX_IMAGE' and link[0].from_node.image:
            targets.add(link[0].from_node.image)
    for im in targets:
        px = np.empty(im.size[0] * im.size[1] * 4, dtype=np.float32)
        im.pixels.foreach_get(px)
        px = px.reshape(-1, 4)
        rgb = px[:, :3]
        mx = rgb.max(axis=1, keepdims=True)
        mn = rgb.min(axis=1, keepdims=True)
        sat = (mx - mn) / np.maximum(mx, 1e-4)
        # curva que leva o cinza médio a quase branco, mantendo os escuros (sombras pintadas, garras)
        g = 1.0 + 1.3 * white
        lum = rgb.mean(axis=1, keepdims=True)
        bright = 1.0 - (1.0 - lum) ** g
        grey = bright + (rgb - lum) * 0.5          # mantém um resto do tom original
        keep = np.clip((sat - 0.16) / 0.22, 0, 1)  # pixels saturados (olho, boca) ficam como estão
        keep = keep * keep * (3 - 2 * keep)
        px[:, :3] = np.clip(grey * (1 - keep) + rgb * keep, 0, 1)
        im.pixels.foreach_set(px.ravel())
        im.update()
        print('clareada:', im.name, tuple(im.size))

if pattern > 0 and body:
    # ---- padrão de plumagem em cores de vértice ----
    # Espaço de mundo do Blender neste modelo: nariz em -Y, cauda em +Y, cima em +Z, lado em X.
    def smooth(a, b, x):
        t = min(1.0, max(0.0, (x - a) / (b - a)))
        return t * t * (3 - 2 * t)

    def hash2(i, j):
        v = math.sin(i * 127.1 + j * 311.7) * 43758.5453
        return v - math.floor(v)

    def noise(x, y):  # ruído de valor suave, 0..1
        xi, yi = math.floor(x), math.floor(y)
        xf, yf = x - xi, y - yi
        xf, yf = xf * xf * (3 - 2 * xf), yf * yf * (3 - 2 * yf)
        a, b_, c, d = hash2(xi, yi), hash2(xi + 1, yi), hash2(xi, yi + 1), hash2(xi + 1, yi + 1)
        return a + (b_ - a) * xf + (c - a) * yf + (a - b_ - c + d) * xf * yf

    LIMB = ('HindLeg', 'FrontLeg', 'LegToe', 'WristToe', 'Clavicle')

    def dominant(obj):  # nome do osso com maior peso em cada vértice
        names = [g.name for g in obj.vertex_groups]
        out = []
        for v in obj.data.vertices:
            best, bw_ = '', 0.0
            for g in v.groups:
                if g.weight > bw_:
                    best, bw_ = names[g.group], g.weight
            out.append(best)
        return out

    bw = body.matrix_world
    bco = [bw @ v.co for v in body.data.vertices]
    bdom = dominant(body)
    ymin = min(c.y for c in bco)
    ymax = max(c.y for c in bco)
    L = ymax - ymin                      # comprimento do animal em unidades do modelo
    M = L / 9.0                          # unidades por metro (o animal mede 9 m no site)

    # perfil do corpo sem os membros: para cada fatia ao longo do comprimento, topo, fundo e meia-largura
    NB = 90
    top = [-1e9] * NB
    bot = [1e9] * NB
    wid = [0.0] * NB
    for c, d in zip(bco, bdom):
        if any(k in d for k in LIMB):
            continue
        b = min(NB - 1, int((c.y - ymin) / L * NB))
        top[b] = max(top[b], c.z)
        bot[b] = min(bot[b], c.z)
        wid[b] = max(wid[b], abs(c.x))
    for arr, bad in ((top, -1e9), (bot, 1e9)):   # preenche fatias vazias com a vizinha
        for i in range(NB):
            if arr[i] == bad:
                arr[i] = next((arr[j] for j in list(range(i, NB)) + list(range(i, -1, -1)) if arr[j] != bad), 0)
    def blur(a):
        return [sum(a[max(0, i - 2):i + 3]) / len(a[max(0, i - 2):i + 3]) for i in range(NB)]
    top, bot, wid = blur(top), blur(bot), blur(wid)

    head_y = [c.y for c, d in zip(bco, bdom) if d.startswith(('Head', 'Jaw'))]
    head_back = max(head_y) if head_y else ymin + 1.2 * M
    # olho (medido no site): 0,69 m atrás da ponta do focinho, 2,76 m de altura
    eye_y, eye_z = ymin + 0.69 * M, 2.76 * M

    def shade(c, d):
        """Devolve o multiplicador de cor (1 = branco da textura, menor = mais escuro)."""
        if d.startswith(('l_Eye', 'r_Eye', 'Tongue')) or 'eyeupper' in d or 'eyelower' in d:
            return 1.0
        u = (c.y - ymin) / L
        b = min(NB - 1, max(0, int(u * NB)))
        zc, rz, rx = (top[b] + bot[b]) / 2, max(0.05, (top[b] - bot[b]) / 2), max(0.05, wid[b])
        th = math.atan2(abs(c.x) / rx, (c.z - zc) / rz)   # 0 no topo do dorso, pi/2 no flanco, pi na barriga
        s = u * 9.0                                          # metros a partir do focinho
        if any(k in d for k in LIMB):
            if 'HindLeg_Hip' in d or 'HindLeg_Knee1' in d:   # coxas: barras fracas, só do lado de fora
                bar = smooth(0.6, 0.85, math.sin(c.z / M * 9.5 + noise(c.y / M * 2, 3.0) * 2.5) * 0.5 + 0.5)
                return 1.0 - 0.8 * pattern * bar * smooth(0.25 * M, 0.55 * M, abs(c.x))
            return 1.0
        if d.startswith('Jaw'):
            return 1.0
        dorsal = 1.0 - smooth(0.3, 1.45, th)
        line = 1.0 - smooth(0.0, 0.4, th)
        m = (1.0 - 0.18 * dorsal) * (1.0 - 0.3 * line)   # valores lineares: 0,5 ainda parece cinza-claro na tela
        if d.startswith('Head'):
            t = (head_back - c.y) / max(1e-3, head_back - ymin)          # 0 na nuca, 1 na ponta do focinho
            # escuro no topo e nas laterais do focinho, parando acima da fileira de dentes
            muzzle = smooth(0.3, 0.9, t) * smooth(zc + 0.12 * rz, zc + 0.5 * rz, c.z)
            stripe = 1.0 - smooth(0.05 * M, 0.16 * M, abs(c.z - eye_z))   # faixa escura que sai do olho para trás
            stripe *= smooth(eye_y - 0.05 * M, eye_y + 0.12 * M, c.y) * (1.0 - smooth(eye_y + 0.5 * M, eye_y + 0.75 * M, c.y))
            stripe *= smooth(0.08 * M, 0.16 * M, abs(c.x))
            return m * (1.0 - 0.88 * pattern * muzzle) * (1.0 - 0.9 * pattern * stripe)
        # faixas: começam na base do pescoço, descem para trás pelos flancos e viram anéis abertos na cauda
        lam = 0.62 - 0.16 * smooth(0.6, 0.95, u)
        phase = s / lam + 0.42 * th ** 1.3 + 0.9 * (noise(s * 1.4, th * 1.7) - 0.5)
        band = smooth(0.5, 0.7, math.sin(phase * 2 * math.pi) * 0.5 + 0.5)
        fade_flank = 1.0 - smooth(1.15, 2.15, th)
        fade_ring = 1.0 - smooth(2.3, 3.05, th)
        k = smooth(0.62, 0.8, u)
        fade = fade_flank * (1 - k) + fade_ring * k
        broken = 0.6 + 0.4 * smooth(0.3, 0.6, noise(s * 0.9 + 11.0, th * 1.3))
        start = smooth(1.35, 2.1, s)
        return m * (1.0 - 0.96 * pattern * band * fade * broken * start)

    def paint(obj, values):
        me = obj.data
        attr = me.color_attributes.new(name='Col', type='FLOAT_COLOR', domain='POINT')
        for i, m in enumerate(values):
            attr.data[i].color = (m, m, m, 1.0)
        me.color_attributes.active_color = attr
        me.color_attributes.render_color_index = me.color_attributes.find('Col')
        dark = sum(1 for m in values if m < 0.6) / max(1, len(values))
        print(f'padrao pintado: {obj.name}, {len(values)} vertices, {dark:.0%} escuros')

    # corpo: um valor por vértice (fica suave; aparece entre as penas e no nível baixo de qualidade)
    paint(body, [shade(c, d) for c, d in zip(bco, bdom)])

    # penas: um valor por PENA. Cada cartão da malha é uma pena de uns 15 cm; a cor vem do ponto onde ela
    # nasce no corpo, então a pena inteira fica clara ou escura e as faixas saem nítidas, com borda de plumagem.
    if feat:
        fme = feat.data
        fw = feat.matrix_world
        fco = [fw @ v.co for v in fme.vertices]
        fdom = dominant(feat)
        tree = BVHTree.FromPolygons(bco, [tuple(pl.vertices) for pl in body.data.polygons])
        dist = [(tree.find_nearest(c)[3] or 0.0) for c in fco]
        parent = list(range(len(fco)))

        def find(i):
            while parent[i] != i:
                parent[i] = parent[parent[i]]
                i = parent[i]
            return i

        for pl in fme.polygons:
            vs = list(pl.vertices)
            for v in vs[1:]:
                ra, rb = find(vs[0]), find(v)
                if ra != rb:
                    parent[ra] = rb
        cards = {}
        for i in range(len(fco)):
            cards.setdefault(find(i), []).append(i)
        values = [1.0] * len(fco)
        tips = [0.0] * len(fco)       # 0 na base da pena, 1 na ponta (o site usa para balançar os filamentos)
        seeds = [0.0] * len(fco)      # número fixo por pena, para cada uma balançar no seu tempo
        for n, vs in enumerate(cards.values()):
            root = min(vs, key=lambda i: dist[i])          # vértice mais perto do corpo = base da pena
            far = max(dist[i] for i in vs) or 1.0
            mid = sum((fco[i] for i in vs), fco[root] * 0) / len(vs)   # meio do cartão: é a área que ele cobre
            seed = hash2(n * 0.37, 5.0)
            m = shade(mid, fdom[root]) * (0.9 + 0.14 * seed)         # cada pena um pouco mais clara ou escura
            for i in vs:
                tip = dist[i] / far                         # as pontas clareiam um pouco
                values[i] = min(1.0, m + (1.0 - m) * 0.08 * tip)
                tips[i] = tip
                seeds[i] = seed
        paint(feat, values)
        # atributos extras (nomes com "_" na frente são exportados no glTF como atributos próprios)
        for name, data in (('_TIP', tips), ('_SEED', seeds)):
            at = fme.attributes.new(name=name, type='FLOAT', domain='POINT')
            for i, val in enumerate(data):
                at.data[i].value = val
        print(f'penas: {len(cards)} cartoes')

bpy.ops.export_scene.gltf(filepath=dst, export_vertex_color='ACTIVE' if pattern > 0 else 'NONE', export_all_vertex_colors=False, export_active_vertex_color_when_no_material=True, export_attributes=True, export_format='GLB', export_image_format='WEBP', export_animations=False, export_skins=True)
print('tamanho final MB', round(os.path.getsize(dst) / 1e6, 2))
