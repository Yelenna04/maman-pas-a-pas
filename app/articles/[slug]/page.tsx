import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, CalendarDays, Clock, RefreshCw } from "lucide-react";
import { articles, getArticle } from "@/lib/articles";

type Props = { params: Promise<{ slug: string }> };

function formatDate(value: string) {
  return new Intl.DateTimeFormat("fr-FR", { dateStyle: "long" }).format(new Date(value));
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/articles/${article.slug}` }
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <header className="page-hero">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="breadcrumbs">
            <Link href="/">Accueil</Link><span>›</span>
            <Link href={`/${article.categorySlug}`}>{article.category}</Link><span>›</span>
            <span>Article</span>
          </div>
          <span className="badge">{article.category}</span>
          <h1 style={{ marginTop: 18 }}>{article.title}</h1>
          <p className="lead">{article.description}</p>
          <div className="article-meta" style={{ justifyContent: "center", fontSize: ".92rem" }}>
            <span><CalendarDays size={16} /> Publié le {formatDate(article.publishedAt)}</span>
            <span><RefreshCw size={16} /> Mis à jour le {formatDate(article.updatedAt)}</span>
            <span><Clock size={16} /> {article.readingTime}</span>
          </div>
        </div>
      </header>

      <section className="section-sm">
        <div className="container article-layout">
          <article className="prose">
            <div className="notice">
              <strong>À retenir :</strong> cet article fournit des informations générales.
              Il ne remplace pas un diagnostic, une consultation ou un suivi personnalisé.
            </div>

            {article.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && (
                  <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                )}
                {section.quote && <blockquote>{section.quote}</blockquote>}
              </section>
            ))}

            <section>
              <h2>Sources consultées</h2>
              <ul className="source-list">
                {article.sources.map((source) => (
                  <li key={source.label}>
                    <a href={source.url} target="_blank" rel="noreferrer">{source.label}</a>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <aside className="sidebar">
            <div className="card">
              <AlertTriangle size={28} color="#a45e68" />
              <h3 style={{ marginTop: 14 }}>Besoin d’aide rapidement ?</h3>
              <p className="muted">
                En cas de symptôme inquiétant, de douleur intense, de malaise ou de danger immédiat,
                contactez un professionnel de santé ou les services d’urgence.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
