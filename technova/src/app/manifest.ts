import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TECHNOVA — Tecnologia para casas inteligentes",
    short_name: "TECHNOVA",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#02153F",
    lang: "pt-BR",
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
