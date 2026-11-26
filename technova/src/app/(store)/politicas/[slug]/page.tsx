import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POLICIES } from "./content";

export function generateStaticParams() {
  return Object.keys(POLICIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = POLICIES[(await params).slug];
  return p ? { title: p.title, description: p.description, alternates: { canonical: `/politicas/${(await params).slug}` } } : {};
}

export default async function PolicyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const policy = POLICIES[slug];
  if (!policy) notFound();
  return (
    <div className="container pb-8 pt-10 sm:pt-14">
      <div className="grid gap-10 lg:grid-cols-[240px_1fr]">
        <nav aria-label="Políticas" className="lg:sticky lg:top-40 lg:self-start">
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-navy-400">Políticas da loja</p>
          <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
            {Object.entries(POLICIES).map(([s, p]) => (
              <li key={s}>
                <Link href={`/politicas/${s}`} aria-current={s === slug ? "page" : undefined}
                  className={`block rounded-lg px-3 py-2 text-[14px] font-medium ${s === slug ? "bg-brand-50 text-brand-700" : "text-navy-600 hover:bg-surface"}`}>
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <article className="max-w-3xl">
          <h1 className="text-[30px] font-extrabold sm:text-[38px]">{policy.title}</h1>
          <div className="prose-store mt-6 text-[15.5px]">{policy.body()}</div>
        </article>
      </div>
    </div>
  );
}
