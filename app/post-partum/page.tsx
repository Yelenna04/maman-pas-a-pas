import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = { title: "Post-partum" };

export default function Page() {
  return <CategoryPage slug="post-partum" />;
}
