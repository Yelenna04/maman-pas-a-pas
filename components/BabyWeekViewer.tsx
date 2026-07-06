"use client";

import Image from "next/image";
import {
  Baby,
  ChevronLeft,
  ChevronRight,
  Heart,
  Info,
  Leaf,
  Lightbulb,
  Ruler,
  Scale,
} from "lucide-react";
import styles from "./BabyWeekViewer.module.css";

export default function BabyWeekViewer() {
  return (
    <main className={styles.page}>
      <section className={styles.shell}>
        <aside className={styles.panel}>
          <a className={styles.back} href="/pendant-grossesse">
            ← Retour à la grossesse
          </a>

          <div className={styles.weekTitle}>
            <strong>4</strong>
            <span>SA</span>
          </div>

          <div className={styles.trimester}>1er trimestre</div>

          <div className={styles.divider} />

          <InfoLine
            icon={<Heart size={28} />}
            label="Taille"
            value="≈ 1 mm"
            helper="environ"
          />

          <InfoLine
            icon={<Scale size={28} />}
            label="Poids"
            value="< 1 g"
            helper="environ"
          />

          <div className={styles.metric}>
            <Leaf size={28} />
            <div>
              <p>Comparable à</p>
              <strong>une graine de pavot</strong>
            </div>
            <Info size={17} className={styles.infoIcon} />
          </div>

          <TextBlock
            icon={<Heart size={24} />}
            title="Côté bébé"
            text="Ton bébé est au tout début de son histoire. Les premières cellules s’organisent et les bases du développement commencent à se mettre en place."
          />

          <TextBlock
            icon={<Baby size={24} />}
            title="Côté maman"
            text="Ton corps commence à produire l’hormone de grossesse (hCG). Tu peux ne rien ressentir, et c’est normal."
          />

          <TextBlock
            icon={<Lightbulb size={24} />}
            title="Conseils"
            text="Prends soin de toi, repose-toi et adopte une alimentation équilibrée. En cas de doute, demande conseil à un professionnel de santé."
          />
        </aside>

        <section className={styles.visualCard}>
          <span className={styles.visualBadge}>Vue illustrée</span>

          <div className={styles.imageWrap}>
            <Image
              src="/images/babyWeeks/bebe-04-sa.png"
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
        <button type="button" aria-label="Semaine précédente">
          <ChevronLeft size={24} />
        </button>

        {["4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"].map(
          (week) => (
            <a
              key={week}
              className={week === "4" ? styles.activeWeek : ""}
              href="#"
            >
              <strong>{week}</strong>
              <span>SA</span>
            </a>
          )
        )}

        <span className={styles.dots}>…</span>

        <a href="#">
          <strong>40</strong>
          <span>SA</span>
        </a>

        <button type="button" aria-label="Semaine suivante">
          <ChevronRight size={24} />
        </button>
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
