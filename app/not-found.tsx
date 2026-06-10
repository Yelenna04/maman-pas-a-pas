import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container center">
        <p className="eyebrow">Erreur 404</p>
        <h1>Cette page s’est égarée.</h1>
        <p className="lead">Le contenu recherché n’existe pas ou a été déplacé.</p>
        <Link className="btn btn-primary" href="/">Retour à l’accueil</Link>
      </div>
    </section>
  );
}
