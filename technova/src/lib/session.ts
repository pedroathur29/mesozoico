// Assinatura e verificação do token de sessão do painel.
// Usa apenas `jose`, por isso funciona também no middleware (Edge Runtime).
import { SignJWT, jwtVerify } from "jose";

export const SESSION_COOKIE = "tn_admin";
export const SESSION_TTL_SECONDS = 60 * 60 * 8; // 8 horas

function secretKey() {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) {
    throw new Error("AUTH_SECRET ausente ou curto demais (mínimo 32 caracteres).");
  }
  return new TextEncoder().encode(secret);
}

export type AdminSession = { sub: string; email: string; name: string };

export async function signSession(payload: AdminSession) {
  return new SignJWT({ email: payload.email, name: payload.name })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(payload.sub)
    .setIssuedAt()
    .setIssuer("technova")
    .setAudience("technova-admin")
    .setExpirationTime(`${SESSION_TTL_SECONDS}s`)
    .sign(secretKey());
}

export async function verifySession(token: string | undefined): Promise<AdminSession | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secretKey(), { issuer: "technova", audience: "technova-admin" });
    if (!payload.sub) return null;
    return { sub: payload.sub, email: String(payload.email ?? ""), name: String(payload.name ?? "") };
  } catch {
    return null;
  }
}
