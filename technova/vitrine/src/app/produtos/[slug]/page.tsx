import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, PackageCheck, PackageX, Info, MessageCircle } from "lucide-react";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductPurchase } from "@/components/product/ProductPurchase";
import { ProductCard } from "@/components/product/ProductCard";
import { Price } from "@/components/product/Price";
import { Benefits } from "@/components/home/Benefits";
import { whatsappLink } from "@/lib/config";
import { categories, products, finalPrice, toCard } from "@v/lib/catalog";

export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  return p ? { title: p.name, description: p.shortDescription } : {};
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();
  const cat = categories.find((c) => c.slug === p.category)!;
  const out = p.stock <= 0;
  const related = products.filter((x) => x.category === p.category && x.slug !== p.slug).concat(products.filter((x) => x.featured && x.category !== p.category)).slice(0, 4);
  const wa = whatsappLink(`Olá! Tenho uma dúvida sobre o produto "${p.name}".`);
  return (
    <div className="container pb-8 pt-6 sm:pt-8">
      <nav className="flex flex-wrap items-center gap-1.5 text-[13px] text-navy-400">
        <Link href="/" className="hover:text-brand-600">Início</Link><ChevronRight className="h-3.5 w-3.5" />
        <Link href={`/produtos?categoria=${cat.slug}`} className="hover:text-brand-600">{cat.name}</Link>
      </nav>
      <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        <ProductGallery images={p.images} name={p.name} />
        <div className="lg:pt-2">
          <p className="eyebrow">{cat.name}</p>
          <h1 className="mt-2 text-[26px] font-extrabold leading-[1.15] sm:text-[32px]">{p.name}</h1>
          <p className="mt-2 text-[12.5px] text-navy-400">Cód.: {p.sku} · Sem avaliações ainda</p>
          <p className="mt-4 text-[15.5px] leading-relaxed text-navy-600">{p.shortDescription}</p>
          {p.isDemo && (
            <p className="mt-5 flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-[13px] text-amber-900">
              <Info className="mt-0.5 h-4 w-4 shrink-0" /> Produto demonstrativo: nome, imagens, preço e especificações são exemplos e serão substituídos antes da abertura da loja.
            </p>
          )}
          <div className="mt-6 rounded-2xl border border-navy-100 p-5 sm:p-6">
            <Price priceCents={p.priceCents} salePriceCents={p.salePriceCents} size="lg" />
            <p className={`mt-3 flex items-center gap-2 text-[13.5px] font-semibold ${out ? "text-red-600" : "text-emerald-700"}`}>
              {out ? <PackageX className="h-4 w-4" /> : <PackageCheck className="h-4 w-4" />}{out ? "Sem estoque no momento" : "Disponível"}
            </p>
            <div className="mt-5">
              <ProductPurchase product={{ productId: p.id, slug: p.slug, name: p.name, image: p.images[0]?.src ?? "", unitPriceCents: finalPrice(p), maxQuantity: p.stock }} />
            </div>
            {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 text-[13.5px] font-semibold text-navy-700 hover:text-brand-600"><MessageCircle className="h-4 w-4" /> Tirar dúvidas pelo WhatsApp</a>}
          </div>
          <div className="mt-6"><Benefits variant="compact" /></div>
        </div>
      </div>
      <div className="mt-14 grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
        <div className="space-y-12">
          <section><h2 className="text-[22px] font-extrabold">Descrição</h2><div className="mt-4 space-y-4 text-[15px] leading-relaxed text-navy-700">{p.description.split(/\n{2,}/).map((t, i) => <p key={i}>{t}</p>)}</div></section>
          <section><h2 className="text-[22px] font-extrabold">Como funciona</h2><p className="mt-4 text-[15px] leading-relaxed text-navy-700">{p.howItWorks}</p></section>
        </div>
        <section>
          <h2 className="text-[22px] font-extrabold">Características técnicas</h2>
          <dl className="mt-4 overflow-hidden rounded-2xl border border-navy-100">
            {(p.specs as { label: string; value: string }[]).map((s, i) => (
              <div key={i} className={`grid grid-cols-[1fr_1.3fr] gap-4 px-4 py-3 text-[14px] ${i % 2 ? "bg-white" : "bg-surface"}`}><dt className="font-semibold text-navy-900">{s.label}</dt><dd className="text-navy-600">{s.value}</dd></div>
            ))}
          </dl>
        </section>
      </div>
      <section className="mt-16 border-t border-navy-100 pt-12">
        <h2 className="section-title">Produtos relacionados</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">{related.map((r) => <ProductCard key={r.id} product={toCard(r)} />)}</div>
      </section>
    </div>
  );
}
