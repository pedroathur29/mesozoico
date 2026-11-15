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

Parâmetros de teste na URL: `?q=0|1|2` força a qualidade, `?fps` mostra o desempenho, `?pal=osso|mix` troca a paleta, `?debug` expõe a cena no console e congela as suavizações (para capturas) e `?debug&live` expõe a cena sem congelar nada.

## Estrutura de `fonte/`
```
index.html            conteúdo dos 7 atos
src/main.js           loading, scroll suave, revelação de textos, loop de desenho
src/acts.js           coreografia: câmera, giro e cores por ato  ← ajuste aqui o "movimento"
src/scene.js          cena Three.js (luzes, terreno, coníferas, sombras de contato, pessoa de escala, balanço dos filamentos)
src/dino.js           carregador do .glb (e um placeholder, usado se o modelo faltar)
src/anim.js           animação por código: pernas por cinemática inversa, passada sem deslizar, atrasos em cadeia, ações de parado
src/quality.js        qualidade adaptativa (3 níveis, mede fps; o nível baixo esconde a camada de penas)
src/style.css         visual: fundo escuro, dino branco, destaque azul-gelo
public/assets/models/ yutyrannus.glb
tools/clean_model.py  prepara o modelo no Blender (tira a sela, apara as penas, clareia, pinta o padrão de plumagem, reduz texturas)
tools/publicar.mjs    copia o build para a raiz
tools/check/          testes de passada, enquadramento e rolagem
```

## O que o dino faz
- **Sempre:** respira, passa o peso de uma perna para a outra com os pés plantados, balança a cauda, pisca e vira a cabeça para a câmera (no computador, acompanha o mouse). Os filamentos cedem ao movimento do corpo e a uma brisa leve.
- **De tempos em tempos (parado):** olha para o lado, troca um pé de lugar, fareja o ar, abana a cauda, abaixa a cabeça ou boceja. A ordem é embaralhada e nunca repete a anterior.
- **Abertura:** entra andando pela esquerda quando o loading termina e freia até parar.
- **Atos 2 e 7:** anda enquanto a página rola. Quando a rolagem para, ele freia, termina o passo e assenta os pés.
- **Ato 3:** abaixa a cabeça e fareja a pessoa de 1,75 m. Uma régua no chão marca os 9 m.
- **Ato 4:** sacode o corpo devagar, de tempos em tempos.
- **Ato 5:** abre a boca aos poucos e termina rugindo de frente.
- **Ato 6:** estende os braços e abre e fecha as garras.

Tudo isso é animação ilustrativa (o site diz isso no fecho), não um dado sobre o comportamento do animal.
Com `prefers-reduced-motion`, ficam só a câmera e as poses ligadas à rolagem: sem caminhada, sem entrada e sem "vida própria".

## Como a animação funciona (`fonte/src/anim.js`)
O modelo tem esqueleto (95 ossos) e nenhuma animação pronta, então tudo é calculado por código a cada quadro.
- **Pernas por cinemática inversa:** cada pé tem um alvo e a perna (coxa, canela, metatarso) é resolvida para alcançá-lo, com uma correção para o erro ficar em milímetros.
- **Passada:** o corpo avança `travel` metros e cada pé plantado fica preso a um ponto do chão. O pé de trás levanta quando chega ao limite, vai à frente e pousa. A velocidade pedida é suavizada (acelera e freia aos poucos) e o corpo nunca passa do alcance da perna de apoio.
- **O chão anda, o dino fica no quadro:** a cena desloca a textura do terreno e as coníferas pelo mesmo `travel`. Por isso os pés não deslizam.
- **Corpo:** o quadril sobe no meio do passo, pende para a perna de apoio e gira com a passada; o tronco gira ao contrário. Molas suavizam tudo.
- **Atraso:** cauda, pescoço, cabeça e braços seguem o quadril com atraso crescente (filtros em cadeia), em vez de ondas fixas.
- **Giro dos keyframes (`rot`):** gira o dino junto com o chão, o que equivale à câmera orbitar em volta dele.

## Cena (`fonte/src/scene.js`)
- **Terreno:** disco de solo com textura gerada por código, que se esfuma nas bordas.
- **Sombras de contato:** uma sob o tronco e uma sob cada pé, que some quando o pé levanta.
- **Coníferas:** silhuetas ao fundo, quase da cor do fundo. Só aparecem as que estão atrás do dino, e a intensidade vem do keyframe `flora` (nada na abertura, tudo no ato 7).
- **Layout:** em celulares, tablets em pé e janelas quase quadradas (proporção abaixo de 1,45) o texto vai para baixo e o dino para cima. O mesmo critério está no CSS e na cena.

## Como conferir (`fonte/tools/check/`)
Três testes medem o que não dá para ver numa captura. Precisam do Playwright e do site servido (`npm run build && npm run preview -- --port 4173`).
```bash
node tools/check/passada.cjs        # anda, freia e volta a andar: quanto o pé plantado se move no chão e se a cabeça dá saltos
node tools/check/enquadramento.cjs  # em vários tamanhos de tela: o dino cabe no quadro? encosta no texto?
node tools/check/rolagem.cjs        # rola a página inteira como um usuário e mede saltos e deslizamento
```
Última medição: o pé plantado se move no máximo 4 mm durante um apoio (5 mm na rolagem real). Nos atos de corpo inteiro (1, 2, 3 e 7) o dino cabe inteiro no quadro em oito tamanhos de tela, de 360×640 a 1920×1080, e só num deles (1180×760, ato 2) um ponto do corpo fica a menos de 24 px do texto. Nos atos de detalhe (4, 5 e 6) o corte é intencional.

## Elementos de documentário
- **Anotações de anatomia** presas ao corpo do dino (filamentos, crista nasal, dentes, três dedos). Os pontos ficam em `ANCHORS`, em `fonte/src/scene.js`.
- **Linha do tempo do Mesozoico** no ato 7, com larguras proporcionais à duração de cada período (limites: 252, 201, 143 e 66 Ma).
- **Fecho** com a fonte científica e o crédito do modelo.
- Os números grandes contam de zero e os títulos entram palavra por palavra.

## Os 7 atos
1 Abertura · 2 Corpo inteiro · 3 Escala · 4 Penas · 5 Cabeça · 6 Braços e garras · 7 Habitat.
Valores incertos levam o selo **estimativa**, **hipótese** ou **incerta**. A cor branca do animal é escolha artística: a cor real é desconhecida.

## Pendências
- Confirmar autor, link e licença do modelo 3D (ver `CREDITS.md`).
- Animação do dino: conferida por medição e por sequências de quadros, não assistida em tempo real. Falta um olhar humano para o ritmo.
- Imagens de apoio e revisão final dos textos com fontes. Conferir no artigo o comprimento dos filamentos (o site diz 15 a 20 cm).
- Teste em celulares reais.
