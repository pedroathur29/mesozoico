"use server";

import { headers } from "next/headers";
import { prisma } from "@/lib/db";
import { reviewSchema } from "@/lib/validators";
import { rateLimit, clientIp } from "@/lib/rate-limit";

export type ReviewState = { ok?: boolean; message?: string; errors?: Partial<Record<"rating" | "authorName" | "comment", string>> };

export async function submitReview(_: ReviewState, form: FormData): Promise<ReviewState> {
  if (form.get("website")) return { ok: true }; // robô preencheu o campo armadilha
  const ip = clientIp(await headers());
  if (!rateLimit(`review:${ip}`, 5, 60 * 60 * 1000).ok) {
    return { message: "Muitas avaliações enviadas. Tente novamente mais tarde." };
  }
  const parsed = reviewSchema.safeParse(Object.fromEntries(form));
  if (!parsed.success) {
    const errors: ReviewState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const k = issue.path[0] as keyof NonNullable<ReviewState["errors"]>;
      errors[k] ??= issue.message;
    }
    return { errors };
  }
  const exists = await prisma.product.findFirst({ where: { id: parsed.data.productId, active: true }, select: { id: true } });
  if (!exists) return { message: "Produto não encontrado." };
  await prisma.review.create({ data: { ...parsed.data, approved: false } });
  return { ok: true };
}
