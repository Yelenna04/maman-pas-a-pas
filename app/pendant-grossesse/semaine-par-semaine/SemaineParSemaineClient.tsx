"use client";

import { useMemo, useState } from "react";

type Week = {
  week: number;
  trimester: string;
  title: string;
  subtitle: string;
  size: string;
  comparison: string;
  weight: string;
  embryoSize: number;
  highlights: string[];
  cards: { icon: string; title: string; text: string }[];
};

const weeks = Array.from({ length: 37 }, (_, index) => index + 4);

const content: Record<number, Week> = {
  4: {
    week: 4,
    trimester: "Premier trimestre",
    title: "Le tout début de l’aventure",
    subtitle:
      "À 4 SA, tout commence à peine. L’embryon est microscopique et les premiers échanges avec ton corps se mettent en place.",
    size: "≈ 0,2 mm",
    comparison: "graine de pavot",
    weight: "< 1 g",
    embryoSize: 26,
    highlights: ["Bêta-hCG en hausse", "Échographie souvent trop précoce", "Symptômes très variables"],
    cards: [
      { icon: "🧠", title: "Développement", text: "Les premières cellules se spécialisent. L’embryon reste encore invisible à l’œil nu." },
      { icon: "🤰", title: "Chez maman", text: "Fatigue, seins sensibles, tiraillements ou aucun symptôme : tout peut être normal à ce stade." },
      { icon: "❤️", title: "Conseils", text: "Continue l’acide folique si elle t’a été conseillée et évite l’automédication sans avis médical." },
      { icon: "🍽️", title: "Alimentation", text: "Lave bien les fruits et légumes, évite les aliments crus à risque et mange simplement." },
      { icon: "📅", title: "Examens", text: "Une prise de sang peut confirmer la grossesse. L’échographie sera plus utile un peu plus tard." },
      { icon: "⚠️", title: "À surveiller", text: "Douleur forte d’un côté, malaise ou saignements abondants nécessitent un avis médical rapide." },
    ],
  },
  5: {
    week: 5,
    trimester: "Premier trimestre",
    title: "Les premières structures se dessinent",
    subtitle:
      "À 5 SA, l’embryon reste minuscule mais son organisation avance très vite. Le sac gestationnel peut parfois commencer à être visible.",
    size: "≈ 1 mm",
    comparison: "graine de sésame",
    weight: "< 1 g",
    embryoSize: 34,
    highlights: ["Croissance rapide", "Fatigue fréquente", "Nausées possibles"],
    cards: [
      { icon: "🧠", title: "Développement", text: "Les grandes bases du futur embryon s’organisent, même si les détails ne sont pas encore visibles." },
      { icon: "🤰", title: "Chez maman", text: "Les hormones augmentent. Tu peux ressentir fatigue, sensibilité aux odeurs ou tiraillements." },
      { icon: "❤️", title: "Conseils", text: "Prépare tes questions pour ton premier rendez-vous et demande conseil avant tout médicament." },
      { icon: "🍽️", title: "Alimentation", text: "Si les nausées commencent, fractionner les repas peut aider certaines femmes." },
      { icon: "📅", title: "Examens", text: "Selon ton histoire, un professionnel peut proposer un contrôle ou organiser le début du suivi." },
      { icon: "⚠️", title: "À surveiller", text: "Une douleur intense, persistante ou associée à un malaise doit faire consulter." },
    ],
  },
  6: {
    week: 6,
    trimester: "Premier trimestre",
    title: "Un minuscule cœur commence à se former",
    subtitle:
      "À 6 SA, le développement est très actif. Selon le terme exact, une activité cardiaque peut parfois commencer à être repérée.",
    size: "≈ 2 à 4 mm",
    comparison: "petit grain de riz",
    weight: "< 1 g",
    embryoSize: 42,
    highlights: ["Cœur en formation", "Quelques millimètres", "Suivi à organiser"],
    cards: [
      { icon: "🧠", title: "Développement", text: "Le tube neural et les premières ébauches d’organes poursuivent leur développement." },
      { icon: "🤰", title: "Chez maman", text: "La fatigue et les nausées peuvent s’intensifier, mais chaque grossesse est différente." },
      { icon: "❤️", title: "Conseils", text: "Repose-toi dès que possible et demande de l’aide si les nausées deviennent difficiles." },
      { icon: "🍽️", title: "Alimentation", text: "Mange ce qui passe le mieux, sans chercher la perfection, tout en gardant les règles de sécurité." },
      { icon: "📅", title: "Examens", text: "Un rendez-vous permet de faire le point sur prises de sang, vaccins, traitements et antécédents." },
      { icon: "⚠️", title: "À surveiller", text: "Vomissements répétés avec impossibilité de boire ou manger : demande un avis médical." },
    ],
  },
};

