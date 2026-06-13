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
    slug: "plantes-huiles-essentielles-complements-sans-risque",
    title: "Plantes, huiles essentielles et compléments : sont-ils sans risque ?",
    description:
      "Comprendre pourquoi les produits naturels ne sont pas toujours anodins pendant un projet bébé ou une grossesse.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Vaccins et médicaments",
    subcategorySlug: "vaccins-medicaments",
    readingTime: "6 min",
    publishedAt: "2026-06-13",
    updatedAt: "2026-06-13",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Naturel ne veut pas dire sans risque pour la grossesse.",
          "Les huiles essentielles sont déconseillées pendant la grossesse sans avis professionnel.",
          "Les plantes et compléments peuvent interagir avec des médicaments ou entraîner un surdosage.",
          "Avant toute prise, montrez le produit à un médecin, une sage-femme ou un pharmacien."
        ],
        quote:
          "Le bon réflexe est de considérer les plantes, huiles essentielles et compléments comme de vrais produits actifs."
      },
      {
        title: "Pourquoi les produits naturels demandent-ils de la prudence ?",
        paragraphs: [
          "Les plantes et les huiles essentielles contiennent des substances actives capables d’agir sur l’organisme.",
          "Certaines peuvent traverser le placenta, modifier l’action d’un médicament, provoquer une allergie ou être toxiques à certaines doses.",
          "Le manque d’études chez la femme enceinte ne signifie pas qu’un produit est sûr : il conduit au contraire à privilégier la prudence."
        ]
      },
      {
        title: "Les 3 réflexes les plus utiles",
        paragraphs: [
          "Ne commencez pas un produit naturel uniquement parce qu’il est vendu librement ou présenté comme spécial grossesse.",
          "Vérifiez la composition exacte, la dose et la durée prévue, surtout si plusieurs produits sont associés.",
          "Signalez toujours votre projet de grossesse ou votre grossesse au professionnel qui vous conseille."
        ],
        quote:
          "Une tisane, une huile essentielle ou une gélule peut contenir plusieurs substances actives : l’étiquette mérite d’être lue comme celle d’un médicament."
      },
      {
        title: "Les huiles essentielles sont-elles autorisées ?",
        paragraphs: [
          "Les recommandations françaises déconseillent l’utilisation des huiles essentielles pendant la grossesse sans avis médical ou pharmaceutique.",
          "Le risque dépend de l’huile, de la dose, de la voie d’utilisation et de la fréquence. La voie orale est particulièrement à risque, mais l’inhalation, la diffusion et l’application sur la peau ne sont pas automatiquement sans danger.",
          "Certaines huiles essentielles peuvent contenir des substances neurotoxiques, irritantes, allergisantes ou toxiques pour l’embryon ou le fœtus."
        ]
      },
      {
        title: "La diffusion dans l’air est-elle plus sûre ?",
        paragraphs: [
          "Non, pas systématiquement. Les sprays et diffuseurs libèrent des substances dans l’air qui peuvent être inhalées par toutes les personnes présentes.",
          "Ils peuvent irriter les voies respiratoires, déclencher des symptômes chez les personnes asthmatiques ou exposer inutilement pendant plusieurs heures.",
          "Pendant la grossesse, privilégiez l’aération du logement et évitez les diffuseurs parfumés contenant des huiles essentielles."
        ]
      },
      {
        title: "Et les produits appliqués sur la peau ?",
        paragraphs: [
          "Une application cutanée peut entraîner un passage dans l’organisme, surtout si le produit est concentré, utilisé sur une grande surface ou appliqué souvent.",
          "Les huiles essentielles peuvent aussi provoquer des brûlures, une irritation ou une allergie.",
          "N’ajoutez pas d’huile essentielle à une crème, une huile de massage ou un produit cosmétique sans conseil professionnel."
        ]
      },
      {
        title: "Les tisanes et plantes sont-elles toutes sans danger ?",
        paragraphs: [
          "Non. Certaines plantes peuvent agir sur l’utérus, la tension artérielle, la coagulation, le foie, le transit ou le système nerveux.",
          "Une consommation alimentaire ponctuelle n’est pas équivalente à une tisane très concentrée, un extrait, une teinture mère ou des gélules.",
          "Évitez les mélanges dont la composition ou la quantité de chaque plante n’est pas clairement indiquée."
        ]
      },
      {
        title: "Quels compléments alimentaires faut-il éviter de choisir seule ?",
        paragraphs: [
          "Les compléments contenant plusieurs vitamines, minéraux, plantes ou stimulants doivent être vérifiés avant utilisation.",
          "Certains peuvent apporter trop de vitamine A, d’iode, de vitamine D, de fer ou d’autres substances lorsqu’ils sont associés à l’alimentation ou à un second complément.",
          "Les produits dits détox, minceur, énergie, sommeil ou fertilité sont particulièrement à vérifier, car leur composition peut être complexe ou mal adaptée à la grossesse."
        ]
      },
      {
        title: "Existe-t-il des compléments recommandés ?",
        paragraphs: [
          "La vitamine B9 constitue la principale supplémentation recommandée dès le projet de grossesse, à une dose adaptée par un professionnel.",
          "Le fer, la vitamine D, l’iode, la vitamine B12 ou d’autres nutriments peuvent être prescrits dans certaines situations, mais pas automatiquement pour tout le monde.",
          "Une alimentation équilibrée ne justifie pas de multiplier les compléments sans carence ou indication précise."
        ]
      },
      {
        title: "Quels risques en cas de cumul ?",
        paragraphs: [
          "Prendre plusieurs produits en même temps peut entraîner un doublon de vitamines ou de minéraux sans que cela soit évident.",
          "Des interactions sont possibles avec les anticoagulants, les traitements de la thyroïde, de l’épilepsie, du diabète, de la tension ou de la santé mentale.",
          "Apportez les boîtes ou des photos des étiquettes lors de la consultation afin que le professionnel puisse vérifier l’ensemble."
        ]
      },
      {
        title: "Que faire si vous avez déjà utilisé un produit ?",
        paragraphs: [
          "Ne paniquez pas : une utilisation ponctuelle ne signifie pas automatiquement qu’un problème surviendra.",
          "Notez le nom exact, la composition, la dose, la voie d’utilisation et les dates, puis demandez conseil à un professionnel.",
          "En cas de malaise, vomissements importants, gêne respiratoire, gonflement, réaction cutanée sévère ou ingestion accidentelle, contactez rapidement un service médical ou un centre antipoison."
        ]
      },
      {
        title: "Comment choisir avec plus de sécurité ?",
        paragraphs: [
          "Évitez les produits dont la composition est incomplète, les mélanges très nombreux et les achats sur des sites non fiables.",
          "Ne vous fiez pas uniquement aux mentions « naturel », « bio », « traditionnel » ou « spécial grossesse ».",
          "Demandez conseil à un professionnel qui connaît votre état de santé, vos traitements et le stade du projet ou de la grossesse."
        ],
        bullets: [
          "Conserver les emballages et les notices.",
          "Vérifier les doses de chaque ingrédient.",
          "Éviter de cumuler plusieurs compléments.",
          "Signaler tous les traitements en cours.",
          "Arrêter et demander conseil en cas d’effet inhabituel."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Les plantes, huiles essentielles et compléments peuvent avoir de vrais effets et ne doivent pas être considérés comme automatiquement sûrs.",
          "Pendant un projet bébé ou une grossesse, demandez un avis avant toute utilisation, surtout pour les huiles essentielles, les extraits concentrés et les compléments combinés.",
          "La vitamine B9 est recommandée autour de la conception, tandis que les autres supplémentations doivent répondre à un besoin identifié."
        ]
      }
    ],
    sources: [
      {
        label: "Anses — Huiles essentielles : risques et précautions",
        url: "https://www.anses.fr/fr/content/huiles-essentielles-risques-et-precautions"
      },
      {
        label: "ANSM — Médicaments à base de plantes et huiles essentielles",
        url: "https://ansm.sante.fr/qui-sommes-nous/notre-perimetre/les-medicaments/p/medicaments-a-base-de-plantes-et-huiles-essentielles"
      },
      {
        label: "Assurance Maladie — Médicaments et grossesse",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/grossesse/grossesse-en-bonne-sante/medicament-grossesse"
      },
      {
        label: "Assurance Maladie — Les compléments alimentaires",
        url: "https://www.ameli.fr/assure/sante/medicaments/effets-indesirables-et-interactions-lies-aux-medicaments/complements-alimentaires"
      },
      {
        label: "1000 premiers jours — Les médicaments pendant la grossesse et l’allaitement",
        url: "https://www.1000-premiers-jours.fr/fr/les-medicaments-pendant-la-grossesse-et-lallaitement"
      },
      {
        label: "1000 premiers jours — Les nutriments essentiels au futur bébé",
        url: "https://www.1000-premiers-jours.fr/fr/les-nutriments-essentiels-au-futur-bebe"
      }
    ]
  },
  {
    slug: "automedication-avant-pendant-grossesse-reflexes",
    title: "Automédication avant et pendant la grossesse : quels réflexes adopter ?",
    description:
      "Les bons réflexes avant de prendre un médicament sans ordonnance pendant un projet bébé ou une grossesse.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Vaccins et médicaments",
    subcategorySlug: "vaccins-medicaments",
    readingTime: "6 min",
    publishedAt: "2026-06-13",
    updatedAt: "2026-06-13",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Un médicament sans ordonnance n’est pas forcément sans risque pendant une grossesse.",
          "Avant toute prise, demandez conseil à un médecin, une sage-femme ou un pharmacien.",
          "Les anti-inflammatoires comme l’ibuprofène ne doivent pas être pris en automédication pendant la grossesse.",
          "N’arrêtez jamais seule un traitement prescrit, même après un test de grossesse positif."
        ],
        quote:
          "En cas de projet bébé ou de grossesse possible, le bon réflexe est de vérifier avant de prendre, pas après."
      },
      {
        title: "Pourquoi l’automédication demande-t-elle plus de prudence ?",
        paragraphs: [
          "Un médicament peut traverser le placenta et atteindre l’embryon ou le fœtus. Le niveau de risque dépend de la substance, de la dose, de la durée et du moment de la grossesse.",
          "Les premières semaines sont parfois méconnues : une personne peut prendre un traitement avant même de savoir qu’elle est enceinte.",
          "Certains produits disponibles sans ordonnance peuvent être inadaptés pendant toute la grossesse ou à partir d’un trimestre précis."
        ]
      },
      {
        title: "Les 3 réflexes les plus importants",
        paragraphs: [
          "Dire que vous avez un projet de grossesse ou que vous pourriez être enceinte avant d’acheter un médicament.",
          "Vérifier la substance active plutôt que de se fier uniquement au nom commercial ou à une ancienne habitude.",
          "Utiliser la dose minimale efficace pendant la durée la plus courte, uniquement après validation d’un professionnel."
        ],
        quote:
          "Ne reprenez pas automatiquement un médicament déjà utilisé lors d’une précédente grossesse : la situation et les recommandations peuvent être différentes."
      },
      {
        title: "Quels médicaments ne faut-il pas prendre seule ?",
        paragraphs: [
          "Les anti-inflammatoires non stéroïdiens, ou AINS, comme l’ibuprofène, le kétoprofène ou l’aspirine à dose antalgique ne doivent pas être pris en automédication pendant la grossesse.",
          "Les médicaments contre le rhume, la toux, les allergies, les nausées, le mal des transports ou l’insomnie peuvent contenir plusieurs substances et nécessitent une vérification.",
          "Les traitements restants d’une ancienne ordonnance ou ceux d’un proche ne doivent jamais être utilisés sans avis."
        ]
      },
      {
        title: "Et le paracétamol ?",
        paragraphs: [
          "Le paracétamol est généralement l’antalgique de référence lorsqu’un traitement de la douleur ou de la fièvre est nécessaire pendant la grossesse.",
          "Il ne doit toutefois pas être pris de façon automatique ou prolongée. Respectez la dose indiquée, espacez les prises et vérifiez qu’aucun autre médicament n’en contient déjà.",
          "En cas de douleur importante, répétée, inhabituelle ou associée à d’autres symptômes, consultez plutôt que de prolonger l’automédication."
        ]
      },
      {
        title: "Pourquoi faut-il se méfier des médicaments combinés ?",
        paragraphs: [
          "Certains produits contre le rhume, la migraine ou les douleurs associent plusieurs substances dans un même comprimé ou sachet.",
          "Vous pouvez ainsi prendre sans le savoir un anti-inflammatoire, un décongestionnant, un antihistaminique ou une deuxième dose de paracétamol.",
          "Lisez toujours la composition et montrez la boîte au pharmacien, surtout si vous prenez déjà un autre traitement."
        ]
      },
      {
        title: "Plantes, huiles essentielles et compléments sont-ils concernés ?",
        paragraphs: [
          "Oui. Le terme « naturel » ne garantit pas l’absence de risque pour la grossesse.",
          "Les huiles essentielles sont déconseillées pendant la grossesse sans avis professionnel, quelle que soit la voie d’utilisation.",
          "Les plantes, tisanes concentrées et compléments peuvent interagir avec des médicaments ou apporter des doses élevées de vitamines et minéraux."
        ]
      },
      {
        title: "Que faire pour un rhume, une douleur ou des nausées ?",
        paragraphs: [
          "Commencez par des mesures simples adaptées au symptôme : repos, hydratation, lavage du nez au sérum physiologique ou repas fractionnés.",
          "Si un médicament semble nécessaire, décrivez précisément vos symptômes au pharmacien ou au professionnel qui suit la grossesse.",
          "Consultez si les symptômes sont intenses, persistent, s’aggravent ou s’accompagnent de fièvre, douleur importante, saignement, essoufflement ou malaise."
        ]
      },
      {
        title: "Que faire après une prise réalisée sans avis ?",
        paragraphs: [
          "Ne paniquez pas et n’arrêtez pas brutalement un traitement régulier.",
          "Notez le nom du produit, la dose, le nombre de prises et les dates, puis contactez un médecin, une sage-femme ou un pharmacien.",
          "Une prise ponctuelle ne signifie pas automatiquement qu’un problème surviendra. L’évaluation dépend du médicament et du moment de l’exposition."
        ]
      },
      {
        title: "Comment sécuriser son armoire à pharmacie ?",
        paragraphs: [
          "Conservez les médicaments dans leur emballage d’origine avec la notice et vérifiez régulièrement les dates de péremption.",
          "Séparez les traitements en cours des anciennes ordonnances et rapportez les médicaments inutilisés à la pharmacie.",
          "Évitez les achats sur des sites non autorisés et ne partagez jamais vos médicaments avec une autre personne."
        ],
        bullets: [
          "Garder les boîtes et les notices.",
          "Vérifier la substance active et le dosage.",
          "Éliminer les anciennes ordonnances inutiles.",
          "Noter les traitements réellement pris.",
          "Demander conseil avant tout nouvel achat."
        ]
      },
      {
        title: "Qui peut vous conseiller rapidement ?",
        paragraphs: [
          "Le pharmacien peut vérifier un produit sans ordonnance, repérer les doublons et vous orienter si une consultation est nécessaire.",
          "Le médecin ou la sage-femme peut évaluer vos symptômes et choisir un traitement compatible avec votre situation.",
          "Vous pouvez aussi consulter le site du **CRAT**, le **Centre de Référence sur les Agents Tératogènes**. En recherchant le nom de la substance active d’un médicament, vous trouverez des informations de référence sur son utilisation pendant la **grossesse** et l’**allaitement**."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Pendant un projet bébé ou une grossesse, évitez de prendre seule un médicament, y compris un produit sans ordonnance ou présenté comme naturel.",
          "Demandez conseil avant la prise, vérifiez la composition et ne modifiez jamais seule un traitement prescrit.",
          "En cas de prise accidentelle, notez précisément le produit et contactez un professionnel sans culpabiliser."
        ]
      }
    ],
    sources: [
      {
        label: "ANSM — Médicaments et grossesse : les bons réflexes",
        url: "https://ansm.sante.fr/dossiers-thematiques/medicaments-et-grossesse/medicaments-et-grossesse-les-bons-reflexes"
      },
      {
        label: "Assurance Maladie — Médicaments et grossesse",
        url: "https://www.ameli.fr/assure/sante/medicaments/medicaments-et-situation-de-vie/medicament-grossesse"
      },
      {
        label: "Assurance Maladie — Projet de grossesse : vaccinations et médicaments",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/consultation-et-mode-de-vie-en-vue-d-une-grossesse/projet-de-grossesse-vaccinations-et-medicaments"
      },
      {
        label: "Assurance Maladie — Bien utiliser les anti-inflammatoires non stéroïdiens",
        url: "https://www.ameli.fr/assure/sante/medicaments/utiliser-recycler-medicaments/utiliser-anti-inflammatoires"
      },
      {
        label: "Anses — Huiles essentielles : risques et précautions",
        url: "https://www.anses.fr/fr/content/huiles-essentielles-risques-et-precautions"
      },
      {
        label: "CRAT — Médicaments et grossesse",
        url: "https://www.lecrat.fr/medicament-grossesse/"
      }
    ]
  },
  {
    slug: "vitamine-b9-avant-grossesse-quand-comment-prendre",
    title: "Vitamine B9 avant la grossesse : quand et comment la prendre ?",
    description:
      "Comprendre le rôle de l’acide folique, le bon moment pour commencer et pourquoi la dose doit être adaptée par un professionnel.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Vaccins et médicaments",
    subcategorySlug: "vaccins-medicaments",
    readingTime: "5 min",
    publishedAt: "2026-06-13",
    updatedAt: "2026-06-13",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "La vitamine B9 est aussi appelée acide folique ou folates.",
          "Elle est recommandée dès le projet de grossesse, idéalement au moins 4 semaines avant la conception.",
          "Elle est généralement poursuivie jusqu’à 12 semaines d’aménorrhée.",
          "La dose habituelle est de 0,4 mg par jour, mais certaines situations nécessitent une dose différente prescrite par un professionnel."
        ],
        quote:
          "Comme le système nerveux de l’embryon se forme très tôt, la vitamine B9 doit idéalement être commencée avant le test de grossesse positif."
      },
      {
        title: "À quoi sert la vitamine B9 ?",
        paragraphs: [
          "La vitamine B9 participe à la fabrication du matériel génétique et à la multiplication des cellules.",
          "Au tout début de la grossesse, elle contribue au développement du système nerveux de l’embryon.",
          "Une supplémentation commencée avant la conception réduit le risque d’anomalies de fermeture du tube neural, comme le spina-bifida."
        ]
      },
      {
        title: "Les 3 repères les plus importants",
        paragraphs: [
          "Commencer tôt : idéalement au moins 4 semaines avant la conception, car le tube neural se ferme pendant les premières semaines de grossesse.",
          "La prendre chaque jour : la dose habituelle pour une personne sans facteur de risque particulier est généralement de 0,4 mg par jour.",
          "Demander conseil : certaines situations nécessitent une dose plus élevée ou une surveillance particulière."
        ],
        quote:
          "N’augmentez pas seule la dose : une prescription plus élevée répond à des situations médicales précises."
      },
      {
        title: "Quand faut-il commencer ?",
        paragraphs: [
          "Le meilleur moment est dès que le projet de grossesse devient concret, avant même l’arrêt de la contraception si les essais doivent commencer rapidement.",
          "Les recommandations françaises conseillent de débuter si possible au moins 4 semaines avant la conception.",
          "Si vous êtes déjà enceinte et n’avez pas commencé, parlez-en rapidement à un médecin ou à une sage-femme : il reste utile de la débuter."
        ]
      },
      {
        title: "Jusqu’à quand faut-il la prendre ?",
        paragraphs: [
          "La supplémentation est généralement poursuivie pendant le début de la grossesse, jusqu’à 12 semaines d’aménorrhée.",
          "Cette période couvre les premières étapes du développement embryonnaire.",
          "Le professionnel peut proposer une durée différente selon votre alimentation, vos antécédents, vos traitements ou une éventuelle carence."
        ]
      },
      {
        title: "Quelle dose prendre ?",
        paragraphs: [
          "Pour une personne sans facteur de risque particulier, la dose habituelle est généralement de 0,4 mg, soit 400 microgrammes, par jour.",
          "Une dose plus élevée, souvent 5 mg par jour, peut être prescrite dans certaines situations à risque.",
          "La dose doit être confirmée par un médecin ou une sage-femme afin d’éviter une prise inadaptée ou le cumul de plusieurs compléments."
        ]
      },
      {
        title: "Qui peut avoir besoin d’une dose plus élevée ?",
        paragraphs: [
          "Une dose plus élevée peut être envisagée après une précédente grossesse avec une anomalie de fermeture du tube neural.",
          "Elle peut également être prescrite avec certains traitements antiépileptiques, en cas de trouble de l’absorption digestive ou d’autres facteurs médicaux.",
          "Le surpoids important, le diabète ou certains antécédents familiaux peuvent aussi conduire le professionnel à adapter la prescription selon la situation."
        ]
      },
      {
        title: "Comment la prendre au quotidien ?",
        paragraphs: [
          "La vitamine B9 se prend généralement une fois par jour, à l’heure qui vous convient.",
          "Vous pouvez l’associer à une habitude régulière, comme le petit-déjeuner ou le brossage des dents, afin de limiter les oublis.",
          "Suivez la notice et l’ordonnance. En cas d’oubli, ne doublez pas automatiquement la dose sans conseil."
        ],
        bullets: [
          "Choisir un horaire facile à retenir.",
          "Utiliser une alarme ou un pilulier.",
          "Vérifier la dose inscrite sur la boîte.",
          "Signaler tous les autres compléments pris.",
          "Renouveler la prescription avant de manquer de comprimés."
        ]
      },
      {
        title: "L’alimentation peut-elle remplacer le complément ?",
        paragraphs: [
          "Les folates sont présents dans les légumes verts à feuilles, les légumes secs, certains fruits, les œufs et les céréales complètes.",
          "Une alimentation variée reste importante, mais elle ne remplace pas la supplémentation recommandée autour de la conception.",
          "La cuisson prolongée peut diminuer la teneur en folates de certains aliments, ce qui explique aussi l’intérêt du complément."
        ]
      },
      {
        title: "Peut-on choisir soi-même un complément prénatal ?",
        paragraphs: [
          "Mieux vaut demander conseil avant d’acheter un complément combinant plusieurs vitamines et minéraux.",
          "Certains produits contiennent déjà de l’acide folique, ce qui peut entraîner un cumul si vous prenez aussi un comprimé séparé.",
          "Les besoins en fer, vitamine D, iode ou autres micronutriments ne sont pas identiques pour tout le monde et ne justifient pas toujours une supplémentation."
        ]
      },
      {
        title: "Que faire en cas d’effets indésirables ou de doute ?",
        paragraphs: [
          "La vitamine B9 est généralement bien tolérée aux doses recommandées.",
          "En cas d’éruption, gonflement, difficulté à respirer ou autre réaction inhabituelle, demandez rapidement un avis médical.",
          "Si vous avez pris une dose différente de celle prévue ou plusieurs compléments contenant de la B9, montrez les boîtes à un pharmacien, un médecin ou une sage-femme."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "La vitamine B9 doit idéalement être commencée avant la conception, au moins 4 semaines avant, puis poursuivie jusqu’au début de la grossesse.",
          "La dose habituelle est de 0,4 mg par jour pour les personnes sans facteur de risque particulier, mais une dose plus élevée peut être prescrite dans certaines situations.",
          "Demandez conseil avant de choisir ou de cumuler des compléments alimentaires."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Projet de grossesse : vaccinations et médicaments",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/consultation-et-mode-de-vie-en-vue-d-une-grossesse/projet-de-grossesse-vaccinations-et-medicaments"
      },
      {
        label: "Assurance Maladie — Adapter son alimentation pendant la grossesse",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/grossesse/grossesse-en-bonne-sante/grossesse-alimentation/alimentation-grossesse"
      },
      {
        label: "Santé publique France — Je pense bébé, je pense vitamine B9",
        url: "https://www.santepubliquefrance.fr/nutrition-et-activite-physique/depliantflyer/je-pense-bebe-je-pense-b9-la-vitamine-b9-le-bon-reflexe-pour-bien-preparer-votre-grossesse"
      },
      {
        label: "Haute Autorité de santé — Acide folique 0,4 mg",
        url: "https://www.has-sante.fr/upload/docs/evamed/CT-16672_ACIDE_FOLIQUE_CCD_0%2C4mg_PIS_RI_Avis1_CT16672.pdf"
      },
      {
        label: "Anses — Tout savoir sur la vitamine B9",
        url: "https://www.anses.fr/fr/content/tout-savoir-sur-la-vitamine-b9"
      }
    ]
  },
  {
    slug: "medicaments-projet-bebe-lesquels-signaler",
    title: "Médicaments et projet bébé : lesquels faut-il signaler ?",
    description:
      "Les traitements, produits sans ordonnance et compléments à mentionner avant une grossesse, sans jamais arrêter seule un médicament prescrit.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Vaccins et médicaments",
    subcategorySlug: "vaccins-medicaments",
    readingTime: "6 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Signalez tous les médicaments, même ceux pris rarement ou sans ordonnance.",
          "Mentionnez aussi les crèmes, collyres, inhalateurs, plantes et compléments alimentaires.",
          "N’arrêtez jamais seule un traitement prescrit à cause d’un projet de grossesse.",
          "Un médecin, une sage-femme ou un pharmacien peut vérifier chaque produit et proposer une alternative si nécessaire."
        ],
        quote:
          "Préparer une grossesse ne signifie pas supprimer tous les traitements, mais vérifier lesquels doivent être poursuivis, adaptés ou remplacés."
      },
      {
        title: "Pourquoi faire le point avant la grossesse ?",
        paragraphs: [
          "Certains médicaments peuvent être utilisés pendant une grossesse, tandis que d’autres nécessitent une adaptation, un remplacement ou une surveillance particulière.",
          "À l’inverse, arrêter brutalement un traitement indispensable peut déstabiliser une maladie et présenter davantage de risques que sa poursuite.",
          "La consultation préconceptionnelle permet d’évaluer les bénéfices et les risques avant les essais, sans attendre un test de grossesse positif."
        ]
      },
      {
        title: "Les 3 catégories à signaler",
        paragraphs: [
          "Les traitements prescrits : médicaments pris tous les jours, traitements ponctuels, injections, inhalateurs, crèmes, pommades, collyres ou dispositifs médicamenteux.",
          "Les produits sans ordonnance : antidouleurs, médicaments contre le rhume, allergies, reflux, constipation, troubles du sommeil ou douleurs menstruelles.",
          "Les produits dits naturels : plantes, huiles essentielles, tisanes concentrées, compléments alimentaires, vitamines, minéraux et produits achetés sur internet."
        ],
        quote:
          "Prenez en photo les boîtes ou apportez une liste avec le nom, le dosage et la fréquence de chaque produit."
      },
      {
        title: "Quels traitements méritent une attention particulière ?",
        paragraphs: [
          "Les traitements de l’épilepsie, de l’hypertension, du diabète, des maladies auto-immunes, de l’acné sévère, des troubles psychiatriques ou de certains cancers nécessitent souvent une consultation avant les essais.",
          "Certains anticoagulants, médicaments hormonaux, traitements immunosuppresseurs ou médicaments agissant sur le système rénine-angiotensine peuvent aussi demander une adaptation.",
          "Cette liste n’est pas exhaustive : un médicament courant peut parfois nécessiter un avis, tandis qu’un traitement spécialisé peut être poursuivi sous surveillance."
        ]
      },
      {
        title: "Pourquoi ne faut-il pas arrêter seule un traitement ?",
        paragraphs: [
          "Une interruption brutale peut provoquer une rechute, une crise, une aggravation de la maladie ou un syndrome de sevrage.",
          "Pour certaines pathologies, une maladie mal contrôlée représente elle-même un risque pour la grossesse et la santé de la future mère.",
          "Le professionnel peut décider de poursuivre le traitement, d’en modifier la dose, de le remplacer progressivement ou de programmer une surveillance adaptée."
        ]
      },
      {
        title: "Les médicaments sans ordonnance comptent-ils aussi ?",
        paragraphs: [
          "Oui. L’absence d’ordonnance ne signifie pas qu’un produit est sans risque pendant un projet de grossesse ou une grossesse.",
          "Les anti-inflammatoires, certains médicaments contre le rhume, les décongestionnants ou les traitements combinés peuvent nécessiter des précautions.",
          "Avant toute prise, vérifiez avec un pharmacien ou un médecin, surtout si vos règles sont en retard ou si une grossesse est possible."
        ]
      },
      {
        title: "Et les crèmes, sprays, collyres ou inhalateurs ?",
        paragraphs: [
          "Ils doivent aussi être signalés. Même si leur passage dans le sang est souvent plus faible qu’avec un comprimé, leur innocuité dépend de la substance, de la dose, de la surface traitée et de la durée d’utilisation.",
          "Les crèmes contre l’acné, les douleurs, les infections ou les problèmes de peau peuvent contenir des substances nécessitant une évaluation.",
          "Les inhalateurs pour l’asthme ou les traitements oculaires ne doivent pas être arrêtés sans avis : une maladie mal contrôlée peut être plus dangereuse que le traitement."
        ]
      },
      {
        title: "Plantes et compléments : faut-il les mentionner ?",
        paragraphs: [
          "Oui. Les plantes, huiles essentielles et compléments peuvent avoir des effets pharmacologiques, interagir avec des médicaments ou contenir des doses élevées de certaines substances.",
          "Les produits « détox », « fertilité », amaigrissants, énergisants ou vendus en ligne doivent être particulièrement vérifiés.",
          "Ne cumulez pas plusieurs compléments contenant les mêmes vitamines ou minéraux sans conseil professionnel."
        ]
      },
      {
        title: "Comment préparer la consultation ?",
        paragraphs: [
          "Faites une liste de tout ce que vous utilisez actuellement, même de façon occasionnelle.",
          "Indiquez le nom exact, le dosage, la fréquence, la raison du traitement et le professionnel qui l’a prescrit.",
          "N’oubliez pas les produits utilisés seulement certains jours : migraine, règles douloureuses, allergies, insomnie, rhume ou douleurs musculaires."
        ],
        bullets: [
          "Médicaments prescrits et traitements occasionnels.",
          "Produits sans ordonnance.",
          "Crèmes, pommades, collyres et inhalateurs.",
          "Plantes, huiles essentielles et compléments.",
          "Produits achetés sur internet ou à l’étranger."
        ]
      },
      {
        title: "Qui peut vérifier les médicaments ?",
        paragraphs: [
          "Le médecin traitant, le spécialiste qui suit votre maladie, la sage-femme et le pharmacien peuvent participer à cette vérification.",
          "Pour une maladie chronique ou un traitement complexe, l’avis du spécialiste est souvent nécessaire avant toute modification.",
          "Le Centre de référence sur les agents tératogènes, ou CRAT, met également à disposition des professionnels et du public des informations sur les expositions pendant la grossesse."
        ]
      },
      {
        title: "Que faire si vous découvrez une grossesse sous traitement ?",
        paragraphs: [
          "N’arrêtez pas le médicament seule et ne modifiez pas la dose.",
          "Contactez rapidement le prescripteur, le médecin traitant, la sage-femme ou le pharmacien en indiquant le nom du produit et la période d’exposition.",
          "Une exposition ne signifie pas automatiquement qu’un problème surviendra. Le professionnel évaluera le risque réel et la conduite à tenir."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Avant une grossesse, signalez tous les médicaments et produits de santé, qu’ils soient prescrits, achetés sans ordonnance, appliqués sur la peau ou présentés comme naturels.",
          "Ne supprimez jamais seule un traitement important. L’objectif est d’adapter la prise en charge pour protéger à la fois votre santé et la future grossesse."
        ]
      }
    ],
    sources: [
      {
        label: "ANSM — Enceinte, les médicaments, c’est pas n’importe comment !",
        url: "https://ansm.sante.fr/page/enceinte-les-medicaments-cest-pas-nimporte-comment"
      },
      {
        label: "ANSM — Médicaments et grossesse : les bons réflexes",
        url: "https://ansm.sante.fr/dossiers-thematiques/medicaments-et-grossesse/medicaments-et-grossesse-les-bons-reflexes"
      },
      {
        label: "Assurance Maladie — Projet de grossesse : vaccinations et médicaments",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/consultation-et-mode-de-vie-en-vue-d-une-grossesse/projet-de-grossesse-vaccinations-et-medicaments"
      },
      {
        label: "Assurance Maladie — Consulter avant d’être enceinte : la consultation préconceptionnelle",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/consultation-et-mode-de-vie-en-vue-d-une-grossesse/avant-d-etre-enceinte-la-consultation-preconceptionnelle"
      },
      {
        label: "CRAT — Médicaments et grossesse",
        url: "https://www.lecrat.fr/"
      },
      {
        label: "Base de données publique des médicaments",
        url: "https://base-donnees-publique.medicaments.gouv.fr/"
      }
    ]
  },
  {
    slug: "quels-vaccins-verifier-avant-grossesse",
    title: "Quels vaccins vérifier avant une grossesse ?",
    description:
      "Les vaccins à contrôler avant un projet bébé, ceux à réaliser avant la grossesse et ceux qui pourront être proposés pendant la grossesse.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "Vaccins et médicaments",
    subcategorySlug: "vaccins-medicaments",
    readingTime: "6 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Faites vérifier votre carnet vaccinal dès le début du projet bébé.",
          "Le vaccin ROR et le vaccin contre la varicelle doivent être réalisés avant la grossesse s’ils sont indiqués.",
          "Une grossesse doit être évitée pendant le mois suivant un vaccin vivant comme le ROR ou celui contre la varicelle.",
          "La grippe, le Covid-19 et la coqueluche peuvent être vaccinés pendant la grossesse selon les recommandations."
        ],
        quote:
          "Le bon réflexe est de vérifier les vaccins avant les essais, car certains ne peuvent plus être administrés une fois la grossesse commencée."
      },
      {
        title: "Pourquoi vérifier ses vaccins avant une grossesse ?",
        paragraphs: [
          "Certaines infections peuvent être plus graves pendant la grossesse ou entraîner des complications pour le fœtus.",
          "Le rendez-vous préconceptionnel permet de vérifier le carnet vaccinal, de compléter les rappels nécessaires et d’identifier les vaccins à faire avant les essais.",
          "Il est particulièrement utile de vérifier l’immunité contre la rubéole et les antécédents de varicelle, car les vaccins correspondants sont contre-indiqués pendant la grossesse."
        ]
      },
      {
        title: "Les 3 vérifications prioritaires",
        paragraphs: [
          "Le vaccin ROR : il protège contre la rougeole, les oreillons et la rubéole. Une mise à jour peut être proposée si le schéma vaccinal n’est pas complet.",
          "La varicelle : si vous ne l’avez jamais eue et n’êtes pas vaccinée, une vaccination peut être proposée avant la grossesse.",
          "Les rappels habituels : diphtérie, tétanos, poliomyélite et coqueluche doivent être vérifiés selon le calendrier vaccinal."
        ],
        quote:
          "Apportez votre carnet de santé ou votre dossier médical. En cas de doute, un professionnel pourra vérifier les doses déjà reçues."
      },
      {
        title: "Pourquoi la rubéole est-elle importante ?",
        paragraphs: [
          "La rubéole est souvent bénigne chez l’adulte, mais une infection en début de grossesse peut entraîner de graves atteintes chez le fœtus.",
          "Le vaccin est administré sous la forme du vaccin ROR, qui contient des virus vivants atténués.",
          "Il ne doit pas être administré pendant la grossesse. Après une vaccination ROR, il est recommandé d’éviter une grossesse pendant un mois."
        ]
      },
      {
        title: "Que faire pour la varicelle ?",
        paragraphs: [
          "La varicelle peut être plus sévère chez l’adulte et présenter des risques pendant la grossesse.",
          "Si vous ne savez pas si vous avez eu la maladie, le professionnel peut rechercher vos antécédents et, si nécessaire, proposer une sérologie.",
          "Le vaccin contre la varicelle est contre-indiqué pendant la grossesse. Lorsqu’il est réalisé avant les essais, une contraception est nécessaire pendant le mois qui suit chaque dose."
        ]
      },
      {
        title: "Quels vaccins peuvent être proposés pendant la grossesse ?",
        paragraphs: [
          "La vaccination contre la grippe saisonnière est recommandée pendant la grossesse, quel que soit le trimestre, en période de circulation du virus.",
          "La vaccination contre le Covid-19 peut également être proposée pendant la grossesse selon les recommandations en vigueur.",
          "La vaccination contre la coqueluche est recommandée à chaque grossesse, à partir du deuxième trimestre, afin de transmettre des anticorps protecteurs au bébé.",
          "La vaccination contre le virus respiratoire syncytial, ou VRS, peut aussi être proposée pendant une période précise de la grossesse selon la saison et les recommandations."
        ]
      },
      {
        title: "Faut-il faire les vaccins contre la grippe ou le Covid-19 avant les essais ?",
        paragraphs: [
          "Ils peuvent être réalisés avant la grossesse si la vaccination est recommandée au moment du projet bébé.",
          "Il n’est toutefois pas nécessaire de retarder les essais uniquement pour ces vaccins, car ils peuvent être administrés pendant la grossesse.",
          "Le professionnel tiendra compte de la saison, de votre état de santé, de vos antécédents et des recommandations actualisées."
        ]
      },
      {
        title: "Et le vaccin contre la coqueluche ?",
        paragraphs: [
          "Les rappels contre la coqueluche sont vérifiés avant la grossesse dans le cadre du calendrier vaccinal habituel.",
          "Mais même si vous avez déjà été vaccinée auparavant, une dose est recommandée pendant chaque grossesse, généralement entre 20 et 36 semaines d’aménorrhée.",
          "Cette vaccination permet de transmettre des anticorps au bébé et de le protéger pendant ses premiers mois de vie."
        ]
      },
      {
        title: "Que faire si un vaccin vivant a été réalisé par erreur pendant la grossesse ?",
        paragraphs: [
          "Contactez le professionnel qui suit la grossesse afin de signaler la vaccination et de recevoir un avis adapté.",
          "Une vaccination ROR réalisée par inadvertance pendant la grossesse ne constitue pas, à elle seule, une indication d’interruption de grossesse.",
          "Ne prenez pas de décision seule et évitez de vous inquiéter à partir d’informations trouvées sans contexte médical."
        ]
      },
      {
        title: "Comment préparer le rendez-vous ?",
        paragraphs: [
          "Rassemblez votre carnet de santé, votre carnet de vaccination et les éventuels résultats de sérologie déjà réalisés.",
          "Notez les vaccins reçus récemment et les voyages prévus, car certaines destinations nécessitent des recommandations particulières.",
          "Signalez aussi vos allergies, vos traitements, une immunodépression ou une précédente réaction importante après une vaccination."
        ],
        bullets: [
          "Carnet de santé ou dossier vaccinal numérique.",
          "Résultats de sérologie rubéole ou varicelle.",
          "Date approximative des dernières injections.",
          "Liste des traitements et maladies chroniques.",
          "Projet de voyage avant ou pendant la grossesse."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Avant une grossesse, vérifiez surtout le ROR, la varicelle et les rappels du calendrier vaccinal.",
          "Les vaccins vivants comme le ROR et celui contre la varicelle doivent être réalisés avant la grossesse avec un délai d’un mois avant les essais.",
          "D’autres vaccins, notamment contre la grippe, le Covid-19 et la coqueluche, pourront être proposés pendant la grossesse selon les recommandations."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Projet de grossesse : vaccinations et médicaments",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/consultation-et-mode-de-vie-en-vue-d-une-grossesse/projet-de-grossesse-vaccinations-et-medicaments"
      },
      {
        label: "Haute Autorité de santé — Grossesse : les vaccins recommandés",
        url: "https://www.has-sante.fr/jcms/p_3590575/fr/grossesse-les-vaccins-recommandes"
      },
      {
        label: "Ministère de la Santé — Calendrier des vaccinations 2026",
        url: "https://sante.gouv.fr/prevention-en-sante/preserver-sa-sante/vaccination/calendrier-vaccinal"
      },
      {
        label: "Assurance Maladie — Prévenir la rubéole par la vaccination",
        url: "https://www.ameli.fr/assure/sante/themes/rubeole/mesures-hygiene-vaccination"
      },
      {
        label: "Assurance Maladie — Prévenir la varicelle",
        url: "https://www.ameli.fr/assure/sante/themes/varicelle/prevention"
      }
    ]
  },
  {
    slug: "comment-vivre-emotionnellement-parcours-pma",
    title: "Comment vivre émotionnellement un parcours de PMA ?",
    description:
      "Des repères concrets pour traverser l’attente, les traitements, les résultats et préserver son équilibre pendant un parcours de PMA.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "PMA et parcours de fertilité",
    subcategorySlug: "pma-parcours-fertilite",
    readingTime: "6 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Un parcours de PMA peut faire alterner espoir, fatigue, peur et déception.",
          "Vous n’avez pas à rester forte en permanence ni à tout gérer seule.",
          "Préserver le couple, le quotidien et des moments sans PMA peut aider à garder un équilibre.",
          "Un soutien psychologique peut être demandé à tout moment, même avant de se sentir dépassée."
        ],
        quote:
          "Il n’existe pas une bonne manière de vivre la PMA : vos émotions peuvent changer d’un jour à l’autre."
      },
      {
        title: "Pourquoi la PMA peut-elle être émotionnellement difficile ?",
        paragraphs: [
          "Le parcours peut imposer des rendez-vous fréquents, des traitements, des résultats incertains et des décisions importantes dans un calendrier parfois difficile à anticiper.",
          "L’espoir peut être très fort au début d’une tentative, puis laisser place à l’inquiétude pendant l’attente ou à une grande déception en cas d’échec.",
          "La fatigue physique, les contraintes professionnelles, les remarques de l’entourage et le sentiment de perdre le contrôle peuvent également peser sur le moral."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Nommer ce que vous ressentez : tristesse, colère, jalousie, peur ou fatigue sont des réactions possibles et ne font pas de vous une mauvaise personne.",
          "Choisir ce que vous souhaitez partager : vous pouvez informer certaines personnes, garder une partie du parcours privée ou demander à un proche de transmettre les nouvelles.",
          "Préserver des espaces sans PMA : activités, sorties, projets et moments de couple peuvent continuer à exister en parallèle du parcours."
        ],
        quote:
          "Vous avez le droit de poser des limites aux questions, aux conseils et aux annonces de grossesse qui deviennent trop difficiles à recevoir."
      },
      {
        title: "Comment vivre l’attente entre les étapes ?",
        paragraphs: [
          "Les périodes d’attente peuvent donner l’impression que le temps s’arrête. Prévoir quelques repères concrets aide parfois à traverser ces jours plus sereinement.",
          "Essayez de limiter les recherches répétées de symptômes ou de témoignages si elles augmentent votre anxiété.",
          "Vous pouvez préparer une activité pour les jours les plus difficiles, noter vos questions pour le prochain rendez-vous et décider à l’avance quand consulter les résultats."
        ]
      },
      {
        title: "Comment préserver le couple ?",
        paragraphs: [
          "Les deux partenaires peuvent vivre le parcours de manière différente. L’un peut avoir besoin d’en parler souvent, tandis que l’autre préfère prendre du recul.",
          "Prévoyez des moments pour parler de la PMA, mais aussi des moments où elle n’est pas le sujet principal.",
          "Répartissez autant que possible les tâches : rendez-vous, documents, traitements, appels et soutien émotionnel ne doivent pas reposer sur une seule personne."
        ]
      },
      {
        title: "Et si le désir ou la sexualité changent ?",
        paragraphs: [
          "Les traitements, la fatigue, les rapports programmés et la pression de résultat peuvent modifier le désir ou rendre la sexualité moins spontanée.",
          "Il peut être utile de maintenir des gestes d’affection et des moments d’intimité qui ne sont pas centrés sur la conception.",
          "En cas de douleur, de blocage ou de détresse persistante, un professionnel de santé, un psychologue ou un sexologue peut aider."
        ]
      },
      {
        title: "Comment gérer les annonces de grossesse et les remarques ?",
        paragraphs: [
          "Les grossesses de proches peuvent provoquer à la fois de la joie pour eux et de la tristesse pour soi. Ces deux émotions peuvent coexister.",
          "Vous pouvez refuser une invitation, quitter une conversation, masquer temporairement certains contenus ou demander à être prévenue en privé.",
          "Préparez une phrase simple pour répondre aux questions intrusives, par exemple : « C’est un sujet personnel, je préfère ne pas en parler pour le moment. »"
        ]
      },
      {
        title: "Que faire après un résultat négatif ?",
        paragraphs: [
          "Un résultat négatif peut être vécu comme une perte, même lorsqu’il n’y a pas eu de grossesse confirmée.",
          "Accordez-vous du temps avant de décider immédiatement de la suite. Il est possible de demander un rendez-vous pour comprendre la tentative et poser vos questions.",
          "Le choix de recommencer, de faire une pause ou d’arrêter appartient à chaque personne ou couple. Il peut évoluer avec le temps."
        ]
      },
      {
        title: "Faut-il parler de la PMA au travail ?",
        paragraphs: [
          "Vous n’êtes pas obligée de raconter tout votre parcours à vos collègues. Vous pouvez simplement expliquer que vous avez des rendez-vous médicaux.",
          "Choisir une personne de confiance ou prévenir uniquement le service des ressources humaines peut faciliter l’organisation.",
          "Les personnes engagées dans un parcours d’AMP bénéficient d’autorisations d’absence pour les actes médicaux nécessaires, dans les conditions prévues par le droit du travail."
        ]
      },
      {
        title: "Quand demander un soutien psychologique ?",
        paragraphs: [
          "Vous pouvez demander de l’aide dès que vous en ressentez le besoin, sans attendre une crise ou plusieurs échecs.",
          "Un soutien est particulièrement utile si l’anxiété, la tristesse, les troubles du sommeil, l’isolement ou les conflits deviennent envahissants.",
          "Le centre d’AMP peut parfois proposer un psychologue ou vous orienter. Vous pouvez aussi consulter un professionnel extérieur ou utiliser le dispositif Mon soutien psy."
        ],
        bullets: [
          "Vous pleurez souvent ou vous sentez constamment tendue.",
          "Le parcours prend toute la place dans vos pensées.",
          "Vous vous isolez de vos proches.",
          "Le couple est en conflit permanent.",
          "Vous n’arrivez plus à travailler, dormir ou manger normalement.",
          "Vous avez des pensées très négatives ou vous vous sentez en danger."
        ]
      },
      {
        title: "Comment prendre soin de soi sans en faire une obligation ?",
        paragraphs: [
          "Prendre soin de soi ne signifie pas suivre une liste parfaite de conseils. Choisissez une ou deux choses réellement apaisantes.",
          "Une marche, un repas simple, une soirée sans téléphone, une activité créative ou un moment avec une personne de confiance peuvent suffire.",
          "Évitez de culpabiliser si vous n’arrivez pas à méditer, faire du sport ou rester positive. Votre réaction émotionnelle ne détermine pas le résultat du traitement."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "La PMA peut être éprouvante sur les plans physique, émotionnel, relationnel et professionnel. Il est normal que votre capacité à y faire face varie au fil du parcours.",
          "Préserver des espaces en dehors de la PMA, poser des limites et demander de l’aide tôt peut rendre le parcours plus supportable.",
          "Vous n’avez pas à traverser cette période seule, ni à attendre d’aller très mal pour parler à un professionnel."
        ]
      }
    ],
    sources: [
      {
        label: "Agence de la biomédecine — Guide de l’assistance médicale à la procréation",
        url: "https://www.agence-biomedecine.fr/IMG/pdf/bd_biom24-5_maj_broch_patients_amp_a5_40p_pap.pdf"
      },
      {
        label: "Agence de la biomédecine — Les différentes étapes des parcours d’AMP",
        url: "https://www.agence-biomedecine.fr/fr/don-de-gametes-et-assistance-medicale-a-la-procreation/quelles-sont-les-differentes-etapes-des-parcours-d-assistance-medicale-a-la-procreation"
      },
      {
        label: "Assurance Maladie — Assistance médicale à la procréation",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/procreation-medicalement-assistee-pma-amp"
      },
      {
        label: "Assurance Maladie — Mon soutien psy",
        url: "https://www.ameli.fr/assure/remboursements/rembourse/seances-psychologue-mon-soutien-psy"
      },
      {
        label: "Service-Public.fr — Autorisations d’absence pour les actes médicaux d’AMP",
        url: "https://www.service-public.fr/particuliers/vosdroits/F2330"
      }
    ]
  },
  {
    slug: "comment-se-deroule-fiv-etape-par-etape",
    title: "Comment se déroule une FIV, étape par étape ?",
    description:
      "De la stimulation ovarienne au test de grossesse, comprendre les principales étapes d’une fécondation in vitro.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "PMA et parcours de fertilité",
    subcategorySlug: "pma-parcours-fertilite",
    readingTime: "7 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Une FIV commence généralement par une stimulation des ovaires avec des injections hormonales.",
          "Les follicules sont surveillés par échographies et prises de sang avant la ponction des ovocytes.",
          "Les ovocytes et les spermatozoïdes sont mis en fécondation au laboratoire, puis les embryons sont observés pendant plusieurs jours.",
          "Un embryon peut ensuite être transféré dans l’utérus. Le test de grossesse est généralement réalisé environ deux semaines plus tard."
        ],
        quote:
          "Le calendrier peut changer en fonction de la réponse des ovaires et du développement des embryons : chaque tentative est adaptée au fur et à mesure."
      },
      {
        title: "Avant de commencer : le bilan et la préparation",
        paragraphs: [
          "Avant une FIV, l’équipe reprend les antécédents médicaux et les examens déjà réalisés afin de confirmer l’indication et de choisir le protocole.",
          "Des prises de sang, une échographie ovarienne, un spermogramme et d’autres examens peuvent être demandés selon la situation.",
          "Le centre explique les traitements, les risques, les chances de réussite, les consentements nécessaires et l’organisation pratique de la tentative."
        ]
      },
      {
        title: "Les 3 grandes phases d’une FIV",
        paragraphs: [
          "La stimulation et la surveillance : des injections hormonales font mûrir plusieurs follicules, contrôlés par échographies et dosages sanguins.",
          "La ponction et la fécondation : les ovocytes sont prélevés, puis mis en contact avec les spermatozoïdes en FIV classique ou injectés en ICSI.",
          "La culture et le transfert : les embryons se développent au laboratoire pendant quelques jours avant le transfert d’un embryon ou une congélation."
        ],
        quote:
          "Une tentative de FIV comprend plusieurs étapes, mais toutes ne se déroulent pas forcément au même rythme ni jusqu’au transfert."
      },
      {
        title: "Étape 1 : la stimulation ovarienne",
        paragraphs: [
          "La stimulation vise à faire mûrir plusieurs follicules au lieu d’un seul. Elle repose généralement sur des injections hormonales quotidiennes.",
          "Selon le protocole, un autre traitement peut être ajouté pour éviter une ovulation trop précoce.",
          "La stimulation dure souvent une dizaine de jours, mais elle peut être plus courte ou plus longue selon la réponse des ovaires."
        ]
      },
      {
        title: "Étape 2 : la surveillance du traitement",
        paragraphs: [
          "Des échographies vaginales mesurent le nombre et la taille des follicules.",
          "Des prises de sang peuvent suivre les taux hormonaux et aider à ajuster les doses.",
          "Les rendez-vous deviennent parfois rapprochés en fin de stimulation, car la date de ponction dépend de la maturation des follicules."
        ]
      },
      {
        title: "Étape 3 : le déclenchement de l’ovulation",
        paragraphs: [
          "Lorsque les follicules sont prêts, une injection déclenche la maturation finale des ovocytes.",
          "Cette injection doit être réalisée à l’heure indiquée, car la ponction est programmée environ 34 à 36 heures plus tard selon le protocole.",
          "Le centre donne des consignes précises : en cas d’oubli ou de retard, il faut le prévenir rapidement."
        ]
      },
      {
        title: "Étape 4 : la ponction des ovocytes",
        paragraphs: [
          "La ponction est réalisée par voie vaginale sous contrôle échographique, généralement lors d’une hospitalisation de jour.",
          "Une aiguille fine traverse la paroi vaginale pour aspirer le liquide des follicules et récupérer les ovocytes.",
          "L’anesthésie peut être locale, générale ou associée à une sédation selon le centre et la situation.",
          "Le geste dure souvent une dizaine à une vingtaine de minutes, puis une surveillance est prévue avant le retour à domicile."
        ]
      },
      {
        title: "Étape 5 : le recueil et la préparation des spermatozoïdes",
        paragraphs: [
          "Le sperme du partenaire est généralement recueilli le jour de la ponction, sauf si un échantillon congelé ou un don est utilisé.",
          "Le laboratoire prépare l’échantillon afin de sélectionner les spermatozoïdes les plus mobiles.",
          "En cas de difficulté de recueil ou d’antécédent particulier, une congélation préalable peut être discutée avec l’équipe."
        ]
      },
      {
        title: "Étape 6 : la fécondation au laboratoire",
        paragraphs: [
          "En FIV classique, les ovocytes sont placés avec plusieurs spermatozoïdes afin que la fécondation se produise au laboratoire.",
          "En ICSI, un spermatozoïde est injecté directement dans chaque ovocyte mature.",
          "Le lendemain, les biologistes vérifient quels ovocytes ont été fécondés. Tous les ovocytes recueillis ne sont pas forcément matures ou fécondés."
        ]
      },
      {
        title: "Étape 7 : la culture des embryons",
        paragraphs: [
          "Les embryons sont conservés dans des incubateurs et observés pendant plusieurs jours.",
          "Le transfert peut être envisagé entre le deuxième et le sixième jour de développement, selon le nombre et l’évolution des embryons ainsi que la stratégie du centre.",
          "Certains embryons peuvent cesser de se développer. Les embryons de qualité suffisante non transférés peuvent être congelés pour une utilisation ultérieure."
        ]
      },
      {
        title: "Étape 8 : le transfert embryonnaire",
        paragraphs: [
          "Le transfert consiste à déposer un embryon dans l’utérus à l’aide d’un cathéter fin introduit par le col.",
          "Le geste est généralement rapide, sans anesthésie, et ressemble à un examen gynécologique.",
          "Le transfert d’un seul embryon est souvent privilégié pour limiter le risque de grossesse multiple.",
          "Dans certaines situations, aucun transfert frais n’est réalisé et tous les embryons sont congelés pour un transfert ultérieur."
        ]
      },
      {
        title: "Étape 9 : l’attente et le test de grossesse",
        paragraphs: [
          "Un traitement par progestérone peut être prescrit après la ponction ou le transfert.",
          "Le test de grossesse est réalisé par prise de sang à la date indiquée par le centre, généralement environ 12 à 14 jours après le transfert.",
          "Les symptômes ressentis pendant l’attente ne permettent pas de savoir si la tentative a réussi, car ils peuvent aussi être liés aux hormones.",
          "N’arrêtez pas le traitement avant les consignes du centre, même en cas de petit saignement."
        ]
      },
      {
        title: "Pourquoi une tentative peut-elle être interrompue ?",
        paragraphs: [
          "Le cycle peut être annulé si les ovaires répondent trop peu ou trop fortement à la stimulation.",
          "Il peut arriver qu’aucun ovocyte ne soit recueilli, qu’aucun ovocyte ne soit fécondé ou qu’aucun embryon ne poursuive son développement.",
          "Le transfert peut aussi être reporté pour protéger la santé de la patiente, notamment en cas de risque d’hyperstimulation, ou si l’endomètre n’est pas favorable.",
          "L’équipe analyse alors la tentative afin d’expliquer la situation et de discuter d’un éventuel ajustement."
        ]
      },
      {
        title: "Quels effets secondaires doivent alerter ?",
        paragraphs: [
          "Une gêne abdominale, des ballonnements, de la fatigue ou de légers saignements peuvent survenir après la stimulation ou la ponction.",
          "Contactez rapidement le centre en cas de douleurs importantes, ventre très gonflé, essoufflement, vomissements, prise de poids rapide, saignements abondants, fièvre ou malaise.",
          "Ces symptômes peuvent notamment évoquer une complication de la ponction ou un syndrome d’hyperstimulation ovarienne."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Une FIV se déroule en plusieurs étapes : bilan, stimulation, surveillance, déclenchement, ponction, fécondation, culture embryonnaire, transfert puis test de grossesse.",
          "Le parcours est ajusté en fonction de la réponse des ovaires et des embryons. Une tentative peut ne pas aller jusqu’au transfert sans que cela signifie que tout le parcours est terminé.",
          "Gardez les coordonnées du centre et suivez ses consignes, car les horaires des injections et des rendez-vous sont importants."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Techniques d’AMP : insémination artificielle, FIV, accueil d’embryon",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/procreation-medicalement-assistee-pma-amp/techniques-procreation-medicalement-assistee-pma"
      },
      {
        label: "Agence de la biomédecine — Quelles sont les différentes techniques d’AMP ?",
        url: "https://www.agence-biomedecine.fr/fr/don-de-gametes-et-assistance-medicale-a-la-procreation/quelles-sont-les-differentes-techniques-d-amp-pour-les-personnes-qui-ont-un-projet-parental"
      },
      {
        label: "Agence de la biomédecine — Guide de l’assistance médicale à la procréation",
        url: "https://www.agence-biomedecine.fr/IMG/pdf/bd_biom24-5_maj_broch_patients_amp_a5_40p_pap.pdf"
      },
      {
        label: "Agence de la biomédecine — Les différentes étapes des parcours d’AMP",
        url: "https://www.agence-biomedecine.fr/fr/don-de-gametes-et-assistance-medicale-a-la-procreation/quelles-sont-les-differentes-etapes-des-parcours-d-assistance-medicale-a-la-procreation"
      },
      {
        label: "Assurance Maladie — Prise en charge de l’assistance médicale à la procréation",
        url: "https://www.ameli.fr/assure/remboursements/rembourse/assistance-medicale-la-procreation-amp/prise-en-charge-de-l-assistance-medicale-la-procreation-amp"
      }
    ]
  },
  {
    slug: "fiv-classique-icsi-quelles-differences",
    title: "FIV classique et ICSI : quelles différences ?",
    description:
      "Comprendre simplement ce qui change entre une FIV classique et une ICSI, dans quelles situations elles sont proposées et comment se déroule le laboratoire.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "PMA et parcours de fertilité",
    subcategorySlug: "pma-parcours-fertilite",
    readingTime: "6 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "La FIV classique et l’ICSI suivent les mêmes grandes étapes jusqu’à la ponction des ovocytes.",
          "En FIV classique, les ovocytes sont mis en présence de nombreux spermatozoïdes au laboratoire.",
          "En ICSI, un seul spermatozoïde est injecté directement dans chaque ovocyte mature.",
          "L’ICSI est surtout proposée lorsque les spermatozoïdes sont peu nombreux, peu mobiles ou après un échec de fécondation."
        ],
        quote:
          "L’ICSI n’est pas une FIV « plus forte » : c’est une autre manière de réaliser l’étape de fécondation au laboratoire."
      },
      {
        title: "Qu’ont en commun la FIV classique et l’ICSI ?",
        paragraphs: [
          "La FIV (fécondation in vitro) consiste à mettre les ovocytes et les spermatozoïdes en contact au laboratoire. L’ICSI (injection intracytoplasmique de spermatozoïde) consiste à injecter directement un spermatozoïde dans un ovocyte mature.",
          "Dans les deux cas, le parcours commence généralement par une stimulation ovarienne afin de faire mûrir plusieurs follicules.",
          "Les ovocytes sont ensuite prélevés lors d’une ponction, tandis qu’un échantillon de sperme est recueilli ou décongelé.",
          "Après la fécondation au laboratoire, les embryons sont observés pendant quelques jours. Un embryon peut ensuite être transféré dans l’utérus et les autres embryons de qualité suffisante peuvent être congelés."
        ]
      },
      {
        title: "Les 3 différences principales",
        paragraphs: [
          "La rencontre entre les gamètes : en FIV classique, chaque ovocyte est placé avec de nombreux spermatozoïdes. En ICSI, le biologiste injecte un spermatozoïde dans l’ovocyte.",
          "Les situations concernées : la FIV classique est possible lorsque les paramètres spermatiques permettent une fécondation spontanée au laboratoire. L’ICSI est souvent choisie lorsqu’un facteur masculin important est présent.",
          "Le geste au laboratoire : l’ICSI nécessite une manipulation supplémentaire de chaque ovocyte mature, mais la suite du développement embryonnaire et le transfert sont comparables."
        ],
        quote:
          "La différence se situe principalement le jour de la fécondation ; la stimulation, la ponction et le transfert restent similaires."
      },
      {
        title: "Comment se déroule une FIV classique ?",
        paragraphs: [
          "Après la ponction, les ovocytes sont placés dans un milieu de culture avec une quantité préparée de spermatozoïdes.",
          "Les spermatozoïdes doivent ensuite atteindre et pénétrer l’ovocyte par eux-mêmes, comme lors d’une fécondation naturelle, mais au laboratoire.",
          "Le lendemain, l’équipe vérifie quels ovocytes ont été fécondés. Les embryons obtenus poursuivent ensuite leur développement en incubateur."
        ]
      },
      {
        title: "Comment se déroule une ICSI ?",
        paragraphs: [
          "Le biologiste sélectionne un spermatozoïde parmi ceux disponibles, puis l’immobilise.",
          "À l’aide d’une micropipette, il injecte ce spermatozoïde directement dans le cytoplasme d’un ovocyte mature.",
          "Le lendemain, l’équipe vérifie la fécondation. Comme en FIV classique, les embryons obtenus sont ensuite cultivés pendant plusieurs jours avant un éventuel transfert ou une congélation."
        ]
      },
      {
        title: "Dans quelles situations l’ICSI est-elle proposée ?",
        paragraphs: [
          "L’ICSI peut être proposée lorsque le spermogramme montre un nombre très faible de spermatozoïdes, une mobilité réduite ou des anomalies importantes de leur forme.",
          "Elle peut également être utilisée lorsque les spermatozoïdes ont été prélevés directement dans le testicule ou l’épididyme, ou après un échec ou un très faible taux de fécondation lors d’une précédente FIV classique.",
          "Le choix dépend aussi de l’histoire du couple, du nombre d’ovocytes disponibles, de leur maturité et des pratiques du centre."
        ]
      },
      {
        title: "L’ICSI augmente-t-elle toujours les chances de grossesse ?",
        paragraphs: [
          "Non. L’ICSI peut augmenter les chances d’obtenir une fécondation lorsque le problème vient surtout des spermatozoïdes, mais elle ne garantit ni la formation d’un embryon ni une grossesse.",
          "Lorsque le sperme ne présente pas d’anomalie importante, l’ICSI n’a pas démontré un avantage systématique sur la FIV classique pour toutes les personnes.",
          "La réussite dépend surtout de l’âge, de la qualité des ovocytes et des spermatozoïdes, de la cause de l’infertilité et du développement des embryons."
        ]
      },
      {
        title: "Comment le spermatozoïde est-il choisi en ICSI ?",
        paragraphs: [
          "Le biologiste observe les spermatozoïdes au microscope et en sélectionne un qui présente une mobilité et une apparence compatibles avec l’injection.",
          "Cette sélection reste principalement visuelle et ne permet pas de vérifier l’ensemble du patrimoine génétique du spermatozoïde.",
          "L’ICSI facilite l’entrée du spermatozoïde dans l’ovocyte, mais elle ne corrige pas toutes les anomalies possibles des gamètes."
        ]
      },
      {
        title: "Quels sont les risques et les limites ?",
        paragraphs: [
          "La stimulation ovarienne, la ponction, le transfert et les risques liés à une grossesse multiple sont comparables entre la FIV classique et l’ICSI.",
          "Avec l’ICSI, certains ovocytes peuvent être endommagés lors de la micro-injection ou ne pas être fécondés malgré le geste.",
          "Les équipes évaluent les antécédents et peuvent proposer un conseil génétique lorsqu’une anomalie sévère du sperme ou une cause génétique est suspectée."
        ]
      },
      {
        title: "Peut-on choisir soi-même entre FIV et ICSI ?",
        paragraphs: [
          "La décision est prise avec l’équipe médicale et biologique à partir du bilan de fertilité et des précédentes tentatives.",
          "Le centre doit expliquer pourquoi une technique est recommandée, ses bénéfices attendus, ses limites et les alternatives possibles.",
          "Dans certains cas, une partie des ovocytes peut être proposée en FIV classique et une autre en ICSI, mais cette stratégie dépend du centre et de la situation."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "La FIV classique laisse les spermatozoïdes féconder les ovocytes dans une boîte de culture, tandis que l’ICSI injecte un spermatozoïde directement dans chaque ovocyte mature.",
          "L’ICSI est surtout utile en présence d’un facteur masculin important ou après un échec de fécondation. Elle ne garantit pas davantage une grossesse dans toutes les situations.",
          "Le choix doit être expliqué et personnalisé par l’équipe d’AMP en fonction du bilan et de l’histoire du parcours."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Techniques d’AMP : insémination artificielle, FIV, accueil d’embryon",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/procreation-medicalement-assistee-pma-amp/techniques-procreation-medicalement-assistee-pma"
      },
      {
        label: "Agence de la biomédecine — Quelles sont les différentes techniques d’AMP ?",
        url: "https://www.agence-biomedecine.fr/fr/don-de-gametes-et-assistance-medicale-a-la-procreation/quelles-sont-les-differentes-techniques-d-amp-pour-les-personnes-qui-ont-un-projet-parental"
      },
      {
        label: "Agence de la biomédecine — Guide de l’assistance médicale à la procréation",
        url: "https://www.agence-biomedecine.fr/IMG/pdf/bd_biom24-5_maj_broch_patients_amp_a5_40p_pap.pdf"
      },
      {
        label: "Agence de la biomédecine — Information sur la santé des personnes nées après une AMP",
        url: "https://www.agence-biomedecine.fr/IMG/pdf/bd_biom24-2_maj_brochure_info_amp_patients.pdf"
      },
      {
        label: "Agence de la biomédecine — Évaluation des résultats des centres et laboratoires",
        url: "https://www.agence-biomedecine.fr/fr/evaluation-des-resultats-des-centres-et-laboratoires"
      }
    ]
  },
  {
    slug: "insemination-intra-uterine-iiu-comment-ca-se-passe",
    title: "Insémination intra-utérine (IIU) : comment ça se passe ?",
    description:
      "Comprendre les étapes d’une insémination, de la stimulation de l’ovulation au test de grossesse, ainsi que ses limites et ses risques.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "PMA et parcours de fertilité",
    subcategorySlug: "pma-parcours-fertilite",
    readingTime: "6 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "L’IIU consiste à déposer des spermatozoïdes préparés directement dans l’utérus au moment proche de l’ovulation.",
          "Elle peut être réalisée avec les spermatozoïdes du partenaire ou d’un donneur.",
          "Le cycle est souvent surveillé par échographies et prises de sang, avec ou sans stimulation hormonale.",
          "La procédure est courte, généralement sans anesthésie, puis un test de grossesse est réalisé environ deux semaines plus tard."
        ],
        quote:
          "L’insémination est l’une des techniques d’AMP les plus simples, mais elle ne convient pas à toutes les situations."
      },
      {
        title: "Qu’est-ce qu’une insémination intra-utérine ?",
        paragraphs: [
          "L’insémination intra-utérine, ou IIU, est une technique d’assistance médicale à la procréation. Elle consiste à introduire dans l’utérus des spermatozoïdes sélectionnés et préparés au laboratoire.",
          "L’objectif est de rapprocher les spermatozoïdes de l’ovocyte au moment de l’ovulation afin de faciliter la rencontre entre les deux.",
          "La fécondation a ensuite lieu naturellement dans les trompes : contrairement à une FIV, l’ovocyte n’est pas prélevé et la fécondation ne se déroule pas au laboratoire."
        ]
      },
      {
        title: "Les 3 grandes étapes du parcours",
        paragraphs: [
          "La préparation du cycle : le centre suit la croissance des follicules par échographies et parfois par prises de sang. Une stimulation hormonale peut être prescrite.",
          "Le déclenchement et la préparation du sperme : lorsque le follicule est prêt, l’ovulation peut être déclenchée. Le jour prévu, le sperme est recueilli ou décongelé puis préparé au laboratoire.",
          "L’insémination : les spermatozoïdes les plus mobiles sont déposés dans l’utérus à l’aide d’un cathéter fin. Le geste ne dure que quelques minutes."
        ],
        quote:
          "Le calendrier dépend de la réponse des ovaires : les dates peuvent donc être ajustées au dernier moment."
      },
      {
        title: "Dans quelles situations l’IIU peut-elle être proposée ?",
        paragraphs: [
          "L’IIU peut être proposée lorsque l’infertilité reste inexpliquée, en cas de trouble modéré du sperme, de difficulté à avoir des rapports au moment fertile ou de certains troubles de l’ovulation.",
          "Elle est également utilisée dans les projets nécessitant un don de spermatozoïdes, notamment pour les couples de femmes et les femmes non mariées.",
          "Elle n’est généralement pas adaptée si les deux trompes sont bouchées, si le nombre de spermatozoïdes mobiles est très faible ou si la situation nécessite directement une FIV ou une ICSI."
        ]
      },
      {
        title: "Faut-il toujours stimuler l’ovulation ?",
        paragraphs: [
          "Non. Une IIU peut parfois être réalisée sur un cycle naturel, surtout si l’ovulation est régulière.",
          "Dans de nombreux parcours, une stimulation légère est proposée pour favoriser le développement d’un ou de quelques follicules et mieux programmer l’ovulation.",
          "Le traitement nécessite une surveillance étroite afin d’éviter une réponse trop importante et de limiter le risque de grossesse multiple."
        ]
      },
      {
        title: "Comment se passe la surveillance du cycle ?",
        paragraphs: [
          "Des échographies vaginales permettent de mesurer la taille des follicules et l’épaisseur de l’endomètre.",
          "Des prises de sang peuvent compléter cette surveillance afin d’évaluer les hormones et de déterminer le meilleur moment pour l’insémination.",
          "Lorsque les conditions sont réunies, une injection peut déclencher l’ovulation. L’insémination est alors programmée dans les heures qui suivent selon le protocole du centre."
        ]
      },
      {
        title: "Comment le sperme est-il préparé ?",
        paragraphs: [
          "Avec le sperme du partenaire, le recueil a généralement lieu le jour de l’insémination au centre ou selon les consignes données.",
          "Le laboratoire prépare ensuite l’échantillon afin de sélectionner les spermatozoïdes les plus mobiles et d’éliminer le liquide séminal.",
          "Avec un don de spermatozoïdes, une paillette conservée est décongelée puis préparée avant l’insémination."
        ]
      },
      {
        title: "Comment se déroule le geste ?",
        paragraphs: [
          "La patiente est installée comme pour un examen gynécologique. Le professionnel place un spéculum puis introduit un cathéter très fin à travers le col de l’utérus.",
          "La préparation de spermatozoïdes est déposée doucement dans l’utérus. La procédure dure généralement quelques minutes et ne nécessite pas d’anesthésie.",
          "Une gêne ou de légères crampes peuvent survenir, mais la plupart des personnes reprennent leurs activités habituelles juste après."
        ]
      },
      {
        title: "Que se passe-t-il après l’insémination ?",
        paragraphs: [
          "Il n’est généralement pas nécessaire de rester allongée longtemps ni de modifier fortement ses activités après l’IIU.",
          "Un traitement par progestérone peut parfois être prescrit pour soutenir la phase qui suit l’ovulation.",
          "Le test de grossesse est habituellement programmé environ 14 jours après l’insémination. Le faire trop tôt peut donner un résultat trompeur, surtout après une injection de déclenchement."
        ]
      },
      {
        title: "Quelles sont les chances de réussite ?",
        paragraphs: [
          "Les chances varient selon l’âge, la cause de l’infertilité, la qualité du sperme, la réponse à la stimulation et le recours ou non à un don.",
          "Les résultats doivent être interprétés par tentative et non comme une garantie individuelle. Plusieurs cycles peuvent être nécessaires.",
          "Selon les données nationales de l’Agence de la biomédecine, le taux d’accouchement après insémination est inférieur à celui observé après certaines FIV, mais la technique est aussi plus simple et moins invasive."
        ]
      },
      {
        title: "Quels sont les risques et les limites ?",
        paragraphs: [
          "L’IIU elle-même comporte peu de risques. Une légère douleur ou un petit saignement peuvent apparaître après le geste.",
          "Lorsque le cycle est stimulé, le principal risque est la grossesse multiple. Le centre peut annuler le cycle si trop de follicules se développent.",
          "Une hyperstimulation ovarienne est possible mais reste moins fréquente avec les protocoles légers d’insémination qu’avec certaines stimulations de FIV.",
          "L’insémination ne contourne pas une obstruction des trompes et ne corrige pas toutes les causes d’infertilité."
        ]
      },
      {
        title: "Combien de tentatives peut-on réaliser ?",
        paragraphs: [
          "Le nombre de tentatives dépend de l’âge, de la situation médicale, de la réponse aux traitements et des résultats précédents.",
          "En France, l’Assurance Maladie peut prendre en charge jusqu’à 6 inséminations pour obtenir une grossesse, à raison d’une seule insémination par cycle.",
          "L’équipe peut proposer de passer à une FIV avant d’avoir réalisé les 6 tentatives si les chances de réussite de l’IIU deviennent trop faibles."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "L’IIU est une technique d’AMP dans laquelle des spermatozoïdes préparés sont déposés dans l’utérus au moment proche de l’ovulation.",
          "Le parcours comprend une surveillance du cycle, parfois une stimulation, la préparation du sperme, l’insémination puis une attente d’environ deux semaines avant le test de grossesse.",
          "La technique est simple et peu invasive, mais ses indications, ses chances de réussite et le nombre de tentatives doivent être discutés avec l’équipe médicale."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Techniques d’AMP : insémination artificielle, FIV, accueil d’embryon",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/procreation-medicalement-assistee-pma-amp/techniques-procreation-medicalement-assistee-pma"
      },
      {
        label: "Agence de la biomédecine — Guide de l’assistance médicale à la procréation",
        url: "https://www.agence-biomedecine.fr/IMG/pdf/bd_biom24-5_maj_broch_patients_amp_a5_40p_pap.pdf"
      },
      {
        label: "Agence de la biomédecine — Quelles sont les différentes techniques d’AMP ?",
        url: "https://www.agence-biomedecine.fr/fr/don-de-gametes-et-assistance-medicale-a-la-procreation/quelles-sont-les-differentes-techniques-d-amp-pour-les-personnes-qui-ont-un-projet-parental"
      },
      {
        label: "Agence de la biomédecine — Taux de réussite et d’échec de l’AMP",
        url: "https://www.agence-biomedecine.fr/fr/don-de-gametes-et-assistance-medicale-a-la-procreation/quel-est-le-taux-de-reussited-echec-de-l-amp"
      },
      {
        label: "Assurance Maladie — Prise en charge de l’assistance médicale à la procréation",
        url: "https://www.ameli.fr/assure/remboursements/rembourse/assistance-medicale-la-procreation-amp/prise-en-charge-de-l-assistance-medicale-la-procreation-amp"
      }
    ]
  },
  {
    slug: "pma-demarches-delais-prise-en-charge",
    title: "PMA : quelles démarches, quels délais et quelle prise en charge ?",
    description:
      "Les principales étapes pour commencer un parcours d’AMP en France, comprendre les délais possibles et connaître les règles de remboursement.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "PMA et parcours de fertilité",
    subcategorySlug: "pma-parcours-fertilite",
    readingTime: "6 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Le parcours commence par une consultation dans un centre d’AMP ou auprès d’un spécialiste de la fertilité.",
          "Plusieurs rendez-vous et examens sont nécessaires avant de choisir la technique.",
          "Les délais varient selon le centre, la technique et le recours éventuel à un don.",
          "L’Assurance Maladie peut prendre en charge les actes d’AMP à 100 % dans les limites prévues."
        ],
        quote:
          "Une orientation vers un centre d’AMP ne signifie pas qu’un traitement commencera immédiatement : le bilan et les entretiens permettent d’abord de choisir le parcours adapté."
      },
      {
        title: "Par où commencer un parcours de PMA ?",
        paragraphs: [
          "Vous pouvez commencer par votre médecin généraliste, une sage-femme, un gynécologue ou prendre directement rendez-vous auprès d’un centre d’assistance médicale à la procréation.",
          "Le premier rendez-vous permet de reprendre l’histoire du projet parental, les antécédents médicaux, les éventuels essais déjà réalisés et les examens disponibles.",
          "L’équipe explique ensuite les étapes possibles et propose les examens nécessaires avant de décider d’une insémination, d’une FIV, d’une ICSI ou d’un autre parcours."
        ]
      },
      {
        title: "Les 3 grandes étapes avant le traitement",
        paragraphs: [
          "Le bilan médical : examens gynécologiques, prises de sang, échographie et, lorsqu’il y a un partenaire produisant des spermatozoïdes, spermogramme ou examens complémentaires.",
          "Les entretiens avec l’équipe : explication des techniques, des chances de réussite, des risques, des contraintes et des alternatives possibles.",
          "Les démarches administratives : consentements, documents d’identité, justificatifs demandés par le centre et demande de prise en charge auprès de l’Assurance Maladie."
        ],
        quote:
          "Préparez les comptes rendus déjà disponibles : cela peut éviter de refaire certains examens et faciliter le premier rendez-vous."
      },
      {
        title: "Combien de temps faut-il avant de commencer ?",
        paragraphs: [
          "Il n’existe pas de délai unique. Certains parcours débutent après quelques semaines, tandis que d’autres demandent plusieurs mois.",
          "Le délai dépend du nombre de rendez-vous, des examens à réaliser, de la technique proposée, de l’organisation du centre et de la nécessité éventuelle d’un traitement préalable.",
          "Lorsque le parcours nécessite un don de spermatozoïdes ou d’ovocytes, l’attente peut être plus longue en raison du nombre limité de donneurs et des modalités d’appariement."
        ]
      },
      {
        title: "Pourquoi les délais varient-ils autant ?",
        paragraphs: [
          "Les centres n’ont pas tous les mêmes capacités d’accueil, les mêmes équipements ni les mêmes listes d’attente.",
          "Certains examens doivent être réalisés à un moment précis du cycle, ce qui peut décaler le calendrier de plusieurs semaines.",
          "Une anomalie découverte pendant le bilan, une vaccination à mettre à jour, un traitement à adapter ou une intervention préalable peut également retarder le début du protocole."
        ]
      },
      {
        title: "Comment se déroule la demande de prise en charge ?",
        paragraphs: [
          "Le médecin ou le centre prépare généralement une demande de prise en charge à 100 % pour les soins liés à l’AMP.",
          "Cette demande est transmise à la caisse d’Assurance Maladie. Après accord, les actes prévus sont remboursés sur la base des tarifs de l’Assurance Maladie.",
          "Gardez une copie de l’accord et demandez au centre si des dépassements d’honoraires, frais annexes ou actes non remboursés peuvent rester à votre charge."
        ]
      },
      {
        title: "Que prend en charge l’Assurance Maladie ?",
        paragraphs: [
          "Les actes d’AMP peuvent être pris en charge à 100 % dans la limite des tarifs de l’Assurance Maladie.",
          "La prise en charge prévoit au maximum 6 inséminations, à raison d’une insémination par cycle, et 4 tentatives de fécondation in vitro pour obtenir une grossesse.",
          "Ces limites ne signifient pas qu’il faut réaliser les 6 inséminations avant d’avoir accès à une FIV. La technique est choisie selon la situation médicale."
        ],
        quote:
          "Une nouvelle grossesse ouvre un nouveau décompte dans les conditions prévues par l’Assurance Maladie."
      },
      {
        title: "Quelles sont les limites d’âge ?",
        paragraphs: [
          "En France, le prélèvement d’ovocytes dans le cadre d’un projet d’AMP est autorisé jusqu’au jour du 43e anniversaire.",
          "L’utilisation de gamètes ou d’embryons pour la personne qui portera la grossesse est autorisée jusqu’au jour du 45e anniversaire.",
          "Le recueil de spermatozoïdes et la participation de la personne du couple qui ne portera pas l’enfant sont possibles jusqu’au jour du 60e anniversaire.",
          "Les conditions légales d’accès et les conditions de remboursement ne doivent pas être confondues : demandez au centre et à votre caisse de confirmer ce qui s’applique à votre situation."
        ]
      },
      {
        title: "Quels frais peuvent rester à charge ?",
        paragraphs: [
          "La prise en charge à 100 % s’effectue sur la base des tarifs de l’Assurance Maladie. Des dépassements d’honoraires peuvent donc rester à payer.",
          "Certains transports, hébergements, consultations non conventionnées ou examens réalisés hors du parcours validé peuvent également ne pas être entièrement remboursés.",
          "Votre complémentaire santé peut prendre en charge une partie de ces frais selon votre contrat."
        ]
      },
      {
        title: "Et pour une PMA à l’étranger ?",
        paragraphs: [
          "Une AMP réalisée dans un pays de l’Union européenne ou en Suisse peut parfois être remboursée, mais une autorisation préalable est nécessaire.",
          "La demande doit être adressée au Centre national des soins à l’étranger avant le début des soins, avec les documents médicaux et administratifs demandés.",
          "Ne commencez pas le traitement avant d’avoir reçu l’accord écrit si vous souhaitez demander une prise en charge."
        ]
      },
      {
        title: "Comment mieux vivre l’attente ?",
        paragraphs: [
          "Demandez au centre un calendrier approximatif, les examens encore nécessaires et la personne à contacter en cas de question.",
          "Regroupez les documents, notez les dates et gardez une copie des ordonnances, consentements et accords de prise en charge.",
          "Si l’attente ou les traitements deviennent difficiles à vivre, vous pouvez demander un soutien psychologique ou vous rapprocher d’une association de patients."
        ],
        bullets: [
          "Noter les coordonnées du centre et du secrétariat.",
          "Demander quels examens ont une durée de validité limitée.",
          "Conserver les accords de prise en charge.",
          "Vérifier les éventuels frais restant à charge.",
          "Demander de l’aide si la charge émotionnelle devient trop importante."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Un parcours d’AMP commence par un bilan, des entretiens et des démarches administratives. Les délais varient fortement selon la technique, le centre et le recours éventuel à un don.",
          "La prise en charge peut atteindre 100 % dans les limites réglementaires, mais certains frais peuvent rester à charge. Il est utile de vérifier chaque étape avec le centre et l’Assurance Maladie."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Prise en charge de l’assistance médicale à la procréation",
        url: "https://www.ameli.fr/assure/remboursements/rembourse/assistance-medicale-la-procreation-amp/prise-en-charge-de-l-assistance-medicale-la-procreation-amp"
      },
      {
        label: "Agence de la biomédecine — Les différentes étapes des parcours d’AMP",
        url: "https://www.agence-biomedecine.fr/fr/don-de-gametes-et-assistance-medicale-a-la-procreation/quelles-sont-les-differentes-etapes-des-parcours-d-assistance-medicale-a-la-procreation"
      },
      {
        label: "Agence de la biomédecine — Conditions d’âge pour bénéficier d’une AMP",
        url: "https://www.agence-biomedecine.fr/fr/don-de-gametes-et-assistance-medicale-a-la-procreation/quelles-sont-les-conditions-d-age-minimal-et-maximal-pour-pouvoir-beneficier-d-une-assistance-medicale-a-la-procreation-en-france"
      },
      {
        label: "Agence de la biomédecine — Annuaire des centres d’AMP",
        url: "https://www.agence-biomedecine.fr/fr/don-de-gametes-et-assistance-medicale-a-la-procreation/existe-t-il-une-carte-qui-recense-tous-les-centres-d-assistance-medicale-a-la-procreation"
      },
      {
        label: "Assurance Maladie — AMP réalisée dans l’Union européenne ou en Suisse",
        url: "https://www.ameli.fr/assure/remboursements/rembourse/assistance-medicale-la-procreation-amp/amp-etranger-remboursement"
      }
    ]
  },
  {
    slug: "pma-amp-definition-a-qui-adresse",
    title: "PMA ou AMP : qu’est-ce que c’est et à qui s’adresse-t-elle ?",
    description:
      "Comprendre simplement ce que signifie l’assistance médicale à la procréation, les personnes concernées et les principales étapes du parcours.",
    category: "Avant la grossesse",
    categorySlug: "avant-grossesse",
    subcategory: "PMA et parcours de fertilité",
    subcategorySlug: "pma-parcours-fertilite",
    readingTime: "5 min",
    publishedAt: "2026-06-12",
    updatedAt: "2026-06-12",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "AMP est le terme médical officiel ; PMA reste le terme couramment utilisé.",
          "L’AMP regroupe plusieurs techniques, dont l’insémination, la FIV et l’accueil d’embryon.",
          "En France, elle est accessible aux couples hétérosexuels, aux couples de femmes et aux femmes non mariées.",
          "Le parcours commence par des consultations et un bilan permettant de choisir la technique la plus adaptée."
        ],
        quote:
          "Entrer dans un parcours d’AMP ne signifie pas automatiquement faire une FIV : la technique dépend de la situation médicale et du projet parental."
      },
      {
        title: "Que signifient PMA et AMP ?",
        paragraphs: [
          "PMA signifie « procréation médicalement assistée ». AMP signifie « assistance médicale à la procréation » : c’est le terme aujourd’hui utilisé dans les textes médicaux et administratifs français.",
          "L’AMP rassemble les techniques médicales qui aident à concevoir un enfant lorsqu’une conception naturelle est difficile, impossible ou ne correspond pas à la situation familiale.",
          "Elle peut utiliser les gamètes du couple, un don de spermatozoïdes, un don d’ovocytes ou, dans certaines situations, un accueil d’embryon."
        ]
      },
      {
        title: "Les 3 principales techniques d’AMP",
        paragraphs: [
          "L’insémination artificielle, souvent réalisée directement dans l’utérus, consiste à déposer des spermatozoïdes préparés au moment proche de l’ovulation.",
          "La fécondation in vitro, ou FIV, consiste à mettre en contact les ovocytes et les spermatozoïdes en laboratoire avant de transférer un embryon dans l’utérus.",
          "L’accueil d’embryon permet à une personne ou à un couple de recevoir un embryon donné par un autre couple après un parcours encadré."
        ],
        quote:
          "L’ICSI est une variante de la FIV : un spermatozoïde est injecté directement dans l’ovocyte en laboratoire."
      },
      {
        title: "À qui l’AMP s’adresse-t-elle en France ?",
        paragraphs: [
          "L’AMP est accessible aux couples hétérosexuels confrontés à une infertilité ou à un risque de transmettre une maladie grave.",
          "Elle est également accessible aux couples formés de deux femmes et aux femmes non mariées qui souhaitent avoir un enfant.",
          "L’accès ne peut pas être refusé en raison de l’orientation sexuelle ou du statut matrimonial. La demande est toutefois évaluée par une équipe médicale dans le cadre prévu par la loi."
        ]
      },
      {
        title: "Faut-il obligatoirement avoir un diagnostic d’infertilité ?",
        paragraphs: [
          "Non. Un diagnostic d’infertilité est généralement recherché chez les couples hétérosexuels lorsque la grossesse ne survient pas après une période d’essais.",
          "Les couples de femmes et les femmes non mariées peuvent accéder à l’AMP sans avoir à démontrer une infertilité médicale.",
          "Dans toutes les situations, des consultations et des examens sont nécessaires afin de vérifier l’état de santé, d’expliquer les techniques et de préparer le parcours."
        ]
      },
      {
        title: "Comment débute un parcours d’AMP ?",
        paragraphs: [
          "Le parcours commence généralement par une consultation auprès d’un gynécologue, d’un médecin spécialisé en fertilité ou d’un centre d’AMP.",
          "L’équipe recueille les antécédents, réalise ou complète le bilan médical et discute du projet parental.",
          "Plusieurs rendez-vous peuvent être nécessaires avant de choisir la technique, expliquer le traitement, recueillir les consentements et fixer le calendrier."
        ],
        bullets: [
          "Consultation médicale et histoire du projet.",
          "Bilan de santé et de fertilité selon la situation.",
          "Présentation des techniques possibles.",
          "Information sur les chances, les limites et les risques.",
          "Consentements et organisation du traitement."
        ]
      },
      {
        title: "L’AMP fonctionne-t-elle à chaque tentative ?",
        paragraphs: [
          "Non. Les chances de réussite dépendent notamment de l’âge, de la cause de l’infertilité, de la technique utilisée, de la qualité des gamètes et des antécédents médicaux.",
          "Plusieurs tentatives peuvent être nécessaires et certaines étapes peuvent être interrompues si la réponse au traitement n’est pas suffisante.",
          "L’équipe médicale doit expliquer les chances attendues dans votre situation plutôt que de donner un chiffre général applicable à tout le monde."
        ]
      },
      {
        title: "Quelle prise en charge en France ?",
        paragraphs: [
          "Les actes d’AMP peuvent être pris en charge à 100 % par l’Assurance Maladie dans les limites prévues par la réglementation.",
          "La prise en charge est identique pour les couples hétérosexuels, les couples de femmes et les femmes non mariées.",
          "Les éventuels dépassements d’honoraires, frais non remboursables ou soins réalisés à l’étranger peuvent obéir à des règles différentes."
        ],
        quote:
          "L’Assurance Maladie prévoit actuellement une prise en charge maximale de 6 inséminations et 4 tentatives de FIV pour obtenir une grossesse."
      },
      {
        title: "Le parcours peut-il être long ?",
        paragraphs: [
          "Oui. Le délai dépend du bilan, de la technique, de la disponibilité du centre et, en cas de don, du nombre de donneurs disponibles.",
          "Le parcours peut comporter des périodes d’attente, des traitements hormonaux, des examens répétés et une charge émotionnelle importante.",
          "Il est possible de demander un soutien psychologique ou associatif dès le début, sans attendre que la situation devienne trop difficile."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "L’AMP, souvent appelée PMA, regroupe plusieurs techniques permettant d’accompagner un projet parental. Elle ne se résume pas à la FIV.",
          "En France, elle concerne les couples hétérosexuels, les couples de femmes et les femmes non mariées. Le choix de la technique se fait après une évaluation médicale et une information complète."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Qu’est-ce que l’assistance médicale à la procréation ?",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/procreation-medicalement-assistee-pma-amp/qu-est-ce-que-l-assistance-medicale-la-procreation-amp"
      },
      {
        label: "Assurance Maladie — Techniques d’AMP : insémination artificielle, FIV, accueil d’embryon",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/concevoir-un-enfant/procreation-medicalement-assistee-pma-amp/techniques-procreation-medicalement-assistee-pma"
      },
      {
        label: "Service-Public.fr — Procréation médicalement assistée (PMA)",
        url: "https://www.service-public.fr/particuliers/vosdroits/F31462"
      },
      {
        label: "Assurance Maladie — Prise en charge de l’assistance médicale à la procréation",
        url: "https://www.ameli.fr/assure/remboursements/rembourse/assistance-medicale-la-procreation-amp/prise-en-charge-de-l-assistance-medicale-la-procreation-amp"
      },
      {
        label: "Agence de la biomédecine — Assistance médicale à la procréation",
        url: "https://www.agence-biomedecine.fr/fr/don-de-gametes-et-assistance-medicale-a-la-procreation"
      }
    ]
  },
  {
    slug: "produits-quotidien-environnement-que-limiter-avant-grossesse",
    title: "Produits du quotidien et environnement : que limiter avant une grossesse ?",
    description:
      "Des gestes simples pour réduire certaines expositions sans chercher à supprimer tous les produits du quotidien.",
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
          "Il est impossible d’éviter toutes les substances chimiques du quotidien.",
          "Aérer, limiter les sprays et choisir des produits simples réduit déjà de nombreuses expositions.",
          "Les travaux, pesticides, solvants et produits très parfumés méritent une attention particulière.",
          "Les expositions professionnelles doivent être signalées dès le projet de grossesse."
        ],
        quote:
          "L’objectif n’est pas de tout éliminer, mais de réduire les expositions inutiles avec quelques gestes réalistes."
      },
      {
        title: "Pourquoi réduire certaines expositions ?",
        paragraphs: [
          "De nombreuses substances chimiques sont présentes dans l’air intérieur, les produits ménagers, les cosmétiques, les emballages, les meubles ou les produits de bricolage.",
          "Certaines peuvent agir comme perturbateurs endocriniens ou être classées cancérogènes, mutagènes ou toxiques pour la reproduction.",
          "La période qui précède la grossesse est un bon moment pour adopter quelques habitudes simples, sans transformer le quotidien en source d’angoisse."
        ]
      },
      {
        title: "Les 3 gestes les plus utiles",
        paragraphs: [
          "Aérez le logement chaque jour, idéalement au moins 10 minutes, et davantage pendant ou après le ménage, la cuisine, la douche ou le bricolage.",
          "Réduisez le nombre de produits utilisés et privilégiez des produits simples, sans parfum, avec une liste d’ingrédients courte.",
          "Évitez autant que possible les sprays, aérosols, parfums d’ambiance, insecticides et mélanges de plusieurs produits ménagers."
        ],
        quote:
          "Ne mélangez jamais les produits ménagers, notamment l’eau de Javel avec un détartrant, du vinaigre ou un autre nettoyant."
      },
      {
        title: "Quels produits ménagers limiter ?",
        paragraphs: [
          "Les sprays, désodorisants, diffuseurs parfumés et produits très parfumés augmentent les substances présentes dans l’air intérieur.",
          "Pour l’entretien courant, un petit nombre de produits suffit souvent. Respectez les doses, aérez et portez des gants si le produit l’exige.",
          "Conservez toujours les produits dans leur emballage d’origine afin de garder les consignes d’utilisation et les informations utiles en cas d’intoxication."
        ]
      },
      {
        title: "Cosmétiques et produits d’hygiène : faut-il tout changer ?",
        paragraphs: [
          "Non. Il est préférable de simplifier progressivement plutôt que de jeter tous les produits déjà utilisés.",
          "Choisissez en priorité les produits nécessaires, avec peu d’ingrédients, et limitez ceux qui restent longtemps sur la peau ou qui sont fortement parfumés.",
          "Les huiles essentielles sont déconseillées pendant la grossesse sans avis professionnel. Dès le projet bébé, demandez conseil avant de les utiliser par voie orale, cutanée ou en diffusion.",
          "Pour le vernis semi-permanent, le gel ou la résine, une pose occasionnelle n’est pas forcément interdite, mais mieux vaut choisir un lieu bien ventilé, éviter tout contact du produit non durci avec la peau et espacer les poses. En cas de rougeur, démangeaison ou gonflement, retirez le produit et demandez conseil."
        ]
      },
      {
        title: "Que faire avec les contenants alimentaires ?",
        paragraphs: [
          "Évitez de chauffer les aliments dans des contenants en plastique qui ne sont pas prévus pour cet usage.",
          "Le verre et l’inox sont des options simples pour conserver ou réchauffer les aliments lorsque cela est possible.",
          "Lavez les fruits et légumes, variez l’alimentation et limitez les produits très transformés plutôt que de chercher à supprimer chaque substance séparément."
        ]
      },
      {
        title: "Travaux, peinture et bricolage : quelles précautions ?",
        paragraphs: [
          "Les peintures, colles, vernis, solvants et produits de décapage peuvent libérer des substances irritantes ou toxiques.",
          "Si possible, réalisez les gros travaux avant la grossesse, déléguez les tâches les plus exposantes et aérez longuement les pièces.",
          "Portez les protections indiquées sur l’étiquette et évitez les produits contenant des substances classées toxiques pour la reproduction."
        ]
      },
      {
        title: "Pesticides et produits contre les insectes",
        paragraphs: [
          "Évitez les insecticides, diffuseurs électriques, bombes et traitements pesticides lorsqu’une alternative non chimique est possible.",
          "Pour limiter les moustiques, privilégiez les moustiquaires, les vêtements couvrants et l’élimination des eaux stagnantes.",
          "Si un répulsif est nécessaire, demandez conseil à un pharmacien ou à un médecin, surtout pendant la grossesse ou lors d’un voyage."
        ]
      },
      {
        title: "Et au travail ?",
        paragraphs: [
          "Certaines professions exposent aux solvants, pesticides, métaux, rayonnements, médicaments dangereux, fumées ou autres agents reprotoxiques.",
          "Parlez-en au médecin du travail dès le projet de grossesse, sans attendre forcément un test positif. Il peut évaluer le poste et proposer des mesures de prévention.",
          "N’hésitez pas à apporter les noms ou les fiches de données de sécurité des produits utilisés afin de faciliter l’évaluation."
        ],
        bullets: [
          "Produits de nettoyage professionnels.",
          "Peintures, colles, solvants et résines.",
          "Pesticides et produits vétérinaires.",
          "Médicaments cytotoxiques ou substances de laboratoire.",
          "Plomb, mercure et autres métaux.",
          "Rayonnements ou fumées industrielles."
        ]
      },
      {
        title: "Comment commencer sans se compliquer la vie ?",
        paragraphs: [
          "Commencez par les gestes qui réduisent plusieurs expositions à la fois : aérer, limiter les sprays et simplifier les produits.",
          "Remplacez les produits au fur et à mesure qu’ils sont terminés plutôt que de tout racheter immédiatement.",
          "Concentrez-vous sur les expositions répétées et importantes. Une utilisation ponctuelle passée n’est pas une raison de culpabiliser."
        ],
        bullets: [
          "Aérer chaque jour.",
          "Supprimer les parfums d’ambiance.",
          "Choisir un nettoyant simple.",
          "Éviter de chauffer dans du plastique.",
          "Reporter ou déléguer les gros travaux.",
          "Parler des expositions professionnelles."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Avant une grossesse, quelques gestes simples permettent de diminuer les expositions inutiles : aérer, limiter les sprays, simplifier les produits et prendre des précautions lors des travaux.",
          "Il n’est ni possible ni nécessaire de vivre dans un environnement parfaitement exempt de substances chimiques. En cas d’exposition professionnelle ou de doute sur un produit, demandez un avis adapté."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Grossesse et petite enfance : agir sur l’environnement",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/grossesse/grossesse-en-bonne-sante/grossesse-environnement/grossesse-environnement"
      },
      {
        label: "Assurance Maladie — Perturbateurs endocriniens : comment les éviter ?",
        url: "https://www.ameli.fr/assure/sante/themes/perturbateurs-endocriniens-sante/perturbateurs-endocriniens-comment-les-eviter"
      },
      {
        label: "1000 premiers jours — Limiter les perturbateurs endocriniens",
        url: "https://www.1000-premiers-jours.fr/fr/limiter-les-perturbateurs-endocriniens"
      },
      {
        label: "1000 premiers jours — Améliorer la qualité de l’air intérieur",
        url: "https://www.1000-premiers-jours.fr/fr/ameliorer-la-qualite-de-lair-interieur"
      },
      {
        label: "Anses — Huiles essentielles : risques et précautions",
        url: "https://www.anses.fr/fr/content/huiles-essentielles-risques-et-precautions"
      },
      {
        label: "Anses — Produits ménagers : les laisser dans leur contenant d’origine",
        url: "https://www.anses.fr/fr/content/produits-menagers-les-laisser-dans-leur-contenant-dorigine"
      }
    ]
  },
  {
    slug: "alcool-projet-bebe-faut-il-arreter-avant-grossesse",
    title: "Alcool et projet bébé : faut-il arrêter avant la grossesse ?",
    description:
      "Comprendre pourquoi l’arrêt est recommandé dès le projet bébé, que faire après une consommation ponctuelle et où trouver de l’aide.",
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
          "Il est recommandé d’éviter l’alcool dès qu’un projet de grossesse existe.",
          "Aucune quantité d’alcool n’a été démontrée comme sans risque pendant la grossesse.",
          "Tous les alcools sont concernés : vin, bière, cidre, champagne et alcools forts.",
          "Si l’arrêt est difficile, un professionnel ou Alcool info service peut vous accompagner."
        ],
        quote:
          "Le message est simple : zéro alcool dès le projet bébé et pendant toute la grossesse."
      },
      {
        title: "Pourquoi arrêter dès le projet bébé ?",
        paragraphs: [
          "Une grossesse peut commencer avant le retard de règles et donc avant que l’on sache que l’on est enceinte.",
          "L’alcool traverse le placenta et atteint le fœtus. Comme aucune quantité sans risque n’a été identifiée, les recommandations françaises conseillent de s’abstenir dès qu’un projet de grossesse existe.",
          "Arrêter en amont évite d’avoir à modifier ses habitudes dans l’urgence après un test positif."
        ]
      },
      {
        title: "Les 3 repères les plus importants",
        paragraphs: [
          "Zéro alcool signifie zéro verre, même occasionnel. Un petit verre ou une consommation rare ne peut pas être considéré comme garanti sans risque.",
          "Tous les alcools sont concernés. Une bière, un verre de vin ou une dose d’alcool fort contiennent tous de l’éthanol.",
          "Le ou la partenaire peut aussi soutenir la démarche en réduisant ou en arrêtant sa propre consommation, notamment à la maison et lors des moments festifs."
        ],
        quote:
          "Choisir une boisson sans alcool à l’avance peut faciliter les repas, les fêtes et les sorties."
      },
      {
        title: "Et si j’ai bu avant de savoir que j’étais enceinte ?",
        paragraphs: [
          "Ne culpabilisez pas. Une consommation passée ne signifie pas automatiquement qu’une complication surviendra.",
          "Le bon réflexe est d’arrêter dès que la grossesse est connue et d’en parler simplement au médecin ou à la sage-femme qui vous suit.",
          "Le professionnel pourra replacer la consommation dans son contexte, répondre à vos questions et proposer un accompagnement si nécessaire."
        ]
      },
      {
        title: "Faut-il éviter les boissons « sans alcool » ?",
        paragraphs: [
          "Certaines boissons présentées comme sans alcool peuvent contenir une faible quantité d’alcool. Vérifiez l’étiquette, surtout pendant la grossesse.",
          "Les boissons portant la mention 0,0 % sont les plus simples à identifier, mais elles peuvent être très sucrées.",
          "L’eau, les eaux aromatisées maison, les infusions froides et les jus dilués peuvent aussi remplacer les boissons alcoolisées."
        ]
      },
      {
        title: "Comment arrêter plus facilement ?",
        paragraphs: [
          "Repérez les moments où l’alcool est le plus présent : apéritifs, repas, stress, week-ends ou sorties.",
          "Préparez une alternative qui vous plaît et dites clairement à vos proches que vous ne souhaitez pas boire.",
          "Si la consommation est régulière ou difficile à contrôler, demandez conseil avant d’arrêter brutalement, car un sevrage non accompagné peut parfois être dangereux."
        ],
        bullets: [
          "Ne pas garder d’alcool à portée de main.",
          "Prévoir une boisson de remplacement.",
          "Demander au partenaire de soutenir la démarche.",
          "Éviter temporairement certaines situations déclenchantes.",
          "Parler sans honte de ses difficultés à un professionnel."
        ]
      },
      {
        title: "Et l’alcool du ou de la partenaire ?",
        paragraphs: [
          "La consommation du partenaire ne transmet pas directement de l’alcool au fœtus, mais elle peut rendre l’arrêt plus difficile au quotidien.",
          "Une consommation importante peut aussi nuire à la santé générale, à la sexualité et à la qualité des spermatozoïdes.",
          "Réduire ou arrêter à deux peut faciliter le changement et créer un environnement plus soutenant."
        ]
      },
      {
        title: "Où trouver de l’aide ?",
        paragraphs: [
          "Un médecin généraliste, une sage-femme, un pharmacien ou un professionnel en addictologie peut vous accompagner sans jugement.",
          "Vous pouvez appeler Alcool info service au 0 980 980 930, 7 jours sur 7 de 8 h à 2 h. L’appel est anonyme et non surtaxé.",
          "Un chat individuel est également proposé sur le site d’Alcool info service."
        ],
        quote:
          "Alcool info service : 0 980 980 930 — 7 jours sur 7, de 8 h à 2 h."
      },
      {
        title: "À retenir",
        paragraphs: [
          "La recommandation est de ne pas boire d’alcool dès le projet bébé et pendant toute la grossesse, car aucune quantité sans risque n’est connue.",
          "En cas de consommation avant de savoir que vous étiez enceinte ou de difficulté à arrêter, parlez-en sans culpabilité à un professionnel."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Tabac, alcool, drogue et grossesse",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/grossesse/grossesse-en-bonne-sante/tabac-alcool-drogue-et-grossesse"
      },
      {
        label: "Santé publique France — Zéro alcool pendant la grossesse, un message pour tous",
        url: "https://www.santepubliquefrance.fr/les-actualites/2020/zero-alcool-pendant-la-grossesse-un-message-pour-tous"
      },
      {
        label: "Santé publique France — Grossesse et alcool : évolution des connaissances et des pratiques",
        url: "https://beh.santepubliquefrance.fr/beh/2023/17/2023_17_1.html"
      },
      {
        label: "1000 premiers jours — L’alcool pendant la grossesse et l’allaitement",
        url: "https://www.1000-premiers-jours.fr/fr/lalcool-pendant-la-grossesse-et-lallaitement"
      },
      {
        label: "Alcool info service — Nous appeler",
        url: "https://www.alcool-info-service.fr/nous-appeler"
      },
      {
        label: "Assurance Maladie — Addictions : à qui s’adresser ?",
        url: "https://www.ameli.fr/assure/sante/themes/addictions/suivi"
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
          "Vous pouvez appeler gratuitement Tabac info service au 39 89, du lundi au samedi de 8 h à 20 h. Un conseiller répond à vos premières questions et peut vous orienter vers un tabacologue pour un suivi personnalisé.",
          "Tabac info service propose aussi un accompagnement via son site et son application.",
          "La plupart des substituts nicotiniques sont remboursés sur prescription par l’Assurance Maladie."
        ],
        quote:
          "Tabac info service : 39 89 — service gratuit, du lundi au samedi de 8 h à 20 h."
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
    slug: "nausees-vomissements-comment-les-soulager",
    title: "Nausées et vomissements : comment les soulager ?",
    description:
      "Des gestes simples pour mieux supporter les nausées du premier trimestre, reconnaître les signes de déshydratation et savoir quand consulter.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Premier trimestre",
    subcategorySlug: "premier-trimestre",
    readingTime: "6 min",
    publishedAt: "2026-06-13",
    updatedAt: "2026-06-13",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Les nausées peuvent survenir à toute heure, même sans vomissements.",
          "Mangez en petites quantités et évitez de rester longtemps à jeun.",
          "Buvez régulièrement par petites gorgées pour limiter le risque de déshydratation.",
          "Consultez rapidement si vous ne gardez plus les boissons, perdez du poids ou vous sentez très faible."
        ],
        quote:
          "Vous n’avez pas besoin d’attendre que les symptômes deviennent insupportables : une sage-femme ou un médecin peut vous proposer une prise en charge adaptée."
      },
      {
        title: "Pourquoi les nausées sont-elles si fréquentes ?",
        paragraphs: [
          "Les nausées et les vomissements sont fréquents au début de la grossesse. Ils sont notamment associés aux changements hormonaux importants des premières semaines, même si leur cause exacte n’est pas toujours clairement définie.",
          "Malgré l’expression « nausées matinales », ils peuvent apparaître à n’importe quel moment de la journée. Certaines femmes ressentent seulement un écœurement, tandis que d’autres vomissent plusieurs fois par jour.",
          "Ils diminuent le plus souvent au cours du deuxième trimestre, généralement entre 16 et 20 semaines d’aménorrhée. Leur durée et leur intensité restent cependant différentes pour chaque grossesse."
        ]
      },
      {
        title: "Les 3 réflexes qui peuvent aider",
        paragraphs: [
          "Fractionner les repas : prenez plusieurs petits repas ou collations dans la journée et mangez avant d’avoir très faim. Un estomac vide peut accentuer les nausées.",
          "Boire par petites gorgées : répartissez les boissons tout au long de la journée. Boire entre les repas peut être plus facile si les liquides pris en mangeant augmentent les nausées.",
          "Limiter les déclencheurs : repérez les odeurs, les aliments, la chaleur ou la fatigue qui aggravent vos symptômes. Les aliments froids ou tièdes dégagent souvent moins d’odeur."
        ],
        quote:
          "Pendant les jours difficiles, l’objectif prioritaire est de réussir à boire et de manger les aliments autorisés pendant la grossesse que vous tolérez le mieux."
      },
      {
        title: "Que manger lorsque tout vous écœure ?",
        paragraphs: [
          "Il n’existe pas d’aliment obligatoire contre les nausées. Privilégiez les aliments simples que vous réussissez à manger, sans vous forcer à terminer une assiette.",
          "Les plats très gras, frits, épicés ou fortement odorants peuvent aggraver les symptômes chez certaines femmes. Vous pouvez les éviter temporairement s’ils vous incommodent.",
          "Une alimentation moins variée pendant quelques jours n’est généralement pas inquiétante si vous continuez à boire et à conserver une partie de vos repas."
        ],
        bullets: [
          "Préparez de petites portions.",
          "Gardez une collation simple à portée de main.",
          "Mangez lentement et arrêtez-vous avant de vous sentir trop pleine.",
          "Aérez la cuisine et les pièces où vous mangez.",
          "Demandez de l’aide pour cuisiner lorsque les odeurs sont difficiles à supporter."
        ]
      },
      {
        title: "Comment mieux s’hydrater ?",
        paragraphs: [
          "Buvez souvent, en petites quantités, plutôt que de prendre un grand verre en une seule fois.",
          "Testez différentes températures : certaines femmes tolèrent mieux les boissons fraîches, les glaçons ou les boissons tièdes.",
          "Si l’eau seule passe mal, demandez conseil à un professionnel sur les boissons adaptées. Évitez les boissons très caféinées et ne consommez pas d’alcool."
        ]
      },
      {
        title: "Le gingembre et l’acupression sont-ils utiles ?",
        paragraphs: [
          "Le gingembre peut diminuer les nausées chez certaines femmes enceintes, mais son efficacité n’est pas identique pour tout le monde.",
          "Avant de prendre des gélules, des extraits concentrés ou un complément, demandez conseil à un médecin, une sage-femme ou un pharmacien.",
          "Les bracelets d’acupression sont parfois essayés. Ils présentent peu de risques lorsqu’ils sont correctement utilisés, mais leur efficacité peut varier."
        ]
      },
      {
        title: "Peut-on prendre un médicament contre les nausées ?",
        paragraphs: [
          "Lorsque les changements alimentaires ne suffisent pas, un professionnel de santé peut prescrire un médicament contre les nausées ou les vomissements compatible avec la grossesse.",
          "Le choix du traitement dépend de l’intensité des symptômes, de vos antécédents, du terme de la grossesse et des autres médicaments que vous prenez.",
          "Ne prenez pas un médicament restant d’une ancienne ordonnance et n’utilisez pas le traitement conseillé à une autre personne. Même sans ordonnance, un produit doit être vérifié pendant la grossesse."
        ],
        quote:
          "Un traitement pris suffisamment tôt peut éviter l’aggravation des vomissements, la déshydratation et la perte de poids."
      },
      {
        title: "Qu’est-ce que l’hyperémèse gravidique ?",
        paragraphs: [
          "L’hyperémèse gravidique est une forme sévère des nausées et vomissements de la grossesse. Elle empêche parfois de boire et de s’alimenter correctement.",
          "Elle peut entraîner une déshydratation, une perte de poids, des carences et un retentissement important sur la vie quotidienne et le moral.",
          "Une prise en charge médicale est nécessaire. Elle peut comprendre des médicaments, une réhydratation, un apport en vitamines et parfois une hospitalisation."
        ]
      },
      {
        title: "Quand faut-il consulter rapidement ?",
        paragraphs: [
          "Vous ne parvenez plus à garder les boissons ou les aliments et les vomissements se répètent.",
          "Vos urines deviennent très foncées ou rares, vous perdez du poids, votre bouche est sèche ou vous ressentez des vertiges et une grande faiblesse.",
          "Vous avez une douleur abdominale importante, de la fièvre, du sang dans les vomissements, un malaise ou une aggravation rapide des symptômes."
        ],
        quote:
          "Des vomissements importants ne sont pas un symptôme que vous devez simplement supporter : demandez rapidement un avis médical."
      },
      {
        title: "À retenir",
        paragraphs: [
          "Pour soulager des nausées modérées, mangez peu mais souvent, buvez par petites gorgées, limitez les odeurs déclenchantes et reposez-vous.",
          "Des traitements compatibles avec la grossesse existent lorsque ces mesures ne suffisent pas. Consultez rapidement si vous ne réussissez plus à boire, si vous perdez du poids ou si des signes de déshydratation apparaissent."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Nausées et vomissements au cours de la grossesse : que faire ?",
        url: "https://www.ameli.fr/assure/sante/themes/nausees-et-vomissements-pendant-la-grossesse/nausees-vomissements-que-faire"
      },
      {
        label: "Assurance Maladie — Nausées et vomissements pendant la grossesse : symptômes et causes",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/grossesse/difficultes-et-maladies-pendant-la-grossesse/grossesse-nausees-et-vomissements/nausees-vomissements-grossesse"
      },
      {
        label: "Assurance Maladie — Nausées et vomissements chez la femme enceinte : consultation et traitement",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/grossesse/difficultes-et-maladies-pendant-la-grossesse/grossesse-nausees-et-vomissements/nauses-vomissements-grossesse-consultation-traitement"
      },
      {
        label: "Haute Autorité de santé — Comment mieux informer les femmes enceintes ?",
        url: "https://www.has-sante.fr/jcms/c_268522/fr/comment-mieux-informer-les-femmes-enceintes-recommandations"
      },
      {
        label: "NHS — Vomiting and morning sickness",
        url: "https://www.nhs.uk/pregnancy/common-symptoms/vomiting-and-morning-sickness/"
      },
      {
        label: "RCOG — Pregnancy sickness and hyperemesis gravidarum",
        url: "https://www.rcog.org.uk/for-the-public/browse-our-patient-information/pregnancy-sickness-nausea-and-vomiting-of-pregnancy-and-hyperemesis-gravidarum/"
      }
    ]
  },

  {
    slug: "fatigue-premier-trimestre-pourquoi-si-importante",
    title: "Fatigue au premier trimestre : pourquoi est-elle si importante ?",
    description:
      "Pourquoi le début de la grossesse peut provoquer un épuisement intense, comment adapter son quotidien et quels signes doivent conduire à consulter.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Premier trimestre",
    subcategorySlug: "premier-trimestre",
    readingTime: "6 min",
    publishedAt: "2026-06-13",
    updatedAt: "2026-06-13",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Une grande fatigue est très fréquente pendant les 12 premières semaines de grossesse.",
          "Les changements hormonaux et l’adaptation de tout l’organisme expliquent en grande partie cet épuisement.",
          "Se reposer davantage, alléger son rythme et conserver une activité douce peuvent aider.",
          "Une fatigue brutale, extrême ou accompagnée d’essoufflement, de palpitations, de fièvre ou de malaise doit être signalée."
        ],
        quote:
          "La fatigue du premier trimestre est réelle : votre corps accomplit un important travail d’adaptation, même si la grossesse ne se voit pas encore."
      },
      {
        title: "Pourquoi peut-on se sentir aussi épuisée ?",
        paragraphs: [
          "Au début de la grossesse, le corps se transforme rapidement. Les variations hormonales, en particulier l’augmentation de la progestérone, peuvent entraîner une somnolence inhabituelle et un besoin de sommeil plus important.",
          "L’organisme commence aussi à adapter la circulation sanguine, le fonctionnement du cœur et le métabolisme pour répondre aux besoins de la grossesse. Ces changements demandent de l’énergie.",
          "Les nausées, les vomissements, les réveils nocturnes, les émotions et les inquiétudes peuvent encore accentuer la fatigue. Elle résulte donc souvent de plusieurs facteurs qui se cumulent."
        ]
      },
      {
        title: "Les 3 réflexes pour mieux récupérer",
        paragraphs: [
          "Écouter les signaux du corps : couchez-vous plus tôt lorsque c’est possible, faites une courte sieste ou accordez-vous de vraies pauses avant d’être complètement épuisée.",
          "Alléger temporairement le quotidien : reportez ce qui peut attendre, acceptez l’aide proposée et simplifiez les repas, les tâches ménagères ou les déplacements.",
          "Conserver un rythme doux : une marche ou une activité physique adaptée peut aider à préserver le sommeil et l’énergie, à condition de ne pas forcer et de respecter vos sensations."
        ],
        quote:
          "Le repos n’est pas un manque de volonté : pendant cette période, il répond à un besoin physiologique réel."
      },
      {
        title: "Comment organiser ses journées ?",
        paragraphs: [
          "Repérez les moments où vous avez le plus d’énergie et placez-y les tâches importantes. Gardez les activités moins exigeantes pour les périodes où la fatigue augmente.",
          "Lorsque votre emploi du temps le permet, alternez les périodes d’activité et de récupération. Une pause prise suffisamment tôt est souvent plus utile qu’un repos commencé une fois l’épuisement installé.",
          "Parlez de votre fatigue à votre entourage. Les premières semaines sont parfois difficiles à expliquer lorsque la grossesse n’a pas encore été annoncée, mais vous pouvez demander de l’aide sans donner de détails que vous ne souhaitez pas partager."
        ],
        bullets: [
          "Préparez une liste courte de priorités réalistes.",
          "Évitez d’enchaîner plusieurs journées très chargées.",
          "Prévoyez des collations et de l’eau lors des déplacements.",
          "Limitez les activités non indispensables pendant les périodes les plus difficiles.",
          "Acceptez que votre niveau d’énergie varie d’un jour à l’autre."
        ]
      },
      {
        title: "Le sommeil suffit-il toujours ?",
        paragraphs: [
          "Dormir davantage peut soulager la fatigue, mais ne la fait pas toujours disparaître complètement. Vous pouvez avoir l’impression d’être épuisée dès le réveil malgré une nuit plus longue.",
          "Essayez de conserver des horaires de sommeil réguliers, de réduire les écrans avant le coucher et de créer une transition calme en fin de journée.",
          "Une courte sieste peut être utile. Une sieste longue ou trop tardive peut toutefois retarder l’endormissement chez certaines personnes : adaptez sa durée selon votre propre sommeil."
        ]
      },
      {
        title: "L’alimentation peut-elle aider ?",
        paragraphs: [
          "Des repas réguliers et variés contribuent à maintenir l’énergie. Il n’est pas nécessaire de manger davantage au premier trimestre, mais il peut être plus confortable de répartir les prises alimentaires si les nausées sont présentes.",
          "Buvez régulièrement, car une hydratation insuffisante peut augmenter la sensation de faiblesse ou les maux de tête.",
          "Ne prenez pas de fer, de vitamines ou de compléments alimentaires de votre propre initiative. Une supplémentation doit être adaptée à vos besoins et discutée avec le professionnel qui suit la grossesse."
        ]
      },
      {
        title: "Faut-il continuer une activité physique ?",
        paragraphs: [
          "En l’absence de contre-indication médicale, une activité physique régulière et modérée peut être poursuivie pendant la grossesse. Elle peut favoriser le bien-être, le sommeil et le maintien de la condition physique.",
          "Choisissez une intensité qui vous permet de parler pendant l’effort et augmentez progressivement si vous étiez peu active auparavant.",
          "Arrêtez l’activité et demandez un avis médical en cas de saignement, de douleur importante, de vertiges, de malaise, d’essoufflement inhabituel ou de douleur thoracique."
        ]
      },
      {
        title: "Quand la fatigue peut-elle avoir une autre cause ?",
        paragraphs: [
          "La fatigue est fréquente au premier trimestre, mais elle peut parfois être aggravée par une anémie, un trouble de la thyroïde, une infection, des vomissements importants, un manque de sommeil ou un problème de santé antérieur.",
          "Le suivi de grossesse comprend des examens destinés à repérer certaines causes, notamment une prise de sang au début de la grossesse. Des analyses complémentaires peuvent être proposées selon les symptômes.",
          "Parlez-en à une sage-femme ou à un médecin si la fatigue vous empêche d’assurer les activités essentielles, s’aggrave rapidement ou ne ressemble pas à votre fatigue habituelle."
        ],
        quote:
          "Une fatigue fréquente pendant la grossesse peut être normale, mais elle mérite tout de même d’être évoquée lorsqu’elle devient difficile à vivre."
      },
      {
        title: "Quand faut-il consulter rapidement ?",
        paragraphs: [
          "La fatigue est brutale, très intense, s’aggrave rapidement ou vous empêche de vous lever et d’accomplir les gestes essentiels du quotidien.",
          "Elle s’accompagne d’essoufflement au repos, de palpitations importantes, d’une douleur dans la poitrine, d’un malaise, de vertiges persistants ou d’une perte de connaissance.",
          "Vous avez également de la fièvre, des vomissements qui vous empêchent de boire, des saignements, une douleur importante, une pâleur marquée ou un état moral très dégradé."
        ],
        quote:
          "En cas de malaise, de douleur thoracique, de difficulté à respirer ou d’aggravation brutale, contactez rapidement les services d’urgence."
      },
      {
        title: "À retenir",
        paragraphs: [
          "Une fatigue importante est courante pendant le premier trimestre. Les hormones, l’adaptation de la circulation, les nausées et les changements du sommeil peuvent se cumuler.",
          "Accordez-vous davantage de repos, allégez temporairement votre rythme et parlez-en au professionnel qui suit votre grossesse si la fatigue est extrême, inhabituelle ou accompagnée d’autres symptômes."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Grossesse : premiers signes et déroulement",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/grossesse/grossesse-en-bonne-sante/grossesse/premiers-symptomes-grossesse"
      },
      {
        label: "1000 premiers jours — Les petits maux de la grossesse",
        url: "https://www.1000-premiers-jours.fr/fr/les-petits-maux-de-la-grossesse"
      },
      {
        label: "1000 premiers jours — L’activité physique pendant la grossesse",
        url: "https://www.1000-premiers-jours.fr/fr/lactivite-physique-pendant-la-grossesse"
      },
      {
        label: "NHS — Tiredness and sleep problems in pregnancy",
        url: "https://www.nhs.uk/pregnancy/common-symptoms/tiredness/"
      },
      {
        label: "ACOG — Routine Tests During Pregnancy",
        url: "https://www.acog.org/womens-health/faqs/routine-tests-during-pregnancy"
      },
      {
        label: "ACOG — Exercise During Pregnancy",
        url: "https://www.acog.org/womens-health/faqs/exercise-during-pregnancy"
      }
    ]
  },

  {
    slug: "douleurs-saignements-debut-grossesse-quand-consulter",
    title: "Douleurs et saignements en début de grossesse : quand consulter ?",
    description:
      "Comment réagir face à des douleurs ou des saignements au premier trimestre, reconnaître les signes d’urgence et comprendre les examens proposés.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Premier trimestre",
    subcategorySlug: "premier-trimestre",
    readingTime: "7 min",
    publishedAt: "2026-06-13",
    updatedAt: "2026-06-13",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Des douleurs légères ou de petits saignements peuvent survenir au début de la grossesse sans annoncer forcément une complication.",
          "Tout saignement ou toute douleur inhabituelle mérite néanmoins un avis médical, surtout si les symptômes persistent ou s’associent.",
          "Une douleur forte d’un seul côté, un saignement abondant, une douleur à l’épaule, des vertiges ou un malaise nécessitent une prise en charge urgente.",
          "Seuls un examen médical, une échographie et parfois des prises de sang peuvent déterminer la cause."
        ],
        quote:
          "Même lorsque les symptômes restent modérés, ne restez pas seule avec votre inquiétude : contactez une sage-femme, un médecin ou la maternité."
      },
      {
        title: "Les douleurs et les saignements sont-ils toujours inquiétants ?",
        paragraphs: [
          "Les douleurs du bas-ventre et les petits saignements sont relativement fréquents pendant les premières semaines. Ils ne signifient pas automatiquement que la grossesse s’interrompt.",
          "Une gêne légère, comparable à des tiraillements ou à des douleurs de règles, peut accompagner les changements de l’utérus. Un saignement léger peut également avoir plusieurs causes, notamment une irritation du col de l’utérus.",
          "Il est toutefois impossible de connaître la cause uniquement d’après la couleur du sang ou l’intensité ressentie. Une fausse couche ou une grossesse extra-utérine peuvent commencer par des signes discrets."
        ]
      },
      {
        title: "Les 3 éléments à observer",
        paragraphs: [
          "L’importance du saignement : repérez s’il s’agit de quelques traces, d’un flux comparable aux règles ou d’un saignement qui remplit rapidement une protection.",
          "La douleur : notez son intensité, sa durée, sa localisation et son évolution. Une douleur située surtout d’un côté ou qui s’aggrave doit être signalée rapidement.",
          "Les symptômes associés : surveillez l’apparition de vertiges, d’un malaise, d’une douleur à l’épaule, de fièvre, de pertes inhabituelles ou d’une grande faiblesse."
        ],
        quote:
          "Ces observations peuvent aider le professionnel de santé, mais elles ne remplacent pas un examen médical."
      },
      {
        title: "Que faire en attendant un avis médical ?",
        paragraphs: [
          "Contactez le professionnel qui suit votre grossesse, votre médecin, une sage-femme, un service de gynécologie ou votre maternité. Décrivez le terme estimé de la grossesse, la quantité de sang, la douleur et les autres symptômes.",
          "Utilisez une protection externe afin de pouvoir observer l’évolution du saignement. Évitez les tampons et les coupes menstruelles tant que la cause n’a pas été évaluée.",
          "Reposez-vous si vous en ressentez le besoin, mais ne retardez pas une consultation urgente pour tenter de voir si les symptômes disparaissent."
        ],
        bullets: [
          "Notez l’heure de début des symptômes.",
          "Observez la quantité et l’évolution du saignement.",
          "Repérez précisément l’emplacement de la douleur.",
          "Préparez la liste de vos traitements et de vos antécédents.",
          "Ne conduisez pas vous-même en cas de malaise ou de douleur intense."
        ]
      },
      {
        title: "Quels saignements doivent conduire à consulter ?",
        paragraphs: [
          "Tout saignement vaginal pendant une grossesse confirmée doit être signalé afin de recevoir un conseil adapté à votre situation.",
          "Un saignement léger sans douleur n’est pas nécessairement une urgence vitale, mais il justifie tout de même de contacter rapidement un professionnel.",
          "Un saignement abondant, rouge vif, accompagné de caillots, d’une douleur importante, d’une faiblesse ou d’un malaise nécessite une évaluation urgente."
        ]
      },
      {
        title: "Quelles douleurs doivent alerter ?",
        paragraphs: [
          "Une douleur légère et passagère peut avoir une cause bénigne. Une douleur persistante, qui augmente ou vous empêche de poursuivre vos activités doit en revanche être évaluée.",
          "Une douleur forte située surtout d’un côté du bas-ventre, associée ou non à des saignements peu abondants et foncés, peut évoquer une grossesse extra-utérine.",
          "Une douleur à l’extrémité de l’épaule, des vertiges, une sensation de faiblesse ou une perte de connaissance peuvent accompagner une hémorragie interne et constituent une urgence."
        ]
      },
      {
        title: "Qu’est-ce qu’une grossesse extra-utérine ?",
        paragraphs: [
          "Une grossesse extra-utérine se développe en dehors de la cavité de l’utérus, le plus souvent dans une trompe. Elle ne peut pas évoluer normalement.",
          "En grossissant, elle peut provoquer la rupture de la trompe et une hémorragie interne. Un diagnostic et un traitement précoces sont donc indispensables.",
          "Les symptômes peuvent être incomplets : douleur d’un seul côté, petits saignements foncés, malaise, douleur à l’épaule ou parfois peu de signes au début."
        ],
        quote:
          "Une douleur intense, un malaise ou une perte de connaissance impose d’appeler immédiatement les services d’urgence."
      },
      {
        title: "Ces symptômes annoncent-ils forcément une fausse couche ?",
        paragraphs: [
          "Non. De nombreuses grossesses continuent normalement après un épisode de douleur ou de saignement léger.",
          "Cependant, des saignements et des crampes peuvent aussi être les premiers signes d’une fausse couche. L’évolution des symptômes et les examens permettent d’établir le diagnostic.",
          "Une fausse couche n’est généralement pas provoquée par un effort ordinaire, une relation sexuelle ou une émotion. Elle résulte le plus souvent d’une anomalie qui empêche la grossesse de se développer normalement."
        ]
      },
      {
        title: "Quels examens peuvent être proposés ?",
        paragraphs: [
          "Le professionnel vous interroge sur le début des symptômes, vos antécédents, la date des dernières règles et l’évolution de la grossesse. Un examen clinique peut être réalisé.",
          "Une échographie, parfois par voie endovaginale, peut vérifier la localisation de la grossesse et rechercher une activité cardiaque lorsque le terme le permet.",
          "Une ou plusieurs prises de sang peuvent mesurer l’hormone bêta-hCG. Lorsque la grossesse est très précoce, il est parfois nécessaire de répéter les examens quelques jours plus tard avant de pouvoir conclure."
        ]
      },
      {
        title: "Quand faut-il consulter en urgence ?",
        paragraphs: [
          "Le saignement est abondant, augmente rapidement, imbibe plusieurs protections ou s’accompagne de gros caillots.",
          "La douleur est intense, brutale, persistante ou surtout située d’un seul côté ; vous ressentez aussi une douleur à l’épaule.",
          "Vous avez des vertiges, une faiblesse importante, un teint très pâle, des palpitations, un malaise, une perte de connaissance ou de la fièvre."
        ],
        quote:
          "En France, appelez le 15 ou le 112 en cas de saignement abondant, de douleur intense, de malaise ou de perte de connaissance."
      },
      {
        title: "À retenir",
        paragraphs: [
          "Des douleurs légères et de petits saignements peuvent survenir au premier trimestre sans que la grossesse soit interrompue. Ils doivent néanmoins être signalés pour obtenir un avis adapté.",
          "Un saignement abondant, une douleur forte ou unilatérale, une douleur à l’épaule, des vertiges ou un malaise nécessitent une consultation urgente afin d’écarter notamment une grossesse extra-utérine."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Saignements gynécologiques du premier trimestre de la grossesse",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/grossesse/difficultes-et-maladies-pendant-la-grossesse/saignements-gynecologiques-grossesse/saignements-gynecologiques-du-premier-trimestre-de-la-grossesse"
      },
      {
        label: "Assurance Maladie — Grossesse extra-utérine",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/grossesse/difficultes-et-maladies-pendant-la-grossesse/grossesse-extra-uterine"
      },
      {
        label: "Assurance Maladie — Fausse couche",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/grossesse/difficultes-et-maladies-pendant-la-grossesse/fausse-couche"
      },
      {
        label: "RCOG — Bleeding and/or pain in early pregnancy",
        url: "https://www.rcog.org.uk/for-the-public/browse-our-patient-information/bleeding-andor-pain-in-early-pregnancy/"
      },
      {
        label: "RCOG — Ectopic pregnancy",
        url: "https://www.rcog.org.uk/for-the-public/browse-our-patient-information/ectopic-pregnancy/"
      },
      {
        label: "NHS — Vaginal bleeding in pregnancy",
        url: "https://www.nhs.uk/pregnancy/common-symptoms/vaginal-bleeding/"
      }
    ]
  },

  {
    slug: "evolution-bebe-semaine-par-semaine-premier-trimestre",
    title: "L’évolution du bébé semaine par semaine pendant le premier trimestre",
    description:
      "Découvrez comment l’embryon puis le fœtus évoluent semaine après semaine pendant le premier trimestre, avec des comparaisons de taille simples et visuelles.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Premier trimestre",
    subcategorySlug: "premier-trimestre",
    readingTime: "9 min",
    publishedAt: "2026-06-13",
    updatedAt: "2026-06-13",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "En France, la grossesse est généralement datée en semaines d’aménorrhée, comptées depuis le premier jour des dernières règles.",
          "La fécondation survient habituellement autour de 2 SA, soit environ deux semaines avant le début réel du développement embryonnaire.",
          "Le cerveau, la moelle épinière, le cœur, les membres et les principaux organes commencent à se former pendant le premier trimestre.",
          "Les tailles et les comparaisons sont approximatives : quelques jours de différence sont fréquents et ne signifient pas que la grossesse évolue mal."
        ],
        quote:
          "Au premier trimestre, le futur bébé passe d’un minuscule groupe de cellules à un fœtus dont la tête, le tronc, les bras et les jambes sont déjà reconnaissables."
      },
      {
        title: "SA ou SG : comment comprendre les semaines ?",
        paragraphs: [
          "Les semaines d’aménorrhée, ou **SA**, sont comptées à partir du premier jour des dernières règles. C’est le repère le plus utilisé par les professionnels de santé en France.",
          "Les semaines de grossesse, ou **SG**, sont comptées à partir de la fécondation. Il existe donc habituellement un décalage d’environ deux semaines : 6 SA correspondent approximativement à 4 SG.",
          "Dans cet article, les étapes sont présentées en **semaines d’aménorrhée**. La datation donnée par l’échographie du premier trimestre reste plus précise que le calcul effectué à partir des dernières règles."
        ]
      },
      {
        title: "Les 3 grandes phases du premier trimestre",
        paragraphs: [
          "De 3 à 4 SA — Le tout début : la fécondation a lieu, les cellules se divisent et le blastocyste s’implante progressivement dans la paroi de l’utérus.",
          "De 5 à 10 SA — La période embryonnaire : le cerveau, la colonne vertébrale, le tissu cardiaque, le visage et les membres commencent à se former.",
          "De 11 à 13 SA — Le stade fœtal : les grandes structures sont présentes. Elles poursuivent leur croissance, leur différenciation et leur maturation."
        ],
        quote:
          "Les fruits et les graines servent uniquement de repères visuels : leur forme ne représente pas celle du futur bébé."
      },
      {
        title: "3 SA : la fécondation",
        paragraphs: [
          "À ce stade, l’ovule peut être fécondé par un spermatozoïde dans une trompe. La cellule obtenue commence rapidement à se diviser.",
          "Elle contient déjà les informations génétiques qui guideront le développement du futur bébé.",
          "Il est encore trop tôt pour parler d’embryon visible et aucun test de grossesse ne peut généralement confirmer la grossesse immédiatement."
        ],
        quote:
          "Comparaison visuelle : plus petit qu’un grain de poussière."
      },
      {
        title: "4 SA : l’implantation",
        paragraphs: [
          "Le petit groupe de cellules, appelé blastocyste, atteint l’utérus et commence à s’implanter dans sa muqueuse.",
          "Une partie de ses cellules formera l’embryon, tandis qu’une autre participera à la formation du placenta.",
          "L’hormone hCG commence à être produite. Elle pourra bientôt être détectée par un test de grossesse."
        ],
        quote:
          "Comparaison visuelle : une graine de pavot."
      },
      {
        title: "5 SA : les premières structures apparaissent",
        paragraphs: [
          "L’embryon est minuscule, mais son développement s’accélère. Les premières structures à l’origine du cerveau et de la moelle épinière se mettent en place.",
          "Le tissu qui formera le cœur commence également à se développer.",
          "Le sac gestationnel peut parfois commencer à être visible à l’échographie, selon le terme réel et le matériel utilisé."
        ],
        quote:
          "Comparaison visuelle : une graine de sésame."
      },
      {
        title: "6 SA : le cœur se développe",
        paragraphs: [
          "L’embryon présente une forme incurvée. Le tube neural poursuit sa fermeture et le cerveau se développe rapidement.",
          "Le tissu cardiaque commence à battre. Une activité cardiaque peut parfois être observée à l’échographie, mais son absence à ce terme très précoce ne permet pas toujours de conclure.",
          "Les premières ébauches des yeux, des oreilles et de certains organes commencent à apparaître."
        ],
        quote:
          "Comparaison visuelle : une lentille."
      },
      {
        title: "7 SA : les bourgeons des membres se forment",
        paragraphs: [
          "Le cerveau grandit plus vite que le reste du corps, ce qui explique la taille importante de la tête.",
          "Les bourgeons qui deviendront les bras et les jambes deviennent visibles.",
          "Le visage commence doucement à se dessiner, tandis que le cœur et les principaux organes poursuivent leur développement."
        ],
        quote:
          "Comparaison visuelle : un petit pois."
      },
      {
        title: "8 SA : le visage commence à se préciser",
        paragraphs: [
          "Les bras et les jambes s’allongent. Les mains et les pieds ressemblent encore à de petites palettes.",
          "Les paupières, le nez, la lèvre supérieure et les oreilles commencent à prendre forme.",
          "Le système nerveux, le cœur, les poumons, le foie et les reins poursuivent leur mise en place."
        ],
        quote:
          "Comparaison visuelle : une myrtille."
      },
      {
        title: "9 SA : les doigts et les orteils se dessinent",
        paragraphs: [
          "Les doigts et les orteils commencent à apparaître, même s’ils sont encore partiellement reliés.",
          "Les articulations des bras et des jambes se développent et de petits mouvements peuvent commencer.",
          "L’embryon mesure environ quelques centimètres de la tête aux fesses, mais les mesures varient selon les sources et la datation."
        ],
        quote:
          "Comparaison visuelle : une framboise."
      },
      {
        title: "10 SA : la fin de la période embryonnaire approche",
        paragraphs: [
          "Les principales structures du corps sont désormais en place, même si elles restent très immatures.",
          "Les doigts se séparent davantage, les bras peuvent se plier et le visage devient plus reconnaissable.",
          "Le cerveau poursuit un développement particulièrement rapide."
        ],
        quote:
          "Comparaison visuelle : une petite fraise."
      },
      {
        title: "11 SA : on parle désormais de fœtus",
        paragraphs: [
          "À partir de cette période, le terme **fœtus** remplace progressivement celui d’embryon.",
          "La tête reste très grande par rapport au corps. Les membres sont mieux formés et les petits mouvements deviennent plus nombreux.",
          "Les organes génitaux externes commencent à se différencier, mais ils ne sont généralement pas encore faciles à identifier à l’échographie."
        ],
        quote:
          "Comparaison visuelle : une figue."
      },
      {
        title: "12 SA : le corps s’allonge",
        paragraphs: [
          "Le fœtus bouge déjà, même si la femme enceinte ne peut pas encore ressentir ses mouvements.",
          "Les reins commencent à produire de l’urine et les intestins poursuivent leur développement.",
          "Les doigts et les orteils sont séparés. Les ongles commencent progressivement à se former."
        ],
        quote:
          "Comparaison visuelle : une prune."
      },
      {
        title: "13 SA : la fin du premier trimestre",
        paragraphs: [
          "Le visage devient plus harmonieux et les yeux se rapprochent progressivement de leur position définitive.",
          "Les os commencent à se renforcer, les muscles se développent et les mouvements gagnent en précision.",
          "À la fin du premier trimestre, le fœtus mesure environ plusieurs centimètres de la tête aux fesses. La mesure exacte dépend du terme et de chaque grossesse."
        ],
        quote:
          "Comparaison visuelle : un petit citron."
      },
      {
        title: "Que voit-on à l’échographie du premier trimestre ?",
        paragraphs: [
          "En France, l’échographie du premier trimestre est réalisée habituellement entre **11 SA et 13 SA + 6 jours**.",
          "Elle permet de vérifier la vitalité du fœtus, de préciser le nombre de fœtus et de dater la grossesse grâce à la mesure de la longueur cranio-caudale.",
          "Le professionnel examine également la morphologie précoce et mesure la clarté nucale dans le cadre du dépistage de certaines anomalies chromosomiques."
        ],
        quote:
          "L’image vue à l’échographie dépend du terme, de la position du fœtus et des conditions de l’examen."
      },
      {
        title: "À retenir",
        paragraphs: [
          "Pendant le premier trimestre, le futur bébé évolue à une vitesse remarquable : implantation, formation du cerveau et du cœur, apparition des membres, puis passage du stade embryonnaire au stade fœtal.",
          "Les graines et les fruits donnent un repère visuel amusant, mais les tailles restent approximatives. La datation et l’évaluation du développement reposent sur le suivi médical et l’échographie."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Grossesse : premiers signes et déroulement",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/grossesse/grossesse-en-bonne-sante/grossesse/premiers-symptomes-grossesse"
      },
      {
        label: "Assurance Maladie — Le programme de suivi et la première échographie",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/grossesse/grossesse-en-bonne-sante/grossesse/grossesse-soins-dentaires-dentiste-consultation"
      },
      {
        label: "NHS — Week-by-week guide to pregnancy",
        url: "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/"
      },
      {
        label: "ACOG — How Your Fetus Grows During Pregnancy",
        url: "https://www.acog.org/womens-health/faqs/how-your-fetus-grows-during-pregnancy"
      },
      {
        label: "ACOG — Changes During Pregnancy",
        url: "https://www.acog.org/womens-health/infographics/changes-during-pregnancy"
      }
    ]
  },
  {
    slug: "test-positif-premieres-demarches",
    title: "Test positif : quelles sont les premières démarches à faire ?",
    description:
      "Les premières étapes après un test de grossesse positif : rendez-vous, suivi médical, déclaration et précautions utiles.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Premier trimestre",
    subcategorySlug: "premier-trimestre",
    readingTime: "6 min",
    publishedAt: "2026-06-13",
    updatedAt: "2026-06-13",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Prenez rendez-vous avec une sage-femme, un médecin généraliste ou un gynécologue.",
          "Le premier examen prénatal doit avoir lieu avant la fin du troisième mois de grossesse.",
          "Faites vérifier vos médicaments et n’arrêtez jamais seule un traitement prescrit.",
          "Consultez rapidement en cas de douleur importante, de saignement abondant, de malaise ou de fièvre."
        ],
        quote:
          "Vous n’avez pas besoin de tout organiser le jour du test positif : commencez par prendre un rendez-vous et noter vos questions."
      },
      {
        title: "Faut-il confirmer le test par une prise de sang ?",
        paragraphs: [
          "Un test urinaire positif réalisé correctement est généralement fiable. Une prise de sang n’est pas systématiquement nécessaire pour confirmer une grossesse.",
          "Le professionnel peut toutefois prescrire un dosage de l’hormone bêta-hCG dans certaines situations, par exemple si la date de début de grossesse est incertaine, en cas de symptômes inhabituels ou dans le cadre d’un suivi particulier.",
          "Une échographie réalisée trop tôt peut ne rien montrer. Sa date doit être adaptée au terme estimé et à votre situation."
        ]
      },
      {
        title: "Les 3 premières démarches",
        paragraphs: [
          "Prendre rendez-vous : contactez une sage-femme, un médecin généraliste ou un gynécologue pour organiser le premier examen prénatal.",
          "Rassembler les informations utiles : date du premier jour des dernières règles, traitements, antécédents, groupe sanguin et documents médicaux disponibles.",
          "Adopter les précautions immédiates : éviter l’alcool, ne pas fumer, vérifier les médicaments et poursuivre la vitamine B9 si elle vous a été prescrite."
        ],
        quote:
          "Une sage-femme peut assurer le suivi d’une grossesse sans complication et vous orienter vers un médecin si nécessaire."
      },
      {
        title: "Quand prendre le premier rendez-vous ?",
        paragraphs: [
          "Prenez contact après le test positif afin d’obtenir un rendez-vous dans les semaines suivantes.",
          "Le premier examen prénatal obligatoire doit être réalisé avant la fin du troisième mois de grossesse.",
          "Il peut être assuré par une sage-femme, un médecin généraliste ou un gynécologue, selon votre choix et votre état de santé."
        ]
      },
      {
        title: "Que prépare-t-on pour cette première consultation ?",
        paragraphs: [
          "Notez la date du premier jour de vos dernières règles, même si vos cycles sont irréguliers.",
          "Préparez la liste complète de vos médicaments, compléments, plantes et huiles essentielles, avec leur dosage si possible.",
          "Apportez votre carte Vitale, votre carnet de santé, vos résultats récents et les comptes rendus importants si vous en avez."
        ],
        bullets: [
          "Date des dernières règles.",
          "Liste des traitements et compléments.",
          "Antécédents médicaux et grossesses précédentes.",
          "Groupe sanguin si vous le connaissez.",
          "Questions et symptômes à signaler."
        ]
      },
      {
        title: "Que vérifie le professionnel ?",
        paragraphs: [
          "Le professionnel confirme la grossesse, estime son début et recherche les éléments pouvant nécessiter un suivi adapté.",
          "Il fait le point sur vos antécédents, vos traitements, vos vaccinations, votre tension artérielle et les symptômes présents.",
          "Il prescrit les examens du début de grossesse et organise le calendrier des consultations et des échographies."
        ]
      },
      {
        title: "Quand déclarer la grossesse ?",
        paragraphs: [
          "La déclaration de grossesse doit être effectuée dans les trois premiers mois.",
          "Elle est le plus souvent transmise en ligne par le médecin ou la sage-femme à l’Assurance Maladie et à la Caf après le premier examen prénatal.",
          "Après son enregistrement, pensez à mettre à jour votre carte Vitale afin que les modalités de prise en charge soient appliquées."
        ]
      },
      {
        title: "Faut-il déjà choisir une maternité ?",
        paragraphs: [
          "Il n’est pas nécessaire d’avoir tout choisi immédiatement, mais il peut être utile de se renseigner tôt, surtout dans les zones où les maternités sont très demandées.",
          "Le choix dépend notamment de votre lieu de résidence, de vos souhaits, de votre état de santé et du niveau de soins dont vous pourriez avoir besoin.",
          "Le professionnel qui suit la grossesse peut vous aider à identifier une maternité adaptée."
        ]
      },
      {
        title: "Quels changements adopter dès maintenant ?",
        paragraphs: [
          "Arrêtez l’alcool et évitez le tabac ainsi que le tabagisme passif.",
          "Ne prenez aucun nouveau médicament, complément ou produit à base de plantes sans demander conseil.",
          "Respectez les précautions alimentaires contre la listériose et la toxoplasmose et lavez soigneusement les fruits et légumes.",
          "Une activité physique habituelle peut généralement être poursuivie si elle est bien tolérée et qu’aucune contre-indication ne vous a été donnée."
        ]
      },
      {
        title: "Que faire avec les médicaments habituels ?",
        paragraphs: [
          "N’arrêtez jamais seule un traitement prescrit, même si sa notice mentionne la grossesse.",
          "Contactez rapidement le prescripteur, le médecin, la sage-femme ou le pharmacien afin de vérifier s’il doit être poursuivi, adapté ou remplacé.",
          "Vous pouvez également consulter le **CRAT**, le **Centre de Référence sur les Agents Tératogènes**, pour obtenir des informations de référence sur l’utilisation d’une substance pendant la **grossesse** et l’**allaitement**."
        ]
      },
      {
        title: "Quelles émotions sont normales après le test ?",
        paragraphs: [
          "La joie peut se mêler à la peur, au doute, à la surprise ou à un sentiment d’irréalité.",
          "Il est fréquent de ne pas se sentir immédiatement heureuse ou prête à annoncer la grossesse.",
          "Parlez-en à une personne de confiance ou au professionnel qui vous suit si l’anxiété devient envahissante ou si vous vous sentez isolée."
        ]
      },
      {
        title: "Quand faut-il consulter rapidement ?",
        paragraphs: [
          "Demandez rapidement un avis en cas de saignement, de douleur pelvienne persistante ou de vomissements empêchant de boire.",
          "Une douleur intense d’un seul côté, un malaise, une douleur à l’épaule, un saignement abondant, une fièvre ou une difficulté à respirer nécessitent une évaluation urgente.",
          "En cas de doute important ou d’aggravation rapide, contactez les urgences ou le service qui vous suit."
        ],
        quote:
          "Une petite perte de sang n’annonce pas toujours une complication, mais elle mérite d’être signalée afin de recevoir un conseil adapté."
      },
      {
        title: "À retenir",
        paragraphs: [
          "Après un test positif, la priorité est de prendre rendez-vous et de faire vérifier vos traitements.",
          "Le premier examen prénatal et la déclaration de grossesse doivent être réalisés avant la fin du troisième mois.",
          "Vous pouvez avancer étape par étape : le professionnel vous aidera à organiser le suivi, les examens et les démarches administratives."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Grossesse : démarches et accompagnement",
        url: "https://www.ameli.fr/assure/droits-demarches/famille/maternite-paternite-adoption/grossesse"
      },
      {
        label: "Assurance Maladie — Grossesse : le programme de suivi et la première consultation",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/grossesse/grossesse-en-bonne-sante/grossesse/grossesse-soins-dentaires-dentiste-consultation"
      },
      {
        label: "Service-Public.fr — Déclaration de grossesse",
        url: "https://www.service-public.fr/particuliers/vosdroits/F968"
      },
      {
        label: "1000 premiers jours — La déclaration de grossesse",
        url: "https://www.1000-premiers-jours.fr/fr/la-declaration-de-grossesse"
      },
      {
        label: "1000 premiers jours — Le suivi médical de grossesse",
        url: "https://www.1000-premiers-jours.fr/fr/le-suivi-medical-de-grossesse"
      },
      {
        label: "ANSM — Médicaments et grossesse : les bons réflexes",
        url: "https://ansm.sante.fr/dossiers-thematiques/medicaments-et-grossesse/medicaments-et-grossesse-les-bons-reflexes"
      }
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
  },

  {
    slug: "evolution-bebe-semaine-par-semaine-deuxieme-trimestre",
    title: "L’évolution du bébé semaine par semaine pendant le deuxième trimestre",
    description:
      "Découvrez comment le bébé évolue semaine après semaine pendant le deuxième trimestre, avec des comparaisons visuelles simples et des repères clairs pour suivre sa croissance.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Deuxième trimestre",
    subcategorySlug: "deuxieme-trimestre",
    readingTime: "10 min",
    publishedAt: "2026-06-13",
    updatedAt: "2026-06-13",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Le deuxième trimestre s’étend globalement de **14 SA à 27 SA**.",
          "Pendant cette période, le bébé grandit beaucoup, bouge davantage et ses organes poursuivent leur maturation.",
          "L’échographie du deuxième trimestre, dite **échographie morphologique**, est un repère important du suivi.",
          "Les tailles et les comparaisons avec des fruits ou des légumes restent approximatives et peuvent varier selon les sources."
        ],
        quote:
          "Pendant le deuxième trimestre, le bébé change vite : ses mouvements deviennent plus coordonnés, ses traits se précisent et il prend progressivement plus de place dans l’utérus."
      },
      {
        title: "SA ou SG : comment comprendre les semaines du deuxième trimestre ?",
        paragraphs: [
          "En France, la grossesse est le plus souvent comptée en **semaines d’aménorrhée (SA)**, c’est-à-dire à partir du premier jour des dernières règles.",
          "Les **semaines de grossesse (SG)** commencent environ deux semaines plus tard, au moment de la fécondation. Il existe donc habituellement un décalage d’environ deux semaines entre SA et SG.",
          "Dans cet article, les étapes sont présentées en **SA**, car c’est le repère utilisé dans la majorité des consultations et du suivi médical.",
          "Les mesures et les comparaisons visuelles servent surtout de repères simples. Elles peuvent varier selon qu’on mesure le bébé de la tête aux fesses ou de la tête aux pieds."
        ]
      },
      {
        title: "Les 3 grandes évolutions du deuxième trimestre",
        paragraphs: [
          "De 14 à 18 SA — Le corps grandit vite : le cou s’allonge, les membres se développent, le squelette se consolide et les mouvements deviennent plus coordonnés.",
          "De 19 à 23 SA — Les sens et les organes poursuivent leur maturation : le bébé bouge davantage, avale du liquide amniotique et l’ouïe progresse.",
          "De 24 à 27 SA — Le bébé continue de prendre du poids. Les poumons, le cerveau et les rythmes veille-sommeil évoluent encore avant l’entrée dans le troisième trimestre."
        ],
        quote:
          "Les fruits et les légumes donnent simplement une image de la taille. Ils ne représentent pas la forme réelle du bébé."
      },
      {
        title: "14 SA : le visage s’affine",
        paragraphs: [
          "Le visage devient plus reconnaissable. Les yeux et les oreilles se rapprochent progressivement de leur position définitive.",
          "Le cou s’allonge, ce qui permet à la tête d’être un peu mieux dégagée du thorax.",
          "Le bébé bouge déjà, même si ces mouvements ne sont généralement pas encore ressentis."
        ],
        quote: "Comparaison visuelle : un citron."
      },
      {
        title: "15 SA : le corps se redresse",
        paragraphs: [
          "Le tronc s’allonge et le corps paraît un peu plus proportionné qu’au premier trimestre.",
          "Les bras et les jambes continuent de grandir, et les articulations gagnent en mobilité.",
          "La peau reste encore fine et translucide, car les réserves de graisse sont très limitées à ce stade."
        ],
        quote: "Comparaison visuelle : une pomme."
      },
      {
        title: "16 SA : les mouvements se coordonnent",
        paragraphs: [
          "Les muscles et les os poursuivent leur développement, ce qui rend les mouvements plus fluides.",
          "Le bébé peut plier les bras et les jambes, ouvrir la bouche et bouger la tête plus librement.",
          "Chez certaines personnes ayant déjà été enceintes, les premiers mouvements pourront bientôt être perçus."
        ],
        quote: "Comparaison visuelle : un avocat."
      },
      {
        title: "17 SA : le squelette se consolide",
        paragraphs: [
          "Les os continuent à s’ossifier progressivement, tandis que les muscles gagnent en tonicité.",
          "Le bébé remue davantage et ses gestes deviennent plus fréquents, même s’ils restent discrets.",
          "Une fine couche protectrice commence à se mettre en place sur la peau, qui reste toutefois très fragile."
        ],
        quote: "Comparaison visuelle : une poire."
      },
      {
        title: "18 SA : l’ouïe progresse",
        paragraphs: [
          "L’appareil auditif poursuit sa maturation. Le bébé commence peu à peu à percevoir certains sons étouffés venant de l’extérieur.",
          "Les traits du visage se précisent encore et les expressions deviennent plus variées.",
          "Les mouvements sont souvent plus nombreux, et certaines femmes enceintes commencent à les sentir plus clairement."
        ],
        quote: "Comparaison visuelle : un poivron."
      },
      {
        title: "19 SA : le bébé grandit rapidement",
        paragraphs: [
          "La croissance est soutenue pendant cette période, et le bébé prend de plus en plus de place dans l’utérus.",
          "Les membres sont bien individualisés et les mouvements des bras, des jambes et des mains se multiplient.",
          "La peau est encore fine, mais elle commence à être recouverte par du **vernix caseosa**, une substance protectrice."
        ],
        quote: "Comparaison visuelle : une mangue."
      },
      {
        title: "20 SA : la moitié de la grossesse approche",
        paragraphs: [
          "Autour de 20 SA, le bébé poursuit sa croissance et bouge activement plusieurs fois dans la journée.",
          "Les sourcils, les cils et de petits cheveux peuvent être visibles. Le visage est de mieux en mieux dessiné.",
          "Le bébé avale du liquide amniotique, ce qui participe au développement de son appareil digestif."
        ],
        quote: "Comparaison visuelle : une banane."
      },
      {
        title: "21 SA : les mouvements deviennent plus francs",
        paragraphs: [
          "Les gestes sont plus vigoureux et peuvent être ressentis plus régulièrement, surtout lors des moments calmes.",
          "Le bébé bouge ses bras, ses jambes, ses doigts et peut changer de position dans l’utérus.",
          "Le développement du système digestif et de la déglutition se poursuit."
        ],
        quote: "Comparaison visuelle : une carotte."
      },
      {
        title: "22 SA : le cerveau et les sens évoluent",
        paragraphs: [
          "Le cerveau poursuit sa croissance rapide, et les connexions nerveuses deviennent plus nombreuses.",
          "L’ouïe continue de progresser : le bébé peut réagir à certains sons, à la voix ou aux vibrations.",
          "Les mouvements respiratoires existent déjà sous forme d’entraînement, même si les poumons ne sont pas encore prêts à fonctionner seuls."
        ],
        quote: "Comparaison visuelle : une papaye."
      },
      {
        title: "23 SA : la peau se protège davantage",
        paragraphs: [
          "Le vernix caseosa recouvre davantage la peau et l’aide à se protéger du liquide amniotique.",
          "Le bébé continue à bouger, à avaler et à explorer son environnement avec des gestes de plus en plus variés.",
          "Le développement des poumons se poursuit, même si leur maturation reste encore incomplète."
        ],
        quote: "Comparaison visuelle : un pamplemousse."
      },
      {
        title: "24 SA : les poumons poursuivent leur maturation",
        paragraphs: [
          "Les voies respiratoires et les poumons continuent à se développer, étape importante pour la suite de la grossesse.",
          "Le bébé réagit parfois aux stimulations sonores ou tactiles par des mouvements plus nets.",
          "Il prend progressivement du poids, même si sa peau paraît encore fine et peu remplie."
        ],
        quote: "Comparaison visuelle : un épi de maïs."
      },
      {
        title: "25 SA : les rythmes veille-sommeil se dessinent",
        paragraphs: [
          "Le bébé alterne déjà des phases d’activité et de repos, même si elles ne correspondent pas forcément au rythme de la femme enceinte.",
          "Ses mouvements peuvent être perçus de manière plus régulière.",
          "Le cerveau, les poumons et le système nerveux poursuivent leur maturation de façon soutenue."
        ],
        quote: "Comparaison visuelle : un chou-fleur."
      },
      {
        title: "26 SA : les réactions aux sons se précisent",
        paragraphs: [
          "Le bébé entend mieux et peut réagir à certains sons familiers, notamment les voix et les bruits répétés.",
          "Les mouvements deviennent parfois plus puissants, car le tonus musculaire progresse.",
          "Le corps continue à se développer harmonieusement, tandis que les réserves de graisse restent encore modestes."
        ],
        quote: "Comparaison visuelle : une laitue."
      },
      {
        title: "27 SA : la fin du deuxième trimestre approche",
        paragraphs: [
          "Le bébé a beaucoup grandi depuis le début du trimestre et poursuit maintenant une phase importante de maturation.",
          "Le cerveau, les poumons, les sens et les rythmes d’activité continuent à évoluer avant le troisième trimestre.",
          "La croissance se poursuit, avec des mouvements bien présents et une prise de place de plus en plus importante dans l’utérus."
        ],
        quote: "Comparaison visuelle : un petit chou."
      },
      {
        title: "Que voit-on à l’échographie du deuxième trimestre ?",
        paragraphs: [
          "En France, l’échographie du deuxième trimestre, souvent appelée **échographie morphologique**, est généralement réalisée entre **22 SA et 24 SA**.",
          "Elle permet d’examiner la croissance du bébé, d’observer sa morphologie et de vérifier le développement de nombreux organes : cerveau, visage, colonne vertébrale, cœur, abdomen, reins, membres…",
          "Le professionnel évalue aussi la quantité de liquide amniotique, la position du placenta et différents repères utiles au suivi de la grossesse."
        ],
        quote:
          "Comme toujours, l’interprétation des images dépend du terme, de la position du bébé et des conditions de l’examen."
      },
      {
        title: "À retenir",
        paragraphs: [
          "Pendant le deuxième trimestre, le bébé grandit vite, bouge davantage et ses organes poursuivent leur maturation. Les sensations de mouvements deviennent souvent plus nettes au fil des semaines.",
          "Les comparaisons avec des fruits ou des légumes sont des repères visuels simples, mais seul le suivi médical permet d’apprécier précisément la croissance et le développement du bébé."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Votre suivi de grossesse",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/grossesse/grossesse-en-bonne-sante/grossesse/suivi-grossesse"
      },
      {
        label: "HAS — Suivi et orientation des femmes enceintes en fonction des situations à risque identifiées",
        url: "https://www.has-sante.fr/jcms/c_547976/fr/suivi-et-orientation-des-femmes-enceintes-en-fonction-des-situations-a-risque-identifiees"
      },
      {
        label: "NHS — Week-by-week guide to pregnancy",
        url: "https://www.nhs.uk/best-start-in-life/pregnancy/week-by-week-guide-to-pregnancy/"
      },
      {
        label: "ACOG — How Your Fetus Grows During Pregnancy",
        url: "https://www.acog.org/womens-health/faqs/how-your-fetus-grows-during-pregnancy"
      },
      {
        label: "CNGOF — Suivi d’une grossesse normale",
        url: "https://www.cngof.fr/"
      }
    ]
  },

  {
    slug: "evolution-bebe-semaine-par-semaine-troisieme-trimestre",
    title: "L’évolution du bébé semaine par semaine pendant le troisième trimestre",
    description:
      "Découvrez comment le bébé évolue semaine après semaine pendant le troisième trimestre, avec des comparaisons visuelles simples et des repères clairs pour suivre sa croissance.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Troisième trimestre",
    subcategorySlug: "troisieme-trimestre",
    readingTime: "10 min",
    publishedAt: "2026-06-13",
    updatedAt: "2026-06-13",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Le troisième trimestre s’étend globalement de **28 SA à 40 SA**.",
          "Pendant cette période, le bébé prend surtout du poids, ses organes poursuivent leur maturation et il se prépare progressivement à la naissance.",
          "Le suivi médical du troisième trimestre permet de surveiller la croissance, la position du bébé et le bon déroulement de la fin de grossesse.",
          "Les tailles et les comparaisons avec des fruits ou des légumes restent approximatives et peuvent varier selon les sources."
        ],
        quote:
          "Au troisième trimestre, le bébé grandit encore beaucoup, bouge différemment par manque de place et se prépare peu à peu à la naissance."
      },
      {
        title: "SA ou SG : comment comprendre les semaines du troisième trimestre ?",
        paragraphs: [
          "En France, la grossesse est le plus souvent comptée en **semaines d’aménorrhée (SA)**, c’est-à-dire à partir du premier jour des dernières règles.",
          "Les **semaines de grossesse (SG)** commencent environ deux semaines plus tard, au moment de la fécondation. Il existe donc habituellement un décalage d’environ deux semaines entre SA et SG.",
          "Dans cet article, les étapes sont présentées en **SA**, car c’est le repère utilisé dans la majorité des consultations et du suivi médical.",
          "Les mesures et les comparaisons visuelles servent surtout de repères simples. Elles peuvent varier selon les sources et selon la façon dont la taille du bébé est mesurée."
        ]
      },
      {
        title: "Les 3 grandes évolutions du troisième trimestre",
        paragraphs: [
          "De 28 à 31 SA — Le bébé poursuit une croissance rapide. Le cerveau, les poumons et le système nerveux continuent à mûrir, tandis que le corps commence à s’arrondir davantage.",
          "De 32 à 35 SA — Les réserves de graisse augmentent, les mouvements restent bien présents mais l’espace se réduit peu à peu dans l’utérus.",
          "De 36 à 40 SA — Le bébé finalise ses derniers ajustements : la position pour la naissance se stabilise souvent, les organes sont prêts à fonctionner hors de l’utérus et le terme approche."
        ],
        quote:
          "Les fruits et les légumes donnent simplement une image de la taille. Ils ne représentent pas la forme réelle du bébé."
      },
      {
        title: "28 SA : le troisième trimestre commence",
        paragraphs: [
          "Le cerveau poursuit activement sa maturation et les connexions nerveuses se multiplient encore.",
          "Les yeux peuvent s’ouvrir et se fermer, et le bébé réagit de plus en plus aux stimulations sonores et lumineuses.",
          "Les mouvements restent bien présents, même s’ils changent progressivement à mesure que la place diminue."
        ],
        quote: "Comparaison visuelle : une aubergine."
      },
      {
        title: "29 SA : le bébé prend encore du poids",
        paragraphs: [
          "Les réserves de graisse augmentent peu à peu, ce qui aide le corps du bébé à mieux réguler sa température après la naissance.",
          "Les mouvements respiratoires d’entraînement se poursuivent, même si les poumons ne sont pas encore tout à fait arrivés à maturité.",
          "Le bébé bouge toujours bien, avec des coups, des roulades ou des étirements souvent perceptibles."
        ],
        quote: "Comparaison visuelle : une courge butternut."
      },
      {
        title: "30 SA : les rythmes s’affinent",
        paragraphs: [
          "Les phases de sommeil et d’éveil deviennent plus organisées.",
          "Le cerveau, les sens et la coordination motrice continuent à progresser semaine après semaine.",
          "La peau paraît un peu moins fripée à mesure que les réserves graisseuses augmentent."
        ],
        quote: "Comparaison visuelle : un chou vert."
      },
      {
        title: "31 SA : le corps s’arrondit progressivement",
        paragraphs: [
          "Le bébé continue à prendre du poids et son corps devient plus rond.",
          "Les poumons poursuivent leur maturation et se préparent à la respiration après la naissance.",
          "L’espace devient un peu plus restreint, mais les mouvements restent généralement bien perceptibles."
        ],
        quote: "Comparaison visuelle : une noix de coco."
      },
      {
        title: "32 SA : la croissance reste soutenue",
        paragraphs: [
          "Le bébé grandit encore nettement et prend de plus en plus de place dans l’utérus.",
          "Sa position se précise parfois déjà, même si elle peut encore évoluer au cours des semaines suivantes.",
          "Le système nerveux et les organes poursuivent leur maturation pour la fin de grossesse."
        ],
        quote: "Comparaison visuelle : un ananas."
      },
      {
        title: "33 SA : le bébé prend de plus en plus de place",
        paragraphs: [
          "Les os continuent à se solidifier, même si les os du crâne restent plus souples pour faciliter l’accouchement.",
          "Les mouvements sont toujours présents, mais ils peuvent être ressentis différemment car l’espace disponible diminue.",
          "Le transfert d’anticorps maternels se poursuit, ce qui participe à la protection du bébé après la naissance."
        ],
        quote: "Comparaison visuelle : une laitue romaine."
      },
      {
        title: "34 SA : les derniers ajustements se poursuivent",
        paragraphs: [
          "Les poumons approchent progressivement de leur maturité fonctionnelle.",
          "Les réflexes de succion et de déglutition continuent à s’améliorer en vue de l’alimentation après la naissance.",
          "Le bébé paraît de plus en plus potelé à mesure que les réserves de graisse augmentent."
        ],
        quote: "Comparaison visuelle : un melon cantaloup."
      },
      {
        title: "35 SA : le bébé continue à se préparer à la naissance",
        paragraphs: [
          "L’ouïe est bien développée et le bébé reconnaît souvent les sons familiers, comme certaines voix.",
          "Il dispose de moins de place pour bouger, mais ses mouvements doivent rester ressentis régulièrement.",
          "Les organes poursuivent leurs derniers ajustements avant le terme."
        ],
        quote: "Comparaison visuelle : un melon jaune."
      },
      {
        title: "36 SA : le corps devient plus dodu",
        paragraphs: [
          "La peau devient plus lisse et le corps plus arrondi grâce aux réserves de graisse accumulées.",
          "La tête se place souvent vers le bas à ce stade, même si ce n’est pas encore le cas pour tous les bébés.",
          "Les fonctions de succion, de déglutition et de respiration d’entraînement sont bien avancées."
        ],
        quote: "Comparaison visuelle : une papaye."
      },
      {
        title: "37 SA : le bébé approche du terme",
        paragraphs: [
          "Le bébé continue de grandir et d’affiner encore ses dernières fonctions.",
          "Sa position dans le bassin peut devenir plus stable à l’approche de la naissance.",
          "Les mouvements restent importants à surveiller, même si leur sensation peut être un peu différente en fin de grossesse."
        ],
        quote: "Comparaison visuelle : une citrouille."
      },
      {
        title: "38 SA : les organes sont prêts à fonctionner dehors",
        paragraphs: [
          "Les organes sont globalement prêts pour la vie extra-utérine, même si chaque bébé garde son propre rythme de maturation.",
          "Le lanugo est souvent beaucoup moins présent, tandis que le vernix peut encore protéger la peau.",
          "Le bébé accumule encore un peu de poids et d’énergie avant la naissance."
        ],
        quote: "Comparaison visuelle : une pastèque."
      },
      {
        title: "39 SA : la naissance peut survenir à tout moment",
        paragraphs: [
          "Le bébé est très proche de sa taille et de son poids de naissance.",
          "Les réflexes utiles après la naissance, comme la succion, sont bien en place.",
          "Le corps continue de se préparer, mais la naissance peut désormais survenir à tout moment."
        ],
        quote: "Comparaison visuelle : un poireau."
      },
      {
        title: "40 SA : le terme est atteint ou tout proche",
        paragraphs: [
          "Le terme estimé est atteint ou très proche, même si tous les bébés ne naissent pas exactement ce jour-là.",
          "La taille, le poids et l’aspect du bébé peuvent varier sensiblement d’un enfant à l’autre à ce stade.",
          "Le suivi médical permet d’accompagner la fin de grossesse et d’évaluer la suite si le travail ne commence pas spontanément."
        ],
        quote: "Comparaison visuelle : un céleri-rave."
      },
      {
        title: "L’échographie et le suivi du troisième trimestre",
        paragraphs: [
          "Au troisième trimestre, le suivi permet de vérifier la croissance du bébé, sa position, la quantité de liquide amniotique et le bon déroulement de la fin de grossesse.",
          "En France, une **échographie du troisième trimestre** est habituellement réalisée autour de **32 SA**, sauf adaptation particulière du suivi par l’équipe médicale.",
          "En fin de grossesse, d’autres rendez-vous peuvent aussi aborder les mouvements du bébé, la préparation à la naissance, le dépistage du streptocoque B et la conduite à tenir si le terme est dépassé."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Le troisième trimestre correspond à une phase de croissance, de prise de poids et de maturation importante.",
          "Les mouvements du bébé restent un repère précieux tout au long de cette période, même s’ils changent avec le manque de place.",
          "Les comparaisons avec des fruits et des légumes sont utiles pour visualiser la taille, mais elles restent approximatives."
        ]
      }
    ],
    sources: [
      { label: "Inserm — Le développement embryonnaire et fœtal", url: "https://www.inserm.fr/" },
      { label: "HAS — Suivi et orientation des femmes enceintes en fonction des situations à risque identifiées", url: "https://www.has-sante.fr/" },
      { label: "CNGOF — Recommandations pour le suivi de grossesse", url: "https://www.cngof.fr/" }
    ]
  },

  {
    slug: "emotions-inquietudes-premier-trimestre-est-ce-normal",
    title: "Émotions et inquiétudes du premier trimestre : est-ce normal ?",
    description:
      "Joie, peur, doutes, irritabilité ou impression d’irréalité : comprendre les émotions fréquentes du premier trimestre et savoir quand demander de l’aide.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Premier trimestre",
    subcategorySlug: "premier-trimestre",
    readingTime: "7 min",
    publishedAt: "2026-06-13",
    updatedAt: "2026-06-13",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Ressentir de la joie, de la peur, de l’irritabilité ou des doutes au début de la grossesse est fréquent.",
          "Une grossesse désirée peut malgré tout provoquer de l’ambivalence et des inquiétudes.",
          "La fatigue, les symptômes physiques, les changements hormonaux et le contexte personnel peuvent influencer l’humeur.",
          "Parlez-en à une sage-femme ou à un médecin si l’anxiété devient envahissante, durable ou perturbe votre quotidien."
        ],
        quote:
          "Il n’existe pas une seule bonne manière de vivre le début d’une grossesse. Des émotions contradictoires peuvent coexister."
      },
      {
        title: "Pourquoi le premier trimestre peut-il être émotionnellement intense ?",
        paragraphs: [
          "Le début de la grossesse entraîne de nombreux changements, parfois avant même que le ventre ne soit visible.",
          "La fatigue, les nausées, les douleurs, les troubles du sommeil ou l’incertitude liée aux premiers examens peuvent rendre cette période plus difficile à vivre.",
          "Les variations hormonales peuvent influencer l’humeur, mais elles n’expliquent pas tout. L’histoire personnelle, les conditions de vie, le parcours pour obtenir la grossesse et le soutien de l’entourage jouent également un rôle."
        ]
      },
      {
        title: "Quelles émotions sont fréquentes au début de la grossesse ?",
        paragraphs: [
          "Les émotions peuvent changer rapidement : joie, inquiétude, irritabilité ou tristesse peuvent se succéder d’un jour à l’autre, parfois même au cours d’une seule journée.",
          "Des sentiments contradictoires peuvent coexister. Il est possible d’être heureuse d’être enceinte tout en ressentant de la peur, des doutes ou une impression d’irréalité.",
          "La fatigue, les nausées, les troubles du sommeil et les autres symptômes du premier trimestre peuvent rendre plus sensible et amplifier certaines émotions."
        ],
        quote:
          "L’ambivalence signifie que des émotions opposées peuvent être présentes en même temps. Elle est fréquente pendant la grossesse."
      },
      {
        title: "Peut-on être inquiète même lorsque la grossesse était désirée ?",
        paragraphs: [
          "Oui. Désirer un enfant ne protège pas des peurs ni des questionnements.",
          "La grossesse rend concret un changement de vie important. Des inquiétudes peuvent apparaître concernant la santé du bébé, le couple, le travail, les finances, l’accouchement ou l’organisation familiale.",
          "Certaines femmes ne ressentent pas immédiatement de lien particulier avec le futur bébé. Cela ne permet pas de prévoir la relation qui se construira par la suite."
        ]
      },
      {
        title: "La peur de la fausse couche est-elle normale ?",
        paragraphs: [
          "La peur de perdre la grossesse est fréquente au cours du premier trimestre, notamment avant la première échographie.",
          "Elle peut être plus intense après une précédente fausse couche, un parcours de procréation médicalement assistée ou lorsque des symptômes apparaissent ou diminuent.",
          "Analyser chaque sensation ou rechercher sans cesse des témoignages peut rassurer brièvement, mais aussi entretenir l’anxiété. En cas de symptôme inhabituel ou de doute médical, contactez le professionnel qui suit la grossesse."
        ]
      },
      {
        title: "Est-il normal de ne pas être heureuse tout le temps ?",
        paragraphs: [
          "Oui. La grossesse est souvent présentée comme une période uniquement heureuse, ce qui peut créer une pression supplémentaire.",
          "Il est possible d’être heureuse d’attendre un enfant tout en trouvant le premier trimestre difficile. La fatigue, les nausées, les contraintes du quotidien ou les inquiétudes peuvent prendre beaucoup de place.",
          "Ressentir de la tristesse, de l’agacement ou de l’ambivalence ne signifie pas que vous rejetez votre bébé."
        ],
        quote:
          "Vous n’avez pas besoin de vous sentir heureuse à chaque instant pour être une future mère attentive."
      },
      {
        title: "Comment apaiser les inquiétudes du quotidien ?",
        paragraphs: [
          "L’objectif n’est pas de supprimer toutes les inquiétudes, mais d’éviter qu’elles occupent toute la place."
        ],
        bullets: [
          "Parler de ses peurs à une personne de confiance.",
          "Noter ses questions avant les consultations.",
          "Demander des informations au médecin ou à la sage-femme.",
          "Limiter les témoignages anxiogènes et les recherches répétées.",
          "Se reposer autant que possible.",
          "Pratiquer une activité douce compatible avec la grossesse.",
          "Essayer la respiration, la relaxation ou la méditation.",
          "Accepter de demander de l’aide dans le quotidien."
        ]
      },
      {
        title: "Faut-il parler de ses émotions pendant le suivi de grossesse ?",
        paragraphs: [
          "Oui. La santé psychique fait pleinement partie du suivi de grossesse.",
          "Le médecin ou la sage-femme peut écouter vos difficultés, repérer des signes d’anxiété ou de dépression et vous orienter vers un accompagnement adapté.",
          "L’entretien prénatal précoce est également un moment prévu pour parler de vos besoins, de vos inquiétudes et des conditions dans lesquelles vous vivez la grossesse.",
          "Il n’est pas nécessaire d’attendre d’aller très mal pour demander de l’aide."
        ]
      },
      {
        title: "Quand les inquiétudes doivent-elles conduire à consulter ?",
        paragraphs: [
          "Parlez-en rapidement à un professionnel si votre état émotionnel devient difficile à supporter ou perturbe votre quotidien."
        ],
        bullets: [
          "L’angoisse est présente presque toute la journée.",
          "Les pensées inquiétantes sont difficiles à contrôler.",
          "Le sommeil est fortement perturbé par les ruminations.",
          "Les crises d’angoisse se répètent.",
          "Les activités habituelles deviennent difficiles.",
          "La tristesse ou la perte d’intérêt persiste.",
          "Vous vous isolez de plus en plus.",
          "Des pensées très sombres ou des idées de vous faire du mal apparaissent."
        ],
        quote:
          "En cas d’idées suicidaires, de peur de passer à l’acte ou de danger immédiat, contactez sans attendre les urgences ou un professionnel de santé."
      },
      {
        title: "Quel accompagnement peut être proposé ?",
        paragraphs: [
          "Selon vos besoins, le professionnel peut proposer des consultations plus rapprochées, un suivi avec une sage-femme, un psychologue ou une équipe spécialisée en psychiatrie périnatale.",
          "Des techniques de gestion du stress, de relaxation ou un traitement médical peuvent également être envisagés lorsque les symptômes sont importants.",
          "Si vous prenez déjà un traitement contre l’anxiété ou la dépression, ne l’arrêtez pas et ne le modifiez pas seule. Parlez-en rapidement au professionnel qui vous suit."
        ]
      },
      {
        title: "Comment l’entourage peut-il aider ?",
        paragraphs: [
          "L’entourage n’a pas besoin de trouver une solution à chaque inquiétude. Écouter sans minimiser est souvent déjà très utile.",
          "Des phrases comme « tu devrais être heureuse » ou « ne stresse pas » peuvent augmenter la culpabilité.",
          "Il est généralement plus aidant de demander ce dont la personne a besoin, de proposer une aide concrète et de l’encourager à parler à un professionnel si elle se sent dépassée."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Les émotions changeantes et les inquiétudes sont fréquentes pendant le premier trimestre.",
          "Elles peuvent être liées aux transformations physiques, à la fatigue, à l’incertitude et aux nombreux changements associés à l’arrivée d’un enfant.",
          "Lorsqu’elles deviennent envahissantes, durables ou provoquent une véritable souffrance, en parler à une sage-femme ou à un médecin est une démarche normale et utile."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Grossesse : bouleversement émotionnel, anxiété et dépression",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/grossesse/difficultes-et-maladies-pendant-la-grossesse/grossesse-sante-psychique/troubles-psychiques-grossesse"
      },
      {
        label: "Assurance Maladie — Anxiété, baby-blues, dépression : comment être aidée pendant et après sa grossesse ?",
        url: "https://www.ameli.fr/assure/sante/devenir-parent/grossesse/difficultes-et-maladies-pendant-la-grossesse/grossesse-sante-psychique/anxiete-baby-blues-depression-etre-aidee-pendant-et-apres-sa-grossesse"
      },
      {
        label: "1000 premiers jours — Les émotions pendant la grossesse",
        url: "https://www.1000-premiers-jours.fr/fr/les-emotions-pendant-la-grossesse"
      },
      {
        label: "1000 premiers jours — Comment gérer le stress pendant la grossesse ?",
        url: "https://www.1000-premiers-jours.fr/fr/comment-gerer-le-stress-pendant-la-grossesse"
      },
      {
        label: "Haute Autorité de santé — Accompagnement médico-psycho-social pendant la grossesse et en postnatal",
        url: "https://www.has-sante.fr/jcms/p_3492567/fr/accompagnement-medico-psycho-social-des-femmes-des-parents-et-de-leur-enfant-en-situation-de-vulnerabilite-pendant-la-grossesse-et-en-postnatal-recommandations"
      }
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
