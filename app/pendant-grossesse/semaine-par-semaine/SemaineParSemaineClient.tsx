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
  imageLabel: string;
  embryoSize: number;
  highlights: string[];
  cards: { icon: string; title: string; text: string }[];
};

const weekNumbers = Array.from({ length: 37 }, (_, index) => index + 4);

const weeks: Record<number, Week> = {
  4: {
    week: 4,
    trimester: "Premier trimestre",
    title: "Le tout début de l’aventure",
    subtitle: "À 4 SA, tout commence à peine. L’embryon est microscopique et les premiers échanges avec ton corps se mettent en place.",
    size: "≈ 0,2 mm",
    comparison: "graine de pavot",
    weight: "< 1 g",
    imageLabel: "Graine de pavot",
    embryoSize: 30,
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
    subtitle: "À 5 SA, l’embryon reste minuscule mais son organisation avance très vite. Le sac gestationnel peut parfois commencer à être visible.",
    size: "≈ 1 mm",
    comparison: "graine de sésame",
    weight: "< 1 g",
    imageLabel: "Graine de sésame",
    embryoSize: 38,
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
    subtitle: "À 6 SA, le développement est très actif. Selon le terme exact, une activité cardiaque peut parfois commencer à être repérée.",
    size: "≈ 2 à 4 mm",
    comparison: "petit grain de riz",
    weight: "< 1 g",
    imageLabel: "Petit grain de riz",
    embryoSize: 48,
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
  7: {
    week: 7,
    trimester: "Premier trimestre",
    title: "La croissance s’accélère",
    subtitle: "À 7 SA, l’embryon grandit vite. Les premiers bourgeons des membres commencent à se dessiner progressivement.",
    size: "≈ 8 à 12 mm",
    comparison: "myrtille",
    weight: "< 1 g",
    imageLabel: "Myrtille",
    embryoSize: 60,
    highlights: ["Croissance active", "Membres en ébauche", "Nausées fréquentes"],
    cards: [
      { icon: "🧠", title: "Développement", text: "Le cerveau et le système nerveux poursuivent leur organisation." },
      { icon: "🤰", title: "Chez maman", text: "Les nausées, la fatigue et les seins sensibles peuvent être plus marqués." },
      { icon: "❤️", title: "Conseils", text: "Écoute ton corps et repose-toi autant que possible." },
    ],
  },
  8: {
    week: 8,
    trimester: "Premier trimestre",
    title: "Une silhouette se précise",
    subtitle: "À 8 SA, la silhouette de l’embryon devient plus reconnaissable. Les structures principales continuent à se former.",
    size: "≈ 14 à 20 mm",
    comparison: "framboise",
    weight: "< 1 g",
    imageLabel: "Framboise",
    embryoSize: 74,
    highlights: ["Silhouette visible", "Organes en formation", "Fatigue possible"],
    cards: [
      { icon: "🧠", title: "Développement", text: "Les organes poursuivent leur mise en place et la tête reste proportionnellement importante." },
      { icon: "🤰", title: "Chez maman", text: "Les symptômes peuvent fluctuer d’un jour à l’autre, ce qui est fréquent." },
      { icon: "❤️", title: "Conseils", text: "Prévois un suivi régulier et note tes questions pour le prochain rendez-vous." },
    ],
  },
};

function getWeekData(week: number): Week {
  return weeks[week] ?? {
    week,
    trimester: week < 14 ? "Premier trimestre" : week < 28 ? "Deuxième trimestre" : "Troisième trimestre",
    title: "Semaine en préparation",
    subtitle: "Cette semaine sera complétée progressivement avec des contenus fiables et faciles à lire.",
    size: "à compléter",
    comparison: "à compléter",
    weight: "à compléter",
    imageLabel: "À venir",
    embryoSize: Math.min(30 + (week - 4) * 4, 150),
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
  const week = getWeekData(selectedWeek);
  const progress = useMemo(() => Math.round(((selectedWeek - 4) / 36) * 100), [selectedWeek]);
  const gallery = [4, 5, 6, 7, 8].map(getWeekData);

  return (
    <main className="mpap-app">
      <div className="mpap-shell">
        <section className="mpap-showcase">
          <aside className="mpap-intro">
            <p className="mpap-kicker">Mon suivi de grossesse</p>
            <h1>Bébé semaine par semaine</h1>
            <p>Découvre son évolution, les changements dans ton corps et les repères importants à chaque étape.</p>
            <button type="button">Voir comment ça marche <span>›</span></button>
            <div className="mpap-trust">🌿 Contenu fiable, doux et non culpabilisant</div>
          </aside>

          <section className="mpap-main-scene mpap-week-transition" key={`scene-${selectedWeek}`}>
            <p className="mpap-today">Aujourd’hui</p>
            <strong>{week.week} SA</strong>
            <span>{week.trimester}</span>
            <div className="mpap-bubble">
              <div className="mpap-baby" style={{ width: week.embryoSize, height: week.embryoSize }} />
            </div>
            <article>
              <h2>{week.title}</h2>
              <p>{week.subtitle}</p>
            </article>
          </section>

          <aside className="mpap-side-card mpap-week-transition" key={`side-${selectedWeek}`}>
            <p className="mpap-kicker">{week.trimester}</p>
            <h2>{week.title}</h2>
            <p>{week.subtitle}</p>
            <div className="mpap-stat-row">
              <article><span>📏</span><small>Taille</small><strong>{week.size}</strong></article>
              <article><span>🌱</span><small>Comparable à</small><strong>{week.comparison}</strong></article>
              <article><span>⚖️</span><small>Poids</small><strong>{week.weight}</strong></article>
            </div>
            <div className="mpap-tip"><strong>💗 Conseil du jour</strong><p>Avance pas à pas. Les symptômes peuvent varier et chaque grossesse évolue à son rythme.</p></div>
          </aside>
        </section>

        <section className="mpap-weekline">
          <button type="button" onClick={() => setSelectedWeek(Math.max(4, selectedWeek - 1))}>‹</button>
          <div>
            {weekNumbers.slice(0, 13).map((item) => (
              <button key={item} type="button" className={item === selectedWeek ? "active" : ""} onClick={() => setSelectedWeek(item)}>
                <i />
                <span>{item}</span>
                <small>SA</small>
              </button>
            ))}
          </div>
          <button type="button" onClick={() => setSelectedWeek(Math.min(40, selectedWeek + 1))}>›</button>
        </section>

        <section className="mpap-progress"><span>4 SA</span><i><b style={{ width: `${Math.max(progress, 4)}%` }} /></i><strong>{progress}% du chemin parcouru</strong><span>40 SA</span></section>

        <section className="mpap-glance mpap-week-transition" key={`glance-${selectedWeek}`}>
          <div><p className="mpap-kicker">En un coup d’œil</p><h2>Les repères essentiels à {week.week} SA</h2></div>
          <div>{week.highlights.map((item) => <article key={item}>{item}</article>)}</div>
        </section>

        <section className="mpap-gallery">
          <h2>L’évolution de ton bébé</h2>
          <div>
            {gallery.map((item) => (
              <button key={item.week} type="button" className={item.week === selectedWeek ? "active" : ""} onClick={() => setSelectedWeek(item.week)}>
                <span>{item.week} SA</span>
                <div><i style={{ width: item.embryoSize, height: item.embryoSize }} /></div>
                <footer><strong>{item.size}</strong><small>{item.imageLabel}</small></footer>
              </button>
            ))}
          </div>
        </section>

        <section className="mpap-cards mpap-week-transition" key={`cards-${selectedWeek}`}>
          {week.cards.map((card) => <article key={card.title}><span>{card.icon}</span><h3>{card.title}</h3><p>{card.text}</p></article>)}
        </section>
      </div>
    </main>
  );
}
