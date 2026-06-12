import Image from "next/image";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  CalendarDays,
  Check,
  ChevronDown,
  Droplets,
  Lightbulb,
  ShieldCheck,
  TestTubeDiagonal,
  Thermometer
} from "lucide-react";

import { articles, getArticle } from "@/lib/articles";
import { getArticleImage } from "@/lib/articleImages";

type Props = { params: Promise<{ slug: string }> };

function renderRichText(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

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

function StandardArticle({
  article
}: {
  article: NonNullable<ReturnType<typeof getArticle>>;
}) {
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
                  <p key={paragraph}>{renderRichText(paragraph)}</p>
                ))}

                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{renderRichText(bullet)}</li>
                    ))}
                  </ul>
                )}

                {section.quote && (
                  <div className="key-takeaway">
                    <strong>À retenir</strong>
                    {renderRichText(section.quote)}
                  </div>
                )}
              </section>
            ))}

            <section className="article-source-box">
              <h2>Sources consultées</h2>
              <ul className="source-list">
                {article.sources.map((source) => (
                  <li key={source.label}>
                    <a href={source.url} target="_blank" rel="noreferrer">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <aside>
            <nav className="article-toc" aria-label="Sommaire de l’article">
              <h3>Dans cet article</h3>
              <ol>
                {article.sections.map((section, index) => (
                  <li key={section.title}>
                    <a href={`#${sectionId(index)}`}>{section.title}</a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="card" style={{ marginTop: 18 }}>
              <AlertTriangle size={26} color="#9d6868" />
              <h3 style={{ marginTop: 14 }}>Besoin d’aide rapidement ?</h3>
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

function OvulationArticle({
  article
}: {
  article: NonNullable<ReturnType<typeof getArticle>>;
}) {
  const essentials = article.sections.find(
    (section) => section.title === "L’essentiel en 30 secondes"
  );
  const timing = article.sections.find(
    (section) => section.title === "Quand l’ovulation a-t-elle lieu ?"
  );
  const signs = article.sections.find(
    (section) => section.title === "Les 3 signes les plus utiles"
  );
  const apps = article.sections.find(
    (section) => section.title === "Et les applications de suivi du cycle ?"
  );
  const monitor = article.sections.find(
    (section) => section.title === "Faut-il surveiller tous les signes ?"
  );
  const medical = article.sections.find(
    (section) => section.title === "Quand demander un avis médical ?"
  );
  const takeaway = article.sections.find(
    (section) => section.title === "À retenir"
  );

  const essentialIcons = [
    CalendarDays,
    CalendarDays,
    Droplets,
    TestTubeDiagonal,
    Thermometer
  ];

  const signIcons = [Droplets, TestTubeDiagonal, Thermometer];

  return (
    <main className="compact-article">
      <div className="article-shell">
        <section className="compact-article-hero">
          <div className="compact-hero-copy">
            <div className="breadcrumbs compact-breadcrumbs">
              <Link href="/">Accueil</Link>
              <span>›</span>
              <Link href={`/${article.categorySlug}`}>
                {article.category}
              </Link>
              <span>›</span>
              <span>{article.subcategory}</span>
            </div>

            <span className="badge">{article.subcategory}</span>
            <h1>{article.title}</h1>
            <p className="lead">{article.description}</p>

            <div className="verified-pill">
              <ShieldCheck size={18} />
              Informations médicales vérifiées
            </div>
          </div>

          <div className="compact-hero-photo">
            <Image
              src={getArticleImage(article.categorySlug, article.slug)}
              alt=""
              fill
              priority
              sizes="(max-width: 900px) 100vw, 43vw"
            />
          </div>
        </section>

        {essentials?.bullets && (
          <section className="compact-essentials">
            <h2>L’essentiel en 30 secondes</h2>
            <div className="essential-grid">
              {essentials.bullets.slice(0, 5).map((bullet, index) => {
                const Icon = essentialIcons[index];
                return (
                  <div className="essential-card" key={bullet}>
                    <span className="essential-icon">
                      <Icon size={23} />
                    </span>
                    <p>{renderRichText(bullet)}</p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        <div className="compact-article-grid">
          <article className="compact-main-column">
            {timing && (
              <section className="compact-section">
                <h2>
                  <span>1</span>
                  {timing.title}
                </h2>
                {timing.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{renderRichText(paragraph)}</p>
                ))}
                {essentials?.quote && (
                  <div className="compact-note rose-note">
                    <strong>Bon à savoir</strong>
                    <p>{renderRichText(essentials.quote)}</p>
                  </div>
                )}
              </section>
            )}

            {signs && (
              <section className="compact-section">
                <h2>
                  <span>2</span>
                  {signs.title}
                </h2>
                <div className="sign-grid">
                  {signs.paragraphs?.slice(0, 3).map((paragraph, index) => {
                    const Icon = signIcons[index];
                    const titles = [
                      "Glaire cervicale",
                      "Test d’ovulation",
                      "Température basale"
                    ];
                    return (
                      <div className="sign-card" key={paragraph}>
                        <span className="sign-icon">
                          <Icon size={25} />
                        </span>
                        <h3>{index + 1}. {titles[index]}</h3>
                        <p>{renderRichText(paragraph)}</p>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {medical && (
              <section className="compact-section medical-section">
                <h2>
                  <span>3</span>
                  {medical.title}
                </h2>
                <div className="medical-list">
                  {medical.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>
                      <Check size={18} />
                      <span>{renderRichText(paragraph)}</span>
                    </p>
                  ))}
                </div>
                <div className="compact-warning">
                  <AlertTriangle size={21} />
                  <p>
                    Une douleur intense ou persistante, de la fièvre, un
                    malaise ou des saignements importants nécessitent un avis
                    médical rapide.
                  </p>
                </div>
              </section>
            )}

            {takeaway && (
              <section className="compact-takeaway">
                <h2>À retenir</h2>
                {takeaway.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{renderRichText(paragraph)}</p>
                ))}
              </section>
            )}
          </article>

          <aside className="compact-side-column">
            <section className="learn-more-box">
              <h2>En savoir plus</h2>

              {apps && (
                <details open>
                  <summary>
                    Les applications de suivi du cycle
                    <ChevronDown size={18} />
                  </summary>
                  {apps.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{renderRichText(paragraph)}</p>
                  ))}
                </details>
              )}

              {monitor && (
                <details>
                  <summary>
                    Faut-il surveiller tous les signes ?
                    <ChevronDown size={18} />
                  </summary>
                  {monitor.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{renderRichText(paragraph)}</p>
                  ))}
                </details>
              )}
            </section>

            {monitor?.quote && (
              <section className="simple-advice-box">
                <Lightbulb size={25} />
                <h2>Le conseil le plus simple</h2>
                <p>{renderRichText(monitor.quote)}</p>
              </section>
            )}

            <section className="compact-source-box">
              <h2>Sources consultées</h2>
              <ul>
                {article.sources.map((source) => (
                  <li key={source.label}>
                    <a href={source.url} target="_blank" rel="noreferrer">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  if (article.slug === "comment-reperer-ovulation-periode-fertile") {
    return <OvulationArticle article={article} />;
  }

  return <StandardArticle article={article} />;
}
