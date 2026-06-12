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
    slug: "parler-projet-bebe-avec-partenaire",
    title: "Comment parler du projet bébé avec son ou sa partenaire ?",
    description:
      "Des repères simples pour parler de vos envies, de vos inquiétudes et de votre organisation sans transformer la discussion en pression.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Projet bébé",
    subcategorySlug: "projet-bebe",
    readingTime: "4 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "rose",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Choisissez un moment calme, sans chercher à tout décider en une seule fois.",
          "Parlez de vos envies, mais aussi de vos peurs et de vos incertitudes.",
          "Vous pouvez avancer à des rythmes différents sans que le projet soit remis en cause.",
          "Les décisions importantes gagnent à être partagées et réévaluées ensemble."
        ],
        quote:
          "Une bonne discussion ne consiste pas à être d’accord sur tout immédiatement, mais à comprendre ce que chacun ressent et ce dont chacun a besoin."
      },
      {
        title: "Commencer la discussion simplement",
        paragraphs: [
          "Il n’est pas nécessaire d’attendre le moment parfait ni de préparer un discours très construit. Vous pouvez commencer par expliquer ce que le projet bébé représente pour vous aujourd’hui.",
          "Privilégiez un moment calme, sans fatigue excessive, sans téléphone et sans obligation de prendre une décision immédiate. L’objectif est d’ouvrir la conversation, pas de régler tous les sujets en une soirée.",
          "Parlez à la première personne : « j’aimerais », « je ressens », « j’ai peur ». Cette façon de s’exprimer limite les reproches et aide l’autre à comprendre votre vécu."
        ]
      },
      {
        title: "Les 3 sujets à aborder ensemble",
        paragraphs: [
          "Vos envies et votre calendrier. Discutez de ce que chacun souhaite, du moment qui vous paraît envisageable et des éventuelles raisons d’attendre ou d’avancer.",
          "Vos inquiétudes. Santé, fertilité, travail, logement, budget ou peur du changement : nommer les préoccupations permet de distinguer ce qui demande une décision, une information ou simplement du temps.",
          "Votre manière d’avancer. Choisissez ensemble les premières étapes : rendez-vous préconceptionnel, arrêt de la contraception, habitudes de vie ou niveau de suivi du cycle."
        ],
        quote:
          "Commencez par une seule décision commune, puis revenez sur les autres sujets plus tard."
      },
      {
        title: "Et si vous n’avancez pas au même rythme ?",
        paragraphs: [
          "Il est fréquent que l’un des partenaires se sente prêt avant l’autre, ou que chacun exprime son envie de façon différente. Cela ne signifie pas forcément que vos projets sont incompatibles.",
          "Essayez de comprendre ce qui se cache derrière l’hésitation : peur de ne pas être à la hauteur, inquiétude financière, besoin de stabilité, expérience familiale difficile ou manque d’informations.",
          "Fixer un moment pour reparler du sujet peut être plus apaisant que de chercher une réponse immédiate. En revanche, une décision de grossesse doit rester libre et ne jamais résulter d’une pression ou d’un ultimatum."
        ]
      },
      {
        title: "Comment parler des aspects pratiques ?",
        paragraphs: [
          "Les questions concrètes peuvent être abordées progressivement : organisation du quotidien, répartition des tâches, travail, budget, logement, soutien familial et disponibilité après la naissance.",
          "Vous n’avez pas besoin d’avoir un plan définitif. L’intérêt de la discussion est surtout de repérer les attentes implicites et les sujets sur lesquels vous devrez prendre des décisions ensemble.",
          "La santé concerne également les deux partenaires. La consultation préconceptionnelle, les traitements, les vaccinations, le tabac ou l’alcool peuvent faire partie de la préparation commune."
        ],
        bullets: [
          "Comment imaginons-nous la répartition des tâches ?",
          "Quelles sont nos principales inquiétudes financières ou professionnelles ?",
          "Qui pourrait nous soutenir en cas de besoin ?",
          "Quelles démarches de santé souhaitons-nous faire ensemble ?"
        ]
      },
      {
        title: "Quand demander un soutien extérieur ?",
        paragraphs: [
          "Un médecin, une sage-femme ou un professionnel de la consultation préconceptionnelle peut répondre aux questions de santé et aider à distinguer les précautions utiles des inquiétudes moins fondées.",
          "Un psychologue, un conseiller conjugal ou une thérapie de couple peut être utile si les discussions tournent systématiquement au conflit, si l’un de vous se sent contraint ou si une peur ancienne empêche toute conversation.",
          "Demander un soutien ne signifie pas que votre couple va mal. Cela peut simplement offrir un espace neutre pour comprendre vos besoins et prendre une décision plus sereine."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Parler d’un projet bébé demande parfois plusieurs conversations. Vous pouvez être enthousiastes tout en ayant des doutes, des peurs ou des priorités différentes.",
          "L’essentiel est de créer un espace où chacun peut parler librement, sans pression, puis de construire les prochaines étapes ensemble."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Consulter avant d’être enceinte : la consultation préconceptionnelle",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/consultation-et-mode-de-vie-en-vue-d-une-grossesse/avant-d-etre-enceinte-la-consultation-preconceptionnelle"
      },
      {
        label: "1000 premiers jours — Consultation préconceptionnelle",
        url: "https://www.1000-premiers-jours.fr/fr/consultation-preconceptionnelle"
      },
      {
        label: "ACOG — A Partner’s Guide to Pregnancy",
        url: "https://www.acog.org/womens-health/faqs/a-partners-guide-to-pregnancy"
      },
      {
        label: "NHS — Trying to get pregnant",
        url: "https://www.nhs.uk/pregnancy/trying-for-a-baby/trying-to-get-pregnant/"
      },
      {
        label: "NHS — Mental health and pregnancy",
        url: "https://www.nhs.uk/best-start-in-life/pregnancy/mental-health-and-pregnancy/"
      }
    ]
  },
  {
    slug: "se-preparer-emotionnellement-projet-bebe",
    title: "Comment se préparer émotionnellement à un projet bébé ?",
    description:
      "Des repères simples pour accueillir ses émotions, alléger la pression et avancer plus sereinement dans son projet bébé.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Projet bébé",
    subcategorySlug: "projet-bebe",
    readingTime: "4 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "rose",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Il est normal de ressentir plusieurs émotions à la fois.",
          "Vous n’avez pas besoin de vous sentir totalement prête avant de commencer.",
          "Mettre des mots sur vos attentes aide à réduire la pression.",
          "Demander du soutien est une force, pas un échec."
        ],
        quote:
          "Un projet bébé peut être heureux et rassurant, mais aussi réveiller des peurs, des doutes ou un sentiment d’urgence. Toutes ces émotions peuvent coexister."
      },
      {
        title: "Accueillir ses émotions sans les juger",
        paragraphs: [
          "Un projet bébé peut faire naître de la joie, de l’impatience, de la peur, de l’excitation ou parfois un mélange de tout cela. Il n’existe pas une bonne manière de ressentir cette période.",
          "Au lieu de chercher à supprimer les émotions inconfortables, essayez de les identifier : peur de ne pas y arriver, inquiétude pour la santé, pression liée à l’âge, au travail, au couple ou au regard des autres.",
          "Mettre un nom sur ce que vous ressentez permet souvent de mieux comprendre ce dont vous avez besoin : davantage d’informations, du repos, une discussion, un rendez-vous médical ou simplement du temps."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Clarifiez vos attentes. Demandez-vous ce que ce projet représente pour vous, ce que vous espérez et ce qui vous inquiète le plus. Vous n’avez pas besoin d’avoir toutes les réponses.",
          "Concentrez-vous sur ce que vous pouvez réellement contrôler : prendre un rendez-vous, vérifier un traitement, préserver votre sommeil ou choisir une méthode simple pour suivre vos cycles.",
          "Identifiez vos personnes ressources : partenaire, proche de confiance, médecin, sage-femme ou psychologue. Savoir à qui parler peut déjà rendre l’attente moins lourde."
        ],
        quote:
          "Le but n’est pas de tout anticiper, mais de savoir vers qui vous tourner lorsque vous avez besoin d’aide ou de réponses."
      },
      {
        title: "Comment alléger la pression au quotidien ?",
        paragraphs: [
          "Essayez de ne pas transformer le projet bébé en liste de performances à accomplir. Vous pouvez avancer par petites étapes et garder des activités qui n’ont aucun lien avec la conception.",
          "Limiter les recherches répétées, les comparaisons et le suivi excessif peut être utile si cela augmente votre anxiété. Choisissez quelques sources fiables et une méthode qui vous convient.",
          "Conservez des moments de repos, de plaisir et de lien avec vos proches. Votre vie n’a pas besoin d’être mise entre parenthèses pendant les essais."
        ],
        bullets: [
          "Choisissez une ou deux actions utiles à la fois.",
          "Fixez des moments sans recherches ni applications.",
          "Gardez des projets personnels ou de couple en parallèle.",
          "Évitez de vous comparer au parcours des autres."
        ]
      },
      {
        title: "Et si une grossesse tarde à arriver ?",
        paragraphs: [
          "Chaque nouveau cycle peut réveiller de l’espoir puis de la déception. Ces variations émotionnelles sont compréhensibles et peuvent devenir fatigantes avec le temps.",
          "Vous pouvez décider à l’avance de la façon dont vous souhaitez vivre les tests, les annonces de grossesse autour de vous ou les questions de l’entourage. Il est légitime de poser des limites.",
          "Si l’attente prend toute la place, parlez-en à un professionnel de santé. Il peut répondre à vos questions, proposer un bilan au moment adapté ou vous orienter vers un soutien psychologique."
        ]
      },
      {
        title: "Quand demander de l’aide ?",
        paragraphs: [
          "Parlez-en à un médecin, une sage-femme ou un psychologue si l’anxiété devient envahissante, si vous avez du mal à dormir, à travailler ou à profiter de votre quotidien, ou si les pensées liées au projet bébé occupent presque tout votre esprit.",
          "Un avis préconceptionnel est particulièrement important si vous avez déjà vécu une dépression, un trouble anxieux, un traumatisme lié à une grossesse ou un accouchement, ou si vous prenez un traitement pour votre santé mentale.",
          "N’arrêtez jamais seule un traitement prescrit. Un professionnel pourra discuter avec vous des bénéfices, des risques et des options adaptées à votre projet."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Se préparer émotionnellement ne signifie pas éliminer toutes les peurs. Il s’agit surtout de reconnaître ce que vous ressentez, de réduire les pressions inutiles et de savoir où trouver du soutien.",
          "Vous pouvez avancer avec des doutes et des émotions changeantes. Être accompagnée lorsque vous en avez besoin fait partie d’un projet bébé bienveillant."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Consulter avant d’être enceinte : la consultation préconceptionnelle",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/consultation-et-mode-de-vie-en-vue-d-une-grossesse/avant-d-etre-enceinte-la-consultation-preconceptionnelle"
      },
      {
        label: "ACOG — Anxiety and Pregnancy",
        url: "https://www.acog.org/womens-health/faqs/anxiety-and-pregnancy"
      },
      {
        label: "NHS — Planning another pregnancy",
        url: "https://www.nhs.uk/pregnancy/trying-for-a-baby/planning-another-pregnancy/"
      },
      {
        label: "NHS — Find care for your mental health before, during and after pregnancy",
        url: "https://www.nhs.uk/nhs-services/mental-health-services/find-care-for-your-mental-health-before-during-and-after-pregnancy/"
      },
      {
        label: "1000 premiers jours — Comment gérer le stress pendant la grossesse ?",
        url: "https://www.1000-premiers-jours.fr/fr/comment-gerer-le-stress-pendant-la-grossesse"
      }
    ]
  },
  {
    slug: "tabac-projet-grossesse-pourquoi-comment-arreter",
    title: "Tabac et projet de grossesse : pourquoi et comment arrêter ?",
    description:
      "Comprendre les effets du tabac sur la fertilité et trouver une méthode d’arrêt adaptée, sans culpabilité.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Hygiène de vie",
    subcategorySlug: "hygiene-vie",
    readingTime: "5 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "L’idéal est d’arrêter de fumer dès le projet de grossesse.",
          "Le tabac peut diminuer la fertilité chez les deux partenaires.",
          "Réduire est une étape possible, mais l’objectif reste l’arrêt complet.",
          "Un accompagnement et des substituts nicotiniques peuvent faciliter l’arrêt."
        ],
        quote:
          "Il n’est jamais trop tard pour arrêter : chaque tentative compte et augmente les chances de réussir."
      },
      {
        title: "Pourquoi arrêter avant une grossesse ?",
        paragraphs: [
          "Le tabac peut réduire la fertilité féminine et masculine et allonger le délai nécessaire pour obtenir une grossesse.",
          "Pendant la grossesse, il augmente notamment les risques de grossesse extra-utérine, de fausse couche, de complications placentaires, de prématurité et de faible poids de naissance.",
          "Arrêter avant la conception permet de diminuer l’exposition dès les toutes premières semaines, parfois avant même de savoir que l’on est enceinte."
        ]
      },
      {
        title: "Les 3 premières étapes pour arrêter",
        paragraphs: [
          "Choisir une date ou une période de départ réaliste. Certaines personnes préfèrent arrêter d’un coup, d’autres préparer progressivement le changement avec un professionnel.",
          "Repérer les moments et les situations qui déclenchent l’envie de fumer : café, stress, trajet, pause au travail, alcool ou présence d’autres fumeurs.",
          "Prévoir une aide adaptée : médecin, sage-femme, pharmacien, tabacologue, Tabac info service ou substituts nicotiniques selon le niveau de dépendance."
        ],
        quote:
          "Être accompagnée augmente les chances de réussir. Il n’est pas nécessaire d’attendre d’être totalement prête pour demander de l’aide."
      },
      {
        title: "Faut-il arrêter d’un coup ou réduire progressivement ?",
        paragraphs: [
          "L’arrêt complet est l’objectif, car même un petit nombre de cigarettes continue d’exposer à la fumée et à ses substances toxiques.",
          "Une réduction progressive peut toutefois servir d’étape vers l’arrêt, surtout si elle est organisée avec une date d’arrêt et un accompagnement.",
          "Le plus important est d’éviter de rester durablement dans une simple réduction sans stratégie pour arrêter complètement."
        ]
      },
      {
        title: "Les substituts nicotiniques sont-ils possibles ?",
        paragraphs: [
          "Les patchs, gommes, pastilles ou autres substituts nicotiniques peuvent aider à diminuer le manque et les envies de fumer.",
          "Ils apportent de la nicotine sans les goudrons, le monoxyde de carbone et les nombreuses substances toxiques produites par la combustion du tabac.",
          "En cas de grossesse ou de projet de grossesse, leur choix et leur dosage doivent être discutés avec un médecin, une sage-femme ou un pharmacien. Ils sont considérés comme moins nocifs que la poursuite du tabagisme."
        ]
      },
      {
        title: "Et la cigarette électronique ?",
        paragraphs: [
          "La cigarette électronique n’est pas un produit anodin et ses effets pendant la grossesse restent moins bien connus que ceux des substituts nicotiniques.",
          "Elle ne doit pas être considérée comme sans risque. Si vous l’utilisez pour arrêter de fumer, parlez-en à un professionnel afin de choisir la stratégie la plus adaptée.",
          "L’objectif est d’éviter de continuer à fumer des cigarettes en parallèle, car le double usage maintient l’exposition à la fumée de tabac."
        ]
      },
      {
        title: "Comment gérer les envies et les rechutes ?",
        paragraphs: [
          "Une envie forte dure souvent quelques minutes. Boire de l’eau, marcher, respirer lentement, mâcher une gomme ou changer d’activité peut aider à la traverser.",
          "Une rechute ne signifie pas que l’arrêt est impossible. Elle permet d’identifier ce qui a été difficile et d’ajuster la méthode, le dosage des substituts ou le soutien.",
          "Plusieurs tentatives sont parfois nécessaires. Reprendre rapidement la démarche est plus utile que de culpabiliser."
        ],
        bullets: [
          "Éloigner cigarettes, briquets et cendriers.",
          "Prévenir les proches et demander leur soutien.",
          "Modifier temporairement certaines routines.",
          "Préparer une réponse aux situations à risque.",
          "Noter les bénéfices ressentis depuis l’arrêt."
        ]
      },
      {
        title: "Le ou la partenaire doit-il aussi arrêter ?",
        paragraphs: [
          "Oui, c’est fortement conseillé. Le tabac peut altérer la qualité du sperme et le tabagisme passif expose aussi la personne enceinte et le futur bébé.",
          "Arrêter à deux peut faciliter le changement des habitudes et éviter la présence de cigarettes à la maison.",
          "Si le partenaire ne souhaite pas encore arrêter, il est important qu’il ne fume ni à l’intérieur ni à proximité de la personne enceinte."
        ]
      },
      {
        title: "Où trouver de l’aide ?",
        paragraphs: [
          "Un médecin généraliste, une sage-femme, un pharmacien ou un tabacologue peut évaluer la dépendance et proposer un accompagnement.",
          "Tabac info service propose un accompagnement par téléphone, via son site et son application.",
          "La plupart des substituts nicotiniques sont remboursés sur prescription par l’Assurance Maladie."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Arrêter de fumer dès le projet de grossesse protège la fertilité, la grossesse et la santé du futur bébé.",
          "L’arrêt peut demander plusieurs tentatives. Un accompagnement professionnel et des substituts nicotiniques adaptés peuvent réellement aider, sans culpabilité."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Les bonnes raisons d’arrêter de fumer",
        url: "https://www.ameli.fr/assure/sante/themes/tabac/bonnes-raisons-arreter-fumer"
      },
      {
        label: "Assurance Maladie — Tabac et grossesse",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/grossesse/grossesse-en-bonne-sante/tabac-alcool-drogue-et-grossesse/conduites-risques-tabac-drogues"
      },
      {
        label: "Assurance Maladie — Prise en charge des substituts nicotiniques",
        url: "https://www.ameli.fr/assure/remboursements/rembourse/medicaments-vaccins-dispositifs-medicaux/prise-charge-substituts-nicotiniques"
      },
      {
        label: "1000 premiers jours — L’arrêt du tabac pendant la grossesse et l’allaitement",
        url: "https://www.1000-premiers-jours.fr/fr/larret-du-tabac-pendant-la-grossesse-et-lallaitement"
      },
      {
        label: "Santé publique France — Grossesse sans tabac",
        url: "https://www.santepubliquefrance.fr/tabac/depliantflyer/grossesse-sans-tabac"
      },
      {
        label: "Haute Autorité de santé — Questions-réponses sur le sevrage tabagique",
        url: "https://www.has-sante.fr/jcms/c_1719656/fr/questions-/-reponses-sevrage-tabagique"
      }
    ]
  },
  {
    slug: "sommeil-stress-projet-bebe-prendre-soin-de-soi",
    title: "Sommeil, stress et projet bébé : comment prendre soin de soi ?",
    description:
      "Des repères simples pour mieux dormir, réduire la pression des essais et savoir quand demander de l’aide.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Hygiène de vie",
    subcategorySlug: "hygiene-vie",
    readingTime: "5 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Le stress et les émotions fortes sont fréquents pendant un projet bébé.",
          "Un rythme de sommeil régulier peut soutenir l’énergie et le bien-être.",
          "Quelques habitudes simples peuvent aider, sans chercher à tout contrôler.",
          "Si l’anxiété ou les troubles du sommeil deviennent envahissants, il faut en parler à un professionnel."
        ],
        quote:
          "Prendre soin de soi ne garantit pas une grossesse, mais peut rendre cette période plus supportable et plus équilibrée."
      },
      {
        title: "Pourquoi le projet bébé peut-il devenir stressant ?",
        paragraphs: [
          "Un projet bébé peut mêler enthousiasme, impatience, peur, déception et pression. Ces émotions peuvent changer d’un cycle à l’autre.",
          "Le suivi de l’ovulation, les tests, les attentes familiales ou les comparaisons avec l’entourage peuvent accentuer le sentiment de devoir « réussir » rapidement.",
          "Il est normal d’avoir des moments de doute. Le problème apparaît surtout lorsque les inquiétudes prennent toute la place ou empêchent de dormir, de travailler ou de profiter du quotidien."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Gardez un rythme de sommeil aussi régulier que possible, avec des horaires de coucher et de lever relativement stables.",
          "Créez une transition calme avant la nuit : lumière douce, activité tranquille, respiration ou lecture, plutôt que des écrans jusqu’au coucher.",
          "Réduisez la pression en choisissant un suivi qui vous convient et en gardant des moments où vous ne parlez pas du projet bébé."
        ],
        quote:
          "Le meilleur rythme est celui que vous pouvez tenir sans ajouter une nouvelle contrainte à votre quotidien."
      },
      {
        title: "Combien d’heures faut-il dormir ?",
        paragraphs: [
          "Les besoins varient d’une personne à l’autre. Chez l’adulte, une durée d’environ 7 à 9 heures par nuit constitue un repère général.",
          "La qualité du sommeil compte autant que sa durée : des réveils fréquents, des difficultés d’endormissement ou une fatigue persistante méritent d’être pris en compte.",
          "Plutôt que de chercher un chiffre parfait, observez votre niveau d’énergie, votre humeur et votre capacité à fonctionner dans la journée."
        ]
      },
      {
        title: "Quelles habitudes peuvent aider à mieux dormir ?",
        paragraphs: [
          "Essayez de vous coucher et de vous lever à des horaires proches, y compris le week-end, tout en gardant une certaine souplesse.",
          "Limitez la caféine en fin de journée, les repas très lourds juste avant le coucher et les écrans dans la dernière heure si vous remarquez qu’ils retardent l’endormissement.",
          "Une activité physique régulière et une exposition à la lumière naturelle en journée peuvent aussi aider à stabiliser le rythme veille-sommeil."
        ]
      },
      {
        title: "Comment réduire la pression des essais ?",
        paragraphs: [
          "Vous pouvez simplifier le suivi du cycle, par exemple en utilisant un seul repère plutôt qu’une application, des tests, une température et plusieurs tableaux en même temps.",
          "Fixez des moments où vous autorisez le sujet à être présent, puis accordez-vous aussi des espaces où le couple et le quotidien ne tournent pas autour de la conception.",
          "Parler avec le ou la partenaire permet souvent de répartir la charge mentale et de dire clairement lorsque les essais deviennent pesants."
        ]
      },
      {
        title: "Quelles techniques de détente essayer ?",
        paragraphs: [
          "La respiration lente, la relaxation musculaire, la méditation, le yoga doux, la marche ou une activité créative peuvent aider à diminuer la tension.",
          "Il n’est pas nécessaire de pratiquer longtemps : quelques minutes régulières peuvent être plus utiles qu’une séance occasionnelle très ambitieuse.",
          "Choisissez surtout une méthode qui vous apaise réellement. Une technique qui devient une obligation supplémentaire perd une grande partie de son intérêt."
        ],
        bullets: [
          "Respirer lentement pendant 3 à 5 minutes.",
          "Faire une courte marche quotidienne.",
          "Écrire ses inquiétudes avant le coucher.",
          "Prévoir un moment sans téléphone.",
          "Conserver une activité plaisante sans lien avec le projet bébé."
        ]
      },
      {
        title: "Quand demander de l’aide ?",
        paragraphs: [
          "Parlez-en à un médecin, une sage-femme ou un psychologue si l’anxiété devient intense, dure plusieurs semaines ou perturbe fortement le sommeil, l’appétit, le travail ou les relations.",
          "Demandez également de l’aide en cas de tristesse persistante, de perte d’intérêt, de crises d’angoisse, de pensées très négatives ou d’antécédent de trouble psychique.",
          "Si vous prenez un traitement pour l’anxiété, la dépression ou un autre trouble de santé mentale, ne l’arrêtez pas seule à cause du projet de grossesse."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Le sommeil, le stress et les émotions font partie du projet bébé. Il n’est pas nécessaire de rester parfaitement calme pour concevoir.",
          "Des habitudes simples peuvent aider, mais il faut demander du soutien lorsque l’anxiété ou les troubles du sommeil deviennent envahissants."
        ]
      }
    ],
    sources: [
      {
        label: "ACOG — Prepregnancy Counseling",
        url: "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/01/prepregnancy-counseling"
      },
      {
        label: "ACOG — Anxiety and Pregnancy",
        url: "https://www.acog.org/womens-health/faqs/anxiety-and-pregnancy"
      },
      {
        label: "NHS — Mental health and pregnancy",
        url: "https://www.nhs.uk/best-start-in-life/pregnancy/mental-health-and-pregnancy/"
      },
      {
        label: "1000 premiers jours — Comment gérer le stress pendant la grossesse ?",
        url: "https://www.1000-premiers-jours.fr/fr/comment-gerer-le-stress-pendant-la-grossesse"
      },
      {
        label: "Assurance Maladie — Anxiété, baby-blues, dépression : comment être aidée ?",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/grossesse/difficultes-et-maladies-pendant-la-grossesse/grossesse-sante-psychique/anxiete-baby-blues-depression-etre-aidee-pendant-et-apres-sa-grossesse"
      }
    ]
  },
  {
    slug: "activite-physique-avant-grossesse",
    title: "Activité physique avant une grossesse : que peut-on faire ?",
    description:
      "Des repères simples pour bouger régulièrement, choisir une activité adaptée et reprendre progressivement avant un projet de grossesse.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Hygiène de vie",
    subcategorySlug: "hygiene-vie",
    readingTime: "5 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Une activité physique régulière est bénéfique avant une grossesse.",
          "L’objectif général est d’aller progressivement vers environ 150 minutes d’activité modérée par semaine.",
          "La marche, le vélo, la natation et le renforcement musculaire doux sont de bonnes options.",
          "En cas de maladie, de douleur ou de reprise après une longue pause, demandez un avis personnalisé."
        ],
        quote:
          "La régularité compte davantage que l’intensité : mieux vaut bouger souvent et progressivement que forcer ponctuellement."
      },
      {
        title: "Pourquoi bouger avant une grossesse ?",
        paragraphs: [
          "L’activité physique régulière soutient la santé cardiovasculaire, le sommeil, le moral et le maintien d’un poids adapté.",
          "Elle peut aussi faciliter la poursuite d’une activité pendant la grossesse, car le corps est déjà habitué à bouger.",
          "Il n’est pas nécessaire de devenir sportive : les activités du quotidien comptent aussi lorsqu’elles augmentent légèrement le rythme cardiaque."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "La fréquence : essayez de bouger plusieurs jours par semaine plutôt que de concentrer tous les efforts sur une seule séance.",
          "L’intensité : une activité modérée vous fait respirer un peu plus vite tout en vous permettant encore de parler.",
          "La variété : associez endurance, renforcement musculaire et mobilité selon vos envies et vos capacités."
        ],
        quote:
          "Le repère de 150 minutes par semaine peut être réparti en petites séances : 30 minutes cinq jours par semaine ou plusieurs périodes plus courtes."
      },
      {
        title: "Quelles activités choisir ?",
        paragraphs: [
          "La marche rapide, le vélo, la natation, l’aquagym, la danse, le yoga, le Pilates et le renforcement musculaire sont de bonnes options.",
          "Choisissez une activité que vous appréciez réellement, car elle sera plus facile à maintenir dans le temps.",
          "Les tâches actives du quotidien, les trajets à pied ou à vélo et le jardinage peuvent aussi contribuer à votre niveau d’activité."
        ]
      },
      {
        title: "Comment reprendre après une longue pause ?",
        paragraphs: [
          "Commencez doucement, par exemple avec 10 à 15 minutes de marche, puis augmentez progressivement la durée et la fréquence.",
          "Ajoutez une seule difficulté à la fois : durée, vitesse ou résistance, mais pas tout en même temps.",
          "Prévoyez un échauffement, buvez suffisamment et laissez au corps le temps de récupérer."
        ]
      },
      {
        title: "Et si vous pratiquez déjà un sport intensif ?",
        paragraphs: [
          "Vous pouvez généralement poursuivre votre activité avant la grossesse si elle est bien tolérée et adaptée à votre état de santé.",
          "Une pratique très intensive associée à une fatigue importante, une perte de poids ou des règles absentes ou irrégulières mérite toutefois un avis médical.",
          "L’objectif n’est pas d’arrêter systématiquement, mais de vérifier que l’entraînement, l’alimentation et la récupération restent compatibles avec votre santé et votre cycle."
        ]
      },
      {
        title: "Faut-il faire du renforcement musculaire ?",
        paragraphs: [
          "Oui, le renforcement musculaire peut compléter les activités d’endurance et aider à préserver la force, la posture et la mobilité.",
          "Des exercices simples au poids du corps, avec des élastiques ou des charges légères peuvent suffire.",
          "Privilégiez une technique correcte, une respiration fluide et une progression raisonnable plutôt que des charges maximales."
        ]
      },
      {
        title: "Quand demander un avis médical ?",
        paragraphs: [
          "Demandez conseil avant de reprendre ou d’intensifier une activité si vous vivez avec une maladie cardiaque, respiratoire, métabolique, neurologique ou articulaire.",
          "Un avis est également utile en cas d’obésité importante, de grande maigreur, de trouble alimentaire, de douleurs persistantes ou de règles absentes.",
          "Arrêtez l’activité et consultez en cas de douleur thoracique, malaise, essoufflement inhabituel, palpitations persistantes ou douleur importante."
        ]
      },
      {
        title: "Comment commencer simplement ?",
        paragraphs: [
          "Choisissez un objectif réaliste pour les deux prochaines semaines plutôt qu’un programme très ambitieux.",
          "Vous pouvez commencer par ajouter une marche quotidienne, remplacer un trajet court en voiture ou prévoir deux séances de renforcement léger.",
          "Le ou la partenaire peut aussi participer : bouger à deux aide souvent à garder une routine régulière."
        ],
        bullets: [
          "Marcher 20 à 30 minutes plusieurs fois par semaine.",
          "Ajouter deux courtes séances de renforcement.",
          "Limiter les longues périodes assises.",
          "Augmenter progressivement sans chercher l’épuisement.",
          "Choisir une activité agréable et facile à répéter."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Avant une grossesse, l’activité physique régulière est recommandée pour la santé générale et le bien-être.",
          "Visez progressivement une activité modérée et variée, sans pression de performance. En cas de problème de santé ou de symptôme inhabituel, demandez un avis personnalisé."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Modifier ses habitudes de vie avant d’être enceinte",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/consultation-et-mode-de-vie-en-vue-d-une-grossesse/modifier-ses-habitudes-de-vie-avant-d-etre-enceinte"
      },
      {
        label: "Haute Autorité de santé — L’activité physique : votre meilleure alliée santé",
        url: "https://www.has-sante.fr/jcms/p_3385126/fr/l-activite-physique-votre-meilleure-alliee-sante"
      },
      {
        label: "Organisation mondiale de la Santé — Guidelines on physical activity and sedentary behaviour",
        url: "https://www.who.int/publications/i/item/9789240015128"
      },
      {
        label: "ACOG — Good Health Before Pregnancy: Prepregnancy Care",
        url: "https://www.acog.org/womens-health/faqs/good-health-before-pregnancy-prepregnancy-care"
      },
      {
        label: "ACOG — Prepregnancy Counseling",
        url: "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/01/prepregnancy-counseling"
      }
    ]
  },
  {
    slug: "preparer-alimentation-avant-grossesse",
    title: "Comment préparer son alimentation avant une grossesse ?",
    description:
      "Des repères simples pour adopter une alimentation équilibrée, parler de la vitamine B9 et éviter les compléments inutiles.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Hygiène de vie",
    subcategorySlug: "hygiene-vie",
    readingTime: "5 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Il n’existe pas de régime miracle pour tomber enceinte.",
          "Une alimentation variée et régulière suffit dans la plupart des situations.",
          "La vitamine B9 doit être abordée dès le projet de grossesse avec un professionnel.",
          "Évitez de multiplier les compléments alimentaires sans conseil médical."
        ],
        quote:
          "L’objectif n’est pas de manger parfaitement, mais d’installer progressivement des habitudes simples et durables."
      },
      {
        title: "Faut-il changer complètement son alimentation ?",
        paragraphs: [
          "Non. La préparation d’une grossesse ne nécessite pas de régime spécial si votre alimentation est déjà variée et équilibrée.",
          "L’idée est surtout de manger régulièrement, de varier les familles d’aliments et de limiter les produits très salés, très sucrés ou très transformés.",
          "Les changements progressifs sont plus faciles à maintenir qu’un programme strict commencé du jour au lendemain."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Misez sur la variété : fruits et légumes, légumes secs, féculents complets ou semi-complets, produits laitiers ou équivalents, œufs, poisson, viande ou alternatives végétales.",
          "Pensez à la vitamine B9 : les légumes verts, les légumes secs, certains fruits et les céréales complètes en apportent, mais l’alimentation seule ne remplace pas la supplémentation prescrite.",
          "Buvez principalement de l’eau et gardez une consommation régulière plutôt que de chercher des aliments supposés « booster » la fertilité."
        ],
        quote:
          "Aucun aliment isolé ne garantit une grossesse : c’est l’équilibre global de l’alimentation qui compte."
      },
      {
        title: "Pourquoi parler de la vitamine B9 ?",
        paragraphs: [
          "La vitamine B9, aussi appelée folates ou acide folique, joue un rôle essentiel dans le développement précoce du système nerveux de l’embryon.",
          "Comme les premières étapes du développement ont lieu très tôt, la supplémentation est recommandée dès le projet de grossesse et pendant le début de la grossesse.",
          "La dose doit être prescrite ou validée par un médecin ou une sage-femme, car certaines situations nécessitent une adaptation."
        ]
      },
      {
        title: "Faut-il prendre d’autres compléments ?",
        paragraphs: [
          "Pas systématiquement. Le fer, la vitamine D, l’iode ou d’autres nutriments ne doivent pas être pris automatiquement sans évaluation.",
          "Cumuler plusieurs compléments peut exposer à des apports trop élevés, notamment en vitamine D ou en iode.",
          "Parlez de tous les compléments, poudres, plantes et produits « spécial fertilité » avec un professionnel avant de les commencer."
        ]
      },
      {
        title: "Et si vous avez une alimentation végétarienne ou végétalienne ?",
        paragraphs: [
          "Une alimentation végétarienne peut être compatible avec un projet de grossesse si elle est bien organisée.",
          "En cas d’alimentation végétalienne, une attention particulière est nécessaire pour la vitamine B12, le fer, l’iode, le calcium, la vitamine D et les protéines.",
          "Un médecin, une sage-femme ou un diététicien peut vérifier les apports et proposer une supplémentation adaptée si besoin."
        ]
      },
      {
        title: "Faut-il perdre ou prendre du poids avant les essais ?",
        paragraphs: [
          "Le poids peut influencer la fertilité et le déroulement d’une grossesse, mais il ne doit pas devenir une source de culpabilité.",
          "Évitez les régimes très restrictifs ou les pertes de poids rapides. Si un changement de poids est souhaitable, il vaut mieux le faire progressivement et avec un accompagnement.",
          "Une alimentation régulière, une activité physique adaptée et un suivi médical sont généralement plus utiles qu’un objectif de poids rapide."
        ]
      },
      {
        title: "Comment commencer simplement ?",
        paragraphs: [
          "Choisissez une ou deux habitudes faciles à mettre en place, puis ajoutez les autres progressivement.",
          "Vous pouvez par exemple prévoir davantage de légumes secs, varier les sources de protéines ou remplacer certaines boissons sucrées par de l’eau.",
          "Le projet bébé peut aussi être l’occasion de faire ces changements à deux."
        ],
        bullets: [
          "Ajouter un fruit ou un légume à un repas.",
          "Prévoir des légumes secs une à deux fois par semaine.",
          "Varier poisson, œufs, viande et protéines végétales.",
          "Parler de la vitamine B9 avec un professionnel.",
          "Éviter l’achat de compléments sans conseil."
        ]
      },
      {
        title: "Quand demander un avis personnalisé ?",
        paragraphs: [
          "Demandez conseil si vous suivez un régime végétalien, avez subi une chirurgie digestive, vivez avec une maladie chronique ou présentez des carences connues.",
          "Un avis est également utile en cas de trouble alimentaire, de perte ou prise de poids importante, de diabète ou de traitement pouvant influencer l’alimentation.",
          "Un professionnel pourra adapter les recommandations sans vous imposer un régime inutilement strict."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Avant une grossesse, une alimentation variée, régulière et suffisamment diversifiée est généralement la meilleure base.",
          "La vitamine B9 mérite une attention particulière dès le projet bébé, tandis que les autres compléments ne doivent pas être pris automatiquement."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Modifier ses habitudes de vie avant d’être enceinte",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/consultation-et-mode-de-vie-en-vue-d-une-grossesse/modifier-ses-habitudes-de-vie-avant-d-etre-enceinte"
      },
      {
        label: "Santé publique France — Je pense bébé, je pense vitamine B9",
        url: "https://www.santepubliquefrance.fr/nutrition-et-activite-physique/depliantflyer/je-pense-bebe-je-pense-b9-la-vitamine-b9-le-bon-reflexe-pour-bien-preparer-votre-grossesse"
      },
      {
        label: "Anses — Repères alimentaires pour les femmes enceintes et allaitantes",
        url: "https://www.anses.fr/fr/content/reperes-alimentaires-pour-les-populations-specifiques-enfants-femmes-enceintes-allaitantes"
      },
      {
        label: "Anses — Compléments alimentaires et grossesse : éviter la multiplication des sources",
        url: "https://www.anses.fr/fr/content/complements-alimentaires-et-grossesse-lanses-recommande-deviter-la-multiplication-des"
      },
      {
        label: "Anses — Enrichir la farine en acide folique",
        url: "https://www.anses.fr/fr/content/enrichir-la-farine-en-acide-folique-une-solution-contre-les-malformations-du-tube-neural"
      }
    ]
  },
  {
    slug: "sante-partenaire-points-verifier-avant-grossesse",
    title: "Santé du partenaire : quels points vérifier avant une grossesse ?",
    description:
      "Les principaux éléments à vérifier du côté du partenaire pour préparer le projet bébé et repérer les situations qui méritent un avis médical.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Santé et rendez-vous",
    subcategorySlug: "sante-rendez-vous",
    readingTime: "5 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "La santé du partenaire compte autant que celle de la personne qui portera la grossesse.",
          "Les traitements, les antécédents testiculaires, les infections et les habitudes de vie peuvent influencer la fertilité.",
          "Le tabac, l’alcool excessif, certains produits toxiques et les stéroïdes anabolisants peuvent altérer la qualité du sperme.",
          "En cas d’antécédent ou de doute, un médecin peut proposer un examen et, si besoin, un spermogramme."
        ],
        quote:
          "Un projet de grossesse se prépare à deux : le bilan ne doit pas reposer uniquement sur la personne qui portera la grossesse."
      },
      {
        title: "Pourquoi vérifier aussi la santé du partenaire ?",
        paragraphs: [
          "Les difficultés à concevoir peuvent être liées à la femme, à l’homme, aux deux partenaires ou rester sans cause clairement identifiée.",
          "Chez l’homme, la fertilité dépend notamment de la production des spermatozoïdes, de leur mobilité, de leur forme et du bon fonctionnement des voies génitales.",
          "Faire le point tôt permet de repérer un facteur modifiable, d’adapter un traitement ou d’orienter rapidement vers un spécialiste si nécessaire."
        ]
      },
      {
        title: "Les 3 points à vérifier en priorité",
        paragraphs: [
          "Les antécédents médicaux et testiculaires : testicule non descendu, torsion, traumatisme, infection, varicocèle, opération, cancer, chimiothérapie ou radiothérapie.",
          "Les médicaments et produits utilisés : traitements sur ordonnance, compléments, drogues, testostérone ou stéroïdes anabolisants peuvent parfois réduire la production de spermatozoïdes.",
          "Les habitudes de vie et les expositions : tabac, alcool excessif, surpoids, chaleur importante, solvants, pesticides ou autres produits toxiques peuvent influencer la qualité du sperme."
        ],
        quote:
          "Il ne faut jamais arrêter seul un traitement : le médecin peut évaluer son effet sur la fertilité et proposer une alternative si nécessaire."
      },
      {
        title: "Quels antécédents faut-il signaler ?",
        paragraphs: [
          "Il est utile de parler de toute maladie chronique, opération, hospitalisation ou traitement lourd, même ancien.",
          "Les antécédents de testicule non descendu, d’infection génitale, d’oreillons compliqués, de torsion testiculaire, de traumatisme ou de chirurgie urologique sont particulièrement importants.",
          "Une baisse de libido, des troubles de l’érection ou de l’éjaculation doivent aussi être signalés, car ils peuvent rendre les rapports plus difficiles ou révéler un problème de santé."
        ]
      },
      {
        title: "Quelles habitudes peuvent influencer la fertilité ?",
        paragraphs: [
          "Le tabac peut réduire la qualité du sperme. Une consommation excessive d’alcool, l’obésité et certaines drogues peuvent également affecter la fertilité.",
          "Les stéroïdes anabolisants et la testostérone prise sans indication peuvent diminuer fortement la production naturelle de spermatozoïdes.",
          "Des expositions répétées à une forte chaleur ou à certains produits chimiques au travail peuvent aussi jouer un rôle. Il est utile d’en parler au médecin du travail ou au médecin traitant."
        ]
      },
      {
        title: "Faut-il modifier ses habitudes avant les essais ?",
        paragraphs: [
          "Arrêter le tabac, limiter l’alcool, éviter les drogues et maintenir un poids adapté sont des mesures favorables à la santé générale et reproductive.",
          "Une activité physique régulière, un sommeil suffisant et une alimentation variée peuvent également soutenir la santé du partenaire.",
          "La fabrication des spermatozoïdes prend plusieurs semaines. Les changements d’habitudes ne produisent donc pas un effet immédiat, mais restent utiles sur la durée."
        ],
        bullets: [
          "Demander de l’aide pour arrêter le tabac si nécessaire.",
          "Éviter les stéroïdes anabolisants et les produits non prescrits.",
          "Limiter les expositions professionnelles à risque.",
          "Parler des médicaments et compléments avec un médecin.",
          "Consulter en cas de douleur, masse ou gonflement testiculaire."
        ]
      },
      {
        title: "Quand faut-il consulter ?",
        paragraphs: [
          "Un rendez-vous est conseillé avant les essais en cas d’antécédent testiculaire, de cancer, de chimiothérapie, de radiothérapie, de chirurgie pelvienne ou de maladie génétique.",
          "Il faut aussi consulter en cas de douleur, de masse, de gonflement, de problème sexuel persistant ou de traitement susceptible d’affecter la fertilité.",
          "En cas d’absence de grossesse après les délais habituels, le bilan doit concerner les deux partenaires dès le départ."
        ]
      },
      {
        title: "Quels examens peuvent être proposés ?",
        paragraphs: [
          "Le médecin commence par un entretien et un examen clinique, puis recherche les facteurs médicaux, sexuels, professionnels et liés au mode de vie.",
          "Le spermogramme est l’examen de référence pour analyser le volume de sperme, le nombre de spermatozoïdes, leur mobilité et leur forme.",
          "Selon les résultats, des dosages hormonaux, une échographie, des examens génétiques ou un avis en urologie ou en andrologie peuvent être proposés."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "La santé du partenaire fait pleinement partie de la préparation à une grossesse. Les antécédents, les traitements et les habitudes de vie peuvent apporter des informations utiles.",
          "Un avis médical est recommandé en présence d’un facteur de risque ou d’un symptôme. Si un bilan de fertilité devient nécessaire, il doit être réalisé pour les deux partenaires."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Bilan médical de l’infertilité",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/sterilite-pma-infertilite/bilan-medical-infertilite-sterilite"
      },
      {
        label: "Organisation mondiale de la Santé — Infertility",
        url: "https://www.who.int/news-room/fact-sheets/detail/infertility"
      },
      {
        label: "NHS — Infertility",
        url: "https://www.nhs.uk/conditions/infertility/"
      },
      {
        label: "ASRM — Diagnosis and treatment of infertility in men",
        url: "https://www.asrm.org/practice-guidance/practice-committee-documents/diagnosis-and-treatment-of-infertility-in-men-auaasrm-guideline-part-i-2020/"
      },
      {
        label: "Assurance Maladie — Consulter avant d’être enceinte : la consultation préconceptionnelle",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/consultation-et-mode-de-vie-en-vue-d-une-grossesse/avant-d-etre-enceinte-la-consultation-preconceptionnelle"
      }
    ]
  },
  {
    slug: "antecedents-medicaux-que-signaler-avant-grossesse",
    title: "Antécédents médicaux : que faut-il signaler avant une grossesse ?",
    description:
      "Les informations utiles à partager avec un professionnel pour préparer une grossesse et adapter le suivi à votre situation.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Santé et rendez-vous",
    subcategorySlug: "sante-rendez-vous",
    readingTime: "5 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Signalez vos maladies chroniques, même si elles sont bien équilibrées.",
          "Parlez de toutes vos opérations, hospitalisations et grossesses précédentes.",
          "Mentionnez les maladies héréditaires ou malformations connues dans les deux familles.",
          "Apportez la liste complète de vos traitements, y compris ceux sans ordonnance."
        ],
        quote:
          "Un antécédent ne signifie pas qu’une grossesse sera compliquée : il permet surtout au professionnel d’anticiper et d’adapter le suivi."
      },
      {
        title: "Pourquoi parler de ses antécédents avant la grossesse ?",
        paragraphs: [
          "La consultation préconceptionnelle sert à identifier les éléments qui pourraient influencer la grossesse, les traitements ou le suivi médical.",
          "Certaines maladies nécessitent simplement une surveillance plus rapprochée, tandis que d’autres demandent une adaptation du traitement avant la conception.",
          "Partager ces informations permet aussi de choisir le professionnel et le lieu de suivi les plus adaptés dès le début du projet."
        ]
      },
      {
        title: "Les 3 catégories d’informations à signaler",
        paragraphs: [
          "Vos antécédents médicaux et chirurgicaux : diabète, hypertension, épilepsie, maladie de la thyroïde, maladie auto-immune, trouble psychiatrique, cancer, opération ou hospitalisation importante.",
          "Vos antécédents gynécologiques et obstétricaux : cycles très irréguliers, endométriose, fibrome, infection pelvienne, grossesse extra-utérine, fausse couche, prématurité, prééclampsie, césarienne ou complication d’une grossesse précédente.",
          "Vos antécédents familiaux : maladie génétique, anomalie chromosomique, malformation, thrombose, diabète, hypertension ou autre maladie importante dans votre famille ou celle du partenaire."
        ],
        quote:
          "Vous n’avez pas besoin de connaître tous les détails : indiquez ce que vous savez et le professionnel vous aidera à préciser ce qui est utile."
      },
      {
        title: "Quels traitements faut-il mentionner ?",
        paragraphs: [
          "Signalez tous les médicaments pris régulièrement ou occasionnellement, même s’ils sont vendus sans ordonnance.",
          "Mentionnez aussi les compléments alimentaires, les plantes, les huiles essentielles, les crèmes médicamenteuses et les traitements pris ponctuellement.",
          "N’arrêtez jamais seule un traitement prescrit. Certains médicaments doivent être poursuivis, remplacés ou adaptés progressivement avant une grossesse."
        ]
      },
      {
        title: "Faut-il parler de sa santé mentale ?",
        paragraphs: [
          "Oui. Une dépression, un trouble anxieux, un trouble bipolaire, un trouble alimentaire, une hospitalisation ou un traitement psychotrope font partie des informations importantes.",
          "L’objectif n’est pas de juger votre projet, mais d’éviter une interruption brutale de traitement et d’organiser un accompagnement adapté avant et pendant la grossesse.",
          "Vous pouvez également parler de vos peurs, d’un traumatisme, d’une précédente grossesse difficile ou d’un manque de soutien."
        ]
      },
      {
        title: "Et les antécédents du ou de la partenaire ?",
        paragraphs: [
          "La santé du ou de la partenaire peut aussi être pertinente, notamment en cas de maladie héréditaire, de traitement pouvant affecter la fertilité, de cancer, d’opération ou de difficulté connue du côté du sperme.",
          "Les antécédents familiaux des deux côtés sont utiles lorsqu’une maladie génétique, une anomalie chromosomique ou une malformation est connue.",
          "Si nécessaire, le professionnel peut proposer un conseil génétique ou orienter vers un spécialiste."
        ]
      },
      {
        title: "Comment préparer le rendez-vous ?",
        paragraphs: [
          "Rassemblez les informations disponibles sans chercher à tout reconstituer parfaitement.",
          "Une liste écrite permet de ne rien oublier et d’éviter les répétitions lors des consultations suivantes.",
          "Apportez les comptes rendus importants si vous les possédez déjà."
        ],
        bullets: [
          "Liste des maladies et opérations importantes.",
          "Comptes rendus de grossesses ou d’hospitalisations précédentes.",
          "Liste ou photos des médicaments et compléments.",
          "Informations connues sur les maladies familiales.",
          "Coordonnées des spécialistes qui vous suivent."
        ]
      },
      {
        title: "Quand demander un avis spécialisé avant les essais ?",
        paragraphs: [
          "Un avis spécialisé est particulièrement utile en cas de maladie chronique, de traitement à risque pendant la grossesse ou d’antécédent obstétrical sévère.",
          "Il peut aussi être recommandé en cas de maladie génétique familiale, de cancer antérieur, de greffe, de thrombose ou de complication importante lors d’une grossesse précédente.",
          "Le médecin ou la sage-femme peut coordonner cette orientation sans que vous ayez à déterminer seule quel spécialiste consulter."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Les antécédents médicaux, chirurgicaux, gynécologiques, obstétricaux, psychologiques et familiaux peuvent tous aider à préparer une grossesse de façon personnalisée.",
          "Le plus important est d’être transparente sur vos traitements et de ne rien arrêter sans avis médical. Le professionnel adaptera ensuite les conseils et le suivi à votre situation."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Consulter avant d’être enceinte : la consultation préconceptionnelle",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/consultation-et-mode-de-vie-en-vue-d-une-grossesse/avant-d-etre-enceinte-la-consultation-preconceptionnelle"
      },
      {
        label: "Haute Autorité de santé — Projet de grossesse : informations, prévention et examens à proposer",
        url: "https://www.has-sante.fr/jcms/c_1360649/fr/projet-de-grossesse-informations-messages-de-prevention-examens-a-proposer"
      },
      {
        label: "Haute Autorité de santé — Suivi et orientation des femmes enceintes selon les situations à risque",
        url: "https://www.has-sante.fr/jcms/c_547976/fr/suivi-et-orientation-des-femmes-enceintes-en-fonction-des-situations-a-risque-identifiees"
      },
      {
        label: "ANSM — Médicaments et grossesse : les bons réflexes",
        url: "https://ansm.sante.fr/dossiers-thematiques/medicaments-et-grossesse/medicaments-et-grossesse-les-bons-reflexes"
      },
      {
        label: "1000 premiers jours — Consultation préconceptionnelle",
        url: "https://www.1000-premiers-jours.fr/fr/consultation-preconceptionnelle"
      }
    ]
  },
  {
    slug: "quand-faire-bilan-fertilite",
    title: "Quand faire un bilan de fertilité ?",
    description:
      "Les délais à connaître, les situations où consulter plus tôt et le déroulement des premiers examens pour le couple.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Santé et rendez-vous",
    subcategorySlug: "sante-rendez-vous",
    readingTime: "5 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Avant 35 ans, un bilan est généralement envisagé après 12 mois d’essais sans grossesse.",
          "À partir de 35 ans, il est conseillé de consulter après 6 mois d’essais.",
          "Après 40 ans ou en présence d’un facteur de risque, il est préférable de demander un avis sans attendre.",
          "Le bilan concerne les deux partenaires et commence par un entretien, un examen clinique et des examens ciblés."
        ],
        quote:
          "Vous pouvez consulter avant ces délais si la situation vous inquiète : demander un premier avis ne signifie pas commencer immédiatement un parcours de PMA."
      },
      {
        title: "Quels délais sont généralement recommandés ?",
        paragraphs: [
          "Avant 35 ans, une consultation pour infertilité est le plus souvent envisagée après un an de rapports réguliers sans contraception et sans grossesse.",
          "À partir de 35 ans, ce délai est généralement raccourci à 6 mois, car la fertilité diminue progressivement avec l’âge.",
          "Après 40 ans, il est recommandé d’en parler rapidement avec un professionnel dès le début du projet afin de ne pas retarder une éventuelle évaluation."
        ]
      },
      {
        title: "Les 3 situations où consulter plus tôt",
        paragraphs: [
          "Des cycles absents, très irréguliers ou des signes suggérant une absence d’ovulation. Il n’est pas utile d’attendre un an si les règles disparaissent ou sont très difficiles à prévoir.",
          "Des antécédents pouvant influencer la fertilité : endométriose, infection pelvienne, grossesse extra-utérine, chirurgie gynécologique, cancer, traitement gonadotoxique ou fausses couches répétées.",
          "Une difficulté connue ou suspectée chez le partenaire : problème testiculaire, chirurgie, troubles de l’érection ou de l’éjaculation, traitement pouvant affecter le sperme ou antécédent d’infertilité."
        ],
        quote:
          "Un facteur de risque connu justifie une consultation sans attendre les délais habituels."
      },
      {
        title: "À qui s’adresser en premier ?",
        paragraphs: [
          "Vous pouvez commencer par un médecin généraliste, une sage-femme ou un gynécologue. Le professionnel recueille l’histoire du couple et vérifie s’il existe une raison de débuter rapidement le bilan.",
          "Selon la situation, il peut prescrire les premiers examens ou orienter vers un gynécologue spécialisé, un urologue, un andrologue ou un centre de médecine de la reproduction.",
          "Il est préférable que les deux partenaires soient associés dès le début, car les causes de difficulté à concevoir peuvent concerner l’un, l’autre ou les deux."
        ]
      },
      {
        title: "Comment se déroule le premier rendez-vous ?",
        paragraphs: [
          "Le professionnel demande depuis combien de temps les essais ont commencé, à quelle fréquence ont lieu les rapports et si les cycles sont réguliers.",
          "Il revient également sur les antécédents médicaux, gynécologiques, chirurgicaux et familiaux, les traitements, les grossesses précédentes et les habitudes de vie.",
          "Un examen clinique peut être proposé. Les examens complémentaires sont ensuite choisis en fonction de l’âge, des symptômes et de l’histoire du couple."
        ],
        bullets: [
          "Date de début des essais et fréquence des rapports.",
          "Durée et régularité des cycles.",
          "Antécédents de grossesse, d’infection ou d’opération.",
          "Traitements, tabac, alcool et expositions professionnelles.",
          "Résultats d’examens déjà réalisés."
        ]
      },
      {
        title: "Quels examens peuvent être proposés ?",
        paragraphs: [
          "Chez la femme, le bilan peut rechercher une ovulation, évaluer l’utérus et les ovaires par échographie et vérifier, si nécessaire, la perméabilité des trompes.",
          "Des prises de sang hormonales peuvent aussi être demandées. Parmi elles, le dosage de l’AMH est parfois proposé pour estimer la réserve ovarienne, c’est-à-dire le nombre approximatif de follicules encore disponibles.",
          "Chez l’homme, le spermogramme est un examen central. Il analyse notamment le nombre, la mobilité et la forme des spermatozoïdes.",
          "Des examens infectieux, génétiques ou plus spécialisés peuvent être ajoutés selon les résultats. Tous ne sont pas nécessaires pour chaque couple."
        ],
        quote:
          "Bon à savoir sur l’AMH : cette hormone aide à estimer la réserve ovarienne, mais elle ne mesure pas la qualité des ovocytes et ne permet pas, à elle seule, de prévoir une grossesse naturelle."
      },
      {
        title: "À retenir",
        paragraphs: [
          "Le délai habituel est de 12 mois avant 35 ans et de 6 mois à partir de 35 ans. Après 40 ans ou en présence d’un facteur de risque, un avis plus rapide est recommandé.",
          "Le bilan concerne le couple et avance par étapes. Il ne signifie pas automatiquement qu’un traitement ou une assistance médicale à la procréation sera nécessaire."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Bilan médical de l’infertilité",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/sterilite-pma-infertilite/bilan-medical-infertilite-sterilite"
      },
      {
        label: "Assurance Maladie — Comprendre l’infertilité : définition et causes",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/sterilite-pma-infertilite/comprendre-sterilite"
      },
      {
        label: "ACOG — Evaluating Infertility",
        url: "https://www.acog.org/womens-health/faqs/evaluating-infertility"
      },
      {
        label: "ASRM — Fertility evaluation of infertile women",
        url: "https://www.asrm.org/practice-guidance/practice-committee-documents/fertility-evaluation-of-infertile-women-a-committee-opinion-2021/"
      },
      {
        label: "ACOG — The Use of Antimüllerian Hormone in Women Not Seeking Fertility Care",
        url: "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2019/04/the-use-of-antimullerian-hormone-in-women-not-seeking-fertility-care"
      },
      {
        label: "NHS — Diagnosis of infertility",
        url: "https://www.nhs.uk/conditions/infertility/diagnosis/"
      }
    ]
  },
  {
    slug: "quel-professionnel-consulter-avant-projet-bebe",
    title: "Quel professionnel consulter avant un projet bébé ?",
    description:
      "Médecin généraliste, sage-femme ou gynécologue : comprendre qui peut vous accompagner et comment choisir le bon interlocuteur.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Santé et rendez-vous",
    subcategorySlug: "sante-rendez-vous",
    readingTime: "5 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Un médecin généraliste, une sage-femme ou un gynécologue peut réaliser une consultation préconceptionnelle.",
          "Le médecin généraliste est souvent le plus pratique pour faire le point sur votre santé globale et vos traitements.",
          "La sage-femme peut accompagner un projet bébé et assurer le suivi gynécologique des personnes en bonne santé.",
          "Le gynécologue est particulièrement utile en cas d’antécédent gynécologique, de douleur, de cycles très irréguliers ou de difficulté à concevoir."
        ],
        quote:
          "Le meilleur professionnel est d’abord celui qui connaît votre situation, vous écoute et peut vous orienter si nécessaire."
      },
      {
        title: "Qui peut accompagner un projet de grossesse ?",
        paragraphs: [
          "La consultation préconceptionnelle peut être réalisée par un médecin généraliste, une sage-femme, un gynécologue médical ou un gynécologue-obstétricien.",
          "Ces professionnels peuvent faire le point sur vos antécédents, vos traitements, vos vaccinations, la vitamine B9, vos habitudes de vie et les éventuels examens utiles.",
          "Vous n’avez pas besoin de choisir dès maintenant la personne qui suivra toute la grossesse. Un premier rendez-vous peut simplement servir à préparer le projet et à vous orienter."
        ]
      },
      {
        title: "Les 3 professionnels les plus souvent consultés",
        paragraphs: [
          "Le médecin généraliste. Il connaît souvent votre dossier médical, vos maladies chroniques et vos traitements. Il peut coordonner les soins et demander l’avis d’un spécialiste.",
          "La sage-femme. Elle peut réaliser une consultation préconceptionnelle, assurer le suivi gynécologique de prévention, prescrire certains examens et accompagner ensuite une grossesse physiologique.",
          "Le gynécologue. Il est particulièrement adapté en cas d’antécédent gynécologique, de douleurs, de saignements inhabituels, de cycles très irréguliers, d’endométriose ou de difficulté à concevoir."
        ],
        quote:
          "Vous pouvez choisir selon votre situation et votre niveau de confiance : il n’existe pas un seul parcours valable pour tout le monde."
      },
      {
        title: "Quand choisir plutôt un médecin généraliste ?",
        paragraphs: [
          "Le médecin généraliste est un bon premier interlocuteur si vous souhaitez un bilan global de votre santé.",
          "Il est particulièrement utile si vous vivez avec une maladie chronique, prenez plusieurs traitements ou devez coordonner différents spécialistes.",
          "Il peut vérifier vos vaccins, prescrire la vitamine B9, demander des analyses et vous adresser à une sage-femme, un gynécologue ou un autre spécialiste si besoin."
        ]
      },
      {
        title: "Quand choisir plutôt une sage-femme ?",
        paragraphs: [
          "La sage-femme peut accompagner le projet de grossesse, répondre aux questions sur le cycle, la contraception, la sexualité et la préparation à la grossesse.",
          "Elle peut aussi assurer le suivi gynécologique de prévention chez les personnes en bonne santé, réaliser certains dépistages et prescrire des examens dans le cadre de ses compétences.",
          "La consulter dès le projet bébé peut permettre de créer une relation de confiance avant un éventuel suivi de grossesse."
        ]
      },
      {
        title: "Quand choisir plutôt un gynécologue ?",
        paragraphs: [
          "Le gynécologue est à privilégier si vous avez une maladie gynécologique connue, des douleurs importantes, des saignements anormaux ou des antécédents de chirurgie gynécologique.",
          "Il est également utile en cas de cycles absents ou très irréguliers, d’endométriose, de syndrome des ovaires polykystiques, de fausses couches répétées ou de difficulté à concevoir.",
          "Un gynécologue-obstétricien peut aussi être indiqué lorsqu’une grossesse future nécessite une surveillance spécialisée."
        ]
      },
      {
        title: "Et pour le ou la partenaire ?",
        paragraphs: [
          "Le ou la partenaire peut participer à la consultation préconceptionnelle, notamment pour parler de ses traitements, de ses antécédents, du tabac, de l’alcool ou d’expositions professionnelles.",
          "Son médecin traitant peut être consulté si un problème de santé ou un traitement doit être évalué.",
          "En cas de difficulté à concevoir, le bilan concerne généralement les deux partenaires et peut inclure un avis en urologie, andrologie ou médecine de la reproduction."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Médecin généraliste, sage-femme et gynécologue peuvent tous être de bons interlocuteurs avant une grossesse.",
          "Choisissez selon votre état de santé, vos antécédents, vos besoins et la relation de confiance. Le premier professionnel consulté pourra toujours vous orienter vers un autre si nécessaire."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Consulter avant d’être enceinte : la consultation préconceptionnelle",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/consultation-et-mode-de-vie-en-vue-d-une-grossesse/avant-d-etre-enceinte-la-consultation-preconceptionnelle"
      },
      {
        label: "1000 premiers jours — Consultation préconceptionnelle",
        url: "https://www.1000-premiers-jours.fr/fr/consultation-preconceptionnelle"
      },
      {
        label: "Ordre des sages-femmes — Les compétences des sages-femmes",
        url: "https://www.ordre-sages-femmes.fr/exercice/vos-competences/les-competences-des-sages-femmes/"
      },
      {
        label: "1000 premiers jours — Le suivi médical de grossesse",
        url: "https://www.1000-premiers-jours.fr/fr/le-suivi-medical-de-grossesse"
      },
      {
        label: "Assurance Maladie — Désir de grossesse et endométriose",
        url: "https://www.ameli.fr/assure/sante/themes/endometriose/desir-de-grossesse-et-endometriose"
      }
    ]
  },
  {
    slug: "quels-examens-faire-avant-grossesse",
    title: "Quels examens faire avant une grossesse ?",
    description:
      "Les examens utiles avant une grossesse, ceux qui dépendent de votre situation et ceux qui ne sont pas systématiques.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Santé et rendez-vous",
    subcategorySlug: "sante-rendez-vous",
    readingTime: "5 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Il n’existe pas une liste identique d’examens pour tout le monde.",
          "Le professionnel commence par un entretien et un examen clinique simple.",
          "Une prise de sang peut vérifier le groupe sanguin, certaines immunités ou infections.",
          "Le frottis, l’échographie ou les examens génétiques sont proposés seulement si votre situation le justifie."
        ],
        quote:
          "Les examens sont choisis selon vos antécédents, vos traitements, votre âge et votre suivi gynécologique."
      },
      {
        title: "Quels examens sont généralement envisagés ?",
        paragraphs: [
          "La consultation commence souvent par des questions sur vos antécédents, vos traitements, vos cycles, vos grossesses précédentes et les maladies présentes dans votre famille.",
          "Le professionnel peut mesurer le poids, la taille et la tension artérielle, puis réaliser un examen général. Un examen gynécologique ou des seins n’est proposé que s’il est utile.",
          "Les examens biologiques et d’imagerie ne sont pas tous automatiques : ils dépendent de ce que l’entretien et l’examen clinique mettent en évidence."
        ]
      },
      {
        title: "Les 3 vérifications les plus fréquentes",
        paragraphs: [
          "Le groupe sanguin. S’il n’est pas connu ou documenté, une prise de sang peut déterminer les groupes ABO, Rhésus et Kell.",
          "Les immunités et les infections. Des sérologies peuvent vérifier l’immunité contre la rubéole, l’hépatite B ou la toxoplasmose, et dépister certaines infections comme le VIH, l’hépatite C ou la syphilis.",
          "Le suivi gynécologique. Le professionnel vérifie si le dépistage du col de l’utérus est à jour et propose un frottis ou un test HPV seulement s’il est indiqué."
        ],
        quote:
          "Une prise de sang « complète » n’est pas systématique : son contenu doit répondre à une question précise."
      },
      {
        title: "Faut-il faire une échographie avant la grossesse ?",
        paragraphs: [
          "Non, une échographie pelvienne n’est pas nécessaire pour toutes les personnes qui souhaitent une grossesse.",
          "Elle peut être proposée en cas de douleurs, de saignements inhabituels, de suspicion de fibrome, d’endométriose, de kyste ovarien ou d’autre anomalie gynécologique.",
          "Une échographie normale ne permet pas, à elle seule, de confirmer que la fertilité est normale."
        ]
      },
      {
        title: "Quels examens dépendent de votre situation ?",
        paragraphs: [
          "Un bilan de glycémie, de thyroïde, de tension artérielle ou d’autres organes peut être demandé en cas de maladie chronique, de symptômes, d’antécédents ou de facteur de risque.",
          "Un dépistage génétique peut être proposé si une maladie héréditaire, une anomalie chromosomique ou une malformation est connue dans votre famille ou celle du partenaire.",
          "Un bilan de fertilité n’est pas réalisé systématiquement avant les essais. Il est proposé selon l’âge, la durée des essais et les antécédents du couple."
        ]
      },
      {
        title: "Comment préparer le rendez-vous ?",
        paragraphs: [
          "Apportez les documents que vous possédez déjà afin d’éviter de refaire inutilement certains examens.",
          "Préparez aussi la liste de vos traitements, compléments, plantes ou produits pris occasionnellement.",
          "Le professionnel pourra alors identifier ce qui est à jour, ce qui doit être complété et ce qui n’est pas nécessaire."
        ],
        bullets: [
          "Carte de groupe sanguin ou anciens résultats de prise de sang.",
          "Carnet de santé et de vaccination.",
          "Dernier résultat de frottis ou de test HPV.",
          "Comptes rendus d’échographie, d’opération ou de grossesse précédente.",
          "Liste des médicaments et compléments."
        ]
      },
      {
        title: "Quand faut-il consulter plus tôt ?",
        paragraphs: [
          "Prenez rendez-vous avant les essais si vous vivez avec une maladie chronique, prenez un traitement régulier ou avez déjà connu une grossesse compliquée.",
          "Un avis est également utile en cas de règles absentes ou très irrégulières, de douleurs gynécologiques importantes, de fausses couches répétées ou d’antécédent de grossesse extra-utérine.",
          "N’interrompez jamais seule un traitement pour préparer une grossesse : il doit être évalué et, si nécessaire, adapté par un professionnel."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Avant une grossesse, l’objectif n’est pas de multiplier les examens, mais de vérifier les points utiles à votre situation.",
          "L’entretien, l’examen clinique et vos anciens résultats permettent au médecin ou à la sage-femme de choisir les analyses ou examens réellement nécessaires."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Consulter avant d’être enceinte : la consultation préconceptionnelle",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/consultation-et-mode-de-vie-en-vue-d-une-grossesse/avant-d-etre-enceinte-la-consultation-preconceptionnelle"
      },
      {
        label: "Haute Autorité de santé — Projet de grossesse : informations, prévention et examens à proposer",
        url: "https://www.has-sante.fr/jcms/c_1360649/fr/projet-de-grossesse-informations-messages-de-prevention-examens-a-proposer"
      },
      {
        label: "Assurance Maladie — Toxoplasmose : êtes-vous immunisée ?",
        url: "https://www.ameli.fr/assure/sante/themes/toxoplasmose/bons-reflexes-cas-faut-consulter"
      },
      {
        label: "Assurance Maladie — Projet de grossesse : vaccinations et médicaments",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/consultation-et-mode-de-vie-en-vue-d-une-grossesse/projet-de-grossesse-vaccinations-et-medicaments"
      }
    ]
  },
  {
    slug: "consultation-preconceptionnelle-pourquoi-quand-faire",
    title: "Consultation préconceptionnelle : pourquoi et quand la faire ?",
    description:
      "Un rendez-vous simple pour faire le point sur votre santé, vos traitements et vos questions avant une grossesse.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Santé et rendez-vous",
    subcategorySlug: "sante-rendez-vous",
    readingTime: "5 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "La consultation peut être réalisée dès qu’un projet de grossesse se précise.",
          "Elle peut être menée par un médecin généraliste, un gynécologue ou une sage-femme.",
          "Elle permet de faire le point sur les antécédents, les traitements, les vaccins et la vitamine B9.",
          "Le ou la partenaire peut aussi participer au rendez-vous."
        ],
        quote:
          "Il n’est pas nécessaire d’attendre d’avoir arrêté la contraception ou d’être enceinte pour prendre rendez-vous."
      },
      {
        title: "À quoi sert la consultation préconceptionnelle ?",
        paragraphs: [
          "La consultation préconceptionnelle est un rendez-vous proposé avant une grossesse. Elle permet de préparer le projet dans de bonnes conditions, sans transformer cette période en parcours médical compliqué.",
          "Le professionnel s’intéresse à votre santé, à vos antécédents personnels et familiaux, à vos traitements, à vos vaccinations et à vos habitudes de vie.",
          "C’est aussi un moment pour poser vos questions, parler de vos inquiétudes et recevoir des conseils adaptés à votre situation."
        ]
      },
      {
        title: "Les 3 points vérifiés pendant le rendez-vous",
        paragraphs: [
          "Votre santé et vos antécédents. Le professionnel peut revenir sur les maladies chroniques, les opérations, les grossesses précédentes et les antécédents familiaux.",
          "Vos médicaments et vos vaccins. Tous les traitements, y compris ceux sans ordonnance, les plantes, les huiles essentielles et les compléments, doivent être signalés.",
          "Votre préparation à la grossesse. La vitamine B9, les habitudes de vie, le tabac, l’alcool et certains examens peuvent être abordés selon vos besoins."
        ],
        quote:
          "Apportez votre carnet de santé, votre carnet de vaccination et la liste de vos traitements si vous les avez."
      },
      {
        title: "Quand prendre rendez-vous ?",
        paragraphs: [
          "Vous pouvez prendre rendez-vous dès que le projet de grossesse devient concret, idéalement avant l’arrêt de la contraception ou au début des essais.",
          "Ce rendez-vous est particulièrement utile si vous prenez un traitement régulier, vivez avec une maladie chronique, avez déjà connu une grossesse compliquée ou si une maladie héréditaire existe dans la famille.",
          "Il reste également utile lorsque tout va bien : son objectif est aussi de prévenir, informer et rassurer."
        ]
      },
      {
        title: "Quel professionnel consulter ?",
        paragraphs: [
          "La consultation peut être menée par un médecin généraliste, un gynécologue médical, un gynécologue-obstétricien ou une sage-femme.",
          "Vous pouvez choisir le professionnel avec lequel vous vous sentez le plus à l’aise. Il n’est pas obligatoire que cette personne assure ensuite le suivi de la grossesse.",
          "Si une situation particulière est repérée, le professionnel pourra vous orienter vers un spécialiste."
        ]
      },
      {
        title: "Comment préparer le rendez-vous ?",
        paragraphs: [
          "Notez vos questions à l’avance et préparez la liste de vos traitements, compléments et produits utilisés occasionnellement.",
          "Rassemblez, si possible, votre carnet de vaccination, vos comptes rendus médicaux, vos résultats récents et les informations sur vos antécédents familiaux.",
          "Le ou la partenaire peut aussi venir pour parler de sa santé, de ses traitements, de ses habitudes de vie et de ses antécédents familiaux."
        ],
        bullets: [
          "Carnet de santé et de vaccination.",
          "Liste ou photos des médicaments et compléments.",
          "Résultats d’examens ou comptes rendus utiles.",
          "Questions sur la grossesse, la fertilité ou les traitements."
        ]
      },
      {
        title: "Quand ce rendez-vous est-il particulièrement important ?",
        paragraphs: [
          "Il est particulièrement recommandé en cas de diabète, hypertension, épilepsie, maladie de la thyroïde, maladie auto-immune, trouble psychiatrique ou autre maladie chronique.",
          "Un avis personnalisé est aussi important après une grossesse compliquée, des fausses couches répétées, une chirurgie importante ou en cas de traitement pouvant être incompatible avec une grossesse.",
          "N’arrêtez jamais seule un traitement prescrit. Le professionnel évaluera les bénéfices et les risques et proposera, si nécessaire, une adaptation."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "La consultation préconceptionnelle est un rendez-vous d’information et de prévention. Elle peut être réalisée dès le début du projet bébé, même en l’absence de problème de santé.",
          "Elle permet de vérifier les traitements, les vaccins, les antécédents et la vitamine B9, puis de préparer la grossesse de manière adaptée à votre situation."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Consulter avant d’être enceinte : la consultation préconceptionnelle",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/consultation-et-mode-de-vie-en-vue-d-une-grossesse/avant-d-etre-enceinte-la-consultation-preconceptionnelle"
      },
      {
        label: "Haute Autorité de santé — Projet de grossesse : informations, prévention et examens",
        url: "https://www.has-sante.fr/jcms/c_1360649/fr/projet-de-grossesse-informations-messages-de-prevention-examens-a-proposer"
      },
      {
        label: "1000 premiers jours — Consultation préconceptionnelle",
        url: "https://www.1000-premiers-jours.fr/fr/consultation-preconceptionnelle"
      },
      {
        label: "Assurance Maladie — Projet de grossesse : vaccinations et médicaments",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/consultation-et-mode-de-vie-en-vue-d-une-grossesse/projet-de-grossesse-vaccinations-et-medicaments"
      }
    ]
  },
  {
    slug: "apres-arret-contraception-quand-cycle-revient",
    title: "Après l’arrêt de la contraception : quand le cycle revient-il ?",
    description:
      "Des repères simples pour comprendre le retour des règles et de l’ovulation après l’arrêt d’une contraception.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Fertilité et cycle",
    subcategorySlug: "fertilite-cycle",
    readingTime: "5 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "La fertilité peut revenir avant les premières règles naturelles.",
          "Après la pilule, l’anneau, le patch, l’implant ou le retrait d’un stérilet, le retour de la fertilité est généralement rapide.",
          "Les premiers cycles peuvent être irréguliers pendant quelque temps.",
          "L’injection contraceptive est la méthode qui peut retarder le plus longtemps le retour de l’ovulation."
        ],
        quote:
          "Il est possible d’ovuler et de tomber enceinte avant le retour des premières règles."
      },
      {
        title: "Retour des règles et retour de la fertilité : quelle différence ?",
        paragraphs: [
          "Le retour des règles et le retour de la fertilité ne correspondent pas exactement à la même chose. L’ovulation se produit avant les règles : une grossesse peut donc commencer avant le premier saignement naturel après l’arrêt de la contraception.",
          "Après l’arrêt d’une contraception hormonale, un saignement peut parfois correspondre à une privation hormonale et non encore au retour d’un cycle naturel complet.",
          "Le délai dépend de la méthode utilisée, de votre cycle avant la contraception, de votre âge et de votre état de santé."
        ]
      },
      {
        title: "Le délai dépend de la méthode utilisée",
        paragraphs: [
          "Pilule, patch ou anneau vaginal : la fertilité revient généralement rapidement après l’arrêt, souvent en quelques semaines. Il est possible d’ovuler dès le premier cycle.",
          "Implant ou stérilet : après le retrait, la fertilité peut revenir très vite. Une grossesse peut être possible avant même le retour des règles, quelle que soit la durée d’utilisation.",
          "Injection contraceptive : le retour de l’ovulation peut demander plusieurs mois et parfois plus d’un an. Ce délai est plus long que pour les autres méthodes, mais la fertilité finit habituellement par revenir."
        ],
        quote:
          "La contraception utilisée pendant plusieurs années ne rend pas infertile. L’âge au moment de l’arrêt peut toutefois influencer la fertilité naturelle."
      },
      {
        title: "À quoi s’attendre pendant les premiers mois ?",
        paragraphs: [
          "Les règles peuvent revenir rapidement ou mettre plusieurs semaines à réapparaître. Les premiers cycles peuvent être plus courts, plus longs ou moins prévisibles.",
          "Les symptômes que la contraception contrôlait peuvent aussi réapparaître : acné, règles douloureuses ou abondantes, syndrome prémenstruel ou cycles irréguliers.",
          "Si vos règles étaient déjà irrégulières avant la contraception, elles peuvent le redevenir après l’arrêt. La contraception peut avoir masqué un trouble du cycle sans en être la cause."
        ]
      },
      {
        title: "Peut-on tomber enceinte avant le retour des règles ?",
        paragraphs: [
          "Oui. Comme l’ovulation précède les règles, une grossesse est possible avant le premier retour de règles.",
          "Si vous ne souhaitez pas de grossesse immédiatement, utilisez une autre méthode contraceptive dès l’arrêt ou le retrait de votre contraception.",
          "Si vous souhaitez concevoir, il n’est généralement pas nécessaire d’attendre plusieurs cycles après l’arrêt de la pilule, de l’anneau, du patch, de l’implant ou du stérilet. Un professionnel peut toutefois vous conseiller selon votre situation."
        ]
      },
      {
        title: "Comment suivre le retour du cycle ?",
        paragraphs: [
          "Notez la date des saignements, leur durée et leur abondance. Cela permet de voir progressivement si un rythme se réinstalle.",
          "Vous pouvez aussi observer la glaire cervicale ou utiliser des tests d’ovulation, mais leurs résultats peuvent être difficiles à interpréter pendant les premiers cycles irréguliers.",
          "Une application peut servir de carnet de suivi, mais ses prévisions restent approximatives tant que votre cycle n’est pas stabilisé."
        ],
        bullets: [
          "Notez le premier jour de chaque saignement.",
          "Observez les changements inhabituels.",
          "Faites un test de grossesse en cas de retard et de rapport non protégé.",
          "Gardez la liste de vos traitements pour une éventuelle consultation."
        ]
      },
      {
        title: "Quand demander un avis médical ?",
        paragraphs: [
          "Faites un test de grossesse si vos règles ne reviennent pas et qu’une grossesse est possible.",
          "Prenez rendez-vous en cas d’absence de règles pendant plus de trois mois après l’arrêt, hors grossesse, allaitement ou situation déjà expliquée par un professionnel.",
          "Consultez plus tôt en cas de douleur importante, de saignements très abondants, de symptômes inhabituels ou si vos cycles restent très irréguliers et que vous souhaitez concevoir."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Pour la plupart des méthodes contraceptives, la fertilité revient rapidement après l’arrêt ou le retrait. L’injection contraceptive constitue l’exception principale, avec un délai parfois plus long.",
          "Le retour des règles peut demander un peu de temps et les premiers cycles peuvent être irréguliers. Une grossesse reste possible avant les premières règles naturelles."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Aménorrhée secondaire, arrêt des règles de plus de trois mois",
        url: "https://www.ameli.fr/assure/sante/themes/retard-absence-de-regles-ou-amenorrhee/amenorrhee-regles-retard-absence-0"
      },
      {
        label: "NHS — What is the combined pill?",
        url: "https://www.nhs.uk/contraception/methods-of-contraception/combined-pill/what-is-it/"
      },
      {
        label: "NHS — What is the progestogen-only pill?",
        url: "https://www.nhs.uk/contraception/methods-of-contraception/progestogen-only-pill/what-is-it/"
      },
      {
        label: "NHS — Contraceptive injections: common questions",
        url: "https://www.nhs.uk/medicines/contraceptive-injections-medroxyprogesterone/common-questions-about-medroxyprogesterone-contraceptive-injections/"
      },
      {
        label: "ACOG — What I Wish All Teens Knew About Long-Acting Birth Control",
        url: "https://www.acog.org/womens-health/experts-and-stories/the-latest/what-i-wish-all-teens-knew-about-long-acting-birth-control"
      },
      {
        label: "ACOG — What to Know About Skipping Periods With Birth Control",
        url: "https://www.acog.org/womens-health/experts-and-stories/the-latest/what-to-know-about-skipping-periods-with-birth-control"
      },
      {
        label: "Organisation mondiale de la Santé — Oral contraceptives",
        url: "https://www.who.int/news-room/fact-sheets/detail/oral-contraceptives"
      }
    ]
  },
  {
    slug: "combien-temps-moyenne-tomber-enceinte",
    title: "Combien de temps faut-il en moyenne pour tomber enceinte ?",
    description:
      "Des repères simples pour comprendre les délais habituels, les facteurs qui peuvent les influencer et le moment où demander conseil.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Fertilité et cycle",
    subcategorySlug: "fertilite-cycle",
    readingTime: "5 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "rose",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Certaines grossesses commencent rapidement, tandis que d’autres demandent plusieurs mois.",
          "La majorité des couples conçoivent dans l’année avec des rapports réguliers sans contraception.",
          "L’âge, la santé, la fréquence des rapports et d’éventuels problèmes de fertilité influencent les délais.",
          "Un avis médical est généralement conseillé après 12 mois d’essais, ou plus tôt selon l’âge et les antécédents."
        ],
        quote:
          "Ne pas être enceinte après quelques mois d’essais ne signifie pas forcément qu’il existe un problème de fertilité."
      },
      {
        title: "Quel délai est considéré comme habituel ?",
        paragraphs: [
          "Le temps nécessaire pour obtenir une grossesse varie beaucoup d’une personne à l’autre. Certaines grossesses commencent dès les premiers cycles, tandis que d’autres surviennent après plusieurs mois.",
          "Avec des rapports réguliers sans contraception, la plupart des couples obtiennent une grossesse dans l’année. Ce repère ne permet toutefois pas de prévoir ce qui se passera pour un couple en particulier.",
          "Un délai plus long que prévu peut être décevant, mais il reste fréquent. Chaque cycle n’offre qu’une possibilité limitée de conception, même lorsque l’ovulation et les rapports sont bien situés."
        ]
      },
      {
        title: "Les 3 facteurs qui influencent le délai",
        paragraphs: [
          "L’âge. La fertilité diminue progressivement avec l’âge, en particulier du côté ovarien. Cette évolution explique pourquoi un bilan est proposé plus tôt à partir de 35 ans.",
          "La fréquence et le moment des rapports. Des rapports tous les deux ou trois jours permettent généralement de couvrir la période fertile sans devoir identifier exactement le jour de l’ovulation.",
          "La santé des deux partenaires. Les cycles irréguliers, l’endométriose, certains troubles hormonaux, une faible qualité du sperme, certaines maladies ou certains traitements peuvent influencer les chances de conception."
        ],
        quote:
          "La fertilité concerne les deux partenaires. Lorsqu’un bilan est nécessaire, il est généralement proposé au couple."
      },
      {
        title: "Faut-il s’inquiéter après quelques mois ?",
        paragraphs: [
          "Non, pas automatiquement. L’absence de grossesse après trois, quatre ou six mois peut rester compatible avec un délai habituel, surtout avant 35 ans et en l’absence de signe particulier.",
          "Il est normal que l’attente devienne émotionnellement difficile. Essayez de ne pas interpréter chaque cycle sans grossesse comme la preuve qu’un problème existe.",
          "Vous pouvez néanmoins demander conseil à tout moment si l’attente vous inquiète. Une consultation ne conduit pas forcément à un bilan complet : elle peut simplement permettre de faire le point et de répondre à vos questions."
        ]
      },
      {
        title: "Quand consulter ?",
        paragraphs: [
          "Avant 35 ans, une consultation pour infertilité est le plus souvent envisagée après un an de rapports réguliers sans contraception et sans grossesse.",
          "À partir de 35 ans, il est généralement conseillé de consulter après six mois d’essais. Après 40 ans, il est préférable d’en parler rapidement avec un professionnel dès le début du projet.",
          "Il ne faut pas attendre ces délais en cas de règles absentes ou très irrégulières, de douleurs importantes, d’endométriose connue, d’antécédent de problème de fertilité, de traitement pouvant l’influencer ou de difficulté connue du côté du sperme."
        ]
      },
      {
        title: "Que peut-on faire pendant les essais ?",
        paragraphs: [
          "Avoir des rapports réguliers tous les deux ou trois jours permet généralement de couvrir la période fertile sans rendre le suivi trop contraignant.",
          "Il peut être utile de noter les règles et d’observer certains signes du cycle, mais il n’est pas nécessaire de multiplier les tests si cela augmente le stress.",
          "Un rendez-vous préconceptionnel permet aussi de faire le point sur les traitements, les vaccins, la vitamine B9 et les habitudes de vie."
        ],
        bullets: [
          "Gardez des rapports réguliers sans viser une seule journée.",
          "Évitez de transformer chaque cycle en examen à réussir.",
          "Parlez de vos inquiétudes avec votre partenaire.",
          "Demandez conseil plus tôt si votre situation médicale le justifie."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Le délai pour obtenir une grossesse varie beaucoup. La majorité des couples conçoivent dans l’année, mais plusieurs mois d’attente peuvent être tout à fait habituels.",
          "Le bon moment pour consulter dépend de l’âge, des antécédents et des symptômes. Vous pouvez néanmoins demander un avis avant les délais habituels si vous êtes inquiète ou si une difficulté est déjà connue."
        ]
      }
    ],
    sources: [
      {
        label: "NHS — How long does it usually take to get pregnant?",
        url: "https://www.nhs.uk/pregnancy/trying-for-a-baby/how-long-it-takes-to-get-pregnant/"
      },
      {
        label: "NHS — Trying to get pregnant",
        url: "https://www.nhs.uk/pregnancy/trying-for-a-baby/trying-to-get-pregnant/"
      },
      {
        label: "Assurance Maladie — Bilan médical de l’infertilité",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/sterilite-pma-infertilite/bilan-medical-infertilite-sterilite"
      },
      {
        label: "Assurance Maladie — Baisse de la fertilité et de la fécondité : pourquoi ?",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/sterilite-pma-infertilite/baisse-de-la-fertilite-et-de-la-fecondite-pourquoi"
      },
      {
        label: "ACOG — Evaluating Infertility",
        url: "https://www.acog.org/womens-health/faqs/evaluating-infertility"
      },
      {
        label: "Organisation mondiale de la Santé — Infertility",
        url: "https://www.who.int/news-room/fact-sheets/detail/infertility"
      }
    ]
  },
  {
    slug: "tests-ovulation-utiliser-interpreter",
    title: "Tests d’ovulation : comment les utiliser et les interpréter ?",
    description:
      "Un guide simple pour choisir le bon moment, lire le résultat et comprendre les limites des tests d’ovulation.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Fertilité et cycle",
    subcategorySlug: "fertilite-cycle",
    readingTime: "5 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Le test recherche dans les urines une hausse de l’hormone LH qui précède généralement l’ovulation.",
          "Un résultat positif indique que l’ovulation est probablement proche, souvent dans les 24 à 48 heures.",
          "Le jour de début et l’heure du test dépendent du produit : suivez toujours sa notice.",
          "Un test positif ne prouve pas à lui seul qu’une ovulation a réellement eu lieu."
        ],
        quote:
          "Le test d’ovulation donne un repère utile, mais il doit être interprété avec votre cycle et les instructions du fabricant."
      },
      {
        title: "Comment fonctionne un test d’ovulation ?",
        paragraphs: [
          "La plupart des tests d’ovulation urinaires détectent une augmentation de l’hormone lutéinisante, appelée LH. Cette hausse, ou « pic de LH », déclenche normalement la libération d’un ovocyte.",
          "Lorsque le test devient positif, l’ovulation est généralement attendue dans les 24 à 48 heures suivantes. Cette estimation n’est pas une garantie : le test repère une variation hormonale, pas la libération de l’ovocyte elle-même.",
          "Certains tests numériques suivent aussi une hausse des œstrogènes afin d’indiquer plusieurs jours de fertilité élevée. Leur fonctionnement et leurs symboles varient selon les marques."
        ]
      },
      {
        title: "Les 3 étapes pour bien l’utiliser",
        paragraphs: [
          "Déterminez le jour où commencer à tester. La notice propose généralement un tableau basé sur la durée habituelle de votre cycle. Avec des cycles irréguliers, il peut être nécessaire de commencer plus tôt ou de demander conseil.",
          "Testez dans des conditions comparables. Utilisez le test à l’heure recommandée par la notice, évitez de boire beaucoup juste avant et essayez de tester à une heure proche chaque jour.",
          "Respectez le délai de lecture. Lisez le résultat uniquement dans la fenêtre de temps indiquée et ne réutilisez pas une bandelette. Un résultat lu trop tard peut être trompeur."
        ],
        quote:
          "La notice de votre marque reste la référence : tous les tests ne s’utilisent pas exactement de la même manière."
      },
      {
        title: "Comment lire le résultat ?",
        paragraphs: [
          "Sur un test à bandelettes, le résultat est généralement positif lorsque la ligne test est aussi foncée ou plus foncée que la ligne témoin. Une ligne test plus pâle correspond habituellement à un résultat négatif.",
          "Sur un test numérique, un symbole indique le résultat. La signification des symboles et la durée pendant laquelle ils restent affichés dépendent du fabricant.",
          "Un test positif suggère que les rapports le jour même et dans les jours proches peuvent couvrir la période fertile. Des rapports réguliers tous les deux ou trois jours restent une alternative simple si les tests deviennent contraignants."
        ]
      },
      {
        title: "Que signifie un test négatif ?",
        paragraphs: [
          "Un résultat négatif signifie qu’aucun pic de LH n’a été détecté au moment du test. Cela ne signifie pas forcément que vous n’ovulerez pas.",
          "Le test a pu être commencé trop tôt ou trop tard, le pic peut être bref, l’urine peut avoir été trop diluée ou l’ovulation peut être décalée ce mois-ci.",
          "Continuez à tester selon la notice. Si vous n’obtenez jamais de résultat positif pendant plusieurs cycles, ou si vos règles sont très irrégulières ou absentes, parlez-en à un professionnel de santé."
        ]
      },
      {
        title: "Dans quelles situations le résultat peut-il être trompeur ?",
        paragraphs: [
          "Un test peut détecter une hausse de LH sans qu’une ovulation ait ensuite lieu. À l’inverse, un pic très court peut être manqué entre deux tests.",
          "Le syndrome des ovaires polykystiques peut entraîner des taux de LH élevés ou plusieurs variations au cours du cycle, ce qui rend parfois l’interprétation plus difficile.",
          "Une grossesse, la période qui suit une grossesse, la périménopause et certains traitements de fertilité peuvent aussi modifier les résultats. Demandez conseil si vous êtes dans l’une de ces situations."
        ]
      },
      {
        title: "Quand demander un avis médical ?",
        paragraphs: [
          "Demandez conseil si vous n’obtenez jamais de test positif pendant plusieurs cycles, si vos règles sont absentes ou très irrégulières, ou si l’utilisation des tests vous inquiète.",
          "Consultez également si vous prenez un traitement de fertilité : certains médicaments peuvent influencer le résultat et le calendrier des tests.",
          "Le test d’ovulation ne remplace pas un bilan médical. Si les essais se prolongent ou si vous avez des antécédents gynécologiques, un professionnel pourra vérifier si l’ovulation a lieu et rechercher d’autres facteurs."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Le test d’ovulation peut aider à repérer le pic de LH et à situer les jours proches de l’ovulation. Pour être utile, il doit être commencé au bon moment, utilisé selon la notice et lu dans le délai prévu.",
          "Un résultat positif annonce une ovulation probable, mais ne la confirme pas. Un résultat négatif isolé ne permet pas non plus de conclure que vous n’ovulez pas."
        ]
      }
    ],
    sources: [
      {
        label: "ACOG — Evaluating Infertility",
        url: "https://www.acog.org/womens-health/faqs/evaluating-infertility"
      },
      {
        label: "ACOG — Fertility Awareness-Based Methods of Family Planning",
        url: "https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning"
      },
      {
        label: "Mayo Clinic — Ovulation signs: When is conception most likely?",
        url: "https://www.mayoclinic.org/healthy-lifestyle/getting-pregnant/expert-answers/ovulation-signs/faq-20058000"
      },
      {
        label: "Mayo Clinic — Finding your fertility window",
        url: "https://mcpress.mayoclinic.org/pregnancy/finding-your-fertility-window/"
      },
      {
        label: "Assurance Maladie — Comprendre le syndrome des ovaires polykystiques",
        url: "https://www.ameli.fr/assure/sante/themes/syndrome-ovaires-polykystiques/comprendre"
      }
    ]
  },
  {
    slug: "cycles-irreguliers-mieux-comprendre",
    title: "Cycles irréguliers : comment mieux les comprendre ?",
    description:
      "Des repères simples pour observer votre cycle, comprendre les variations possibles et savoir quand demander un avis médical.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Fertilité et cycle",
    subcategorySlug: "fertilite-cycle",
    readingTime: "5 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Un cycle peut varier sans être forcément anormal.",
          "28 jours est une moyenne, pas une obligation.",
          "Le stress, le poids, le sport ou les hormones peuvent influencer le cycle.",
          "Un suivi sur quelques mois aide à repérer les changements."
        ],
        quote:
          "Un cycle irrégulier ne signifie pas automatiquement qu’une grossesse sera impossible, mais il peut rendre l’ovulation plus difficile à prévoir."
      },
      {
        title: "À quoi ressemble un cycle irrégulier ?",
        paragraphs: [
          "Un cycle commence le premier jour des règles et se termine la veille des règles suivantes.",
          "Il dure en moyenne autour de 28 jours, mais il n’a pas besoin de faire exactement 28 jours pour être considéré comme habituel. Chez l’adulte, un cycle compris entre 21 et 35 jours peut être normal. Les règles durent généralement entre 2 et 7 jours.",
          "On parle surtout de cycles irréguliers lorsque leur durée varie beaucoup d’un mois à l’autre, lorsque les règles surviennent à moins de 21 jours d’intervalle, sont espacées de plus de 35 jours, deviennent très difficiles à prévoir ou disparaissent pendant plusieurs mois.",
          "Une variation ponctuelle n’est pas forcément inquiétante. Ce qui compte surtout, c’est le changement par rapport à votre rythme habituel et la présence éventuelle d’autres symptômes."
        ],
        quote:
          "Le repère de 28 jours est une moyenne, pas une obligation. Un cycle régulier peut être plus court ou plus long."
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Noter le premier jour de chaque période de règles permet de calculer la durée de vos cycles et de voir si les écarts se répètent.",
          "Observer les signes associés — douleurs, saignements abondants, fatigue, acné, pilosité inhabituelle ou changement de poids — peut aider le professionnel de santé à orienter le bilan.",
          "Noter les changements récents, comme un stress important, un régime, une pratique sportive intensive, un nouveau traitement ou l’arrêt d’une contraception, apporte aussi des informations utiles."
        ],
        quote:
          "Un carnet ou une application peut servir de mémoire, mais ne permet pas à lui seul d’expliquer la cause d’un cycle irrégulier."
      },
      {
        title: "Quelles peuvent être les causes ?",
        paragraphs: [
          "Les cycles peuvent être irréguliers à certaines périodes de la vie, notamment après les premières règles, après une grossesse, pendant l’allaitement ou à l’approche de la ménopause.",
          "Le stress, une variation importante de poids, une activité physique très intense ou certains médicaments peuvent également modifier les règles.",
          "Parfois, une cause médicale est en jeu, comme un syndrome des ovaires polykystiques, un trouble de la thyroïde ou un autre déséquilibre hormonal. Seul un professionnel peut poser un diagnostic."
        ]
      },
      {
        title: "Peut-on repérer l’ovulation avec des cycles irréguliers ?",
        paragraphs: [
          "C’est possible, mais les prévisions basées uniquement sur un calendrier sont moins fiables lorsque la durée des cycles varie beaucoup.",
          "La glaire cervicale et les tests d’ovulation peuvent fournir des repères, mais leurs résultats doivent être interprétés avec prudence. Dans certains cycles, l’ovulation peut être tardive ou ne pas avoir lieu.",
          "Si vous essayez de concevoir, des rapports réguliers tous les deux ou trois jours peuvent éviter de dépendre d’une date précise."
        ]
      },
      {
        title: "Quand demander un avis médical ?",
        paragraphs: [
          "Prenez rendez-vous si vos règles deviennent soudainement irrégulières alors qu’elles étaient habituellement prévisibles, si elles durent plus de 7 jours, sont très abondantes ou surviennent avec des douleurs importantes.",
          "Consultez également en cas d’absence de règles pendant 3 mois hors grossesse, allaitement ou ménopause, ou si les irrégularités s’accompagnent de fatigue, variations de poids, acné importante ou pilosité inhabituelle.",
          "Un avis est aussi recommandé si vos cycles irréguliers rendent les essais de grossesse difficiles ou vous inquiètent."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Les cycles irréguliers peuvent avoir de nombreuses causes, parfois temporaires et parfois médicales. Les observer sur quelques mois permet de mieux décrire la situation.",
          "Il n’est pas nécessaire de trouver seule l’explication. Un médecin, une sage-femme ou un gynécologue peut rechercher la cause et proposer un accompagnement adapté."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Informations et conseils sur les règles",
        url: "https://www.ameli.fr/assure/sante/themes/puberte/informations-conseils-regles"
      },
      {
        label: "Assurance Maladie — Absence de règles de plus de trois mois",
        url: "https://www.ameli.fr/assure/sante/themes/retard-absence-de-regles-ou-amenorrhee/amenorrhee-regles-retard-absence-0"
      },
      {
        label: "Assurance Maladie — Syndrome des ovaires polykystiques : symptômes et diagnostic",
        url: "https://www.ameli.fr/assure/sante/themes/syndrome-ovaires-polykystiques/symptomes-diagnostic-evolution"
      },
      {
        label: "ACOG — Abnormal Uterine Bleeding",
        url: "https://www.acog.org/womens-health/faqs/abnormal-uterine-bleeding"
      },
      {
        label: "NHS — Irregular periods",
        url: "https://www.nhs.uk/symptoms/irregular-periods/"
      }
    ]
  },
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
      "Les premières étapes utiles pour préparer une grossesse sereinement, sans chercher à tout faire parfaitement.",
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
    description: "Projet bébé, fertilité, santé, PMA, hygiène de vie, vaccins et médicaments.",
    tone: "rose",
    subcategories: [
      { slug: "projet-bebe", title: "Projet bébé", description: "Préparer son projet, savoir par où commencer et avancer sereinement." },
      { slug: "fertilite-cycle", title: "Fertilité et cycle", description: "Comprendre le cycle, l’ovulation et les délais pour concevoir." },
      { slug: "sante-rendez-vous", title: "Santé et rendez-vous", description: "Consultation préconceptionnelle, examens et professionnels à consulter." },
      { slug: "pma-parcours-fertilite", title: "PMA et parcours de fertilité", description: "Comprendre l’AMP, l’insémination, la FIV, l’ICSI, les démarches et le vécu émotionnel." },
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
