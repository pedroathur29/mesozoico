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
src/anim.js           animação por código: pernas por cinemática inversa, passada sem deslizar, respiração, olhos, farejar, ações de parado
src/quality.js        qualidade adaptativa (3 níveis, mede fps; o nível baixo esconde a camada de penas)
src/style.css         visual: fundo escuro, dino branco, destaque azul-gelo
public/assets/models/ yutyrannus.glb
tools/clean_model.py  prepara o modelo no Blender (volume, filamentos simples, padrão de listras, penacho, chaves de forma da respiração)
tools/publicar.mjs    copia o build para a raiz
tools/check/          testes de passada, enquadramento e rolagem, e a análise do movimento (tracos)
```

## O que o rig permite (conferido no modelo)
O esqueleto tem 95 ossos e nenhuma animação pronta. Dá para animar: quadril, tronco (3 ossos), pescoço (3), cabeça, mandíbula, língua (4), pálpebras, globos oculares, clavículas (ombros), braço, antebraço, pulso e três dedos com três falanges, coxa, canela, metatarso, pé e três dedos, e cauda (6 ossos).
O esqueleto **não tem** costelas, barriga nem narinas. Em vez de fingir isso com ossos que não existem, `tools/clean_model.py` acrescenta três chaves de forma ao modelo: `chest` (tórax), `belly` (abdômen) e `nostril` (narinas).

## O que o dino faz
- **Sempre:** respira (o tórax abre e o abdômen acompanha logo depois, com uma pausa entre os ciclos; o ritmo acelera depois de andar ou rugir), passa o peso de uma perna para a outra com os pés plantados, pisca, move os olhos em pequenos saltos e vira a cabeça para a câmera (no computador, acompanha o mouse). Cauda, pescoço e filamentos seguem o corpo com atraso.
- **De tempos em tempos (parado):** uma ação de cada vez, sorteada de um "saco" que é embaralhado a cada rodada: observar o entorno (os olhos vão primeiro, a cabeça segue), olhar de relance, farejar o chão (baixa a cabeça até perto do solo, aspira em rajadas curtas com as narinas abrindo e ergue de novo), farejar o ar, trocar um pé de lugar, ajustar a postura, abanar a cauda e, raramente, bocejar. Entre as ações há intervalos de 1,6 a 6 s e, às vezes, uma pausa longa. A boca fica fechada no repouso e na caminhada: só abre no rugido, no bocejo e, por um instante, ao farejar.
- **Abertura:** ele já aparece inteiro no quadro, um pouco atrás da marca. Dá alguns passos até o lugar e freia, enquanto a câmera se aproxima. Nada dele sai da tela.
- **Atos 2 e 7:** anda enquanto a página rola (são os atos com intenção de deslocamento). Quando a rolagem para, ele freia, termina o passo e assenta os pés. Nos outros atos ele fica em repouso.
- **Ato 3:** abaixa a cabeça e fareja a pessoa de 1,75 m. Uma régua no chão marca os 9 m.
- **Ato 4:** sacode o corpo devagar, de tempos em tempos. A câmera termina no penacho da cauda.
- **Ato 5:** abre a boca aos poucos e termina rugindo de frente.
- **Ato 6:** estende os braços e abre e fecha as garras.

Tudo isso é animação ilustrativa (o site diz isso no fecho), não um dado sobre o comportamento do animal.
Com `prefers-reduced-motion`, ficam só a câmera e as poses ligadas à rolagem: sem caminhada, sem entrada e sem "vida própria".

## Como a animação funciona (`fonte/src/anim.js`)
Tudo é calculado por código a cada quadro, em cima da pose de repouso.
- **Pernas por cinemática inversa:** cada pé tem um alvo e a perna (coxa, canela, metatarso) é resolvida para alcançá-lo, com uma correção para o erro ficar em milímetros.
- **Passada:** o corpo avança `travel` metros e cada pé plantado fica preso a um ponto do chão. O pé de trás levanta quando chega ao limite, vai à frente e pousa. A velocidade pedida é suavizada (acelera e freia aos poucos) e o corpo nunca passa do alcance da perna de apoio.
- **Cada passo é um pouco diferente:** comprimento, altura, duração e o ponto onde o pé pisa variam de passo para passo, e a velocidade oscila de leve. Sem isso a caminhada vira metrônomo.
- **O pé sai e chega na velocidade do chão:** no ar, ele ainda recua um pouco ao sair, passa do ponto e volta antes de tocar. Assim não chega "patinando", que era o que tirava o peso da pisada.
- **O chão anda, o dino fica no quadro:** a cena desloca a textura do terreno e as coníferas pelo mesmo `travel`. Por isso os pés não deslizam.
- **Peso:** o corpo vai para a perna de apoio antes de o outro pé sair do chão, cede um pouco logo depois de cada pouso e volta. As molas do quadril passam um pouco do alvo e assentam. Ele inclina para a frente ao arrancar e para trás ao frear.
- **Atrasos em cadeia:** do quadril para a frente (tronco, pescoço, cabeça) e para trás (cauda), cada segmento recebe o movimento do anterior com um pequeno atraso. Para a frente o movimento vai diminuindo: a cabeça quase não gira nem balança de lado, é o corpo que se mexe por baixo dela. Na cauda a onda cresce até a ponta.
- **Pés:** os dedos chegam um pouco erguidos, assentam e se espalham ao receber o peso; no impulso o calcanhar sobe e os dedos abrem de novo.
- **Trilha estreita:** andando, os pés pisam perto da linha do meio do corpo (como nas pegadas de terópodes) e o pé no ar contorna a perna de apoio por fora. Ao parar, ele reabre a base com um passo de ajuste.
- **Cauda:** a base vai junto com a pelve (o vai e vem de lado e de altura, e o giro dela); cada articulação seguinte recebe esse movimento um pouco depois e um pouco menor, até a ponta. Os ângulos saem de posições desejadas, então a ponta nunca passa do ponto (sem chicote). Depois de parar, a cauda volta devagar à pose de repouso.
- **Peito, pescoço e cabeça:** o peito gira um pouco ao contrário do quadril (compensa); o pescoço desfaz boa parte do vai e vem e do sobe e desce do corpo, e a cabeça quase não gira: o olhar fica estável e o corpo não balança como uma peça só.
- **Velocidade sem trancos:** a aceleração muda aos poucos, e ele não acelera além do que a perna de apoio aguenta até o outro pé pousar. Antes, em velocidade mais alta, o corpo às vezes parava de uma vez no meio do passo.
- **Braços e mãos:** em repouso o braço fica recolhido junto ao peito, com o cotovelo dobrado, o punho solto e os três dedos levemente curvados e separados (palmas viradas uma para a outra). Andando, só um contrapeso pequeno. Parado, punho e dedos mudam de leve, cada mão no seu tempo. No ato 6 o braço avança um pouco e os dedos abrem e fecham um depois do outro, sem abrir em leque.
- **Pausas no repouso:** os pequenos movimentos de equilíbrio, cabeça e cauda correm em relógios próprios, que de tempos em tempos desaceleram até parar e depois retomam. Nas pausas ele só respira e pisca. O peso fica um tempo numa perna e depois passa para a outra, em vez de um vai e vem contínuo.
- **Respiração variada:** cada respiração tem profundidade e duração diferentes, a pausa depois de expirar muda de tamanho e, de vez em quando, vem um suspiro.
- **Respiração e narinas:** chaves de forma do modelo, não escala de ossos.
- **Agenda das ações de parado:** gerada por sorteio fixo (a mesma para o mesmo relógio, o que permite testar), mas sem ciclo: durações e intervalos variam.
- **Giro dos keyframes (`rot`):** gira o dino junto com o chão, o que equivale à câmera orbitar em volta dele.

## O modelo (`fonte/tools/clean_model.py`)
O arquivo original é preparado no Blender, por código. O script:
- tira a sela e apara a plumagem;
- apaga a mancha marrom atrás do olho (a abertura do ouvido do modelo de origem, que sobrevivia ao clareamento por ser colorida), preenchendo a área a partir da borda e devolvendo o grão da pele de uma área vizinha;
- dá volume às coxas e à base da cauda, estreita o tronco, recolhe a barriga e deita os tufos do tronco (pernas fortes, corpo esguio);
- alinha a direção dos tufos à região do corpo (para trás no tronco, para baixo nos membros, para a ponta na cauda), deitados em camadas como telhas, com a frente sempre para fora; varia o comprimento e cria um penacho na ponta da cauda e uma crina na nuca;
- troca a textura da plumagem por um desenho próprio de **filamentos simples** (fios sem ramificação). A textura original mostrava penas com raque e barbas, o que contradizia o texto do site;
- pinta um padrão próprio: listras escuras, anéis na cauda, penacho creme, máscara escura no focinho, crista ferrugem, pernas e mãos escuras. No corpo o padrão vai para a textura; na plumagem vai para um "mapa em volume" que o site consulta pela posição de cada fio, e por isso as listras ficam nítidas;
- acrescenta as chaves de forma da respiração e das narinas e dá material próprio aos olhos.

A imagem de *Jurassic World Evolution 3* enviada pelo autor serviu só de guia de acabamento (robustez, listras, penacho). Nenhum modelo, textura ou recurso do jogo foi usado: o padrão e a textura de filamentos são gerados aqui. A cor real do animal é desconhecida, e a referência não é prova de aparência.

## Cena (`fonte/src/scene.js`)
- **Terreno:** disco de solo com textura gerada por código, que se esfuma nas bordas.
- **Sombras de contato:** uma sob o tronco e uma sob cada pé, que some quando o pé levanta. No nível alto de qualidade o chão também recebe a sombra projetada do corpo.
- **Plumagem:** filamentos recortados (não translúcidos). Não há vento: cinco pontos do corpo (cabeça, peito, quadril, meio e ponta da cauda) têm cada um um "seguidor" preso por uma mola frouxa; quando o corpo se mexe, os filamentos daquela região ficam para trás, passam um pouco do ponto e assentam. Parado o corpo, a plumagem para. De longe os cartões ficam mais cheios, para a pelagem não virar chuvisco.
- **Coníferas:** silhuetas ao fundo, quase da cor do fundo. Só aparecem as que estão atrás do dino, e a intensidade vem do keyframe `flora` (nada na abertura, tudo no ato 7).
- **Layout:** em celulares, tablets em pé e janelas quase quadradas (proporção abaixo de 1,45) o texto vai para baixo e o dino para cima. O mesmo critério está no CSS e na cena.

## Como conferir (`fonte/tools/check/`)
Três testes medem o que não dá para ver numa captura. Precisam do Playwright e do site servido (`npm run build && npm run preview -- --port 4173`).
```bash
node tools/check/passada.cjs        # anda, freia e volta a andar: quanto o pé plantado se move no chão e se a cabeça dá saltos
node tools/check/enquadramento.cjs  # em vários tamanhos de tela: o dino cabe no quadro? encosta no texto?
node tools/check/rolagem.cjs        # rola a página inteira como um usuário e mede saltos e deslizamento
node tools/check/tracos.cjs t.json && python3 tools/check/tracos.py t.json grafico.png
                                    # grava o movimento a 60 quadros por segundo e analisa: variação entre passos, velocidade do pé
                                    # ao tocar o chão, atrasos entre quadril, tronco, cabeça e cauda, pausas e respiração no repouso
