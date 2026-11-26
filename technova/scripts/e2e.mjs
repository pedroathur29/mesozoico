// Teste de ponta a ponta dos fluxos principais (Playwright).
// Uso: com a loja rodando (npm run build && npm start), execute:
//   BASE_URL=http://localhost:3000 ADMIN_EMAIL=... ADMIN_PASSWORD=... npm run test:e2e
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
let pw;
try { pw = require("playwright"); } catch { pw = require(require("node:child_process").execSync("npm root -g").toString().trim() + "/playwright"); }

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const SHOTS = process.env.SHOTS_DIR;
let failures = 0;
const step = async (name, fn) => {
  try { await fn(); console.log(`✔ ${name}`); }
  catch (e) { failures++; console.log(`✘ ${name}\n   ${e.message.split("\n")[0]}`); }
};
const assert = (c, m) => { if (!c) throw new Error(m); };

const browser = await pw.chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1366, height: 900 } });
const page = await ctx.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(`${page.url()}: ${e.message.slice(0, 80)}`));
const shot = (n) => SHOTS && page.screenshot({ path: `${SHOTS}/${n}.png`, fullPage: true });
let orderCode;

await step("Página inicial carrega com banner, categorias e destaques", async () => {
  await page.goto(BASE);
  assert(await page.getByRole("heading", { name: /Sua casa mais inteligente/i }).isVisible(), "título do banner");
  assert((await page.locator("article").count()) >= 4, "produtos em destaque");
  await shot("home");
});

await step("Busca com sugestões ignora acentos", async () => {
  await page.getByRole("combobox").first().fill("camera");
  await page.getByRole("option").first().waitFor({ timeout: 5000 });
  await page.getByRole("combobox").first().press("Enter");
  await page.waitForURL(/q=camera/);
  assert((await page.locator("article").count()) >= 2, "resultados da busca");
});

await step("Catálogo filtra por categoria e ordena por preço", async () => {
  await page.goto(`${BASE}/produtos?categoria=tomadas&ordenar=menor-preco`);
  const prices = await page.locator("article p.font-extrabold").allTextContents();
  const nums = prices.map((p) => Number(p.replace(/[^\d,]/g, "").replace(",", ".")));
  assert(nums.length === 3, `3 tomadas (veio ${nums.length})`);
  assert(nums.every((n, i) => i === 0 || n >= nums[i - 1]), "ordem crescente");
  await shot("catalogo");
});

await step("Produto: adicionar ao carrinho com quantidade", async () => {
  await page.goto(`${BASE}/produtos/camera-wifi-interna-360`);
  await page.getByLabel("Aumentar quantidade").click();
  await page.getByRole("button", { name: "Adicionar ao carrinho" }).click();
  await page.getByRole("dialog", { name: "Carrinho de compras" }).waitFor();
  assert(await page.getByText("R$ 559,80").isVisible(), "subtotal 2 × 279,90");
  await shot("produto-carrinho");
  await page.getByLabel("Fechar carrinho").click();
});

await step("Carrinho: alterar quantidade e remover", async () => {
  await page.goto(`${BASE}/produtos/tomada-inteligente-wifi-10a`);
  await page.getByRole("button", { name: "Adicionar ao carrinho" }).click();
  await page.goto(`${BASE}/carrinho`);
  await page.getByText("Resumo do pedido").waitFor();
  const row = page.locator("li", { has: page.getByRole("link", { name: /Tomada Inteligente Wi-Fi/ }) }).last();
  await row.locator("button[aria-label='Aumentar quantidade']:visible").click();
  await page.getByText("R$ 709,60").first().waitFor({ timeout: 3000 }); // 559,80 + 2 × 74,90
  await row.locator("button[aria-label^='Remover']:visible").click();
  await page.locator("text=R$ 559,80 >> visible=true").first().waitFor();
});

await step("Checkout: validação de campos obrigatórios", async () => {
  await page.goto(`${BASE}/checkout`);
  await page.getByRole("button", { name: /Confirmar pedido/ }).click();
  await page.getByText("Informe o nome completo").waitFor();
  assert(await page.getByText("CPF inválido").isVisible(), "erro de CPF");
});

await step("Checkout: pedido registrado sem simular pagamento", async () => {
  await page.fill("#customerName", "Cliente Teste Silva");
  await page.fill("#customerEmail", "cliente.teste@example.com");
  await page.fill("#customerPhone", "11912345678");
  await page.fill("#customerDocument", "52998224725");
  await page.fill("#zipCode", "01310100");
  await page.waitForTimeout(1500);
  await page.fill("#street", "Avenida Paulista");
  await page.fill("#number", "1000");
  await page.fill("#district", "Bela Vista");
  await page.fill("#city", "São Paulo");
  await page.selectOption("#state", "SP");
  await page.getByText("Cartão de crédito").click();
  await page.check("#acceptTerms");
  await shot("checkout");
  await page.getByRole("button", { name: /Confirmar pedido/ }).click();
  await page.waitForURL(/\/pedido\/TN-/, { timeout: 15000 });
  orderCode = page.url().split("/").pop();
  assert(await page.getByText("aguardando pagamento").first().isVisible(), "status honesto");
  assert(await page.getByText("Nenhuma cobrança foi feita").isVisible(), "sem cobrança simulada");
  await shot("pedido");
});

