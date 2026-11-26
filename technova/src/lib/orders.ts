import "server-only";
import { randomInt } from "node:crypto";
import { Prisma } from "@prisma/client";
import { prisma } from "./db";
import { effectivePrice } from "./products";
import { imageSrc } from "./images";
import type { CheckoutInput } from "./validators";

export class CheckoutError extends Error {}

const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
function newOrderCode() {
  let s = "";
  for (let i = 0; i < 8; i++) s += ALPHABET[randomInt(ALPHABET.length)];
  return `TN-${s.slice(0, 4)}-${s.slice(4)}`;
}

/**
 * Cria o pedido usando SEMPRE os preços e o estoque do banco (nunca os do navegador).
 * O estoque é baixado de forma atômica: se dois clientes comprarem a última unidade
 * ao mesmo tempo, apenas um pedido é concluído.
 */
export async function createOrder(input: CheckoutInput) {
  const merged = new Map<string, number>();
  for (const it of input.items) merged.set(it.productId, (merged.get(it.productId) ?? 0) + it.quantity);

  const products = await prisma.product.findMany({
    where: { id: { in: [...merged.keys()] }, active: true },
    include: { images: { orderBy: { position: "asc" }, take: 1, select: { id: true, url: true } } },
  });
  if (products.length !== merged.size) {
    throw new CheckoutError("Um ou mais produtos do carrinho não estão mais disponíveis. Revise seu carrinho.");
  }

  const lines = products.map((p) => {
    const quantity = merged.get(p.id)!;
    if (p.stock < quantity) {
      throw new CheckoutError(
        p.stock > 0
          ? `Restam apenas ${p.stock} unidade(s) de "${p.name}".`
          : `"${p.name}" está sem estoque no momento.`,
      );
    }
    return { product: p, quantity, unitPriceCents: effectivePrice(p) };
  });

  const subtotalCents = lines.reduce((s, l) => s + l.unitPriceCents * l.quantity, 0);

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      return await prisma.$transaction(async (tx) => {
        for (const l of lines) {
          const updated = await tx.product.updateMany({
            where: { id: l.product.id, stock: { gte: l.quantity } },
            data: { stock: { decrement: l.quantity }, salesCount: { increment: l.quantity } },
          });
          if (updated.count === 0) throw new CheckoutError(`"${l.product.name}" acabou de esgotar.`);
        }
        return tx.order.create({
          data: {
            code: newOrderCode(),
            paymentMethod: input.paymentMethod,
            customerName: input.customerName,
            customerEmail: input.customerEmail,
            customerPhone: input.customerPhone,
            customerDocument: input.customerDocument ?? null,
            zipCode: input.zipCode,
            street: input.street,
            number: input.number,
            complement: input.complement ?? null,
            district: input.district,
            city: input.city,
            state: input.state,
            notes: input.notes ?? null,
            subtotalCents,
            shippingCents: null,
            totalCents: subtotalCents,
            items: {
              create: lines.map((l) => ({
                productId: l.product.id,
                name: l.product.name,
                sku: l.product.sku,
                imageUrl: imageSrc(l.product.images[0]),
                unitPriceCents: l.unitPriceCents,
                quantity: l.quantity,
              })),
            },
          },
          select: { id: true, code: true, totalCents: true },
        });
      });
    } catch (e) {
      // Código de pedido repetido (muito raro): tenta de novo com outro código.
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") continue;
      throw e;
    }
  }
  throw new Error("Não foi possível gerar o código do pedido.");
}

/** Devolve ao estoque os itens de um pedido cancelado. */
export async function restockOrder(tx: Prisma.TransactionClient, orderId: string) {
  const items = await tx.orderItem.findMany({ where: { orderId, productId: { not: null } } });
  for (const it of items) {
    await tx.product.update({
      where: { id: it.productId! },
      data: { stock: { increment: it.quantity }, salesCount: { decrement: it.quantity } },
    });
  }
}
