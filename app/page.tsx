import Link from "next/link";
import {
  ArrowRight, Baby, BookOpenCheck, HeartHandshake, Leaf,
  ShieldCheck, Sparkles, Stethoscope, CalendarHeart
} from "lucide-react";
import { LogoIllustration } from "@/components/LogoIllustration";
import { ArticleCard } from "@/components/ArticleCard";
import { articles, categories } from "@/lib/articles";

export default function HomePage() {
  const latest = [...articles].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow"><Sparkles size={16} /> Le blog qui accompagne les futurs parents</p>
            <h1>Des réponses simples pour chaque étape de la maternité.</h1>
            <p className="lead">
              Projet bébé, grossesse, accouchement, post-partum et quotidien :
              des articles fiables, chaleureux et faciles à comprendre.
            </p>

            <div className="hero-actions">
              <Link className="btn btn-primary" href="/articles">
                Lire les articles <ArrowRight size={18} />
              </Link>
              <Link className="btn btn-secondary" href="/avant-grossesse">
                Commencer par le projet bébé
              </Link>
            </div>

            <div className="hero-note">
              <ShieldCheck size={22} />
              <span>Des contenus sourcés auprès d’organismes officiels et régulièrement vérifiés.</span>
            </div>
          </div>

          <div className="hero-visual">
            <LogoIllustration />
            <div className="floating-card one">Conseils pratiques</div>
            <div className="floating-card two">Sources fiables</div>
          </div>
        </div>

        <div className="container blog-strip">
          <Link href="/avant-grossesse" className="blog-strip-card featured">
            <span className="badge">À la une</span>
            <h3>Vous avez un projet bébé ?</h3>
            <p className="muted">Les premiers repères pour commencer sereinement.</p>
            <span className="link-arrow">Découvrir le dossier <ArrowRight size={17} /></span>
          </Link>

          <Link href="/pendant-grossesse" className="blog-strip-card sage">
            <span className="badge">Grossesse</span>
            <h3>Suivre chaque trimestre</h3>
            <span className="link-arrow">Voir les guides <ArrowRight size={17} /></span>
          </Link>

          <Link href="/post-partum" className="blog-strip-card sand">
            <span className="badge">Après la naissance</span>
            <h3>Mieux vivre le post-partum</h3>
            <span className="link-arrow">Lire les conseils <ArrowRight size={17} /></span>
          </Link>
        </div>
      </section>

      <section className="section soft-bg">
        <div className="container">
          <div className="section-title-row">
            <div>
              <p className="eyebrow">Explorer le blog</p>
              <h2 style={{ marginBottom: 0 }}>Toutes les grandes étapes</h2>
            </div>
            <Link className="btn btn-secondary" href="/articles">Voir tous les articles</Link>
          </div>

          <div className="blog-category-grid">
            {categories.map((category, index) => {
              const icons = [HeartHandshake, Leaf, CalendarHeart, Baby, BookOpenCheck];
              const Icon = icons[index] ?? Stethoscope;
              return (
                <Link
                  href={`/${category.slug}`}
                  className="blog-category-card"
                  key={category.slug}
                >
                  <div className={`icon-chip ${index % 2 ? "sage" : ""}`}>
                    <Icon size={22} />
                  </div>
                  <h3>{category.title}</h3>
                  <p className="muted">{category.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-title-row">
            <div>
              <p className="eyebrow">Nouveautés</p>
              <h2 style={{ marginBottom: 0 }}>Les derniers articles</h2>
            </div>
          </div>

          <div className="grid-3">
            {latest.slice(0, 6).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-bg">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Une information de confiance</p>
            <h2>Fiable dans le fond, simple dans la forme.</h2>
            <p className="lead">
              Chaque sujet est expliqué avec des mots du quotidien, sans jargon inutile,
              tout en s’appuyant sur des sources officielles.
            </p>
          </div>

          <div className="card">
            <ul className="check-list">
              <li>Des sources officielles clairement indiquées.</li>
              <li>Des dates de publication et de mise à jour visibles.</li>
              <li>Un ton bienveillant, chaleureux et non culpabilisant.</li>
              <li>Des réponses pratiques aux vraies questions des futurs parents.</li>
            </ul>
            <Link className="link-arrow" href="/methode-verification">
              Découvrir notre méthode <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container banner">
          <div>
            <h2 style={{ fontSize: "2.2rem", marginBottom: 10 }}>
              Une question que vous aimeriez voir traitée ?
            </h2>
            <p>Chaque nouvelle question peut devenir un futur article du blog.</p>
          </div>
          <Link className="btn btn-secondary" href="/contact">
            Proposer un sujet <BookOpenCheck size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
