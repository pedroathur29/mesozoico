"use client";

import { useActionState } from "react";
import { LoaderCircle } from "lucide-react";
import { updateOrder, type OrderActionState } from "@/app/admin/(panel)/pedidos/actions";
import { ORDER_STATUS_LABEL } from "@/lib/labels";
import { submitWithoutReset } from "@/components/ui/submit";

export function OrderStatusForm({ id, status, shipping }: { id: string; status: string; shipping: string }) {
  const [state, action, pending] = useActionState<OrderActionState, FormData>(updateOrder.bind(null, id), {});
  const cancelled = status === "CANCELLED";
  return (
    <form
      onSubmit={(e) => {
        const next = new FormData(e.currentTarget).get("status");
        if (next === "CANCELLED" && !cancelled && !confirm("Cancelar o pedido? Os itens voltam para o estoque.")) return e.preventDefault();
        submitWithoutReset(action)(e);
      }}
      className="space-y-4 p-5"
    >
      <div>
        <label htmlFor="status" className="label">Status</label>
        <select id="status" name="status" defaultValue={status} disabled={cancelled} className="input">
          {Object.entries(ORDER_STATUS_LABEL).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="shipping" className="label">Frete (R$)</label>
        <input id="shipping" name="shipping" inputMode="decimal" defaultValue={shipping} placeholder="0,00" disabled={cancelled} className="input" />
        <p className="mt-1 text-[12px] text-navy-400">O total do pedido é recalculado com o frete.</p>
      </div>
      {state.error && <p className="field-error">{state.error}</p>}
      {state.ok && <p className="text-[13px] font-semibold text-emerald-700">{state.ok}</p>}
      <button disabled={pending || cancelled} className="btn btn-primary w-full">{pending && <LoaderCircle className="h-4 w-4 animate-spin" />} Salvar alterações</button>
    </form>
  );
}
