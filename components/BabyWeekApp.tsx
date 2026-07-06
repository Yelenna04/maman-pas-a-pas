"use client";

import Image from "next/image";
import { Baby, Heart, Info, Leaf, Lightbulb, Ruler, Scale } from "lucide-react";
import styles from "./BabyWeekApp.module.css";

const weeks = [
  {
    week: 4,
    label: "4 SA",
    trimester: "1er trimestre",
    size: "≈ 1 mm",
    weight: "< 1 g",
    comparison: "une graine de pavot",
    image: "/images/babyWeeks/bebe-04-sa.png",
    baby:
      "Ton bébé est au tout début de son histoire. Les premières cellules s’organisent et les bases du développement commencent à se mettre en place.",
    mama:
      "Ton corps commence à produire l’hormone de grossesse (hCG). Tu peux ne rien ressentir, et c’est normal.",
    advice:
      "Prends soin de toi, repose-toi et adopte une alimentation équilibrée. En cas de doute, demande conseil à un professionnel de santé.",
  },
];

export default function BabyWeekApp() {
  const current = weeks[0];

  return (
    <main className={styles.page}>
      <section className={styles.shell}>
        <aside className={styles.panel}>
          <a className={styles.back} href="/pendant-grossesse">
            ← Retour à la grossesse
          </a>

          <div className={styles.weekTitle}>
            <strong>{current.week}</strong>
            <span>SA</span>
          </div>

          <div className={styles.trimester}>{current.trimester}</div>

          <div className={styles.divider} />

          <InfoLine icon={<Ruler size={28} />} label="Taille" value={current.size} helper="environ" />
          <InfoLine icon={<Scale size={28} />} label="Poids" value={current.weight} helper="environ" />

          <div className={styles.metric}>
            <Leaf size={28} />
            <div>
              <p>Comparable à</p>
              <strong>{current.comparison}</strong>
            </div>
            <Info size={17} className={styles.infoIcon} />
          </div>

          <TextBlock icon={<Heart size={24} />} title="Côté bébé" text={current.baby} />
          <TextBlock icon={<Baby size={24} />} title="Côté maman" text={current.mama} />
          <TextBlock icon={<Lightbulb size={24} />} title="Conseils" text={current.advice} />
        </aside>

        <section className={styles.visualCard}>
          <span className={styles.visualBadge}>Vue illustrée · {current.label}</span>

          <div className={styles.imageWrap}>
            <Image
              src={current.image}
              alt="Illustration douce de l’embryon à 4 SA"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 70vw"
              className={styles.image}
            />
          </div>
        </section>
      </section>

      <nav className={styles.weekNav} aria-label="Navigation des semaines de grossesse">
        {["4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "…", "40"].map((week) => (
          <button
            key={week}
            type="button"
            className={week === "4" ? styles.activeWeek : ""}
            disabled={week !== "4"}
          >
            <strong>{week}</strong>
            {week !== "…" && <span>SA</span>}
          </button>
        ))}
      </nav>
    </main>
  );
}

function InfoLine({
  icon,
  label,
  value,
  helper,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  helper: string;
}) {
  return (
    <div className={styles.metric}>
      {icon}
      <div>
        <p>{label}</p>
        <strong>{value}</strong>
        <small>{helper}</small>
      </div>
    </div>
  );
}

function TextBlock({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className={styles.textBlock}>
      <span>{icon}</span>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
