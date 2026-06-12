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
    slug: "periode-fertile-jours-plus-favorables",
    title: "Période fertile : quels sont les jours les plus favorables ?",
    description:
      "Comprendre quand les chances de grossesse sont les plus élevées, sans devoir viser un jour précis.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Fertilité et cycle",
    subcategorySlug: "fertilite-cycle",
    readingTime: "4 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "rose",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "La période fertile commence plusieurs jours avant l’ovulation.",
          "Les spermatozoïdes peuvent survivre jusqu’à 5 jours dans le corps.",
          "L’ovocyte reste fécondable environ 12 à 24 heures après l’ovulation.",
          "Des rapports réguliers évitent de devoir connaître le jour exact."
        ],
        quote:
          "Un rapport ayant lieu avant l’ovulation peut conduire à une grossesse lorsque l’ovocyte est libéré."
      },
      {
        title: "Qu’est-ce que la période fertile ?",
        paragraphs: [
          "La période fertile correspond aux jours pendant lesquels un rapport sexuel peut conduire à une grossesse. Elle ne se limite pas au jour de l’ovulation.",
          "Les spermatozoïdes peuvent rester vivants jusqu’à 5 jours dans les voies génitales lorsque les conditions sont favorables. L’ovocyte, lui, reste généralement fécondable pendant environ 12 à 24 heures après l’ovulation.",
          "La fenêtre fertile s’étend donc approximativement des 5 jours précédant l’ovulation jusqu’au jour qui suit. Ces durées restent des repères : elles peuvent varier d’une personne et d’un cycle à l’autre."
        ]
      },
      {
        title: "Les 3 repères les plus simples",
        paragraphs: [
          "Avoir des rapports réguliers tous les 2 à 3 jours au cours du cycle permet généralement de couvrir la période fertile sans effectuer de calcul précis.",
          "Une glaire cervicale plus transparente, glissante et extensible indique souvent que l’ovulation approche et que la période fertile est en cours.",
          "Les tests d’ovulation peuvent apporter un repère supplémentaire en détectant l’augmentation de l’hormone LH, mais ils ne sont pas indispensables pour commencer."
        ],
        quote:
          "Le repère le plus simple reste d’avoir des rapports réguliers, sans attendre un résultat parfait ou une date certaine."
      },
      {
        title: "Faut-il viser le jour exact de l’ovulation ?",
        paragraphs: [
          "Non. Les chances de conception ne reposent pas sur une seule journée. La période fertile commence avant l’ovulation, car les spermatozoïdes peuvent déjà être présents lorsque l’ovocyte est libéré.",
          "Chercher à identifier une heure ou un jour parfaitement précis peut devenir stressant. Une application ou un calendrier peut aider à observer des tendances, mais ne peut pas prédire l’ovulation avec certitude.",
          "Si le suivi du cycle vous rassure, vous pouvez l’utiliser comme un repère. S’il devient pesant, des rapports réguliers suffisent souvent à couvrir les jours favorables."
        ]
      },
      {
        title: "Et si les essais deviennent stressants ?",
        paragraphs: [
          "Les essais bébé peuvent rapidement transformer les rapports en rendez-vous programmés. Il est normal de ressentir de l’impatience, de la déception ou de la pression.",
          "Vous pouvez choisir une méthode simple, limiter les outils de suivi et parler avec votre partenaire de ce qui vous convient à tous les deux.",
          "Demander conseil à un médecin ou à une sage-femme est aussi possible, même avant le délai habituellement conseillé pour un bilan, si vous avez des inquiétudes."
        ],
        bullets: [
          "Gardez une méthode de suivi simple.",
          "Évitez de multiplier les tests si cela augmente votre stress.",
          "Préservez des moments d’intimité qui ne sont pas centrés sur la conception.",
          "Parlez-en à un professionnel si l’attente devient difficile."
        ],
        quote:
          "L’objectif est de vous donner des repères utiles, pas de transformer chaque cycle en examen à réussir."
      },
      {
        title: "Quand demander un avis médical ?",
        paragraphs: [
          "En général, un bilan peut être envisagé après un an de rapports réguliers sans contraception et sans grossesse avant 35 ans, ou après 6 mois à partir de 35 ans.",
          "Il est préférable de consulter plus tôt si les règles sont absentes ou très irrégulières, si les rapports sont douloureux, s’il existe une maladie ou un traitement pouvant influencer la fertilité, ou si l’un des partenaires a des antécédents particuliers.",
          "Après 40 ans, il est conseillé d’en parler rapidement avec un professionnel de santé dès le début du projet."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "La période fertile commence avant l’ovulation et dure plusieurs jours. Il n’est donc pas nécessaire d’attendre le jour supposé de l’ovulation pour avoir des rapports.",
          "Des rapports réguliers tous les 2 à 3 jours constituent un repère simple. Les applications, l’observation de la glaire et les tests d’ovulation peuvent compléter ce repère, mais ils ne sont pas obligatoires."
        ]
      }
    ],
    sources: [
      {
        label: "ACOG — Trying to Get Pregnant? Here’s When to Have Sex",
        url: "https://www.acog.org/womens-health/experts-and-stories/the-latest/trying-to-get-pregnant-heres-when-to-have-sex"
      },
      {
        label: "ACOG — Evaluating Infertility",
        url: "https://www.acog.org/womens-health/faqs/evaluating-infertility"
      },
      {
        label: "NHS — How long does it usually take to get pregnant?",
        url: "https://www.nhs.uk/pregnancy/trying-for-a-baby/how-long-it-takes-to-get-pregnant/"
      },
      {
        label: "NHS — Periods and fertility in the menstrual cycle",
        url: "https://www.nhs.uk/conditions/periods/fertility-in-the-menstrual-cycle/"
      },
      {
        label: "Assurance Maladie — Bilan médical de l’infertilité",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/sterilite-pma-infertilite/bilan-medical-infertilite-sterilite"
      }
    ]
  },
  {
    slug: "que-faire-avant-essayer-avoir-bebe",
    title: "Que faire avant d’essayer d’avoir un bébé ?",
    description:
      "Les premiers repères pour préparer votre projet de grossesse, simplement et sans pression.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Projet bébé",
    subcategorySlug: "projet-bebe",
    readingTime: "4 min",
    publishedAt: "2026-06-11",
    updatedAt: "2026-06-12",
    tone: "rose",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Prenez rendez-vous pour faire le point sur votre santé et vos antécédents.",
          "Parlez de la vitamine B9 dès le début du projet de grossesse.",
          "Vérifiez vos vaccins, traitements et compléments avec un professionnel.",
          "Adoptez progressivement des habitudes favorables, sans viser la perfection."
        ],
        quote:
          "Vous n’avez pas besoin d’avoir tout changé avant de commencer. L’objectif est d’avancer étape par étape."
      },
      {
        title: "Checklist : les premières étapes",
        bullets: [
          "Prendre un rendez-vous préconceptionnel.",
          "Demander conseil pour la vitamine B9.",
          "Vérifier son carnet de vaccination.",
          "Faire le point sur ses médicaments, compléments et produits à base de plantes.",
          "Éviter l’alcool dès le projet de grossesse.",
          "Demander de l’aide pour réduire ou arrêter le tabac.",
          "Manger de façon variée et bouger régulièrement selon ses capacités.",
          "Noter ses questions et avancer à son rythme."
        ]
      },
      {
        title: "Par où commencer cette semaine ?",
        paragraphs: [
          "La première étape la plus simple est de prendre rendez-vous avec un médecin généraliste, une sage-femme ou un gynécologue.",
          "Cette consultation permet de parler de vos antécédents, de vos traitements, de vos vaccinations et de la vitamine B9. Vous pouvez préparer une liste de vos médicaments et noter les questions que vous souhaitez poser.",
          "Vous n’avez pas besoin d’attendre d’avoir changé toutes vos habitudes pour consulter. Ce rendez-vous sert justement à identifier ce qui est utile dans votre situation."
        ],
        quote:
          "Commencez par une seule action concrète : prendre rendez-vous ou préparer la liste de vos traitements."
      },
      {
        title: "Pourquoi parler de la vitamine B9 ?",
        paragraphs: [
          "La vitamine B9, aussi appelée acide folique ou folates, participe au bon développement du système nerveux de l’embryon.",
          "Les recommandations françaises conseillent d’en parler dès le projet de grossesse afin qu’un professionnel prescrive la dose adaptée. La prise est idéalement commencée avant la conception.",
          "Évitez de choisir seule un complément multivitaminé : sa composition et son dosage ne sont pas forcément adaptés à votre situation."
        ]
      },
      {
        title: "Quand demander un avis personnalisé ?",
        paragraphs: [
          "Un avis médical avant la conception est particulièrement utile si vous vivez avec une maladie chronique, prenez un traitement régulier, avez déjà vécu une grossesse compliquée ou connaissez une maladie héréditaire dans votre famille.",
          "Parlez également de tous les médicaments pris occasionnellement, y compris ceux sans ordonnance, ainsi que des plantes, huiles essentielles et compléments alimentaires.",
          "N’arrêtez jamais seule un traitement prescrit. Un professionnel pourra l’évaluer et l’adapter si nécessaire."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Préparer une grossesse ne consiste pas à suivre une liste parfaite. Les priorités sont de prendre un rendez-vous préconceptionnel, de parler de la vitamine B9 et de vérifier les traitements et les vaccinations.",
          "Les changements d’habitudes peuvent se faire progressivement. Demander de l’aide fait pleinement partie de la préparation."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Consulter avant d’être enceinte : la consultation préconceptionnelle",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/consultation-et-mode-de-vie-en-vue-d-une-grossesse/avant-d-etre-enceinte-la-consultation-preconceptionnelle"
      },
      {
        label: "Assurance Maladie — Projet de grossesse : vaccinations et médicaments",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/consultation-et-mode-de-vie-en-vue-d-une-grossesse/projet-de-grossesse-vaccinations-et-medicaments"
      },
      {
        label: "Assurance Maladie — Modifier ses habitudes de vie avant d’être enceinte",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/consultation-et-mode-de-vie-en-vue-d-une-grossesse/modifier-ses-habitudes-de-vie-avant-d-etre-enceinte"
      },
      {
        label: "Santé publique France — Je pense bébé, je pense vitamine B9",
        url: "https://www.santepubliquefrance.fr/nutrition-et-activite-physique/depliantflyer/je-pense-bebe-je-pense-b9-la-vitamine-b9-le-bon-reflexe-pour-bien-preparer-votre-grossesse"
      },
      {
        label: "Haute Autorité de santé — Projet de grossesse : informations, prévention et examens",
        url: "https://www.has-sante.fr/jcms/c_1360649/fr/projet-de-grossesse-informations-messages-de-prevention-examens-a-proposer"
      },
      {
        label: "ANSM — Médicaments et grossesse : les bons réflexes",
        url: "https://ansm.sante.fr/dossiers-thematiques/medicaments-et-grossesse/medicaments-et-grossesse-les-bons-reflexes"
      }
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
