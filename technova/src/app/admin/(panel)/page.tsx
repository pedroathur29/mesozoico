import Link from "next/link";
import { TrendingUp, Receipt, Clock, PackageX, ArrowRight } from "lucide-react";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { formatPrice, formatDate } from "@/lib/format";
import { PageHeader, Panel, StatusBadge } from "@/components/admin/ui";

export const metadata = { title: "Visão geral" };

const CONFIRMED = ["PAID", "PROCESSING", "SHIPPED", "DELIVERED"] as const;

export default async function Dashboard() {
  await requireAdmin();
  const since30 = new Date(Date.now() - 30 * 86_400_000);
  const since14 = new Date(new Date().setHours(0, 0, 0, 0) - 13 * 86_400_000);

  const [confirmed30, orders30, pending, lowStock, recent, last14, top, demoCount] = await Promise.all([
    prisma.order.aggregate({ where: { status: { in: [...CONFIRMED] }, createdAt: { gte: since30 } }, _sum: { totalCents: true }, _count: true }),
    prisma.order.count({ where: { createdAt: { gte: since30 }, status: { not: "CANCELLED" } } }),
    prisma.order.count({ where: { status: "PENDING_PAYMENT" } }),
    prisma.product.findMany({ where: { active: true, stock: { lte: 5 } }, orderBy: { stock: "asc" }, take: 6, select: { id: true, name: true, stock: true } }),
    prisma.order.findMany({ orderBy: { createdAt: "desc" }, take: 6, select: { id: true, code: true, customerName: true, totalCents: true, status: true, createdAt: true } }),
    prisma.order.findMany({ where: { createdAt: { gte: since14 }, status: { not: "CANCELLED" } }, select: { createdAt: true, totalCents: true } }),
    prisma.orderItem.groupBy({ by: ["name"], where: { order: { status: { not: "CANCELLED" } } }, _sum: { quantity: true }, orderBy: { _sum: { quantity: "desc" } }, take: 5 }),
    prisma.product.count({ where: { isDemo: true } }),
  ]);

  const revenue = confirmed30._sum.totalCents ?? 0;
  const avgTicket = confirmed30._count ? Math.round(revenue / confirmed30._count) : 0;

  const days = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(since14.getTime() + i * 86_400_000);
    return { key: d.toDateString(), label: d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" }), count: 0 };
  });
  for (const o of last14) {
    const day = days.find((d) => d.key === new Date(o.createdAt).toDateString());
    if (day) day.count++;
  }
  const maxDay = Math.max(1, ...days.map((d) => d.count));

  const kpis = [
    { label: "Faturamento confirmado (30 dias)", value: formatPrice(revenue), Icon: TrendingUp, hint: "Pedidos pagos, em separação, enviados ou entregues" },
    { label: "Pedidos (30 dias)", value: String(orders30), Icon: Receipt, hint: "Exceto cancelados" },
    { label: "Ticket médio", value: formatPrice(avgTicket), Icon: TrendingUp, hint: "Sobre pedidos confirmados" },
    { label: "Aguardando pagamento", value: String(pending), Icon: Clock, hint: "Entre em contato com o cliente", href: "/admin/pedidos?status=PENDING_PAYMENT" },
  ];

  return (
    <>
      <PageHeader title="Visão geral" description="Resumo das vendas e do estoque da loja." />

      {demoCount > 0 && (
        <p className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-[13.5px] text-amber-900">
          Há <strong>{demoCount} produto(s) demonstrativo(s)</strong> no catálogo. Substitua-os por produtos reais (ou desative-os) antes de abrir a loja.{" "}
          <Link href="/admin/produtos?demo=1" className="font-semibold underline">Ver produtos demonstrativos</Link>
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((k) => {
          const body = (
            <>
              <div className="flex items-center justify-between">
                <p className="text-[13px] font-medium text-navy-500">{k.label}</p>
                <k.Icon className="h-4 w-4 text-brand-600" />
              </div>
              <p className="mt-2 text-[26px] font-extrabold text-navy-900">{k.value}</p>
              <p className="mt-1 text-[12px] text-navy-400">{k.hint}</p>
            </>
          );
          return k.href ? (
            <Link key={k.label} href={k.href} className="rounded-2xl border border-navy-100 bg-white p-5 transition-shadow hover:shadow-card">{body}</Link>
          ) : (
            <div key={k.label} className="rounded-2xl border border-navy-100 bg-white p-5">{body}</div>
          );
        })}
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <Panel title="Pedidos nos últimos 14 dias">
          <div className="flex h-[200px] items-end gap-1.5 px-5 pb-4 pt-6">
            {days.map((d) => (
              <div key={d.key} className="flex flex-1 flex-col items-center gap-1.5">
                <span className="text-[11px] font-semibold text-navy-500">{d.count || ""}</span>
                <div className="w-full rounded-t-md bg-brand-600/90 transition-all" style={{ height: `${(d.count / maxDay) * 130}px`, minHeight: d.count ? 4 : 2, opacity: d.count ? 1 : 0.15 }} />
                <span className="text-[10px] text-navy-400">{d.label}</span>
              </div>
            ))}
          </div>
        </Panel>
        <Panel title="Mais vendidos">
          {top.length ? (
            <ol className="divide-y divide-navy-100">
              {top.map((t, i) => (
                <li key={t.name} className="flex items-center gap-3 px-5 py-3 text-[14px]">
                  <span className="w-5 text-[13px] font-bold text-navy-300">{i + 1}</span>
                  <span className="flex-1 truncate">{t.name}</span>
                  <span className="font-semibold">{t._sum.quantity} un.</span>
                </li>
              ))}
            </ol>
          ) : (
            <p className="px-5 py-8 text-center text-[14px] text-navy-400">Ainda não há vendas registradas.</p>
          )}
        </Panel>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.6fr_1fr]">
        <Panel title="Pedidos recentes" action={<Link href="/admin/pedidos" className="flex items-center gap-1 text-[13px] font-semibold text-brand-600">Ver todos <ArrowRight className="h-3.5 w-3.5" /></Link>}>
          {recent.length ? (
            <ul className="divide-y divide-navy-100">
              {recent.map((o) => (
                <li key={o.id}>
                  <Link href={`/admin/pedidos/${o.id}`} className="flex flex-wrap items-center gap-x-4 gap-y-1 px-5 py-3 text-[14px] hover:bg-surface">
                    <span className="font-semibold text-navy-900">{o.code}</span>
                    <span className="flex-1 truncate text-navy-600">{o.customerName}</span>
                    <StatusBadge status={o.status} />
                    <span className="w-24 text-right font-semibold">{formatPrice(o.totalCents)}</span>
                    <span className="hidden w-20 text-right text-[12.5px] text-navy-400 sm:block">{formatDate(o.createdAt)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-5 py-8 text-center text-[14px] text-navy-400">Nenhum pedido ainda.</p>
          )}
        </Panel>
        <Panel title="Estoque baixo" action={<Link href="/admin/produtos?estoque=baixo" className="text-[13px] font-semibold text-brand-600">Ver</Link>}>
          {lowStock.length ? (
            <ul className="divide-y divide-navy-100">
              {lowStock.map((p) => (
                <li key={p.id}>
                  <Link href={`/admin/produtos/${p.id}`} className="flex items-center gap-3 px-5 py-3 text-[14px] hover:bg-surface">
                    {p.stock === 0 && <PackageX className="h-4 w-4 text-red-500" />}
                    <span className="flex-1 truncate">{p.name}</span>
                    <span className={`font-semibold ${p.stock === 0 ? "text-red-600" : "text-amber-700"}`}>{p.stock} un.</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-5 py-8 text-center text-[14px] text-navy-400">Nenhum produto com estoque baixo.</p>
          )}
        </Panel>
      </div>
    </>
  );
}
