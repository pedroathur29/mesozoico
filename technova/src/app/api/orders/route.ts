import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/config";
import { checkoutSchema } from "@/lib/validators";
import { createOrder, CheckoutError } from "@/lib/orders";
import { rateLimit, clientIp } from "@/lib/rate-limit";

export async function POST(req: Request) {
  const ip = clientIp(req.headers);
  if (!rateLimit(`order:${ip}`, 10, 10 * 60 * 1000).ok) {
    return NextResponse.json({ error: "Muitas tentativas. Aguarde alguns minutos e tente novamente." }, { status: 429 });
  }

  const json = await req.json().catch(() => null);
  const parsed = checkoutSchema(siteConfig.requireCpf).safeParse(json);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      fieldErrors[key] ??= issue.message;
    }
    return NextResponse.json({ error: "Revise os campos destacados.", fieldErrors }, { status: 422 });
  }

  try {
    const order = await createOrder(parsed.data);
    // Quando um provedor de pagamento for integrado (lib/payments.ts), a cobrança
    // é criada aqui e o cliente é direcionado ao Pix/cartão. Hoje o pedido apenas
    // fica registrado como "Aguardando pagamento".
    return NextResponse.json({ code: order.code }, { status: 201 });
  } catch (e) {
    if (e instanceof CheckoutError) return NextResponse.json({ error: e.message }, { status: 409 });
    console.error("Erro ao criar pedido", e);
    return NextResponse.json({ error: "Não foi possível registrar o pedido agora. Tente novamente." }, { status: 500 });
  }
}
