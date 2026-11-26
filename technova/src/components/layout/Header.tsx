import { Suspense } from "react";
import { getCategories } from "@/lib/products";
import { SearchBar } from "./SearchBar";
import { HeaderView } from "./HeaderView";

export async function Header() {
  const categories = await getCategories();
  return (
    <HeaderView
      categories={categories.map((c) => ({ slug: c.slug, name: c.name, icon: c.icon }))}
      search={<Suspense><SearchBar className="w-full max-w-[560px]" /></Suspense>}
      mobileSearch={<Suspense><SearchBar /></Suspense>}
    />
  );
}

