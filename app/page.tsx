import Link from "next/link";
import {
  ArrowRight, Baby, BookOpenCheck, HeartHandshake, Leaf, ShieldCheck, Sparkles
} from "lucide-react";
import { LogoIllustration } from "@/components/LogoIllustration";
import { ArticleCard } from "@/components/ArticleCard";
import { articles } from "@/lib/articles";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow"><Sparkles size={16} /> Votre maternité, à votre rythme</p>
            <h1>Avancer vers la maternité, un pas après l’autre.</h1>
            <p className="lead">
              Des informations accessibles, bienveillantes et vérifiées pour vous accompagner
              avant la grossesse, pendant la grossesse et après la naissance.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/articles">
                Explorer les articles <ArrowRight size={18} />
              </Link>
              <Link className="btn btn-secondary" href="/a-propos">Découvrir notre démarche</Link>
            </div>
            <div className="hero-note">
              <ShieldCheck size={22} />
              <span>Sources identifiées, dates de mise à jour visibles et relecture régulière.</span>
            </div>
          </div>
          <div className="hero-visual">
            <LogoIllustration />
            <div className="floating-card one">Des repères fiables</div>
            <div className="floating-card two">Sans jugement ni pression</div>
          </div>
        </div>
      </section>

      <section className="section soft-bg">
        <div className="container">
          <div className="center" style={{ marginBottom: 38 }}>
            <p className="eyebrow">Votre parcours</p>
            <h2>De quoi avez-vous besoin aujourd’hui ?</h2>
            <p className="lead">Choisissez l’étape qui vous ressemble pour trouver rapidement les bons repères.</p>
          </div>
          <div className="grid-3">
            <Link href="/avant-grossesse" className="card card-hover">
              <div className="icon-chip"><HeartHandshake /></div>
              <h3>Je prépare une grossesse</h3>
              <p className="muted">Santé, fertilité, démarches et questions à poser avant de commencer.</p>
              <span className="link-arrow">Commencer <ArrowRight size={17} /></span>
            </Link>
            <Link href="/pendant-grossesse" className="card card-hover">
              <div className="icon-chip sage"><Leaf /></div>
              <h3>Je suis enceinte</h3>
              <p className="muted">Suivi, symptômes, examens, alimentation et préparation à la naissance.</p>
              <span className="link-arrow">Découvrir <ArrowRight size={17} /></span>
            </Link>
            <Link href="/post-partum" className="card card-hover">
              <div className="icon-chip sand"><Baby /></div>
              <h3>Je découvre le post-partum</h3>
              <p className="muted">Récupération, émotions, bébé et organisation du quotidien.</p>
              <span className="link-arrow">Être accompagnée <ArrowRight size={17} /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", gap: 24, alignItems: "end", marginBottom: 34, flexWrap: "wrap" }}>
            <div>
              <p className="eyebrow">À lire maintenant</p>
              <h2 style={{ marginBottom: 0 }}>Les derniers articles</h2>
            </div>
            <Link className="btn btn-secondary" href="/articles">Voir tous les articles</Link>
          </div>
          <div className="grid-3">
            {articles.slice(0, 3).map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </div>
      </section>

      <section className="section soft-bg">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Notre engagement</p>
            <h2>Informer sans inquiéter, accompagner sans imposer.</h2>
            <p className="lead">
              Nous traduisons des informations parfois complexes dans un langage clair,
              tout en rappelant les limites d’un contenu général.
            </p>
          </div>
          <div className="card">
            <ul className="check-list">
              <li>Des sources institutionnelles ou scientifiques identifiées.</li>
              <li>Une date de publication et une date de mise à jour.</li>
              <li>Une distinction claire entre information et avis médical.</li>
              <li>Un ton inclusif, respectueux et non culpabilisant.</li>
              <li>Des indications pour savoir quand consulter.</li>
            </ul>
            <Link className="link-arrow" href="/methode-verification">
              Lire notre méthode <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container banner">
          <div>
            <h2 style={{ fontSize: "2.2rem", marginBottom: 10 }}>Une question ou un sujet à proposer ?</h2>
            <p>Votre expérience nous aide à créer des contenus réellement utiles.</p>
          </div>
          <Link className="btn btn-secondary" href="/contact">
            Nous écrire <BookOpenCheck size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
