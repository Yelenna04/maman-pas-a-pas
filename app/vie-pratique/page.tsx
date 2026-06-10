import type { Metadata } from "next";
import { CategoryPage } from "@/components/CategoryPage";

export const metadata: Metadata = { title: "Vie pratique" };

export default function Page() {
  return <CategoryPage slug="vie-pratique" />;
}
