"use client";

import { useActionState, useState } from "react";
import { Star, CircleCheck } from "lucide-react";
import { submitReview, type ReviewState } from "@/app/(store)/produtos/[slug]/actions";
import { submitWithoutReset } from "@/components/ui/submit";

export function ReviewForm({ productId }: { productId: string }) {
  const [state, action, pending] = useActionState<ReviewState, FormData>(submitReview, {});
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  if (state.ok) {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-[14px] text-emerald-800">
        <CircleCheck className="mt-0.5 h-5 w-5 shrink-0" />
        <p>Obrigado! Sua avaliação foi recebida e será publicada após a moderação da equipe.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submitWithoutReset(action)} className="space-y-4 rounded-2xl border border-navy-100 bg-surface p-5 sm:p-6">
      <p className="text-[16px] font-bold text-navy-900">Avalie este produto</p>
      <input type="hidden" name="productId" value={productId} />
      <input type="hidden" name="rating" value={rating} />
      {/* campo armadilha contra robôs: pessoas não veem nem preenchem */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div>
        <span className="label">Sua nota</span>
        <div className="flex gap-1" onMouseLeave={() => setHover(0)} role="radiogroup" aria-label="Nota">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={rating === n}
              aria-label={`${n} ${n === 1 ? "estrela" : "estrelas"}`}
              onClick={() => setRating(n)}
              onMouseEnter={() => setHover(n)}
              className="p-0.5"
            >
              <Star className={`h-7 w-7 transition-colors ${(hover || rating) >= n ? "text-amber-400" : "text-navy-200"}`} fill="currentColor" strokeWidth={0} />
            </button>
          ))}
        </div>
        {state.errors?.rating && <p className="field-error">{state.errors.rating}</p>}
      </div>
      <div>
        <label htmlFor="rv-name" className="label">Seu nome</label>
        <input id="rv-name" name="authorName" maxLength={60} className={`input ${state.errors?.authorName ? "input-error" : ""}`} />
        {state.errors?.authorName && <p className="field-error">{state.errors.authorName}</p>}
      </div>
      <div>
        <label htmlFor="rv-comment" className="label">Comentário</label>
        <textarea id="rv-comment" name="comment" rows={4} maxLength={1500} className={`input ${state.errors?.comment ? "input-error" : ""}`} placeholder="Conte como foi sua experiência com o produto." />
        {state.errors?.comment && <p className="field-error">{state.errors.comment}</p>}
      </div>
      {state.message && <p className="field-error">{state.message}</p>}
      <button disabled={pending} className="btn btn-primary">{pending ? "Enviando..." : "Enviar avaliação"}</button>
      <p className="text-[12px] text-navy-400">Avaliações passam por moderação antes de serem publicadas.</p>
    </form>
  );
}
