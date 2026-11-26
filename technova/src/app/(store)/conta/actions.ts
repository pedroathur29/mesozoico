"use server";

import { headers } from "next/headers";
import { prisma } from "@/lib/db";
import { rateLimit, clientIp } from "@/lib/rate-limit";

export type TrackedOrder = {
  code: string;
  status: string;
  paymentMethod: string;
  createdAt: string;
  customerName: string;
  address: string;
  subtotalCents: number;
  shippingCents: number | null;
  totalCents: number;
  items: { name: string; quantity: number; unitPriceCents: number; imageUrl: string | null }[];
};

export type TrackState = { order?: TrackedOrder; error?: string };

export async function trackOrder(_: TrackState, form: FormData): Promise<TrackState> {
  const ip = clientIp(await headers());
  if (!rateLimit(`track:${ip}`, 20, 15 * 60 * 1000).ok) return { error: "Muitas consultas. Tente novamente em alguns minutos." };
  const code = String(form.get("code") ?? "").trim().toUpperCase();
  const email = String(form.get("email") ?? "").trim().toLowerCase();
  if (!code || !email) return { error: "Informe o número do pedido e o e-mail usado na compra." };
  const order = await prisma.order.findUnique({ where: { code }, include: { items: true } });
  // Mesma mensagem para pedido inexistente ou e-mail diferente: não revela quais pedidos existem.
  if (!order || order.customerEmail !== email) return { error: "Não encontramos um pedido com esses dados. Confira o número e o e-mail." };
  return {
    order: {
      code: order.code,
      status: order.status,
      paymentMethod: order.paymentMethod,
      createdAt: order.createdAt.toISOString(),
      customerName: order.customerName,
      address: `${order.street}, ${order.number}${order.complement ? ` – ${order.complement}` : ""} · ${order.district} · ${order.city}/${order.state}`,
      subtotalCents: order.subtotalCents,
      shippingCents: order.shippingCents,
      totalCents: order.totalCents,
      items: order.items.map((i) => ({ name: i.name, quantity: i.quantity, unitPriceCents: i.unitPriceCents, imageUrl: i.imageUrl })),
    },
  };
}
