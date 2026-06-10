import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = { title: "Accouchement" };

export default function Page() {
  return <CategoryPage slug="accouchement" />;
}
