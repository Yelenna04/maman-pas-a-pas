"use client";

import { useMemo, useState } from "react";
import { Baby, CalendarDays, Heart, Minus, Plus, Ruler, Scale, RotateCw } from "lucide-react";
import styles from "./BabyWeekViewer.module.css";

const weeks = [
  { week: 4, size: "1 mm", weight: "< 1 g", trimester: "1er trimestre", text: "Le tout début de l’aventure. Les premières structures se mettent progressivement en place." },
  { week: 8, size: "1,5 cm", weight: "≈ 1 g", trimester: "1er trimestre", text: "Bébé reste minuscule, mais le développement avance rapidement." },
  { week: 12, size: "5–6 cm", weight: "≈ 14 g", trimester: "1er trimestre", text: "C’est souvent la période de la première échographie de datation." },
  { week: 16, size: "11–12 cm", weight: "≈ 100 g", trimester: "2e trimestre", text: "Bébé bouge de plus en plus, même si les mouvements ne sont pas toujours ressentis." },
  { week: 20, size: "16 cm", weight: "≈ 300 g", trimester: "2e trimestre", text: "Bébé bouge beaucoup. C’est souvent une période rassurante pour de nombreux parents." },
  { week: 24, size: "30 cm", weight: "≈ 600 g", trimester: "2e trimestre", text: "Les mouvements peuvent devenir plus nets. Les sens poursuivent leur développement." },
  { week: 28, size: "36 cm", weight: "≈ 1 kg", trimester: "3e trimestre", text: "Le troisième trimestre commence. Bébé continue surtout à grandir et à prendre du poids." },
  { week: 32, size: "41 cm", weight: "≈ 1,7 kg", trimester: "3e trimestre", text: "La troisième échographie a souvent lieu autour de cette période." },
  { week: 36, size: "46 cm", weight: "≈ 2,6 kg", trimester: "3e trimestre", text: "La fin approche. Les rendez-vous deviennent plus rapprochés selon le suivi." },
  { week: 40, size: "50 cm", weight: "≈ 3,5 kg", trimester: "3e trimestre", text: "Bébé est proche du terme. Le suivi de fin de grossesse permet de vérifier que tout va bien." },
];

export default function BabyWeekViewer() {
  const [selectedWeek, setSelectedWeek] = useState(20);
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);

  const week = useMemo(
    () => weeks.find((item) => item.week === selectedWeek) ?? weeks[4],
    [selectedWeek]
  );

  const babyScale = 0.65 + selectedWeek / 95;

  return (
    <main className={styles.page}>
      <p className={styles.breadcrumb}>Accueil › Grossesse › Mon bébé semaine par semaine</p>

      <section className={styles.hero}>
        <div>
          <span className={styles.kicker}>Vue interactive</span>
          <h1>Mon bébé semaine par semaine</h1>
          <p>Un espace doux pour suivre l’évolution de bébé, comprendre les grandes étapes et revenir chaque semaine avec des repères simples.</p>
        </div>
      </section>

      <section className={styles.grid}>
        <aside className={styles.panel}>
          <div className={styles.weekHeader}>
            <div>
              <span>Semaine</span>
              <strong>{week.week}</strong>
              <small>{week.week} SA</small>
            </div>
            <div className={styles.trimester}>
              <CalendarDays size={20} />
              <p>{week.trimester}</p>
            </div>
          </div>

          <div className={styles.stats}>
            <div><Ruler size={21} /><span>Taille du bébé</span><strong>{week.size}</strong></div>
            <div><Scale size={21} /><span>Poids du bébé</span><strong>{week.weight}</strong></div>
          </div>

          <div className={styles.textBlock}>
            <Heart size={19} />
            <div>
              <h2>Cette semaine</h2>
              <p>{week.text}</p>
            </div>
          </div>

          <p className={styles.disclaimer}>Valeurs indicatives : elles ne remplacent jamais le suivi médical.</p>
        </aside>

        <section className={styles.viewer}>
          <div className={styles.viewerBadge}><Baby size={18} /><span>Vue douce illustrée</span></div>

          <div className={styles.babyScene} style={{ transform: `scale(${zoom}) rotate(${rotation}deg)` }}>
            <div className={styles.bubble}>
              <div className={styles.babyShape} style={{ transform: `scale(${babyScale})` }}>
                <span className={styles.head} />
                <span className={styles.body} />
                <span className={styles.armOne} />
                <span className={styles.armTwo} />
                <span className={styles.legOne} />
                <span className={styles.legTwo} />
              </div>
              <span className={styles.cord} />
            </div>
          </div>

          <div className={styles.controls}>
            <button onClick={() => setRotation((value) => value + 18)}><RotateCw size={18} />Rotation</button>
            <button onClick={() => setZoom((value) => Math.min(value + 0.08, 1.25))}><Plus size={18} />Zoom</button>
            <button onClick={() => setZoom((value) => Math.max(value - 0.08, 0.85))}><Minus size={18} />Dézoom</button>
          </div>
        </section>
      </section>

      <section className={styles.timeline}>
        <h2>Choisissez une semaine</h2>
        <div className={styles.weekList}>
          {weeks.map((item) => (
            <button key={item.week} className={item.week === selectedWeek ? styles.activeWeek : ""} onClick={() => setSelectedWeek(item.week)}>
              <span className={styles.miniBaby} />
              <strong>{item.week} SA</strong>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
