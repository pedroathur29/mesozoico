// Popula o banco com categorias e PRODUTOS DEMONSTRATIVOS.
// Todos os produtos criados aqui têm isDemo = true e precisam ser substituídos
// por produtos reais (nome, fotos, preço, estoque e especificações do fornecedor)
// antes da abertura da loja. Nenhuma avaliação ou venda é criada.
//
// Uso: npm run db:seed   (pode rodar mais de uma vez; não duplica nada)

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const categories = [
  { slug: "seguranca", name: "Segurança", icon: "shield", description: "Fechaduras digitais, campainhas com vídeo e kits de proteção." },
  { slug: "cameras", name: "Câmeras", icon: "camera", description: "Monitoramento interno e externo com acesso pelo celular." },
  { slug: "sensores", name: "Sensores", icon: "sensor", description: "Presença, abertura de portas e janelas, temperatura e umidade." },
  { slug: "automacao", name: "Automação", icon: "automation", description: "Hubs, interruptores e iluminação para criar rotinas na casa." },
  { slug: "tomadas", name: "Tomadas inteligentes", icon: "plug", description: "Ligue, desligue e programe aparelhos de onde estiver." },
  { slug: "acessorios", name: "Acessórios", icon: "accessory", description: "Complementos para instalar e expandir seus dispositivos." },
];

const img = (key, name) => [1, 2, 3].map((n, i) => ({
  url: `/products/${key}-${n}.svg`,
  alt: `${name} — ilustração ${n} (imagem demonstrativa)`,
  position: i,
}));

const DEMO_NOTE = "Produto demonstrativo: descrição, preço e especificações são exemplos e serão substituídos pelos dados reais do fornecedor.";

