"use client";

import { useEffect, useRef, useState } from "react";
import { useCart } from "./cart-store";

/** Sincroniza o carrinho com preços/estoque atuais. Retorna avisos de itens alterados. */
export function useCartSync(enabled: boolean) {
  const items = useCart((s) => s.items);
  const sync = useCart((s) => s.sync);
  const [notices, setNotices] = useState<string[]>([]);
  const [synced, setSynced] = useState(false);
  const done = useRef(false);

  useEffect(() => {
    if (!enabled || done.current) return;
    done.current = true;
    if (!items.length) {
      setSynced(true);
      return;
    }
    fetch("/api/cart", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ids: items.map((i) => i.productId) }) })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!data) return;
        const msgs: string[] = [];
        for (const f of data.items as { productId: string; unitPriceCents: number; maxQuantity: number; available: boolean }[]) {
          const cur = items.find((i) => i.productId === f.productId);
          if (!cur) continue;
          if (!f.available) msgs.push(`"${cur.name}" ficou indisponível e foi removido do carrinho.`);
          else if (f.unitPriceCents !== cur.unitPriceCents) msgs.push(`O preço de "${cur.name}" foi atualizado.`);
          else if (cur.quantity > f.maxQuantity) msgs.push(`A quantidade de "${cur.name}" foi ajustada ao estoque disponível.`);
        }
        sync(data.items);
        setNotices(msgs);
      })
      .catch(() => {})
      .finally(() => setSynced(true));
  }, [enabled, items, sync]);

  return { notices, synced };
}
