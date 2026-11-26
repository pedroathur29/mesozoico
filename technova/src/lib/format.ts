const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export function formatPrice(cents: number) {
  return brl.format(cents / 100);
}

export function formatDate(date: Date | string, withTime = false) {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    ...(withTime ? { timeStyle: "short" } : {}),
    timeZone: "America/Sao_Paulo",
  }).format(new Date(date));
}

/** Converte "1.234,56" ou "1234.56" em centavos. Retorna null se inválido. */
export function parsePriceToCents(input: string | null | undefined): number | null {
  if (input == null) return null;
  let s = String(input).trim().replace(/[R$\s]/g, "");
  if (!s) return null;
  if (s.includes(",")) s = s.replace(/\./g, "").replace(",", ".");
  const n = Number(s);
  if (!Number.isFinite(n) || n < 0) return null;
  return Math.round(n * 100);
}

export function centsToInput(cents: number | null | undefined) {
  if (cents == null) return "";
  return (cents / 100).toFixed(2).replace(".", ",");
}

export function onlyDigits(v: string) {
  return v.replace(/\D/g, "");
}

export function normalizeText(v: string) {
  return v.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

export function slugify(v: string) {
  return normalizeText(v)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function installments(cents: number, max = 10, minInstallmentCents = 5000) {
  const n = Math.max(1, Math.min(max, Math.floor(cents / minInstallmentCents)));
  return { count: n, valueCents: Math.ceil(cents / n) };
}
