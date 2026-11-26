"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChevronRight, SearchX } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { CatalogFilters, SortSelect } from "@/components/catalog/CatalogFilters";
import { categories, products, finalPrice, search, toCard } from "@v/lib/catalog";

const SORT = [
  { value: "relevancia", label: "Relevância" }, { value: "mais-vendidos", label: "Mais vendidos" }, { value: "mais-recentes", label: "Mais recentes" },
  { value: "menor-preco", label: "Menor preço" }, { value: "maior-preco", label: "Maior preço" }, { value: "nome", label: "Nome (A–Z)" },
] as const;

export function CatalogClient() {
  const sp = useSearchParams();
  const q = sp.get("q") ?? "";
  const cats = sp.get("categoria")?.split(",").filter(Boolean) ?? [];
  const min = Number(sp.get("min")) * 100 || null, max = Number(sp.get("max")) * 100 || null;
  let list = q ? search(q) : [...products];
  if (cats.length) list = list.filter((p) => cats.includes(p.category));
  if (min) list = list.filter((p) => finalPrice(p) >= min);
  if (max) list = list.filter((p) => finalPrice(p) <= max);
  if (sp.get("promocao")) list = list.filter((p) => p.salePriceCents != null);
  if (sp.get("estoque")) list = list.filter((p) => p.stock > 0);
  const sort = sp.get("ordenar");
  list.sort((a, b) =>
    sort === "mais-vendidos" ? b.salesCount - a.salesCount :
    sort === "mais-recentes" ? +new Date(b.createdAt) - +new Date(a.createdAt) :
    sort === "menor-preco" ? finalPrice(a) - finalPrice(b) :
    sort === "maior-preco" ? finalPrice(b) - finalPrice(a) :
    sort === "nome" ? a.name.localeCompare(b.name, "pt-BR") : Number(b.featured) - Number(a.featured));
  const single = cats.length === 1 ? categories.find((c) => c.slug === cats[0]) : undefined;
  const filterCats = categories.map((c) => ({ slug: c.slug, name: c.name, count: products.filter((p) => p.category === c.slug).length }));
  const prices = products.map(finalPrice);
  const bounds = { min: Math.min(...prices), max: Math.max(...prices) };
  const heading = q ? `Resultados para “${q}”` : sp.get("promocao") && !single ? "Ofertas" : single?.name ?? "Todos os produtos";

  return (
    <div className="container pb-8 pt-6 sm:pt-8">
      <nav className="flex items-center gap-1.5 text-[13px] text-navy-400"><Link href="/" className="hover:text-brand-600">Início</Link><ChevronRight className="h-3.5 w-3.5" /><span className="text-navy-700">Produtos</span></nav>
      <header className="mt-4 border-b border-navy-100 pb-6">
        <h1 className="text-[28px] font-extrabold sm:text-[34px]">{heading}</h1>
        {single && !q && <p className="mt-2 max-w-2xl text-[15px] text-navy-500">{single.description}</p>}
      </header>
      <div className="mt-6 grid gap-8 lg:grid-cols-[250px_1fr]">
        <CatalogFilters mode="desktop" categories={filterCats} bounds={bounds} />
        <section>
          <div className="mb-5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <CatalogFilters mode="mobile" categories={filterCats} bounds={bounds} />
              <p className="text-[13px] text-navy-500 sm:text-[14px]">{list.length} produtos</p>
            </div>
            <SortSelect options={SORT} />
          </div>
          {list.length ? (
            <div className="grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-3">{list.map((p) => <ProductCard key={p.id} product={toCard(p)} />)}</div>
          ) : (
            <div className="flex flex-col items-center rounded-2xl border border-dashed border-navy-200 px-6 py-16 text-center">
              <SearchX className="h-10 w-10 text-navy-300" /><p className="mt-4 text-[17px] font-bold">Nenhum produto encontrado</p>
              <Link href="/produtos" className="btn btn-outline mt-6">Ver todos os produtos</Link>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
