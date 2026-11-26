import { Star } from "lucide-react";

/** Exibe a média das avaliações APROVADAS. Sem avaliações, diz isso — nada é inventado. */
export function Rating({ average, count, size = "sm" }: { average: number; count: number; size?: "sm" | "md" }) {
  const px = size === "md" ? "h-[18px] w-[18px]" : "h-[14px] w-[14px]";
  if (!count) {
    return <p className={`${size === "md" ? "text-[13.5px]" : "text-[12px]"} text-navy-400`}>Sem avaliações ainda</p>;
  }
  return (
    <div className="flex items-center gap-1.5" aria-label={`Nota ${average.toFixed(1)} de 5, ${count} avaliação(ões)`}>
      <Stars value={average} className={px} />
      <span className={`${size === "md" ? "text-[13.5px]" : "text-[12px]"} font-medium text-navy-500`}>
        {average.toFixed(1).replace(".", ",")} ({count})
      </span>
    </div>
  );
}

export function Stars({ value, className = "h-4 w-4" }: { value: number; className?: string }) {
  return (
    <span className="flex">
      {[1, 2, 3, 4, 5].map((n) => {
        const fill = Math.max(0, Math.min(1, value - (n - 1)));
        return (
          <span key={n} className="relative">
            <Star className={`${className} text-navy-100`} fill="currentColor" strokeWidth={0} />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <Star className={`${className} text-amber-400`} fill="currentColor" strokeWidth={0} />
            </span>
          </span>
        );
      })}
    </span>
  );
}
