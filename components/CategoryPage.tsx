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
<> <section className="page-hero"> <div className="container"> <div className="breadcrumbs"> <Link href="/">Accueil</Link> <span>›</span> <span>{category.title}</span> </div>

```
      <h1>{category.title}</h1>
      <p className="lead">{category.description}</p>
    </div>
  </section>

  <section className="section-sm">
    <div className="container">
      <div className="category-overview-grid">
        {category.subcategories.map((subcategory) => {
          const count = matching.filter(
            (article) =>
              article.subcategorySlug === subcategory.slug
          ).length;

          return (
            <section
              className="card card-hover"
              key={subcategory.slug}
            >
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

              <Link
                className="link-arrow"
                href={`/categories/${slug}/${subcategory.slug}`}
              >
                Découvrir <ArrowRight size={17} />
              </Link>
            </section>
          );
        })}
      </div>
    </div>
  </section>
</>
```

);
}
