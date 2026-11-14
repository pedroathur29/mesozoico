"""Prepara o modelo do Yutyrannus para o site (rodar com o Blender como módulo Python: pip install bpy).

Uso: python tools/clean_model.py -- entrada.glb saida.glb [tex=1024] [trim=0.5] [white=1]

O que faz:
  1. remove a sela (Object_10) e uma esfera solta (Icosphere);
  2. trim: apara as penas. Cada vértice da malha de penas (Object_8) é puxado em direção ao ponto
     mais próximo da superfície do corpo (Object_6). 0 mantém, 0.5 corta pela metade, 1 cola no corpo;
  3. white: clareia as texturas de cor (corpo e penas) para a plumagem ficar branca. Áreas coloridas
     (olho, boca, língua) são preservadas. 0 mantém o cinza original, 1 é o branco padrão;
  4. reduz as texturas para tex px e exporta .glb (WebP), mantendo o esqueleto.
"""
import sys, os, bpy
from mathutils.bvhtree import BVHTree

a = sys.argv[sys.argv.index('--') + 1:]
src, dst = a[0], a[1]
opt = dict(x.split('=') for x in a[2:])
tex = int(opt.get('tex', 1024))
trim = float(opt.get('trim', 0))
white = float(opt.get('white', 0))

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

bpy.ops.export_scene.gltf(filepath=dst, export_format='GLB', export_image_format='WEBP', export_animations=False, export_skins=True)
print('tamanho final MB', round(os.path.getsize(dst) / 1e6, 2))
