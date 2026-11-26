"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ShoppingBag, Trash2, Info, ShieldCheck } from "lucide-react";
import { useCart, cartSubtotal, cartCount, useHydrated } from "@/components/cart/cart-store";
import { QuantityStepper } from "@/components/cart/QuantityStepper";
import { useCartSync } from "@/components/cart/useCartSync";
import { formatPrice } from "@/lib/format";

export function CartView() {
  const hydrated = useHydrated();
  const { items, setQuantity, remove, clear } = useCart();
  const { notices } = useCartSync(hydrated);

  if (!hydrated) return <div className="container min-h-[50vh] py-10" />;

  const subtotal = cartSubtotal(items);

  return (
    <div className="container pb-8 pt-8 sm:pt-10">
      <h1 className="text-[28px] font-extrabold sm:text-[34px]">Carrinho</h1>

      {notices.length > 0 && (
        <ul className="mt-5 space-y-2">
          {notices.map((n) => (
            <li key={n} className="flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-[13.5px] text-amber-900">
              <Info className="mt-0.5 h-4 w-4 shrink-0" /> {n}
            </li>
          ))}
        </ul>
      )}

      {items.length === 0 ? (
        <div className="mt-8 flex flex-col items-center rounded-3xl border border-dashed border-navy-200 px-6 py-20 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600"><ShoppingBag className="h-7 w-7" /></span>
          <p className="mt-4 text-[18px] font-bold text-navy-900">Seu carrinho está vazio</p>
          <p className="mt-1 text-[14.5px] text-navy-500">Que tal começar pelos produtos em destaque?</p>
          <Link href="/produtos" className="btn btn-primary btn-lg mt-6">Ver produtos</Link>
        </div>
      ) : (
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px] lg:items-start">
          <section aria-label="Itens do carrinho">
            <div className="hidden grid-cols-[1fr_140px_120px_40px] gap-4 border-b border-navy-100 pb-3 text-[12px] font-bold uppercase tracking-wider text-navy-400 md:grid">
              <span>Produto</span><span>Quantidade</span><span className="text-right">Total</span><span />
            </div>
            <ul className="divide-y divide-navy-100">
              {items.map((i) => (
                <li key={i.productId} className="grid grid-cols-[84px_1fr] gap-4 py-5 md:grid-cols-[1fr_140px_120px_40px] md:items-center">
                  <div className="contents md:flex md:items-center md:gap-4">
                    <Link href={`/produtos/${i.slug}`} className="shrink-0">
                      <Image src={i.image} alt={i.name} width={96} height={96} unoptimized className="h-[84px] w-[84px] rounded-xl border border-navy-100 object-cover md:h-24 md:w-24" />
                    </Link>
                    <div className="min-w-0">
                      <Link href={`/produtos/${i.slug}`} className="line-clamp-2 text-[15px] font-semibold text-navy-900 hover:text-brand-600">{i.name}</Link>
                      <p className="mt-1 text-[13.5px] text-navy-500">{formatPrice(i.unitPriceCents)} / unidade</p>
                      <div className="mt-3 flex items-center justify-between md:hidden">
                        <QuantityStepper value={i.quantity} max={i.maxQuantity} onChange={(q) => setQuantity(i.productId, q)} size="sm" />
                        <span className="text-[15px] font-bold text-navy-900">{formatPrice(i.unitPriceCents * i.quantity)}</span>
                        <button onClick={() => remove(i.productId)} className="flex h-9 w-9 items-center justify-center rounded-lg text-navy-400 hover:bg-red-50 hover:text-red-600" aria-label={`Remover ${i.name}`}>
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block"><QuantityStepper value={i.quantity} max={i.maxQuantity} onChange={(q) => setQuantity(i.productId, q)} size="sm" /></div>
                  <p className="hidden text-right text-[15px] font-bold text-navy-900 md:block">{formatPrice(i.unitPriceCents * i.quantity)}</p>
                  <button onClick={() => remove(i.productId)} className="hidden h-9 w-9 items-center justify-center rounded-lg text-navy-400 hover:bg-red-50 hover:text-red-600 md:flex" aria-label={`Remover ${i.name}`}>
                    <Trash2 className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex flex-col-reverse justify-between gap-3 border-t border-navy-100 pt-5 sm:flex-row">
              <Link href="/produtos" className="btn btn-ghost"><ArrowLeft className="h-4 w-4" /> Continuar comprando</Link>
              <button onClick={() => confirm("Remover todos os itens do carrinho?") && clear()} className="btn btn-ghost text-navy-500">Esvaziar carrinho</button>
            </div>
          </section>

          <aside className="rounded-2xl border border-navy-100 bg-surface p-6 lg:sticky lg:top-40">
            <h2 className="text-[18px] font-bold">Resumo do pedido</h2>
            <dl className="mt-5 space-y-3 text-[14.5px]">
              <div className="flex justify-between"><dt className="text-navy-600">Subtotal ({cartCount(items)} {cartCount(items) === 1 ? "item" : "itens"})</dt><dd className="font-semibold text-navy-900">{formatPrice(subtotal)}</dd></div>
              <div className="flex justify-between"><dt className="text-navy-600">Frete</dt><dd className="text-navy-500">A calcular</dd></div>
              <div className="flex items-baseline justify-between border-t border-navy-200 pt-4"><dt className="font-bold text-navy-900">Total</dt><dd className="text-[24px] font-extrabold text-navy-900">{formatPrice(subtotal)}</dd></div>
            </dl>
            <p className="mt-2 text-[12px] leading-relaxed text-navy-400">O valor do frete é informado pela nossa equipe após a confirmação do pedido.</p>
            <Link href="/checkout" className="btn btn-primary btn-lg mt-6 w-full">Finalizar pedido <ArrowRight className="h-4 w-4" /></Link>
            <p className="mt-4 flex items-center justify-center gap-2 text-[12.5px] text-navy-500"><ShieldCheck className="h-4 w-4 text-brand-600" /> Seus dados são protegidos</p>
          </aside>
        </div>
      )}
    </div>
  );
}