function getWeek(week: number): Week {
  return content[week] ?? {
    week,
    trimester: week < 14 ? "Premier trimestre" : week < 28 ? "Deuxième trimestre" : "Troisième trimestre",
    title: "Semaine en préparation",
    subtitle: "Cette semaine sera complétée progressivement avec des contenus fiables et faciles à lire.",
    size: "à compléter",
    comparison: "à compléter",
    weight: "à compléter",
    embryoSize: Math.min(26 + (week - 4) * 4, 150),
    highlights: ["Contenu à venir", `${week} SA`, "Base prête"],
    cards: [
      { icon: "🧠", title: "Développement", text: "Le contenu détaillé de cette semaine sera ajouté dans une prochaine version." },
      { icon: "🤰", title: "Chez maman", text: "Les changements possibles du corps seront expliqués simplement." },
      { icon: "❤️", title: "Conseils", text: "Des repères doux et rassurants seront ajoutés ici." },
    ],
  };
}

export default function SemaineParSemaineClient() {
  const [selectedWeek, setSelectedWeek] = useState(4);
  const week = getWeek(selectedWeek);
  const progress = useMemo(() => Math.round(((selectedWeek - 4) / 36) * 100), [selectedWeek]);

  return (
    <main className="mpap-week-app">
      <div className="mpap-week-shell">
        <a className="mpap-week-back" href="/pendant-grossesse">← Pendant la grossesse</a>

        <section className="mpap-week-hero">
          <div>
            <p className="mpap-kicker">Mon suivi de grossesse</p>
            <h1>Bébé semaine par semaine</h1>
            <p>Un suivi visuel, doux et clair pour découvrir l’évolution de bébé, les repères importants et ce qui peut changer dans ton corps.</p>
          </div>
          <div className="mpap-week-badge">
            <span>{week.trimester}</span>
            <strong>{week.week} SA</strong>
            <p>{week.title}</p>
          </div>
        </section>

        <section className="mpap-week-nav" aria-label="Navigation du suivi">
          {['👶 Bébé', '🤰 Mon corps', '📅 Examens', '🍽️ Alimentation', '❤️ Conseils'].map((item, index) => (
            <span className={index === 0 ? 'is-active' : ''} key={item}>{item}</span>
          ))}
        </section>

        <section className="mpap-timeline" aria-label="Choisir une semaine">
          {weeks.map((item) => (
            <button
              key={item}
              type="button"
              className={item === selectedWeek ? 'is-active' : ''}
              onClick={() => setSelectedWeek(item)}
            >
              <span>{item}</span>
              <small>SA</small>
            </button>
          ))}
        </section>

        <section className="mpap-progress" aria-label="Progression">
          <div><span>4 SA</span><strong>{progress}%</strong><span>40 SA</span></div>
          <i style={{ width: `${Math.max(progress, 4)}%` }} />
        </section>

        <section className="mpap-stage">
          <div className="mpap-visual-card">
            <div className="mpap-visual-glow">
              <div className="mpap-embryo" style={{ width: week.embryoSize, height: week.embryoSize }} />
            </div>
            <div className="mpap-visual-title">
              <span>{week.week} SA</span>
              <strong>{week.title}</strong>
            </div>
          </div>

          <div className="mpap-info-card">
            <p className="mpap-kicker">{week.trimester}</p>
            <h2>{week.title}</h2>
            <p>{week.subtitle}</p>
            <div className="mpap-stats">
              <article><span>📏 Taille</span><strong>{week.size}</strong></article>
              <article><span>🌱 Comparable à</span><strong>{week.comparison}</strong></article>
              <article><span>⚖️ Poids</span><strong>{week.weight}</strong></article>
            </div>
          </div>
        </section>

        <section className="mpap-glance">
          <div>
            <p className="mpap-kicker">En un coup d’œil</p>
            <h2>Les repères essentiels à {week.week} SA</h2>
          </div>
          <div>
            {week.highlights.map((item) => <article key={item}>{item}</article>)}
          </div>
        </section>

        <section className="mpap-cards">
          {week.cards.map((card) => (
            <article key={card.title}>
              <span>{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
