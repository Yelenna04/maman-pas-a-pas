import Image from "next/image";
import type { BabyWeek } from "@/data/babyWeeks";
import styles from "./BabyWeekApp.module.css";

export function BabyWeekVisual({ week }: { week: BabyWeek }) {
  return (
    <section className={styles.visualCard}>
      <span className={styles.visualBadge}>Vue illustrée · {week.label}</span>

      <div className={styles.imageWrap}>
        {week.image ? (
          <Image
            src={week.image}
            alt={`Illustration douce de l’évolution de bébé à ${week.label}`}
            fill
            priority={week.week === 4}
            sizes="(max-width: 900px) 100vw, 70vw"
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}>
            <div className={styles.softSphere} />
            <p>Illustration {week.label} bientôt disponible</p>
          </div>
        )}
      </div>
    </section>
  );
}
