# Prompts para o Higgsfield (Yutyrannus huali)

Plano gratuito, 10 créditos. Teste na ordem abaixo e pare quando algo servir.
A cor real do animal é desconhecida, então os prompts pedem tons neutros.
Revise sempre o resultado contra a anatomia correta antes de usar no site.

## Anatomia que a IA costuma errar (confira no resultado)
- Tiranossauroide grande, ~9 m, bípede, cauda longa e horizontal.
- Crânio longo e baixo, com crista baixa no focinho, dentes serrilhados.
- Braços muito curtos, com **três dedos** em cada mão (não dois, como o T. rex).
- Corpo coberto de **filamentos longos e finos**, sem penas de voo, sem asas.
- Pernas fortes, três dedos nos pés.

## 1) Imagem de referência para o 3D (gerador de imagem)
Gere UMA imagem em perfil, fundo liso. Se der certo, gere mais 2 ângulos (3/4 frontal e traseiro) para o modelo multi-imagem.

```
Scientifically accurate paleoart of Yutyrannus huali, a large feathered tyrannosauroid
from the Early Cretaceous. Full body, strict side profile facing right, standing in a neutral
pose, mouth closed, tail horizontal. Body covered in long thin filamentous proto-feathers,
no flight feathers, no wings. Long low skull with serrated teeth, very short arms with three
fingers each. Muted brown and dark grey plumage. Plain light grey studio background, soft
even lighting, no shadows on the ground, no text, no other animals.
```

Variações (mesmo prompt, trocando a vista):
- `three-quarter front view from the left, same animal and plumage`
- `rear three-quarter view, same animal and plumage`

## 2) Geração do 3D
- **Com imagens:** `Meshy 7 Image to 3D` (ou `Multi-Image to 3D` com os 2–3 ângulos). Ligue textura; deixe **rigging e animação desligados** (rigging é para humanoide). Meta de ~30 mil triângulos.
- **Só texto (alternativa):** `Meshy 6 Text to 3D`, modo `full`, polycount 30000.

```
Yutyrannus huali, feathered tyrannosauroid dinosaur, standing, side-facing, covered in long
thin filament feathers, short three-fingered arms, long low skull, long horizontal tail,
muted brown and dark grey, realistic proportions, game-ready model
```

Negativo (se o gerador aceitar): `wings, flight feathers, two-fingered hands, cartoon, extra limbs, saddle`.

## 3) Imagens de apoio (opcional, mais barato)
Sempre rotule no site como **ilustração**, nunca como foto de fóssil.

Textura de penas:
```
Macro close-up illustration of long thin filamentous proto-feathers on a dinosaur's back,
muted brown and amber tones, soft rim light, dark blue-grey background, no text
```

Paisagem do Cretáceo Inferior (Formação Yixian):
```
Wide cinematic illustration of an Early Cretaceous conifer forest in northeastern China,
cool misty morning, tall conifers and ferns, a shallow lake, cold blue-grey light with a
faint amber glow, no animals, no text
```

## Depois de gerar
1. Baixe o .glb (ou as imagens) e coloque em `public/assets/models/` (ou `public/assets/img/`).
2. Confira nos termos do Higgsfield se o plano gratuito permite uso no site (comercial, marca d'água).
3. Registre no `CREDITS.md`: ferramenta, modelo usado (ex.: Meshy 7) e que é conteúdo gerado por IA.
