"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({ images, name }: { images: { src: string; alt: string }[]; name: string }) {
  const [active, setActive] = useState(0);
  const list = images.length ? images : [{ src: "/products/placeholder.svg", alt: name }];
  const current = list[Math.min(active, list.length - 1)];

  return (
    <div className="flex flex-col-reverse gap-3 lg:flex-row lg:gap-4">
      {list.length > 1 && (
        <ul className="flex gap-2.5 overflow-x-auto scrollbar-none lg:w-[84px] lg:flex-col" aria-label="Miniaturas">
          {list.map((img, i) => (
            <li key={img.src + i} className="shrink-0">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Ver imagem ${i + 1}`}
                aria-current={i === active}
                className={`relative block h-[72px] w-[72px] overflow-hidden rounded-xl border-2 bg-surface transition-colors lg:h-[84px] lg:w-[84px] ${
                  i === active ? "border-brand-600" : "border-transparent hover:border-navy-200"
                }`}
              >
                <Image src={img.src} alt="" fill sizes="84px" unoptimized={img.src.endsWith(".svg")} className="object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="relative aspect-square flex-1 overflow-hidden rounded-2xl border border-navy-100 bg-surface">
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          unoptimized={current.src.endsWith(".svg")}
          className="animate-fade-in object-cover"
        />
      </div>
    </div>
  );
}
