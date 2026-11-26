import { Sparkles, BadgeCheck, ShieldCheck, Headset, Truck } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function Benefits({ variant = "full" }: { variant?: "full" | "compact" }) {
  const items = [
    { Icon: Sparkles, title: "Tecnologia que facilita", text: "Dispositivos pensados para simplificar a rotina, controlados pelo celular ou pela voz." },
    { Icon: BadgeCheck, title: "Produtos selecionados", text: "Curadoria de dispositivos compatíveis entre si para sua casa funcionar como um todo." },
    { Icon: ShieldCheck, title: "Compra segura", text: "Site com conexão criptografada e dados pessoais tratados conforme a LGPD." },
    { Icon: Headset, title: "Atendimento ao cliente", text: "Equipe pronta para tirar dúvidas antes e depois da compra." },
    ...(siteConfig.shipsNationwide
      ? [{ Icon: Truck, title: "Entrega para todo o Brasil", text: "Enviamos para todas as regiões do país." }]
      : []),
  ];

  if (variant === "compact") {
    return (
      <ul className="grid gap-3 sm:grid-cols-2">
        {items.slice(0, 4).map(({ Icon, title }) => (
          <li key={title} className="flex items-center gap-2.5 text-[13.5px] font-medium text-navy-700">
            <Icon className="h-[18px] w-[18px] shrink-0 text-brand-600" /> {title}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={`grid gap-4 sm:grid-cols-2 ${items.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"}`}>
      {items.map(({ Icon, title, text }) => (
        <li key={title} className="rounded-2xl border border-navy-100 bg-white p-6 transition-shadow hover:shadow-card">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <Icon className="h-6 w-6" strokeWidth={1.8} />
          </span>
          <h3 className="mt-4 text-[16px] font-bold">{title}</h3>
          <p className="mt-1.5 text-[14px] leading-relaxed text-navy-500">{text}</p>
        </li>
      ))}
    </ul>
  );
}
