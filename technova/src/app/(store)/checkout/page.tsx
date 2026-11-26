import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { paymentsEnabled } from "@/lib/payments";
import { CheckoutForm } from "./CheckoutForm";

export const metadata: Metadata = { title: "Finalizar pedido", robots: { index: false } };

export default function CheckoutPage() {
  return <CheckoutForm requireCpf={siteConfig.requireCpf} paymentsEnabled={paymentsEnabled()} />;
}
