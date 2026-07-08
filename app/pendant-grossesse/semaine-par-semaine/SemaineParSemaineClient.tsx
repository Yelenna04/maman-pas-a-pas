"use client";

import { useMemo, useState } from "react";

type WeekData = {
  week: number;
  title: string;
  trimester: string;
  size: string;
  comparison: string;
  weight: string;
  progressTitle: string;
  summary: string;
  embryoSize: number;
  highlights: { label: string; value: string }[];
  cards: { icon: string; title: string; text: string }[];
};

const allWeeks = Array.from({ length: 37 }, (_, index) => index + 4);

const weeksData: WeekData[] = [
  {
    week: 4,
    title: "Le tout début de l’aventure",
    trimester: "Premier trimestre",
    size: "environ 0,2 mm",
    comparison: "une graine de pavot",
    weight: "< 1 g",
    progressTitle: "La grossesse commence tout juste à s’installer.",
    summary:
      "À 4 SA, la grossesse est encore très récente. L’embryon est minuscule et les premiers échanges avec l’organisme maternel se mettent progressivement en place.",
    embryoSize: 28,
    highlights: [
      { label: "Bêta-hCG", value: "en hausse" },
      { label: "Échographie", value: "souvent trop tôt" },
      { label: "Symptômes", value: "variables" },
    ],
    cards: [
      {
        icon: "🧠",
        title: "Développement du bébé",
        text: "Les premières cellules se spécialisent. L’embryon reste microscopique et n’a pas encore l’apparence d’un bébé.",
      },
      {
        icon: "🤰",
        title: "Chez la maman",
        text: "Fatigue, tiraillements légers, seins sensibles ou absence totale de symptômes peuvent être normaux à ce stade.",
      },
      {
        icon: "❤️",
        title: "Conseils doux",
        text: "Continue l’acide folique si elle t’a été conseillée et évite alcool, tabac et automédication sans avis médical.",
      },
      {
        icon: "🍽️",
        title: "Alimentation",
        text: "Lave bien les fruits et légumes, évite les aliments crus à risque et privilégie des repas simples si tu es nauséeuse.",
      },
      {
        icon: "📅",
        title: "Examens",
        text: "Une prise de sang peut confirmer la grossesse. L’échographie est souvent plus informative quelques semaines plus tard.",
      },
      {
        icon: "⚠️",
        title: "À surveiller",
        text: "Consulte rapidement en cas de douleur forte d’un côté, malaise, saignements abondants ou douleur d’épaule inhabituelle.",
      },
    ],
  },
  {
    week: 5,
    title: "Les premières structures se dessinent",
    trimester: "Premier trimestre",
    size: "environ 1 mm",
    comparison: "une graine de sésame",
    weight: "< 1 g",
    progressTitle: "Les bases du développement continuent de se mettre en place.",
    summary:
      "À 5 SA, l’embryon reste très petit, mais son organisation avance rapidement. Le sac gestationnel peut parfois commencer à être visible selon le contexte.",
    embryoSize: 34,
    highlights: [
      { label: "Croissance", value: "rapide" },
      { label: "Fatigue", value: "fréquente" },
      { label: "Nausées", value: "possibles" },
    ],
    cards: [
      {
        icon: "🧠",
        title: "Développement du bébé",
        text: "Les grandes bases du futur embryon s’organisent. Les détails ne sont pas encore visibles, mais le développement s’accélère.",
      },
      {
        icon: "🤰",
        title: "Chez la maman",
        text: "Les hormones augmentent. Tu peux ressentir davantage de fatigue, une sensibilité aux odeurs ou des tiraillements.",
      },
      {
        icon: "❤️",
        title: "Conseils doux",
        text: "Prépare tes questions pour le premier rendez-vous et demande conseil avant tout médicament, même habituel.",
      },
      {
        icon: "🍽️",
        title: "Alimentation",
        text: "Si les nausées apparaissent, fractionner les repas et garder une collation simple peut aider certaines femmes.",
      },
      {
        icon: "📅",
        title: "Examens",
        text: "Selon ton histoire, un professionnel peut proposer un contrôle sanguin ou simplement organiser le début du suivi.",
      },
      {
        icon: "⚠️",
        title: "À surveiller",
        text: "Des douleurs légères peuvent exister, mais une douleur intense, persistante ou associée à un malaise doit faire consulter.",
      },
    ],
  },
  {
    week: 6,
    title: "Un minuscule cœur commence à se former",
    trimester: "Premier trimestre",
    size: "environ 2 à 4 mm",
    comparison: "un petit grain de riz",
    weight: "< 1 g",
    progressTitle: "Les premiers grands systèmes poursuivent leur mise en place.",
    summary:
      "À 6 SA, le développement est très actif. Selon le terme exact et l’échographie, une activité cardiaque peut parfois commencer à être repérée.",
    embryoSize: 42,
    highlights: [
      { label: "Cœur", value: "formation" },
      { label: "Taille", value: "quelques mm" },
      { label: "Suivi", value: "à organiser" },
    ],
    cards: [
      {
        icon: "🧠",
        title: "Développement du bébé",
        text: "Le tube neural et les premières ébauches d’organes poursuivent leur développement. Tout reste encore extrêmement petit.",
      },
      {
        icon: "🤰",
        title: "Chez la maman",
        text: "La fatigue et les nausées peuvent s’intensifier. L’absence de symptômes forts ne signifie pas forcément un problème.",
      },
      {
        icon: "❤️",
        title: "Conseils doux",
        text: "Essaie de te reposer quand tu peux et de demander de l’aide si les nausées deviennent difficiles à gérer.",
      },
      {
        icon: "🍽️",
        title: "Alimentation",
        text: "Mange ce qui passe le mieux, en gardant les règles de sécurité alimentaire. L’objectif n’est pas la perfection.",
      },
      {
        icon: "📅",
        title: "Examens",
        text: "Un rendez-vous de début de grossesse permet de faire le point sur les prises de sang, vaccins, traitements et antécédents.",
      },
      {
        icon: "⚠️",
        title: "À surveiller",
        text: "Les vomissements répétés avec impossibilité de boire ou de manger nécessitent un avis médical.",
      },
    ],
  },
];

