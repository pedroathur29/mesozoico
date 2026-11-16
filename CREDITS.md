# Créditos

## Modelo 3D
`fonte/public/assets/models/yutyrannus.glb` (publicado em `assets/models/yutyrannus.glb`)

- **Origem provável:** ["Yutyrannus" por Tim (@TimFallas) no Sketchfab](https://sketchfab.com/3d-models/yutyrannus-70659842d57949e8bbe3a4db1bbd365d), modelo do jogo ARK: Survival Evolved, listado como CC BY (Atribuição). O arquivo enviado tem a mesma contagem de triângulos (~41 mil) e a sela do ARK.
- **PENDENTE:** confirmar o link exato, o autor e a licença na página do modelo e colar aqui. Se a licença for CC BY, o crédito (autor + link + licença) deve aparecer no site ou aqui. Como o modelo vem de um jogo, confirmar também que o uploader tem direito de distribuí-lo.
- **Alterações feitas por nós (obrigatório informar em CC BY):** remoção da sela e de uma esfera solta; plumagem aparada em 50%; volume acrescentado às coxas e à base da cauda, tronco estreitado e barriga recolhida; tufos refeitos com a direção alinhada a cada região do corpo, em camadas, com comprimento variado, penacho na cauda e crina na nuca (cartões duplicados e alongados); textura da plumagem substituída por um desenho próprio de filamentos simples, gerado por código; textura de cor do corpo clareada (olho e boca preservados) e com a mancha do ouvido apagada e pintada com um padrão próprio de listras, máscara, crista e extremidades escuras; mapa em volume do mesmo padrão para a plumagem; chaves de forma novas (`chest`, `belly`, `nostril`); material próprio para os olhos; atributos por cartão (`_TIP`, `_SEED`, `_PAT`); texturas reduzidas para 1024 px em WebP. Tudo em `fonte/tools/clean_model.py`.
- A cor branca e o padrão de listras são escolhas artísticas, com desenho próprio: a cor real do animal é desconhecida.
- Arquivo original: 26 MB. Arquivo usado no site: ~3,8 MB.

## Fontes
- Archivo (variável) via `@fontsource-variable/archivo`: SIL Open Font License 1.1
- JetBrains Mono via `@fontsource/jetbrains-mono`: SIL Open Font License 1.1

## Bibliotecas
- three (MIT), gsap (licença padrão GSAP, gratuita), lenis (MIT), vite (MIT)

## Referências de estilo (só inspiração, nada copiado)
Vídeos de sites de produto em 3D enviados pelo autor do projeto, e as práticas de desempenho do site DGL Telhadista (do próprio autor).
Uma imagem do Yutyrannus de *Jurassic World Evolution 3*, enviada pelo autor, serviu de guia de acabamento (robustez, listras, penacho). Nenhum modelo, textura ou recurso do jogo foi usado.
