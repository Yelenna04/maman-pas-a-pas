import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = { title: "Avant la grossesse" };

export default function Page() {
  return <CategoryPage slug="avant-grossesse" />;
}
