import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Benefits } from "@/components/home/Benefits";

export const metadata: Metadata = {
  title: "Sobre a TECHNOVA",
  description: "A TECHNOVA reúne tecnologia para casas inteligentes: segurança, automação e praticidade.",
  alternates: { canonical: "/sobre" },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_90%_0%,rgba(1,83,252,.45),transparent_60%)]" />
        <div className="container relative py-16 sm:py-24">
          <p className="eyebrow text-brand-300">Sobre nós</p>
          <h1 className="mt-3 max-w-3xl text-balance text-[34px] font-extrabold leading-[1.08] text-white sm:text-[50px]">
            Tecnologia para tornar cada casa mais segura, prática e inteligente
          </h1>
        </div>
      </section>
      <section className="container max-w-3xl pt-14">
        <div className="prose-store text-[16px]">
          <p>
            A TECHNOVA nasceu para aproximar as pessoas da casa inteligente. Reunimos câmeras, sensores, fechaduras digitais, tomadas e
            interruptores conectados em um só lugar, com informações claras para você escolher com segurança o que faz sentido para a sua rotina.
          </p>
          <p>
            Acreditamos que automação residencial não precisa ser complicada: dá para começar com um único dispositivo e evoluir aos poucos,
            criando rotinas que economizam tempo, trazem tranquilidade e deixam a casa do seu jeito.
          </p>
          <h2>Nosso compromisso</h2>
          <ul>
            <li>Descrições e especificações transparentes, para você saber exatamente o que está comprando.</li>
            <li>Atendimento próximo, antes e depois da compra.</li>
            <li>Respeito aos seus direitos de consumidor e à proteção dos seus dados pessoais.</li>
          </ul>
        </div>
      </section>
      <section className="container pt-14">
        <Benefits />
        <div className="mt-10 text-center">
          <Link href="/produtos" className="btn btn-primary btn-lg">Conhecer produtos <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </>
  );
}
