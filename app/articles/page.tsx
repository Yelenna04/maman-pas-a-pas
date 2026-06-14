import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Conseils et informations pour vous accompagner à chaque étape.",
};

export default function ArticlesPage() {
  return (
    <>
      <section className="page-hero category-page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Accueil</Link>
            <span>›</span>
            <span>Articles</span>
          </div>

          <h1>Articles</h1>

          <p className="lead">
            Conseils et informations pour vous accompagner à chaque étape.
          </p>
        </div>
      </section>

      <section className="section-sm category-page-content">
        <div className="container">
          <div className="grid-3 category-grid">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className="category-card-link"
                aria-label={`Lire ${article.title}`}
              >
                <article className="card card-hover">
                  <p
                    className="muted"
                    style={{
                      marginBottom: "10px",
                      fontSize: ".88rem",
                    }}
                  >
                    {article.category}
                    {article.subcategory
                      ? ` · ${article.subcategory}`
                      : ""}
                  </p>

                  <h3>{article.title}</h3>

                  <p className="muted">
                    {article.description}
                  </p>

                  <span className="link-arrow">
                    Lire l’article
                    <ArrowRight size={17} />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
