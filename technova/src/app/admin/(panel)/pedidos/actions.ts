"use server";

import { revalidatePath } from "next/cache";
import { OrderStatus, PaymentStatus } from "@prisma/client";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { restockOrder } from "@/lib/orders";
import { parsePriceToCents } from "@/lib/format";

export type OrderActionState = { ok?: string; error?: string };

export async function updateOrder(id: string, _: OrderActionState, form: FormData): Promise<OrderActionState> {
  await requireAdmin();
  const status = String(form.get("status")) as OrderStatus;
  if (!Object.values(OrderStatus).includes(status)) return { error: "Status inválido." };
  const shippingRaw = String(form.get("shipping") ?? "").trim();
  const shippingCents = shippingRaw ? parsePriceToCents(shippingRaw) : null;
  if (shippingRaw && shippingCents == null) return { error: "Valor de frete inválido." };

  const order = await prisma.order.findUnique({ where: { id } });
  if (!order) return { error: "Pedido não encontrado." };
  if (order.status === "CANCELLED" && status !== "CANCELLED") return { error: "Pedidos cancelados não podem ser reabertos. Crie um novo pedido." };

  let paymentStatus: PaymentStatus = order.paymentStatus;
  if (["PAID", "PROCESSING", "SHIPPED", "DELIVERED"].includes(status)) paymentStatus = "APPROVED";

  await prisma.$transaction(async (tx) => {
    if (status === "CANCELLED" && order.status !== "CANCELLED") await restockOrder(tx, id);
    await tx.order.update({
      where: { id },
      data: { status, paymentStatus, shippingCents, totalCents: order.subtotalCents - order.discountCents + (shippingCents ?? 0) },
    });
  });
  revalidatePath("/admin", "layout");
  revalidatePath("/", "layout");
  return { ok: "Pedido atualizado." };
}
