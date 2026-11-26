import data from "./catalog.json";
import type { ProductCardData } from "@/lib/products";
import { normalizeText } from "@/lib/format";

export type VProduct = (typeof data.products)[number];
export const categories = data.categories;
export const products = data.products as VProduct[];
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const finalPrice = (p: { priceCents: number; salePriceCents: number | null }) =>
  p.salePriceCents != null && p.salePriceCents < p.priceCents ? p.salePriceCents : p.priceCents;

export function toCard(p: VProduct): ProductCardData {
  const cat = categories.find((c) => c.slug === p.category)!;
  return {
    id: p.id, slug: p.slug, name: p.name, shortDescription: p.shortDescription,
    priceCents: p.priceCents, salePriceCents: p.salePriceCents, finalPriceCents: finalPrice(p),
    image: p.images[0]?.src ?? `${BASE_PATH}/products/placeholder.svg`, imageAlt: p.images[0]?.alt ?? p.name,
    stock: p.stock, isDemo: p.isDemo, featured: p.featured, salesCount: p.salesCount, createdAt: new Date(p.createdAt),
    category: { slug: cat.slug, name: cat.name }, rating: { average: 0, count: 0 },
  };
}

export function search(q: string) {
  const terms = normalizeText(q).split(/\s+/).filter(Boolean);
  return products.filter((p) => {
    const hay = normalizeText([p.name, p.shortDescription, p.category, p.sku, JSON.stringify(p.specs)].join(" "));
    return terms.every((t) => hay.includes(t));
  });
}
