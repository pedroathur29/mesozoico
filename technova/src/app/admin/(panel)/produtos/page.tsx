import Image from "next/image";
import Link from "next/link";
import { Plus, Search } from "lucide-react";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { imageSrc } from "@/lib/images";
import { formatPrice } from "@/lib/format";
import { PageHeader } from "@/components/admin/ui";
import { quickUpdateStock } from "./actions";

export const metadata = { title: "Produtos" };

type SP = Promise<{ q?: string; categoria?: string; estoque?: string; demo?: string; salvo?: string; excluido?: string }>;

export default async function AdminProducts({ searchParams }: { searchParams: SP }) {
  await requireAdmin();
  const sp = await searchParams;
  const where: Prisma.ProductWhereInput = {};
  if (sp.q) where.OR = [{ name: { contains: sp.q, mode: "insensitive" } }, { sku: { contains: sp.q, mode: "insensitive" } }];
  if (sp.categoria) where.categoryId = sp.categoria;
  if (sp.estoque === "baixo") where.stock = { lte: 5 };
  if (sp.demo === "1") where.isDemo = true;

  const [products, categories] = await Promise.all([
    prisma.product.findMany({
      where,
      orderBy: [{ active: "desc" }, { name: "asc" }],
      include: { category: { select: { name: true } }, images: { orderBy: { position: "asc" }, take: 1, select: { id: true, url: true } } },
    }),
    prisma.category.findMany({ orderBy: { sortOrder: "asc" } }),
  ]);

  return (
    <>
      <PageHeader title="Produtos" description={`${products.length} produto(s)`} action={<Link href="/admin/produtos/novo" className="btn btn-primary"><Plus className="h-4 w-4" /> Novo produto</Link>} />
      {sp.salvo && <p className="mb-4 rounded-lg bg-emerald-50 px-4 py-3 text-[14px] text-emerald-800">Produto “{sp.salvo}” salvo.</p>}
      {sp.excluido && <p className="mb-4 rounded-lg bg-navy-50 px-4 py-3 text-[14px] text-navy-800">Produto “{sp.excluido}” excluído.</p>}

      <form className="mb-4 flex flex-wrap gap-2">
        <div className="relative min-w-[200px] flex-1">
          <Search className="absolute left-3 top-3.5 h-4 w-4 text-navy-400" />
          <input name="q" defaultValue={sp.q} placeholder="Buscar por nome ou SKU" className="input pl-9" />
        </div>
        <select name="categoria" defaultValue={sp.categoria ?? ""} className="input w-auto">
          <option value="">Todas as categorias</option>
          {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>
        <select name="estoque" defaultValue={sp.estoque ?? ""} className="input w-auto">
          <option value="">Qualquer estoque</option>
          <option value="baixo">Estoque baixo (≤ 5)</option>
        </select>
        <button className="btn btn-navy">Filtrar</button>
      </form>

      <div className="overflow-x-auto rounded-2xl border border-navy-100 bg-white">
        <table className="w-full min-w-[760px] text-[14px]">
          <thead className="border-b border-navy-100 bg-surface text-left text-[12px] uppercase tracking-wider text-navy-400">
            <tr><th className="px-4 py-3">Produto</th><th className="px-4 py-3">Categoria</th><th className="px-4 py-3">Preço</th><th className="px-4 py-3">Estoque</th><th className="px-4 py-3">Status</th><th className="px-4 py-3" /></tr>
          </thead>
          <tbody className="divide-y divide-navy-100">
            {products.map((p) => (
              <tr key={p.id} className={p.active ? "" : "opacity-60"}>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Image src={imageSrc(p.images[0])} alt="" width={44} height={44} unoptimized className="h-11 w-11 rounded-lg border border-navy-100 object-cover" />
                    <div>
                      <Link href={`/admin/produtos/${p.id}`} className="font-semibold text-navy-900 hover:text-brand-600">{p.name}</Link>
                      <p className="text-[12px] text-navy-400">{p.sku ?? "sem SKU"}{p.isDemo && " · demonstrativo"}{p.featured && " · destaque"}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-navy-600">{p.category.name}</td>
                <td className="px-4 py-3">
                  {p.salePriceCents != null ? (<><span className="font-semibold">{formatPrice(p.salePriceCents)}</span> <span className="text-[12px] text-navy-400 line-through">{formatPrice(p.priceCents)}</span></>) : <span className="font-semibold">{formatPrice(p.priceCents)}</span>}
                </td>
                <td className="px-4 py-3">
                  <form action={quickUpdateStock.bind(null, p.id)} className="flex items-center gap-1.5">
                    <input name="stock" type="number" min={0} defaultValue={p.stock} aria-label={`Estoque de ${p.name}`} className={`input h-9 w-20 text-[14px] ${p.stock === 0 ? "text-red-600" : p.stock <= 5 ? "text-amber-700" : ""}`} />
                    <button className="btn btn-sm btn-ghost border border-navy-200 px-2.5">OK</button>
                  </form>
                </td>
                <td className="px-4 py-3">{p.active ? <span className="text-emerald-700">Ativo</span> : <span className="text-navy-400">Inativo</span>}</td>
                <td className="px-4 py-3 text-right"><Link href={`/admin/produtos/${p.id}`} className="font-semibold text-brand-600 hover:underline">Editar</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
        {!products.length && <p className="px-4 py-10 text-center text-navy-400">Nenhum produto encontrado.</p>}
      </div>
    </>
  );
}
