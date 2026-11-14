# MESOZOICO v2 — Yutyrannus huali

Site scrollytelling em português sobre **uma única espécie**, o *Yutyrannus huali*, tiranossauroide emplumado do Cretáceo Inferior da China. Um dinossauro 3D fica fixo na tela e a rolagem controla câmera, giro e luz, em 7 atos.

Página: https://pedroathur29.github.io/mesozoico/

A versão anterior do MESOZOICO (viagem pelo Mesozoico com a sequência K–Pg) está preservada na branch [`v1-kpg`](https://github.com/pedroathur29/mesozoico/tree/v1-kpg).

## Como o repositório está organizado
O GitHub Pages publica a branch `main` direto da raiz, sem rodar build. Por isso:

- **Raiz** (`index.html`, `assets/`, `favicon.svg`): o site pronto, gerado. Não edite à mão.
- **`fonte/`**: o código-fonte (Vite + Three.js + GSAP/ScrollTrigger + Lenis).
- **`CREDITS.md`**: créditos e licenças (o do modelo 3D ainda tem uma pendência).
- **`docs/YUTYRANNUS-FONTES-v1.md`**: base científica levantada na versão anterior.

## Rodar e publicar
Precisa do Node 18 ou mais novo.
```bash
cd fonte
npm install
npm run dev        # desenvolvimento, em http://localhost:5173
npm run publicar   # gera o build e copia para a raiz do repositório
```
Depois de `npm run publicar`, faça commit e push: o site no ar é o que estiver na raiz da `main`.

Parâmetros de teste na URL: `?q=0|1|2` força a qualidade, `?fps` mostra o desempenho, `?pal=osso|mix` troca a paleta e `?debug` expõe a cena no console.

## Estrutura de `fonte/`
```
index.html            conteúdo dos 7 atos
src/main.js           loading, scroll suave, revelação de textos, loop de desenho
src/acts.js           coreografia: câmera, giro e cores por ato  ← ajuste aqui o "movimento"
src/scene.js          cena Three.js (luzes, sombra de contato, humano de escala)
src/dino.js           carregador do .glb (e um placeholder, usado se o modelo faltar)
src/anim.js           animação por código: respiração, cauda, caminhada ligada à rolagem e rugido
src/quality.js        qualidade adaptativa (3 níveis, mede fps)
src/style.css         visual: fundo escuro, dino branco, destaque azul-gelo
public/assets/models/ yutyrannus.glb
tools/clean_model.py  prepara o modelo no Blender (tira a sela, apara as penas, clareia, reduz texturas)
tools/publicar.mjs    copia o build para a raiz
```

## Os 7 atos
1 Abertura · 2 Corpo inteiro · 3 Escala · 4 Penas · 5 Cabeça · 6 Braços e garras · 7 Habitat.
Valores incertos levam o selo **estimativa**, **hipótese** ou **incerta**. A cor branca do animal é escolha artística: a cor real é desconhecida.

## Pendências
- Confirmar autor, link e licença do modelo 3D (ver `CREDITS.md`).
- Animação do dino: primeira versão feita por código (`fonte/src/anim.js`); falta ajuste fino vendo em movimento.
- Imagens de apoio e revisão final dos textos com fontes.
- Teste em celulares reais.
