"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Zap } from "lucide-react";
import { QuantityStepper } from "../cart/QuantityStepper";
import { AddToCartButton } from "./AddToCartButton";
import { useCart, type CartItem } from "../cart/cart-store";

export function ProductPurchase({ product }: { product: Omit<CartItem, "quantity"> }) {
  const [qty, setQty] = useState(1);
  const add = useCart((s) => s.add);
  const close = useCart((s) => s.closeDrawer);
  const router = useRouter();
  const out = product.maxQuantity <= 0;

  return (
    <div className="space-y-3">
      {!out && (
        <div className="flex items-center gap-3">
          <span className="text-[13.5px] font-semibold text-navy-700">Quantidade</span>
          <QuantityStepper value={qty} max={product.maxQuantity} onChange={setQty} />
        </div>
      )}
      <div className="grid gap-3 sm:grid-cols-2">
        <AddToCartButton product={product} quantity={qty} />
        {!out && (
          <button
            type="button"
            onClick={() => {
              add(product, qty);
              close();
              router.push("/checkout");
            }}
            className="btn btn-lg btn-navy w-full"
          >
            <Zap className="h-4 w-4" /> Comprar agora
          </button>
        )}
      </div>
    </div>
  );
}
