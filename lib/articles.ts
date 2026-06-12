export type ArticleSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  quote?: string;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  subcategory?: string;
  subcategorySlug?: string;
  readingTime: string;
  publishedAt: string;
  updatedAt: string;
  tone: "rose" | "sage" | "sand";
  sections: ArticleSection[];
  sources: { label: string; url: string }[];
};

export const articles: Article[] = [
  {
    slug: "comment-reperer-ovulation-periode-fertile",
    title: "Comment repérer son ovulation ?",
    description:
      "Comprendre les signes de l’ovulation pour mieux connaître son cycle, sans pression ni prise de tête.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Fertilité et cycle",
    subcategorySlug: "fertilite-cycle",
    readingTime: "4 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "L’ovulation ne se produit pas toujours au même moment du cycle.",
          "La glaire cervicale est souvent le signe le plus simple à observer.",
          "Les tests urinaires repèrent l’augmentation de l’hormone LH.",
          "La température basale aide surtout à confirmer une ovulation passée."
        ],
        quote:
          "Même avec des cycles réguliers, la date de l’ovulation peut varier d’un mois à l’autre."
      },
      {
        title: "Quand l’ovulation a-t-elle lieu ?",
        paragraphs: [
          "L’ovulation correspond au moment où un ovaire libère un ovocyte. Elle survient généralement avant les prochaines règles, mais pas toujours au même jour.",
          "Le fameux **jour 14 est seulement un exemple**, basé sur un cycle de 28 jours. Ce n’est pas une règle universelle.",
          "La durée de la première partie du cycle peut varier. C’est pourquoi il est souvent plus utile d’observer plusieurs signes que de se fier uniquement au calendrier."
        ]
      },
      {
        title: "Les 3 signes les plus utiles",
        paragraphs: [
          "La glaire cervicale peut devenir plus abondante, transparente, glissante et extensible à l’approche de l’ovulation, un peu comme du blanc d’œuf cru.",
          "Le test d’ovulation détecte dans les urines l’augmentation de l’hormone LH, qui précède généralement l’ovulation. Un résultat positif indique qu’elle est probablement proche, sans la garantir.",
          "La température basale, prise au réveil avant de se lever, augmente légèrement après l’ovulation. Elle permet donc surtout de mieux comprendre les cycles déjà passés."
        ],
        quote:
          "Pour commencer, observer la glaire cervicale suffit souvent. Il n’est pas nécessaire de suivre tous les indicateurs en même temps."
      },
      {
        title: "Et les applications de suivi du cycle ?",
        paragraphs: [
          "Une application peut être pratique pour noter le début des règles, l’aspect de la glaire, les résultats des tests ou la température.",
          "Mais elle ne mesure pas directement ce qui se passe dans votre corps. La date d’ovulation proposée reste une estimation.",
          "Utilisez-la comme un carnet de suivi, pas comme une certitude."
        ]
      },
      {
        title: "Faut-il surveiller tous les signes ?",
        paragraphs: [
          "Non. Vous pouvez commencer simplement en notant le premier jour de vos règles et en observant les changements de glaire cervicale.",
          "Les tests d’ovulation et la température peuvent être ajoutés si cela vous aide, mais ils ne sont pas indispensables."
        ],
        bullets: [
          "Notez le début de vos règles.",
          "Observez votre glaire cervicale.",
          "Ajoutez un test d’ovulation si vous souhaitez un repère supplémentaire.",
          "Utilisez la température surtout pour comprendre vos cycles passés."
        ],
        quote:
          "L’objectif est de mieux comprendre votre cycle, pas de tout contrôler."
      },
      {
        title: "Quand demander un avis médical ?",
        paragraphs: [
          "Parlez-en à un médecin, une sage-femme ou un gynécologue si vos règles sont absentes ou très irrégulières, si vos cycles sont très courts ou très longs, ou si vous ressentez des douleurs importantes.",
          "Une douleur intense ou persistante, accompagnée de fièvre, de malaise ou de saignements importants, nécessite également un avis médical.",
          "Vous pouvez aussi consulter si vous avez des antécédents gynécologiques ou si vous vous posez des questions sur votre cycle."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "La glaire cervicale, les tests d’ovulation et la température basale sont trois repères simples pour mieux comprendre le moment de l’ovulation.",
          "Ces outils doivent rester une aide. Votre cycle peut varier sans que cela signifie nécessairement qu’il existe un problème."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Les méthodes naturelles de contraception",
        url: "https://www.ameli.fr/assure/sante/themes/contraception/methodes-naturelles-contraception"
      },
      {
        label: "Assurance Maladie — Informations et conseils sur les règles",
        url: "https://www.ameli.fr/assure/sante/themes/puberte/informations-conseils-regles"
      },
      {
        label: "ACOG — Fertility Awareness-Based Methods of Family Planning",
        url: "https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning"
      },
      {
        label: "NHS — Periods and fertility in the menstrual cycle",
        url: "https://www.nhs.uk/conditions/periods/fertility-in-the-menstrual-cycle/"
      }
    ]
  },
  {
    slug: "que-faire-avant-essayer-avoir-bebe",
    title: "Que faire avant d’essayer d’avoir un bébé ?",
    description: "Les étapes utiles pour préparer un projet de grossesse sereinement, sans chercher à tout faire parfaitement.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Projet bébé",
    subcategorySlug: "projet-bebe",
    readingTime: "9 min",
    publishedAt: "2026-06-11",
    updatedAt: "2026-06-11",
    tone: "rose",
    sections: [
      {
        title: "Commencer par une consultation préconceptionnelle",
        paragraphs: [
          "Avant d’arrêter la contraception ou dès que le projet de bébé se précise, il peut être utile de prendre rendez-vous avec un médecin généraliste, un gynécologue ou une sage-femme. Cette consultation n’est pas un examen à réussir : c’est un moment pour faire le point, poser vos questions et préparer la grossesse dans les meilleures conditions possibles.",
          "Le professionnel peut revenir avec vous sur vos antécédents médicaux et familiaux, vos grossesses précédentes, vos traitements, vos vaccinations, votre mode de vie et, si besoin, proposer certains examens. Le ou la partenaire peut aussi être associé au rendez-vous, notamment pour parler de santé, de traitements, de tabac, d’alcool ou d’antécédents familiaux."
        ],
        quote: "Vous n’avez pas besoin d’attendre d’avoir tout changé pour prendre rendez-vous. La consultation sert justement à savoir ce qui est réellement utile dans votre situation."
      },
      {
        title: "Parler de la vitamine B9 dès le projet de grossesse",
        paragraphs: [
          "La vitamine B9, aussi appelée acide folique ou folates, participe au bon développement du système nerveux de l’embryon. Les autorités de santé recommandent d’en parler à un professionnel dès le projet de grossesse, car elle est idéalement commencée avant la conception.",
          "Le médecin ou la sage-femme vous indiquera la dose adaptée et la durée de prise. Ne remplacez pas cette supplémentation par des compléments achetés au hasard : certains produits contiennent des doses inutiles ou d’autres substances qui ne conviennent pas à tout le monde."
        ]
      },
      {
        title: "Faire le point sur les vaccins et les médicaments",
        paragraphs: [
          "Certaines infections peuvent avoir davantage de conséquences pendant la grossesse. La consultation préconceptionnelle permet donc de vérifier votre carnet de vaccination et, si nécessaire, d’organiser un rattrapage avant la conception.",
          "Signalez tous les médicaments que vous prenez, y compris ceux disponibles sans ordonnance, les plantes, les huiles essentielles et les compléments alimentaires. Certains traitements doivent être adaptés avant une grossesse, mais il ne faut jamais arrêter ou modifier seul un traitement, surtout en cas de maladie chronique."
        ],
        bullets: [
          "Préparez une liste ou des photos de vos boîtes de médicaments.",
          "Mentionnez les traitements occasionnels, les compléments et les produits à base de plantes.",
          "Demandez conseil avant toute automédication.",
          "N’arrêtez jamais un traitement prescrit sans avis médical."
        ]
      },
      {
        title: "Adopter des habitudes protectrices, sans viser la perfection",
        paragraphs: [
          "Préparer une grossesse ne signifie pas suivre un programme strict. L’objectif est surtout de réduire progressivement les risques évitables et de prendre soin de votre santé générale.",
          "Il est recommandé de ne pas boire d’alcool dès le projet de grossesse, car une grossesse peut commencer avant que l’on sache que l’on est enceinte. Le tabac et les autres substances peuvent également avoir un impact sur la fertilité et la grossesse. Un médecin, une sage-femme, un pharmacien ou un service d’aide au sevrage peut vous accompagner sans jugement."
        ],
        bullets: [
          "Manger de façon variée, sans régime restrictif non conseillé.",
          "Bouger régulièrement selon vos capacités et votre état de santé.",
          "Prendre soin de votre sommeil et de votre santé mentale.",
          "Demander de l’aide pour réduire ou arrêter le tabac, l’alcool ou d’autres substances."
        ]
      },
      {
        title: "Anticiper certaines situations particulières",
        paragraphs: [
          "Un avis médical avant la conception est particulièrement important si vous vivez avec une maladie chronique, si vous avez déjà eu une grossesse compliquée, si vous avez subi une chirurgie bariatrique, si vous prenez un traitement au long cours ou si une maladie héréditaire est connue dans votre famille.",
          "Cela ne signifie pas qu’une grossesse sera impossible ou forcément compliquée. L’objectif est d’adapter les soins, les traitements et le suivi suffisamment tôt."
        ]
      },
      {
        title: "Ne pas oublier la place du partenaire",
        paragraphs: [
          "Le projet de grossesse concerne souvent deux personnes. Le partenaire peut lui aussi faire le point sur sa santé, ses traitements, son tabagisme, sa consommation d’alcool, son exposition professionnelle à certains produits et ses antécédents familiaux.",
          "Il peut également participer aux changements du quotidien. Arrêter de fumer à deux, limiter l’alcool dans le foyer ou partager les rendez-vous peut rendre cette période plus simple et moins isolante."
        ]
      },
      {
        title: "À retenir avant de commencer les essais",
        bullets: [
          "Prendre rendez-vous avec un médecin ou une sage-femme pour faire le point.",
          "Demander une prescription de vitamine B9 adaptée.",
          "Vérifier les vaccins et revoir tous les traitements en cours.",
          "Éviter l’alcool et demander de l’aide en cas de tabagisme ou d’autre consommation.",
          "Parler des maladies chroniques, des antécédents et des inquiétudes.",
          "Avancer progressivement : il n’est pas nécessaire que tout soit parfait."
        ],
        quote: "Cet article donne des repères généraux. Votre situation personnelle peut nécessiter des conseils différents, notamment si vous avez une maladie chronique ou un traitement régulier."
      }
    ],
    sources: [
      { label: "Assurance Maladie — Consulter avant d’être enceinte : la consultation préconceptionnelle", url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/consultation-et-mode-de-vie-en-vue-d-une-grossesse/avant-d-etre-enceinte-la-consultation-preconceptionnelle" },
      { label: "Assurance Maladie — Projet de grossesse : vaccinations et médicaments", url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/consultation-et-mode-de-vie-en-vue-d-une-grossesse/projet-de-grossesse-vaccinations-et-medicaments" },
      { label: "Assurance Maladie — Modifier ses habitudes de vie avant d’être enceinte", url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/consultation-et-mode-de-vie-en-vue-d-une-grossesse/modifier-ses-habitudes-de-vie-avant-d-etre-enceinte" },
      { label: "Santé publique France — Je pense bébé, je pense vitamine B9", url: "https://www.santepubliquefrance.fr/nutrition-et-activite-physique/depliantflyer/je-pense-bebe-je-pense-b9-la-vitamine-b9-le-bon-reflexe-pour-bien-preparer-votre-grossesse" },
      { label: "Haute Autorité de santé — Projet de grossesse : informations, prévention et examens", url: "https://www.has-sante.fr/jcms/c_1360649/fr/projet-de-grossesse-informations-messages-de-prevention-examens-a-proposer" },
      { label: "ANSM — Médicaments et grossesse : les bons réflexes", url: "https://ansm.sante.fr/dossiers-thematiques/medicaments-et-grossesse/medicaments-et-grossesse-les-bons-reflexes" }
    ]
  },
  {
    slug: "premier-trimestre-reperes",
    title: "Premier trimestre : les repères essentiels",
    description: "Consultations, symptômes fréquents et signaux qui justifient de demander rapidement un avis médical.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Premier trimestre",
    subcategorySlug: "premier-trimestre",
    readingTime: "7 min",
    publishedAt: "2026-02-05",
    updatedAt: "2026-05-28",
    tone: "sage",
    sections: [
      {
        title: "Des changements parfois très rapides",
        paragraphs: [
          "Fatigue, nausées, sensibilité des seins et variations émotionnelles sont fréquentes au début de la grossesse. Leur intensité varie beaucoup d’une personne à l’autre.",
          "L’absence de certains symptômes n’indique pas nécessairement un problème. Un professionnel de santé reste votre interlocuteur pour interpréter votre situation."
        ]
      },
      {
        title: "Organiser le suivi",
        bullets: [
          "Prendre contact avec une sage-femme, un médecin généraliste ou un gynécologue.",
          "Préparer la liste de vos traitements et antécédents.",
          "Noter vos questions avant chaque consultation.",
          "Demander les démarches administratives adaptées à votre situation."
        ]
      },
      {
        title: "Quand consulter sans attendre",
        paragraphs: [
          "Des saignements importants, une douleur intense, un malaise, une fièvre ou toute inquiétude inhabituelle nécessitent un avis médical rapide.",
          "En cas d’urgence, contactez les services d’urgence de votre pays."
        ]
      }
    ],
    sources: [
      { label: "Assurance Maladie — Suivi de grossesse", url: "https://www.ameli.fr/" },
      { label: "Organisation mondiale de la Santé", url: "https://www.who.int/fr" }
    ]
  },
  {
    slug: "preparer-valise-maternite",
    title: "La valise de maternité, sans rien oublier",
    description: "Une liste simple et modulable pour préparer les affaires du bébé, de la maman et de l’accompagnant.",
    category: "Accouchement",
    categorySlug: "accouchement",
    subcategory: "Préparation",
    subcategorySlug: "preparation",
    readingTime: "5 min",
    publishedAt: "2026-02-22",
    updatedAt: "2026-04-15",
    tone: "sand",
    sections: [
      {
        title: "Pour la maman",
        bullets: [
          "Documents d’identité, dossier médical et carte de mutuelle.",
          "Tenues confortables et faciles à enfiler.",
          "Nécessaire de toilette et protections recommandées par la maternité.",
          "Chargeur, gourde et petits objets réconfortants."
        ]
      },
      {
        title: "Pour le bébé",
        bullets: [
          "Bodies et pyjamas adaptés à la saison.",
          "Bonnet, chaussettes et gigoteuse.",
          "Tenue de sortie et siège-auto conforme si retour en voiture.",
          "Langes et produits demandés par la maternité."
        ]
      },
      {
        title: "Une liste à adapter",
        paragraphs: [
          "Chaque maternité fournit sa propre liste. Vérifiez-la avant de faire vos achats afin d’éviter les doublons.",
          "Préparer la valise quelques semaines avant le terme peut apporter de la sérénité, mais il n’existe aucune date obligatoire."
        ]
      }
    ],
    sources: [
      { label: "Assurance Maladie — Accouchement", url: "https://www.ameli.fr/" }
    ]
  },
  {
    slug: "retour-maison-bebe",
    title: "Le retour à la maison avec bébé",
    description: "Des repères concrets pour traverser les premiers jours, s’organiser et savoir vers qui se tourner.",
    category: "Post-partum",
    categorySlug: "post-partum",
    subcategory: "Retour à la maison",
    subcategorySlug: "retour-maison",
    readingTime: "8 min",
    publishedAt: "2026-03-12",
    updatedAt: "2026-05-18",
    tone: "rose",
    sections: [
      {
        title: "Réduire les attentes",
        paragraphs: [
          "Les premiers jours sont une période d’adaptation. Le repos, l’alimentation, les soins et le lien avec le bébé peuvent occuper toute la journée.",
          "Un logement parfaitement rangé et des visites nombreuses ne sont pas des priorités. Protégez votre récupération."
        ]
      },
      {
        title: "Accepter une aide concrète",
        bullets: [
          "Préparer ou apporter un repas.",
          "Faire une course ou lancer une machine.",
          "S’occuper d’un aîné pendant un moment.",
          "Écouter sans donner de conseil non sollicité."
        ]
      },
      {
        title: "Surveiller son état physique et psychique",
        paragraphs: [
          "Une douleur qui augmente, une fièvre, des saignements très abondants, un essoufflement ou un malaise nécessitent un avis médical urgent.",
          "Une tristesse persistante, une anxiété envahissante, des idées noires ou la sensation de ne plus pouvoir faire face doivent également conduire à demander de l’aide rapidement."
        ],
        quote: "Demander de l’aide est une démarche de protection, jamais un échec."
      }
    ],
    sources: [
      { label: "Santé publique France — Les 1000 premiers jours", url: "https://www.1000-premiers-jours.fr/" },
      { label: "Assurance Maladie — Après l’accouchement", url: "https://www.ameli.fr/" }
    ]
  },
  {
    slug: "organiser-quotidien-jeune-parent",
    title: "Organiser le quotidien sans s’épuiser",
    description: "Des méthodes souples pour alléger la charge mentale pendant les premières semaines.",
    category: "Vie pratique",
    categorySlug: "vie-pratique",
    subcategory: "Organisation",
    subcategorySlug: "organisation",
    readingTime: "6 min",
    publishedAt: "2026-04-02",
    updatedAt: "2026-05-02",
    tone: "sage",
    sections: [
      {
        title: "Choisir trois priorités par jour",
        paragraphs: [
          "Une liste très courte aide à distinguer l’essentiel du reste. Selon les jours, se nourrir, se reposer et prendre une douche peuvent déjà constituer un programme complet."
        ]
      },
      {
        title: "Rendre les tâches visibles",
        bullets: [
          "Lister toutes les tâches, y compris celles de planification.",
          "Attribuer clairement les responsabilités.",
          "Prévoir une solution minimale pour les jours difficiles.",
          "Réévaluer l’organisation chaque semaine."
        ]
      },
      {
        title: "Faire simple",
        paragraphs: [
          "Les repas répétitifs, les courses livrées ou le linge non plié peuvent être des choix utiles, pas des renoncements.",
          "L’organisation doit soutenir la famille et non devenir une nouvelle source de pression."
        ]
      }
    ],
    sources: [
      { label: "Santé publique France — Les 1000 premiers jours", url: "https://www.1000-premiers-jours.fr/" }
    ]
  },
  {
    slug: "projet-naissance-mode-emploi",
    title: "Écrire un projet de naissance utile et souple",
    description: "Comment formuler ses souhaits, dialoguer avec l’équipe et garder de la flexibilité le jour J.",
    category: "Accouchement",
    categorySlug: "accouchement",
    subcategory: "Préparation",
    subcategorySlug: "preparation",
    readingTime: "7 min",
    publishedAt: "2026-04-18",
    updatedAt: "2026-05-24",
    tone: "sand",
    sections: [
      {
        title: "Un support de dialogue",
        paragraphs: [
          "Le projet de naissance permet de partager vos préférences avec l’équipe qui vous accompagne. Il peut aborder l’environnement, la mobilité, le soulagement de la douleur, la présence de l’accompagnant ou les premiers soins.",
          "Ce document n’est ni un contrat ni un examen à réussir."
        ]
      },
      {
        title: "Rester concret",
        bullets: [
          "Présenter le document sur une ou deux pages.",
          "Hiérarchiser les souhaits les plus importants.",
          "Expliquer brièvement ce qui vous rassure ou vous inquiète.",
          "En parler pendant la grossesse avec l’équipe."
        ]
      },
      {
        title: "Prévoir les adaptations",
        paragraphs: [
          "La situation médicale peut nécessiter des changements. Vous pouvez demander que chaque décision vous soit expliquée autant que possible.",
          "Un projet souple aide à préserver vos valeurs même lorsque le scénario change."
        ]
      }
    ],
    sources: [
      { label: "Haute Autorité de Santé", url: "https://www.has-sante.fr/" }
    ]
  }
];

export const categories = [
  {
    slug: "avant-grossesse",
    title: "Avant la grossesse",
    description: "Projet bébé, fertilité, santé, hygiène de vie, vaccins et médicaments.",
    tone: "rose",
    subcategories: [
      { slug: "projet-bebe", title: "Projet bébé", description: "Préparer son projet, savoir par où commencer et avancer sereinement." },
      { slug: "fertilite-cycle", title: "Fertilité et cycle", description: "Comprendre le cycle, l’ovulation et les délais pour concevoir." },
      { slug: "sante-rendez-vous", title: "Santé et rendez-vous", description: "Consultation préconceptionnelle, examens et professionnels à consulter." },
      { slug: "hygiene-vie", title: "Hygiène de vie", description: "Alimentation, activité physique, sommeil, tabac et alcool." },
      { slug: "vaccins-medicaments", title: "Vaccins et médicaments", description: "Faire le point sur ses vaccins, traitements et compléments." }
    ]
  },
  {
    slug: "pendant-grossesse",
    title: "Pendant la grossesse",
    description: "Suivi, examens, symptômes et bien-être, trimestre après trimestre.",
    tone: "sage",
    subcategories: [
      { slug: "premier-trimestre", title: "Premier trimestre", description: "Les premières semaines, les symptômes et les premiers rendez-vous." },
      { slug: "deuxieme-trimestre", title: "Deuxième trimestre", description: "L’évolution de la grossesse et les repères du milieu de parcours." },
      { slug: "troisieme-trimestre", title: "Troisième trimestre", description: "Se préparer à la naissance et vivre les dernières semaines." },
      { slug: "examens-suivi", title: "Examens et suivi", description: "Consultations, échographies, analyses et démarches médicales." },
      { slug: "symptomes-bien-etre", title: "Symptômes et bien-être", description: "Comprendre les petits maux et savoir quand demander conseil." }
    ]
  },
  {
    slug: "accouchement",
    title: "Accouchement",
    description: "Préparation, début du travail, maternité et suites immédiates.",
    tone: "sand",
    subcategories: [
      { slug: "preparation", title: "Préparation", description: "Projet de naissance, valise, cours et choix pour le jour J." },
      { slug: "debut-travail", title: "Début du travail", description: "Contractions, perte des eaux et départ à la maternité." },
      { slug: "maternite", title: "Maternité", description: "Accueil, accompagnement et déroulement du séjour." },
      { slug: "voies-accouchement", title: "Voies d’accouchement", description: "Voie basse, césarienne, instruments et soulagement de la douleur." },
      { slug: "suites-immediates", title: "Suites immédiates", description: "Les premières heures après la naissance pour le parent et le bébé." }
    ]
  },
  {
    slug: "post-partum",
    title: "Post-partum",
    description: "Récupération, alimentation du bébé, santé mentale et retour à la maison.",
    tone: "rose",
    subcategories: [
      { slug: "recuperation", title: "Récupération", description: "Repos, douleurs, saignements et récupération physique." },
      { slug: "alimentation-bebe", title: "Allaitement ou alimentation du bébé", description: "Allaitement, biberon et alimentation mixte sans culpabilité." },
      { slug: "sante-mentale", title: "Santé mentale", description: "Baby blues, émotions, fatigue et signes qui doivent alerter." },
      { slug: "retour-maison", title: "Retour à la maison", description: "Les premiers jours, l’aide, les visites et l’organisation." },
      { slug: "corps-apres-accouchement", title: "Corps après l’accouchement", description: "Périnée, cicatrices, sexualité et changements corporels." }
    ]
  },
  {
    slug: "vie-pratique",
    title: "Vie pratique",
    description: "Démarches, organisation, matériel, budget et quotidien avec bébé.",
    tone: "sage",
    subcategories: [
      { slug: "demarches", title: "Démarches", description: "Déclarations, droits, congés et formalités administratives." },
      { slug: "organisation", title: "Organisation", description: "Répartir les tâches et alléger la charge mentale." },
      { slug: "materiel", title: "Matériel", description: "Choisir l’essentiel pour bébé sans acheter inutilement." },
      { slug: "budget", title: "Budget", description: "Anticiper les dépenses et connaître les aides possibles." },
      { slug: "quotidien-bebe", title: "Quotidien avec bébé", description: "Sommeil, sorties, repas et rythme des premières semaines." }
    ]
  }
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
