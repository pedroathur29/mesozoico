import { z } from "zod";
import { onlyDigits } from "./format";
import { BR_STATES } from "./labels";

export { BR_STATES, ORDER_STATUS_LABEL, PAYMENT_STATUS_LABEL, PAYMENT_METHOD_LABEL } from "./labels";

export function isValidCPF(value: string) {
  const cpf = onlyDigits(value);
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  const calc = (len: number) => {
    let sum = 0;
    for (let i = 0; i < len; i++) sum += Number(cpf[i]) * (len + 1 - i);
    const r = (sum * 10) % 11;
    return r === 10 ? 0 : r;
  };
  return calc(9) === Number(cpf[9]) && calc(10) === Number(cpf[10]);
}


const trimmed = (min: number, max: number, msg: string) =>
  z.string().trim().min(min, msg).max(max, "Texto muito longo");

export const PAYMENT_METHODS = ["pix", "cartao"] as const;

export function checkoutSchema(requireCpf: boolean) {
  return z.object({
    customerName: trimmed(5, 120, "Informe o nome completo").refine((v) => v.split(/\s+/).length >= 2, "Informe nome e sobrenome"),
    customerEmail: z.string().trim().toLowerCase().email("E-mail inválido").max(160),
    customerPhone: z
      .string()
      .transform(onlyDigits)
      .refine((v) => v.length === 10 || v.length === 11, "Telefone inválido (com DDD)"),
    customerDocument: requireCpf
      ? z.string().transform(onlyDigits).refine(isValidCPF, "CPF inválido")
      : z
          .string()
          .optional()
          .transform((v) => (v ? onlyDigits(v) : undefined))
          .refine((v) => !v || isValidCPF(v), "CPF inválido"),
    zipCode: z.string().transform(onlyDigits).refine((v) => v.length === 8, "CEP inválido"),
    street: trimmed(3, 160, "Informe o endereço"),
    number: trimmed(1, 20, "Informe o número"),
    complement: z.string().trim().max(80).optional().transform((v) => v || undefined),
    district: trimmed(2, 80, "Informe o bairro"),
    city: trimmed(2, 80, "Informe a cidade"),
    state: z.enum(BR_STATES, { errorMap: () => ({ message: "Selecione o estado" }) }),
    notes: z.string().trim().max(500).optional().transform((v) => v || undefined),
    paymentMethod: z.enum(PAYMENT_METHODS, { errorMap: () => ({ message: "Escolha a forma de pagamento" }) }),
    acceptTerms: z.literal(true, { errorMap: () => ({ message: "É preciso aceitar os termos" }) }),
    items: z
      .array(z.object({ productId: z.string().min(1).max(40), quantity: z.number().int().min(1).max(99) }))
      .min(1, "Seu carrinho está vazio")
      .max(50),
  });
}

export type CheckoutInput = z.infer<ReturnType<typeof checkoutSchema>>;

export const contactSchema = z.object({
  name: trimmed(2, 120, "Informe seu nome"),
  email: z.string().trim().toLowerCase().email("E-mail inválido").max(160),
  phone: z.string().trim().max(30).optional().transform((v) => v || undefined),
  subject: trimmed(3, 120, "Informe o assunto"),
  message: trimmed(10, 3000, "Escreva uma mensagem com pelo menos 10 caracteres"),
});

export const reviewSchema = z.object({
  productId: z.string().min(1).max(40),
  authorName: trimmed(2, 60, "Informe seu nome"),
  rating: z.coerce.number().int().min(1, "Escolha uma nota").max(5),
  comment: trimmed(10, 1500, "Escreva pelo menos 10 caracteres"),
});

export const specSchema = z.array(z.object({ label: z.string().trim().min(1).max(60), value: z.string().trim().min(1).max(200) })).max(40);
