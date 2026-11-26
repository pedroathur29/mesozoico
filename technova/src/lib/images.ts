export type ImageLike = { id: string; url: string | null; alt?: string | null };

/** URL pública de uma imagem de produto (arquivo estático, URL externa ou enviada pelo painel). */
export function imageSrc(img: ImageLike | null | undefined) {
  if (!img) return "/products/placeholder.svg";
  return img.url || `/api/images/${img.id}`;
}

export const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/avif"] as const;
export const MAX_IMAGE_BYTES = 4 * 1024 * 1024;

/** Confere a assinatura binária do arquivo (não confia só no tipo informado pelo navegador). */
export function sniffImageType(buf: Uint8Array): (typeof ACCEPTED_IMAGE_TYPES)[number] | null {
  if (buf.length < 12) return null;
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return "image/jpeg";
  if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) return "image/png";
  const ascii = (s: number, e: number) => String.fromCharCode(...buf.slice(s, e));
  if (ascii(0, 4) === "RIFF" && ascii(8, 12) === "WEBP") return "image/webp";
  if (ascii(4, 8) === "ftyp" && ["avif", "avis"].includes(ascii(8, 12))) return "image/avif";
  return null;
}
