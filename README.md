# MESOZOICO

Viagem pelo Mesozoico, do Triássico ao limite K–Pg, com fontes e graus de certeza em cada cena.

Página: https://pedroathur29.github.io/mesozoico/

- `index.html`: o site (HTML, CSS e JavaScript num arquivo só).
- `kpg/`: a sequência 3D do limite Cretáceo–Paleógeno, aberta como última cena do site. `kpg/index.html` também
  funciona sozinha.
- O código-fonte editável da K–Pg e as ferramentas ficam no pacote de trabalho do projeto (`maquetes/kpg`), fora
  deste repositório. Este repositório guarda só o que o navegador usa.

Esta versão pública sai sem o modelo da ave do momento 6 ("White Eagle"), porque a origem e a licença dele ainda
não foram confirmadas. Para reativá-lo depois de confirmar a licença, publique com
`python tools/publicar-github.py <repositório> --com-ave`.
