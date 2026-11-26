import Link from "next/link";
import { Suspense } from "react";
import { User } from "lucide-react";
import { getCategories } from "@/lib/products";
import { categoryIcon } from "@/lib/categories";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { CartButton } from "./CartButton";
import { MobileMenu } from "./MobileMenu";
import { AnnouncementBar } from "./AnnouncementBar";

export async function Header() {
  const categories = await getCategories();
  const nav = categories.map((c) => ({ slug: c.slug, name: c.name, icon: c.icon }));

  return (
    <>
      <AnnouncementBar />
      <header className="sticky top-0 z-40 border-b border-navy-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <div className="container flex h-16 items-center gap-3 sm:h-[76px] sm:gap-6">
          <MobileMenu categories={nav} />
          <Logo priority />
          <div className="hidden flex-1 justify-center md:flex">
            <Suspense><SearchBar className="w-full max-w-[560px]" /></Suspense>
          </div>
          <div className="ml-auto flex items-center gap-1 md:ml-0">
            <Link
              href="/conta"
              className="flex h-11 items-center gap-2 rounded-lg px-2.5 text-navy-900 transition-colors hover:bg-navy-50"
              aria-label="Minha conta e pedidos"
            >
              <User className="h-[22px] w-[22px]" strokeWidth={1.8} />
              <span className="hidden text-left text-[12px] leading-tight lg:block">
                <span className="block text-navy-400">Olá, visitante</span>
                <span className="block font-semibold">Meus pedidos</span>
              </span>
            </Link>
            <CartButton />
          </div>
        </div>
        <div className="container pb-3 md:hidden">
          <Suspense><SearchBar /></Suspense>
        </div>
        <nav aria-label="Categorias" className="hidden bg-navy-900 md:block">
          <ul className="container flex h-12 items-center justify-between gap-2 overflow-x-auto scrollbar-none">
            <li>
              <Link href="/produtos" className="flex h-12 items-center gap-2 whitespace-nowrap px-2 text-[13.5px] font-semibold text-white/90 transition-colors hover:text-white">
                Todos os produtos
              </Link>
            </li>
            {nav.map((c) => {
              const Icon = categoryIcon(c.icon);
              return (
                <li key={c.slug}>
                  <Link
                    href={`/produtos?categoria=${c.slug}`}
                    className="group flex h-12 items-center gap-2 whitespace-nowrap px-2 text-[13.5px] font-medium text-white/80 transition-colors hover:text-white"
                  >
                    <Icon className="h-[17px] w-[17px] text-brand-300 transition-colors group-hover:text-white" strokeWidth={1.8} />
                    {c.name}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link href="/produtos?promocao=1" className="flex h-12 items-center gap-2 whitespace-nowrap rounded-md px-2 text-[13.5px] font-semibold text-brand-300 transition-colors hover:text-white">
                Ofertas
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
