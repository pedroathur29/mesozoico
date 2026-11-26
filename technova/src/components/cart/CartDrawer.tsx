"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { X, ShoppingBag, Trash2, ArrowRight } from "lucide-react";
import { useCart, cartSubtotal, cartCount, useHydrated } from "./cart-store";
import { QuantityStepper } from "./QuantityStepper";
import { formatPrice } from "@/lib/format";

export function CartDrawer() {
  const { items, drawerOpen, closeDrawer, setQuantity, remove } = useCart();
  const hydrated = useHydrated();
  const pathname = usePathname();

  useEffect(() => closeDrawer(), [pathname, closeDrawer]);
  useEffect(() => {
    if (!drawerOpen) return;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeDrawer();
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [drawerOpen, closeDrawer]);

  if (!hydrated || !drawerOpen) return null;
  const subtotal = cartSubtotal(items);
  const count = cartCount(items);

  return (
    <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label="Carrinho de compras">
      <div className="absolute inset-0 animate-fade-in bg-navy-950/50" onClick={closeDrawer} />
      <aside className="absolute inset-y-0 right-0 flex w-full max-w-[420px] animate-slide-in-right flex-col bg-white shadow-lift">
        <header className="flex h-16 items-center justify-between border-b border-navy-100 px-5">
          <h2 className="text-[17px] font-bold">
            Seu carrinho {count > 0 && <span className="font-medium text-navy-400">({count})</span>}
          </h2>
          <button onClick={closeDrawer} className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-navy-50" aria-label="Fechar carrinho">
            <X className="h-5 w-5" />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
              <ShoppingBag className="h-7 w-7" />
            </span>
            <p className="mt-4 text-[16px] font-semibold text-navy-900">Seu carrinho está vazio</p>
            <p className="mt-1 text-[14px] text-navy-500">Explore nossos produtos e comece a montar sua casa inteligente.</p>
            <Link href="/produtos" onClick={closeDrawer} className="btn btn-primary mt-6">Ver produtos</Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-navy-100 overflow-y-auto px-5">
              {items.map((i) => (
                <li key={i.productId} className="flex gap-3.5 py-4">
                  <Link href={`/produtos/${i.slug}`} className="shrink-0">
                    <Image src={i.image} alt={i.name} width={76} height={76} unoptimized className="h-[76px] w-[76px] rounded-xl border border-navy-100 object-cover" />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <Link href={`/produtos/${i.slug}`} className="line-clamp-2 text-[14px] font-semibold leading-snug text-navy-900 hover:text-brand-600">{i.name}</Link>
                    <p className="mt-0.5 text-[13px] text-navy-500">{formatPrice(i.unitPriceCents)} / un.</p>
                    <div className="mt-2 flex items-center justify-between">
                      <QuantityStepper value={i.quantity} max={i.maxQuantity} onChange={(q) => setQuantity(i.productId, q)} size="sm" />
                      <button onClick={() => remove(i.productId)} className="flex h-8 w-8 items-center justify-center rounded-lg text-navy-400 hover:bg-red-50 hover:text-red-600" aria-label={`Remover ${i.name}`}>
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <footer className="border-t border-navy-100 bg-surface px-5 pb-5 pt-4">
              <div className="flex items-baseline justify-between">
                <span className="text-[14px] text-navy-600">Subtotal</span>
                <span className="text-[20px] font-extrabold text-navy-900">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-[12px] text-navy-400">Frete calculado após a confirmação do pedido.</p>
              <Link href="/checkout" onClick={closeDrawer} className="btn btn-primary btn-lg mt-4 w-full">
                Finalizar pedido <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/carrinho" onClick={closeDrawer} className="btn btn-ghost mt-2 w-full">Ver carrinho completo</Link>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