const products = [
  {
    slug: "camera-wifi-interna-360", key: "camera-interna-360", category: "cameras", featured: true,
    name: "Câmera Wi-Fi Interna 360°", sku: "DEMO-CAM-360",
    shortDescription: "Giro horizontal de 360°, visão noturna e áudio bidirecional para acompanhar a casa pelo celular.",
    priceCents: 32990, salePriceCents: 27990, stock: 24,
    description: "Uma câmera compacta para salas, quartos e escritórios. O cabeçote motorizado gira para cobrir o ambiente inteiro e pode seguir movimentos automaticamente. Pelo aplicativo você assiste ao vivo, conversa com quem está em casa e recebe alertas quando algo se move.",
    howItWorks: "Conecte a câmera à tomada, abra o aplicativo do fabricante e siga o pareamento pela rede Wi-Fi 2,4 GHz. As gravações podem ficar no cartão microSD (vendido separadamente) ou na nuvem do fabricante, conforme o plano escolhido.",
    specs: [["Resolução", "Full HD 1080p"], ["Ângulo", "360° horizontal / 90° vertical"], ["Visão noturna", "Infravermelho até 10 m"], ["Áudio", "Bidirecional"], ["Armazenamento", "microSD até 128 GB ou nuvem"], ["Conectividade", "Wi-Fi 2,4 GHz"], ["Alimentação", "5 V via USB"]],
  },
  {
    slug: "camera-externa-2k", key: "camera-externa-2k", category: "cameras", featured: true,
    name: "Câmera Externa Wi-Fi 2K à Prova d'Água", sku: "DEMO-CAM-EXT",
    shortDescription: "Imagem 2K, proteção IP66 e visão noturna colorida para quintais, garagens e fachadas.",
    priceCents: 44990, salePriceCents: null, stock: 15,
    description: "Feita para áreas externas, com corpo vedado contra chuva e poeira. A detecção de pessoas reduz alertas falsos causados por folhas ou animais, e o refletor integrado permite imagens coloridas à noite.",
    howItWorks: "Fixe o suporte na parede, conecte a fonte e pareie pelo aplicativo. Defina zonas de detecção para receber alertas apenas das áreas que importam.",
    specs: [["Resolução", "2K (2304 × 1296)"], ["Proteção", "IP66"], ["Visão noturna", "Colorida com refletor / IR até 30 m"], ["Detecção", "Pessoas e movimento"], ["Armazenamento", "microSD até 256 GB ou nuvem"], ["Conectividade", "Wi-Fi 2,4 GHz"]],
  },
  {
    slug: "campainha-inteligente-com-video", key: "campainha-video", category: "seguranca", featured: true,
    name: "Campainha Inteligente com Vídeo", sku: "DEMO-BELL",
    shortDescription: "Veja e converse com quem está na porta, de qualquer lugar, direto do celular.",
    priceCents: 59990, salePriceCents: 52990, stock: 10,
    description: "Substitui a campainha comum por uma câmera com botão. Quando alguém toca, você recebe uma chamada de vídeo no celular e pode responder mesmo fora de casa.",
    howItWorks: "Funciona com bateria recarregável ou ligada à fiação da campainha existente. Após o pareamento, configure as notificações e o alcance da detecção de movimento.",
    specs: [["Resolução", "Full HD 1080p"], ["Campo de visão", "160° diagonal"], ["Alimentação", "Bateria recarregável ou fiação 12–24 V AC"], ["Áudio", "Bidirecional com redução de ruído"], ["Proteção", "IP65"]],
  },
  {
    slug: "fechadura-digital-biometrica", key: "fechadura-digital", category: "seguranca", featured: true,
    name: "Fechadura Digital com Biometria e Senha", sku: "DEMO-LOCK",
    shortDescription: "Abra a porta com digital, senha, cartão ou pelo aplicativo — sem chaves.",
    priceCents: 129990, salePriceCents: 114990, stock: 6,
    description: "Fechadura de embutir com leitor biométrico e teclado touch. Crie senhas temporárias para visitas e acompanhe o histórico de acessos pelo celular.",
    howItWorks: "A instalação substitui a fechadura atual e é recomendada por profissional. Funciona com pilhas AA e possui entrada de emergência USB-C caso as pilhas acabem.",
    specs: [["Métodos de abertura", "Biometria, senha, cartão, app e chave mecânica"], ["Usuários", "Até 100 digitais"], ["Alimentação", "4 pilhas AA"], ["Emergência", "Entrada USB-C"], ["Material", "Liga de alumínio"]],
  },
  {
    slug: "sensor-de-presenca-wifi", key: "sensor-presenca", category: "sensores", featured: true,
    name: "Sensor de Presença e Movimento", sku: "DEMO-PIR",
    shortDescription: "Detecta movimento para acender luzes, disparar alertas ou acionar rotinas.",
    priceCents: 12990, salePriceCents: null, stock: 40,
    description: "Sensor infravermelho passivo para ambientes internos. Use-o para ligar a iluminação ao entrar em um cômodo ou receber um alerta quando houver movimento com a casa vazia.",
    howItWorks: "Funciona com pilha e se conecta ao hub de automação. Fixe com a fita dupla face inclusa a cerca de 2 m de altura, apontado para a passagem principal.",
    specs: [["Alcance", "Até 7 m / 110°"], ["Alimentação", "Pilha CR2450"], ["Protocolo", "Zigbee 3.0 (requer hub)"], ["Uso", "Interno"]],
  },
  {
    slug: "sensor-de-porta-e-janela", key: "sensor-porta-janela", category: "sensores", featured: false,
    name: "Sensor de Abertura para Portas e Janelas", sku: "DEMO-CONTACT",
    shortDescription: "Saiba quando portas e janelas são abertas e crie alertas ou automações.",
    priceCents: 7990, salePriceCents: 6990, stock: 60,
    description: "Sensor magnético compacto em duas partes. Avisa no celular quando a porta é aberta e pode acionar a câmera, a sirene ou a iluminação.",
    howItWorks: "Cole uma peça na porta e outra no batente, com no máximo 1,5 cm de distância. Pareie com o hub e escolha as ações no aplicativo.",
    specs: [["Distância de acionamento", "Até 1,5 cm"], ["Alimentação", "Pilha CR2032"], ["Protocolo", "Zigbee 3.0 (requer hub)"]],
  },
  {
    slug: "sensor-temperatura-umidade", key: "sensor-temperatura", category: "sensores", featured: false,
    name: "Sensor de Temperatura e Umidade com Display", sku: "DEMO-TH",
    shortDescription: "Acompanhe o clima de cada cômodo e acione o ar-condicionado automaticamente.",
    priceCents: 9990, salePriceCents: null, stock: 32,
    description: "Display de fácil leitura e histórico no aplicativo. Ideal para quartos de bebê, adegas, estúdios ou para criar rotinas com o controle infravermelho.",
    howItWorks: "Coloque sobre uma superfície ou fixe na parede. Os dados são enviados ao hub e ficam disponíveis no aplicativo com gráficos de histórico.",
    specs: [["Faixa de temperatura", "-10 °C a 60 °C"], ["Faixa de umidade", "0 a 99% UR"], ["Alimentação", "2 pilhas AAA"], ["Protocolo", "Zigbee 3.0 (requer hub)"]],
  },
  {
    slug: "hub-de-automacao-zigbee", key: "hub-automacao", category: "automacao", featured: true,
    name: "Hub de Automação Zigbee e Wi-Fi", sku: "DEMO-HUB",
    shortDescription: "Central que conecta sensores e dispositivos e permite criar rotinas inteligentes.",
    priceCents: 24990, salePriceCents: 21990, stock: 18,
    description: "O hub é o cérebro da casa inteligente: conecta sensores de baixo consumo e executa rotinas como 'ao abrir a porta depois das 18h, acender a luz da sala'.",
    howItWorks: "Conecte ao roteador por Wi-Fi ou cabo, adicione os dispositivos pelo aplicativo e monte as rotinas com condições de horário, presença e sensores.",
    specs: [["Protocolos", "Zigbee 3.0, Wi-Fi 2,4 GHz, Bluetooth"], ["Dispositivos", "Até 64 Zigbee"], ["Assistentes", "Compatível com assistentes de voz populares"], ["Alimentação", "5 V via USB-C"]],
  },
  {
    slug: "interruptor-inteligente-touch-2-teclas", key: "interruptor-touch", category: "automacao", featured: true,
    name: "Interruptor Inteligente Touch 2 Teclas", sku: "DEMO-SW2",
    shortDescription: "Painel de vidro com toque suave para controlar duas lâmpadas pelo celular ou pela voz.",
    priceCents: 18990, salePriceCents: null, stock: 22,
    description: "Substitui o interruptor convencional em caixas 4×2. Controle cada tecla pelo painel, pelo aplicativo, por agendamentos ou por assistentes de voz.",
    howItWorks: "Requer fio neutro na caixa. A instalação deve ser feita por eletricista com o disjuntor desligado. Depois, pareie pela rede Wi-Fi.",
    specs: [["Teclas", "2"], ["Tensão", "100–240 V"], ["Carga máxima", "400 W por tecla"], ["Requisito", "Fio neutro"], ["Padrão", "Caixa 4×2"]],
  },
  {
    slug: "lampada-inteligente-rgb", key: "lampada-rgb", category: "automacao", featured: false,
    name: "Lâmpada Inteligente LED RGB 10 W", sku: "DEMO-BULB",
    shortDescription: "16 milhões de cores e tons de branco ajustáveis, com controle por app e voz.",
    priceCents: 7990, salePriceCents: 5990, stock: 80,
    description: "Rosqueie no lugar da lâmpada comum e crie cenas para cada momento: luz fria para trabalhar, quente para relaxar e colorida para festas.",
    howItWorks: "Encaixe em soquete E27, ligue o interruptor e pareie pelo aplicativo na rede Wi-Fi 2,4 GHz.",
    specs: [["Potência", "10 W"], ["Fluxo luminoso", "806 lm"], ["Soquete", "E27"], ["Cores", "RGB + branco 2700–6500 K"], ["Tensão", "Bivolt"]],
  },
  {
    slug: "tomada-inteligente-wifi-10a", key: "tomada-10a", category: "tomadas", featured: true,
    name: "Tomada Inteligente Wi-Fi 10 A", sku: "DEMO-PLUG10",
    shortDescription: "Ligue, desligue e programe aparelhos pelo celular. Padrão brasileiro de 3 pinos.",
    priceCents: 8990, salePriceCents: 7490, stock: 50,
    description: "Transforme abajures, cafeteiras e ventiladores em aparelhos inteligentes. Crie horários, timers e controle pela voz.",
    howItWorks: "Encaixe na tomada da parede, conecte o aparelho e pareie pelo aplicativo. Não exige instalação elétrica.",
    specs: [["Corrente máxima", "10 A"], ["Padrão", "NBR 14136 (3 pinos)"], ["Tensão", "100–240 V"], ["Conectividade", "Wi-Fi 2,4 GHz"]],
  },
  {
    slug: "tomada-inteligente-16a-medidor", key: "tomada-16a-medicao", category: "tomadas", featured: false,
    name: "Tomada Inteligente 16 A com Medição de Consumo", sku: "DEMO-PLUG16",
    shortDescription: "Para aparelhos de maior potência, com acompanhamento do consumo de energia.",
    priceCents: 11990, salePriceCents: null, stock: 28,
    description: "Indicada para ar-condicionado portátil, aquecedores e máquinas. O aplicativo mostra o consumo em tempo real e o histórico diário e mensal.",
    howItWorks: "Encaixe em tomada de 20 A, conecte o aparelho e acompanhe o consumo pelo aplicativo.",
    specs: [["Corrente máxima", "16 A"], ["Medição", "Potência, tensão e consumo (kWh)"], ["Padrão", "NBR 14136 (3 pinos)"], ["Conectividade", "Wi-Fi 2,4 GHz"]],
  },
  {
    slug: "filtro-de-linha-inteligente", key: "filtro-de-linha", category: "tomadas", featured: false,
    name: "Filtro de Linha Inteligente 3 Tomadas + USB", sku: "DEMO-STRIP",
    shortDescription: "Três tomadas controladas individualmente e duas portas USB.",
    priceCents: 16990, salePriceCents: 14990, stock: 14,
    description: "Organize a estação de trabalho ou o rack da TV e controle cada tomada separadamente pelo aplicativo.",
    howItWorks: "Conecte à tomada, pareie pelo aplicativo e nomeie cada saída para usar comandos de voz.",
    specs: [["Tomadas", "3 controláveis"], ["USB", "2 portas, 5 V / 2,4 A total"], ["Corrente máxima", "10 A"], ["Proteção", "Contra surtos"]],
  },
  {
    slug: "controle-universal-infravermelho", key: "controle-infravermelho", category: "acessorios", featured: false,
    name: "Controle Universal Infravermelho Wi-Fi", sku: "DEMO-IR",
    shortDescription: "Comande TV, ar-condicionado e som pelo celular, mesmo fora de casa.",
    priceCents: 9990, salePriceCents: null, stock: 35,
    description: "Emula os controles remotos dos seus aparelhos. Ligue o ar-condicionado antes de chegar em casa ou crie rotinas com sensores de temperatura.",
    howItWorks: "Posicione o controle com visão para os aparelhos, pareie pela rede Wi-Fi e escolha o modelo na biblioteca do aplicativo.",
    specs: [["Alcance IR", "Até 8 m / 360°"], ["Conectividade", "Wi-Fi 2,4 GHz"], ["Alimentação", "5 V via USB"]],
  },
  {
    slug: "cartao-microsd-128gb", key: "cartao-microsd", category: "acessorios", featured: false,
    name: "Cartão microSD 128 GB para Câmeras", sku: "DEMO-SD128",
    shortDescription: "Alta resistência para gravação contínua em câmeras de segurança.",
    priceCents: 8990, salePriceCents: null, stock: 45,
    description: "Cartão indicado para gravação contínua, com velocidade adequada para vídeos em Full HD e 2K.",
    howItWorks: "Insira no slot da câmera e formate pelo aplicativo antes do primeiro uso.",
    specs: [["Capacidade", "128 GB"], ["Classe", "U3 / V30"], ["Uso", "Gravação contínua"]],
  },
  {
    slug: "suporte-de-parede-para-camera", key: "suporte-camera", category: "acessorios", featured: false,
    name: "Suporte de Parede e Teto para Câmeras", sku: "DEMO-MOUNT",
    shortDescription: "Fixação firme e articulada para câmeras internas compactas.",
    priceCents: 3990, salePriceCents: null, stock: 0,
    description: "Suporte articulado para instalar câmeras internas em paredes ou tetos, com parafusos e buchas inclusos.",
    howItWorks: "Fixe a base com os parafusos, rosqueie a câmera e ajuste o ângulo.",
    specs: [["Material", "ABS"], ["Rosca", "1/4\" padrão"], ["Inclui", "Parafusos e buchas"]],
  },
];

