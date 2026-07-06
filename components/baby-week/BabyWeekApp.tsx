"use client";

import { useMemo, useState } from "react";
import { babyWeeks } from "@/data/babyWeeks";
import { BabyWeekPanel } from "./BabyWeekPanel";
import { BabyWeekVisual } from "./BabyWeekVisual";
import { WeekSelector } from "./WeekSelector";
import styles from "./BabyWeekApp.module.css";

export default function BabyWeekApp() {
  const [selectedWeek, setSelectedWeek] = useState(4);

  const currentWeek = useMemo(
    () => babyWeeks.find((week) => week.week === selectedWeek) ?? babyWeeks[0],
    [selectedWeek]
  );

  return (
    <main className={styles.page}>
      <section className={styles.shell}>
        <BabyWeekPanel week={currentWeek} />
        <BabyWeekVisual week={currentWeek} />
      </section>

      <WeekSelector
        weeks={babyWeeks}
        selectedWeek={selectedWeek}
        onSelectWeek={setSelectedWeek}
      />
    </main>
  );
}
