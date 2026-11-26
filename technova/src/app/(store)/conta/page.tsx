import type { Metadata } from "next";
import { TrackOrder } from "./TrackOrder";

export const metadata: Metadata = { title: "Meus pedidos", description: "Acompanhe o status do seu pedido na TECHNOVA." };

export default function AccountPage() {
  return (
    <div className="container max-w-3xl pb-8 pt-10 sm:pt-14">
      <p className="eyebrow">Minha conta</p>
      <h1 className="mt-2 text-[28px] font-extrabold sm:text-[34px]">Acompanhe seu pedido</h1>
      <p className="mt-2 text-[15px] text-navy-500">Informe o número do pedido (ex.: TN-ABCD-1234) e o e-mail usado na compra.</p>
      <TrackOrder />
    </div>
  );
}
