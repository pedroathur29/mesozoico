import Link from "next/link";
import { Search } from "lucide-react";
import { OrderStatus, Prisma } from "@prisma/client";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { formatDate, formatPrice } from "@/lib/format";
import { ORDER_STATUS_LABEL, PAYMENT_METHOD_LABEL } from "@/lib/labels";
import { PageHeader, StatusBadge } from "@/components/admin/ui";

export const metadata = { title: "Pedidos" };
const PER = 25;

export default async function Orders({ searchParams }: { searchParams: Promise<{ q?: string; status?: string; pagina?: string }> }) {
  await requireAdmin();
  const sp = await searchParams;
  const where: Prisma.OrderWhereInput = {};
  if (sp.status && sp.status in OrderStatus) where.status = sp.status as OrderStatus;
  if (sp.q) {
    const q = sp.q.trim();
    where.OR = [{ code: { contains: q, mode: "insensitive" } }, { customerEmail: { contains: q, mode: "insensitive" } }, { customerName: { contains: q, mode: "insensitive" } }];
  }
  const page = Math.max(1, Number(sp.pagina) || 1);
  const [orders, total] = await Promise.all([
    prisma.order.findMany({ where, orderBy: { createdAt: "desc" }, skip: (page - 1) * PER, take: PER, include: { _count: { select: { items: true } } } }),
    prisma.order.count({ where }),
  ]);
  const pages = Math.max(1, Math.ceil(total / PER));
  const href = (n: number) => `/admin/pedidos?${new URLSearchParams({ ...(sp.q ? { q: sp.q } : {}), ...(sp.status ? { status: sp.status } : {}), pagina: String(n) })}`;

  return (
    <>
      <PageHeader title="Pedidos" description={`${total} pedido(s)`} />
      <form className="mb-4 flex flex-wrap gap-2">
        <div className="relative min-w-[220px] flex-1">
          <Search className="absolute left-3 top-3.5 h-4 w-4 text-navy-400" />
          <input name="q" defaultValue={sp.q} placeholder="Código, nome ou e-mail" className="input pl-9" />
        </div>
        <select name="status" defaultValue={sp.status ?? ""} className="input w-auto">
          <option value="">Todos os status</option>
          {Object.entries(ORDER_STATUS_LABEL).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select>
        <button className="btn btn-navy">Filtrar</button>
      </form>
      <div className="overflow-x-auto rounded-2xl border border-navy-100 bg-white">
        <table className="w-full min-w-[760px] text-[14px]">
          <thead className="border-b border-navy-100 bg-surface text-left text-[12px] uppercase tracking-wider text-navy-400">
            <tr><th className="px-4 py-3">Pedido</th><th className="px-4 py-3">Cliente</th><th className="px-4 py-3">Data</th><th className="px-4 py-3">Pagamento</th><th className="px-4 py-3">Status</th><th className="px-4 py-3 text-right">Total</th></tr>
          </thead>
          <tbody className="divide-y divide-navy-100">
            {orders.map((o) => (
              <tr key={o.id} className="hover:bg-surface">
                <td className="px-4 py-3"><Link href={`/admin/pedidos/${o.id}`} className="font-semibold text-brand-600 hover:underline">{o.code}</Link><p className="text-[12px] text-navy-400">{o._count.items} item(ns)</p></td>
                <td className="px-4 py-3"><p className="font-medium">{o.customerName}</p><p className="text-[12px] text-navy-400">{o.customerEmail}</p></td>
                <td className="px-4 py-3 text-navy-600">{formatDate(o.createdAt, true)}</td>
                <td className="px-4 py-3 text-navy-600">{PAYMENT_METHOD_LABEL[o.paymentMethod] ?? o.paymentMethod}</td>
                <td className="px-4 py-3"><StatusBadge status={o.status} /></td>
                <td className="px-4 py-3 text-right font-semibold">{formatPrice(o.totalCents)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {!orders.length && <p className="px-4 py-10 text-center text-navy-400">Nenhum pedido encontrado.</p>}
      </div>
      {pages > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {page > 1 && <Link href={href(page - 1)} className="btn btn-sm btn-ghost border border-navy-200">Anterior</Link>}
          <span className="px-3 py-2 text-[13px] text-navy-500">Página {page} de {pages}</span>
          {page < pages && <Link href={href(page + 1)} className="btn btn-sm btn-ghost border border-navy-200">Próxima</Link>}
        </div>
      )}
    </>
  );
}
