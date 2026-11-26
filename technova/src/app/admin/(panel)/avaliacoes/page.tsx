import Link from "next/link";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { formatDate } from "@/lib/format";
import { PageHeader } from "@/components/admin/ui";
import { Stars } from "@/components/product/Rating";

export const metadata = { title: "Avaliações" };

async function setApproved(id: string, approved: boolean) {
  "use server";
  await requireAdmin();
  await prisma.review.update({ where: { id }, data: { approved } });
  revalidatePath("/", "layout");
}
async function removeReview(id: string) {
  "use server";
  await requireAdmin();
  await prisma.review.delete({ where: { id } });
  revalidatePath("/", "layout");
}

export default async function Reviews() {
  await requireAdmin();
  const reviews = await prisma.review.findMany({ orderBy: [{ approved: "asc" }, { createdAt: "desc" }], include: { product: { select: { name: true, slug: true } } }, take: 200 });
  return (
    <>
      <PageHeader title="Avaliações" description="Avaliações enviadas pelos clientes só aparecem na loja depois de aprovadas." />
      <ul className="space-y-3">
        {reviews.map((r) => (
          <li key={r.id} className={`rounded-2xl border bg-white p-5 ${r.approved ? "border-navy-100" : "border-amber-200"}`}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <Stars value={r.rating} />
              <span className="font-semibold">{r.authorName}</span>
              <span className="text-[12.5px] text-navy-400">{formatDate(r.createdAt, true)}</span>
              <span className={`ml-auto rounded-full px-2.5 py-0.5 text-[12px] font-semibold ${r.approved ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-800"}`}>{r.approved ? "Publicada" : "Aguardando moderação"}</span>
            </div>
            <Link href={`/produtos/${r.product.slug}`} target="_blank" className="mt-1 block text-[13px] text-brand-600 hover:underline">{r.product.name}</Link>
            <p className="mt-2 whitespace-pre-line text-[14px] text-navy-700">{r.comment}</p>
            <div className="mt-3 flex gap-2">
              <form action={setApproved.bind(null, r.id, !r.approved)}><button className={`btn btn-sm ${r.approved ? "btn-ghost border border-navy-200" : "btn-primary"}`}>{r.approved ? "Ocultar" : "Aprovar"}</button></form>
              <form action={removeReview.bind(null, r.id)}><button className="btn btn-sm border border-red-200 text-red-600 hover:bg-red-50">Excluir</button></form>
            </div>
          </li>
        ))}
      </ul>
      {!reviews.length && <p className="rounded-2xl border border-dashed border-navy-200 bg-white p-10 text-center text-navy-400">Nenhuma avaliação recebida ainda.</p>}
    </>
  );
}
