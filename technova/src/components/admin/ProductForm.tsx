"use client";

import Image from "next/image";
import Link from "next/link";
import { useActionState, useRef, useState } from "react";
import { ArrowUp, ArrowDown, Trash2, Plus, Upload, LoaderCircle, X } from "lucide-react";
import { saveProduct, type ProductFormState } from "@/app/admin/(panel)/produtos/actions";
import { slugify } from "@/lib/format";
import { submitWithoutReset } from "@/components/ui/submit";

export type ProductFormData = {
  id?: string;
  name: string;
  slug: string;
  sku: string;
  categoryId: string;
  shortDescription: string;
  description: string;
  howItWorks: string;
  price: string;
  salePrice: string;
  stock: number;
  active: boolean;
  featured: boolean;
  isDemo: boolean;
  specs: { label: string; value: string }[];
  images: { id: string; src: string }[];
};

export function ProductForm({ initial, categories }: { initial: ProductFormData; categories: { id: string; name: string }[] }) {
  const [state, action, pending] = useActionState<ProductFormState, FormData>(saveProduct, {});
  const [name, setName] = useState(initial.name);
  const [slug, setSlug] = useState(initial.slug);
  const [slugTouched, setSlugTouched] = useState(!!initial.id);
  const [specs, setSpecs] = useState(initial.specs.length ? initial.specs : [{ label: "", value: "" }]);
  const [images, setImages] = useState(initial.images);
  const [previews, setPreviews] = useState<string[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);
  const e = state.errors ?? {};

  const move = (i: number, dir: -1 | 1) =>
    setImages((list) => {
      const next = [...list];
      const j = i + dir;
      if (j < 0 || j >= next.length) return list;
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });

  return (
    <form onSubmit={submitWithoutReset(action)} className="grid gap-6 xl:grid-cols-[1fr_340px]">
      {initial.id && <input type="hidden" name="id" value={initial.id} />}
      <input type="hidden" name="specs" value={JSON.stringify(specs)} />
      <input type="hidden" name="imageOrder" value={JSON.stringify(images.map((i) => i.id))} />

      <div className="space-y-6">
        <Box title="Informações principais">
          <div className="grid gap-4 sm:grid-cols-2">
            <F label="Nome do produto" error={e.name} className="sm:col-span-2">
              <input name="name" value={name} onChange={(ev) => { setName(ev.target.value); if (!slugTouched) setSlug(slugify(ev.target.value)); }} className={`input ${e.name ? "input-error" : ""}`} required />
            </F>
            <F label="Endereço da página (slug)" error={e.slug} hint={`/produtos/${slug || "..."}`}>
              <input name="slug" value={slug} onChange={(ev) => { setSlugTouched(true); setSlug(ev.target.value); }} className={`input ${e.slug ? "input-error" : ""}`} />
            </F>
            <F label="Código (SKU)" error={e.sku}>
              <input name="sku" defaultValue={initial.sku} className={`input ${e.sku ? "input-error" : ""}`} />
            </F>
            <F label="Categoria" error={e.categoryId} className="sm:col-span-2">
              <select name="categoryId" defaultValue={initial.categoryId} className={`input ${e.categoryId ? "input-error" : ""}`} required>
                <option value="">Selecione</option>
                {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </F>
            <F label="Resumo (aparece no card e no topo da página)" error={e.shortDescription} className="sm:col-span-2">
              <textarea name="shortDescription" rows={2} maxLength={300} defaultValue={initial.shortDescription} className="input" />
            </F>
            <F label="Descrição completa" error={e.description} hint="Separe parágrafos com uma linha em branco." className="sm:col-span-2">
              <textarea name="description" rows={7} defaultValue={initial.description} className="input" />
            </F>
            <F label="Como funciona / instalação" error={e.howItWorks} className="sm:col-span-2">
              <textarea name="howItWorks" rows={4} defaultValue={initial.howItWorks} className="input" />
            </F>
          </div>
        </Box>

        <Box title="Imagens">
          {images.length > 0 && (
            <ul className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {images.map((img, i) => (
                <li key={img.id} className="group relative overflow-hidden rounded-xl border border-navy-100 bg-surface">
                  <Image src={img.src} alt="" width={200} height={200} unoptimized className="aspect-square w-full object-cover" />
                  {i === 0 && <span className="absolute left-2 top-2 rounded bg-brand-600 px-1.5 py-0.5 text-[10px] font-bold uppercase text-white">Principal</span>}
                  <div className="absolute inset-x-0 bottom-0 flex justify-center gap-1 bg-gradient-to-t from-navy-950/70 to-transparent p-2">
                    <IconBtn label="Mover para a esquerda" onClick={() => move(i, -1)} disabled={i === 0}><ArrowUp className="h-3.5 w-3.5 -rotate-90" /></IconBtn>
                    <IconBtn label="Mover para a direita" onClick={() => move(i, 1)} disabled={i === images.length - 1}><ArrowDown className="h-3.5 w-3.5 -rotate-90" /></IconBtn>
                    <IconBtn label="Remover imagem" onClick={() => setImages((l) => l.filter((x) => x.id !== img.id))}><Trash2 className="h-3.5 w-3.5" /></IconBtn>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-navy-200 px-4 py-8 text-center transition-colors hover:border-brand-600 hover:bg-brand-50/40">
            <Upload className="h-6 w-6 text-brand-600" />
            <span className="mt-2 text-[14px] font-semibold text-navy-900">Enviar fotos</span>
            <span className="text-[12.5px] text-navy-400">JPG, PNG, WebP ou AVIF · até 4 MB cada · recomendado 1200×1200 px</span>
            <input
              ref={fileRef}
              type="file"
              name="newImages"
              accept="image/jpeg,image/png,image/webp,image/avif"
              multiple
              className="sr-only"
              onChange={(ev) => setPreviews(Array.from(ev.target.files ?? []).map((f) => URL.createObjectURL(f)))}
            />
          </label>
          {previews.length > 0 && (
            <div className="mt-3">
              <div className="flex items-center justify-between">
                <p className="text-[12.5px] font-semibold text-navy-600">{previews.length} nova(s) imagem(ns) — serão adicionadas ao salvar</p>
                <button type="button" onClick={() => { if (fileRef.current) fileRef.current.value = ""; setPreviews([]); }} className="flex items-center gap-1 text-[12.5px] text-navy-500 hover:text-red-600"><X className="h-3.5 w-3.5" /> Limpar</button>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {previews.map((p) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={p} src={p} alt="" className="h-16 w-16 rounded-lg border border-navy-100 object-cover" />
                ))}
              </div>
            </div>
          )}
          {e.images && <p className="field-error">{e.images}</p>}
          <F label="Ou adicionar por endereço (URL)" error={e.imageUrl} className="mt-4">
            <input name="imageUrl" placeholder="https://..." className={`input ${e.imageUrl ? "input-error" : ""}`} />
          </F>
        </Box>

        <Box title="Características técnicas">
          <ul className="space-y-2">
            {specs.map((s, i) => (
              <li key={i} className="grid grid-cols-[1fr_1.4fr_auto] gap-2">
                <input aria-label="Característica" placeholder="Ex.: Resolução" value={s.label} onChange={(ev) => setSpecs((l) => l.map((x, j) => (j === i ? { ...x, label: ev.target.value } : x)))} className="input h-10" />
                <input aria-label="Valor" placeholder="Ex.: Full HD 1080p" value={s.value} onChange={(ev) => setSpecs((l) => l.map((x, j) => (j === i ? { ...x, value: ev.target.value } : x)))} className="input h-10" />
                <button type="button" onClick={() => setSpecs((l) => l.filter((_, j) => j !== i))} className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-400 hover:bg-red-50 hover:text-red-600" aria-label="Remover característica"><Trash2 className="h-4 w-4" /></button>
              </li>
            ))}
          </ul>
          {e.specs && <p className="field-error">{e.specs}</p>}
          <button type="button" onClick={() => setSpecs((l) => [...l, { label: "", value: "" }])} className="btn btn-sm btn-ghost mt-3 border border-navy-200"><Plus className="h-4 w-4" /> Adicionar característica</button>
        </Box>
      </div>

      <div className="space-y-6 xl:sticky xl:top-6 xl:self-start">
        <Box title="Preço e estoque">
          <div className="space-y-4">
            <F label="Preço (R$)" error={e.price}>
              <input name="price" inputMode="decimal" defaultValue={initial.price} placeholder="0,00" className={`input ${e.price ? "input-error" : ""}`} required />
            </F>
            <F label="Preço promocional (R$)" error={e.salePrice} hint="Deixe vazio se não houver promoção.">
              <input name="salePrice" inputMode="decimal" defaultValue={initial.salePrice} placeholder="0,00" className={`input ${e.salePrice ? "input-error" : ""}`} />
            </F>
            <F label="Estoque (unidades)" error={e.stock}>
              <input name="stock" type="number" min={0} step={1} defaultValue={initial.stock} className={`input ${e.stock ? "input-error" : ""}`} required />
            </F>
          </div>
        </Box>
        <Box title="Visibilidade">
          <div className="space-y-3">
            <Check name="active" label="Ativo (visível na loja)" defaultChecked={initial.active} />
            <Check name="featured" label="Destaque na página inicial" defaultChecked={initial.featured} />
            <Check name="isDemo" label="Produto demonstrativo" defaultChecked={initial.isDemo} />
          </div>
        </Box>
        {state.error && <p role="alert" className="rounded-lg bg-red-50 px-3 py-2.5 text-[13.5px] font-medium text-red-700">{state.error}</p>}
        <div className="flex gap-3">
          <button disabled={pending} className="btn btn-primary flex-1">{pending && <LoaderCircle className="h-4 w-4 animate-spin" />} Salvar produto</button>
          <Link href="/admin/produtos" className="btn btn-ghost border border-navy-200">Cancelar</Link>
        </div>
      </div>
    </form>
  );
}

function Box({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-navy-100 bg-white p-5 sm:p-6">
      <h2 className="mb-4 text-[15px] font-bold">{title}</h2>
      {children}
    </section>
  );
}

function F({ label, error, hint, className = "", children }: { label: string; error?: string; hint?: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <label className="label">{label}</label>
      {children}
      {error ? <p className="field-error">{error}</p> : hint ? <p className="mt-1 text-[12px] text-navy-400">{hint}</p> : null}
    </div>
  );
}

function Check({ name, label, defaultChecked }: { name: string; label: string; defaultChecked: boolean }) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 text-[14px] text-navy-800">
      <input type="checkbox" name={name} defaultChecked={defaultChecked} className="h-4 w-4 accent-brand-600" /> {label}
    </label>
  );
}

function IconBtn({ label, onClick, disabled, children }: { label: string; onClick: () => void; disabled?: boolean; children: React.ReactNode }) {
  return (
    <button type="button" onClick={onClick} disabled={disabled} aria-label={label} title={label} className="flex h-7 w-7 items-center justify-center rounded-md bg-white/90 text-navy-800 hover:bg-white disabled:opacity-40">
      {children}
    </button>
  );
}
