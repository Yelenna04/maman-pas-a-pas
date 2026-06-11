import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle } from "lucide-react";

import { articles, getArticle } from "@/lib/articles";
import { getArticleImage } from "@/lib/articleImages";

type Props = { params: Promise<{ slug: string }> };

function sectionId(index: number) {
  return `section-${index + 1}`;
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
      <div className="article-shell">
        <div className="article-hero-card photo-article-hero">
          <div className="article-hero-copy">
            <div
              className="breadcrumbs"
              style={{ justifyContent: "flex-start" }}
            >
              <Link href="/">Accueil</Link>
              <span>›</span>
              <Link href={`/${article.categorySlug}`}>
                {article.category}
              </Link>
              <span>›</span>
              <span>{article.subcategory || "Article"}</span>
            </div>

            <span className="badge">
              {article.subcategory || article.category}
            </span>

            <h1>{article.title}</h1>

            <p className="lead">{article.description}</p>
          </div>

          <div className="article-hero-photo">
            <Image
              src={getArticleImage(article.categorySlug, article.slug)}
              alt=""
              fill
              priority
              sizes="(max-width: 980px) 100vw, 42vw"
            />
          </div>
        </div>

        <div className="article-main-grid">
          <article className="article-content-card prose">
            <div className="notice">
              <strong>À retenir :</strong> cet article fournit des informations
              générales. Il ne remplace pas un diagnostic, une consultation ou
              un suivi personnalisé.
            </div>

            {article.sections.map((section, index) => (
              <section key={section.title} id={sectionId(index)}>
                <h2>{section.title}</h2>

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}

                {section.quote && (
                  <div className="key-takeaway">
                    <strong>À retenir</strong>
                    {section.quote}
                  </div>
                )}
              </section>
            ))}

            <section className="article-source-box">
              <h2>Sources consultées</h2>

              <ul className="source-list">
                {article.sources.map((source) => (
                  <li key={source.label}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <aside>
            <nav
              className="article-toc"
              aria-label="Sommaire de l’article"
            >
              <h3>Dans cet article</h3>

              <ol>
                {article.sections.map((section, index) => (
                  <li key={section.title}>
                    <a href={`#${sectionId(index)}`}>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="card" style={{ marginTop: 18 }}>
              <AlertTriangle size={26} color="#9d6868" />

              <h3 style={{ marginTop: 14 }}>
                Besoin d’aide rapidement ?
              </h3>

              <p className="muted">
                En cas de symptôme inquiétant, de douleur intense, de malaise
                ou de danger immédiat, contactez un professionnel de santé ou
                les services d’urgence.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
