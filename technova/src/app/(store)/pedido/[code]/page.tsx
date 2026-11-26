import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CircleCheck, Mail, MessageCircle, Clock } from "lucide-react";
import { prisma } from "@/lib/db";
import { formatPrice, formatDate } from "@/lib/format";
import { PAYMENT_METHOD_LABEL } from "@/lib/validators";
import { whatsappLink } from "@/lib/config";
import { OrderTimeline } from "@/components/checkout/OrderTimeline";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Pedido recebido", robots: { index: false } };

function maskEmail(email: string) {
  const [user, domain] = email.split("@");
  return `${user.slice(0, 2)}${"•".repeat(Math.max(1, user.length - 2))}@${domain}`;
}

export default async function OrderPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  if (!/^TN-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(code)) notFound();
  const order = await prisma.order.findUnique({ where: { code }, include: { items: true } });
  if (!order) notFound();
  const firstName = order.customerName.split(" ")[0];
  const wa = whatsappLink(`Olá! Acabei de fazer o pedido ${order.code} no site da TECHNOVA.`);

  return (
    <div className="container max-w-3xl pb-8 pt-10 sm:pt-14">
      <div className="text-center">
        <span className="mx-auto flex h-16 w-16 animate-fade-up items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CircleCheck className="h-9 w-9" />
        </span>
        <h1 className="mt-5 text-[28px] font-extrabold sm:text-[34px]">Pedido recebido, {firstName}!</h1>
        <p className="mt-2 text-[15px] text-navy-500">
          Número do pedido <strong className="font-bold text-navy-900">{order.code}</strong> · {formatDate(order.createdAt, true)}
        </p>
      </div>

      <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50 p-5 sm:p-6">
        <p className="flex items-center gap-2 text-[15px] font-bold text-navy-900"><Clock className="h-[18px] w-[18px] text-brand-600" /> Próximos passos</p>
        <p className="mt-2 text-[14px] leading-relaxed text-navy-700">
          Seu pedido foi registrado e está <strong>aguardando pagamento</strong>. Nenhuma cobrança foi feita. Nossa equipe vai entrar em contato pelo
          e-mail <strong>{maskEmail(order.customerEmail)}</strong> ou telefone informado com o valor do frete e as instruções para pagamento via{" "}
          <strong>{PAYMENT_METHOD_LABEL[order.paymentMethod] ?? order.paymentMethod}</strong>.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {wa && <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary"><MessageCircle className="h-4 w-4" /> Falar no WhatsApp</a>}
          <Link href="/contato" className="btn btn-sm btn-white border border-navy-100"><Mail className="h-4 w-4" /> Fale conosco</Link>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-navy-100 p-5 sm:p-6">
        <OrderTimeline status={order.status} />
      </div>

      <section className="mt-8 rounded-2xl border border-navy-100 p-5 sm:p-6" aria-label="Itens do pedido">
        <h2 className="text-[17px] font-bold">Itens</h2>
        <ul className="mt-4 divide-y divide-navy-100">
          {order.items.map((i) => (
            <li key={i.id} className="flex items-center gap-4 py-3">
              {i.imageUrl && <Image src={i.imageUrl} alt="" width={56} height={56} unoptimized className="h-14 w-14 rounded-lg border border-navy-100 object-cover" />}
              <span className="flex-1 text-[14px] text-navy-800">{i.name} <span className="text-navy-400">× {i.quantity}</span></span>
              <span className="text-[14px] font-semibold text-navy-900">{formatPrice(i.unitPriceCents * i.quantity)}</span>
            </li>
          ))}
        </ul>
        <dl className="mt-4 space-y-2 border-t border-navy-100 pt-4 text-[14px]">
          <div className="flex justify-between"><dt className="text-navy-600">Subtotal</dt><dd>{formatPrice(order.subtotalCents)}</dd></div>
          <div className="flex justify-between"><dt className="text-navy-600">Frete</dt><dd className="text-navy-500">{order.shippingCents == null ? "A calcular" : formatPrice(order.shippingCents)}</dd></div>
          <div className="flex justify-between text-[16px]"><dt className="font-bold">Total</dt><dd className="font-extrabold">{formatPrice(order.totalCents)}</dd></div>
        </dl>
      </section>

      <p className="mt-8 text-center text-[13.5px] text-navy-500">
        Guarde o número do pedido. Você pode acompanhá-lo em <Link href="/conta" className="font-semibold text-brand-600 hover:underline">Meus pedidos</Link>.
      </p>
      <div className="mt-6 text-center"><Link href="/produtos" className="btn btn-outline">Continuar comprando</Link></div>
    </div>
  );
}
