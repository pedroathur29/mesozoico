// Coreografia da câmera e das cores. Cada ato tem 2 ou 3 keyframes ("at" = posição dentro do ato, 0..1).
// Unidades em metros. Modelo real (Sketchfab): 9 m de comprimento, ~3,2 m de altura,
// nariz em +X, cauda em -X, pés em y = 0. Pontos de referência aproximados:
//   cabeça ≈ (3.9, 2.7)   tronco ≈ (0, 1.9)   braços ≈ (2.0, 1.8)   quadril ≈ (-0.8, 2.0)   ponta da cauda ≈ (-4.5, 1.3)
//
//   cam: posição da câmera      look: ponto para onde ela olha
//   rot: giro em Y do dino junto com o chão (equivale à câmera orbitar em volta dele)
//   pitch/roll: inclinam o dino e o chão juntos, como uma câmera inclinada (rad, usar pouco: ±0.15)
//   shift: deslocamento do dino na tela (-1..1, fração da largura)
//   bg / ink / acc: cor de fundo, do texto e de destaque do ato (paleta OSSO ou NOITE, ver abaixo)
//   glow: cor do brilho de fundo, glowA/X/Y: intensidade e posição (%)
//   light: intensidade das luzes   human: 0..1 silhueta humana (ato 3)
//   walk: 0..1 anda enquanto a página rola (o chão passa por baixo; ele freia sozinho quando a rolagem para)   roar: 0..1 rugido   sniff: 0..1 fareja a pessoa
//   flora: 0..1 quanto as coníferas do fundo aparecem (pouco na abertura e nos closes, tudo no ato do habitat)
//   nk: no celular, multiplica a distância da câmera (planos de corpo inteiro precisam de mais recuo)
//   ruffle: 0..1 sacode as penas de tempos em tempos   grab: 0..1 estende os braços e mexe as garras (ver src/anim.js)
const D = { rot: 0, pitch: 0, roll: 0, shift: 0.2, fov: 34, glow: [120, 170, 215], glowA: 0.16, glowX: 72, glowY: 50, light: 1, human: 0, walk: 0, roar: 0, sniff: 0, ruffle: 0, grab: 0, nk: 1, flora: 0.5 };

// Duas paletas que se alternam a cada ato:
//   OSSO  = claro, tinta escura, laranja queimado (sem brilho)
//   NOITE = escuro azul-petróleo, texto claro, destaque azul-gelo (com um brilho frio discreto atrás do dino)
const OSSO = { bg: [233, 228, 214], ink: [16, 22, 27], acc: [194, 65, 12], glowA: 0 };
const NOITE = { bg: [10, 20, 29], ink: [232, 238, 242], acc: [159, 211, 255] };

// Modo de paleta: 'noite' (padrão: todos os atos escuros, só variando o tom), 'osso' (todos claros) ou 'mix' (alterna).
// Para testar sem mexer no código: ?pal=osso ou ?pal=mix na URL.
const PAL = new URLSearchParams(location.search).get('pal') || 'noite';
const TONES = { 1: [233, 228, 214], 2: [226, 221, 205], 3: [236, 226, 204], 4: [221, 225, 223], 5: [234, 224, 206], 6: [225, 220, 205], 7: [230, 230, 217] };
const NIGHTS = { 1: [10, 20, 29], 2: [8, 31, 40], 3: [17, 28, 46], 4: [12, 24, 34], 5: [20, 24, 38], 6: [10, 20, 29], 7: [11, 27, 30] };

// O ato 2 termina depois de uma volta completa (rot = 2π). Do ato 3 em diante somamos essa volta,
// senão o dino "desenrolaria" 360° de uma vez na passagem do ato 2 para o 3.
const TURN = Math.PI * 2;
const K = (act, at, pal, p) => {
  const k = PAL === 'osso' ? { act, at, ...D, ...OSSO, bg: TONES[act], ...p, glowA: 0 }
    : PAL === 'noite' ? { act, at, ...D, ...NOITE, bg: NIGHTS[act], ...p }
    : { act, at, ...D, ...pal, ...p };
  if (act >= 3) k.rot += TURN;
  return k;
};

