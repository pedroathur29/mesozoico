// Configuração pública da loja. Tudo vem de variáveis de ambiente para que
// dados reais (WhatsApp, CNPJ, redes sociais) sejam definidos na hospedagem,
// sem precisar alterar o código.

const env = (v: string | undefined) => (v && v.trim() ? v.trim() : undefined);
const flag = (v: string | undefined, fallback = false) =>
  v === undefined || v === "" ? fallback : ["1", "true", "sim", "yes"].includes(v.toLowerCase());

export const siteConfig = {
  name: "TECHNOVA",
  tagline: "Tecnologia para casas inteligentes",
  description:
    "Câmeras de segurança, sensores, fechaduras digitais, tomadas e interruptores inteligentes para deixar sua casa mais segura e prática.",
  url: (env(process.env.NEXT_PUBLIC_SITE_URL) ?? "http://localhost:3000").replace(/\/$/, ""),
  whatsappNumber: env(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER)?.replace(/\D/g, ""),
  contactEmail: env(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  contactPhone: env(process.env.NEXT_PUBLIC_CONTACT_PHONE),
  legalName: env(process.env.NEXT_PUBLIC_COMPANY_LEGAL_NAME),
  cnpj: env(process.env.NEXT_PUBLIC_COMPANY_CNPJ),
  address: env(process.env.NEXT_PUBLIC_COMPANY_ADDRESS),
  businessHours: env(process.env.NEXT_PUBLIC_BUSINESS_HOURS),
  social: {
    instagram: env(process.env.NEXT_PUBLIC_INSTAGRAM_URL),
    facebook: env(process.env.NEXT_PUBLIC_FACEBOOK_URL),
    youtube: env(process.env.NEXT_PUBLIC_YOUTUBE_URL),
    tiktok: env(process.env.NEXT_PUBLIC_TIKTOK_URL),
  },
  shipsNationwide: flag(process.env.NEXT_PUBLIC_SHIPS_NATIONWIDE),
  requireCpf: flag(process.env.NEXT_PUBLIC_REQUIRE_CPF, true),
  showDemoNotice: flag(process.env.NEXT_PUBLIC_SHOW_DEMO_NOTICE, true),
  /** Parcelamento sem juros exibido nos preços. 0 = não exibir (defina só quando o meio de pagamento oferecer). */
  maxInstallments: Math.max(0, Math.min(24, Number(process.env.NEXT_PUBLIC_MAX_INSTALLMENTS ?? 0) || 0)),
};

export function whatsappLink(message?: string) {
  if (!siteConfig.whatsappNumber) return undefined;
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${siteConfig.whatsappNumber}${text}`;
}
