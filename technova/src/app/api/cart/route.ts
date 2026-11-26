import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { effectivePrice } from "@/lib/products";
import { imageSrc } from "@/lib/images";

const body = z.object({ ids: z.array(z.string().min(1).max(40)).max(50) });

/** Devolve preço e estoque atuais dos itens do carrinho (o navegador pode estar desatualizado). */
export async function POST(req: Request) {
  const parsed = body.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Requisição inválida" }, { status: 400 });
  const rows = await prisma.product.findMany({
    where: { id: { in: parsed.data.ids } },
    include: { images: { orderBy: { position: "asc" }, take: 1, select: { id: true, url: true } } },
  });
  const map = new Map(rows.map((r) => [r.id, r]));
  return NextResponse.json({
    items: parsed.data.ids.map((id) => {
      const p = map.get(id);
      return p
        ? {
            productId: id,
            name: p.name,
            image: imageSrc(p.images[0]),
            unitPriceCents: effectivePrice(p),
            maxQuantity: p.stock,
            available: p.active && p.stock > 0,
          }
        : { productId: id, name: "", image: "", unitPriceCents: 0, maxQuantity: 0, available: false };
    }),
  });
}
