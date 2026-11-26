import { whatsappLink } from "@/lib/config";

/** Botão flutuante. Só aparece quando NEXT_PUBLIC_WHATSAPP_NUMBER está configurado. */
export function WhatsAppButton() {
  const href = whatsappLink("Olá! Vim pelo site da TECHNOVA e gostaria de ajuda.");
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,.7)] transition-transform hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-pulse-ring" aria-hidden />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M16.04 3C9.02 3 3.3 8.7 3.3 15.72c0 2.24.59 4.43 1.7 6.36L3.2 28.8l6.9-1.8a12.7 12.7 0 0 0 5.93 1.5h.01c7.02 0 12.74-5.7 12.74-12.72 0-3.4-1.33-6.6-3.74-9A12.65 12.65 0 0 0 16.04 3Zm0 23.3h-.01a10.6 10.6 0 0 1-5.39-1.48l-.39-.23-4.1 1.07 1.1-4-.25-.41a10.52 10.52 0 0 1-1.62-5.6c0-5.83 4.75-10.57 10.6-10.57 2.83 0 5.49 1.1 7.49 3.1a10.5 10.5 0 0 1 3.1 7.48c0 5.84-4.75 10.58-10.53 10.58Zm5.8-7.92c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.34-.5-2.56-1.58-.95-.84-1.59-1.89-1.77-2.2-.19-.33-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.31-1.11 1.08-1.11 2.64s1.14 3.07 1.3 3.28c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.2 2 .12.61-.09 1.88-.77 2.14-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37Z" />
      </svg>
      <span className="pointer-events-none absolute right-[calc(100%+10px)] whitespace-nowrap rounded-lg bg-navy-900 px-3 py-1.5 text-[12.5px] font-semibold opacity-0 transition-opacity group-hover:opacity-100">
        Fale conosco
      </span>
    </a>
  );
}
