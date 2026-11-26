// Ponto único de integração com meios de pagamento.
//
// Hoje NENHUM provedor está integrado: os pedidos são registrados como
// "Aguardando pagamento" e a loja combina o pagamento com o cliente.
// Nenhuma cobrança é simulada e nenhuma confirmação falsa é exibida.
//
// Para integrar (Mercado Pago, Pagar.me, Stripe, Asaas, PagBank...):
// 1. Implemente `PaymentProvider` num arquivo próprio (ex.: lib/payments/mercadopago.ts).
// 2. Leia as chaves de variáveis de ambiente do servidor (nunca NEXT_PUBLIC_).
// 3. Retorne-o em `getPaymentProvider()` quando PAYMENT_PROVIDER estiver definido.
// 4. Crie a rota de webhook (app/api/webhooks/<provedor>/route.ts) que valida a
//    assinatura do provedor e atualiza Order.paymentStatus / Order.status.

export type PaymentMethod = "pix" | "cartao";

export type CreatePaymentInput = {
  orderId: string;
  orderCode: string;
  amountCents: number;
  method: PaymentMethod;
  customer: { name: string; email: string; document?: string | null; phone: string };
};

export type CreatePaymentResult =
  | { kind: "pix"; reference: string; qrCode: string; copyPaste: string; expiresAt: Date }
  | { kind: "redirect"; reference: string; url: string };

export interface PaymentProvider {
  id: string;
  createPayment(input: CreatePaymentInput): Promise<CreatePaymentResult>;
}

export function getPaymentProvider(): PaymentProvider | null {
  switch (process.env.PAYMENT_PROVIDER) {
    // case "mercadopago": return mercadoPagoProvider;
    default:
      return null;
  }
}

export const paymentsEnabled = () => getPaymentProvider() !== null;
