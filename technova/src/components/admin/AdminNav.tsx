"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LayoutDashboard, Receipt, Package, Star, Inbox, ExternalLink, LogOut, Menu, X } from "lucide-react";
import logo from "../../../public/brand/technova-logo-claro.png";
import { logoutAction } from "@/app/admin/actions";

const LINKS = [
  { href: "/admin", label: "Visão geral", Icon: LayoutDashboard, exact: true },
  { href: "/admin/pedidos", label: "Pedidos", Icon: Receipt, badge: "orders" },
  { href: "/admin/produtos", label: "Produtos", Icon: Package },
  { href: "/admin/avaliacoes", label: "Avaliações", Icon: Star, badge: "reviews" },
  { href: "/admin/mensagens", label: "Mensagens", Icon: Inbox, badge: "messages" },
] as const;

export function AdminNav({ name, badges }: { name: string; badges: Record<string, number> }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  const nav = (
    <div className="flex h-full flex-col">
      <div className="flex h-16 items-center px-5">
        <Link href="/admin"><Image src={logo} alt="TECHNOVA" className="h-auto w-[150px]" /></Link>
      </div>
      <p className="px-5 pb-2 pt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-navy-300">Gestão da loja</p>
      <nav className="flex-1 space-y-0.5 px-3">
        {LINKS.map((l) => {
          const active = "exact" in l && l.exact ? pathname === l.href : pathname.startsWith(l.href);
          const count = "badge" in l ? badges[l.badge] : 0;
          return (
            <Link key={l.href} href={l.href} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium transition-colors ${active ? "bg-brand-600 text-white" : "text-navy-100 hover:bg-white/[.06] hover:text-white"}`}>
              <l.Icon className="h-[18px] w-[18px]" />
              <span className="flex-1">{l.label}</span>
              {count > 0 && <span className={`rounded-full px-2 py-px text-[11px] font-bold ${active ? "bg-white text-brand-700" : "bg-brand-600 text-white"}`}>{count}</span>}
            </Link>
          );
        })}
        <a href="/" target="_blank" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium text-navy-100 hover:bg-white/[.06] hover:text-white">
          <ExternalLink className="h-[18px] w-[18px]" /> Ver loja
        </a>
      </nav>
      <div className="border-t border-white/10 p-4">
        <p className="truncate text-[13px] font-semibold text-white">{name}</p>
        <form action={logoutAction}>
          <button className="mt-2 flex items-center gap-2 text-[13px] text-navy-200 hover:text-white"><LogOut className="h-4 w-4" /> Sair</button>
        </form>
      </div>
    </div>
  );

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[248px] bg-navy-900 lg:block">{nav}</aside>
      <div className="sticky top-0 z-30 flex h-14 items-center justify-between bg-navy-900 px-4 lg:hidden">
        <Image src={logo} alt="TECHNOVA" className="h-auto w-[120px]" />
        <button onClick={() => setOpen(true)} className="text-white" aria-label="Abrir menu"><Menu className="h-6 w-6" /></button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-navy-950/60" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-[260px] animate-slide-in-left bg-navy-900">
            <button onClick={() => setOpen(false)} className="absolute right-3 top-4 text-white" aria-label="Fechar menu"><X className="h-5 w-5" /></button>
            {nav}
          </div>
        </div>
      )}
    </>
  );
}
