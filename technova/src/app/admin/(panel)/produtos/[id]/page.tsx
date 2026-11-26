import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { imageSrc } from "@/lib/images";
import { centsToInput } from "@/lib/format";
import { parseSpecs } from "@/lib/products";
import { PageHeader } from "@/components/admin/ui";
import { ProductForm } from "@/components/admin/ProductForm";
import { DeleteProductButton } from "@/components/admin/DeleteProductButton";

export const metadata = { title: "Editar produto" };

export default async function EditProduct({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  const [p, categories] = await Promise.all([
    prisma.product.findUnique({ where: { id }, include: { images: { orderBy: { position: "asc" }, select: { id: true, url: true } } } }),
    prisma.category.findMany({ orderBy: { sortOrder: "asc" }, select: { id: true, name: true } }),
  ]);
  if (!p) notFound();
  return (
    <>
      <Link href="/admin/produtos" className="text-[13px] font-semibold text-navy-500 hover:text-brand-600">← Produtos</Link>
      <PageHeader
        title={p.name}
        action={
          <div className="flex gap-2">
            <a href={`/produtos/${p.slug}`} target="_blank" className="btn btn-sm btn-ghost border border-navy-200"><ExternalLink className="h-4 w-4" /> Ver na loja</a>
            <DeleteProductButton id={p.id} name={p.name} />
          </div>
        }
      />
      <ProductForm
        categories={categories}
        initial={{
          id: p.id, name: p.name, slug: p.slug, sku: p.sku ?? "", categoryId: p.categoryId,
          shortDescription: p.shortDescription, description: p.description, howItWorks: p.howItWorks,
          price: centsToInput(p.priceCents), salePrice: centsToInput(p.salePriceCents), stock: p.stock,
          active: p.active, featured: p.featured, isDemo: p.isDemo, specs: parseSpecs(p.specs),
          images: p.images.map((i) => ({ id: i.id, src: imageSrc(i) })),
        }}
      />
    </>
  );
}
