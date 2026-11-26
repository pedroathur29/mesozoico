// Gera vitrine/src/lib/catalog.json a partir dos dados demonstrativos.
// Para usar os produtos reais do banco: DATABASE_URL=... node vitrine/scripts/export-catalog.mjs --db
import { writeFileSync } from "node:fs";
import { categories, products, img, DEMO_NOTE } from "../../prisma/demo-data.mjs";

const BASE = process.env.VITRINE_BASE_PATH ?? "/mesozoico/loja";
const fix = (u) => (u.startsWith("/") ? BASE + u : u);
let out;

if (process.argv.includes("--db")) {
  const { PrismaClient } = await import("@prisma/client");
  const prisma = new PrismaClient();
  const cats = await prisma.category.findMany({ orderBy: { sortOrder: "asc" } });
  const prods = await prisma.product.findMany({ where: { active: true }, include: { images: { orderBy: { position: "asc" } }, category: true } });
  out = {
    categories: cats.map(({ slug, name, icon, description }) => ({ slug, name, icon, description })),
    products: prods.map((p) => ({
      id: p.id, slug: p.slug, name: p.name, sku: p.sku, category: p.category.slug,
      shortDescription: p.shortDescription, description: p.description, howItWorks: p.howItWorks, specs: p.specs,
      priceCents: p.priceCents, salePriceCents: p.salePriceCents, stock: p.stock, featured: p.featured, isDemo: p.isDemo,
      salesCount: p.salesCount, createdAt: p.createdAt.toISOString(),
      images: p.images.filter((i) => i.url).map((i) => ({ src: fix(i.url), alt: i.alt || p.name })),
    })),
  };
  await prisma.$disconnect();
} else {
  out = {
    categories: categories.map(({ slug, name, icon, description }) => ({ slug, name, icon, description })),
    products: products.map((p, i) => ({
      id: p.slug, slug: p.slug, name: p.name, sku: p.sku, category: p.category,
      shortDescription: p.shortDescription, description: `${p.description}\n\n${DEMO_NOTE}`, howItWorks: p.howItWorks,
      specs: p.specs.map(([label, value]) => ({ label, value })),
      priceCents: p.priceCents, salePriceCents: p.salePriceCents, stock: p.stock, featured: p.featured, isDemo: true,
      salesCount: 0, createdAt: new Date(Date.UTC(2026, 10, 1 + i)).toISOString(),
      images: img(p.key, p.name).map((m) => ({ src: fix(m.url), alt: m.alt })),
    })),
  };
}
writeFileSync(new URL("../src/lib/catalog.json", import.meta.url), JSON.stringify(out, null, 1));
console.log(`catalog.json: ${out.products.length} produtos`);
