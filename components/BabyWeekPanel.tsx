import { Baby, Heart, Info, Leaf, Lightbulb, Ruler, Scale } from "lucide-react";
import type { BabyWeek } from "@/data/babyWeeks";
import styles from "./BabyWeekApp.module.css";

export function BabyWeekPanel({ week }: { week: BabyWeek }) {
  return (
    <aside className={styles.panel}>
      <a className={styles.back} href="/pendant-grossesse">
        ← Retour à la grossesse
      </a>

      <div className={styles.weekTitle}>
        <strong>{week.week}</strong>
        <span>SA</span>
      </div>

      <div className={styles.trimester}>{week.trimester}</div>

      <div className={styles.divider} />

      <InfoLine icon={<Ruler size={28} />} label="Taille" value={week.size} helper="environ" />
      <InfoLine icon={<Scale size={28} />} label="Poids" value={week.weight} helper="environ" />

      <div className={styles.metric}>
        <Leaf size={28} />
        <div>
          <p>Comparable à</p>
          <strong>{week.comparison}</strong>
        </div>
        <Info size={17} className={styles.infoIcon} />
      </div>

      <TextBlock icon={<Heart size={24} />} title="Côté bébé" text={week.baby} />
      <TextBlock icon={<Baby size={24} />} title="Côté maman" text={week.mama} />
      <TextBlock icon={<Lightbulb size={24} />} title="Conseils" text={week.advice} />
    </aside>
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
