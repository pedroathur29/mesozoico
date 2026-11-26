import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { formatDate } from "@/lib/format";
import { PageHeader } from "@/components/admin/ui";

export const metadata = { title: "Mensagens" };

async function toggleRead(id: string, read: boolean) {
  "use server";
  await requireAdmin();
  await prisma.contactMessage.update({ where: { id }, data: { read } });
  revalidatePath("/admin", "layout");
}
async function removeMessage(id: string) {
  "use server";
  await requireAdmin();
  await prisma.contactMessage.delete({ where: { id } });
  revalidatePath("/admin", "layout");
}

export default async function Messages() {
  await requireAdmin();
  const msgs = await prisma.contactMessage.findMany({ orderBy: [{ read: "asc" }, { createdAt: "desc" }], take: 200 });
  return (
    <>
      <PageHeader title="Mensagens" description="Contatos enviados pelo formulário do site." />
      <ul className="space-y-3">
        {msgs.map((m) => (
          <li key={m.id} className={`rounded-2xl border bg-white p-5 ${m.read ? "border-navy-100" : "border-brand-200"}`}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              {!m.read && <span className="h-2 w-2 rounded-full bg-brand-600" />}
              <span className="font-semibold">{m.subject}</span>
              <span className="ml-auto text-[12.5px] text-navy-400">{formatDate(m.createdAt, true)}</span>
            </div>
            <p className="mt-1 text-[13px] text-navy-500">
              {m.name} · <a href={`mailto:${m.email}?subject=${encodeURIComponent(`Re: ${m.subject}`)}`} className="text-brand-600 hover:underline">{m.email}</a>{m.phone && ` · ${m.phone}`}
            </p>
            <p className="mt-3 whitespace-pre-line text-[14px] text-navy-700">{m.message}</p>
            <div className="mt-3 flex gap-2">
              <form action={toggleRead.bind(null, m.id, !m.read)}><button className="btn btn-sm btn-ghost border border-navy-200">{m.read ? "Marcar como não lida" : "Marcar como lida"}</button></form>
              <form action={removeMessage.bind(null, m.id)}><button className="btn btn-sm border border-red-200 text-red-600 hover:bg-red-50">Excluir</button></form>
            </div>
          </li>
        ))}
      </ul>
      {!msgs.length && <p className="rounded-2xl border border-dashed border-navy-200 bg-white p-10 text-center text-navy-400">Nenhuma mensagem recebida.</p>}
    </>
  );
}
