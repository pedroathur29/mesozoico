// Constantes sem dependências, seguras para usar em componentes do navegador.

export const BR_STATES = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA",
  "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO",
] as const;

export const ORDER_STATUS_LABEL: Record<string, string> = {
  PENDING_PAYMENT: "Aguardando pagamento",
  PAID: "Pagamento confirmado",
  PROCESSING: "Em separação",
  SHIPPED: "Enviado",
  DELIVERED: "Entregue",
  CANCELLED: "Cancelado",
};

export const PAYMENT_STATUS_LABEL: Record<string, string> = {
  AWAITING_INTEGRATION: "Aguardando contato da loja",
  PENDING: "Pendente",
  APPROVED: "Aprovado",
  REFUSED: "Recusado",
  REFUNDED: "Estornado",
};

export const PAYMENT_METHOD_LABEL: Record<string, string> = {
  pix: "Pix",
  cartao: "Cartão de crédito",
};
