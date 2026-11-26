// Popula o banco com categorias e PRODUTOS DEMONSTRATIVOS.
// Todos os produtos criados aqui têm isDemo = true e precisam ser substituídos
// por produtos reais (nome, fotos, preço, estoque e especificações do fornecedor)
// antes da abertura da loja. Nenhuma avaliação ou venda é criada.
//
// Uso: npm run db:seed   (pode rodar mais de uma vez; não duplica nada)

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

import { categories, products, img, DEMO_NOTE } from "./demo-data.mjs";

const prisma = new PrismaClient();

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