```
Última medição. Caminhada: o pé plantado se move menos de 1 mm; ele toca o chão a menos de 0,5 m/s em relação ao solo; aceleração do corpo de no máximo 2,6 m/s², sem nenhuma freada brusca (antes 111 m/s² nos travamentos). Cauda, de lado: base 15 cm, meio 13 cm, ponta 12 cm, com o meio 280 ms e a ponta 470 ms depois do quadril. Focinho: 10 cm de sobe e desce e 9 cm de lado (antes 21 e 13). Rolagem: numa rolagem contínua igual para as duas versões, o tranco médio da câmera caiu 62%. Repouso: boca fechada em 93% do tempo; fora das ações, a cabeça fica em pausa 24% do tempo e a cauda 33%. Enquadramento: nos atos de corpo inteiro (1, 2, 3 e 7) o dino cabe inteiro no quadro em seis tamanhos de tela, de 360×640 a 1440×810, e só em 1280×720, no ato 2, dois pontos do corpo ficam a menos de 24 px do texto.

## Elementos de documentário
- **Anotações de anatomia** presas ao corpo do dino (filamentos, crista nasal, dentes, três dedos). Os pontos ficam em `ANCHORS`, em `fonte/src/scene.js`.
- **Linha do tempo do Mesozoico** no ato 7, com larguras proporcionais à duração de cada período (limites: 252, 201, 143 e 66 Ma).
- **Fecho** com a fonte científica e o crédito do modelo.
- Os números grandes contam de zero e os títulos entram palavra por palavra.

## Os 7 atos
1 Abertura · 2 Corpo inteiro · 3 Escala · 4 Penas · 5 Cabeça · 6 Braços e garras · 7 Habitat.
Valores incertos levam o selo **estimativa**, **hipótese** ou **incerta**. A cor branca e as listras são escolha artística: a cor real é desconhecida.

## Pendências
- Confirmar autor, link e licença do modelo 3D (ver `CREDITS.md`).
- Animação do dino: conferida por medição e por sequências de quadros, não assistida em tempo real. Falta um olhar humano para o ritmo.
- Imagens de apoio e revisão final dos textos com fontes. Conferir no artigo o comprimento dos filamentos (o site diz 15 a 20 cm).
- Teste em celulares reais.
