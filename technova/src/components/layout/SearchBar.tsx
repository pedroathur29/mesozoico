"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { Search, LoaderCircle, ArrowRight } from "lucide-react";
import { formatPrice } from "@/lib/format";

type Suggestion = { slug: string; name: string; image: string; finalPriceCents: number; category: string };

export function SearchBar({ className = "" }: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [q, setQ] = useState(pathname === "/produtos" ? params.get("q") ?? "" : "");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Suggestion[]>([]);
  const [active, setActive] = useState(-1);
  const boxRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    const term = q.trim();
    if (term.length < 2) {
      setResults([]);
      return;
    }
    const ctrl = new AbortController();
    const t = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(term)}`, { signal: ctrl.signal });
        if (res.ok) setResults((await res.json()).items);
      } catch {
        /* requisição cancelada */
      } finally {
        setLoading(false);
      }
    }, 180);
    return () => {
      clearTimeout(t);
      ctrl.abort();
    };
  }, [q]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!boxRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (active >= 0 && results[active]) {
      router.push(`/produtos/${results[active].slug}`);
    } else {
      const term = q.trim();
      router.push(term ? `/produtos?q=${encodeURIComponent(term)}` : "/produtos");
    }
    setOpen(false);
  }

  function onKey(e: React.KeyboardEvent) {
    if (!results.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setOpen(true);
      setActive((a) => (a + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a <= 0 ? results.length - 1 : a - 1));
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  const showPanel = open && q.trim().length >= 2;

  return (
    <div ref={boxRef} className={`relative ${className}`}>
      <form role="search" onSubmit={submit} className="relative">
        <label htmlFor={`${listId}-input`} className="sr-only">Buscar produtos</label>
        <input
          id={`${listId}-input`}
          type="search"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
            setActive(-1);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKey}
          placeholder="Buscar câmeras, sensores, fechaduras..."
          autoComplete="off"
          role="combobox"
          aria-expanded={showPanel}
          aria-controls={listId}
          aria-autocomplete="list"
          className="h-11 w-full rounded-full border border-navy-100 bg-surface pl-5 pr-14 text-[14.5px] text-navy-900 placeholder:text-navy-300 transition-[border-color,box-shadow,background-color] focus:border-brand-600 focus:bg-white focus:shadow-focus focus:outline-none [&::-webkit-search-cancel-button]:hidden"
        />
        <button
          type="submit"
          aria-label="Buscar"
          className="absolute right-1 top-1 flex h-9 w-11 items-center justify-center rounded-full bg-brand-600 text-white transition-colors hover:bg-navy-900"
        >
          {loading ? <LoaderCircle className="h-[18px] w-[18px] animate-spin" /> : <Search className="h-[18px] w-[18px]" strokeWidth={2.2} />}
        </button>
      </form>

      {showPanel && (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-50 animate-fade-in overflow-hidden rounded-xl border border-navy-100 bg-white shadow-lift">
          {results.length ? (
            <ul id={listId} role="listbox" className="max-h-[60vh] overflow-y-auto py-1.5">
              {results.map((r, i) => (
                <li key={r.slug} role="option" aria-selected={i === active}>
                  <Link
                    href={`/produtos/${r.slug}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 transition-colors ${i === active ? "bg-brand-50" : "hover:bg-surface"}`}
                  >
                    <Image src={r.image} alt="" width={44} height={44} unoptimized className="h-11 w-11 rounded-lg border border-navy-100 object-cover" />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[13.5px] font-semibold text-navy-900">{r.name}</span>
                      <span className="block text-[12px] text-navy-400">{r.category}</span>
                    </span>
                    <span className="text-[13.5px] font-bold text-navy-900">{formatPrice(r.finalPriceCents)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            !loading && <p className="px-4 py-4 text-[13.5px] text-navy-500">Nenhum produto encontrado para “{q.trim()}”.</p>
          )}
          <button
            onClick={submit}
            className="flex w-full items-center justify-between border-t border-navy-100 px-4 py-3 text-[13px] font-semibold text-brand-600 hover:bg-brand-50"
          >
            Ver todos os resultados para “{q.trim()}” <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
