"use client";
import { SearchBar } from "@/components/layout/SearchBar";
import { search, toCard } from "./catalog";

const local = (q: string) =>
  search(q).slice(0, 6).map((p) => { const c = toCard(p); return { slug: c.slug, name: c.name, image: c.image, finalPriceCents: c.finalPriceCents, category: c.category.name }; });

export function VSearch({ className }: { className?: string }) {
  return <SearchBar className={className} localSearch={local} />;
}
