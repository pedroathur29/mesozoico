import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lock, Thermometer, Lightbulb, Cctv } from "lucide-react";
import house from "../../../public/hero/casa-inteligente.svg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_85%_10%,rgba(1,83,252,.45),transparent_60%),radial-gradient(800px_500px_at_0%_100%,rgba(1,83,252,.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="container relative grid items-center gap-8 pb-10 pt-12 sm:pt-16 lg:grid-cols-[1fr_1.1fr] lg:gap-6 lg:pb-16 lg:pt-20">
        <div className="max-w-xl animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-200">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" /> Tecnologia para casas inteligentes
          </p>
          <h1 className="mt-6 text-balance text-[38px] font-extrabold leading-[1.04] tracking-[-0.03em] text-white sm:text-[52px] lg:text-[60px]">
            Sua casa mais <span className="text-brand-400">inteligente</span> começa aqui
          </h1>
          <p className="mt-5 max-w-md text-[16.5px] leading-relaxed text-navy-100 sm:text-[18px]">
            Tecnologia, segurança e praticidade para transformar seu dia a dia.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/produtos" className="btn btn-primary btn-lg uppercase tracking-wide shadow-[0_12px_30px_-10px_rgba(1,83,252,.9)]">
              Conhecer produtos <ArrowRight className="h-[18px] w-[18px]" />
            </Link>
            <Link href="/contato" className="btn btn-lg border border-white/20 bg-white/[.04] text-white hover:bg-white/10">
              Falar com a equipe
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[640px] lg:max-w-none">
          <Image src={house} alt="Ilustração de uma casa moderna com câmeras, fechadura digital e iluminação conectadas" priority className="h-auto w-full drop-shadow-[0_30px_60px_rgba(0,0,0,.35)]" />
          <StatusCard className="left-[2%] top-[8%] [animation-delay:.2s]" icon={<Lock className="h-4 w-4" />} title="Porta da frente" value="Trancada" />
          <StatusCard className="right-[0%] top-[2%] [animation-delay:.35s]" icon={<Cctv className="h-4 w-4" />} title="Câmera externa" value="Ao vivo" live />
          <StatusCard className="bottom-[22%] left-[0%] hidden sm:flex [animation-delay:.5s]" icon={<Thermometer className="h-4 w-4" />} title="Sala de estar" value="23 °C" />
          <StatusCard className="bottom-[16%] right-[2%] [animation-delay:.65s]" icon={<Lightbulb className="h-4 w-4" />} title="Cena noite" value="Ativada" />
        </div>
      </div>
    </section>
  );
}

function StatusCard({ className, icon, title, value, live }: { className: string; icon: React.ReactNode; title: string; value: string; live?: boolean }) {
  return (
    <div className={`absolute flex animate-fade-up items-center gap-2.5 rounded-xl border border-white/15 bg-navy-900/70 py-2 pl-2 pr-3.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,.5)] backdrop-blur-md ${className}`} aria-hidden>
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">{icon}</span>
      <span className="leading-tight">
        <span className="block text-[10.5px] font-medium text-navy-200">{title}</span>
        <span className="flex items-center gap-1.5 text-[13px] font-bold text-white">
          {live && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />}
          {value}
        </span>
      </span>
    </div>
  );
}
