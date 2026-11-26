"use client";

import Image from "next/image";
import { useActionState } from "react";
import { Search, LoaderCircle } from "lucide-react";
import { trackOrder, type TrackState } from "./actions";
import { OrderTimeline } from "@/components/checkout/OrderTimeline";
import { formatPrice, formatDate } from "@/lib/format";
import { PAYMENT_METHOD_LABEL } from "@/lib/labels";
import { submitWithoutReset } from "@/components/ui/submit";

export function TrackOrder() {
  const [state, action, pending] = useActionState<TrackState, FormData>(trackOrder, {});
  const o = state.order;
  return (
    <>
      <form onSubmit={submitWithoutReset(action)} className="mt-8 grid gap-4 rounded-2xl border border-navy-100 bg-surface p-5 sm:grid-cols-[1fr_1.3fr_auto] sm:items-end sm:p-6">
        <div>
          <label htmlFor="code" className="label">Número do pedido</label>
          <input id="code" name="code" required placeholder="TN-XXXX-XXXX" className="input uppercase" autoComplete="off" />
        </div>
        <div>
          <label htmlFor="email" className="label">E-mail</label>
          <input id="email" name="email" type="email" required className="input" autoComplete="email" />
        </div>
        <button disabled={pending} className="btn btn-primary h-11">
          {pending ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Search className="h-4 w-4" />} Consultar
        </button>
      </form>
      {state.error && <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-[14px] font-medium text-red-700">{state.error}</p>}
      {o && (
        <section className="mt-8 animate-fade-up space-y-6" aria-label={`Pedido ${o.code}`}>
          <div className="rounded-2xl border border-navy-100 p-5 sm:p-6">
            <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-[18px] font-bold">Pedido {o.code}</h2>
              <span className="text-[13px] text-navy-500">{formatDate(o.createdAt, true)} · {PAYMENT_METHOD_LABEL[o.paymentMethod] ?? o.paymentMethod}</span>
            </div>
            <OrderTimeline status={o.status} />
          </div>
          <div className="rounded-2xl border border-navy-100 p-5 sm:p-6">
            <p className="text-[13px] font-semibold uppercase tracking-wider text-navy-400">Entrega</p>
            <p className="mt-1 text-[14.5px] text-navy-800">{o.customerName}</p>
            <p className="text-[14px] text-navy-600">{o.address}</p>
            <ul className="mt-5 divide-y divide-navy-100 border-t border-navy-100">
              {o.items.map((i, idx) => (
                <li key={idx} className="flex items-center gap-4 py-3">
                  {i.imageUrl && <Image src={i.imageUrl} alt="" width={48} height={48} unoptimized className="h-12 w-12 rounded-lg border border-navy-100 object-cover" />}
                  <span className="flex-1 text-[14px]">{i.name} <span className="text-navy-400">× {i.quantity}</span></span>
                  <span className="text-[14px] font-semibold">{formatPrice(i.unitPriceCents * i.quantity)}</span>
                </li>
              ))}
            </ul>
            <dl className="space-y-1.5 border-t border-navy-100 pt-4 text-[14px]">
              <div className="flex justify-between"><dt className="text-navy-600">Subtotal</dt><dd>{formatPrice(o.subtotalCents)}</dd></div>
              <div className="flex justify-between"><dt className="text-navy-600">Frete</dt><dd>{o.shippingCents == null ? "A calcular" : formatPrice(o.shippingCents)}</dd></div>
              <div className="flex justify-between text-[16px]"><dt className="font-bold">Total</dt><dd className="font-extrabold">{formatPrice(o.totalCents)}</dd></div>
            </dl>
          </div>
        </section>
      )}
    </>
  );
}
