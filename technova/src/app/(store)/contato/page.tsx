import type { Metadata } from "next";
import { Mail, Phone, Clock, MapPin, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/config";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Fale conosco",
  description: "Tire dúvidas sobre produtos, pedidos, trocas e devoluções com a equipe TECHNOVA.",
  alternates: { canonical: "/contato" },
};

export default function ContactPage() {
  const wa = whatsappLink("Olá! Vim pela página de contato da TECHNOVA.");
  const channels = [
    wa && { Icon: MessageCircle, label: "WhatsApp", value: "Conversar agora", href: wa },
    siteConfig.contactEmail && { Icon: Mail, label: "E-mail", value: siteConfig.contactEmail, href: `mailto:${siteConfig.contactEmail}` },
    siteConfig.contactPhone && { Icon: Phone, label: "Telefone", value: siteConfig.contactPhone, href: `tel:${siteConfig.contactPhone.replace(/\D/g, "")}` },
    siteConfig.businessHours && { Icon: Clock, label: "Horário de atendimento", value: siteConfig.businessHours },
    siteConfig.address && { Icon: MapPin, label: "Endereço", value: siteConfig.address },
  ].filter(Boolean) as { Icon: typeof Mail; label: string; value: string; href?: string }[];

  return (
    <div className="container pb-8 pt-10 sm:pt-14">
      <div className="max-w-2xl">
        <p className="eyebrow">Atendimento</p>
        <h1 className="mt-2 text-[30px] font-extrabold sm:text-[40px]">Fale com a TECHNOVA</h1>
        <p className="mt-3 text-[16px] leading-relaxed text-navy-500">
          Dúvidas sobre qual produto escolher, compatibilidade, pedidos ou trocas? Envie sua mensagem e nossa equipe responde pelo e-mail informado.
        </p>
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
        <div className="rounded-2xl border border-navy-100 p-5 sm:p-8"><ContactForm /></div>
        <aside className="space-y-3">
          {channels.map(({ Icon, label, value, href }) => {
            const inner = (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600"><Icon className="h-5 w-5" /></span>
                <span>
                  <span className="block text-[12.5px] font-semibold uppercase tracking-wider text-navy-400">{label}</span>
                  <span className="block text-[15px] font-semibold text-navy-900">{value}</span>
                </span>
              </>
            );
            return href ? (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-navy-100 p-4 transition-colors hover:border-brand-200 hover:bg-brand-50/40">{inner}</a>
            ) : (
              <div key={label} className="flex items-center gap-4 rounded-2xl border border-navy-100 p-4">{inner}</div>
            );
          })}
          <div className="rounded-2xl bg-navy-900 p-6 text-white">
            <p className="text-[16px] font-bold text-white">Já fez um pedido?</p>
            <p className="mt-1 text-[14px] text-navy-200">Consulte o andamento com o número do pedido e seu e-mail.</p>
            <a href="/conta" className="btn btn-white btn-sm mt-4">Acompanhar pedido</a>
          </div>
        </aside>
      </div>
    </div>
  );
}
