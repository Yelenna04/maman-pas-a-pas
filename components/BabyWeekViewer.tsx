"use client";

import { useMemo, useState } from "react";
import {
  Baby,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Heart,
  Ruler,
  Scale,
  Sparkles,
} from "lucide-react";
import styles from "./BabyWeekViewer.module.css";

const weeks = [
  { week: 4, size: "1 mm", weight: "< 1 g", fruit: "graine de pavot", trimester: "1er trimestre", text: "Le tout début de l’aventure. Les premières structures se mettent progressivement en place.", mama: "Le corps commence déjà à produire les hormones de grossesse." },
  { week: 5, size: "2 mm", weight: "< 1 g", fruit: "graine de sésame", trimester: "1er trimestre", text: "L’embryon grandit très vite. Chaque grossesse évolue à son rythme.", mama: "Fatigue, seins sensibles ou tiraillements peuvent apparaître." },
  { week: 6, size: "4–6 mm", weight: "< 1 g", fruit: "lentille", trimester: "1er trimestre", text: "Les premiers grands repères du développement apparaissent.", mama: "Les nausées peuvent commencer ou s’intensifier." },
  { week: 7, size: "1 cm", weight: "< 1 g", fruit: "myrtille", trimester: "1er trimestre", text: "Le corps de bébé continue de se former progressivement.", mama: "Le besoin de repos peut être plus important." },
  { week: 8, size: "1,5 cm", weight: "≈ 1 g", fruit: "framboise", trimester: "1er trimestre", text: "Le développement avance rapidement, même si bébé reste encore minuscule.", mama: "Les symptômes peuvent varier beaucoup d’un jour à l’autre." },
  { week: 9, size: "2–3 cm", weight: "≈ 2 g", fruit: "cerise", trimester: "1er trimestre", text: "Les bras et les jambes se dessinent davantage.", mama: "Le ventre peut rester inchangé, c’est normal." },
  { week: 10, size: "3 cm", weight: "≈ 4 g", fruit: "fraise", trimester: "1er trimestre", text: "Bébé prend une forme de plus en plus reconnaissable.", mama: "L’utérus commence doucement à prendre plus de place." },
  { week: 11, size: "4 cm", weight: "≈ 7 g", fruit: "figue", trimester: "1er trimestre", text: "Les mouvements existent déjà, même s’ils ne sont pas encore ressentis.", mama: "La fatigue peut encore être très présente." },
  { week: 12, size: "5–6 cm", weight: "≈ 14 g", fruit: "prune", trimester: "1er trimestre", text: "C’est souvent la période de la première échographie.", mama: "Certaines personnes commencent à se sentir un peu mieux." },
  { week: 13, size: "7 cm", weight: "≈ 20 g", fruit: "citron vert", trimester: "1er trimestre", text: "La fin du premier trimestre approche.", mama: "Le ventre peut commencer à s’arrondir très légèrement." },
  { week: 14, size: "8–9 cm", weight: "≈ 40 g", fruit: "pêche", trimester: "2e trimestre", text: "Le deuxième trimestre commence. Bébé continue de grandir.", mama: "L’énergie peut revenir progressivement." },
  { week: 15, size: "10 cm", weight: "≈ 70 g", fruit: "pomme", trimester: "2e trimestre", text: "Les traits se précisent et la croissance continue.", mama: "Les vêtements peuvent commencer à serrer." },
  { week: 16, size: "11–12 cm", weight: "≈ 100 g", fruit: "avocat", trimester: "2e trimestre", text: "Bébé bouge de plus en plus, même si les mouvements ne sont pas toujours ressentis.", mama: "Certaines ressentent les premiers petits mouvements." },
  { week: 17, size: "13 cm", weight: "≈ 140 g", fruit: "poire", trimester: "2e trimestre", text: "La croissance se poursuit doucement.", mama: "Des tiraillements ligamentaires peuvent apparaître." },
  { week: 18, size: "14 cm", weight: "≈ 190 g", fruit: "poivron", trimester: "2e trimestre", text: "Les mouvements peuvent commencer à être perçus comme des bulles.", mama: "Le ventre devient souvent plus visible." },
  { week: 19, size: "15 cm", weight: "≈ 240 g", fruit: "mangue", trimester: "2e trimestre", text: "Bébé devient plus actif.", mama: "Les sensations peuvent rester irrégulières au début." },
  { week: 20, size: "16 cm", weight: "≈ 300 g", fruit: "banane", trimester: "2e trimestre", text: "Bébé bouge beaucoup. C’est souvent une période rassurante.", mama: "L’échographie morphologique approche ou a lieu autour de cette période." },
  { week: 21, size: "26 cm", weight: "≈ 360 g", fruit: "carotte", trimester: "2e trimestre", text: "La taille est souvent mesurée de la tête aux pieds à partir de cette période.", mama: "Le ventre prend davantage de place." },
  { week: 22, size: "27–28 cm", weight: "≈ 430 g", fruit: "papaye", trimester: "2e trimestre", text: "Les sens poursuivent leur développement.", mama: "Les mouvements peuvent devenir plus réguliers." },
  { week: 23, size: "29 cm", weight: "≈ 500 g", fruit: "pamplemousse", trimester: "2e trimestre", text: "Le visage se dessine davantage.", mama: "Le dos ou le bassin peuvent être plus sensibles." },
  { week: 24, size: "30 cm", weight: "≈ 600 g", fruit: "maïs", trimester: "2e trimestre", text: "Bébé grandit et prend des forces.", mama: "Le sommeil peut commencer à être moins confortable." },
  { week: 25, size: "32 cm", weight: "≈ 700 g", fruit: "chou-fleur", trimester: "2e trimestre", text: "La peau reste fine, mais bébé continue à se développer.", mama: "Les besoins de repos peuvent augmenter." },
  { week: 26, size: "33–34 cm", weight: "≈ 800 g", fruit: "courgette", trimester: "2e trimestre", text: "Le rythme veille-sommeil peut devenir plus perceptible.", mama: "Les mouvements sont souvent plus nets." },
  { week: 27, size: "35 cm", weight: "≈ 900 g", fruit: "aubergine", trimester: "2e trimestre", text: "Le deuxième trimestre touche à sa fin.", mama: "Le ventre est maintenant bien présent." },
  { week: 28, size: "36 cm", weight: "≈ 1 kg", fruit: "courge", trimester: "3e trimestre", text: "Le troisième trimestre commence. Bébé prend surtout du poids.", mama: "Le suivi devient progressivement plus rapproché." },
  { week: 29, size: "37 cm", weight: "≈ 1,2 kg", fruit: "petit chou", trimester: "3e trimestre", text: "Les mouvements doivent rester présents.", mama: "En cas de doute sur les mouvements, il faut appeler la maternité." },
  { week: 30, size: "38–39 cm", weight: "≈ 1,3 kg", fruit: "concombre", trimester: "3e trimestre", text: "Bébé prend progressivement de la place.", mama: "Le repos devient souvent plus nécessaire." },
  { week: 31, size: "40 cm", weight: "≈ 1,5 kg", fruit: "noix de coco", trimester: "3e trimestre", text: "La croissance continue.", mama: "Le souffle peut être plus court." },
  { week: 32, size: "41 cm", weight: "≈ 1,7 kg", fruit: "jicama", trimester: "3e trimestre", text: "La troisième échographie a souvent lieu autour de cette période.", mama: "On vérifie la croissance et la position de bébé." },
  { week: 33, size: "42 cm", weight: "≈ 1,9 kg", fruit: "ananas", trimester: "3e trimestre", text: "Bébé continue de prendre du poids.", mama: "Les positions peuvent changer jusqu’à la fin." },
  { week: 34, size: "43 cm", weight: "≈ 2,1 kg", fruit: "melon", trimester: "3e trimestre", text: "Bébé se prépare doucement à la naissance.", mama: "Reflux, sommeil et jambes lourdes peuvent être présents." },
  { week: 35, size: "45 cm", weight: "≈ 2,4 kg", fruit: "melon miel", trimester: "3e trimestre", text: "La valise de maternité peut être finalisée.", mama: "Le corps commence à se préparer au jour J." },
  { week: 36, size: "46 cm", weight: "≈ 2,6 kg", fruit: "laitue romaine", trimester: "3e trimestre", text: "La fin approche.", mama: "Les rendez-vous peuvent devenir plus rapprochés." },
  { week: 37, size: "47 cm", weight: "≈ 2,9 kg", fruit: "bette", trimester: "3e trimestre", text: "Bébé continue de prendre du poids.", mama: "Les signes de début de travail sont à surveiller." },
  { week: 38, size: "48–49 cm", weight: "≈ 3,1 kg", fruit: "pastèque", trimester: "3e trimestre", text: "La naissance peut arriver bientôt.", mama: "Le rythme de bébé doit rester surveillé." },
  { week: 39, size: "49–50 cm", weight: "≈ 3,3 kg", fruit: "citrouille", trimester: "3e trimestre", text: "La date prévue approche.", mama: "En cas de perte des eaux ou contractions régulières, on appelle la maternité." },
  { week: 40, size: "50 cm", weight: "≈ 3,5 kg", fruit: "nouveau-né", trimester: "3e trimestre", text: "Bébé est proche du terme.", mama: "Le suivi de fin de grossesse permet de vérifier que tout va bien." },
];

