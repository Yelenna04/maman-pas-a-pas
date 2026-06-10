import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Politique de confidentialité" };

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container legal prose">
        <div className="breadcrumbs"><Link href="/">Accueil</Link><span>›</span><span>Confidentialité</span></div>
        <h1 style={{ fontSize: "3.4rem" }}>Politique de confidentialité</h1>
        <div className="notice">
          Modèle informatif à adapter à vos outils réels et à faire valider si nécessaire.
        </div>
        <h2>Données collectées</h2>
        <p>
          Dans cette version du site, le formulaire de contact ouvre l’application de messagerie
          du visiteur. Le site ne stocke directement aucune donnée envoyée via ce formulaire.
        </p>
        <h2>Mesure d’audience</h2>
        <p>
          Aucun outil de mesure d’audience n’est installé par défaut. Si vous ajoutez un service
          d’analyse ou de publicité, cette politique et la gestion du consentement devront être mises à jour.
        </p>
        <h2>Cookies</h2>
        <p>
          Cette version ne dépose aucun cookie non essentiel. Les services tiers ajoutés ultérieurement
          peuvent modifier cette situation.
        </p>
        <h2>Vos droits</h2>
        <p>
          Selon la réglementation applicable, vous pouvez demander l’accès, la rectification,
          l’effacement ou la limitation du traitement de vos données.
        </p>
        <h2>Contact</h2>
        <p>Pour toute question : contact@mamanpasapas.fr</p>
      </div>
    </section>
  );
}
