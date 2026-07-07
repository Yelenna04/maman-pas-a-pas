"use client";

import { useMemo, useState } from "react";

const weeks = Array.from({ length: 37 }, (_, index) => index + 4);

const weekPreview = {
  week: 4,
  title: "Le tout début de l’aventure",
  size: "environ 0,2 mm",
  comparison: "une graine de pavot",
  trimester: "Premier trimestre",
  summary:
    "À 4 SA, la grossesse est encore très récente. L’embryon est minuscule et commence tout juste à s’installer. À ce stade, l’objectif est surtout de poser des repères doux, sans surcharge d’informations.",
};

export default function SemaineParSemaineClient() {
  const [selectedWeek, setSelectedWeek] = useState(4);

  const progress = useMemo(() => {
    return Math.round(((selectedWeek - 4) / (40 - 4)) * 100);
  }, [selectedWeek]);

  return (
    <main className="baby-week-page">
      <section className="baby-week-shell">
        <a className="baby-week-back" href="/pendant-grossesse">
          ← Retour à la grossesse
        </a>

        <header className="baby-week-hero">
          <div className="baby-week-hero-content">
            <p className="baby-week-kicker">Suivi interactif</p>
            <h1>Bébé semaine par semaine</h1>
            <p>
              Une mini-application douce pour suivre l’évolution de bébé, semaine après semaine,
              avec des repères simples, visuels et rassurants.
            </p>
          </div>

          <aside className="baby-week-current-card" aria-label="Semaine sélectionnée">
            <span>{weekPreview.trimester}</span>
            <strong>{selectedWeek} SA</strong>
            <p>{selectedWeek === 4 ? weekPreview.title : "Semaine à compléter"}</p>
          </aside>
        </header>

        <nav className="baby-week-timeline" aria-label="Choisir une semaine de grossesse">
          {weeks.map((week) => (
            <button
              key={week}
              type="button"
              className={week === selectedWeek ? "active" : ""}
              onClick={() => setSelectedWeek(week)}
            >
              {week} SA
            </button>
          ))}
        </nav>

        <section className="baby-week-progress" aria-label="Progression de la grossesse">
          <div>
            <span>4 SA</span>
            <strong>{progress}%</strong>
            <span>40 SA</span>
          </div>
          <div className="baby-week-progress-track">
            <span style={{ width: `${Math.max(progress, 3)}%` }} />
          </div>
        </section>

        <section className="baby-week-stage">
          <article className="baby-week-visual-card">
            <div className="baby-week-visual">
              <div className="baby-week-soft-circle">
                <div className="baby-week-embryo" />
              </div>
            </div>
            <p className="baby-week-visual-note">
              Visuel symbolique temporaire — on ajoutera ensuite une vraie collection
              d’illustrations cohérentes semaine par semaine.
            </p>
          </article>

          <aside className="baby-week-info-panel">
            <p className="baby-week-panel-label">{selectedWeek} SA</p>
            <h2>
              {selectedWeek === 4 ? weekPreview.title : "Cette semaine sera ajoutée bientôt"}
            </h2>
            <p>
              {selectedWeek === 4
                ? weekPreview.summary
                : "La structure est prête. Nous ajouterons ensuite les contenus fiables semaine par semaine, sans surcharger la page."}
            </p>

            <div className="baby-week-stats-grid">
              <div>
                <span>Taille</span>
                <strong>{selectedWeek === 4 ? weekPreview.size : "à compléter"}</strong>
              </div>
              <div>
                <span>Comme</span>
                <strong>{selectedWeek === 4 ? weekPreview.comparison : "à compléter"}</strong>
              </div>
            </div>
          </aside>
        </section>
      </section>
    </main>
  );
}
