"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Baby, CalendarDays, ChevronLeft, ChevronRight, Heart, Lightbulb, Ruler, Scale } from "lucide-react";
import styles from "./BabyWeekPremium.module.css";

const weeks = [
  {
    week: 4,
    size: "≈ 1 mm",
    weight: "< 1 g",
    comparison: "une graine de pavot",
    trimester: "1er trimestre",
    baby: "Ton bébé est au tout début de son histoire. Les premières cellules s’organisent et les bases du développement commencent à se mettre en place.",
    mama: "Ton corps commence à produire l’hormone de grossesse hCG. Tu peux ne rien ressentir, et c’est normal.",
    advice: "À 4 SA, tout est encore très précoce. En cas de doute, demande conseil à un professionnel de santé.",
    image: "/images/babyWeeks/bebe-04-sa.png",
  },
  {
    week: 5,
    size: "≈ 2 mm",
    weight: "< 1 g",
    comparison: "une graine de sésame",
    trimester: "1er trimestre",
    baby: "Le cœur primitif commence à se former. Le tube neural poursuit son développement.",
    mama: "Fatigue, seins sensibles, tiraillements ou nausées peuvent apparaître.",
    advice: "Continue l’acide folique si elle t’a été prescrite et évite les médicaments non validés.",
    image: "/images/babyWeeks/bebe-05-sa.png",
  },
  {
    week: 6,
    size: "4–6 mm",
    weight: "< 1 g",
    comparison: "une lentille",
    trimester: "1er trimestre",
    baby: "Le cœur commence à battre. Les premiers bourgeons des bras et des jambes apparaissent.",
    mama: "Les nausées peuvent commencer ou s’intensifier. La fatigue peut être importante.",
    advice: "Une échographie de datation peut être proposée selon ta situation et ton suivi.",
    image: "/images/babyWeeks/bebe-06-sa.png",
  },
  {
    week: 7,
    size: "≈ 10 mm",
    weight: "< 1 g",
    comparison: "une myrtille",
    trimester: "1er trimestre",
    baby: "Le visage commence à se dessiner. Les bras et les jambes s’allongent progressivement.",
    mama: "Tu peux ressentir de la fatigue, des seins sensibles ou des changements d’appétit.",
    advice: "Hydrate-toi régulièrement et fractionne les repas si les nausées sont présentes.",
    image: "/images/babyWeeks/bebe-07-sa.png",
  },
  {
    week: 8,
    size: "≈ 16 mm",
    weight: "≈ 1 g",
    comparison: "une framboise",
    trimester: "1er trimestre",
    baby: "Bébé bouge déjà, même si tu ne peux pas encore le sentir. Les organes principaux continuent leur formation.",
    mama: "Les symptômes peuvent varier d’un jour à l’autre, sans que cela soit forcément inquiétant.",
    advice: "Prépare les questions à poser lors de ton premier rendez-vous de grossesse.",
    image: "/images/babyWeeks/bebe-08-sa.png",
  },
  {
    week: 9,
    size: "≈ 22 mm",
    weight: "≈ 2 g",
    comparison: "une cerise",
    trimester: "1er trimestre",
    baby: "Les paupières, les oreilles et la bouche continuent de se former. Bébé devient plus actif.",
    mama: "Les nausées et la fatigue peuvent être encore très présentes.",
    advice: "En cas de douleurs importantes, saignements ou malaise, demande rapidement un avis médical.",
    image: "/images/babyWeeks/bebe-09-sa.png",
  },
  {
    week: 10,
    size: "≈ 31 mm",
    weight: "≈ 4 g",
    comparison: "une fraise",
    trimester: "1er trimestre",
    baby: "Les doigts et les orteils sont mieux dessinés. Le cœur bat et les organes essentiels sont en place.",
    mama: "Ton utérus continue de grandir doucement.",
    advice: "Continue une alimentation simple, variée et adaptée aux précautions de grossesse.",
    image: "/images/babyWeeks/bebe-10-sa.png",
  },
  {
    week: 11,
    size: "≈ 41 mm",
    weight: "≈ 7 g",
    comparison: "un raisin",
    trimester: "1er trimestre",
    baby: "Bébé bouge de plus en plus et commence à déglutir. Les organes poursuivent leur développement.",
    mama: "Tu peux commencer à te sentir un peu mieux, ou au contraire rester très fatiguée.",
    advice: "La première échographie approche souvent autour de cette période.",
    image: "/images/babyWeeks/bebe-11-sa.png",
  },
  {
    week: 12,
    size: "≈ 53 mm",
    weight: "≈ 14 g",
    comparison: "une prune",
    trimester: "1er trimestre",
    baby: "Les organes continuent à pousser. Bébé peut ouvrir la bouche et bouger la langue.",
    mama: "Certaines nausées commencent à diminuer progressivement.",
    advice: "C’est souvent la période de l’échographie du premier trimestre.",
    image: "/images/babyWeeks/bebe-12-sa.png",
  },
  {
    week: 13,
    size: "≈ 72 mm",
    weight: "≈ 23 g",
    comparison: "une pêche",
    trimester: "1er trimestre",
    baby: "Les cordes vocales se forment. Bébé avale du liquide amniotique.",
    mama: "Ton ventre peut commencer à s’arrondir légèrement.",
    advice: "La déclaration de grossesse est généralement organisée après le premier examen prénatal.",
    image: "/images/babyWeeks/bebe-13-sa.png",
  },
  {
    week: 14,
    size: "≈ 87 mm",
    weight: "≈ 43 g",
    comparison: "un citron vert",
    trimester: "2e trimestre",
    baby: "Bébé peut faire des grimaces et ses mouvements deviennent plus coordonnés.",
    mama: "Tu peux retrouver un peu d’énergie au début du deuxième trimestre.",
    advice: "Continue à privilégier le repos si tu en ressens le besoin.",
    image: "/images/babyWeeks/bebe-14-sa.png",
  },
  {
    week: 15,
    size: "≈ 101 mm",
    weight: "≈ 70 g",
    comparison: "une orange",
    trimester: "2e trimestre",
    baby: "Les sensations tactiles se développent. Bébé peut réagir au toucher.",
    mama: "Le ventre devient parfois plus visible.",
    advice: "Pense à signaler tout symptôme inhabituel lors de tes rendez-vous.",
    image: "/images/babyWeeks/bebe-15-sa.png",
  },
  {
    week: 16,
    size: "≈ 116 mm",
    weight: "≈ 100 g",
    comparison: "un avocat",
    trimester: "2e trimestre",
    baby: "Les oreilles sont bien en place. Bébé commence à entendre certains sons atténués.",
    mama: "Certaines femmes ressentent les premiers mouvements.",
    advice: "Les mouvements peuvent être très discrets au début, comme des bulles.",
    image: "/images/babyWeeks/bebe-16-sa.png",
  },
  {
    week: 17,
    size: "≈ 130 mm",
    weight: "≈ 140 g",
    comparison: "une poire",
    trimester: "2e trimestre",
    baby: "Le lanugo apparaît sur sa peau et le vernix commence à le protéger.",
    mama: "Des tiraillements ligamentaires peuvent apparaître.",
    advice: "Adapte tes positions et demande conseil si les douleurs deviennent fortes.",
    image: "/images/babyWeeks/bebe-17-sa.png",
  },
  {
    week: 18,
    size: "≈ 143 mm",
    weight: "≈ 190 g",
    comparison: "un poivron",
    trimester: "2e trimestre",
    baby: "Bébé peut sucer son pouce et réagir à la lumière.",
    mama: "Le ventre s’arrondit davantage.",
    advice: "L’échographie morphologique se prépare dans les semaines à venir.",
    image: "/images/babyWeeks/bebe-18-sa.png",
  },
  {
    week: 19,
    size: "≈ 161 mm",
    weight: "≈ 300 g",
    comparison: "une mangue",
    trimester: "2e trimestre",
    baby: "Son audition se développe et il reconnaît déjà progressivement ta voix.",
    mama: "Les mouvements peuvent devenir plus perceptibles.",
    advice: "Note tes questions avant l’échographie morphologique.",
    image: "/images/babyWeeks/bebe-19-sa.png",
  },
  {
    week: 20,
    size: "≈ 170 mm",
    weight: "≈ 300 g",
    comparison: "une banane",
    trimester: "2e trimestre",
    baby: "Bébé grandit, bouge beaucoup et ses mouvements deviennent plus coordonnés.",
    mama: "Tu peux ressentir des douleurs dorsales ou ligamentaires.",
    advice: "C’est souvent la période de l’échographie morphologique.",
    image: "/images/babyWeeks/bebe-20-sa.png",
  },
  {
    week: 21,
    size: "≈ 178 mm",
    weight: "≈ 430 g",
    comparison: "une carotte",
    trimester: "2e trimestre",
    baby: "Les poumons continuent à mûrir et bébé bouge beaucoup.",
    mama: "Tu peux avoir plus d’essoufflement ou de tiraillements.",
    advice: "Continue à surveiller ton confort, ton sommeil et ton hydratation.",
    image: "/images/babyWeeks/bebe-21-sa.png",
  },
  {
    week: 22,
    size: "≈ 187 mm",
    weight: "≈ 500 g",
    comparison: "une papaye",
    trimester: "2e trimestre",
    baby: "Les sourcils et les cils apparaissent. Bébé peut réagir aux sons.",
    mama: "Les mouvements sont souvent plus reconnaissables.",
    advice: "Demande conseil si tu constates une diminution nette des mouvements plus tard dans la grossesse.",
    image: "/images/babyWeeks/bebe-22-sa.png",
  },
  {
    week: 23,
    size: "≈ 200 mm",
    weight: "≈ 600 g",
    comparison: "un pamplemousse",
    trimester: "2e trimestre",
    baby: "Ses poumons produisent progressivement le surfactant, essentiel pour respirer après la naissance.",
    mama: "Le ventre prend davantage de place.",
    advice: "Prends le temps de te reposer dès que possible.",
    image: "/images/babyWeeks/bebe-23-sa.png",
  },
  {
    week: 24,
    size: "≈ 204 mm",
    weight: "≈ 660 g",
    comparison: "un épi de maïs",
    trimester: "2e trimestre",
    baby: "Bébé réagit aux sons forts et peut avoir des cycles de sommeil et d’éveil.",
    mama: "Le sommeil peut devenir moins confortable.",
    advice: "Essaie de trouver des positions qui soulagent le dos et le bassin.",
    image: "/images/babyWeeks/bebe-24-sa.png",
  },
  {
    week: 25,
    size: "≈ 215 mm",
    weight: "≈ 760 g",
    comparison: "un kiwi",
    trimester: "2e trimestre",
    baby: "Ses empreintes digitales se forment et son sens du toucher s’affine.",
    mama: "La fatigue peut revenir par moments.",
    advice: "Une activité douce peut aider si elle est autorisée par ton suivi.",
    image: "/images/babyWeeks/bebe-25-sa.png",
  },
  {
    week: 26,
    size: "≈ 225 mm",
    weight: "≈ 875 g",
    comparison: "une aubergine",
    trimester: "2e trimestre",
    baby: "Les yeux s’ouvrent à nouveau après s’être formés auparavant.",
    mama: "Tu peux ressentir des coups plus nets.",
    advice: "Surveille les contractions douloureuses ou régulières et demande conseil en cas de doute.",
    image: "/images/babyWeeks/bebe-26-sa.png",
  },
  {
    week: 27,
    size: "≈ 235 mm",
    weight: "≈ 1 kg",
    comparison: "un chou-fleur",
    trimester: "2e trimestre",
    baby: "Son cerveau continue de se développer rapidement.",
    mama: "Ton ventre peut devenir plus lourd.",
    advice: "Le troisième trimestre approche : commence doucement à anticiper l’organisation.",
    image: "/images/babyWeeks/bebe-27-sa.png",
  },
  {
    week: 28,
    size: "≈ 245 mm",
    weight: "≈ 1,15 kg",
    comparison: "une laitue",
    trimester: "3e trimestre",
    baby: "Bébé régule mieux sa température corporelle.",
    mama: "Le suivi devient progressivement plus rapproché.",
    advice: "La vigilance sur les mouvements de bébé devient importante.",
    image: "/images/babyWeeks/bebe-28-sa.png",
  },
  {
    week: 29,
    size: "≈ 265 mm",
    weight: "≈ 1,3 kg",
    comparison: "une courge spaghetti",
    trimester: "3e trimestre",
    baby: "Ses os continuent de se renforcer.",
    mama: "Tu peux avoir besoin d’aller plus souvent aux toilettes.",
    advice: "En cas de diminution des mouvements, appelle la maternité.",
    image: "/images/babyWeeks/bebe-29-sa.png",
  },
  {
    week: 30,
    size: "≈ 275 mm",
    weight: "≈ 1,7 kg",
    comparison: "un concombre",
    trimester: "3e trimestre",
    baby: "Bébé reconnaît certaines odeurs et certains sons.",
    mama: "Le repos devient souvent plus nécessaire.",
    advice: "Prépare progressivement les affaires utiles pour la maternité.",
    image: "/images/babyWeeks/bebe-30-sa.png",
  },
  {
    week: 31,
    size: "≈ 285 mm",
    weight: "≈ 1,9 kg",
    comparison: "un ananas",
    trimester: "3e trimestre",
    baby: "Les poumons poursuivent leur maturation et les mouvements peuvent changer.",
    mama: "L’essoufflement peut être plus marqué.",
    advice: "N’hésite pas à fractionner les activités et à demander de l’aide.",
    image: "/images/babyWeeks/bebe-31-sa.png",
  },
  {
    week: 32,
    size: "≈ 295 mm",
    weight: "≈ 2,1 kg",
    comparison: "un melon",
    trimester: "3e trimestre",
    baby: "Bébé prend du poids plus rapidement et ses os se solidifient.",
    mama: "La troisième échographie a souvent lieu autour de cette période.",
    advice: "On vérifie notamment la croissance, la position de bébé et le placenta.",
    image: "/images/babyWeeks/bebe-32-sa.png",
  },
  {
    week: 33,
    size: "≈ 305 mm",
    weight: "≈ 2,3 kg",
    comparison: "une noix de coco",
    trimester: "3e trimestre",
    baby: "Il peut avoir le hoquet et ses organes sont presque matures.",
    mama: "Le sommeil peut être plus difficile.",
    advice: "Continue à écouter ton corps et à ralentir si besoin.",
    image: "/images/babyWeeks/bebe-33-sa.png",
  },
  {
    week: 34,
    size: "≈ 315 mm",
    weight: "≈ 2,5 kg",
    comparison: "un cantaloup",
    trimester: "3e trimestre",
    baby: "Bébé se prépare à la vie à l’extérieur et prend encore du poids.",
    mama: "Reflux, jambes lourdes et fatigue peuvent être présents.",
    advice: "Finalise la valise de maternité si ce n’est pas encore fait.",
    image: "/images/babyWeeks/bebe-34-sa.png",
  },
  {
    week: 35,
    size: "≈ 325 mm",
    weight: "≈ 2,7 kg",
    comparison: "un melon d’eau",
    trimester: "3e trimestre",
    baby: "Ses poumons sont presque prêts et il prend du poids.",
    mama: "Tu peux ressentir davantage de pression dans le bassin.",
    advice: "Les contractions irrégulières peuvent apparaître.",
    image: "/images/babyWeeks/bebe-35-sa.png",
  },
  {
    week: 36,
    size: "≈ 335 mm",
    weight: "≈ 2,9 kg",
    comparison: "un pomelo",
    trimester: "3e trimestre",
    baby: "Bébé prend souvent la position tête en bas, prêt pour la naissance.",
    mama: "Le col et le bassin se préparent progressivement.",
    advice: "Renseigne-toi sur les signes qui doivent faire appeler la maternité.",
    image: "/images/babyWeeks/bebe-36-sa.png",
  },
  {
    week: 37,
    size: "≈ 345 mm",
    weight: "≈ 3,1 kg",
    comparison: "une pastèque",
    trimester: "3e trimestre",
    baby: "Bébé est considéré à terme, même s’il continue à mûrir.",
    mama: "Les signes de fin de grossesse peuvent s’intensifier.",
    advice: "Garde les numéros utiles et ton sac de maternité prêts.",
    image: "/images/babyWeeks/bebe-37-sa.png",
  },
  {
    week: 38,
    size: "≈ 355 mm",
    weight: "≈ 3,3 kg",
    comparison: "une courge butternut",
    trimester: "3e trimestre",
    baby: "Ses organes sont matures et il prend encore un peu de poids.",
    mama: "Tu peux ressentir plus de fatigue et de pression.",
    advice: "Appelle en cas de perte des eaux, saignements, fièvre ou baisse des mouvements.",
    image: "/images/babyWeeks/bebe-38-sa.png",
  },
  {
    week: 39,
    size: "≈ 365 mm",
    weight: "≈ 3,3 kg",
    comparison: "un petit chou rouge",
    trimester: "3e trimestre",
    baby: "Il continue à se préparer pour sa grande arrivée.",
    mama: "L’attente peut devenir longue émotionnellement.",
    advice: "Essaie de te reposer et d’éviter de rester seule si tu es inquiète.",
    image: "/images/babyWeeks/bebe-39-sa.png",
  },
  {
    week: 40,
    size: "≈ 370–380 mm",
    weight: "≈ 3,6–4 kg",
    comparison: "un petit potiron",
    trimester: "3e trimestre",
    baby: "Ton bébé est prêt à faire sa rencontre avec toi.",
    mama: "Le terme est là ou très proche. Le suivi permet de vérifier que tout va bien.",
    advice: "En cas de doute, appelle la maternité : c’est toujours préférable.",
    image: "/images/babyWeeks/bebe-40-sa.png",
  }
];