export default function BabyWeekViewer() {
  const [selectedWeek, setSelectedWeek] = useState(20);
  const week = useMemo(
    () => weeks.find((item) => item.week === selectedWeek) ?? weeks[16],
    [selectedWeek]
  );

  const index = weeks.findIndex((item) => item.week === selectedWeek);
  const previous = () => setSelectedWeek(weeks[Math.max(index - 1, 0)].week);
  const next = () => setSelectedWeek(weeks[Math.min(index + 1, weeks.length - 1)].week);

  const growth = Math.min(1, selectedWeek / 40);

  return (
    <main className={styles.page}>
      <section className={styles.breadcrumb}>
        Accueil <span>›</span> Grossesse <span>›</span> Mon bébé semaine par semaine
      </section>

      <section className={styles.hero}>
        <div>
          <p className={styles.kicker}>Vue interactive</p>
          <h1>Mon bébé semaine par semaine</h1>
          <p>
            Une page douce pour suivre l’évolution de bébé, semaine après semaine,
            avec des repères simples et rassurants.
          </p>
        </div>
      </section>

      <section className={styles.appGrid}>
        <aside className={styles.infoCard}>
          <div className={styles.weekTop}>
            <div>
              <span>Semaine</span>
              <strong>{week.week}</strong>
              <small>{week.week} SA</small>
            </div>
            <div className={styles.trimester}>
              <CalendarDays size={19} />
              {week.trimester}
            </div>
          </div>

          <div className={styles.stats}>
            <div>
              <Ruler size={20} />
              <span>Taille</span>
              <strong>{week.size}</strong>
            </div>
            <div>
              <Scale size={20} />
              <span>Poids</span>
              <strong>{week.weight}</strong>
            </div>
          </div>

          <div className={styles.fruit}>
            <Sparkles size={18} />
            <p>Comparable à : <strong>{week.fruit}</strong></p>
          </div>

          <div className={styles.textBlock}>
            <Heart size={19} />
            <div>
              <h2>Ce qui se passe cette semaine</h2>
              <p>{week.text}</p>
            </div>
          </div>

          <div className={styles.textBlockLight}>
            <Baby size={19} />
            <div>
              <h2>Côté maman</h2>
              <p>{week.mama}</p>
            </div>
          </div>

          <p className={styles.disclaimer}>
            Les tailles et poids sont indicatifs. Ils ne remplacent jamais le suivi médical.
          </p>
        </aside>

        <section className={styles.viewerCard}>
          <div className={styles.viewerHeader}>
            <span>Vue 3D illustrée</span>
            <small>Prototype visuel</small>
          </div>

          <div className={styles.viewer}>
            <div className={styles.amnioticBubble}>
              <div className={styles.placenta} />
              <div
                className={styles.baby}
                style={{ transform: `translate(-50%, -50%) scale(${0.72 + growth * 0.58})` }}
              >
                <span className={styles.head} />
                <span className={styles.face} />
                <span className={styles.body} />
                <span className={styles.armLeft} />
                <span className={styles.armRight} />
                <span className={styles.legLeft} />
                <span className={styles.legRight} />
              </div>
              <div className={styles.cord} />
            </div>
          </div>

          <div className={styles.viewerControls}>
            <button onClick={previous}><ChevronLeft size={18} /> Semaine précédente</button>
            <button onClick={next}>Semaine suivante <ChevronRight size={18} /></button>
          </div>
        </section>
      </section>

      <section className={styles.timeline}>
        <div className={styles.timelineTitle}>
          <h2>Choisissez une semaine</h2>
          <span>{week.week} SA</span>
        </div>

        <div className={styles.weekList}>
          {weeks.map((item) => (
            <button
              key={item.week}
              type="button"
              className={item.week === selectedWeek ? styles.activeWeek : ""}
              onClick={() => setSelectedWeek(item.week)}
            >
              <span className={styles.miniBaby} />
              <strong>{item.week} SA</strong>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
