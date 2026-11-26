"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { SlidersHorizontal, X, Check } from "lucide-react";

type Cat = { slug: string; name: string; count: number };

export function useCatalogParams() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [pending, start] = useTransition();
  const update = (changes: Record<string, string | null>) => {
    const next = new URLSearchParams(params.toString());
    for (const [k, v] of Object.entries(changes)) {
      if (v === null || v === "") next.delete(k);
      else next.set(k, v);
    }
    next.delete("pagina");
    start(() => router.push(`${pathname}${next.size ? `?${next}` : ""}`, { scroll: false }));
  };
  return { params, update, pending };
}

export function CatalogFilters({ categories, bounds, mode }: { categories: Cat[]; bounds: { min: number; max: number }; mode: "desktop" | "mobile" }) {
  const [open, setOpen] = useState(false);
  const { params } = useCatalogParams();
  const activeCount =
    (params.get("categoria")?.split(",").filter(Boolean).length ?? 0) +
    (params.get("min") ? 1 : 0) +
    (params.get("max") ? 1 : 0) +
    (params.get("promocao") ? 1 : 0) +
    (params.get("estoque") ? 1 : 0);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  if (mode === "desktop") {
    return (
      <aside className="hidden lg:block">
        <FilterPanel categories={categories} bounds={bounds} />
      </aside>
    );
  }

  return (
    <>
      <button onClick={() => setOpen(true)} className="btn btn-sm border border-navy-200 bg-white text-navy-900 lg:hidden">
        <SlidersHorizontal className="h-4 w-4" /> Filtros
        {activeCount > 0 && <span className="rounded-full bg-brand-600 px-1.5 text-[11px] text-white">{activeCount}</span>}
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Filtros">
          <div className="absolute inset-0 animate-fade-in bg-navy-950/50" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 left-0 flex w-[88%] max-w-[380px] animate-slide-in-left flex-col bg-white">
            <div className="flex h-16 items-center justify-between border-b border-navy-100 px-5">
              <p className="text-[17px] font-bold text-navy-900">Filtros</p>
              <button onClick={() => setOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-navy-50" aria-label="Fechar filtros">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-5">
              <FilterPanel categories={categories} bounds={bounds} />
            </div>
            <div className="border-t border-navy-100 p-4">
              <button onClick={() => setOpen(false)} className="btn btn-primary w-full">Ver resultados</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function FilterPanel({ categories, bounds }: { categories: Cat[]; bounds: { min: number; max: number } }) {
  const { params, update, pending } = useCatalogParams();
  const selected = new Set(params.get("categoria")?.split(",").filter(Boolean) ?? []);
  const [min, setMin] = useState(params.get("min") ?? "");
  const [max, setMax] = useState(params.get("max") ?? "");

  useEffect(() => {
    setMin(params.get("min") ?? "");
    setMax(params.get("max") ?? "");
  }, [params]);

  const toggleCat = (slug: string) => {
    const next = new Set(selected);
    if (next.has(slug)) next.delete(slug);
    else next.add(slug);
    update({ categoria: [...next].join(",") || null });
  };

  const hasAny = ["categoria", "min", "max", "promocao", "estoque"].some((k) => params.get(k));

  return (
    <div className={`space-y-7 transition-opacity ${pending ? "opacity-60" : ""}`}>
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-bold uppercase tracking-[0.12em] text-navy-900">Filtrar por</p>
        {hasAny && (
          <button onClick={() => update({ categoria: null, min: null, max: null, promocao: null, estoque: null })} className="text-[13px] font-semibold text-brand-600 hover:underline">
            Limpar
          </button>
        )}
      </div>

      <fieldset>
        <legend className="mb-3 text-[14px] font-bold text-navy-900">Categoria</legend>
        <ul className="space-y-1">
          {categories.map((c) => {
            const on = selected.has(c.slug);
            return (
              <li key={c.slug}>
                <button
                  onClick={() => toggleCat(c.slug)}
                  aria-pressed={on}
                  className="flex w-full items-center gap-3 rounded-lg px-1 py-1.5 text-left text-[14px] text-navy-700 hover:text-navy-900"
                >
                  <span className={`flex h-[18px] w-[18px] items-center justify-center rounded-[5px] border transition-colors ${on ? "border-brand-600 bg-brand-600 text-white" : "border-navy-200 bg-white"}`}>
                    {on && <Check className="h-3 w-3" strokeWidth={3} />}
                  </span>
                  <span className="flex-1">{c.name}</span>
                  <span className="text-[12px] text-navy-400">{c.count}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </fieldset>

      <fieldset>
        <legend className="mb-3 text-[14px] font-bold text-navy-900">Faixa de preço</legend>
        <form
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            update({ min: min.replace(/\D/g, "") || null, max: max.replace(/\D/g, "") || null });
          }}
        >
          <div className="flex items-center gap-2">
            <label className="relative flex-1">
              <span className="sr-only">Preço mínimo</span>
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[13px] text-navy-400">R$</span>
              <input value={min} onChange={(e) => setMin(e.target.value)} inputMode="numeric" placeholder={String(Math.floor(bounds.min / 100))} className="input h-10 pl-9 text-[14px]" />
            </label>
            <span className="text-navy-300">–</span>
            <label className="relative flex-1">
              <span className="sr-only">Preço máximo</span>
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[13px] text-navy-400">R$</span>
              <input value={max} onChange={(e) => setMax(e.target.value)} inputMode="numeric" placeholder={String(Math.ceil(bounds.max / 100))} className="input h-10 pl-9 text-[14px]" />
            </label>
          </div>
          <button className="btn btn-sm w-full border border-navy-200 bg-white text-navy-900 hover:border-brand-600 hover:text-brand-600">Aplicar preço</button>
        </form>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            ["Até R$ 100", null, "100"],
            ["R$ 100 a 300", "100", "300"],
            ["Acima de R$ 300", "300", null],
          ].map(([label, a, b]) => (
            <button
              key={label}
              onClick={() => update({ min: a, max: b })}
              className={`rounded-full border px-3 py-1 text-[12.5px] font-medium transition-colors ${
                (params.get("min") ?? null) === a && (params.get("max") ?? null) === b ? "border-brand-600 bg-brand-50 text-brand-700" : "border-navy-200 text-navy-600 hover:border-navy-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="mb-3 text-[14px] font-bold text-navy-900">Mais opções</legend>
        <Toggle label="Somente ofertas" on={!!params.get("promocao")} onChange={(v) => update({ promocao: v ? "1" : null })} />
        <Toggle label="Disponível em estoque" on={!!params.get("estoque")} onChange={(v) => update({ estoque: v ? "1" : null })} />
      </fieldset>

      <fieldset>
        <legend className="mb-3 text-[14px] font-bold text-navy-900">Destaques</legend>
        <div className="flex flex-wrap gap-2">
          {[
            ["mais-vendidos", "Mais vendidos"],
            ["mais-recentes", "Mais recentes"],
          ].map(([v, l]) => {
            const on = params.get("ordenar") === v;
            return (
              <button
                key={v}
                onClick={() => update({ ordenar: on ? null : v })}
                aria-pressed={on}
                className={`rounded-full border px-3 py-1.5 text-[12.5px] font-semibold transition-colors ${on ? "border-brand-600 bg-brand-600 text-white" : "border-navy-200 text-navy-700 hover:border-navy-300"}`}
              >
                {l}
              </button>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}

function Toggle({ label, on, onChange }: { label: string; on: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-3 text-[14px] text-navy-700">
      {label}
      <button
        type="button"
        role="switch"
        aria-checked={on}
        onClick={() => onChange(!on)}
        className={`relative h-6 w-10 rounded-full transition-colors ${on ? "bg-brand-600" : "bg-navy-200"}`}
      >
        <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${on ? "translate-x-[18px]" : "translate-x-0.5"}`} />
      </button>
    </label>
  );
}

export function SortSelect({ options }: { options: readonly { value: string; label: string }[] }) {
  const { params, update } = useCatalogParams();
  return (
    <label className="flex items-center gap-2 text-[13.5px] text-navy-500">
      <span className="hidden sm:inline">Ordenar por</span>
      <select
        value={params.get("ordenar") ?? "relevancia"}
        onChange={(e) => update({ ordenar: e.target.value === "relevancia" ? null : e.target.value })}
        className="input h-9 w-auto py-0 pr-9 text-[13.5px] font-semibold"
        aria-label="Ordenar produtos"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </label>
  );
}
