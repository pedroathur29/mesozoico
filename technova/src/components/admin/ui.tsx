import { ORDER_STATUS_LABEL } from "@/lib/labels";

const STATUS_STYLE: Record<string, string> = {
  PENDING_PAYMENT: "bg-amber-50 text-amber-800 ring-amber-200",
  PAID: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  PROCESSING: "bg-brand-50 text-brand-700 ring-brand-200",
  SHIPPED: "bg-indigo-50 text-indigo-700 ring-indigo-200",
  DELIVERED: "bg-navy-50 text-navy-700 ring-navy-200",
  CANCELLED: "bg-red-50 text-red-700 ring-red-200",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-0.5 text-[12px] font-semibold ring-1 ring-inset ${STATUS_STYLE[status] ?? ""}`}>
      {ORDER_STATUS_LABEL[status] ?? status}
    </span>
  );
}

export function PageHeader({ title, description, action }: { title: string; description?: string; action?: React.ReactNode }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-[24px] font-extrabold sm:text-[28px]">{title}</h1>
        {description && <p className="mt-1 text-[14px] text-navy-500">{description}</p>}
      </div>
      {action}
    </div>
  );
}

export function Panel({ title, children, className = "", action }: { title?: string; children: React.ReactNode; className?: string; action?: React.ReactNode }) {
  return (
    <section className={`rounded-2xl border border-navy-100 bg-white ${className}`}>
      {title && (
        <div className="flex items-center justify-between border-b border-navy-100 px-5 py-4">
          <h2 className="text-[15px] font-bold">{title}</h2>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}
