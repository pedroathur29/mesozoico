import "server-only";
import { Prisma } from "@prisma/client";
import { prisma } from "./db";
import { imageSrc } from "./images";
import { normalizeText } from "./format";

export type ProductCardData = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  priceCents: number;
  salePriceCents: number | null;
  finalPriceCents: number;
  image: string;
  imageAlt: string;
  stock: number;
  isDemo: boolean;
  featured: boolean;
  salesCount: number;
  createdAt: Date;
  category: { slug: string; name: string };
  rating: { average: number; count: number };
};

const cardSelect = {
  id: true,
  slug: true,
  name: true,
  sku: true,
  shortDescription: true,
  priceCents: true,
  salePriceCents: true,
  stock: true,
  isDemo: true,
  featured: true,
  salesCount: true,
  createdAt: true,
  category: { select: { slug: true, name: true } },
  images: { select: { id: true, url: true, alt: true }, orderBy: { position: "asc" }, take: 1 },
} satisfies Prisma.ProductSelect;

type CardRow = Prisma.ProductGetPayload<{ select: typeof cardSelect }>;

export function effectivePrice(p: { priceCents: number; salePriceCents: number | null }) {
  return p.salePriceCents != null && p.salePriceCents < p.priceCents ? p.salePriceCents : p.priceCents;
}

async function ratingsFor(ids: string[]) {
  if (!ids.length) return new Map<string, { average: number; count: number }>();
  const rows = await prisma.review.groupBy({
    by: ["productId"],
    where: { productId: { in: ids }, approved: true },
    _avg: { rating: true },
    _count: { _all: true },
  });
  return new Map(rows.map((r) => [r.productId, { average: r._avg.rating ?? 0, count: r._count._all }]));
}

async function toCards(rows: CardRow[]): Promise<ProductCardData[]> {
  const ratings = await ratingsFor(rows.map((r) => r.id));
  return rows.map((p) => ({
    id: p.id,
    slug: p.slug,
    name: p.name,
    shortDescription: p.shortDescription,
    priceCents: p.priceCents,
    salePriceCents: p.salePriceCents,
    finalPriceCents: effectivePrice(p),
    image: imageSrc(p.images[0]),
    imageAlt: p.images[0]?.alt || p.name,
    stock: p.stock,
    isDemo: p.isDemo,
    featured: p.featured,
    salesCount: p.salesCount,
    createdAt: p.createdAt,
    category: p.category,
    rating: ratings.get(p.id) ?? { average: 0, count: 0 },
  }));
}

export async function getCategories() {
  return prisma.category.findMany({
    orderBy: { sortOrder: "asc" },
    include: { _count: { select: { products: { where: { active: true } } } } },
  });
}

export async function getFeaturedProducts(limit = 8) {
  const rows = await prisma.product.findMany({
    where: { active: true, featured: true },
    select: cardSelect,
    orderBy: [{ salesCount: "desc" }, { createdAt: "desc" }],
    take: limit,
  });
  return toCards(rows);
}

export const SORT_OPTIONS = [
  { value: "relevancia", label: "Relevância" },
  { value: "mais-vendidos", label: "Mais vendidos" },
  { value: "mais-recentes", label: "Mais recentes" },
  { value: "menor-preco", label: "Menor preço" },
  { value: "maior-preco", label: "Maior preço" },
  { value: "nome", label: "Nome (A–Z)" },
] as const;

export type SortValue = (typeof SORT_OPTIONS)[number]["value"];

export type CatalogQuery = {
  q?: string;
  categories?: string[];
  minCents?: number;
  maxCents?: number;
  onSale?: boolean;
  inStock?: boolean;
  sort?: SortValue;
  page?: number;
  perPage?: number;
};

/**
 * Busca do catálogo. A pesquisa ignora acentos e maiúsculas ("camera" encontra "Câmera").
 * O filtro textual e a ordenação por preço final são feitos em memória, o que é rápido
 * para catálogos de até alguns milhares de itens. Acima disso, migre para busca
 * full-text do PostgreSQL (extensão unaccent) ou um serviço como Meilisearch/Algolia.
 */
