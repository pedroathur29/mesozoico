import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { Benefits } from "@/components/home/Benefits";
import { ProductCard } from "@/components/product/ProductCard";
import { categoryIcon } from "@/lib/categories";
import { categories, products, toCard } from "@v/lib/catalog";

export default function Home() {
  const featured = products.filter((p) => p.featured).map(toCard);
  return (
    <>
      <Hero />
      <section className="container pt-16 sm:pt-20">
        <p className="eyebrow">Categorias</p>
        <h2 className="section-title mt-2">Tudo para sua casa conectada</h2>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => {
            const Icon = categoryIcon(c.icon);
            const list = products.filter((p) => p.category === c.slug);
            const img = (list.find((p) => p.featured) ?? list[0])?.images[0]?.src;
            return (
              <li key={c.slug}>
                <Link href={`/produtos?categoria=${c.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-surface transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lift">
                  <span className="relative block aspect-[4/3] overflow-hidden">{img && <Image src={img} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-[1.05]" />}</span>
                  <span className="flex items-center gap-2.5 p-3.5 sm:p-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-brand-600 ring-1 ring-navy-100 group-hover:bg-brand-600 group-hover:text-white"><Icon className="h-[18px] w-[18px]" /></span>
                    <span className="min-w-0"><span className="block truncate text-[14px] font-bold text-navy-900">{c.name}</span><span className="block text-[12px] text-navy-400">{list.length} produtos</span></span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="container pt-16 sm:pt-24">
        <div className="flex items-end justify-between gap-4">
          <div><p className="eyebrow">Destaques</p><h2 className="section-title mt-2">Produtos em destaque</h2></div>
          <Link href="/produtos" className="flex items-center gap-1.5 text-[14px] font-semibold text-brand-600">Ver todos <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">{featured.map((p, i) => <ProductCard key={p.id} product={p} priority={i < 4} />)}</div>
      </section>
      <section className="container pt-16 sm:pt-24">
        <div className="mx-auto max-w-2xl text-center"><p className="eyebrow">Por que a TECHNOVA</p><h2 className="section-title mt-2">Tecnologia com confiança</h2></div>
        <div className="mt-10"><Benefits /></div>
      </section>
    </>
  );
}
