"use client";

import { startTransition } from "react";

/**
 * Envia um formulário para uma Server Action sem o reset automático do React 19.
 * Assim, quando a validação falha, o que a pessoa digitou continua nos campos.
 */
export function submitWithoutReset(action: (fd: FormData) => void) {
  return (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const fd = new FormData(ev.currentTarget);
    startTransition(() => action(fd));
  };
}
