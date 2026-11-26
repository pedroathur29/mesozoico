import Image from "next/image";
import Link from "next/link";
import type { ProductCardData } from "@/lib/products";
import { Price } from "./Price";
import { Rating } from "./Rating";
import { AddToCartButton } from "./AddToCartButton";

export function ProductCard({ product, priority = false }: { product: ProductCardData; priority?: boolean }) {
  const onSale = product.salePriceCents != null && product.salePriceCents < product.priceCents;
  const out = product.stock <= 0;
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white transition-[box-shadow,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift">
      <Link href={`/produtos/${product.slug}`} className="relative block aspect-square overflow-hidden bg-surface" tabIndex={-1} aria-hidden>
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          priority={priority}
          unoptimized={product.image.endsWith(".svg")}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute left-3 top-3 flex flex-col items-start gap-1.5">
          {onSale && <span className="rounded-md bg-brand-600 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-white">Oferta</span>}
          {out && <span className="rounded-md bg-navy-900 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-white">Esgotado</span>}
        </div>
        {product.isDemo && (
          <span className="absolute bottom-3 left-3 rounded-md bg-white/90 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-navy-400 ring-1 ring-navy-100">
            Demonstração
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-brand-600">{product.category.name}</p>
        <h3 className="mt-1.5 line-clamp-2 min-h-[2.6em] text-[14.5px] font-semibold leading-snug text-navy-900 sm:text-[15px]">
          <Link href={`/produtos/${product.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1.5 hidden line-clamp-2 text-[13px] leading-relaxed text-navy-500 sm:block">{product.shortDescription}</p>
        <div className="mt-2.5">
          <Rating average={product.rating.average} count={product.rating.count} />
        </div>
        <div className="mt-auto pt-4">
          <Price priceCents={product.priceCents} salePriceCents={product.salePriceCents} />
          <div className="relative z-10 mt-4">
            <AddToCartButton
              product={{
                productId: product.id,
                slug: product.slug,
                name: product.name,
                image: product.image,
                unitPriceCents: product.finalPriceCents,
                maxQuantity: product.stock,
              }}
              compact
            />
          </div>
        </div>
      </div>
    </article>
  );
}
