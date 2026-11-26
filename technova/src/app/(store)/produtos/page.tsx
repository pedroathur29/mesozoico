import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { ChevronRight, ChevronLeft, SearchX } from "lucide-react";
import { getCategories, searchCatalog, SORT_OPTIONS, type SortValue } from "@/lib/products";
import { ProductCard } from "@/components/product/ProductCard";
import { CatalogFilters, SortSelect } from "@/components/catalog/CatalogFilters";

export const dynamic = "force-dynamic";

type SP = Promise<Record<string, string | string[] | undefined>>;
const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

export async function generateMetadata({ searchParams }: { searchParams: SP }): Promise<Metadata> {
  const sp = await searchParams;
  const q = one(sp.q);
  const cat = one(sp.categoria)?.split(",")[0];
  const category = cat ? (await getCategories()).find((c) => c.slug === cat) : undefined;
  const title = q ? `Resultados para “${q}”` : category ? category.name : "Todos os produtos";
  return {
    title,
    description: category?.description || "Câmeras, sensores, fechaduras, tomadas e interruptores inteligentes para sua casa.",
    alternates: { canonical: category && !q ? `/produtos?categoria=${category.slug}` : "/produtos" },
    robots: q ? { index: false, follow: true } : undefined,
  };
}

export default async function CatalogPage({ searchParams }: { searchParams: SP }) {
  const sp = await searchParams;
  const q = one(sp.q)?.slice(0, 80);
  const cats = one(sp.categoria)?.split(",").filter(Boolean);
  const toCents = (v?: string) => (v && /^\d+$/.test(v) ? Number(v) * 100 : undefined);
  const sortRaw = one(sp.ordenar);
  const sort = SORT_OPTIONS.some((o) => o.value === sortRaw) ? (sortRaw as SortValue) : "relevancia";
  const page = Math.max(1, Number(one(sp.pagina)) || 1);

  const [categories, result] = await Promise.all([
    getCategories(),
    searchCatalog({
      q,
      categories: cats,
      minCents: toCents(one(sp.min)),
      maxCents: toCents(one(sp.max)),
      onSale: one(sp.promocao) === "1",
      inStock: one(sp.estoque) === "1",
      sort,
      page,
      perPage: 12,
    }),
  ]);

  const filterCats = categories.map((c) => ({ slug: c.slug, name: c.name, count: c._count.products }));
  const single = cats?.length === 1 ? categories.find((c) => c.slug === cats[0]) : undefined;
  const heading = q ? `Resultados para “${q}”` : one(sp.promocao) === "1" && !single ? "Ofertas" : single?.name ?? "Todos os produtos";

  const pageHref = (n: number) => {
    const p = new URLSearchParams();
    for (const [k, v] of Object.entries(sp)) if (typeof v === "string" && k !== "pagina") p.set(k, v);
    if (n > 1) p.set("pagina", String(n));
    return `/produtos${p.size ? `?${p}` : ""}`;
  };

  return (
    <div className="container pb-8 pt-6 sm:pt-8">
      <nav aria-label="Trilha" className="flex items-center gap-1.5 text-[13px] text-navy-400">
        <Link href="/" className="hover:text-brand-600">Início</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        {single ? (
          <>
            <Link href="/produtos" className="hover:text-brand-600">Produtos</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-navy-700">{single.name}</span>
          </>
        ) : (
          <span className="text-navy-700">Produtos</span>
        )}
      </nav>

      <header className="mt-4 border-b border-navy-100 pb-6">
        <h1 className="text-[28px] font-extrabold leading-tight sm:text-[34px]">{heading}</h1>
        {single?.description && !q && <p className="mt-2 max-w-2xl text-[15px] text-navy-500">{single.description}</p>}
      </header>

      <div className="mt-6 grid gap-8 lg:grid-cols-[250px_1fr]">
        <Suspense>
          <CatalogFilters mode="desktop" categories={filterCats} bounds={result.priceBounds} />
        </Suspense>

        <section aria-label="Lista de produtos">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Suspense>
                <CatalogFilters mode="mobile" categories={filterCats} bounds={result.priceBounds} />
              </Suspense>
              <p className="text-[13px] text-navy-500 sm:text-[14px]" aria-live="polite">
                {result.total} {result.total === 1 ? "produto" : "produtos"}
              </p>
            </div>
            <Suspense>
              <SortSelect options={SORT_OPTIONS} />
            </Suspense>
          </div>

          {result.items.length ? (
            <div className="grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-3">
              {result.items.map((p, i) => <ProductCard key={p.id} product={p} priority={i < 3} />)}
            </div>
          ) : (
            <div className="flex flex-col items-center rounded-2xl border border-dashed border-navy-200 px-6 py-16 text-center">
              <SearchX className="h-10 w-10 text-navy-300" />
              <p className="mt-4 text-[17px] font-bold text-navy-900">Nenhum produto encontrado</p>
              <p className="mt-1 max-w-sm text-[14px] text-navy-500">Tente outro termo de busca ou remova alguns filtros.</p>
              <Link href="/produtos" className="btn btn-outline mt-6">Ver todos os produtos</Link>
            </div>
          )}

          {result.pages > 1 && (
            <nav aria-label="Paginação" className="mt-10 flex items-center justify-center gap-1.5">
              {result.page > 1 && (
                <Link href={pageHref(result.page - 1)} className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy-200 hover:border-brand-600" aria-label="Página anterior">
                  <ChevronLeft className="h-4 w-4" />
                </Link>
              )}
              {Array.from({ length: result.pages }, (_, i) => i + 1).map((n) => (
                <Link
                  key={n}
                  href={pageHref(n)}
                  aria-current={n === result.page ? "page" : undefined}
                  className={`flex h-10 min-w-10 items-center justify-center rounded-lg px-3 text-[14px] font-semibold ${n === result.page ? "bg-navy-900 text-white" : "border border-navy-200 text-navy-700 hover:border-brand-600"}`}
                >
                  {n}
                </Link>
              ))}
              {result.page < result.pages && (
                <Link href={pageHref(result.page + 1)} className="flex h-10 w-10 items-center justify-center rounded-lg border border-navy-200 hover:border-brand-600" aria-label="Próxima página">
                  <ChevronRight className="h-4 w-4" />
                </Link>
              )}
            </nav>
          )}
        </section>
      </div>
    </div>
  );
}
