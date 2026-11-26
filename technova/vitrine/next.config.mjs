/** Vitrine estática da TECHNOVA para GitHub Pages (sem servidor, sem banco). */
const basePath = process.env.VITRINE_BASE_PATH ?? "/mesozoico/loja";

export default {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  experimental: { externalDir: true },
  eslint: { ignoreDuringBuilds: true },
};
