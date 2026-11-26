"use client";

import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  image: string;
  unitPriceCents: number;
  quantity: number;
  /** Estoque conhecido no momento em que o item foi adicionado/atualizado. */
  maxQuantity: number;
};

type CartState = {
  items: CartItem[];
  drawerOpen: boolean;
  add: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  setQuantity: (productId: string, quantity: number) => void;
  remove: (productId: string) => void;
  clear: () => void;
  /** Atualiza preço/estoque com os dados atuais do servidor. */
  sync: (fresh: { productId: string; name: string; image: string; unitPriceCents: number; maxQuantity: number; available: boolean }[]) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
};

const MAX_PER_ITEM = 99;

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      drawerOpen: false,
      add: (item, quantity = 1) =>
        set((s) => {
          const limit = Math.min(MAX_PER_ITEM, item.maxQuantity);
          const existing = s.items.find((i) => i.productId === item.productId);
          if (existing) {
            return {
              drawerOpen: true,
              items: s.items.map((i) =>
                i.productId === item.productId
                  ? { ...i, ...item, quantity: Math.min(limit, i.quantity + quantity) }
                  : i,
              ),
            };
          }
          return { drawerOpen: true, items: [...s.items, { ...item, quantity: Math.min(limit, quantity) }] };
        }),
      setQuantity: (productId, quantity) =>
        set((s) => ({
          items: s.items.map((i) =>
            i.productId === productId
              ? { ...i, quantity: Math.max(1, Math.min(quantity, i.maxQuantity, MAX_PER_ITEM)) }
              : i,
          ),
        })),
      remove: (productId) => set((s) => ({ items: s.items.filter((i) => i.productId !== productId) })),
      clear: () => set({ items: [] }),
      sync: (fresh) =>
        set((s) => {
          const map = new Map(fresh.map((f) => [f.productId, f]));
          return {
            items: s.items
              .filter((i) => map.get(i.productId)?.available)
              .map((i) => {
                const f = map.get(i.productId)!;
                return {
                  ...i,
                  name: f.name,
                  image: f.image,
                  unitPriceCents: f.unitPriceCents,
                  maxQuantity: f.maxQuantity,
                  quantity: Math.max(1, Math.min(i.quantity, f.maxQuantity)),
                };
              }),
          };
        }),
      openDrawer: () => set({ drawerOpen: true }),
      closeDrawer: () => set({ drawerOpen: false }),
    }),
    {
      name: "technova-cart",
      version: 1,
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({ items: s.items }),
    },
  ),
);

export const cartCount = (items: CartItem[]) => items.reduce((s, i) => s + i.quantity, 0);
export const cartSubtotal = (items: CartItem[]) => items.reduce((s, i) => s + i.quantity * i.unitPriceCents, 0);

/** Evita divergência de hidratação: o carrinho só existe no navegador. */
export function useHydrated() {
  const [h, setH] = useState(false);
  useEffect(() => setH(true), []);
  return h;
}
