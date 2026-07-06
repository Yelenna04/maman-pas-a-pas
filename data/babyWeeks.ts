export type BabyWeek = {
  week: number;
  label: string;
  trimester: string;
  size: string;
  weight: string;
  comparison: string;
  image?: string;
  baby: string;
  mama: string;
  advice: string;
};

export const babyWeeks: BabyWeek[] = [
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
      "Ton corps commence à produire l’hormone de grossesse hCG. Tu peux ne rien ressentir, et c’est normal.",
    advice:
      "Prends soin de toi, repose-toi et adopte une alimentation équilibrée. En cas de doute, demande conseil à un professionnel de santé.",
  },
  {
    week: 5,
    label: "5 SA",
    trimester: "1er trimestre",
    size: "≈ 2 mm",
    weight: "< 1 g",
    comparison: "une graine de sésame",
    baby:
      "Le développement se poursuit très rapidement. Les premières structures qui formeront le cerveau, la moelle épinière et le cœur commencent à se préciser.",
    mama:
      "La fatigue, les seins sensibles ou de légers tiraillements peuvent apparaître. Certaines femmes n’ont encore aucun symptôme.",
    advice:
      "Si ce n’est pas déjà fait, prends rendez-vous pour organiser ton suivi de grossesse.",
  },
  {
    week: 6,
    label: "6 SA",
    trimester: "1er trimestre",
    size: "4–6 mm",
    weight: "< 1 g",
    comparison: "une lentille",
    baby:
      "Le cœur commence à battre. Les premiers bourgeons des bras et des jambes apparaissent progressivement.",
    mama:
      "Les nausées peuvent commencer ou s’intensifier. La fatigue peut être très présente.",
    advice:
      "Hydrate-toi régulièrement et fractionne les repas si les nausées sont importantes.",
  },
  {
    week: 7,
    label: "7 SA",
    trimester: "1er trimestre",
    size: "≈ 1 cm",
    weight: "< 1 g",
    comparison: "une myrtille",
    baby:
      "Le visage commence doucement à se dessiner. Les bras et les jambes continuent de s’allonger.",
    mama:
      "Les symptômes peuvent varier d’un jour à l’autre, sans que cela signifie forcément un problème.",
    advice:
      "Évite l’automédication et demande toujours un avis médical avant de prendre un médicament.",
  },
  {
    week: 8,
    label: "8 SA",
    trimester: "1er trimestre",
    size: "≈ 1,5 cm",
    weight: "≈ 1 g",
    comparison: "une framboise",
    baby:
      "Bébé bouge déjà, même si tu ne peux pas encore le sentir. Les organes principaux poursuivent leur formation.",
    mama:
      "La fatigue et les nausées peuvent encore être présentes. Les émotions peuvent aussi être plus intenses.",
    advice:
      "Note tes questions pour le prochain rendez-vous de grossesse.",
  },
  {
    week: 9,
    label: "9 SA",
    trimester: "1er trimestre",
    size: "2–3 cm",
    weight: "≈ 2 g",
    comparison: "une cerise",
    baby:
      "Les paupières, les oreilles et la bouche continuent de se former. Bébé devient de plus en plus actif.",
    mama:
      "Le ventre peut encore ne pas se voir. C’est normal à ce stade.",
    advice:
      "En cas de douleurs importantes, de saignements ou de malaise, demande rapidement un avis médical.",
  },
  {
    week: 10,
    label: "10 SA",
    trimester: "1er trimestre",
    size: "≈ 3 cm",
    weight: "≈ 4 g",
    comparison: "une fraise",
    baby:
      "Les doigts et les orteils sont mieux dessinés. Les organes essentiels sont en place et continuent de mûrir.",
    mama:
      "L’utérus continue de grandir doucement, même si cela reste peu visible.",
    advice:
      "Continue une alimentation simple, variée et adaptée aux précautions de grossesse.",
  },
  {
    week: 11,
    label: "11 SA",
    trimester: "1er trimestre",
    size: "≈ 4 cm",
    weight: "≈ 7 g",
    comparison: "un raisin",
    baby:
      "Bébé bouge de plus en plus et commence à déglutir. Ses organes poursuivent leur développement.",
    mama:
      "La fatigue peut être encore importante, mais certaines femmes commencent à se sentir un peu mieux.",
    advice:
      "La première échographie approche souvent autour de cette période.",
  },
  {
    week: 12,
    label: "12 SA",
    trimester: "1er trimestre",
    size: "5–6 cm",
    weight: "≈ 14 g",
    comparison: "une prune",
    baby:
      "Bébé grandit rapidement. Les organes continuent leur développement et les mouvements sont plus coordonnés.",
    mama:
      "Certaines nausées commencent à diminuer progressivement. Le ventre peut commencer à s’arrondir.",
    advice:
      "C’est souvent la période de l’échographie du premier trimestre et du dépistage proposé pendant la grossesse.",
  },
];
