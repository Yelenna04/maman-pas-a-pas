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
