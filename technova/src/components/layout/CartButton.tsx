"use client";

import { ShoppingCart } from "lucide-react";
import { useCart, cartCount, useHydrated } from "../cart/cart-store";

export function CartButton() {
  const items = useCart((s) => s.items);
  const open = useCart((s) => s.openDrawer);
  const hydrated = useHydrated();
  const count = hydrated ? cartCount(items) : 0;

  return (
    <button
      onClick={open}
      className="relative flex h-11 items-center gap-2 rounded-lg px-2.5 text-navy-900 transition-colors hover:bg-navy-50"
      aria-label={`Abrir carrinho${count ? `, ${count} ${count === 1 ? "item" : "itens"}` : ""}`}
    >
      <span className="relative">
        <ShoppingCart className="h-[23px] w-[23px]" strokeWidth={1.8} />
        {count > 0 && (
          <span key={count} className="absolute -right-2 -top-2 flex h-[19px] min-w-[19px] animate-fade-in items-center justify-center rounded-full bg-brand-600 px-1 text-[11px] font-bold leading-none text-white ring-2 ring-white">
            {count > 99 ? "99+" : count}
          </span>
        )}
      </span>
      <span className="hidden text-[13px] font-semibold lg:block">Carrinho</span>
    </button>
  );
}
