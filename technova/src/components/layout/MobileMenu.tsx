"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronRight, User, MessageCircle, Tag, LayoutGrid } from "lucide-react";
import { categoryIcon } from "@/lib/categories";
import { Logo } from "./Logo";

type Cat = { slug: string; name: string; icon: string };

export function MobileMenu({ categories }: { categories: Cat[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="-ml-2 flex h-11 w-11 items-center justify-center rounded-lg text-navy-900 hover:bg-navy-50 md:hidden"
        aria-label="Abrir menu"
        aria-expanded={open}
      >
        <Menu className="h-6 w-6" strokeWidth={1.8} />
      </button>
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="absolute inset-0 animate-fade-in bg-navy-950/50" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 left-0 flex w-[86%] max-w-[360px] animate-slide-in-left flex-col bg-white shadow-lift">
            <div className="flex h-16 items-center justify-between border-b border-navy-100 px-4">
              <Logo />
              <button onClick={() => setOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-navy-50" aria-label="Fechar menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-2 py-3">
              <p className="px-3 pb-2 pt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-navy-400">Categorias</p>
              <MenuLink href="/produtos" icon={<LayoutGrid className="h-5 w-5" />} label="Todos os produtos" />
              {categories.map((c) => {
                const Icon = categoryIcon(c.icon);
                return <MenuLink key={c.slug} href={`/produtos?categoria=${c.slug}`} icon={<Icon className="h-5 w-5" />} label={c.name} />;
              })}
              <MenuLink href="/produtos?promocao=1" icon={<Tag className="h-5 w-5" />} label="Ofertas" />
              <div className="my-3 border-t border-navy-100" />
              <MenuLink href="/conta" icon={<User className="h-5 w-5" />} label="Meus pedidos" />
              <MenuLink href="/contato" icon={<MessageCircle className="h-5 w-5" />} label="Atendimento" />
            </nav>
            <div className="border-t border-navy-100 p-4 text-[12.5px] text-navy-500">
              <Link href="/sobre" className="mr-4 hover:text-brand-600">Sobre a TECHNOVA</Link>
              <Link href="/politicas/trocas-e-devolucoes" className="hover:text-brand-600">Trocas e devoluções</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function MenuLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="flex items-center gap-3 rounded-lg px-3 py-3 text-[15px] font-medium text-navy-900 active:bg-brand-50">
      <span className="text-brand-600">{icon}</span>
      <span className="flex-1">{label}</span>
      <ChevronRight className="h-4 w-4 text-navy-300" />
    </Link>
  );
}
