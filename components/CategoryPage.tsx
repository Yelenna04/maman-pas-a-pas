import Link from "next/link";
import { ArrowRight, FolderOpen } from "lucide-react";
import { articles, getCategory } from "@/lib/articles";

export function CategoryPage({ slug }: { slug: string }) {
  const category = getCategory(slug);

  if (!category) {
    return null;
  }

  const matching = articles.filter(
    (article) => article.categorySlug === slug
  );

  return (
    <>
      <section className="page-hero category-page-hero">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Accueil</Link>
            <span>›</span>
            <span>{category.title}</span>
          </div>

          <h1>{category.title}</h1>

          <p className="lead">
            {category.description}
          </p>
        </div>
      </section>

      <section className="section-sm category-page-content">
        <div className="container">
          <div className="grid-3 category-grid">
            {category.subcategories.map((subcategory) => {
              const count = matching.filter(
                (article) =>
                  article.subcategorySlug === subcategory.slug
              ).length;

              const href = `/categories/${slug}/${subcategory.slug}`;

              return (
                <Link
                  key={subcategory.slug}
                  href={href}
                  className="category-card-link"
                  aria-label={`Découvrir ${subcategory.title}`}
                >
                  <section className="card card-hover">
                    <div className="icon-chip sage">
                      <FolderOpen />
                    </div>

                    <h3>{subcategory.title}</h3>

                    <p className="muted">
                      {subcategory.description}
                    </p>

                    <p
                      className="muted"
                      style={{ fontSize: ".88rem" }}
                    >
                      {count === 0
                        ? "Les premiers articles arrivent bientôt."
                        : `${count} article${
                            count > 1 ? "s" : ""
                          } disponible${count > 1 ? "s" : ""}`}
                    </p>

                    <span className="link-arrow">
                      Découvrir
                      <ArrowRight size={17} />
                    </span>
                  </section>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