await step("Carrinho é esvaziado após o pedido", async () => {
  await page.goto(`${BASE}/carrinho`);
  await page.getByText("Seu carrinho está vazio").waitFor();
});

await step("Acompanhar pedido exige código + e-mail corretos", async () => {
  await page.goto(`${BASE}/conta`);
  await page.fill("#code", orderCode);
  await page.fill("#email", "outro@example.com");
  await page.getByRole("button", { name: "Consultar" }).click();
  await page.getByText("Não encontramos um pedido").waitFor();
  await page.fill("#email", "cliente.teste@example.com");
  await page.getByRole("button", { name: "Consultar" }).click();
  await page.getByText("Avenida Paulista, 1000").waitFor();
});

await step("Formulário de contato salva a mensagem", async () => {
  await page.goto(`${BASE}/contato`);
  await page.fill("#c-name", "Cliente Teste");
  await page.fill("#c-email", "cliente.teste@example.com");
  await page.selectOption("#c-subject", "Dúvida sobre produto");
  await page.fill("#c-message", "Mensagem de teste automatizado.");
  await page.getByRole("button", { name: "Enviar mensagem" }).click();
  await page.getByText("Mensagem enviada!").waitFor();
});

await step("Painel bloqueado sem login (página e API)", async () => {
  const r = await page.goto(`${BASE}/admin/pedidos`);
  assert(page.url().includes("/admin/login"), "redireciona para login");
  assert(r.status() === 200, "login abre");
});

await step("Login inválido é recusado", async () => {
  await page.fill("#email", process.env.ADMIN_EMAIL);
  await page.fill("#password", "senha-errada-123");
  await page.getByRole("button", { name: "Entrar" }).click();
  await page.getByText("E-mail ou senha incorretos.").waitFor();
});

await step("Admin: login, ver pedido e confirmar pagamento com frete", async () => {
  await page.fill("#password", process.env.ADMIN_PASSWORD);
  await page.getByRole("button", { name: "Entrar" }).click();
  await page.waitForURL(/\/admin\/pedidos/);
  await page.getByRole("link", { name: orderCode }).click();
  await page.selectOption("#status", "PAID");
  await page.fill("#shipping", "25,00");
  await page.getByRole("button", { name: "Salvar alterações" }).click();
  await page.getByText("Pedido atualizado.").waitFor();
  await page.reload();
  assert(await page.getByText("R$ 584,80").first().isVisible(), "total com frete");
  await shot("admin-pedido");
});

await step("Admin: editar preço e estoque de um produto", async () => {
  await page.goto(`${BASE}/admin/produtos`);
  await page.getByRole("link", { name: "Editar" }).first().click();
  await page.locator('input[name="price"]').fill("abc");
  await page.getByRole("button", { name: "Salvar produto" }).click();
  await page.getByText("Informe um preço válido").waitFor();
  assert((await page.locator('input[name="name"]').inputValue()).length > 0, "campos mantidos após erro");
  await page.locator('input[name="price"]').fill("99,90");
  await page.locator('input[name="salePrice"]').fill("");
  await page.getByRole("button", { name: "Salvar produto" }).click();
  await page.waitForURL(/salvo=/);
  await page.goto(`${BASE}/admin`);
  await shot("admin-dashboard");
});

await step("Celular: menu, filtros e página de produto", async () => {
  const m = await browser.newContext({ ...pw.devices["iPhone 13"] });
  const p = await m.newPage();
  p.on("pageerror", (e) => errors.push(e.message));
  await p.goto(BASE);
  await p.getByLabel("Abrir menu").click();
  await p.getByRole("dialog", { name: "Menu" }).getByRole("link", { name: "Câmeras" }).click();
  await p.waitForURL(/categoria=cameras/);
  await p.getByRole("button", { name: /Filtros/ }).click();
  await p.getByRole("dialog", { name: "Filtros" }).waitFor();
  const overflow = await p.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
  assert(!overflow, "sem rolagem horizontal");
  if (SHOTS) {
    await p.goto(BASE); await p.screenshot({ path: `${SHOTS}/mobile-home.png`, fullPage: true });
    await p.goto(`${BASE}/produtos/fechadura-digital-biometrica`); await p.screenshot({ path: `${SHOTS}/mobile-produto.png`, fullPage: true });
  }
  await m.close();
});

await step("Sem erros de JavaScript no navegador", async () => assert(!errors.length, errors.join(" | ")));

await browser.close();
console.log(failures ? `\n${failures} falha(s).` : "\nTodos os fluxos passaram.");
process.exit(failures ? 1 : 0);
