"use client";

import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { useCart, type CartItem } from "../cart/cart-store";

export function AddToCartButton({
  product,
  quantity = 1,
  compact = false,
  className = "",
}: {
  product: Omit<CartItem, "quantity">;
  quantity?: number;
  compact?: boolean;
  className?: string;
}) {
  const add = useCart((s) => s.add);
  const [done, setDone] = useState(false);
  const out = product.maxQuantity <= 0;

  return (
    <button
      type="button"
      disabled={out}
      onClick={() => {
        add(product, quantity);
        setDone(true);
        setTimeout(() => setDone(false), 1600);
      }}
      className={`btn ${compact ? "h-10 w-full text-[13px]" : "btn-lg w-full"} ${out ? "bg-navy-100 text-navy-400" : "btn-primary"} ${className}`}
    >
      {out ? (
        "Indisponível"
      ) : done ? (
        <>
          <Check className="h-4 w-4" /> Adicionado
        </>
      ) : (
        <>
          <ShoppingCart className="h-4 w-4" /> {compact ? "Adicionar" : "Adicionar ao carrinho"}
        </>
      )}
    </button>
  );
}
