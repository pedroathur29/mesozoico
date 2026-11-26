"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Info, MessageCircle } from "lucide-react";
import { useCart, cartSubtotal, useHydrated } from "@/components/cart/cart-store";
import { formatPrice, onlyDigits } from "@/lib/format";
import { BR_STATES } from "@/lib/labels";
import { whatsappLink } from "@/lib/config";

/** Na vitrine estática não há servidor: o pedido é montado e enviado pelo WhatsApp da loja. */
export function WhatsAppCheckout() {
  const hydrated = useHydrated();
  const { items } = useCart();
  const [f, setF] = useState({ name: "", phone: "", zip: "", address: "", city: "", state: "", payment: "Pix", notes: "" });
  const [error, setError] = useState("");
  const set = (k: keyof typeof f, v: string) => setF((s) => ({ ...s, [k]: v }));
  const canOrder = !!whatsappLink();

  if (!hydrated) return <div className="container min-h-[60vh]" />;
  if (!items.length) {
    return (
      <div className="container flex min-h-[50vh] flex-col items-center justify-center py-16 text-center">
        <p className="text-[20px] font-bold">Seu carrinho está vazio</p>
        <Link href="/produtos" className="btn btn-primary mt-6">Ver produtos</Link>
      </div>
    );
  }
  const subtotal = cartSubtotal(items);

  function send(e: React.FormEvent) {
    e.preventDefault();
    if (f.name.trim().split(/\s+/).length < 2) return setError("Informe nome e sobrenome.");
    if (![10, 11].includes(onlyDigits(f.phone).length)) return setError("Informe um telefone com DDD.");
    if (onlyDigits(f.zip).length !== 8 || !f.address.trim() || !f.city.trim() || !f.state) return setError("Preencha o endereço completo.");
    setError("");
    const lines = [
      "Olá! Quero fazer um pedido pelo site da TECHNOVA:", "",
      ...items.map((i) => `• ${i.quantity}x ${i.name} — ${formatPrice(i.unitPriceCents * i.quantity)}`),
      "", `Subtotal: ${formatPrice(subtotal)} (+ frete a calcular)`, `Pagamento preferido: ${f.payment}`, "",
      `Nome: ${f.name}`, `Telefone: ${f.phone}`, `Endereço: ${f.address} — ${f.city}/${f.state} — CEP ${f.zip}`,
      ...(f.notes ? [`Observações: ${f.notes}`] : []),
    ];
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
  }

  return (
    <div className="container pb-8 pt-8 sm:pt-10">
      <Link href="/carrinho" className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-navy-500 hover:text-brand-600"><ArrowLeft className="h-4 w-4" /> Voltar ao carrinho</Link>
      <h1 className="mt-3 text-[28px] font-extrabold sm:text-[34px]">Finalizar pedido</h1>
      <form onSubmit={send} noValidate className="mt-8 grid gap-8 lg:grid-cols-[1fr_400px] lg:items-start">
        <section className="rounded-2xl border border-navy-100 p-5 sm:p-7">
          <div className="grid gap-4 sm:grid-cols-6">
            <L label="Nome completo" c="sm:col-span-6"><input className="input" autoComplete="name" value={f.name} onChange={(e) => set("name", e.target.value)} /></L>
            <L label="Telefone / WhatsApp" c="sm:col-span-3"><input className="input" type="tel" autoComplete="tel" value={f.phone} onChange={(e) => set("phone", e.target.value)} /></L>
            <L label="CEP" c="sm:col-span-3"><input className="input" inputMode="numeric" autoComplete="postal-code" value={f.zip} onChange={(e) => set("zip", e.target.value)} /></L>
            <L label="Endereço, número e complemento" c="sm:col-span-6"><input className="input" autoComplete="street-address" value={f.address} onChange={(e) => set("address", e.target.value)} /></L>
            <L label="Cidade" c="sm:col-span-4"><input className="input" autoComplete="address-level2" value={f.city} onChange={(e) => set("city", e.target.value)} /></L>
            <L label="Estado" c="sm:col-span-2"><select className="input" value={f.state} onChange={(e) => set("state", e.target.value)}><option value="">UF</option>{BR_STATES.map((s) => <option key={s}>{s}</option>)}</select></L>
            <L label="Forma de pagamento preferida" c="sm:col-span-6">
              <select className="input" value={f.payment} onChange={(e) => set("payment", e.target.value)}><option>Pix</option><option>Cartão de crédito</option></select>
            </L>
            <L label="Observações (opcional)" c="sm:col-span-6"><textarea className="input" rows={2} value={f.notes} onChange={(e) => set("notes", e.target.value)} /></L>
          </div>
        </section>
        <aside className="rounded-2xl border border-navy-100 bg-surface p-6 lg:sticky lg:top-40">
          <h2 className="text-[18px] font-bold">Resumo do pedido</h2>
          <ul className="mt-5 space-y-3">
            {items.map((i) => (
              <li key={i.productId} className="flex items-center gap-3 text-[13.5px]">
                <Image src={i.image} alt="" width={48} height={48} className="h-12 w-12 rounded-lg border border-navy-100 bg-white object-cover" />
                <span className="flex-1">{i.quantity}× {i.name}</span><span className="font-semibold">{formatPrice(i.unitPriceCents * i.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-baseline justify-between border-t border-navy-200 pt-4"><span className="font-bold">Subtotal</span><span className="text-[22px] font-extrabold">{formatPrice(subtotal)}</span></div>
          <p className="mt-1 text-[12px] text-navy-400">+ frete, informado pela equipe antes do pagamento.</p>
          <p className="mt-4 flex items-start gap-2 rounded-xl border border-brand-100 bg-brand-50 px-3 py-2.5 text-[12.5px] text-navy-800">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" /> Nenhuma cobrança é feita aqui. Seu pedido é enviado pelo WhatsApp e nossa equipe confirma frete e pagamento.
          </p>
          {error && <p role="alert" className="mt-3 text-[13px] font-medium text-red-600">{error}</p>}
          {canOrder ? (
            <button className="btn btn-lg mt-5 w-full bg-[#25D366] text-white hover:bg-[#1ebe5b]"><MessageCircle className="h-5 w-5" /> Enviar pedido pelo WhatsApp</button>
          ) : (
            <p className="mt-5 rounded-lg bg-amber-50 px-3 py-2.5 text-[13px] text-amber-900">Os pedidos pelo site serão liberados em breve. Enquanto isso, fale com a equipe pela <Link href="/contato" className="font-semibold underline">página de contato</Link>.</p>
          )}
        </aside>
      </form>
    </div>
  );
}

function L({ label, c, children }: { label: string; c: string; children: React.ReactNode }) {
  return <div className={c}><label className="label">{label}</label>{children}</div>;
}
