"use client";

import { useActionState, useState } from "react";
import { Eye, EyeOff, LoaderCircle, Lock } from "lucide-react";
import { loginAction, type LoginState } from "../actions";
import { submitWithoutReset } from "@/components/ui/submit";

export function LoginForm({ next }: { next: string }) {
  const [state, action, pending] = useActionState<LoginState, FormData>(loginAction, {});
  const [show, setShow] = useState(false);
  return (
    <form onSubmit={submitWithoutReset(action)} className="mt-6 space-y-4">
      <input type="hidden" name="next" value={next} />
      <div>
        <label htmlFor="email" className="label">E-mail</label>
        <input id="email" name="email" type="email" autoComplete="username" required className="input" />
      </div>
      <div>
        <label htmlFor="password" className="label">Senha</label>
        <div className="relative">
          <input id="password" name="password" type={show ? "text" : "password"} autoComplete="current-password" required className="input pr-11" />
          <button type="button" onClick={() => setShow((s) => !s)} className="absolute right-1 top-1 flex h-9 w-9 items-center justify-center rounded-md text-navy-400 hover:text-navy-700" aria-label={show ? "Ocultar senha" : "Mostrar senha"}>
            {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {state.error && <p role="alert" className="rounded-lg bg-red-50 px-3 py-2.5 text-[13.5px] font-medium text-red-700">{state.error}</p>}
      <button disabled={pending} className="btn btn-primary w-full">
        {pending ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Lock className="h-4 w-4" />} Entrar
      </button>
    </form>
  );
}
