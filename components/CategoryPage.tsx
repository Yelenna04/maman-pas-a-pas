import Link from "next/link";
import { ArrowRight, FolderOpen } from "lucide-react";
import { ArticleCard } from "./ArticleCard";
import { articles, getCategory } from "@/lib/articles";

export function CategoryPage({ slug }: { slug: string }) {
  const category = getCategory(slug);
  if (!category) return null;

  const matching = articles.filter((article) => article.categorySlug === slug);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Accueil</Link><span>›</span><span>{category.title}</span>
          </div>
          <p className="eyebrow">Dossier thématique</p>
          <h1>{category.title}</h1>
          <p className="lead">{category.description}</p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="center" style={{ marginBottom: 34 }}>
            <p className="eyebrow">Choisir un thème</p>
            <h2>Les sous-catégories</h2>
            <p className="lead">
              Retrouvez les réponses adaptées à votre étape et à vos questions du moment.
            </p>
          </div>

          <div className="grid-3">
            {category.subcategories.map((subcategory) => {
              const count = matching.filter(
                (article) => article.subcategorySlug === subcategory.slug
              ).length;

              return (
                <section className="card card-hover" key={subcategory.slug}>
                  <div className="icon-chip sage"><FolderOpen /></div>
                  <h3>{subcategory.title}</h3>
                  <p className="muted">{subcategory.description}</p>
                  <p className="muted" style={{ fontSize: ".88rem" }}>
                    {count === 0
                      ? "Les premiers articles arrivent bientôt."
                      : `${count} article${count > 1 ? "s" : ""} disponible${count > 1 ? "s" : ""}`}
                  </p>
                  <a className="link-arrow" href={`#${subcategory.slug}`}>
                    Découvrir <ArrowRight size={17} />
                  </a>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section soft-bg">
        <div className="container">
          <div className="center" style={{ marginBottom: 38 }}>
            <p className="eyebrow">Nos articles</p>
            <h2>Les réponses à vos questions</h2>
          </div>

          {category.subcategories.map((subcategory) => {
            const subcategoryArticles = matching.filter(
              (article) => article.subcategorySlug === subcategory.slug
            );

            return (
              <section
                id={subcategory.slug}
                key={subcategory.slug}
                style={{ scrollMarginTop: 100, marginBottom: 56 }}
              >
                <h2 style={{ fontSize: "2rem", marginBottom: 20 }}>
                  {subcategory.title}
                </h2>

                {subcategoryArticles.length ? (
                  <div className="grid-3">
                    {subcategoryArticles.map((article) => (
                      <ArticleCard key={article.slug} article={article} />
                    ))}
                  </div>
                ) : (
                  <div className="card">
                    <p className="muted" style={{ marginBottom: 0 }}>
                      Les premiers articles de cette rubrique sont en préparation.
                    </p>
                  </div>
                )}
              </section>
            );
          })}

          <div className="center">
            <Link href="/articles" className="btn btn-primary">
              Voir tous les articles <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
