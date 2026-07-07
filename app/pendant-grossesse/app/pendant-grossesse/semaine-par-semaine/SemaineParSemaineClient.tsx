"use client";

const weeks = Array.from({ length: 37 }, (_, index) => index + 4);

export default function SemaineParSemaineClient() {
  return (
    <main className="baby-week-page">
      <section className="baby-week-shell">
        <a className="baby-week-back" href="/pendant-grossesse">
          ← Retour à la grossesse
        </a>

        <header className="baby-week-hero">
          <p className="baby-week-kicker">Suivi interactif</p>
          <h1>Bébé semaine par semaine</h1>
          <p>
            Une mini-application douce pour suivre l’évolution de bébé, semaine après semaine,
            avec des repères simples, visuels et rassurants.
          </p>
        </header>

        <nav className="baby-week-timeline" aria-label="Choisir une semaine de grossesse">
          {weeks.map((week) => (
            <button
              key={week}
              type="button"
              className={week === 4 ? "active" : ""}
            >
              {week} SA
            </button>
          ))}
        </nav>

        <section className="baby-week-stage">
          <div className="baby-week-placeholder">
            <span>4 SA</span>
            <h2>Ici apparaîtra l’évolution de bébé</h2>
            <p>
              Cette première étape sert à valider la structure, l’espace, le rendu mobile
              et l’ambiance générale avant d’ajouter les contenus et les animations.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
