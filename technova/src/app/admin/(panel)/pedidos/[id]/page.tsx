import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { centsToInput, formatDate, formatPrice } from "@/lib/format";
import { PAYMENT_METHOD_LABEL, PAYMENT_STATUS_LABEL } from "@/lib/labels";
import { PageHeader, Panel, StatusBadge } from "@/components/admin/ui";
import { OrderStatusForm } from "@/components/admin/OrderStatusForm";

export const metadata = { title: "Pedido" };

const fmtCpf = (v: string) => v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
const fmtPhone = (v: string) => v.replace(/(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3");

export default async function OrderDetail({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  const o = await prisma.order.findUnique({ where: { id }, include: { items: true } });
  if (!o) notFound();
  const wa = `https://wa.me/55${o.customerPhone}?text=${encodeURIComponent(`Olá, ${o.customerName.split(" ")[0]}! Aqui é da TECHNOVA, sobre o seu pedido ${o.code}.`)}`;

  return (
    <>
      <Link href="/admin/pedidos" className="text-[13px] font-semibold text-navy-500 hover:text-brand-600">← Pedidos</Link>
      <PageHeader title={`Pedido ${o.code}`} description={`Realizado em ${formatDate(o.createdAt, true)}`} action={<StatusBadge status={o.status} />} />
      <div className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          <Panel title="Itens">
            <ul className="divide-y divide-navy-100">
              {o.items.map((i) => (
                <li key={i.id} className="flex items-center gap-4 px-5 py-3 text-[14px]">
                  {i.imageUrl && <Image src={i.imageUrl} alt="" width={48} height={48} unoptimized className="h-12 w-12 rounded-lg border border-navy-100 object-cover" />}
                  <div className="flex-1">
                    {i.productId ? <Link href={`/admin/produtos/${i.productId}`} className="font-medium hover:text-brand-600">{i.name}</Link> : <span className="font-medium">{i.name}</span>}
                    <p className="text-[12px] text-navy-400">{i.sku ?? ""} · {formatPrice(i.unitPriceCents)} × {i.quantity}</p>
                  </div>
                  <span className="font-semibold">{formatPrice(i.unitPriceCents * i.quantity)}</span>
                </li>
              ))}
            </ul>
            <dl className="space-y-1.5 border-t border-navy-100 px-5 py-4 text-[14px]">
              <div className="flex justify-between"><dt className="text-navy-500">Subtotal</dt><dd>{formatPrice(o.subtotalCents)}</dd></div>
              <div className="flex justify-between"><dt className="text-navy-500">Frete</dt><dd>{o.shippingCents == null ? "A definir" : formatPrice(o.shippingCents)}</dd></div>
              <div className="flex justify-between text-[16px]"><dt className="font-bold">Total</dt><dd className="font-extrabold">{formatPrice(o.totalCents)}</dd></div>
            </dl>
          </Panel>
          <Panel title="Cliente e entrega">
            <div className="grid gap-5 p-5 text-[14px] sm:grid-cols-2">
              <div>
                <p className="font-semibold">{o.customerName}</p>
                <p className="text-navy-600"><a href={`mailto:${o.customerEmail}`} className="hover:text-brand-600">{o.customerEmail}</a></p>
                <p className="text-navy-600">{fmtPhone(o.customerPhone)} · <a href={wa} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-600">WhatsApp</a></p>
                {o.customerDocument && <p className="text-navy-600">CPF {fmtCpf(o.customerDocument)}</p>}
              </div>
              <div className="text-navy-700">
                <p>{o.street}, {o.number}{o.complement && ` – ${o.complement}`}</p>
                <p>{o.district}</p>
                <p>{o.city}/{o.state} · CEP {o.zipCode.replace(/(\d{5})(\d{3})/, "$1-$2")}</p>
              </div>
              {o.notes && <p className="rounded-lg bg-surface p-3 text-navy-700 sm:col-span-2"><strong>Observações:</strong> {o.notes}</p>}
            </div>
          </Panel>
        </div>
        <div className="space-y-6">
          <Panel title="Pagamento">
            <dl className="space-y-2 p-5 text-[14px]">
              <div className="flex justify-between"><dt className="text-navy-500">Forma escolhida</dt><dd className="font-semibold">{PAYMENT_METHOD_LABEL[o.paymentMethod] ?? o.paymentMethod}</dd></div>
              <div className="flex justify-between"><dt className="text-navy-500">Situação</dt><dd className="font-semibold">{PAYMENT_STATUS_LABEL[o.paymentStatus]}</dd></div>
            </dl>
            <p className="border-t border-navy-100 px-5 py-3 text-[12.5px] text-navy-500">Sem gateway integrado: confirme o recebimento (Pix/cartão) e marque o pedido como “Pagamento confirmado”.</p>
          </Panel>
          <Panel title="Atualizar pedido">
            <OrderStatusForm id={o.id} status={o.status} shipping={centsToInput(o.shippingCents)} />
          </Panel>
        </div>
      </div>
    </>
  );
}
