import { siteConfig } from "@/lib/config";

export function AnnouncementBar() {
  if (!siteConfig.showDemoNotice) return null;
  return (
    <div className="bg-navy-950 text-white">
      <p className="container py-2 text-center text-[12px] font-medium leading-snug text-navy-100 sm:text-[12.5px]">
        <span className="mr-2 inline-block rounded bg-brand-600 px-1.5 py-px text-[10.5px] font-bold uppercase tracking-wider text-white">
          Em preparação
        </span>
        Produtos, preços e imagens desta loja são demonstrativos e serão substituídos antes da abertura.
      </p>
    </div>
  );
}
