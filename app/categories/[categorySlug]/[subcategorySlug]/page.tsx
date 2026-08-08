import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { articles, getCategory } from "@/lib/articles";

type PageProps = {
  params: Promise<{
    categorySlug: string;
    subcategorySlug: string;
  }>;
};

export default async function SubcategoryPage({ params }: PageProps) {
  const { categorySlug, subcategorySlug } = await params;
  const category = getCategory(categorySlug);

  if (!category) notFound();

  const subcategory = category.subcategories.find(
    (item) => item.slug === subcategorySlug
  );

  if (!subcategory) notFound();

  const matchingArticles = articles.filter(
    (article) =>
      article.categorySlug === categorySlug &&
      article.subcategorySlug === subcategorySlug
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Accueil</Link>
            <span>›</span>
            <Link href={`/${categorySlug}`}>{category.title}</Link>
            <span>›</span>
            <span>{subcategory.title}</span>
          </div>

          <h1>{subcategory.title}</h1>
          <p className="lead">{subcategory.description}</p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          {matchingArticles.length > 0 ? (
            <div className="grid-3">
              {matchingArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="card center">
              <h2>Les articles arrivent bientôt</h2>
              <p className="muted">
                Les premiers contenus de cette rubrique sont actuellement en préparation.
              </p>
            </div>
          )}

          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
              marginTop: 42
            }}
          >
            <Link
              href={`/${categorySlug}`}
              className="btn btn-secondary"
              style={{ minWidth: 220 }}
            >
              <ArrowLeft size={18} />
              Retour à {category.title}
            </Link>

            <Link
              href="/articles"
              className="btn btn-primary"
              style={{ minWidth: 220 }}
            >
              Tous les articles
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