async function main() {
  for (const [i, c] of categories.entries()) {
    await prisma.category.upsert({ where: { slug: c.slug }, update: {}, create: { ...c, sortOrder: i } });
  }
  const catIds = Object.fromEntries((await prisma.category.findMany()).map((c) => [c.slug, c.id]));

  let created = 0;
  for (const [i, p] of products.entries()) {
    const exists = await prisma.product.findUnique({ where: { slug: p.slug } });
    if (exists) continue;
    await prisma.product.create({
      data: {
        slug: p.slug,
        name: p.name,
        sku: p.sku,
        shortDescription: p.shortDescription,
        description: `${p.description}\n\n${DEMO_NOTE}`,
        howItWorks: p.howItWorks,
        specs: p.specs.map(([label, value]) => ({ label, value })),
        priceCents: p.priceCents,
        salePriceCents: p.salePriceCents,
        stock: p.stock,
        featured: p.featured,
        isDemo: true,
        categoryId: catIds[p.category],
        // datas escalonadas só para a ordenação "Mais recentes" ter efeito visível
        createdAt: new Date(Date.now() - (products.length - i) * 86_400_000),
        images: { create: img(p.key, p.name) },
      },
    });
    created++;
  }
  console.log(`Categorias: ${categories.length}. Produtos demonstrativos criados: ${created}.`);

  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const password = process.env.ADMIN_PASSWORD;
  if (email && password) {
    if (password.length < 10) throw new Error("ADMIN_PASSWORD precisa ter pelo menos 10 caracteres.");
    const exists = await prisma.adminUser.findUnique({ where: { email } });
    if (!exists) {
      await prisma.adminUser.create({
        data: { email, name: process.env.ADMIN_NAME || "Administrador", passwordHash: await bcrypt.hash(password, 12) },
      });
      console.log(`Administrador criado: ${email}`);
    }
  } else {
    console.log("ADMIN_EMAIL/ADMIN_PASSWORD não definidos: nenhum administrador criado (use npm run admin:create).");
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
