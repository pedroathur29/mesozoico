import type { Metadata } from "next";
import Image from "next/image";
import { LoginForm } from "./LoginForm";
import logo from "../../../../public/brand/technova-logo.png";

export const metadata: Metadata = { title: "Acesso ao painel", robots: { index: false, follow: false } };

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ next?: string }> }) {
  const { next } = await searchParams;
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-4 py-10">
      <div className="w-full max-w-[400px]">
        <Image src={logo} alt="TECHNOVA" className="mx-auto h-auto w-[200px]" priority />
        <div className="mt-8 rounded-2xl border border-navy-100 bg-white p-7 shadow-card">
          <h1 className="text-[20px] font-extrabold">Painel administrativo</h1>
          <p className="mt-1 text-[14px] text-navy-500">Acesso restrito à equipe TECHNOVA.</p>
          <LoginForm next={next ?? ""} />
        </div>
      </div>
    </div>
  );
}
