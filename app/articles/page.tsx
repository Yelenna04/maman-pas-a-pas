import type { Metadata } from "next";
import Link from "next/link";
import { ArticlesExplorer } from "@/components/ArticlesExplorer";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Tous les articles",
  description: "Retrouvez tous les articles de Maman, Pas à Pas."
};

export default function ArticlesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Accueil</Link>
            <span>›</span>
            <span>Articles</span>
          </div>

          <h1>Tous les articles</h1>

          <p className="lead">
            Recherchez un sujet ou explorez les contenus par étape de votre parcours.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <ArticlesExplorer articles={articles} />
        </div>
      </section>
    </>
  );
}
