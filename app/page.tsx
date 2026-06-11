import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  CalendarHeart,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Stethoscope,
  Baby,
  Flower2,
  Sparkles,
  NotebookPen
} from "lucide-react";
import { articles } from "@/lib/articles";

const stepCards = [
  {
    title: "Avant grossesse",
    description: "Se préparer pour accueillir bébé dans les meilleures conditions.",
    href: "/avant-grossesse",
    Icon: CalendarHeart
  },
  {
    title: "Grossesse",
    description: "Comprendre les étapes, les examens et prendre soin de soi.",
    href: "/pendant-grossesse",
    Icon: HeartPulse
  },
  {
    title: "Accouchement",
    description: "Le jour J, les différentes options et le séjour à la maternité.",
    href: "/accouchement",
    Icon: Baby
  },
  {
    title: "Post-partum",
    description: "Récupération, allaitement, retour à la maison et bien-être.",
    href: "/post-partum",
    Icon: Leaf
  }
];

export default function HomePage() {
  const latest = [...articles].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  const featured = latest[0];
  const secondary = latest.slice(1, 4);

  return (
    <>
      <section className="hero hero-blog-home">
        <div className="container home-hero-grid">
          <div>
            <p className="eyebrow"><Flower2 size={16} /> À vos côtés, à chaque étape</p>
            <h1>
              Des réponses simples <br />
              pour chaque étape <br />
              de la <span className="accent-word">maternité.</span>
            </h1>
            <p className="lead hero-copy-lead">
              Des informations claires, fiables et bienveillantes pour vous accompagner avant,
              pendant et après la naissance.
            </p>

            <div className="hero-actions">
              <Link className="btn btn-sage" href="/articles">
                Explorer les articles <ArrowRight size={18} />
              </Link>
              <Link className="btn btn-secondary" href="/methode-verification">
                Découvrir nos guides
              </Link>
            </div>

            <div className="hero-note">
              <ShieldCheck size={20} />
              <span>Contenus vérifiés par des sources médicales et institutionnelles.</span>
            </div>
          </div>

          <div className="hero-photo-frame">
            <div className="hero-photo-scene">
              <div className="photo-sun" />
              <div className="photo-window" />
              <div className="photo-table" />
              <div className="photo-vase" />
              <div className="photo-notebook" />
              <div className="photo-booties" />
              <div className="photo-figure">
                <div className="figure-head" />
                <div className="figure-body" />
                <div className="figure-mug" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container home-feature-grid">
          {featured && (
            <article className="home-featured-card">
              <div className="feature-image-card">
                <div className="feature-notebook-scene">
                  <div className="feature-eucalyptus" />
                  <div className="feature-cup" />
                  <div className="feature-notebook" />
                  <div className="feature-pencil" />
                </div>
              </div>

              <div className="feature-copy-card">
                <p className="section-kicker">Article à la une</p>
                <h2>{featured.title}</h2>
                <p className="muted">{featured.description}</p>
                <Link className="link-arrow" href={`/articles/${featured.slug}`}>
                  Lire l’article <ArrowRight size={17} />
                </Link>
              </div>
            </article>
          )}

          <div className="step-browser">
            <h2 className="step-browser-title">Parcourez par étape</h2>
            <div className="step-grid">
              {stepCards.map(({ title, description, href, Icon }) => (
                <article className="step-card" key={href}>
                  <div className="step-icon-wrap"><Icon size={26} /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <Link className="step-button" href={href}>Découvrir</Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section latest-blog-section">
        <div className="container">
          <div className="latest-heading center">
            <p className="eyebrow center-eyebrow"><Leaf size={16} /> Les derniers articles</p>
            <p className="lead">Des contenus récents pour vous informer et vous inspirer au quotidien.</p>
          </div>

          <div className="grid-3">
            {secondary.map((article) => (
              <article className="blog-post-card card card-hover" key={article.slug}>
                <div className={`blog-post-visual ${article.tone || "rose"}`}>
                  <div className="blog-visual-badge">{article.subcategory || article.category}</div>
                  <NotebookPen size={34} />
                </div>
                <div className="article-card-body">
                  <h3>{article.title}</h3>
                  <p className="muted">{article.description}</p>
                  <Link className="link-arrow" href={`/articles/${article.slug}`}>
                    Lire l’article <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-bg trust-section">
        <div className="container trust-grid">
          <div className="trust-copy">
            <p className="eyebrow"><Stethoscope size={16} /> Informations claires et vérifiées</p>
            <h2>Un blog pensé pour rassurer, guider et informer.</h2>
            <p className="lead">
              Les contenus sont rédigés avec des mots simples à partir de sources médicales,
              institutionnelles et scientifiques reconnues.
            </p>
          </div>

          <div className="trust-panel card">
            <ul className="check-list">
              <li>Des articles construits autour des vraies questions des futurs parents.</li>
              <li>Une approche chaleureuse, bienveillante et jamais culpabilisante.</li>
              <li>Des sources officielles visibles à la fin de chaque article.</li>
              <li>Des repères concrets avant, pendant et après la grossesse.</li>
            </ul>
            <Link className="link-arrow" href="/methode-verification">
              Découvrir notre méthode <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container banner banner-soft-blog">
          <div>
            <p className="eyebrow"><Sparkles size={16} /> Une idée d’article ?</p>
            <h2 style={{ fontSize: "2.25rem", marginBottom: 10 }}>
              Une question que vous aimeriez voir traitée ?
            </h2>
            <p>Chaque nouveau sujet peut devenir un futur article du blog.</p>
          </div>
          <Link className="btn btn-primary" href="/contact">
            Proposer un sujet <BookOpenCheck size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
