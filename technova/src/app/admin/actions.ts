"use server";

import bcrypt from "bcryptjs";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { rateLimit, clientIp } from "@/lib/rate-limit";
import { SESSION_COOKIE, SESSION_TTL_SECONDS, signSession } from "@/lib/session";

// Hash usado quando o e-mail não existe, para o tempo de resposta não revelar contas válidas.
const DUMMY_HASH = "$2b$12$CJTLKrJaTQdo26I9U7gUuOtiB8VTmAwYgRtf7dyXii5rMSne1tJiq";

export type LoginState = { error?: string };

export async function loginAction(_: LoginState, form: FormData): Promise<LoginState> {
  const email = String(form.get("email") ?? "").trim().toLowerCase();
  const password = String(form.get("password") ?? "");
  const ip = clientIp(await headers());

  if (!rateLimit(`login-ip:${ip}`, 10, 15 * 60 * 1000).ok || !rateLimit(`login-email:${email}`, 5, 15 * 60 * 1000).ok) {
    return { error: "Muitas tentativas. Aguarde 15 minutos e tente novamente." };
  }
  if (!email || !password) return { error: "Informe e-mail e senha." };

  const user = await prisma.adminUser.findUnique({ where: { email } });
  const ok = await bcrypt.compare(password, user?.passwordHash ?? DUMMY_HASH);
  if (!user || !ok) return { error: "E-mail ou senha incorretos." };

  const token = await signSession({ sub: user.id, email: user.email, name: user.name });
  (await cookies()).set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  });
  await prisma.adminUser.update({ where: { id: user.id }, data: { lastLoginAt: new Date() } });

  const next = String(form.get("next") ?? "");
  redirect(next.startsWith("/admin") && !next.startsWith("//") ? next : "/admin");
}

export async function logoutAction() {
  (await cookies()).delete(SESSION_COOKIE);
  redirect("/admin/login");
}
