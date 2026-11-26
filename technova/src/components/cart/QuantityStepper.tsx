"use client";

import { Minus, Plus } from "lucide-react";

export function QuantityStepper({
  value,
  onChange,
  max,
  min = 1,
  size = "md",
}: {
  value: number;
  onChange: (v: number) => void;
  max: number;
  min?: number;
  size?: "sm" | "md";
}) {
  const h = size === "sm" ? "h-8" : "h-12";
  const w = size === "sm" ? "w-8" : "w-11";
  const limit = Math.max(min, Math.min(99, max));
  return (
    <div className={`inline-flex ${h} items-center rounded-lg border border-navy-200 bg-white`}>
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className={`flex ${h} ${w} items-center justify-center text-navy-700 transition-colors hover:text-brand-600 disabled:text-navy-200`}
        aria-label="Diminuir quantidade"
      >
        <Minus className="h-4 w-4" />
      </button>
      <input
        type="number"
        inputMode="numeric"
        value={value}
        min={min}
        max={limit}
        onChange={(e) => {
          const n = parseInt(e.target.value, 10);
          if (!Number.isNaN(n)) onChange(Math.max(min, Math.min(limit, n)));
        }}
        className={`${size === "sm" ? "w-8 text-[13px]" : "w-10 text-[15px]"} h-full border-0 bg-transparent text-center font-semibold text-navy-900 focus:outline-none`}
        aria-label="Quantidade"
      />
      <button
        type="button"
        onClick={() => onChange(Math.min(limit, value + 1))}
        disabled={value >= limit}
        className={`flex ${h} ${w} items-center justify-center text-navy-700 transition-colors hover:text-brand-600 disabled:text-navy-200`}
        aria-label="Aumentar quantidade"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
