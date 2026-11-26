import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/config";

export const metadata = { title: "Fale conosco" };

export default function Contato() {
  const wa = whatsappLink("Olá! Vim pelo site da TECHNOVA.");
  const items = [
    wa && { Icon: MessageCircle, label: "WhatsApp", value: "Conversar agora", href: wa },
    siteConfig.contactEmail && { Icon: Mail, label: "E-mail", value: siteConfig.contactEmail, href: `mailto:${siteConfig.contactEmail}` },
    siteConfig.contactPhone && { Icon: Phone, label: "Telefone", value: siteConfig.contactPhone, href: `tel:${siteConfig.contactPhone}` },
    siteConfig.businessHours && { Icon: Clock, label: "Horário", value: siteConfig.businessHours },
  ].filter(Boolean) as { Icon: typeof Mail; label: string; value: string; href?: string }[];
  return (
    <div className="container max-w-3xl pb-8 pt-10 sm:pt-14">
      <p className="eyebrow">Atendimento</p>
      <h1 className="mt-2 text-[30px] font-extrabold sm:text-[40px]">Fale com a TECHNOVA</h1>
      <p className="mt-3 text-[16px] text-navy-500">Dúvidas sobre produtos, compatibilidade, pedidos ou trocas? Fale com a nossa equipe.</p>
      {items.length ? (
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {items.map(({ Icon, label, value, href }) => (
            <li key={label}>
              <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-navy-100 p-5 hover:border-brand-200 hover:bg-brand-50/40">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600"><Icon className="h-5 w-5" /></span>
                <span><span className="block text-[12.5px] font-semibold uppercase tracking-wider text-navy-400">{label}</span><span className="block font-semibold">{value}</span></span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 rounded-2xl border border-dashed border-navy-200 p-8 text-center text-navy-500">Os canais de atendimento serão divulgados em breve.</p>
      )}
    </div>
  );
}
