import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  BookOpenCheck,
  CalendarHeart,
  Flower2,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Sparkles,
  Stethoscope
} from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/lib/articles";

const steps = [
  {
    title: "Avant la grossesse",
    description: "Préparer son projet sereinement.",
    href: "/avant-grossesse",
    Icon: CalendarHeart
  },
  {
    title: "Grossesse",
    description: "Vivre chaque trimestre sereinement.",
    href: "/pendant-grossesse",
    Icon: HeartPulse
  },
  {
    title: "Accouchement",
    description: "Préparer le jour J sereinement.",
    href: "/accouchement",
    Icon: Baby
  },
  {
    title: "Post-partum",
    description: "Se retrouver après la naissance.",
    href: "/post-partum",
    Icon: Leaf
  }
];

export default function HomePage() {
  const latest = [...articles].sort(
    (a, b) =>
      new Date(b.updatedAt).getTime() -
      new Date(a.updatedAt).getTime()
  );

  const featured = latest[0];

  return (
    <>
      <section className="editorial-hero">
        <div className="container editorial-hero-grid">
          <div className="editorial-hero-copy">
            <p className="eyebrow">
              <Flower2 size={16} />
              À vos côtés, à chaque étape
            </p>

            <h1>
              Des réponses simples pour vivre la maternité
              <span className="accent-word"> en confiance.</span>
            </h1>

            <p className="lead">
              Des informations fiables, des conseils pratiques et un soutien
              bienveillant, avant, pendant et après la grossesse.
            </p>

            <div className="hero-actions">
              <Link className="btn btn-sage" href="/articles">
                Découvrir les articles
                <ArrowRight size={18} />
              </Link>

              <Link
                className="btn btn-secondary"
                href="/methode-verification"
              >
                Notre méthode
              </Link>
            </div>

            <div className="hero-note">
              <ShieldCheck size={20} />
              <span>
                Des sources officielles visibles à la fin de chaque article.
              </span>
            </div>
          </div>

          <div className="editorial-hero-photo">
            <Image
              src="/images/hero-maman-pas-a-pas.png"
              alt="Future maman dans un intérieur lumineux et apaisant"
              fill
              priority
              sizes="(max-width: 980px) 100vw, 52vw"
            />
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div
            className="step-strip"
            aria-label="Parcourir le site par étape"
          >
            {steps.map(({ title, description, href, Icon }) => (
              <Link
                className="step-strip-card"
                href={href}
                key={href}
              >
                <div className="step-strip-icon">
                  <Icon size={24} />
                </div>

                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {featured && (
        <section className="section editorial-featured-section">
          <div className="container editorial-featured">
            <div className="editorial-featured-photo">
              <Image
                src="/images/article-a-la-une.png"
                alt="Carnet, tasse et eucalyptus dans une ambiance naturelle"
                fill
                sizes="(max-width: 980px) 100vw, 48vw"
              />
            </div>

            <div className="editorial-featured-copy">
              <p className="eyebrow">
                <Sparkles size={16} />
                Article à la une
              </p>

              <span className="badge">
                {featured.subcategory || featured.category}
              </span>

              <h2>{featured.title}</h2>
              <p className="lead">{featured.description}</p>

              <Link
                className="btn btn-primary"
                href={`/articles/${featured.slug}`}
              >
                Lire l’article
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="section-title-row">
            <div>
              <p className="eyebrow">
                <Leaf size={16} />
                À lire maintenant
              </p>

              <h2>Les derniers articles</h2>
            </div>

            <Link className="btn btn-secondary" href="/articles">
              Voir tous les articles
            </Link>
          </div>

          <div className="grid-3">
            {latest.slice(1, 7).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-bg">
        <div className="container trust-grid">
          <div>
            <p className="eyebrow">
              <Stethoscope size={16} />
              Informations claires et vérifiées
            </p>

            <h2>
              Un blog doux dans la forme, rigoureux dans le fond.
            </h2>

            <p className="lead">
              Nous transformons des recommandations médicales et
              institutionnelles en réponses simples, accessibles et utiles au
              quotidien.
            </p>
          </div>

          <div className="card trust-card">
            <ul className="check-list">
              <li>
                Des sources reconnues : HAS, Ameli, OMS, Santé publique France.
              </li>
              <li>Des dates de mise à jour visibles.</li>
              <li>Un ton chaleureux et jamais culpabilisant.</li>
              <li>
                Des indications claires pour savoir quand consulter.
              </li>
            </ul>

            <Link
              className="link-arrow"
              href="/methode-verification"
            >
              Découvrir notre méthode
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container banner editorial-banner">
          <div>
            <p className="eyebrow">
              <Sparkles size={16} />
              Une question ?
            </p>

            <h2
              style={{
                fontSize: "2.25rem",
                marginBottom: 10
              }}
            >
              Proposez un sujet pour un prochain article.
            </h2>

            <p>Chaque question peut aider d’autres futurs parents.</p>
          </div>

          <Link className="btn btn-primary" href="/contact">
            Nous écrire
            <BookOpenCheck size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
