import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Mentions légales" };

export default function LegalPage() {
  return (
    <section className="section">
      <div className="container legal prose">
        <div className="breadcrumbs"><Link href="/">Accueil</Link><span>›</span><span>Mentions légales</span></div>
        <h1 style={{ fontSize: "3.4rem" }}>Mentions légales</h1>
        <div className="notice">
          Modèle à personnaliser impérativement avec vos informations réelles avant la mise en ligne.
        </div>
        <h2>Éditeur du site</h2>
        <p>
          Nom ou raison sociale : [À COMPLÉTER]<br />
          Statut juridique : [À COMPLÉTER]<br />
          Adresse : [À COMPLÉTER]<br />
          E-mail : contact@mamanpasapas.fr<br />
          Numéro SIREN/SIRET : [À COMPLÉTER]
        </p>
        <h2>Directeur de la publication</h2>
        <p>[NOM À COMPLÉTER]</p>
        <h2>Hébergement</h2>
        <p>
          Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
          Les informations d’hébergement doivent être vérifiées au moment de la publication.
        </p>
        <h2>Propriété intellectuelle</h2>
        <p>
          Sauf mention contraire, les textes, graphismes, logos et éléments visuels du site sont
          protégés. Toute reproduction non autorisée est interdite.
        </p>
        <h2>Responsabilité</h2>
        <p>
          Les informations du site sont générales et ne remplacent pas un avis médical personnalisé.
          En cas de doute, consultez un professionnel de santé.
        </p>
      </div>
    </section>
  );
}