function getWeekData(week: number): WeekData {
  const existing = weeksData.find((item) => item.week === week);

  if (existing) return existing;

  return {
    week,
    title: "Semaine à compléter",
    trimester: week < 14 ? "Premier trimestre" : week < 28 ? "Deuxième trimestre" : "Troisième trimestre",
    size: "à compléter",
    comparison: "à compléter",
    weight: "à compléter",
    progressTitle: "Cette semaine sera enrichie dans une prochaine version.",
    summary:
      "La structure est prête. Nous allons ajouter les contenus fiables semaine par semaine, en gardant une interface claire et agréable.",
    embryoSize: Math.min(28 + (week - 4) * 4, 160),
    highlights: [
      { label: "Contenu", value: "à venir" },
      { label: "Semaine", value: `${week} SA` },
      { label: "Statut", value: "prévu" },
    ],
    cards: [
      { icon: "🧠", title: "Développement du bébé", text: "Cette carte sera complétée avec des informations fiables et faciles à comprendre." },
      { icon: "🤰", title: "Chez la maman", text: "Cette carte expliquera les changements possibles du corps et les symptômes fréquents." },
      { icon: "❤️", title: "Conseils doux", text: "Cette carte proposera des repères rassurants, sans culpabilisation." },
      { icon: "🍽️", title: "Alimentation", text: "Cette carte rappellera les points utiles pour manger sereinement pendant la grossesse." },
      { icon: "📅", title: "Examens", text: "Cette carte indiquera les rendez-vous et démarches utiles selon le terme." },
      { icon: "⚠️", title: "À surveiller", text: "Cette carte rappellera les signes qui nécessitent un avis médical." },
    ],
  };
}