export default function BabyWeekPremium() {
  const [selectedWeek, setSelectedWeek] = useState(4);
  const current = useMemo(() => weeks.find((item) => item.week === selectedWeek) ?? weeks[0], [selectedWeek]);
  const index = weeks.findIndex((item) => item.week === selectedWeek);
  const previous = () => setSelectedWeek(weeks[Math.max(0, index - 1)].week);
  const next = () => setSelectedWeek(weeks[Math.min(weeks.length - 1, index + 1)].week);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.kicker}>Outil grossesse</p>
        <h1>Mon bébé semaine par semaine</h1>
        <p>Une expérience douce pour suivre l’évolution de bébé, comprendre les grandes étapes et retrouver des repères simples de 4 SA à 40 SA.</p>
      </section>

      <section className={styles.weekNav} aria-label="Choisir une semaine">
        <button type="button" onClick={previous} className={styles.arrow}><ChevronLeft size={20} /></button>
        <div className={styles.weekList}>
          {weeks.map((week) => (
            <button key={week.week} type="button" onClick={() => setSelectedWeek(week.week)} className={week.week === selectedWeek ? styles.active : ""}>{week.week} SA</button>
          ))}
        </div>
        <button type="button" onClick={next} className={styles.arrow}><ChevronRight size={20} /></button>
      </section>

      <section className={styles.appGrid}>
        <article className={styles.infoCard}>
          <div className={styles.weekTop}>
            <div><strong>{current.week}</strong><span>SA</span></div>
            <p><CalendarDays size={18} /> {current.trimester}</p>
          </div>

          <div className={styles.stats}>
            <div><Ruler size={20} /><span>Taille</span><strong>{current.size}</strong><small>environ</small></div>
            <div><Scale size={20} /><span>Poids</span><strong>{current.weight}</strong><small>environ</small></div>
            <div><Heart size={20} /><span>Comparable à</span><strong>{current.comparison}</strong></div>
          </div>

          <Info title="Côté bébé" text={current.baby} icon="heart" />
          <Info title="Côté maman" text={current.mama} icon="baby" />
          <Info title="À savoir" text={current.advice} icon="light" />
        </article>

        <article className={styles.visualCard}>
          <div className={styles.visualBadge}>Vue illustrée · {current.week} SA</div>
          <div className={styles.imageWrap}>
            <Image src={current.image} alt={`Fiche bébé ${current.week} SA`} fill priority sizes="(max-width: 900px) 100vw, 60vw" className={styles.image} />
          </div>
        </article>
      </section>
    </main>
  );
}

function Info({ title, text, icon }: { title: string; text: string; icon: "heart" | "baby" | "light" }) {
  const Icon = icon === "heart" ? Heart : icon === "baby" ? Baby : Lightbulb;
  return (
    <div className={styles.infoBlock}>
      <Icon size={20} />
      <div><h2>{title}</h2><p>{text}</p></div>
    </div>
  );
}
