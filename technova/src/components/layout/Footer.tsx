import { getCategories } from "@/lib/products";
import { FooterView } from "./FooterView";

export async function Footer() {
  const categories = await getCategories();
  return <FooterView categories={categories} />;
}