export const KEYFRAMES = [
  // 1 · Abertura (OSSO): dino grande cortando o título que fica atrás dele
  K(1, 0.0,  OSSO,  { cam: [0, 2.2, 10.8],    look: [0, 1.7, 0],     shift: 0.06, fov: 34, nk: 1.45, flora: 0.0 }),
  K(1, 1.0,  OSSO,  { cam: [1.6, 2.3, 10.6],  look: [0.3, 1.75, 0],  rot: 0.12, shift: 0.08, fov: 34, nk: 1.45, flora: 0.25 }),
  // 2 · Corpo inteiro (NOITE): órbita completa, passando por cima
  K(2, 0.05, NOITE, { cam: [0, 2.7, 15],      look: [0, 1.7, 0],     rot: 0,     shift: 0.36, fov: 36, glowY: 55, walk: 1, flora: 0.6 }),
  K(2, 0.5,  NOITE, { cam: [0, 8.5, 13.5],    look: [0, 1.4, 0],     rot: 3.14,  shift: 0.4,  fov: 36, glowY: 52, walk: 1, flora: 0.6 }),
  K(2, 0.95, NOITE, { cam: [0, 2.7, 15],      look: [0, 1.7, 0],     rot: TURN,  shift: 0.36, fov: 36, glowY: 55, walk: 1, flora: 0.6 }),
  // 3 · Escala (OSSO): perfil limpo com o humano; depois vista alta e inclinada
  K(3, 0.05, OSSO,  { cam: [0, 1.9, 21],      look: [0, 1.6, 0],     rot: 0,     shift: -0.46, fov: 36, human: 1, sniff: 1, flora: 0.55 }),
  K(3, 0.95, OSSO,  { cam: [6.5, 10, 15],     look: [0.5, 1.4, 0],   rot: 0,     roll: -0.12, shift: -0.46, fov: 34, human: 1, sniff: 1, flora: 0.55 }),
  // 4 · Penas (NOITE): de baixo para cima, depois por cima do dorso
  K(4, 0.05, NOITE, { cam: [5.2, 0.7, 5.4],   look: [0.2, 2.3, 0],   rot: 0,     pitch: 0.1,  shift: 0.38, fov: 30, glowY: 45, ruffle: 1, flora: 0.3 }),
  K(4, 0.5,  NOITE, { cam: [3.0, 3.6, 4.6],   look: [-0.4, 2.4, 0],  rot: -0.4,  shift: 0.34, fov: 28, glowY: 45, ruffle: 1, flora: 0.3 }),
  K(4, 0.95, NOITE, { cam: [0.8, 6.2, 3.6],   look: [-0.6, 2.2, 0],  rot: -0.8,  shift: 0.3, fov: 28, glowY: 45, ruffle: 1, flora: 0.3 }),
  // 5 · Cabeça (OSSO): de frente, 3/4 e o outro lado da mandíbula
  K(5, 0.05, OSSO,  { cam: [9.5, 2.8, 1.6],   look: [3.9, 2.6, 0],   rot: 0,     shift: -0.2, fov: 28, roar: 0.1, flora: 0.25 }),
  K(5, 0.5,  OSSO,  { cam: [7.6, 3.2, 4.2],   look: [3.9, 2.6, 0],   rot: 0,     roll: 0.1, shift: -0.2, fov: 28, roar: 0.5, flora: 0.25 }),
  K(5, 0.95, OSSO,  { cam: [9.4, 1.7, -1.5],  look: [3.9, 2.5, 0],   rot: 0,     shift: -0.34, fov: 28, roar: 1, flora: 0.25 }),
  // 6 · Braços e garras (NOITE): 3/4 de frente, com os braços no centro da cena e a cabeça por cima; depois fecha nas garras
  K(6, 0.05, NOITE, { cam: [7.2, 1.5, 3.6],   look: [2.6, 1.9, 0.2], rot: 0,     shift: 0.42,  fov: 30, glowY: 55, grab: 1, flora: 0.3 }),
  K(6, 0.95, NOITE, { cam: [6.3, 1.1, 1.7],   look: [2.5, 1.5, 0.4], rot: 0,     shift: 0.46, fov: 28, glowY: 55, grab: 1, flora: 0.3 }),
  // 7 · Habitat (OSSO): a câmera sobe e recua, o dino diminui no espaço vazio
  K(7, 0.05, OSSO,  { cam: [-3, 5, 22],       look: [0, 1.5, 0],     rot: 0.5,   shift: -0.2, fov: 36, light: 0.9, walk: 1, flora: 1.0 }),
  K(7, 1.0,  OSSO,  { cam: [-6, 9, 32],       look: [0, 1.5, 0],     rot: 0.8,   shift: -0.2, fov: 38, light: 0.9, walk: 1, flora: 1.0 }),
];
