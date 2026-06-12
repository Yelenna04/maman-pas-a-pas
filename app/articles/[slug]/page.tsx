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
  ClipboardList,
  Droplets,
  Heart,
  Leaf,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  TestTubeDiagonal,
  Thermometer,
  Users
} from "lucide-react";

import { articles, getArticle } from "@/lib/articles";
import { getArticleImage } from "@/lib/articleImages";

type Props = { params: Promise<{ slug: string }> };
type Article = NonNullable<ReturnType<typeof getArticle>>;

function renderRichText(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
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

const articleDisplayConfig: Record<
  string,
  {
    essentialIcons: typeof Heart[];
    cardIcons: typeof Heart[];
    cardTitles: string[];
    adviceTitle?: string;
  }
> = {
  "combien-temps-moyenne-tomber-enceinte": {
    essentialIcons: [CalendarDays, Heart, Users, ShieldCheck],
    cardIcons: [CalendarDays, Heart, ShieldCheck],
    cardTitles: ["Âge", "Rapports réguliers", "Santé du couple"]
  },
  "tests-ovulation-utiliser-interpreter": {
    essentialIcons: [TestTubeDiagonal, CalendarDays, ClipboardList, ShieldCheck],
    cardIcons: [CalendarDays, TestTubeDiagonal, ClipboardList],
    cardTitles: ["Quand commencer", "Comment tester", "Quand lire"]
  },
  "cycles-irreguliers-mieux-comprendre": {
    essentialIcons: [CalendarDays, CalendarDays, Sparkles, ClipboardList],
    cardIcons: [CalendarDays, ClipboardList, Sparkles],
    cardTitles: ["Noter les dates", "Observer les symptômes", "Repérer les changements"]
  },
  "comment-reperer-ovulation-periode-fertile": {
    essentialIcons: [CalendarDays, Droplets, TestTubeDiagonal, Thermometer],
    cardIcons: [Droplets, TestTubeDiagonal, Thermometer],
    cardTitles: ["Glaire cervicale", "Test d’ovulation", "Température basale"]
  },
  "periode-fertile-jours-plus-favorables": {
    essentialIcons: [CalendarDays, Heart, Thermometer, CalendarDays],
    cardIcons: [Heart, Droplets, TestTubeDiagonal],
    cardTitles: ["Rapports réguliers", "Observer la glaire", "Test d’ovulation"]
  },
  "que-faire-avant-essayer-avoir-bebe": {
    essentialIcons: [CalendarDays, Leaf, ShieldCheck, Heart],
    cardIcons: [ClipboardList, CalendarDays, ShieldCheck],
    cardTitles: ["Première étape", "À préparer", "À vérifier"]
  },
  "se-preparer-emotionnellement-projet-bebe": {
    essentialIcons: [Heart, Sparkles, Lightbulb, ShieldCheck],
    cardIcons: [Heart, CalendarDays, MessageCircle],
    cardTitles: [
      "Clarifier ses attentes",
      "Choisir ses priorités",
      "Identifier ses soutiens"
    ]
  },
  "parler-projet-bebe-avec-partenaire": {
    essentialIcons: [MessageCircle, Heart, CalendarDays, Users],
    cardIcons: [Heart, MessageCircle, ClipboardList],
    cardTitles: ["Envies et calendrier", "Inquiétudes", "Premières étapes"]
  }
};

function getItems(
  section: Article["sections"][number] | undefined
): string[] {
  if (!section) return [];
  if (section.paragraphs?.length) return section.paragraphs;
  if (section.bullets?.length) return section.bullets;
  return [];
}

function UnifiedArticle({ article }: { article: Article }) {
  const essentials = article.sections.find(
    (section) => section.title === "L’essentiel en 30 secondes"
  );
  const takeaway = article.sections.find(
    (section) => section.title === "À retenir"
  );

  const contentSections = article.sections.filter(
    (section) => section !== essentials && section !== takeaway
  );

  const primary = contentSections[0];

  const cardSection =
    contentSections.find(
      (section, index) =>
        index > 0 &&
        ((section.paragraphs?.length ?? 0) >= 3 ||
          (section.bullets?.length ?? 0) >= 3)
    ) ?? contentSections[1];

  const helpSection =
    [...contentSections]
      .reverse()
      .find(
        (section) =>
          section !== primary &&
          section !== cardSection &&
          /quand|consulter|aide|soutien|avis/i.test(section.title)
      ) ??
    [...contentSections]
      .reverse()
      .find(
        (section) => section !== primary && section !== cardSection
      );

  const extraSections = contentSections.filter(
    (section) =>
      section !== primary &&
      section !== cardSection &&
      section !== helpSection
  );

  const config = articleDisplayConfig[article.slug] ?? {
    essentialIcons: [Heart, Sparkles, Lightbulb, ShieldCheck],
    cardIcons: [Heart, CalendarDays, MessageCircle],
    cardTitles: ["Premier repère", "Deuxième repère", "Troisième repère"]
  };

  const cardItems = getItems(cardSection).slice(0, 3);

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
              <span>{article.subcategory || "Article"}</span>
            </div>

            <h1>{article.title}</h1>
            <p className="lead">{article.description}</p>

            <div className="verified-pill">
              <ShieldCheck size={18} />
              Informations vérifiées
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

        {essentials?.bullets && essentials.bullets.length > 0 && (
          <section className="compact-essentials">
            <h2>L’essentiel en 30 secondes</h2>
            <div className="essential-grid">
              {essentials.bullets.slice(0, 4).map((bullet, index) => {
                const Icon =
                  config.essentialIcons[index] ?? config.essentialIcons[0];

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
            {primary && (
              <section className="compact-section">
                <h2>
                  <span>1</span>
                  {primary.title}
                </h2>

                {primary.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{renderRichText(paragraph)}</p>
                ))}

                {primary.bullets && (
                  <ul>
                    {primary.bullets.map((bullet) => (
                      <li key={bullet}>{renderRichText(bullet)}</li>
                    ))}
                  </ul>
                )}

                {essentials?.quote && (
                  <div className="compact-note rose-note">
                    <strong>Bon à savoir</strong>
                    <p>{renderRichText(essentials.quote)}</p>
                  </div>
                )}
              </section>
            )}

            {cardSection && cardItems.length > 0 && (
              <section className="compact-section">
                <h2>
                  <span>2</span>
                  {cardSection.title}
                </h2>

                <div className="sign-grid">
                  {cardItems.map((item, index) => {
                    const Icon =
                      config.cardIcons[index] ?? config.cardIcons[0];

                    return (
                      <div className="sign-card" key={item}>
                        <span className="sign-icon">
                          <Icon size={25} />
                        </span>
                        <h3>
                          {index + 1}.{" "}
                          {config.cardTitles[index] ?? `Repère ${index + 1}`}
                        </h3>
                        <p>{renderRichText(item)}</p>
                      </div>
                    );
                  })}
                </div>

                {cardSection.quote && (
                  <div className="compact-note rose-note">
                    <strong>À retenir</strong>
                    <p>{renderRichText(cardSection.quote)}</p>
                  </div>
                )}
              </section>
            )}

            {helpSection && (
              <section className="compact-section medical-section">
                <h2>
                  <span>3</span>
                  {helpSection.title}
                </h2>

                <div className="medical-list">
                  {getItems(helpSection).map((item) => (
                    <p key={item}>
                      <Check size={18} />
                      <span>{renderRichText(item)}</span>
                    </p>
                  ))}
                </div>

                {/urgence|douleur|fièvre|saignement/i.test(
                  getItems(helpSection).join(" ")
                ) && (
                  <div className="compact-warning">
                    <AlertTriangle size={21} />
                    <p>
                      En cas de symptôme intense, inhabituel ou inquiétant,
                      demandez rapidement un avis médical.
                    </p>
                  </div>
                )}
              </section>
            )}

            {takeaway && (
              <section className="compact-takeaway">
                <h2>À retenir</h2>

                {takeaway.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{renderRichText(paragraph)}</p>
                ))}

                {takeaway.bullets && (
                  <ul>
                    {takeaway.bullets.map((bullet) => (
                      <li key={bullet}>{renderRichText(bullet)}</li>
                    ))}
                  </ul>
                )}

                {takeaway.quote && (
                  <div className="project-takeaway-note">
                    {renderRichText(takeaway.quote)}
                  </div>
                )}
              </section>
            )}
          </article>

          <aside className="compact-side-column">
            {extraSections.length > 0 && (
              <section className="learn-more-box">
                <h2>En savoir plus</h2>

                {extraSections.map((section) => (
                  <details key={section.title}>
                    <summary>
                      {section.title}
                      <ChevronDown size={18} />
                    </summary>

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
                      <div className="project-mini-tip">
                        {renderRichText(section.quote)}
                      </div>
                    )}
                  </details>
                ))}
              </section>
            )}

            {(cardSection?.quote || essentials?.quote) && (
              <section className="simple-advice-box">
                <Lightbulb size={25} />
                <h2>{config.adviceTitle ?? "Le conseil le plus simple"}</h2>
                <p>
                  {renderRichText(
                    cardSection?.quote ||
                      essentials?.quote ||
                      "Avancez étape par étape."
                  )}
                </p>
              </section>
            )}
          </aside>
        </div>

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
      </div>
    </main>
  );
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  return <UnifiedArticle article={article} />;
}
