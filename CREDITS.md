# Créditos

## Modelo 3D
`fonte/public/assets/models/yutyrannus.glb` (publicado em `assets/models/yutyrannus.glb`)

- **Origem provável:** ["Yutyrannus" por Tim (@TimFallas) no Sketchfab](https://sketchfab.com/3d-models/yutyrannus-70659842d57949e8bbe3a4db1bbd365d), modelo do jogo ARK: Survival Evolved, listado como CC BY (Atribuição). O arquivo enviado tem a mesma contagem de triângulos (~41 mil) e a sela do ARK.
- **PENDENTE:** confirmar o link exato, o autor e a licença na página do modelo e colar aqui. Se a licença for CC BY, o crédito (autor + link + licença) deve aparecer no site ou aqui. Como o modelo vem de um jogo, confirmar também que o uploader tem direito de distribuí-lo.
- **Alterações feitas por nós (obrigatório informar em CC BY):** remoção da sela e de uma esfera solta; penas aparadas em 50% (cada fio puxado em direção ao corpo); texturas de cor clareadas para a plumagem ficar branca (olho e boca preservados); padrão de plumagem pintado em cores de vértice (dorso mais escuro, faixas, focinho e faixa atrás do olho), com variação de tom por pena; atributos extras por pena (`_TIP`, `_SEED`) para o balanço dos filamentos; texturas reduzidas de 2048 para 1024 px (WebP); giro de 90° para o nariz apontar em +X. Esqueleto mantido. O arquivo não tem animações: os movimentos do site são gerados por código (`fonte/src/anim.js`). Tudo isso é feito por `fonte/tools/clean_model.py`.
- A cor branca e o padrão de faixas são escolhas artísticas, com desenho próprio: a cor real do animal é desconhecida.
- Arquivo original: 26 MB. Arquivo usado no site: ~3 MB.

## Fontes
- Archivo (variável) via `@fontsource-variable/archivo`: SIL Open Font License 1.1
- JetBrains Mono via `@fontsource/jetbrains-mono`: SIL Open Font License 1.1

## Bibliotecas
- three (MIT), gsap (licença padrão GSAP, gratuita), lenis (MIT), vite (MIT)

## Referências de estilo (só inspiração, nada copiado)
Vídeos de sites de produto em 3D enviados pelo autor do projeto, e as práticas de desempenho do site DGL Telhadista (do próprio autor).
