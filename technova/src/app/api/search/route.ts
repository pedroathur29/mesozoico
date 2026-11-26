import { NextResponse } from "next/server";
import { searchCatalog } from "@/lib/products";

export async function GET(req: Request) {
  const q = new URL(req.url).searchParams.get("q")?.slice(0, 80).trim() ?? "";
  if (q.length < 2) return NextResponse.json({ items: [] });
  const { items } = await searchCatalog({ q, perPage: 6 });
  return NextResponse.json(
    {
      items: items.map((p) => ({
        slug: p.slug,
        name: p.name,
        image: p.image,
        finalPriceCents: p.finalPriceCents,
        category: p.category.name,
      })),
    },
    { headers: { "Cache-Control": "public, max-age=30, s-maxage=60" } },
  );
}
