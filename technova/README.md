# TECHNOVA — Loja virtual

Loja de tecnologia para casas inteligentes: **Next.js 15 (App Router) + TypeScript + Tailwind CSS + PostgreSQL (Prisma)**.

> Os 16 produtos cadastrados pelo seed são **demonstrativos** (`isDemo = true`, imagens ilustrativas, preços de exemplo).
> Substitua-os pelos produtos reais no painel antes de abrir a loja. Nenhuma avaliação ou venda foi inventada.

## O que está pronto

| Área | Funcionalidades |
|---|---|
| Loja | Página inicial, catálogo com busca (ignora acentos), filtros por categoria, faixa de preço, ofertas, estoque, ordenação (mais vendidos, mais recentes, preço, nome) e paginação |
| Produto | Galeria, preço e preço promocional, estoque real, características técnicas, "como funciona", quantidade, comprar agora, relacionados, avaliações com moderação |
| Carrinho | Gaveta lateral e página completa, alterar quantidade, remover, sincroniza preço/estoque com o servidor |
| Checkout | Dados pessoais, CPF validado, CEP com preenchimento automático (ViaCEP), Pix/cartão. **Não simula pagamento**: o pedido fica "Aguardando pagamento" |
| Pós-compra | Página de confirmação, acompanhamento de pedido por código + e-mail |
| Institucional | Contato (mensagens salvas no painel), Sobre, Privacidade, Trocas e devoluções, Termos de uso, botão de WhatsApp |
| Painel `/admin` | Login protegido, visão geral de vendas, produtos (criar, editar, excluir, preços, imagens, estoque), pedidos (status, frete, cancelamento devolve estoque), avaliações, mensagens |
| SEO | Títulos e descrições por página, Open Graph, dados estruturados (Product, OnlineStore), `sitemap.xml`, `robots.txt`, manifest |
| Segurança | Sessão assinada (JWT httpOnly), middleware + verificação em cada ação, senhas com bcrypt, limite de tentativas, validação no servidor, preços sempre recalculados no servidor, cabeçalhos de segurança |

### Depende de serviços externos (estrutura pronta)
- **Pagamento online (Pix/cartão):** integrar um gateway (Mercado Pago, Pagar.me, Asaas, Stripe...) em `src/lib/payments.ts` + rota de webhook. Até lá, a equipe confirma o pagamento manualmente no painel.
- **Cálculo de frete:** hoje o frete é informado pela equipe no painel (o total é recalculado). Integração futura: Melhor Envio / Correios.
- **E-mails automáticos** (confirmação de pedido): integrar Resend, SendGrid ou similar.
- **Limite de tentativas** é em memória; com várias instâncias, troque por Upstash Redis (`src/lib/rate-limit.ts`).

## Rodar localmente

Requisitos: Node 20+ e PostgreSQL 14+.

```bash
cp .env.example .env      # preencha DATABASE_URL, DIRECT_URL, AUTH_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD
npm install
npx prisma migrate dev    # cria as tabelas
npm run db:seed           # categorias, produtos demonstrativos e o primeiro administrador
npm run dev               # http://localhost:3000  (painel: /admin)
```

Testes de ponta a ponta (com a loja rodando em `npm run build && npm start`):
```bash
BASE_URL=http://localhost:3000 ADMIN_EMAIL=... ADMIN_PASSWORD=... npm run test:e2e
```
⚠️ Os testes criam um pedido e uma mensagem e alteram o preço do primeiro produto da lista. Rode só em banco de desenvolvimento.

## Publicar na internet (recomendado: Vercel + Neon)

1. **Banco de dados** — crie um projeto PostgreSQL gratuito em [neon.tech](https://neon.tech) (ou Supabase). Copie:
   - a URL *pooled* → `DATABASE_URL`
   - a URL *direct* → `DIRECT_URL`
2. **Hospedagem** — em [vercel.com](https://vercel.com), *Add New → Project*, importe o repositório do GitHub e defina **Root Directory = `technova`**. A Vercel usa automaticamente o script `vercel-build` (gera o Prisma, aplica as migrações e compila).
3. **Variáveis de ambiente** (Settings → Environment Variables), conforme `.env.example`:
   - `DATABASE_URL`, `DIRECT_URL`
   - `AUTH_SECRET` → gere com `openssl rand -base64 48`
   - `NEXT_PUBLIC_SITE_URL` → `https://www.seudominio.com.br`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` → ex. `5511999999999`
   - dados da empresa (`NEXT_PUBLIC_COMPANY_*`, e-mail, telefone, redes sociais)
4. **Primeiro deploy**, depois crie o administrador e os dados iniciais apontando para o banco de produção (no seu computador):
   ```bash
   DATABASE_URL="<url de produção>" DIRECT_URL="<url direta>" ADMIN_EMAIL="voce@empresa.com" ADMIN_PASSWORD="<senha forte>" npm run db:seed
   ```
   (ou só o administrador: `npm run admin:create`). Não deixe `ADMIN_PASSWORD` cadastrada na Vercel.

### Conectar o domínio próprio
1. Registre o domínio (ex.: no [Registro.br](https://registro.br) para `.com.br`).
2. Na Vercel: *Project → Settings → Domains → Add* e digite `seudominio.com.br` e `www.seudominio.com.br`.
3. No painel do registro do domínio, crie os registros DNS que a Vercel mostrar (normalmente `A @ 76.76.21.21` e `CNAME www cname.vercel-dns.com`), ou troque os servidores DNS para os da Vercel.
4. O HTTPS é emitido automaticamente em alguns minutos. Atualize `NEXT_PUBLIC_SITE_URL` e faça um novo deploy.
5. Cadastre o site no [Google Search Console](https://search.google.com/search-console) e envie `https://seudominio.com.br/sitemap.xml`.

Alternativas: Railway, Render ou um servidor próprio (`npm run build && npm run db:deploy && npm start`, atrás de Nginx com HTTPS).

## Antes de abrir a loja (checklist)
- [ ] Substituir/desativar todos os produtos demonstrativos (o painel avisa quantos restam)
- [ ] Preencher dados reais da empresa (razão social, CNPJ, contatos) nas variáveis de ambiente
- [ ] Revisar as políticas (`src/app/(store)/politicas/[slug]/content.tsx`) com assessoria jurídica
- [ ] Definir `NEXT_PUBLIC_SHOW_DEMO_NOTICE="false"`
- [ ] Ativar `NEXT_PUBLIC_SHIPS_NATIONWIDE` somente com a logística configurada
- [ ] Integrar o gateway de pagamento (ou operar com confirmação manual)

## Estrutura
```
prisma/            schema, migrações e seed
public/brand/      logos oficiais (versões clara e escura) e ícones
public/products/   ilustrações dos produtos demonstrativos
scripts/           criação de administrador, gerador das ilustrações, teste e2e
src/app/(store)/   páginas públicas da loja
src/app/admin/     login e painel administrativo
src/app/api/       busca, carrinho, pedidos e imagens
src/components/    componentes reutilizáveis (layout, produto, carrinho, painel)
src/lib/           banco, autenticação, regras de pedido, validações, configuração
src/middleware.ts  proteção do /admin
```
