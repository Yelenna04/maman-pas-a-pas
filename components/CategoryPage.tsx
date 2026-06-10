import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
          <div className="breadcrumbs"><Link href="/">Accueil</Link><span>›</span><span>{category.title}</span></div>
          <p className="eyebrow">Dossier thématique</p>
          <h1>{category.title}</h1>
          <p className="lead">{category.description}</p>
        </div>
      </section>
      <section className="section-sm">
        <div className="container">
          {matching.length ? (
            <div className="grid-3">
              {matching.map((article) => <ArticleCard key={article.slug} article={article} />)}
            </div>
          ) : (
            <div className="card center">
              <h2>Les premiers articles arrivent bientôt</h2>
              <p className="muted">Vous pouvez déjà explorer l’ensemble des ressources disponibles.</p>
              <Link href="/articles" className="btn btn-primary">Voir tous les articles <ArrowRight size={18} /></Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
