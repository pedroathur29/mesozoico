"use client";

import Link from "next/link";

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-[28px] font-extrabold">Algo deu errado</h1>
      <p className="mt-2 max-w-md text-navy-500">Tivemos um problema ao carregar esta página. Tente novamente em instantes.</p>
      <div className="mt-6 flex gap-3">
        <button onClick={reset} className="btn btn-primary">Tentar novamente</button>
        <Link href="/" className="btn btn-outline">Página inicial</Link>
      </div>
    </div>
  );
}
