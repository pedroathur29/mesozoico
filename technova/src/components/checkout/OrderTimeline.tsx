import { Check, X } from "lucide-react";
import { ORDER_STATUS_LABEL } from "@/lib/labels";

const FLOW = ["PENDING_PAYMENT", "PAID", "PROCESSING", "SHIPPED", "DELIVERED"] as const;

export function OrderTimeline({ status }: { status: string }) {
  if (status === "CANCELLED") {
    return (
      <p className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-[14px] font-semibold text-red-700">
        <X className="h-4 w-4" /> Pedido cancelado
      </p>
    );
  }
  const current = FLOW.indexOf(status as (typeof FLOW)[number]);
  return (
    <ol className="grid grid-cols-5 gap-1">
      {FLOW.map((s, i) => {
        const done = i <= current;
        return (
          <li key={s} className="flex flex-col items-center text-center">
            <div className="flex w-full items-center">
              <span className={`h-0.5 flex-1 ${i === 0 ? "opacity-0" : done ? "bg-brand-600" : "bg-navy-100"}`} />
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[12px] font-bold ${done ? "bg-brand-600 text-white" : "bg-navy-100 text-navy-400"} ${i === current ? "ring-4 ring-brand-100" : ""}`}>
                {done && i < current ? <Check className="h-4 w-4" /> : i + 1}
              </span>
              <span className={`h-0.5 flex-1 ${i === FLOW.length - 1 ? "opacity-0" : i < current ? "bg-brand-600" : "bg-navy-100"}`} />
            </div>
            <span className={`mt-2 text-[11px] leading-tight sm:text-[12px] ${i === current ? "font-bold text-navy-900" : "text-navy-400"}`}>{ORDER_STATUS_LABEL[s]}</span>
          </li>
        );
      })}
    </ol>
  );
}
