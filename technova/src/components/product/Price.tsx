import { formatPrice, installments } from "@/lib/format";
import { siteConfig } from "@/lib/config";

export function Price({
  priceCents,
  salePriceCents,
  size = "md",
  showInstallments = true,
}: {
  priceCents: number;
  salePriceCents: number | null;
  size?: "md" | "lg";
  showInstallments?: boolean;
}) {
  const onSale = salePriceCents != null && salePriceCents < priceCents;
  const final = onSale ? salePriceCents! : priceCents;
  const off = onSale ? Math.round((1 - salePriceCents! / priceCents) * 100) : 0;
  const inst = installments(final, siteConfig.maxInstallments || 1);
  return (
    <div>
      {onSale && (
        <div className="flex items-center gap-2">
          <span className={`${size === "lg" ? "text-[15px]" : "text-[12.5px]"} text-navy-400 line-through`}>{formatPrice(priceCents)}</span>
          <span className="rounded bg-brand-50 px-1.5 py-px text-[11.5px] font-bold text-brand-700">-{off}%</span>
        </div>
      )}
      <p className={`${size === "lg" ? "text-[34px]" : "text-[21px]"} font-extrabold leading-tight tracking-tight text-navy-900`}>
        {formatPrice(final)}
      </p>
      {showInstallments && siteConfig.maxInstallments > 1 && inst.count > 1 && (
        <p className={`${size === "lg" ? "text-[14px]" : "text-[12.5px]"} text-navy-500`}>
          ou até {inst.count}x de {formatPrice(inst.valueCents)} sem juros
        </p>
      )}
    </div>
  );
}
