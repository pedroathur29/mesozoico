import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, MessageCircle, PackageCheck, PackageX, Info } from "lucide-react";
import { getProductBySlug, getRelatedProducts } from "@/lib/products";
import { siteConfig, whatsappLink } from "@/lib/config";
import { formatDate } from "@/lib/format";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductPurchase } from "@/components/product/ProductPurchase";
import { ProductCard } from "@/components/product/ProductCard";
import { Price } from "@/components/product/Price";
import { Rating, Stars } from "@/components/product/Rating";
import { ReviewForm } from "@/components/product/ReviewForm";
import { Benefits } from "@/components/home/Benefits";

export const dynamic = "force-dynamic";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const p = await getProductBySlug(slug);
  if (!p) return { title: "Produto não encontrado" };
  const image = p.gallery[0]?.src;
  return {
    title: p.name,
    description: p.shortDescription || p.description.slice(0, 160),
    alternates: { canonical: `/produtos/${p.slug}` },
    openGraph: { title: p.name, description: p.shortDescription, images: image && !image.endsWith(".svg") ? [image] : undefined },
  };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();
  const related = await getRelatedProducts(product.id, product.categoryId);
  const wa = whatsappLink(`Olá! Tenho uma dúvida sobre o produto "${product.name}".`);
  const out = product.stock <= 0;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription || product.description,
    sku: product.sku ?? undefined,
    category: product.category.name,
    image: product.gallery.map((g) => (g.src.startsWith("http") ? g.src : `${siteConfig.url}${g.src}`)),
    brand: { "@type": "Brand", name: "TECHNOVA" },
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/produtos/${product.slug}`,
      priceCurrency: "BRL",
      price: (product.finalPriceCents / 100).toFixed(2),
      availability: out ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
    ...(product.rating.count > 0
      ? { aggregateRating: { "@type": "AggregateRating", ratingValue: product.rating.average.toFixed(1), reviewCount: product.rating.count } }
      : {}),
  };

  return (
    <div className="container pb-8 pt-6 sm:pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <nav aria-label="Trilha" className="flex flex-wrap items-center gap-1.5 text-[13px] text-navy-400">
        <Link href="/" className="hover:text-brand-600">Início</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href="/produtos" className="hover:text-brand-600">Produtos</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href={`/produtos?categoria=${product.category.slug}`} className="hover:text-brand-600">{product.category.name}</Link>
        <ChevronRight className="hidden h-3.5 w-3.5 sm:block" />
        <span className="hidden max-w-[280px] truncate text-navy-700 sm:block">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <ProductGallery images={product.gallery} name={product.name} />

        <div className="lg:pt-2">
          <Link href={`/produtos?categoria=${product.category.slug}`} className="eyebrow hover:underline">{product.category.name}</Link>
          <h1 className="mt-2 text-[26px] font-extrabold leading-[1.15] sm:text-[32px]">{product.name}</h1>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href="#avaliacoes"><Rating average={product.rating.average} count={product.rating.count} size="md" /></a>
            {product.sku && <span className="text-[12.5px] text-navy-400">Cód.: {product.sku}</span>}
          </div>
          <p className="mt-4 text-[15.5px] leading-relaxed text-navy-600">{product.shortDescription}</p>

          {product.isDemo && (
            <p className="mt-5 flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-[13px] leading-relaxed text-amber-900">
              <Info className="mt-0.5 h-4 w-4 shrink-0" />
              Produto demonstrativo: nome, imagens, preço e especificações são exemplos e serão substituídos antes da abertura da loja.
            </p>
          )}

          <div className="mt-6 rounded-2xl border border-navy-100 p-5 sm:p-6">
            <Price priceCents={product.priceCents} salePriceCents={product.salePriceCents} size="lg" />
            <p className={`mt-3 flex items-center gap-2 text-[13.5px] font-semibold ${out ? "text-red-600" : "text-emerald-700"}`}>
              {out ? <PackageX className="h-4 w-4" /> : <PackageCheck className="h-4 w-4" />}
              {out ? "Sem estoque no momento" : product.stock <= 5 ? `Últimas ${product.stock} unidades` : "Em estoque"}
            </p>
            <div className="mt-5">
              <ProductPurchase
                product={{
                  productId: product.id,
                  slug: product.slug,
                  name: product.name,
                  image: product.gallery[0]?.src ?? "/products/placeholder.svg",
                  unitPriceCents: product.finalPriceCents,
                  maxQuantity: product.stock,
                }}
              />
            </div>
            {wa && (
              <a href={wa} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 text-[13.5px] font-semibold text-navy-700 hover:text-brand-600">
                <MessageCircle className="h-4 w-4" /> Tirar dúvidas pelo WhatsApp
              </a>
            )}
          </div>

          <div className="mt-6">
            <Benefits variant="compact" />
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
        <div className="space-y-12">
          <section aria-labelledby="desc">
            <h2 id="desc" className="text-[22px] font-extrabold">Descrição</h2>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-navy-700">
              {product.description.split(/\n{2,}/).map((para, i) => <p key={i} className="whitespace-pre-line">{para}</p>)}
            </div>
          </section>
          {product.howItWorks && (
            <section aria-labelledby="how">
              <h2 id="how" className="text-[22px] font-extrabold">Como funciona</h2>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-navy-700">
                {product.howItWorks.split(/\n{2,}/).map((para, i) => <p key={i} className="whitespace-pre-line">{para}</p>)}
              </div>
            </section>
          )}
        </div>
        {product.specs.length > 0 && (
          <section aria-labelledby="specs">
            <h2 id="specs" className="text-[22px] font-extrabold">Características técnicas</h2>
            <dl className="mt-4 overflow-hidden rounded-2xl border border-navy-100">
              {product.specs.map((s, i) => (
                <div key={i} className={`grid grid-cols-[1fr_1.3fr] gap-4 px-4 py-3 text-[14px] ${i % 2 ? "bg-white" : "bg-surface"}`}>
                  <dt className="font-semibold text-navy-900">{s.label}</dt>
                  <dd className="text-navy-600">{s.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}
      </div>

      <section id="avaliacoes" aria-labelledby="rev" className="mt-16 scroll-mt-28 border-t border-navy-100 pt-12">
        <h2 id="rev" className="text-[22px] font-extrabold">Avaliações de clientes</h2>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          <div>
            {product.reviews.length ? (
              <>
                <div className="mb-6 flex items-center gap-4">
                  <span className="text-[42px] font-extrabold leading-none text-navy-900">{product.rating.average.toFixed(1).replace(".", ",")}</span>
                  <div>
                    <Stars value={product.rating.average} className="h-5 w-5" />
                    <p className="mt-1 text-[13px] text-navy-500">{product.rating.count} {product.rating.count === 1 ? "avaliação" : "avaliações"}</p>
                  </div>
                </div>
                <ul className="divide-y divide-navy-100">
                  {product.reviews.map((r) => (
                    <li key={r.id} className="py-5">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[14.5px] font-bold text-navy-900">{r.authorName}</p>
                        <span className="text-[12.5px] text-navy-400">{formatDate(r.createdAt)}</span>
                      </div>
                      <Stars value={r.rating} className="mt-1 h-4 w-4" />
                      <p className="mt-2 whitespace-pre-line text-[14.5px] leading-relaxed text-navy-700">{r.comment}</p>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="rounded-2xl border border-dashed border-navy-200 p-8 text-center text-[14.5px] text-navy-500">
                Este produto ainda não tem avaliações. Comprou? Conte o que achou.
              </p>
            )}
          </div>
          <ReviewForm productId={product.id} />
        </div>
      </section>

      {related.length > 0 && (
        <section aria-labelledby="rel" className="mt-16 border-t border-navy-100 pt-12">
          <h2 id="rel" className="section-title">Produtos relacionados</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}
