"use client";

import { useTransition } from "react";
import { Trash2 } from "lucide-react";
import { deleteProduct } from "@/app/admin/(panel)/produtos/actions";

export function DeleteProductButton({ id, name }: { id: string; name: string }) {
  const [pending, start] = useTransition();
  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => confirm(`Excluir "${name}" definitivamente? Para apenas esconder da loja, desmarque "Ativo".`) && start(() => deleteProduct(id))}
      className="btn btn-sm border border-red-200 bg-white text-red-600 hover:bg-red-50"
    >
      <Trash2 className="h-4 w-4" /> Excluir
    </button>
  );
}
