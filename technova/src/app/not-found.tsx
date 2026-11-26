import Link from "next/link";
import Image from "next/image";
import symbol from "../../public/brand/technova-simbolo.png";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-6 text-center">
      <Image src={symbol} alt="TECHNOVA" className="h-auto w-24" />
      <p className="mt-8 text-[13px] font-bold uppercase tracking-[0.16em] text-brand-600">Erro 404</p>
      <h1 className="mt-2 text-[30px] font-extrabold sm:text-[38px]">Página não encontrada</h1>
      <p className="mt-2 max-w-md text-navy-500">O endereço pode ter mudado ou o produto não está mais disponível.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-primary btn-lg">Ir para a página inicial</Link>
        <Link href="/produtos" className="btn btn-outline btn-lg">Ver produtos</Link>
      </div>
    </div>
  );
}
