import type { Metadata } from "next";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { AdminNav } from "@/components/admin/AdminNav";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: { default: "Painel", template: "%s · Painel TECHNOVA" }, robots: { index: false, follow: false } };

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await requireAdmin();
  const [orders, reviews, messages] = await Promise.all([
    prisma.order.count({ where: { status: "PENDING_PAYMENT" } }),
    prisma.review.count({ where: { approved: false } }),
    prisma.contactMessage.count({ where: { read: false } }),
  ]);
  return (
    <div className="min-h-screen bg-surface">
      <AdminNav name={session.name || session.email} badges={{ orders, reviews, messages }} />
      <main className="lg:pl-[248px]">
        <div className="mx-auto max-w-[1200px] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</div>
      </main>
    </div>
  );
}
