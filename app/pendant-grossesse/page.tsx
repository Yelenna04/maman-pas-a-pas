import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = { title: "Pendant la grossesse" };

export default function Page() {
  return <CategoryPage slug="pendant-grossesse" />;
}
