import { Suspense } from "react";
import { CatalogClient } from "./CatalogClient";
export const metadata = { title: "Produtos" };
export default function Page() {
  return <Suspense fallback={<div className="container min-h-[60vh]" />}><CatalogClient /></Suspense>;
}
