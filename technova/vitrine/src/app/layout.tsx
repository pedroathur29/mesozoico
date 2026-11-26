import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import "@fontsource-variable/montserrat";
import "../../../src/app/globals.css";
import { HeaderView } from "@/components/layout/HeaderView";
import { FooterView } from "@/components/layout/FooterView";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { categories, BASE_PATH } from "@v/lib/catalog";
import { VSearch } from "@v/lib/VSearch";

export const metadata: Metadata = {
  title: { default: "TECHNOVA | Tecnologia para casas inteligentes", template: "%s | TECHNOVA" },
  description: "Câmeras de segurança, sensores, fechaduras digitais, tomadas e interruptores inteligentes para deixar sua casa mais segura e prática.",
  icons: { icon: `${BASE_PATH}/brand/favicon-48.png`, apple: `${BASE_PATH}/brand/apple-touch-icon.png` },
  openGraph: { type: "website", locale: "pt_BR", siteName: "TECHNOVA", images: [`${BASE_PATH}/og-image.png`] },
};
export const viewport: Viewport = { themeColor: "#02153F", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <HeaderView
          categories={categories}
          search={<Suspense><VSearch className="w-full max-w-[560px]" /></Suspense>}
          mobileSearch={<Suspense><VSearch /></Suspense>}
          accountHref="/contato"
        />
        <main id="conteudo" className="min-h-[60vh]">{children}</main>
        <FooterView categories={categories} showAccount={false} />
        <WhatsAppButton />
        <CartDrawer />
      </body>
    </html>
  );
}
