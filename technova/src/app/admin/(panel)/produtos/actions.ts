"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { parsePriceToCents, slugify } from "@/lib/format";
import { specSchema } from "@/lib/validators";
import { MAX_IMAGE_BYTES, sniffImageType } from "@/lib/images";

export type ProductFormState = { error?: string; errors?: Record<string, string> };

const baseSchema = z.object({
  name: z.string().trim().min(3, "Informe o nome (mín. 3 caracteres)").max(160),
  slug: z.string().trim().max(90).optional(),
  sku: z.string().trim().max(60).optional(),
  categoryId: z.string().min(1, "Escolha a categoria"),
  shortDescription: z.string().trim().max(300, "Máximo de 300 caracteres"),
  description: z.string().trim().max(10000),
  howItWorks: z.string().trim().max(5000),
  stock: z.coerce.number({ invalid_type_error: "Estoque inválido" }).int("Use um número inteiro").min(0, "Estoque não pode ser negativo").max(1_000_000),
});

function revalidateStore(slug?: string) {
  revalidatePath("/", "layout");
  if (slug) revalidatePath(`/produtos/${slug}`);
}

export async function saveProduct(_: ProductFormState, form: FormData): Promise<ProductFormState> {
  await requireAdmin();
  const id = String(form.get("id") ?? "") || null;
  const errors: Record<string, string> = {};

  const parsed = baseSchema.safeParse(Object.fromEntries(form));
  if (!parsed.success) for (const i of parsed.error.issues) errors[String(i.path[0])] ??= i.message;

  const priceCents = parsePriceToCents(String(form.get("price") ?? ""));
  if (priceCents == null || priceCents <= 0) errors.price = "Informe um preço válido";
  const saleRaw = String(form.get("salePrice") ?? "").trim();
  const salePriceCents = saleRaw ? parsePriceToCents(saleRaw) : null;
  if (saleRaw && (salePriceCents == null || salePriceCents <= 0)) errors.salePrice = "Preço promocional inválido";
  else if (salePriceCents != null && priceCents != null && salePriceCents >= priceCents) errors.salePrice = "O preço promocional deve ser menor que o preço normal";

  let specs: { label: string; value: string }[] = [];
  try {
    const raw = JSON.parse(String(form.get("specs") ?? "[]")).filter((s: { label?: string; value?: string }) => s.label?.trim() || s.value?.trim());
    const r = specSchema.safeParse(raw);
    if (r.success) specs = r.data;
    else errors.specs = "Preencha nome e valor de cada característica";
  } catch {
    errors.specs = "Características inválidas";
  }

  const files = form.getAll("newImages").filter((f): f is File => f instanceof File && f.size > 0);
  const uploads: { data: Buffer; mimeType: string; alt: string }[] = [];
  for (const file of files.slice(0, 10)) {
    if (file.size > MAX_IMAGE_BYTES) {
      errors.images = `"${file.name}" passa de 4 MB`;
      break;
    }
    const buf = Buffer.from(await file.arrayBuffer());
    const type = sniffImageType(buf);
    if (!type) {
      errors.images = `"${file.name}" não é uma imagem JPG, PNG, WebP ou AVIF válida`;
      break;
    }
    uploads.push({ data: buf, mimeType: type, alt: "" });
  }
  const imageUrl = String(form.get("imageUrl") ?? "").trim();
  if (imageUrl && !/^(https:\/\/|\/)[^\s"'<>]+$/.test(imageUrl)) errors.imageUrl = "Use um endereço https:// ou um caminho iniciado por /";

  if (Object.keys(errors).length || !parsed.success) return { error: "Corrija os campos destacados.", errors };

  const d = parsed.data;
  const slug = slugify(d.slug || d.name);
  if (!slug) return { errors: { slug: "Endereço inválido" } };
  const clash = await prisma.product.findFirst({ where: { slug, ...(id ? { id: { not: id } } : {}) }, select: { id: true } });
  if (clash) return { error: "Corrija os campos destacados.", errors: { slug: "Já existe um produto com este endereço" } };

  const keep: string[] = (() => {
    try {
      return z.array(z.string()).parse(JSON.parse(String(form.get("imageOrder") ?? "[]")));
    } catch {
      return [];
    }
  })();

  const data = {
    name: d.name,
    slug,
    sku: d.sku || null,
    categoryId: d.categoryId,
    shortDescription: d.shortDescription,
    description: d.description,
    howItWorks: d.howItWorks,
    specs,
    priceCents: priceCents!,
    salePriceCents,
    stock: d.stock,
    active: form.get("active") === "on",
    featured: form.get("featured") === "on",
    isDemo: form.get("isDemo") === "on",
  };

  let previousSlug: string | undefined;
  try {
    await prisma.$transaction(async (tx) => {
      let productId = id;
      if (id) {
        const prev = await tx.product.findUnique({ where: { id }, select: { slug: true } });
        if (!prev) throw new Error("Produto não encontrado");
        previousSlug = prev.slug;
        await tx.product.update({ where: { id }, data });
        await tx.productImage.deleteMany({ where: { productId: id, id: { notIn: keep } } });
        for (const [position, imgId] of keep.entries()) {
          await tx.productImage.updateMany({ where: { id: imgId, productId: id }, data: { position } });
        }
      } else {
        productId = (await tx.product.create({ data, select: { id: true } })).id;
      }
      let position = keep.length;
      if (imageUrl) await tx.productImage.create({ data: { productId: productId!, url: imageUrl, alt: d.name, position: position++ } });
      for (const u of uploads) {
        await tx.productImage.create({ data: { productId: productId!, data: u.data, mimeType: u.mimeType, alt: d.name, position: position++ } });
      }
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
      return { error: "Corrija os campos destacados.", errors: { sku: "Este código (SKU) já está em uso" } };
    }
    throw e;
  }

  revalidateStore(slug);
  if (previousSlug && previousSlug !== slug) revalidatePath(`/produtos/${previousSlug}`);
  redirect(`/admin/produtos?salvo=${encodeURIComponent(d.name)}`);
}

export async function deleteProduct(id: string) {
  await requireAdmin();
  const p = await prisma.product.delete({ where: { id }, select: { slug: true, name: true } });
  // Os pedidos antigos mantêm nome, preço e imagem do item (cópia feita na compra).
  revalidateStore(p.slug);
  redirect(`/admin/produtos?excluido=${encodeURIComponent(p.name)}`);
}

export async function quickUpdateStock(id: string, form: FormData) {
  await requireAdmin();
  const stock = Number(form.get("stock"));
  if (!Number.isInteger(stock) || stock < 0) return;
  const p = await prisma.product.update({ where: { id }, data: { stock }, select: { slug: true } });
  revalidateStore(p.slug);
  revalidatePath("/admin/produtos");
}
