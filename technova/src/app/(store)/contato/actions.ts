"use server";

import { headers } from "next/headers";
import { prisma } from "@/lib/db";
import { contactSchema } from "@/lib/validators";
import { rateLimit, clientIp } from "@/lib/rate-limit";

export type ContactState = { ok?: boolean; error?: string; errors?: Record<string, string> };

export async function sendContact(_: ContactState, form: FormData): Promise<ContactState> {
  if (form.get("website")) return { ok: true }; // campo armadilha contra robôs
  const ip = clientIp(await headers());
  if (!rateLimit(`contact:${ip}`, 5, 30 * 60 * 1000).ok) return { error: "Muitas mensagens enviadas. Tente novamente mais tarde." };
  const parsed = contactSchema.safeParse(Object.fromEntries(form));
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const i of parsed.error.issues) errors[String(i.path[0])] ??= i.message;
    return { errors };
  }
  await prisma.contactMessage.create({ data: parsed.data });
  return { ok: true };
}
