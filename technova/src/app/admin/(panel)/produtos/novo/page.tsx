import Link from "next/link";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { PageHeader } from "@/components/admin/ui";
import { ProductForm } from "@/components/admin/ProductForm";

export const metadata = { title: "Novo produto" };

export default async function NewProduct() {
  await requireAdmin();
  const categories = await prisma.category.findMany({ orderBy: { sortOrder: "asc" }, select: { id: true, name: true } });
  return (
    <>
      <Link href="/admin/produtos" className="text-[13px] font-semibold text-navy-500 hover:text-brand-600">← Produtos</Link>
      <PageHeader title="Novo produto" />
      <ProductForm
        categories={categories}
        initial={{ name: "", slug: "", sku: "", categoryId: "", shortDescription: "", description: "", howItWorks: "", price: "", salePrice: "", stock: 0, active: true, featured: false, isDemo: false, specs: [], images: [] }}
      />
    </>
  );
}
