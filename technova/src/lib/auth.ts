import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "./db";
import { SESSION_COOKIE, verifySession, type AdminSession } from "./session";

export async function getAdminSession(): Promise<AdminSession | null> {
  const store = await cookies();
  const session = await verifySession(store.get(SESSION_COOKIE)?.value);
  if (!session) return null;
  // Confirma que o administrador ainda existe (contas removidas perdem o acesso na hora).
  const user = await prisma.adminUser.findUnique({ where: { id: session.sub }, select: { id: true } });
  return user ? session : null;
}

/** Use no topo de toda página e Server Action do painel. */
export async function requireAdmin() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");
  return session;
}
