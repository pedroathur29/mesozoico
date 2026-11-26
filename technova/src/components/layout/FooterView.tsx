import Link from "next/link";
import { Instagram, Facebook, Youtube, Mail, Phone, Clock, MapPin, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/config";
import { Logo } from "./Logo";

function TikTok(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z" />
    </svg>
  );
}

export function FooterView({ categories, showAccount = true }: { categories: { slug: string; name: string }[]; showAccount?: boolean }) {
  const wa = whatsappLink("Olá! Vim pelo site da TECHNOVA.");
  const socials = [
    { href: siteConfig.social.instagram, label: "Instagram", Icon: Instagram },
    { href: siteConfig.social.facebook, label: "Facebook", Icon: Facebook },
    { href: siteConfig.social.youtube, label: "YouTube", Icon: Youtube },
    { href: siteConfig.social.tiktok, label: "TikTok", Icon: TikTok },
  ].filter((s) => s.href);
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden bg-navy-900 text-navy-100">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-brand-600/20 blur-3xl" />
      <div className="container relative grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-12">
        <div>
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-navy-200">
            Tecnologia para casas inteligentes: segurança, automação e praticidade para o seu dia a dia.
          </p>
          {socials.length > 0 && (
            <ul className="mt-6 flex gap-2">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[.06] text-white transition-colors hover:bg-brand-600">
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <FooterCol title="Categorias">
          {categories.map((c) => (
            <FooterLink key={c.slug} href={`/produtos?categoria=${c.slug}`}>{c.name}</FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Institucional">
          <FooterLink href="/sobre">Sobre a TECHNOVA</FooterLink>
          <FooterLink href="/contato">Fale conosco</FooterLink>
          {showAccount && <FooterLink href="/conta">Acompanhar pedido</FooterLink>}
          <FooterLink href="/politicas/trocas-e-devolucoes">Trocas e devoluções</FooterLink>
          <FooterLink href="/politicas/privacidade">Política de privacidade</FooterLink>
          <FooterLink href="/politicas/termos-de-uso">Termos de uso</FooterLink>
        </FooterCol>

        <FooterCol title="Atendimento">
          {wa && (
            <li>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-[14px] text-navy-100 hover:text-white">
                <MessageCircle className="h-4 w-4 text-brand-300" /> WhatsApp
              </a>
            </li>
          )}
          {siteConfig.contactPhone && (
            <li className="flex items-center gap-2.5 text-[14px]"><Phone className="h-4 w-4 text-brand-300" /> {siteConfig.contactPhone}</li>
          )}
          {siteConfig.contactEmail && (
            <li>
              <a href={`mailto:${siteConfig.contactEmail}`} className="flex items-center gap-2.5 text-[14px] hover:text-white">
                <Mail className="h-4 w-4 text-brand-300" /> {siteConfig.contactEmail}
              </a>
            </li>
          )}
          {siteConfig.businessHours && (
            <li className="flex items-center gap-2.5 text-[14px]"><Clock className="h-4 w-4 text-brand-300" /> {siteConfig.businessHours}</li>
          )}
          {siteConfig.address && (
            <li className="flex items-start gap-2.5 text-[14px]"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" /> {siteConfig.address}</li>
          )}
          <li>
            <Link href="/contato" className="mt-1 inline-flex h-10 items-center rounded-lg bg-white/[.08] px-4 text-[13px] font-semibold text-white transition-colors hover:bg-brand-600">
              Enviar mensagem
            </Link>
          </li>
        </FooterCol>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container flex flex-col gap-2 py-6 text-[12.5px] text-navy-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.legalName ?? "TECHNOVA"}. Todos os direitos reservados.
            {siteConfig.cnpj && <span className="ml-1">CNPJ {siteConfig.cnpj}.</span>}
          </p>
          <p>Preços e condições sujeitos a alteração sem aviso prévio.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-4 text-[13px] font-bold uppercase tracking-[0.14em] text-white">{title}</h2>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-[14px] text-navy-200 transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  );
}
