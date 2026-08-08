import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Méthode de vérification" };

export default function MethodPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 24 }}>
        <div className="container">
          <div className="breadcrumbs"><Link href="/">Accueil</Link><span>›</span><span>Méthode</span></div>
          <p className="eyebrow">Transparence éditoriale</p>
          <h1>Comment les contenus sont-ils vérifiés ?</h1>
          <p className="lead">Une méthode simple, visible et reproductible pour renforcer la confiance.</p>
        </div>
      </section>
      <section className="section-sm" style={{ paddingTop: 24 }}>
        <div className="container legal prose">
          <h2>1. Choix des sources</h2>
          <p>
            Maman, Pas à Pas privilégie les autorités sanitaires, les organismes publics, les sociétés savantes,
            les recommandations professionnelles et les publications scientifiques reconnues.
          </p>
          <h2>2. Rédaction accessible</h2>
          <p>
            Les informations sont reformulées sans modifier leur sens. Les termes techniques sont
            expliqués et les incertitudes sont signalées.
          </p>
          <h2>3. Limites</h2>
          <p>
            Le site ne fournit ni diagnostic ni consultation. Les informations générales ne peuvent
            pas tenir compte de toutes les situations individuelles.
          </p>
        </div>
      </section>
    </>
  );
}
