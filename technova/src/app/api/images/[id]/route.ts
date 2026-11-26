import { prisma } from "@/lib/db";

/** Serve imagens de produto enviadas pelo painel (guardadas no banco). */
export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!/^[a-z0-9]{10,40}$/i.test(id)) return new Response("Não encontrado", { status: 404 });
  const img = await prisma.productImage.findUnique({ where: { id }, select: { data: true, mimeType: true, url: true } });
  if (!img) return new Response("Não encontrado", { status: 404 });
  if (img.url) return Response.redirect(new URL(img.url, _.url), 302);
  if (!img.data || !img.mimeType) return new Response("Não encontrado", { status: 404 });
  return new Response(new Uint8Array(img.data), {
    headers: {
      "Content-Type": img.mimeType,
      // O id muda a cada novo envio, então a imagem pode ficar em cache por muito tempo.
      "Cache-Control": "public, max-age=31536000, immutable",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
