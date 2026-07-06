import type { BabyWeek } from "@/data/babyWeeks";
import styles from "./BabyWeekApp.module.css";

export function WeekSelector({
  weeks,
  selectedWeek,
  onSelectWeek,
}: {
  weeks: BabyWeek[];
  selectedWeek: number;
  onSelectWeek: (week: number) => void;
}) {
  return (
    <nav className={styles.weekNav} aria-label="Navigation des semaines de grossesse">
      {weeks.map((week) => (
        <button
          key={week.week}
          type="button"
          onClick={() => onSelectWeek(week.week)}
          className={week.week === selectedWeek ? styles.activeWeek : ""}
        >
          <strong>{week.week}</strong>
          <span>SA</span>
        </button>
      ))}
    </nav>
  );
}
