"use client";

import { useActionState } from "react";
import { CircleCheck, LoaderCircle, Send } from "lucide-react";
import { sendContact, type ContactState } from "./actions";
import { submitWithoutReset } from "@/components/ui/submit";

export function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(sendContact, {});
  if (state.ok) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-14 text-center">
        <CircleCheck className="h-10 w-10 text-emerald-600" />
        <p className="mt-4 text-[18px] font-bold text-navy-900">Mensagem enviada!</p>
        <p className="mt-1 max-w-sm text-[14.5px] text-navy-600">Recebemos seu contato e responderemos pelo e-mail informado o mais breve possível.</p>
      </div>
    );
  }
  const e = state.errors ?? {};
  return (
    <form onSubmit={submitWithoutReset(action)} className="grid gap-4 sm:grid-cols-2">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div>
        <label htmlFor="c-name" className="label">Nome</label>
        <input id="c-name" name="name" autoComplete="name" className={`input ${e.name ? "input-error" : ""}`} />
        {e.name && <p className="field-error">{e.name}</p>}
      </div>
      <div>
        <label htmlFor="c-email" className="label">E-mail</label>
        <input id="c-email" name="email" type="email" autoComplete="email" className={`input ${e.email ? "input-error" : ""}`} />
        {e.email && <p className="field-error">{e.email}</p>}
      </div>
      <div>
        <label htmlFor="c-phone" className="label">Telefone (opcional)</label>
        <input id="c-phone" name="phone" type="tel" autoComplete="tel" className="input" />
      </div>
      <div>
        <label htmlFor="c-subject" className="label">Assunto</label>
        <select id="c-subject" name="subject" defaultValue="" className={`input ${e.subject ? "input-error" : ""}`}>
          <option value="" disabled>Selecione</option>
          <option>Dúvida sobre produto</option>
          <option>Acompanhamento de pedido</option>
          <option>Trocas e devoluções</option>
          <option>Orçamento para empresa</option>
          <option>Outro assunto</option>
        </select>
        {e.subject && <p className="field-error">{e.subject}</p>}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="c-message" className="label">Mensagem</label>
        <textarea id="c-message" name="message" rows={6} maxLength={3000} className={`input ${e.message ? "input-error" : ""}`} />
        {e.message && <p className="field-error">{e.message}</p>}
      </div>
      {state.error && <p role="alert" className="field-error sm:col-span-2">{state.error}</p>}
      <div className="sm:col-span-2">
        <button disabled={pending} className="btn btn-primary btn-lg w-full sm:w-auto">
          {pending ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />} Enviar mensagem
        </button>
        <p className="mt-3 text-[12.5px] text-navy-400">Ao enviar, você concorda com o uso dos dados para responder ao seu contato, conforme nossa política de privacidade.</p>
      </div>
    </form>
  );
}
