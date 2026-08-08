import type { Metadata } from "next";
import Link from "next/link";
import { Heart, SearchCheck, ShieldCheck } from "lucide-react";

export const metadata: Metadata = { title: "À propos" };

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs"><Link href="/">Accueil</Link><span>›</span><span>À propos</span></div>
          <p className="eyebrow">La raison d’être</p>
          <h1>Une information qui soutient, jamais qui culpabilise.</h1>
          <p className="lead">
            Maman, Pas à Pas est un média indépendant pensé pour rendre les informations
            sur la maternité plus faciles à comprendre.
          </p>
        </div>
      </section>
      <section className="section-sm">
        <div className="container grid-3">
          <div className="card">
            <div className="icon-chip"><Heart /></div>
            <h3>Bienveillance</h3>
            <p className="muted">Respecter la diversité des parcours, des familles et des choix.</p>
          </div>
          <div className="card">
            <div className="icon-chip sage"><SearchCheck /></div>
            <h3>Clarté</h3>
            <p className="muted">Expliquer les notions importantes avec des mots simples et précis.</p>
          </div>
          <div className="card">
            <div className="icon-chip sand"><ShieldCheck /></div>
            <h3>Fiabilité</h3>
            <p className="muted">Citer les sources et réviser régulièrement les informations sensibles.</p>
          </div>
        </div>
      </section>
      <section className="section soft-bg">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Le projet</p>
            <h2>Pourquoi “Pas à Pas” ?</h2>
          </div>
          <div>
            <p>
              Parce que la maternité n’est pas une liste de cases à cocher. Elle est faite
              d’étapes, de changements, de questions et parfois de détours.
            </p>
            <p>
              L’objectif de Maman, Pas à Pas est de vous aider à comprendre vos options et à préparer vos échanges
              avec les professionnels qui vous accompagnent.
            </p>
            <Link className="btn btn-primary" href="/methode-verification">Voir la méthode</Link>
          </div>
        </div>
      </section>
    </>
  );
}
