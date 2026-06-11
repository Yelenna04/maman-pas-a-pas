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
    title: "Comment repérer son ovulation et sa période fertile ?",
    description:
      "Comprendre le cycle, observer les signes de fertilité et utiliser les bons outils pour mieux situer l’ovulation, sans chercher une précision impossible.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Fertilité et cycle",
    subcategorySlug: "fertilite-cycle",
    readingTime: "9 min",
    publishedAt: "2026-06-11",
    updatedAt: "2026-06-11",
    tone: "sage",
    sections: [
      {
        title: "Que se passe-t-il au moment de l’ovulation ?",
        paragraphs: [
          "Le premier jour des règles correspond au premier jour du cycle. Pendant la première partie du cycle, plusieurs follicules se développent dans les ovaires sous l’influence des hormones. Le plus souvent, un follicule devient dominant et libère un ovocyte : c’est l’ovulation.",
          "Cette libération est déclenchée par une augmentation de l’hormone lutéinisante, appelée pic de LH. Après l’ovulation, le follicule se transforme en corps jaune et produit notamment de la progestérone. Cette hormone prépare la muqueuse de l’utérus à une éventuelle implantation.",
          "L’ovulation ne survient pas obligatoirement au quatorzième jour. Dans un cycle de 28 jours, ce jour est seulement une moyenne. La première partie du cycle peut varier d’un mois à l’autre, tandis que l’ovulation survient souvent environ 10 à 16 jours avant les règles suivantes."
        ],
        quote:
          "La période fertile commence avant l’ovulation. Attendre d’être certaine que l’ovulation a eu lieu peut faire manquer une partie des jours les plus favorables."
      },
      {
        title: "Qu’appelle-t-on la période fertile ?",
        paragraphs: [
          "La période fertile correspond aux jours pendant lesquels un rapport sexuel peut conduire à une fécondation. Elle ne se limite pas au jour de l’ovulation, car les spermatozoïdes peuvent rester fécondants plusieurs jours dans les voies génitales lorsque la glaire cervicale est favorable. L’ovocyte, lui, reste fécondable pendant une période beaucoup plus courte après sa libération.",
          "En pratique, on parle généralement d’une fenêtre fertile d’environ six jours : les cinq jours précédant l’ovulation et le jour de l’ovulation. Cette estimation reste une moyenne et ne permet pas de prévoir exactement ce qui se passe au cours d’un cycle particulier.",
          "Pour un projet de grossesse, avoir des rapports réguliers tous les deux ou trois jours pendant le cycle évite souvent de devoir identifier un jour précis."
        ]
      },
      {
        title: "Observer la glaire cervicale",
        paragraphs: [
          "La glaire cervicale est produite par le col de l’utérus. Son apparence et sa texture évoluent sous l’influence des hormones.",
          "À l’approche de l’ovulation, elle devient généralement plus abondante, plus claire, plus humide, plus glissante et plus extensible. Elle est parfois comparée à du blanc d’œuf cru.",
          "Il n’est pas nécessaire d’effectuer un examen interne. Il est possible d’observer simplement les sensations au niveau de la vulve et l’aspect des sécrétions sur le papier toilette ou les sous-vêtements.",
          "Des pertes accompagnées d’une odeur inhabituelle, de démangeaisons, de brûlures ou de douleurs doivent conduire à demander un avis médical."
        ]
      },
      {
        title: "Utiliser des tests d’ovulation",
        paragraphs: [
          "Les tests urinaires d’ovulation recherchent l’augmentation de la LH qui précède généralement l’ovulation. Un test positif indique qu’une ovulation est probablement proche, souvent dans les 24 à 36 heures suivantes, mais il ne prouve pas à lui seul qu’elle a réellement eu lieu.",
          "Ces tests peuvent être moins simples à interpréter en cas de cycles irréguliers, de syndrome des ovaires polykystiques, de période post-partum ou de certains traitements de fertilité."
        ],
        bullets: [
          "Suivre précisément la notice du fabricant.",
          "Commencer les tests quelques jours avant la date supposée de l’ovulation.",
          "Les réaliser à une heure comparable d’un jour à l’autre.",
          "Éviter de boire de très grandes quantités juste avant le test.",
          "Ne pas interpréter un résultat isolé sans tenir compte du reste du cycle."
        ]
      },
      {
        title: "Suivre la température basale",
        paragraphs: [
          "La température basale est la température prise au réveil, avant de se lever, idéalement à la même heure et dans des conditions similaires. Après l’ovulation, la progestérone provoque habituellement une petite hausse durable de la température.",
          "Cette méthode peut aider à confirmer après coup qu’une ovulation a probablement eu lieu. Elle est moins adaptée pour prévoir les jours fertiles du cycle en cours, puisque l’augmentation apparaît après l’ovulation.",
          "La température peut être influencée par une maladie, un sommeil perturbé, l’alcool, un voyage, le travail de nuit ou certains médicaments."
        ]
      },
      {
        title: "Les autres signes possibles",
        paragraphs: [
          "Certaines personnes remarquent d’autres changements autour de l’ovulation. Leur absence ne signifie pas qu’il n’y a pas eu d’ovulation, et leur présence ne permet pas de la confirmer.",
          "Une douleur très intense, persistante, accompagnée de fièvre, de malaise ou de saignements importants ne doit pas être attribuée automatiquement à l’ovulation : un avis médical est nécessaire."
        ],
        bullets: [
          "Une douleur légère d’un seul côté du bas-ventre.",
          "Une sensation de tension pelvienne.",
          "Une libido différente.",
          "Des seins sensibles.",
          "De légers saignements."
        ]
      },
      {
        title: "Peut-on se fier à une application ou à un calendrier ?",
        paragraphs: [
          "Une application peut être utile pour noter les règles, les symptômes, la glaire cervicale ou les résultats des tests d’ovulation.",
          "En revanche, une application qui calcule l’ovulation uniquement à partir de la durée moyenne des cycles fournit une estimation. Elle ne mesure pas ce qui se passe réellement dans l’organisme et peut se tromper, notamment lorsque les cycles varient.",
          "Le calendrier seul ne doit pas être utilisé comme méthode fiable pour éviter une grossesse."
        ]
      },
      {
        title: "Quelle méthode choisir ?",
        paragraphs: [
          "Il n’existe pas une méthode parfaite pour tout le monde. Croiser plusieurs indices est généralement plus informatif que de se fier à un seul signal."
        ],
        bullets: [
          "Noter le premier jour des règles.",
          "Observer les changements de glaire cervicale.",
          "Avoir des rapports réguliers sans se concentrer sur une seule date.",
          "Ajouter des tests d’ovulation si cela aide sans augmenter le stress.",
          "Utiliser la température surtout pour mieux comprendre les cycles passés."
        ],
        quote:
          "Chercher à tout contrôler peut devenir pesant. Des rapports réguliers et une observation souple du cycle sont souvent suffisants au début des essais."
      },
      {
        title: "Quand demander un avis médical ?",
        paragraphs: [
          "Il est utile d’en parler à un médecin, une sage-femme ou un gynécologue lorsque les cycles sont très irréguliers ou absents, lorsque les douleurs sont importantes, lorsqu’un trouble hormonal est suspecté, lorsqu’il existe des antécédents gynécologiques ou lorsqu’un traitement peut affecter la fertilité.",
          "Une consultation plus précoce peut être proposée selon l’âge, les antécédents et la situation du couple. Il n’est pas nécessaire d’attendre lorsqu’une inquiétude existe déjà."
        ]
      },
      {
        title: "L’essentiel à retenir",
        paragraphs: [
          "Repérer son ovulation repose moins sur une date théorique que sur l’observation de plusieurs indices. La glaire cervicale permet souvent de reconnaître que la période fertile approche, les tests urinaires repèrent le pic de LH et la température aide surtout à confirmer l’ovulation après coup.",
          "Ces outils doivent rester des repères et non devenir une source de pression. En cas de doute, de cycles très irréguliers, de douleurs importantes ou de difficultés à concevoir, un professionnel de santé pourra proposer un accompagnement adapté."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Informations et conseils sur les règles",
        url: "https://www.ameli.fr/assure/sante/themes/puberte/informations-conseils-regles"
      },
      {
        label: "ACOG — The Menstrual Cycle",
        url: "https://www.acog.org/womens-health/infographics/the-menstrual-cycle"
      },
      {
        label: "ACOG — Fertility Awareness-Based Methods of Family Planning",
        url: "https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning"
      },
      {
        label: "NHS — Periods and fertility in the menstrual cycle",
        url: "https://www.nhs.uk/conditions/periods/fertility-in-the-menstrual-cycle/"
      },
      {
        label: "NHS — Ovulation pain",
        url: "https://www.nhs.uk/symptoms/ovulation-pain/"
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