export default function SemaineParSemaineClient() {
  const [selectedWeek, setSelectedWeek] = useState(4);
  const currentWeek = getWeekData(selectedWeek);

  const progress = useMemo(() => Math.round(((selectedWeek - 4) / (40 - 4)) * 100), [selectedWeek]);

  return (
    <main className="baby-week-page">
      <section className="baby-week-shell">
        <a className="baby-week-back" href="/pendant-grossesse">
          ← Retour à la grossesse
        </a>

        <header className="baby-week-hero">
          <div className="baby-week-hero-content">
            <p className="baby-week-kicker">Mon suivi de grossesse</p>
            <h1>Bébé semaine par semaine</h1>
            <p>
              Explore l’évolution de bébé, ce qui change dans ton corps et les repères utiles,
              avec une interface douce pensée comme une mini-application.
            </p>
          </div>

          <aside className="baby-week-current-card" aria-label="Semaine sélectionnée">
            <span>{currentWeek.trimester}</span>
            <strong>{selectedWeek} SA</strong>
            <p>{currentWeek.progressTitle}</p>
          </aside>
        </header>

        <section className="baby-week-tabs" aria-label="Sections du suivi">
          <button type="button" className="active">👶 Bébé</button>
          <button type="button">🤰 Mon corps</button>
          <button type="button">📅 Examens</button>
          <button type="button">🍽️ Alimentation</button>
          <button type="button">❤️ Conseils</button>
        </section>

        <nav className="baby-week-timeline" aria-label="Choisir une semaine de grossesse">
          {allWeeks.map((week) => (
            <button
              key={week}
              type="button"
              className={week === selectedWeek ? "active" : ""}
              onClick={() => setSelectedWeek(week)}
            >
              <span>{week}</span>
              <small>SA</small>
            </button>
          ))}
        </nav>

        <section className="baby-week-progress" aria-label="Progression de la grossesse">
          <div>
            <span>4 SA</span>
            <strong>{progress}% du chemin</strong>
            <span>40 SA</span>
          </div>
          <div className="baby-week-progress-track">
            <span style={{ width: `${Math.max(progress, 3)}%` }} />
          </div>
        </section>

        <section className="baby-week-stage">
          <article className="baby-week-visual-card" aria-label="Scène de bébé">
            <div className="baby-week-visual">
              <div className="baby-week-soft-circle">
                <div
                  className="baby-week-embryo"
                  style={{ width: currentWeek.embryoSize, height: currentWeek.embryoSize }}
                />
              </div>
            </div>
            <div className="baby-week-visual-caption">
              <span>{selectedWeek} SA</span>
              <strong>{currentWeek.title}</strong>
              <p>Visuel symbolique temporaire, en attendant les illustrations définitives.</p>
            </div>
          </article>

          <aside className="baby-week-info-panel">
            <p className="baby-week-panel-label">{currentWeek.trimester}</p>
            <h2>{currentWeek.title}</h2>
            <p>{currentWeek.summary}</p>

            <div className="baby-week-stats-grid">
              <div>
                <span>📏 Taille</span>
                <strong>{currentWeek.size}</strong>
              </div>
              <div>
                <span>🥜 Comme</span>
                <strong>{currentWeek.comparison}</strong>
              </div>
              <div>
                <span>⚖️ Poids</span>
                <strong>{currentWeek.weight}</strong>
              </div>
            </div>
          </aside>
        </section>

        <section className="baby-week-glance" aria-labelledby="glance-title">
          <div>
            <p className="baby-week-section-kicker">Cette semaine en un coup d’œil</p>
            <h2 id="glance-title">Les repères essentiels à {selectedWeek} SA</h2>
          </div>
          <div className="baby-week-glance-grid">
            {currentWeek.highlights.map((item) => (
              <article key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="baby-week-cards" aria-label="Informations de la semaine">
          {currentWeek.cards.map((card) => (
            <article className="baby-week-card" key={card.title}>
              <span>{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
