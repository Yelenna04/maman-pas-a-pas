"use client";

import Image from "next/image";
import { Baby, CalendarDays, Heart, Lightbulb, Ruler, Scale, Sparkles, Stethoscope } from "lucide-react";
import styles from "./BabyWeekViewer.module.css";

export default function BabyWeekViewer() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.kicker}>Outil grossesse</p>
        <h1>Mon bébé semaine par semaine</h1>
        <p>
          Une page douce pour suivre l’évolution de bébé, comprendre les grandes étapes
          et retrouver des repères simples à chaque semaine de grossesse.
        </p>
      </section>

      <section className={styles.weekNav}>
        <button>‹</button>
        {["4 SA", "5 SA", "6 SA", "7 SA", "8 SA", "9 SA", "10 SA", "11 SA", "12 SA", "…", "40 SA"].map((item) => (
          <span key={item} className={item === "6 SA" ? styles.active : ""}>{item}</span>
        ))}
        <button>›</button>
      </section>

      <section className={styles.grid}>
        <article className={styles.mainCard}>
          <div className={styles.topLine}>
            <div><strong>6</strong><span>SA</span></div>
            <p><CalendarDays size={18} /> 1er trimestre</p>
          </div>

          <p className={styles.intro}>
            Ton bébé est encore minuscule, mais son développement avance à grands pas.
          </p>

          <div className={styles.stats}>
            <div><Ruler size={20} /><span>Taille</span><strong>4–6 mm</strong><small>environ</small></div>
            <div><Scale size={20} /><span>Poids</span><strong>&lt; 1 g</strong><small>environ</small></div>
            <div><Heart size={20} /><span>Comparable à</span><strong>—</strong></div>
          </div>

          <InfoBlock icon={<Heart size={20} />} title="Côté bébé" text="Le tube neural se forme, le cœur commence à battre et les premiers bourgeons des bras et des jambes apparaissent." />
          <InfoBlock icon={<Baby size={20} />} title="Côté maman" text="Les hormones de grossesse augmentent. Fatigue, seins sensibles ou nausées peuvent apparaître." />
          <InfoBlock icon={<Stethoscope size={20} />} title="Examens" text="Première prise de sang et début du suivi de grossesse. Échographie de datation selon les recommandations." />
          <InfoBlock icon={<Lightbulb size={20} />} title="Conseils" text="Prends l’acide folique si elle t’a été prescrite, évite l’alcool, le tabac et les médicaments non validés." />
        </article>

        <article className={styles.imageCard}>
          <div className={styles.badge}><Sparkles size={18} /> Vue dans le ventre de maman</div>
          <div className={styles.imageWrap}>
            <Image
              src="/images/babyWeeks/bebe-semaine-par-semaine-premium.png"
              alt="Aperçu premium de la page Mon bébé semaine par semaine"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 60vw"
              className={styles.image}
            />
          </div>
        </article>
      </section>

      <section className={styles.reminder}>
        <Lightbulb size={24} />
        <div>
          <h2>À retenir</h2>
          <p>Chaque grossesse évolue à son rythme. Ces informations sont indicatives et ne remplacent jamais l’avis d’un professionnel de santé.</p>
        </div>
      </section>
    </main>
  );
}

function InfoBlock({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className={styles.infoBlock}>
      {icon}
      <div><h2>{title}</h2><p>{text}</p></div>
    </div>
  );
}
