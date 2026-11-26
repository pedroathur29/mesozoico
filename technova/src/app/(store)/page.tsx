import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Smartphone, Wifi, ShoppingBag } from "lucide-react";
import { prisma } from "@/lib/db";
import { getFeaturedProducts } from "@/lib/products";
import { imageSrc } from "@/lib/images";
import { categoryIcon } from "@/lib/categories";
import { siteConfig } from "@/lib/config";
import { Hero } from "@/components/home/Hero";
import { Benefits } from "@/components/home/Benefits";
import { ProductCard } from "@/components/product/ProductCard";

export const dynamic = "force-dynamic";

async function getHomeCategories() {
  const cats = await prisma.category.findMany({
    orderBy: { sortOrder: "asc" },
    include: {
      _count: { select: { products: { where: { active: true } } } },
      products: {
        where: { active: true },
        orderBy: [{ featured: "desc" }, { salesCount: "desc" }],
        take: 1,
        select: { images: { orderBy: { position: "asc" }, take: 1, select: { id: true, url: true } } },
      },
    },
  });
  return cats.map((c) => ({
    slug: c.slug,
    name: c.name,
    icon: c.icon,
    description: c.description,
    count: c._count.products,
    image: imageSrc(c.products[0]?.images[0]),
  }));
}

export default async function HomePage() {
  const [categories, featured, saleCount] = await Promise.all([
    getHomeCategories(),
    getFeaturedProducts(8),
    prisma.product.count({ where: { active: true, salePriceCents: { not: null } } }),
  ]);

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    name: siteConfig.legalName ?? siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/icon-512.png`,
    description: siteConfig.description,
    ...(siteConfig.contactEmail ? { email: siteConfig.contactEmail } : {}),
    ...(siteConfig.contactPhone ? { telephone: siteConfig.contactPhone } : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <Hero />

      {/* Categorias */}
      <section className="container pt-16 sm:pt-20" aria-labelledby="cat-title">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Categorias</p>
            <h2 id="cat-title" className="section-title mt-2">Tudo para sua casa conectada</h2>
          </div>
          <Link href="/produtos" className="hidden items-center gap-1.5 text-[14px] font-semibold text-brand-600 hover:text-navy-900 sm:flex">
            Ver catálogo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((c) => {
            const Icon = categoryIcon(c.icon);
            return (
              <li key={c.slug}>
                <Link
                  href={`/produtos?categoria=${c.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-surface transition-[box-shadow,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-white hover:shadow-lift"
                >
                  <span className="relative block aspect-[4/3] overflow-hidden">
                    <Image src={c.image} alt="" fill unoptimized={c.image.endsWith(".svg")} sizes="(max-width: 768px) 50vw, 16vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
                  </span>
                  <span className="flex items-center gap-2.5 p-3.5 sm:p-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-brand-600 ring-1 ring-navy-100 transition-colors group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.9} />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[14px] font-bold text-navy-900">{c.name}</span>
                      <span className="block text-[12px] text-navy-400">{c.count} {c.count === 1 ? "produto" : "produtos"}</span>
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Destaques */}
      <section className="container pt-16 sm:pt-24" aria-labelledby="feat-title">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Destaques</p>
            <h2 id="feat-title" className="section-title mt-2">Produtos em destaque</h2>
          </div>
          <Link href="/produtos?ordenar=mais-vendidos" className="flex items-center gap-1.5 text-[14px] font-semibold text-brand-600 hover:text-navy-900">
            Ver todos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        {featured.length ? (
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {featured.map((p, i) => <ProductCard key={p.id} product={p} priority={i < 4} />)}
          </div>
        ) : (
          <p className="mt-8 rounded-2xl border border-dashed border-navy-200 p-10 text-center text-navy-500">
            Nenhum produto em destaque no momento.
          </p>
        )}
      </section>

      {/* Como funciona */}
      <section className="container pt-16 sm:pt-24" aria-labelledby="how-title">
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-12 text-white sm:px-12 sm:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(700px_380px_at_100%_0%,rgba(1,83,252,.5),transparent_65%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:items-center">
            <div>
              <p className="eyebrow text-brand-300">Simples de começar</p>
              <h2 id="how-title" className="mt-2 text-[28px] font-extrabold leading-tight text-white sm:text-[34px]">
                Monte sua casa inteligente em três passos
              </h2>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-navy-200">
                Comece com um único dispositivo e expanda quando quiser. Tudo conversa pelo mesmo aplicativo.
              </p>
            </div>
            <ol className="grid gap-4 sm:grid-cols-3">
              {[
                { Icon: ShoppingBag, t: "Escolha", d: "Selecione câmeras, sensores ou tomadas conforme a necessidade de cada cômodo." },
                { Icon: Wifi, t: "Conecte", d: "Ligue o dispositivo e pareie pela rede Wi-Fi em poucos minutos." },
                { Icon: Smartphone, t: "Controle", d: "Acompanhe, programe rotinas e receba alertas pelo celular." },
              ].map(({ Icon, t, d }, i) => (
                <li key={t} className="rounded-2xl border border-white/10 bg-white/[.04] p-5 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600"><Icon className="h-5 w-5" /></span>
                    <span className="text-[34px] font-extrabold leading-none text-white/10">0{i + 1}</span>
                  </div>
                  <h3 className="mt-4 text-[17px] font-bold text-white">{t}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-navy-200">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="container pt-16 sm:pt-24" aria-labelledby="why-title">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Por que a TECHNOVA</p>
          <h2 id="why-title" className="section-title mt-2">Tecnologia com confiança</h2>
        </div>
        <div className="mt-10">
          <Benefits />
        </div>
      </section>

      {saleCount > 0 && (
        <section className="container pt-16 sm:pt-24">
          <Link
            href="/produtos?promocao=1"
            className="group flex flex-col items-start justify-between gap-6 rounded-3xl border border-brand-100 bg-gradient-to-r from-brand-50 via-white to-brand-50 px-6 py-8 transition-shadow hover:shadow-lift sm:flex-row sm:items-center sm:px-10"
          >
            <div>
              <p className="eyebrow">Ofertas</p>
              <p className="mt-1.5 text-[22px] font-extrabold text-navy-900 sm:text-[26px]">
                {saleCount} {saleCount === 1 ? "produto" : "produtos"} com preço especial
              </p>
            </div>
            <span className="btn btn-primary btn-lg">
              Ver ofertas <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </section>
      )}
    </>
  );
}
