"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoaderCircle, Lock, QrCode, CreditCard, Info, ArrowLeft, ShieldCheck } from "lucide-react";
import { useCart, cartSubtotal, useHydrated } from "@/components/cart/cart-store";
import { useCartSync } from "@/components/cart/useCartSync";
import { formatPrice, onlyDigits } from "@/lib/format";
import { BR_STATES } from "@/lib/labels";

type Fields = {
  customerName: string; customerEmail: string; customerPhone: string; customerDocument: string;
  zipCode: string; street: string; number: string; complement: string; district: string; city: string; state: string;
  notes: string; paymentMethod: "pix" | "cartao"; acceptTerms: boolean;
};

const initial: Fields = {
  customerName: "", customerEmail: "", customerPhone: "", customerDocument: "",
  zipCode: "", street: "", number: "", complement: "", district: "", city: "", state: "",
  notes: "", paymentMethod: "pix", acceptTerms: false,
};

const maskPhone = (v: string) => {
  const d = onlyDigits(v).slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};
const maskCPF = (v: string) => onlyDigits(v).slice(0, 11).replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2");
const maskCEP = (v: string) => onlyDigits(v).slice(0, 8).replace(/(\d{5})(\d)/, "$1-$2");

export function CheckoutForm({ requireCpf, paymentsEnabled }: { requireCpf: boolean; paymentsEnabled: boolean }) {
  const hydrated = useHydrated();
  const { items, clear } = useCart();
  const { notices, synced } = useCartSync(hydrated);
  const router = useRouter();
  const [f, setF] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [cepLoading, setCepLoading] = useState(false);
  const [cepMsg, setCepMsg] = useState("");
  const [placed, setPlaced] = useState(false);

  const set = <K extends keyof Fields>(k: K, v: Fields[K]) => {
    setF((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: "" }));
  };

  async function lookupCep(cep: string) {
    const d = onlyDigits(cep);
    if (d.length !== 8) return;
    setCepLoading(true);
    setCepMsg("");
    try {
      const r = await fetch(`https://viacep.com.br/ws/${d}/json/`);
      const data = await r.json();
      if (data.erro) {
        setCepMsg("CEP não encontrado. Preencha o endereço manualmente.");
      } else {
        setF((s) => ({
          ...s,
          street: data.logradouro || s.street,
          district: data.bairro || s.district,
          city: data.localidade || s.city,
          state: data.uf || s.state,
        }));
        setErrors((e) => ({ ...e, zipCode: "", street: "", district: "", city: "", state: "" }));
        document.getElementById("number")?.focus();
      }
    } catch {
      setCepMsg("Não foi possível consultar o CEP. Preencha o endereço manualmente.");
    } finally {
      setCepLoading(false);
    }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setFormError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...f, items: items.map((i) => ({ productId: i.productId, quantity: i.quantity })) }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrors(data.fieldErrors ?? {});
        setFormError(data.error ?? "Não foi possível registrar o pedido.");
        const first = data.fieldErrors && Object.keys(data.fieldErrors)[0];
        if (first) document.getElementById(first)?.focus();
        return;
      }
      setPlaced(true);
      router.replace(`/pedido/${data.code}`);
      clear();
    } catch {
      setFormError("Falha de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!hydrated) return <div className="container min-h-[60vh] py-10" />;
  if (placed) {
    return (
      <div className="container flex min-h-[50vh] items-center justify-center gap-3 py-16 text-navy-600">
        <LoaderCircle className="h-5 w-5 animate-spin text-brand-600" /> Pedido registrado. Abrindo a confirmação...
      </div>
    );
  }

  if (items.length === 0 && synced) {
    return (
      <div className="container flex min-h-[50vh] flex-col items-center justify-center py-16 text-center">
        <p className="text-[20px] font-bold text-navy-900">Seu carrinho está vazio</p>
        <p className="mt-1 text-navy-500">Adicione produtos para finalizar um pedido.</p>
        <Link href="/produtos" className="btn btn-primary mt-6">Ver produtos</Link>
      </div>
    );
  }

  const subtotal = cartSubtotal(items);
  const err = (k: string) => errors[k];
  const cls = (k: string) => `input ${err(k) ? "input-error" : ""}`;

  return (
    <div className="container pb-8 pt-8 sm:pt-10">
      <Link href="/carrinho" className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-navy-500 hover:text-brand-600">
        <ArrowLeft className="h-4 w-4" /> Voltar ao carrinho
      </Link>
      <h1 className="mt-3 text-[28px] font-extrabold sm:text-[34px]">Finalizar pedido</h1>

      {notices.length > 0 && (
        <ul className="mt-5 space-y-2">
          {notices.map((n) => (
            <li key={n} className="flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-[13.5px] text-amber-900"><Info className="mt-0.5 h-4 w-4 shrink-0" /> {n}</li>
          ))}
        </ul>
      )}

      <form onSubmit={submit} noValidate className="mt-8 grid gap-8 lg:grid-cols-[1fr_400px] lg:items-start">
        <div className="space-y-6">
          <Section n={1} title="Seus dados">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="customerName" label="Nome completo" error={err("customerName")} className="sm:col-span-2">
                <input id="customerName" autoComplete="name" value={f.customerName} onChange={(e) => set("customerName", e.target.value)} className={cls("customerName")} />
              </Field>
              <Field id="customerEmail" label="E-mail" error={err("customerEmail")}>
                <input id="customerEmail" type="email" autoComplete="email" inputMode="email" value={f.customerEmail} onChange={(e) => set("customerEmail", e.target.value)} className={cls("customerEmail")} />
              </Field>
              <Field id="customerPhone" label="Telefone / WhatsApp" error={err("customerPhone")}>
                <input id="customerPhone" type="tel" autoComplete="tel-national" inputMode="tel" placeholder="(11) 91234-5678" value={f.customerPhone} onChange={(e) => set("customerPhone", maskPhone(e.target.value))} className={cls("customerPhone")} />
              </Field>
              <Field id="customerDocument" label={requireCpf ? "CPF" : "CPF (opcional)"} error={err("customerDocument")} hint="Necessário para emissão da nota fiscal.">
                <input id="customerDocument" inputMode="numeric" placeholder="000.000.000-00" value={f.customerDocument} onChange={(e) => set("customerDocument", maskCPF(e.target.value))} className={cls("customerDocument")} />
              </Field>
            </div>
          </Section>

          <Section n={2} title="Endereço de entrega">
            <div className="grid gap-4 sm:grid-cols-6">
              <Field id="zipCode" label="CEP" error={err("zipCode") || cepMsg} className="sm:col-span-2">
                <div className="relative">
                  <input id="zipCode" inputMode="numeric" autoComplete="postal-code" placeholder="00000-000" value={f.zipCode}
                    onChange={(e) => { const v = maskCEP(e.target.value); set("zipCode", v); if (onlyDigits(v).length === 8) lookupCep(v); }}
                    className={cls("zipCode")} />
                  {cepLoading && <LoaderCircle className="absolute right-3 top-3 h-5 w-5 animate-spin text-brand-600" />}
                </div>
              </Field>
              <div className="hidden items-end pb-2.5 sm:col-span-4 sm:flex">
                <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" target="_blank" rel="noopener noreferrer" className="text-[13px] font-semibold text-brand-600 hover:underline">Não sei meu CEP</a>
              </div>
              <Field id="street" label="Endereço" error={err("street")} className="sm:col-span-4">
                <input id="street" autoComplete="address-line1" value={f.street} onChange={(e) => set("street", e.target.value)} className={cls("street")} />
              </Field>
              <Field id="number" label="Número" error={err("number")} className="sm:col-span-2">
                <input id="number" value={f.number} onChange={(e) => set("number", e.target.value)} className={cls("number")} />
              </Field>
              <Field id="complement" label="Complemento (opcional)" error={err("complement")} className="sm:col-span-3">
                <input id="complement" autoComplete="address-line2" placeholder="Apto, bloco, referência" value={f.complement} onChange={(e) => set("complement", e.target.value)} className={cls("complement")} />
              </Field>
              <Field id="district" label="Bairro" error={err("district")} className="sm:col-span-3">
                <input id="district" value={f.district} onChange={(e) => set("district", e.target.value)} className={cls("district")} />
              </Field>
              <Field id="city" label="Cidade" error={err("city")} className="sm:col-span-4">
                <input id="city" autoComplete="address-level2" value={f.city} onChange={(e) => set("city", e.target.value)} className={cls("city")} />
              </Field>
              <Field id="state" label="Estado" error={err("state")} className="sm:col-span-2">
                <select id="state" autoComplete="address-level1" value={f.state} onChange={(e) => set("state", e.target.value)} className={cls("state")}>
                  <option value="">UF</option>
                  {BR_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </Field>
              <Field id="notes" label="Observações (opcional)" error={err("notes")} className="sm:col-span-6">
                <textarea id="notes" rows={2} maxLength={500} value={f.notes} onChange={(e) => set("notes", e.target.value)} className={cls("notes")} placeholder="Ex.: horário preferido para entrega" />
              </Field>
            </div>
          </Section>

          <Section n={3} title="Forma de pagamento">
            <div className="grid gap-3 sm:grid-cols-2" role="radiogroup" aria-label="Forma de pagamento">
              {([
                ["pix", "Pix", "Aprovação rápida", QrCode],
                ["cartao", "Cartão de crédito", "Visa, Mastercard, Elo e outros", CreditCard],
              ] as const).map(([v, label, desc, Icon]) => (
                <label key={v} className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-colors ${f.paymentMethod === v ? "border-brand-600 bg-brand-50/60" : "border-navy-100 hover:border-navy-200"}`}>
                  <input type="radio" name="paymentMethod" value={v} checked={f.paymentMethod === v} onChange={() => set("paymentMethod", v)} className="sr-only" />
                  <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${f.paymentMethod === v ? "bg-brand-600 text-white" : "bg-surface text-navy-600"}`}><Icon className="h-5 w-5" /></span>
                  <span>
                    <span className="block text-[14.5px] font-bold text-navy-900">{label}</span>
                    <span className="block text-[12.5px] text-navy-500">{desc}</span>
                  </span>
                </label>
              ))}
            </div>
            {!paymentsEnabled && (
              <p className="mt-4 flex items-start gap-2.5 rounded-xl border border-brand-100 bg-brand-50 px-4 py-3 text-[13px] leading-relaxed text-navy-800">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                <span>
                  <strong>Nenhuma cobrança é feita agora.</strong> O pagamento online ainda está em implantação: ao confirmar, seu pedido é registrado
                  e nossa equipe entra em contato pelo e-mail ou telefone informados com o valor do frete e as instruções de pagamento pela forma escolhida.
                </span>
              </p>
            )}
          </Section>
        </div>

        <aside className="rounded-2xl border border-navy-100 bg-surface p-6 lg:sticky lg:top-40">
          <h2 className="text-[18px] font-bold">Resumo do pedido</h2>
          <ul className="mt-5 max-h-[300px] space-y-4 overflow-y-auto pr-1">
            {items.map((i) => (
              <li key={i.productId} className="flex items-center gap-3">
                <span className="relative shrink-0">
                  <Image src={i.image} alt="" width={56} height={56} unoptimized className="h-14 w-14 rounded-lg border border-navy-100 bg-white object-cover" />
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-navy-900 px-1 text-[11px] font-bold text-white">{i.quantity}</span>
                </span>
                <span className="line-clamp-2 flex-1 text-[13.5px] font-medium text-navy-800">{i.name}</span>
                <span className="text-[13.5px] font-semibold text-navy-900">{formatPrice(i.unitPriceCents * i.quantity)}</span>
              </li>
            ))}
          </ul>
          <dl className="mt-5 space-y-2.5 border-t border-navy-200 pt-4 text-[14px]">
            <div className="flex justify-between"><dt className="text-navy-600">Subtotal</dt><dd className="font-semibold">{formatPrice(subtotal)}</dd></div>
            <div className="flex justify-between"><dt className="text-navy-600">Frete</dt><dd className="text-navy-500">A calcular</dd></div>
            <div className="flex items-baseline justify-between border-t border-navy-200 pt-3"><dt className="font-bold text-navy-900">Total</dt><dd className="text-[22px] font-extrabold text-navy-900">{formatPrice(subtotal)}</dd></div>
          </dl>
          <p className="mt-1 text-[12px] text-navy-400">+ frete, informado pela equipe antes do pagamento.</p>

          <label className="mt-5 flex cursor-pointer items-start gap-2.5 text-[13px] leading-relaxed text-navy-700">
            <input id="acceptTerms" type="checkbox" checked={f.acceptTerms} onChange={(e) => set("acceptTerms", e.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 accent-brand-600" />
            <span>
              Li e aceito os <Link href="/politicas/termos-de-uso" target="_blank" className="font-semibold text-brand-600 hover:underline">termos de uso</Link> e a{" "}
              <Link href="/politicas/privacidade" target="_blank" className="font-semibold text-brand-600 hover:underline">política de privacidade</Link>.
            </span>
          </label>
          {err("acceptTerms") && <p className="field-error">{err("acceptTerms")}</p>}

          {formError && <p role="alert" className="mt-4 rounded-lg bg-red-50 px-3 py-2.5 text-[13.5px] font-medium text-red-700">{formError}</p>}

          <button type="submit" disabled={submitting || items.length === 0} className="btn btn-primary btn-lg mt-5 w-full">
            {submitting ? <><LoaderCircle className="h-4 w-4 animate-spin" /> Registrando pedido...</> : <><Lock className="h-4 w-4" /> Confirmar pedido</>}
          </button>
          <p className="mt-4 flex items-center justify-center gap-2 text-[12.5px] text-navy-500"><ShieldCheck className="h-4 w-4 text-brand-600" /> Conexão segura e dados protegidos</p>
        </aside>
      </form>
    </div>
  );
}

function Section({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-navy-100 bg-white p-5 sm:p-7">
      <h2 className="mb-5 flex items-center gap-3 text-[18px] font-bold">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-[13px] font-bold text-white">{n}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function Field({ id, label, error, hint, className = "", children }: { id: string; label: string; error?: string; hint?: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="label">{label}</label>
      {children}
      {error ? <p className="field-error">{error}</p> : hint ? <p className="mt-1 text-[12px] text-navy-400">{hint}</p> : null}
    </div>
  );
}