export async function searchCatalog(query: CatalogQuery) {
  const perPage = query.perPage ?? 12;
  const where: Prisma.ProductWhereInput = { active: true };
  if (query.categories?.length) where.category = { slug: { in: query.categories } };
  if (query.inStock) where.stock = { gt: 0 };

  const rows = await prisma.product.findMany({
    where,
    select: { ...cardSelect, specs: true, description: true },
  });

  const terms = query.q ? normalizeText(query.q).split(/\s+/).filter(Boolean) : [];
  const scored = rows
    .map((p) => {
      const price = effectivePrice(p);
      if (query.minCents != null && price < query.minCents) return null;
      if (query.maxCents != null && price > query.maxCents) return null;
      if (query.onSale && !(p.salePriceCents != null && p.salePriceCents < p.priceCents)) return null;
      let score = 0;
      if (terms.length) {
        const name = normalizeText(p.name);
        const hay = normalizeText(
          [p.name, p.shortDescription, p.category.name, p.sku ?? "", JSON.stringify(p.specs), p.description].join(" "),
        );
        for (const t of terms) {
          if (!hay.includes(t)) return null;
          score += name.includes(t) ? 3 : 1;
        }
      }
      return { p, price, score };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  const sort = query.sort ?? "relevancia";
  scored.sort((a, b) => {
    switch (sort) {
      case "mais-vendidos":
        return b.p.salesCount - a.p.salesCount || +b.p.createdAt - +a.p.createdAt;
      case "mais-recentes":
        return +b.p.createdAt - +a.p.createdAt;
      case "menor-preco":
        return a.price - b.price;
      case "maior-preco":
        return b.price - a.price;
      case "nome":
        return a.p.name.localeCompare(b.p.name, "pt-BR");
      default:
        return (
          b.score - a.score ||
          Number(b.p.featured) - Number(a.p.featured) ||
          b.p.salesCount - a.p.salesCount ||
          a.p.name.localeCompare(b.p.name, "pt-BR")
        );
    }
  });

  const total = scored.length;
  const pages = Math.max(1, Math.ceil(total / perPage));
  const page = Math.min(Math.max(1, query.page ?? 1), pages);
  const slice = scored.slice((page - 1) * perPage, page * perPage).map((s) => s.p);
  const priceBounds = rows.length
    ? { min: Math.min(...rows.map(effectivePrice)), max: Math.max(...rows.map(effectivePrice)) }
    : { min: 0, max: 0 };

  return { items: await toCards(slice), total, page, pages, priceBounds };
}

export async function getProductBySlug(slug: string) {
  const product = await prisma.product.findFirst({
    where: { slug, active: true },
    include: {
      category: true,
      images: { orderBy: { position: "asc" }, select: { id: true, url: true, alt: true } },
      reviews: { where: { approved: true }, orderBy: { createdAt: "desc" }, take: 30 },
    },
  });
  if (!product) return null;
  const count = product.reviews.length;
  const average = count ? product.reviews.reduce((s, r) => s + r.rating, 0) / count : 0;
  return {
    ...product,
    specs: parseSpecs(product.specs),
    finalPriceCents: effectivePrice(product),
    gallery: product.images.map((i) => ({ src: imageSrc(i), alt: i.alt || product.name })),
    rating: { average, count },
  };
}

export async function getRelatedProducts(productId: string, categoryId: string, limit = 4) {
  const rows = await prisma.product.findMany({
    where: { active: true, categoryId, id: { not: productId } },
    select: cardSelect,
    orderBy: [{ salesCount: "desc" }, { createdAt: "desc" }],
    take: limit,
  });
  if (rows.length < limit) {
    const more = await prisma.product.findMany({
      where: { active: true, id: { notIn: [productId, ...rows.map((r) => r.id)] } },
      select: cardSelect,
      orderBy: [{ featured: "desc" }, { salesCount: "desc" }],
      take: limit - rows.length,
    });
    rows.push(...more);
  }
  return toCards(rows);
}

export function parseSpecs(value: Prisma.JsonValue): { label: string; value: string }[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((s): s is { label: string; value: string } =>
      !!s && typeof s === "object" && "label" in s && "value" in s,
    )
    .map((s) => ({ label: String(s.label), value: String(s.value) }));
}
