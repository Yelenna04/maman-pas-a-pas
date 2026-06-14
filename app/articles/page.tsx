import type { Metadata } from "next";
import Link from "next/link";
import { ArticleSearch } from "@/components/ArticleSearch";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Conseils et informations pour vous accompagner à chaque étape."
};

export default function ArticlesPage() {
  const searchableArticles = articles.map((article) => ({
    slug: article.slug,
    title: article.title,
    description: article.description,
    category: article.category,
    subcategory: article.subcategory
  }));

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
          <ArticleSearch articles={searchableArticles} />
        </div>
      </section>
    </>
  );
}
