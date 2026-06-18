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
    slug: "comment-preparer-son-projet-de-naissance",
    title: "Comment préparer son projet de naissance ?",
    description:
      "Un guide simple pour rédiger un projet de naissance utile, clair et souple : ce qu’il peut contenir, comment le présenter à l’équipe et pourquoi il doit rester adaptable le jour de l’accouchement.",
    category: "Accouchement",
    categorySlug: "accouchement",
    subcategory: "Préparation",
    subcategorySlug: "preparation",
    readingTime: "9 min",
    publishedAt: "2026-06-18",
    updatedAt: "2026-06-18",
    tone: "sand",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Un projet de naissance sert surtout à ouvrir le dialogue avec l’équipe qui vous accompagnera le jour de l’accouchement.",
          "Il peut préciser vos souhaits pour l’ambiance, la mobilité, la gestion de la douleur, la présence de l’accompagnant, la naissance et les premiers moments avec le bébé.",
          "Il doit rester court, clair et réaliste : une page suffit souvent.",
          "Le projet n’est pas un contrat : certaines décisions peuvent changer selon votre état, celui du bébé ou l’évolution du travail.",
          "Le plus utile est d’en parler avant le jour J avec une sage-femme, un médecin ou l’équipe de la maternité."
        ],
        quote:
          "Un bon projet de naissance n’est pas une liste figée : c’est un support pour expliquer ce qui compte pour vous."
      },
      {
        title: "À quoi sert un projet de naissance ?",
        paragraphs: [
          "Le projet de naissance permet de mettre par écrit vos souhaits, vos priorités et vos questions pour l’accouchement.",
          "Il aide aussi l’équipe à mieux comprendre ce qui vous rassure, ce qui vous inquiète et ce que vous aimeriez éviter lorsque c’est possible.",
          "Il peut être très simple : quelques phrases suffisent parfois pour exprimer l’ambiance souhaitée, la place de l’accompagnant ou vos préférences concernant les premiers soins du bébé.",
          "L’objectif n’est pas de tout contrôler, mais de préparer un échange plus serein avec les professionnels."
        ]
      },
      {
        title: "À quel moment le préparer ?",
        paragraphs: [
          "Vous pouvez commencer à y réfléchir au deuxième trimestre, puis le préciser au troisième trimestre.",
          "Il est utile d’attendre d’avoir quelques informations sur votre maternité, les possibilités proposées sur place et votre situation médicale.",
          "L’idéal est d’en parler pendant une consultation, un rendez-vous avec une sage-femme ou une séance de préparation à la naissance.",
          "Évitez de le découvrir ou de le transmettre pour la première fois le jour de l’accouchement, sauf si vous n’avez pas pu faire autrement."
        ]
      },
      {
        title: "Les 3 questions à se poser avant d’écrire",
        paragraphs: [
          "Qu’est-ce qui me rassure pendant un moment intense : silence, explications, présence de mon partenaire, lumière douce, mobilité ?",
          "Qu’est-ce que je souhaite comprendre ou anticiper : péridurale, déclenchement, césarienne, monitoring, épisiotomie, premiers soins ?",
          "Quelles sont mes priorités si tout ne se passe pas comme prévu : être informée, avoir mon accompagnant près de moi, garder un contact avec le bébé dès que possible ?"
        ],
        quote:
          "Le projet devient plus utile quand il parle de vos priorités, pas seulement d’une situation idéale."
      },
      {
        title: "Que peut-on mettre dans un projet de naissance ?",
        bullets: [
          "Vos souhaits concernant l’ambiance : lumière, bruit, musique, intimité.",
          "Votre besoin d’explications avant les gestes médicaux, lorsque la situation le permet.",
          "La place de la personne accompagnante.",
          "Votre souhait de bouger, changer de position ou utiliser un ballon si c’est possible.",
          "Vos préférences pour la gestion de la douleur.",
          "Vos souhaits pour la poussée et les positions d’accouchement.",
          "Vos préférences pour le peau à peau, le clampage du cordon ou les premiers soins du bébé.",
          "Vos souhaits en cas de césarienne ou de séparation temporaire avec le bébé."
        ],
        paragraphs: [
          "Tout ne sera pas forcément possible partout, ni dans toutes les situations.",
          "Mais écrire ces points permet de poser les bonnes questions avant l’accouchement."
        ]
      },
      {
        title: "Ce qu’il vaut mieux éviter",
        bullets: [
          "Un document trop long que l’équipe n’aura pas le temps de lire.",
          "Des formulations très fermées qui ne laissent aucune place à l’imprévu.",
          "Des demandes qui ne tiennent pas compte de la sécurité de la mère ou du bébé.",
          "Des informations trouvées en ligne sans les confronter aux pratiques de votre maternité.",
          "Une liste de refus sans expliquer ce qui vous rassurerait à la place."
        ],
        paragraphs: [
          "Un ton simple et ouvert facilite le dialogue.",
          "Vous pouvez écrire vos souhaits fermement tout en laissant de la place aux explications médicales si la situation change."
        ]
      },
      {
        title: "Comment formuler ses souhaits simplement ?",
        paragraphs: [
          "Privilégiez les phrases courtes.",
          "Par exemple : « J’aimerais être informée avant les gestes médicaux, lorsque l’urgence le permet. »",
          "Ou encore : « Si une césarienne est nécessaire, j’aimerais que mon accompagnant puisse rester avec moi si l’organisation et la sécurité le permettent. »",
          "Les formulations comme « si possible », « si la situation le permet » ou « j’aimerais en discuter » rendent le document plus souple sans enlever vos préférences."
        ]
      },
      {
        title: "Parler de la douleur sans se mettre de pression",
        paragraphs: [
          "Vous pouvez indiquer si vous souhaitez essayer des méthodes non médicamenteuses : respiration, mobilité, ballon, bain ou douche si la maternité le permet.",
          "Vous pouvez aussi écrire que vous souhaitez une péridurale, ou que vous aimeriez garder la possibilité de changer d’avis.",
          "Il n’y a pas de bonne façon unique d’accoucher.",
          "Le plus important est de connaître vos options et de vous sentir respectée dans les limites de la sécurité médicale."
        ]
      },
      {
        title: "Prévoir le rôle de la personne accompagnante",
        paragraphs: [
          "Le projet de naissance peut préciser la place que vous souhaitez donner à votre accompagnant.",
          "Cette personne peut vous aider à respirer, vous masser, vous encourager, poser une question ou rappeler vos préférences si vous êtes très concentrée.",
          "Elle peut aussi être le lien avec l’équipe si vous avez besoin d’explications.",
          "Il est utile d’en parler ensemble avant le jour J pour éviter qu’elle découvre son rôle au dernier moment."
        ]
      },
      {
        title: "Et si l’accouchement ne se passe pas comme prévu ?",
        paragraphs: [
          "Un accouchement peut évoluer différemment de ce qui était imaginé : travail très rapide, fatigue importante, déclenchement, besoin d’un geste médical, césarienne ou surveillance renforcée.",
          "Votre projet peut donc inclure une phrase sur vos priorités en cas d’imprévu.",
          "Par exemple : « Si la situation change, j’aimerais que l’on m’explique ce qui se passe et que mon accompagnant soit associé autant que possible. »",
          "Cette partie est souvent l’une des plus utiles, car elle aide à préserver un sentiment de participation même lorsque le plan initial change."
        ]
      },
      {
        title: "Peut-on parler de césarienne dans le projet ?",
        paragraphs: [
          "Oui, même si vous prévoyez un accouchement par voie basse.",
          "Vous pouvez exprimer vos souhaits si une césarienne devient nécessaire : présence de l’accompagnant, informations pendant l’intervention, peau à peau dès que possible, premier contact avec le bébé ou relais avec l’autre parent.",
          "Certaines demandes dépendent de l’urgence, du bloc opératoire, de l’anesthésie et de l’état de santé du bébé.",
          "Les aborder en amont permet de mieux comprendre ce qui est possible dans votre maternité."
        ]
      },
      {
        title: "Les premiers moments avec le bébé",
        paragraphs: [
          "Vous pouvez préciser vos souhaits pour le peau à peau, la première tétée ou le premier biberon, le moment des soins et la présence de l’accompagnant.",
          "Là encore, la priorité reste l’état de santé de la mère et du bébé.",
          "Si des soins rapides sont nécessaires, l’équipe peut vous expliquer ce qui se passe et favoriser le contact dès que possible.",
          "Cette partie peut être courte mais importante, car elle concerne souvent un moment très attendu."
        ]
      },
      {
        title: "Faut-il l’imprimer ou l’envoyer avant ?",
        paragraphs: [
          "Vous pouvez en garder une version papier dans votre dossier de maternité.",
          "Certaines maternités acceptent de le lire pendant une consultation ou de le noter dans le dossier, mais cela dépend de l’organisation locale.",
          "Le jour de l’accouchement, donnez-le simplement à la sage-femme qui vous accueille.",
          "Une page lisible, avec les points essentiels en haut, sera plus facile à utiliser qu’un document très détaillé."
        ]
      },
      {
        title: "Comment en parler sans avoir peur de déranger ?",
        paragraphs: [
          "Le projet de naissance peut parfois donner l’impression de « demander trop ».",
          "En réalité, il s’agit surtout d’un outil de communication.",
          "Vous pouvez le présenter ainsi : « J’ai noté quelques souhaits et questions pour mieux me préparer, est-ce qu’on peut les regarder ensemble ? »",
          "Cette approche ouvre la discussion et permet à l’équipe de vous dire ce qui est possible, habituel ou à adapter."
        ]
      },
      {
        title: "Exemple de structure simple",
        bullets: [
          "Mes priorités : être informée, me sentir respectée, garder mon accompagnant près de moi.",
          "Pendant le travail : pouvoir bouger si possible, avoir une ambiance calme, recevoir des explications.",
          "Pour la douleur : connaître mes options et pouvoir changer d’avis.",
          "Au moment de la naissance : favoriser le peau à peau si l’état du bébé le permet.",
          "En cas d’imprévu : être informée clairement et garder un contact avec mon bébé dès que possible."
        ],
        paragraphs: [
          "Ce modèle peut être adapté selon vos souhaits, votre maternité et votre situation médicale.",
          "Il n’a pas besoin d’être parfait pour être utile."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Un projet de naissance sert à préparer le dialogue, pas à figer l’accouchement.",
          "Il doit rester court, clair et souple.",
          "Les sujets les plus utiles sont l’ambiance, les explications, la douleur, la place de l’accompagnant, les premiers moments avec le bébé et les imprévus.",
          "Il est préférable de le relire avec une sage-femme ou un professionnel de la maternité avant le jour J.",
          "Même si tout ne se passe pas comme prévu, vos besoins d’information, de respect et d’accompagnement restent importants."
        ]
      }
    ],
    sources: [
      {
        label: "Haute Autorité de santé — Comment mieux informer les femmes enceintes ?",
        url: "https://www.has-sante.fr/jcms/c_547976/fr/comment-mieux-informer-les-femmes-enceintes"
      },
      {
        label: "Assurance Maladie — Suivi médical de la grossesse",
        url: "https://www.ameli.fr/assure/sante/themes/grossesse/grossesse-en-bonne-sante/suivi-medical-grossesse"
      },
      {
        label: "1000 premiers jours — Préparer l’arrivée de bébé",
        url: "https://www.1000-premiers-jours.fr/"
      },
      {
        label: "Organisation mondiale de la santé — Intrapartum care for a positive childbirth experience",
        url: "https://www.who.int/publications/i/item/9789241550215"
      }
    ]
  },

{
    slug: "preparation-a-la-naissance-quelles-methodes-choisir",
    title: "Préparation à la naissance : quelles méthodes choisir ?",
    description:
      "Classique, sophrologie, yoga prénatal, hypnose, chant prénatal ou préparation en piscine : comment choisir une méthode de préparation à la naissance adaptée à ses besoins.",
    category: "Accouchement",
    categorySlug: "accouchement",
    subcategory: "Préparation",
    subcategorySlug: "preparation",
    readingTime: "10 min",
    publishedAt: "2026-06-18",
    updatedAt: "2026-06-18",
    tone: "sand",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "La préparation à la naissance aide à comprendre le déroulement de la fin de grossesse, du travail, de l’accouchement et des premiers jours avec le bébé.",
          "Il n’existe pas une seule bonne méthode : le bon choix dépend de vos besoins, de votre santé, de votre personnalité et des possibilités près de chez vous.",
          "La préparation classique avec une sage-femme reste une base très utile pour poser les questions médicales et pratiques.",
          "Des approches comme le yoga prénatal, la sophrologie, l’hypnose ou la piscine peuvent compléter cette préparation, surtout pour respirer, bouger et gérer le stress.",
          "Demandez toujours si la méthode est adaptée à votre grossesse, surtout en cas de grossesse à risque, contractions, douleurs importantes ou consignes de repos."
        ],
        quote:
          "La meilleure préparation est celle qui vous aide à vous sentir informée, soutenue et plus confiante, sans vous mettre la pression."
      },
      {
        title: "À quoi sert la préparation à la naissance ?",
        paragraphs: [
          "La préparation à la naissance permet d’aborder concrètement ce qui peut se passer avant, pendant et juste après l’accouchement.",
          "Elle aide à comprendre les contractions, le départ à la maternité, les examens, la péridurale, la poussée, la césarienne, les premiers soins du bébé et le retour à la maison.",
          "Elle permet aussi de parler des émotions, des inquiétudes, du rôle de l’accompagnant et de la période post-partum.",
          "L’objectif n’est pas de réussir un accouchement parfait, mais de mieux connaître ses options et de savoir à qui poser ses questions."
        ]
      },
      {
        title: "Quand commencer ?",
        paragraphs: [
          "Vous pouvez vous renseigner dès le deuxième trimestre, puis commencer les séances selon les disponibilités de la sage-femme, de la maternité ou de la structure choisie.",
          "Beaucoup de femmes commencent au cours du deuxième trimestre ou au début du troisième.",
          "Il est préférable de ne pas attendre les toutes dernières semaines, car les places peuvent être limitées et la fatigue peut rendre les déplacements plus difficiles.",
          "Si vous avez déjà accouché, vous pouvez aussi choisir une préparation plus ciblée : projet de naissance, gestion de la douleur, césarienne, allaitement, retour à la maison ou vécu d’un précédent accouchement."
        ]
      },
      {
        title: "La préparation classique avec une sage-femme",
        paragraphs: [
          "C’est souvent la préparation la plus complète pour comprendre le déroulement médical et pratique de l’accouchement.",
          "Elle peut aborder le travail, les contractions, la péridurale, le monitoring, les positions, les gestes possibles, la naissance, l’allaitement ou le biberon, et les suites de couches.",
          "Elle est particulièrement utile si vous avez besoin d’informations claires, de repères concrets et d’un espace pour poser toutes vos questions.",
          "Elle peut se faire en individuel, en couple ou en groupe selon les professionnels et les lieux."
        ],
        quote:
          "Même si vous choisissez une méthode complémentaire, garder un temps avec une sage-femme permet de vérifier les informations médicales essentielles."
      },
      {
        title: "La sophrologie",
        paragraphs: [
          "La sophrologie associe respiration, relaxation, visualisation positive et exercices de conscience du corps.",
          "Elle peut aider à mieux gérer le stress, les peurs, les tensions et l’anticipation de l’accouchement.",
          "Elle convient souvent aux personnes qui ont besoin d’un cadre calme, progressif et rassurant.",
          "Elle ne remplace pas les informations pratiques sur le déroulement médical de l’accouchement, mais elle peut être un bon complément."
        ]
      },
      {
        title: "Le yoga prénatal",
        paragraphs: [
          "Le yoga prénatal propose des postures adaptées à la grossesse, des respirations et des temps de détente.",
          "Il peut aider à bouger en douceur, relâcher certaines tensions, prendre conscience du bassin et améliorer le confort corporel.",
          "Il doit être adapté à la grossesse et encadré par une personne formée.",
          "En cas de douleurs importantes, saignements, contractions régulières, menace d’accouchement prématuré ou consigne médicale de repos, demandez un avis avant de pratiquer."
        ]
      },
      {
        title: "L’hypnose ou autohypnose",
        paragraphs: [
          "L’hypnose ou l’autohypnose vise à apprendre à se détendre, se concentrer et utiliser des images mentales ou des suggestions pour traverser les sensations du travail.",
          "Elle peut convenir aux personnes qui souhaitent développer des outils de concentration et de gestion de la peur.",
          "Elle demande souvent un peu d’entraînement avant le jour J.",
          "Comme les autres méthodes, elle n’empêche pas de demander une péridurale ou une aide médicale si vous en ressentez le besoin."
        ]
      },
      {
        title: "La préparation en piscine",
        paragraphs: [
          "La préparation en piscine permet de bouger plus facilement grâce à l’eau.",
          "Elle peut soulager les sensations de lourdeur, favoriser la détente et travailler la respiration dans un cadre doux.",
          "Elle peut être intéressante si vous aimez l’eau et si votre grossesse ne présente pas de contre-indication.",
          "Renseignez-vous sur l’encadrement, la température de l’eau, l’hygiène du lieu et les situations où la pratique doit être évitée."
        ]
      },
      {
        title: "Le chant prénatal",
        paragraphs: [
          "Le chant prénatal utilise la voix, la respiration, les vibrations et la posture.",
          "Il peut aider à relâcher le corps, travailler le souffle et créer un moment de lien avec le bébé.",
          "Il peut aussi être utile aux personnes qui aiment les approches sensibles, corporelles et créatives.",
          "Il ne convient pas forcément à tout le monde, et ce n’est pas un problème : l’important est de choisir une méthode dans laquelle vous vous sentez à l’aise."
        ]
      },
      {
        title: "L’haptonomie",
        paragraphs: [
          "L’haptonomie est centrée sur le toucher, la présence et la relation entre les parents et le bébé pendant la grossesse.",
          "Elle peut être vécue comme un temps de lien et de préparation en couple.",
          "Elle demande souvent de commencer assez tôt, car les séances s’inscrivent dans une continuité.",
          "Elle peut être intéressante si vous souhaitez impliquer fortement la personne accompagnante dans la grossesse et l’arrivée du bébé."
        ]
      },
      {
        title: "Les ateliers allaitement, biberon et post-partum",
        paragraphs: [
          "Certaines préparations se concentrent sur les premiers jours : alimentation du bébé, sommeil, pleurs, soins, cicatrisation, fatigue et organisation du retour à la maison.",
          "Ces ateliers sont très utiles, car beaucoup de parents préparent l’accouchement mais moins l’après.",
          "Vous pouvez choisir un atelier allaitement même si vous n’êtes pas encore sûre de votre choix.",
          "L’objectif est d’avoir des informations fiables, pas de vous imposer une façon de faire."
        ]
      },
      {
        title: "Comment choisir la bonne méthode ?",
        paragraphs: [
          "Commencez par identifier ce dont vous avez le plus besoin.",
          "Si vous avez besoin d’informations concrètes, une préparation avec une sage-femme est souvent la base la plus utile.",
          "Si vous avez surtout peur de la douleur ou de perdre vos moyens, la sophrologie, l’hypnose ou la respiration peuvent vous aider.",
          "Si vous avez besoin de bouger, le yoga prénatal ou la piscine peuvent être intéressants.",
          "Si vous souhaitez inclure fortement votre partenaire, l’haptonomie ou des séances en couple peuvent être adaptées."
        ]
      },
      {
        title: "Peut-on mélanger plusieurs approches ?",
        paragraphs: [
          "Oui, c’est même fréquent.",
          "Vous pouvez suivre une préparation classique pour les informations essentielles, puis ajouter quelques séances de yoga prénatal, sophrologie, hypnose ou piscine.",
          "L’essentiel est de ne pas surcharger votre agenda.",
          "Une préparation qui épuise ou ajoute de la pression perd son intérêt."
        ]
      },
      {
        title: "Et si on a peur d’accoucher ?",
        paragraphs: [
          "La peur de l’accouchement est fréquente et mérite d’être entendue.",
          "La préparation peut aider à comprendre ce qui vous inquiète : douleur, perte de contrôle, antécédent difficile, peur pour le bébé, césarienne, examens ou séjour à la maternité.",
          "Si la peur devient très envahissante, parlez-en à une sage-femme, un médecin ou un professionnel formé au soutien psychologique périnatal.",
          "Demander de l’aide tôt permet souvent d’éviter de rester seule avec ses inquiétudes."
        ]
      },
      {
        title: "Quel rôle pour la personne accompagnante ?",
        paragraphs: [
          "La préparation à la naissance peut aider l’accompagnant à trouver sa place.",
          "Il peut apprendre comment soutenir, masser, encourager, aider à respirer, poser une question ou rappeler vos souhaits si vous êtes concentrée sur les contractions.",
          "L’accompagnant n’a pas besoin d’être parfait ni de tout savoir.",
          "Son rôle principal est souvent d’être une présence stable et rassurante."
        ]
      },
      {
        title: "Les questions à poser avant de s’inscrire",
        bullets: [
          "Qui anime les séances ?",
          "La personne est-elle formée à la grossesse et à la naissance ?",
          "Les séances sont-elles individuelles, en couple ou en groupe ?",
          "La méthode est-elle adaptée à mon terme et à ma situation médicale ?",
          "Quels sujets sont abordés concrètement ?",
          "Est-ce compatible avec un projet de péridurale, de césarienne ou d’accouchement physiologique ?",
          "Combien de séances sont prévues et à quel rythme ?",
          "Quels sont les tarifs et les possibilités de prise en charge ?"
        ]
      },
      {
        title: "Quand demander un avis médical avant une activité ?",
        paragraphs: [
          "Demandez conseil avant une méthode corporelle ou physique si vous avez des contractions régulières, des saignements, une menace d’accouchement prématuré, une douleur importante, un placenta bas inséré ou une consigne de repos.",
          "Faites aussi le point si vous avez une grossesse multiple, une hypertension, un diabète gestationnel compliqué ou une pathologie suivie.",
          "La plupart du temps, il existe des adaptations possibles.",
          "Mais la méthode choisie doit toujours rester compatible avec votre sécurité et celle du bébé."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "La préparation à la naissance sert à vous informer, vous rassurer et vous donner des outils concrets pour le jour J.",
          "La préparation classique avec une sage-femme est une base très utile, surtout pour comprendre le déroulement de l’accouchement.",
          "Sophrologie, yoga prénatal, hypnose, piscine, chant prénatal ou haptonomie peuvent compléter selon vos besoins.",
          "Le bon choix est celui qui vous correspond, pas celui qui semble le plus tendance.",
          "En cas de grossesse à risque ou de symptôme inhabituel, demandez toujours un avis avant de pratiquer une activité."
        ]
      }
    ],
    sources: [
      {
        label: "Haute Autorité de santé — Comment mieux informer les femmes enceintes ?",
        url: "https://www.has-sante.fr/jcms/c_547976/fr/comment-mieux-informer-les-femmes-enceintes"
      },
      {
        label: "Assurance Maladie — Suivi médical de la grossesse",
        url: "https://www.ameli.fr/assure/sante/themes/grossesse/grossesse-en-bonne-sante/suivi-medical-grossesse"
      },
      {
        label: "1000 premiers jours — Grossesse et préparation à l’arrivée du bébé",
        url: "https://www.1000-premiers-jours.fr/"
      },
      {
        label: "Organisation mondiale de la santé — Intrapartum care for a positive childbirth experience",
        url: "https://www.who.int/publications/i/item/9789241550215"
      }
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
  },


  {
    slug: "quand-annoncer-grossesse-proches-employeur",
    title: "Quand annoncer sa grossesse à ses proches et à son employeur ?",
    description:
      "Il n’existe pas de date idéale pour annoncer une grossesse. Découvrez comment choisir le bon moment avec vos proches et quelles règles s’appliquent pour l’employeur.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Premier trimestre",
    subcategorySlug: "premier-trimestre",
    readingTime: "7 min",
    publishedAt: "2026-06-14",
    updatedAt: "2026-06-14",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Il n’existe aucune règle imposant d’attendre la fin du premier trimestre pour annoncer une grossesse à ses proches.",
          "Vous pouvez prévenir quelques personnes de confiance très tôt et attendre davantage pour une annonce plus large.",
          "Une salariée n’est pas obligée d’informer immédiatement son employeur de sa grossesse.",
          "Informer l’employeur permet toutefois de bénéficier concrètement des droits liés à la grossesse, notamment pour les examens médicaux et certains aménagements.",
          "La déclaration à l’Assurance Maladie et à la Caf est une démarche distincte : elle doit être réalisée avant la fin du troisième mois de grossesse."
        ],
        quote:
          "Le bon moment est celui qui correspond à votre besoin de soutien, à votre situation personnelle et à vos conditions de travail."
      },
      {
        title: "Comment choisir le bon moment pour l’annoncer ?",
        paragraphs: [
          "Demandez-vous quelles personnes vous aimeriez avoir près de vous, quelle que soit la suite de la grossesse.",
          "Tenez compte de votre besoin de préserver votre intimité ou, au contraire, d’être soutenue dès les premières semaines.",
          "Au travail, réfléchissez aux contraintes de votre poste et aux droits dont vous pourriez avoir besoin rapidement."
        ]
      },
      {
        title: "Faut-il attendre la fin du premier trimestre pour l’annoncer à ses proches ?",
        paragraphs: [
          "Non. Attendre la première échographie ou la fin du premier trimestre est une habitude fréquente, mais ce n’est ni une obligation ni une recommandation médicale générale.",
          "Certaines personnes préfèrent patienter avant une annonce large parce que le risque de fausse couche est plus important au début de la grossesse. D’autres choisissent d’en parler tôt à quelques proches afin de ne pas traverser seules cette période.",
          "Une solution intermédiaire consiste à distinguer le cercle de confiance, informé rapidement, du reste de l’entourage, prévenu plus tard."
        ],
        quote:
          "Vous pouvez annoncer la grossesse à des moments différents selon les personnes. Il n’est pas nécessaire d’organiser une seule annonce pour tout le monde."
      },
      {
        title: "À qui peut-on en parler en premier ?",
        paragraphs: [
          "Vous pouvez commencer par les personnes auprès desquelles vous vous sentez en sécurité : partenaire, parents, frère ou sœur, amie proche ou autre personne de confiance.",
          "Posez-vous une question simple : si vous aviez besoin de soutien, aimeriez-vous que cette personne soit au courant ?",
          "Vous avez aussi le droit de ne prévenir personne immédiatement. Garder la nouvelle pour vous pendant quelque temps peut vous permettre de réaliser ce qui se passe et de choisir vos mots sans pression."
        ]
      },
      {
        title: "Comment annoncer la grossesse si l’on craint des réactions difficiles ?",
        paragraphs: [
          "Une grossesse peut susciter des réactions inattendues. Vous pouvez choisir un moment calme, annoncer la nouvelle de manière simple et préciser ce dont vous avez besoin.",
          "Si vous ne souhaitez pas recevoir de conseils ou de questions, vous pouvez le dire clairement : « Nous sommes heureux de vous l’annoncer, mais nous préférons garder certains détails pour nous pour le moment. »",
          "En cas de relation conflictuelle ou de crainte pour votre sécurité, privilégiez un lieu sûr, la présence d’une personne de confiance ou une annonce à distance."
        ]
      },
      {
        title: "Quand faut-il prévenir son employeur ?",
        paragraphs: [
          "Dans le secteur privé, une salariée n’a pas l’obligation d’informer son employeur dès le début de sa grossesse. Elle peut le faire au moment qu’elle choisit.",
          "Elle doit néanmoins l’informer avant son départ en congé maternité. Pour bénéficier des droits liés à la grossesse dans l’entreprise, il est nécessaire que l’employeur en ait connaissance.",
          "Dans la fonction publique, une agente titulaire ou contractuelle n’est pas non plus obligée d’annoncer immédiatement sa grossesse à son administration, mais celle-ci doit être informée avant le congé maternité."
        ],
        quote:
          "Il n’existe donc pas de date légale unique pour prévenir son employeur pendant le premier trimestre."
      },
      {
        title: "Pourquoi peut-il être utile de l’annoncer assez tôt au travail ?",
        paragraphs: [
          "Informer l’employeur permet de justifier les absences autorisées pour les examens médicaux obligatoires liés à la grossesse.",
          "Cela peut également être nécessaire pour demander un aménagement du poste, un changement temporaire d’affectation, une adaptation en cas de travail de nuit ou l’application de dispositions prévues par la convention collective.",
          "Si votre poste comporte des charges lourdes, des produits dangereux, des horaires difficiles ou un autre risque particulier, parlez-en rapidement au médecin ou à la sage-femme et au service de prévention et de santé au travail."
        ]
      },
      {
        title: "Comment informer son employeur ?",
        paragraphs: [
          "L’annonce peut être faite oralement ou par écrit. Dans la pratique, un écrit permet de conserver une preuve de la date à laquelle l’employeur a été informé.",
          "Vous pouvez demander un rendez-vous avec votre responsable ou les ressources humaines, puis confirmer l’échange par un courrier ou un courriel accompagné d’un certificat médical indiquant la grossesse et la date présumée de l’accouchement.",
          "Vous n’avez pas à partager les détails médicaux de votre grossesse. Seules les informations nécessaires à l’organisation du travail et à l’exercice de vos droits doivent être communiquées."
        ]
      },
      {
        title: "Peut-on attendre après la période d’essai ou un recrutement ?",
        paragraphs: [
          "Une candidate à un emploi n’est pas obligée de révéler sa grossesse pendant un entretien de recrutement. L’employeur ne peut pas écarter une candidature en raison d’une grossesse.",
          "Une salariée peut donc choisir le moment de l’annonce en fonction de sa situation. Toutefois, si elle a besoin d’un aménagement, d’absences autorisées ou d’une protection liée à son état, elle doit pouvoir justifier sa grossesse auprès de l’employeur.",
          "En cas de doute sur une discrimination, il est possible de demander conseil à l’inspection du travail, à un représentant du personnel, à un syndicat ou au Défenseur des droits."
        ]
      },
      {
        title: "La déclaration de grossesse à la Caf et à l’Assurance Maladie est-elle la même chose ?",
        paragraphs: [
          "Non. L’annonce aux proches et à l’employeur est distincte de la déclaration administrative de grossesse.",
          "Après la première consultation prénatale, le médecin ou la sage-femme déclare généralement la grossesse en ligne à la caisse d’Assurance Maladie et à la Caf.",
          "Cette déclaration doit être réalisée avant la fin du troisième mois de grossesse afin de permettre la mise en place du suivi et des droits associés."
        ]
      },
      {
        title: "Exemples de formulations simples",
        bullets: [
          "À un proche : « J’ai une nouvelle importante à te partager : je suis enceinte. C’est encore le début et j’aimerais que cela reste entre nous pour le moment. »",
          "À son responsable : « Je souhaite vous informer de ma grossesse. Je vous transmettrai le certificat médical et les dates prévisionnelles dès que possible. »",
          "Aux ressources humaines : « Je vous informe de mon état de grossesse afin de connaître les démarches internes et les éventuels aménagements prévus. »",
          "Pour poser une limite : « Nous sommes heureux de vous l’annoncer, mais nous ne souhaitons pas encore répondre à beaucoup de questions. »"
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Il n’existe pas de moment universellement idéal pour annoncer une grossesse. Vous pouvez adapter l’annonce à chaque personne et à votre besoin de soutien.",
          "Au travail, l’annonce n’est pas obligatoire dès le premier trimestre, mais elle devient utile dès que vous souhaitez bénéficier des droits et aménagements liés à la grossesse.",
          "La déclaration à l’Assurance Maladie et à la Caf doit, quant à elle, être réalisée avant la fin du troisième mois de grossesse."
        ]
      }
    ],
    sources: [
      {
        label: "Service-Public.fr — Une salariée enceinte est-elle obligée de révéler sa grossesse à son employeur ?",
        url: "https://www.service-public.fr/particuliers/vosdroits/F1144"
      },
      {
        label: "Service-Public.fr — Déclaration de grossesse",
        url: "https://www.service-public.fr/particuliers/vosdroits/F968"
      },
      {
        label: "Assurance Maladie — Grossesse : démarches et accompagnement",
        url: "https://www.ameli.fr/assure/droits-demarches/famille/maternite-paternite-adoption/grossesse"
      },
      {
        label: "Service-Public.fr — Une salariée enceinte peut-elle bénéficier d’un aménagement de son poste de travail ?",
        url: "https://www.service-public.fr/particuliers/vosdroits/F2775"
      },
      {
        label: "Service-Public.fr — Une fonctionnaire ou une contractuelle enceinte doit-elle informer son administration ?",
        url: "https://www.service-public.fr/particuliers/vosdroits/F39477"
      }
    ]
  },

  {
    slug: "quand-commence-t-on-a-sentir-le-bebe-bouger",
    title: "Quand commence-t-on à sentir le bébé bouger ?",
    description:
      "Les premiers mouvements du bébé sont souvent ressentis entre 16 et 24 semaines de grossesse. Découvrez à quoi ils ressemblent et quand demander conseil.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Deuxième trimestre",
    subcategorySlug: "deuxieme-trimestre",
    readingTime: "6 min",
    publishedAt: "2026-06-14",
    updatedAt: "2026-06-14",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Les premiers mouvements sont généralement ressentis entre 16 et 24 semaines de grossesse.",
          "Lors d’une première grossesse, ils sont souvent identifiés un peu plus tard.",
          "Au début, les sensations peuvent ressembler à des bulles, des frôlements ou de petits papillons.",
          "Un placenta placé à l’avant de l’utérus peut rendre les mouvements moins faciles à percevoir.",
          "Si vous n’avez encore rien senti à 24 semaines, parlez-en à votre sage-femme ou à votre médecin."
        ],
        quote:
          "Il n’existe pas une semaine précise à laquelle toutes les femmes enceintes doivent sentir leur bébé. Chaque grossesse évolue à son propre rythme."
      },
      {
        title: "À quel moment ressent-on généralement les premiers mouvements ?",
        paragraphs: [
          "Le bébé commence à bouger bien avant que ses mouvements soient perceptibles. Ils peuvent d’ailleurs être observés lors des échographies du premier trimestre, alors que vous ne les ressentez pas encore.",
          "Les premières sensations sont le plus souvent perçues au cours du deuxième trimestre, généralement entre 16 et 24 semaines de grossesse.",
          "Lors d’une première grossesse, il est fréquent de ne reconnaître les mouvements qu’autour de 20 semaines, parfois un peu plus tard. Lorsque vous avez déjà été enceinte, vous pouvez les identifier plus tôt, car vous connaissez davantage ces sensations."
        ]
      },
      {
        title: "À quoi ressemblent les premiers mouvements ?",
        paragraphs: [
          "Les premiers mouvements ne ressemblent pas toujours à de véritables coups de pied. Ils sont souvent très légers et irréguliers.",
          "Au début, il est normal d’hésiter entre les mouvements du bébé et ceux de la digestion.",
          "En avançant dans la grossesse, les sensations deviennent généralement plus nettes, plus fortes et plus faciles à reconnaître."
        ],
        bullets: [
          "De petites bulles dans le ventre.",
          "Des frôlements ou des vibrations.",
          "Une impression de papillons.",
          "De légers tapotements.",
          "Une sensation proche des mouvements intestinaux."
        ],
        quote:
          "Les premiers mouvements peuvent être si discrets que vous ne réalisez qu’après plusieurs jours qu’il s’agissait bien de votre bébé."
      },
      {
        title: "Pourquoi certaines femmes les ressentent-elles plus tôt que d’autres ?",
        paragraphs: [
          "Le moment où les mouvements sont ressentis dépend de nombreux facteurs. Cela ne signifie pas qu’une grossesse se développe mieux ou moins bien qu’une autre.",
          "Vous pouvez les percevoir plus tôt si vous avez déjà été enceinte et si vous reconnaissez plus facilement les premières sensations.",
          "La position du placenta joue aussi un rôle. Lorsqu’il est placé à l’avant de l’utérus, entre le bébé et la paroi abdominale, il peut amortir une partie des mouvements. Vous pouvez alors les ressentir plus tard ou de manière moins nette.",
          "La position du bébé, ses périodes d’activité et votre propre attention aux sensations peuvent également influencer ce que vous percevez."
        ]
      },
      {
        title: "Est-il normal de ne pas sentir le bébé tous les jours au début ?",
        paragraphs: [
          "Oui. Pendant les premières semaines, les mouvements peuvent rester irréguliers. Le bébé est encore petit, dispose de beaucoup d’espace et certains de ses mouvements ne sont pas dirigés vers la paroi de l’utérus.",
          "Vous pouvez donc le sentir un jour, puis ne rien remarquer pendant quelque temps. Un rythme personnel devient progressivement plus identifiable à mesure que la grossesse avance.",
          "Il n’est généralement pas nécessaire de compter les mouvements dès leur apparition. L’important est surtout d’apprendre progressivement à reconnaître les habitudes de votre bébé."
        ]
      },
      {
        title: "Quand le ou la partenaire peut-il sentir le bébé ?",
        paragraphs: [
          "Les mouvements sont d’abord perçus uniquement par la femme enceinte. Il faut souvent attendre qu’ils deviennent plus forts pour qu’une autre personne puisse les sentir en posant une main sur le ventre.",
          "Cela arrive généralement quelques semaines après les premières sensations. Le moment varie selon la position du bébé, celle du placenta et l’intensité de ses mouvements.",
          "Il est fréquent que le bébé cesse justement de bouger lorsque quelqu’un pose la main sur le ventre. Cela ne signifie pas qu’il réagit négativement : ses périodes d’activité restent encore imprévisibles."
        ]
      },
      {
        title: "Quand faut-il demander un avis médical ?",
        paragraphs: [
          "Parlez-en à votre sage-femme ou à votre médecin si vous n’avez encore jamais senti votre bébé bouger à 24 semaines de grossesse. Un contrôle pourra être proposé pour vérifier que tout va bien et vous rassurer.",
          "Lorsque vous avez commencé à reconnaître les habitudes de votre bébé, contactez rapidement la maternité ou le professionnel qui suit votre grossesse si ses mouvements diminuent nettement, si vous ne le sentez plus bouger comme d’habitude ou si son rythme vous semble inhabituel.",
          "N’attendez pas le rendez-vous suivant et ne restez pas seule avec votre inquiétude. Vous ne dérangez jamais en demandant un avis concernant les mouvements de votre bébé."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Les premiers mouvements sont le plus souvent ressentis entre 16 et 24 semaines de grossesse. Ils peuvent d’abord ressembler à des bulles, des frôlements ou de petits tapotements.",
          "Le moment où vous les percevez dépend notamment du nombre de grossesses précédentes et de la position du placenta. Ne vous comparez pas aux autres femmes enceintes : chaque grossesse possède son propre rythme.",
          "Si vous n’avez encore rien senti à 24 semaines, ou si les mouvements diminuent après avoir été régulièrement perçus, demandez rapidement conseil à un professionnel de santé."
        ]
      }
    ],
    sources: [
      {
        label: "NHS — Your baby's movements",
        url: "https://www.nhs.uk/pregnancy/keeping-well/your-babys-movements/"
      },
      {
        label: "Royal College of Obstetricians and Gynaecologists — Your baby's movements in pregnancy",
        url: "https://www.rcog.org.uk/for-the-public/browse-our-patient-information/your-babys-movements-in-pregnancy/"
      },
      {
        label: "Tommy’s — Baby movements in pregnancy",
        url: "https://www.tommys.org/pregnancy-information/im-pregnant/ask-a-midwife/baby-movements-pregnancy"
      }
    ]
  },

  {
    slug: "ventre-qui-s-arrondit-quels-changements-attendre",
    title: "Le ventre qui s’arrondit : quels changements attendre ?",
    description:
      "Au deuxième trimestre, le ventre devient souvent plus visible. Taille, forme, peau, tiraillements : découvrez les changements habituels et les signes qui doivent amener à consulter.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Deuxième trimestre",
    subcategorySlug: "deuxieme-trimestre",
    readingTime: "7 min",
    publishedAt: "2026-06-14",
    updatedAt: "2026-06-14",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Le ventre devient généralement plus visible au cours du deuxième trimestre, mais le moment varie beaucoup d’une personne à l’autre.",
          "Sa taille et sa forme dépendent notamment de la morphologie, du nombre de grossesses précédentes, de la position du bébé et de l’utérus.",
          "Des tiraillements légers, une peau plus tendue, des démangeaisons modérées ou l’apparition d’une ligne brune peuvent être habituels.",
          "La taille du ventre ne permet pas, à elle seule, de savoir si le bébé grandit normalement.",
          "Une douleur forte ou persistante, des saignements, une perte de liquide ou des contractions régulières nécessitent un avis médical rapide."
        ],
        quote:
          "Il n’existe pas un ventre de grossesse « normal » en matière de taille ou de forme. Le suivi médical repose sur plusieurs repères, pas sur une comparaison visuelle."
      },
      {
        title: "Quand le ventre commence-t-il vraiment à se voir ?",
        paragraphs: [
          "Chez de nombreuses femmes enceintes, le ventre commence à s’arrondir entre la fin du premier trimestre et le début du deuxième. Il peut toutefois devenir visible plus tôt ou plus tard sans que cela indique un problème.",
          "Lors d’une première grossesse, les muscles abdominaux peuvent maintenir l’utérus plus longtemps vers l’intérieur. Après une ou plusieurs grossesses, le ventre peut parfois se voir plus tôt.",
          "Au début, une partie du volume peut aussi être liée aux ballonnements et à la constipation. À mesure que l’utérus grandit et remonte dans l’abdomen, l’arrondi devient généralement plus constant."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "La taille du ventre varie beaucoup. La morphologie, la taille, la longueur du buste, le tonus abdominal et le nombre de grossesses précédentes influencent son apparence.",
          "La forme du ventre peut changer. Elle dépend notamment de la position du bébé, de l’utérus, du placenta et de la manière dont votre corps répartit les volumes.",
          "L’évolution compte davantage qu’une photo isolée. Lors du suivi, le professionnel de santé s’appuie sur l’examen clinique, la mesure de la hauteur utérine au moment adapté et les échographies, si elles sont indiquées."
        ],
        quote:
          "Un ventre plus petit ou plus grand que celui d’une autre femme enceinte ne permet pas de conclure sur la croissance du bébé."
      },
      {
        title: "Quels changements peut-on ressentir lorsque l’utérus grandit ?",
        paragraphs: [
          "L’utérus prend progressivement plus de place. Vous pouvez ressentir une impression de poids, de tension ou d’étirement dans le bas du ventre, surtout en fin de journée ou après une activité.",
          "Des douleurs ligamentaires peuvent apparaître sous la forme de tiraillements brefs sur un côté du bas-ventre ou vers l’aine. Elles sont souvent déclenchées par un changement de position, un mouvement brusque, la toux ou un éternuement.",
          "Des ballonnements, une constipation ou des gaz peuvent également modifier les sensations et donner l’impression que le ventre est plus tendu certains jours."
        ]
      },
      {
        title: "Comment la peau du ventre peut-elle évoluer ?",
        paragraphs: [
          "À mesure que le ventre s’étire, la peau peut sembler plus tendue, sèche ou légèrement irritée. Une hydratation simple peut améliorer le confort, même si aucune crème ne peut garantir la prévention des vergetures.",
          "Les vergetures sont fréquentes pendant la grossesse. Elles peuvent apparaître sur le ventre, mais aussi sur les seins, les hanches ou les cuisses. Leur survenue dépend notamment de la peau, des hormones et de la rapidité avec laquelle les tissus s’étirent.",
          "Une ligne plus foncée peut apparaître au milieu du ventre, entre le pubis et le nombril, parfois au-delà. Appelée ligne brune ou linea nigra, elle est liée aux changements hormonaux et s’atténue généralement après la grossesse."
        ]
      },
      {
        title: "Le nombril peut-il changer ?",
        paragraphs: [
          "Le nombril peut s’aplatir ou devenir plus saillant lorsque l’utérus pousse progressivement la paroi abdominale vers l’avant. Ce changement est habituellement indolore.",
          "Il peut aussi devenir plus sensible au frottement des vêtements. Des matières souples et une taille moins serrée peuvent améliorer le confort.",
          "En revanche, une douleur localisée importante, une bosse dure ou une zone qui reste très sensible mérite un avis médical afin d’écarter notamment une hernie ombilicale."
        ]
      },
      {
        title: "Faut-il changer de vêtements ou utiliser une ceinture de grossesse ?",
        paragraphs: [
          "Il n’existe pas de moment obligatoire pour passer aux vêtements de grossesse. L’essentiel est d’éviter les habits qui compriment le ventre, gênent la respiration ou laissent une douleur persistante.",
          "Un pantalon souple, des tailles extensibles et un soutien-gorge adapté peuvent rendre le quotidien plus confortable à mesure que la silhouette évolue.",
          "Une ceinture ou un bandeau de soutien peut soulager certaines sensations de pesanteur ou des douleurs du dos, mais ne doit pas être serré ni remplacer un avis médical. Demandez conseil à votre sage-femme, à votre médecin ou à un professionnel formé si la douleur persiste."
        ]
      },
      {
        title: "Comment mieux vivre ces changements corporels ?",
        paragraphs: [
          "Voir son ventre s’arrondir peut susciter de la joie, de la fierté, de l’étonnement, mais aussi de l’inconfort ou une impression de ne plus reconnaître son corps. Toutes ces réactions peuvent coexister.",
          "Évitez autant que possible de comparer votre ventre à des photos, à des applications ou à celui d’autres femmes enceintes. Les différences de silhouette sont très importantes et ne reflètent pas à elles seules le déroulement de la grossesse.",
          "Parlez-en lors du suivi si les changements corporels deviennent difficiles à vivre, s’ils réveillent un trouble alimentaire, une anxiété importante ou une souffrance liée à l’image du corps."
        ]
      },
      {
        title: "Quand faut-il demander un avis médical ?",
        paragraphs: [
          "Les tiraillements légers et brefs sont fréquents, mais toute douleur qui vous inquiète mérite d’être signalée au professionnel qui suit votre grossesse.",
          "Contactez rapidement la maternité, votre sage-femme ou votre médecin en cas de douleur forte ou persistante, de saignements, de perte de liquide, de fièvre, de malaise, de douleur en urinant ou de contractions régulières.",
          "Après 20 semaines, une douleur importante ou persistante sous les côtes, surtout à droite, associée à des maux de tête, des troubles visuels ou un gonflement soudain du visage et des mains, nécessite également un avis urgent."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Au deuxième trimestre, le ventre devient souvent plus visible, mais son rythme d’évolution, sa taille et sa forme restent très variables.",
          "Des tiraillements modérés, une peau plus tendue, des vergetures, une ligne brune ou un nombril plus saillant peuvent faire partie des changements habituels.",
          "La croissance du bébé ne se juge pas à l’œil. Le suivi médical permet d’évaluer son évolution avec des repères adaptés.",
          "En cas de douleur forte ou persistante, de saignements, de perte de liquide ou de contractions régulières, demandez rapidement un avis médical."
        ]
      }
    ],
    sources: [
      {
        label: "NHS — Stomach pain in pregnancy",
        url: "https://www.nhs.uk/pregnancy/common-symptoms/stomach-pain/"
      },
      {
        label: "NHS — Stretch marks in pregnancy",
        url: "https://www.nhs.uk/pregnancy/common-symptoms/stretch-marks/"
      },
      {
        label: "American College of Obstetricians and Gynecologists — Skin Conditions During Pregnancy",
        url: "https://www.acog.org/womens-health/faqs/skin-conditions-during-pregnancy"
      },
      {
        label: "American College of Obstetricians and Gynecologists — Weight Gain During Pregnancy",
        url: "https://www.acog.org/womens-health/infographics/weight-gain-during-pregnancy"
      }
    ]
  },

  {
    slug: "douleurs-ligamentaires-comment-les-reconnaitre-et-les-soulager",
    title: "Douleurs ligamentaires : comment les reconnaître et les soulager ?",
    description:
      "Les douleurs ligamentaires sont fréquentes pendant la grossesse, surtout au deuxième trimestre. Découvrez comment les reconnaître, les soulager et savoir quand consulter.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Deuxième trimestre",
    subcategorySlug: "deuxieme-trimestre",
    readingTime: "7 min",
    publishedAt: "2026-06-14",
    updatedAt: "2026-06-14",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Les douleurs ligamentaires apparaissent souvent au deuxième trimestre, lorsque l’utérus grandit et tire davantage sur les ligaments qui le soutiennent.",
          "Elles provoquent généralement un tiraillement ou une douleur brève dans le bas-ventre, l’aine ou un côté du bassin.",
          "Elles sont souvent déclenchées par un mouvement brusque, le fait de se lever rapidement, de tousser, d’éternuer ou de se retourner dans le lit.",
          "Bouger plus lentement, se reposer, changer de position et utiliser une chaleur douce peuvent aider.",
          "Une douleur forte, persistante ou associée à des saignements, de la fièvre, une perte de liquide ou des contractions régulières nécessite un avis médical rapide."
        ],
        quote:
          "Une douleur ligamentaire est habituellement brève, liée à un mouvement et s’améliore au repos. Une douleur inhabituelle, intense ou persistante ne doit pas être attribuée automatiquement aux ligaments."
      },
      {
        title: "Que sont les douleurs ligamentaires ?",
        paragraphs: [
          "L’utérus est maintenu dans le bassin par plusieurs tissus et ligaments. Pendant la grossesse, il augmente rapidement de volume et de poids, ce qui étire progressivement les structures qui le soutiennent.",
          "Les ligaments ronds, situés de chaque côté de l’utérus, peuvent notamment se tendre lorsque vous bougez. Cette tension peut provoquer une douleur soudaine et brève dans le bas du ventre ou vers l’aine.",
          "Ces douleurs sont fréquentes au cours du deuxième trimestre, mais elles peuvent apparaître plus tôt ou plus tard selon les femmes et les grossesses."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "La localisation : la douleur se situe souvent dans le bas-ventre, sur un côté ou des deux côtés, et peut descendre vers l’aine.",
          "Le déclenchement : elle survient fréquemment lors d’un mouvement brusque, en se levant, en se retournant, en marchant rapidement, en toussant ou en éternuant.",
          "La durée : elle est généralement brève, en pointe ou en tiraillement, puis diminue lorsque vous ralentissez, changez de position ou vous reposez."
        ],
        quote:
          "Les douleurs ligamentaires peuvent être impressionnantes, mais elles ne sont habituellement ni régulières ni continues."
      },
      {
        title: "À quoi ressemblent-elles ?",
        paragraphs: [
          "Certaines femmes décrivent une sensation de pincement, de décharge, de point de côté ou de coup d’aiguille. D’autres ressentent plutôt un étirement ou une lourdeur dans le bas du ventre.",
          "La douleur peut être plus marquée d’un côté, souvent à droite, mais elle peut aussi être ressentie à gauche ou des deux côtés.",
          "Elle peut durer quelques secondes ou quelques minutes, puis disparaître. Une gêne diffuse peut néanmoins persister après une journée active ou une longue période debout."
        ]
      },
      {
        title: "Qu’est-ce qui peut les déclencher ?",
        bullets: [
          "Se lever rapidement d’une chaise ou du lit.",
          "Se retourner brusquement pendant la nuit.",
          "Marcher vite, courir ou faire un mouvement inhabituel.",
          "Tousser, éternuer ou rire.",
          "Rester longtemps debout ou enchaîner une journée très active.",
          "Porter une charge ou faire un effort sans adapter sa posture."
        ],
        paragraphs: [
          "Ces déclencheurs ne sont pas dangereux en eux-mêmes. Ils provoquent surtout une mise en tension rapide des ligaments déjà étirés par la croissance de l’utérus."
        ]
      },
      {
        title: "Comment les soulager au quotidien ?",
        paragraphs: [
          "Commencez par ralentir le mouvement qui déclenche la douleur. Asseyez-vous ou allongez-vous quelques instants dans une position confortable et respirez calmement.",
          "Levez-vous et changez de position progressivement. Avant de tousser ou d’éternuer, vous pouvez légèrement fléchir les hanches et soutenir le bas de votre ventre avec la main.",
          "Une douche tiède, un bain tiède ou une bouillotte enveloppée dans un tissu et utilisée brièvement à température modérée peuvent apporter du confort. Évitez la chaleur très forte ou prolongée.",
          "Une activité douce et régulière, adaptée à votre grossesse, peut parfois réduire les tensions. Si les douleurs reviennent souvent, demandez conseil à votre sage-femme, à votre médecin ou à un kinésithérapeute formé à la grossesse."
        ]
      },
      {
        title: "Une ceinture de grossesse peut-elle aider ?",
        paragraphs: [
          "Certaines femmes ressentent un soulagement avec une ceinture ou un bandeau de soutien, surtout lors de la marche ou des périodes prolongées debout.",
          "Ce dispositif doit rester confortable, ne pas comprimer le ventre et ne pas être porté en permanence sans conseil professionnel.",
          "Si la douleur est fréquente ou gêne vos activités, demandez un avis avant d’acheter un dispositif afin de vérifier qu’il est adapté et que la douleur ne vient pas d’une autre cause."
        ]
      },
      {
        title: "Peut-on prendre un médicament contre la douleur ?",
        paragraphs: [
          "Ne prenez pas d’antalgique sans vérifier qu’il est compatible avec la grossesse. Le paracétamol peut être utilisé dans certaines situations, à la dose efficace la plus faible et pendant la durée la plus courte possible, après avis d’un professionnel de santé.",
          "Les anti-inflammatoires non stéroïdiens, comme l’ibuprofène, ne doivent pas être pris en automédication pendant la grossesse. Leur utilisation est particulièrement contre-indiquée à partir du sixième mois.",
          "Si vous avez besoin de médicaments de façon répétée, la douleur doit être évaluée afin d’en confirmer la cause."
        ]
      },
      {
        title: "Comment les différencier d’autres douleurs ?",
        paragraphs: [
          "Une douleur ligamentaire est souvent liée à un mouvement, brève et améliorée par le repos. Elle ne s’accompagne généralement pas de fièvre, de saignements, de perte de liquide ou de contractions régulières.",
          "Les douleurs digestives peuvent être associées à des ballonnements, des gaz ou une constipation. Une infection urinaire peut provoquer des brûlures en urinant, des envies fréquentes ou une douleur dans le bas du ventre.",
          "Des contractions ont tendance à revenir selon un rythme, à durer plus longtemps et à donner une sensation de durcissement de l’utérus. Il n’est pas toujours possible de faire la différence seule : en cas de doute, contactez la maternité ou le professionnel qui suit votre grossesse."
        ]
      },
      {
        title: "Quand faut-il demander un avis médical ?",
        paragraphs: [
          "Contactez rapidement un professionnel si la douleur est forte, persistante, s’aggrave, vous empêche de marcher ou ne s’améliore pas au repos.",
          "Demandez également un avis sans attendre en cas de saignements, de perte de liquide, de fièvre, de frissons, de malaise, de vomissements importants, de brûlures urinaires, de douleur dans le dos ou de contractions régulières.",
          "Après 20 semaines, une douleur sous les côtes, surtout à droite, associée à des maux de tête, des troubles visuels ou un gonflement soudain du visage ou des mains nécessite une évaluation urgente.",
          "Si vous avez simplement le sentiment que la douleur n’est pas habituelle, appelez. Il vaut mieux demander conseil que rester seule avec une inquiétude."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Les douleurs ligamentaires sont fréquentes au deuxième trimestre. Elles correspondent souvent à une mise en tension des ligaments qui accompagnent la croissance de l’utérus.",
          "Elles sont généralement brèves, situées dans le bas-ventre ou l’aine et déclenchées par un mouvement brusque.",
          "Bouger lentement, se reposer, changer de position et utiliser une chaleur douce peuvent aider.",
          "Une douleur forte, continue ou associée à d’autres symptômes doit toujours être évaluée par un professionnel de santé."
        ]
      }
    ],
    sources: [
      {
        label: "NHS — Stomach pain in pregnancy",
        url: "https://www.nhs.uk/pregnancy/common-symptoms/stomach-pain/"
      },
      {
        label: "Assurance Maladie — Médicaments et grossesse",
        url: "https://www.ameli.fr/assure/sante/themes/grossesse/medicaments-grossesse"
      },
      {
        label: "ANSM — Anti-inflammatoires non stéroïdiens et grossesse",
        url: "https://ansm.sante.fr/dossiers-thematiques/medicaments-et-grossesse"
      },
      {
        label: "Royal College of Obstetricians and Gynaecologists — Pelvic girdle pain and pregnancy",
        url: "https://www.rcog.org.uk/for-the-public/browse-our-patient-information/pelvic-girdle-pain-and-pregnancy/"
      }
    ]
  },

  {
    slug: "sommeil-positions-mieux-dormir-deuxieme-trimestre",
    title: "Sommeil et positions : comment mieux dormir au deuxième trimestre ?",
    description:
      "Au deuxième trimestre, le ventre s’arrondit et le sommeil peut devenir moins confortable. Découvrez les positions adaptées, les bons repères et les solutions simples pour mieux dormir.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Deuxième trimestre",
    subcategorySlug: "deuxieme-trimestre",
    readingTime: "7 min",
    publishedAt: "2026-06-14",
    updatedAt: "2026-06-14",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Au deuxième trimestre, vous pouvez dormir dans la position qui reste confortable, en privilégiant progressivement le côté à mesure que la grossesse avance.",
          "À partir de 28 semaines, il est recommandé de s’endormir sur le côté, à gauche ou à droite.",
          "Il n’est pas nécessaire de dormir uniquement sur le côté gauche : les deux côtés conviennent.",
          "Si vous vous réveillez sur le dos, ne paniquez pas. Replacez-vous simplement sur le côté.",
          "Des coussins sous le ventre, entre les genoux ou derrière le dos peuvent améliorer le confort."
        ],
        quote:
          "Le plus important n’est pas de contrôler chaque mouvement pendant la nuit, mais de choisir une position confortable et de vous rendormir sur le côté si vous vous réveillez sur le dos."
      },
      {
        title: "Pourquoi le sommeil peut-il changer au deuxième trimestre ?",
        paragraphs: [
          "Le deuxième trimestre apporte parfois un regain d’énergie, mais le sommeil peut rester irrégulier. Le ventre commence à s’arrondir, certaines positions deviennent moins confortables et les réveils nocturnes peuvent augmenter.",
          "Les douleurs du dos ou du bassin, les tiraillements ligamentaires, les brûlures d’estomac, les envies fréquentes d’uriner et les mouvements du bébé peuvent également perturber les nuits.",
          "Les inquiétudes liées à la grossesse, au travail ou à l’arrivée du bébé peuvent enfin rendre l’endormissement plus difficile, même lorsque vous êtes fatiguée."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Avant 28 semaines, recherchez d’abord le confort. Vous pouvez commencer à vous habituer au sommeil sur le côté sans vous inquiéter si vous changez de position pendant la nuit.",
          "À partir de 28 semaines, essayez de vous endormir sur le côté. Le côté gauche et le côté droit sont tous les deux adaptés.",
          "Si vous vous réveillez sur le dos, il n’y a pas lieu de paniquer. Tournez-vous simplement sur un côté et rendormez-vous."
        ],
        quote:
          "La recommandation concerne surtout la position dans laquelle vous vous endormez, pas la capacité à rester immobile toute la nuit."
      },
      {
        title: "Faut-il obligatoirement dormir sur le côté gauche ?",
        paragraphs: [
          "Non. Le côté gauche est parfois présenté comme la seule bonne position, mais il n’est pas nécessaire de dormir uniquement de ce côté.",
          "Dormir sur le côté droit est également possible. Alterner les côtés peut même réduire les douleurs de hanche, d’épaule ou de bassin.",
          "Choisissez le côté le plus confortable et utilisez des coussins pour mieux répartir les appuis."
        ]
      },
      {
        title: "Peut-on encore dormir sur le dos ?",
        paragraphs: [
          "Au début du deuxième trimestre, une position sur le dos peut encore être confortable pour certaines femmes. À mesure que l’utérus grandit, cette position peut toutefois provoquer une gêne, des nausées, des étourdissements ou une sensation d’oppression.",
          "À partir de 28 semaines, il est recommandé de s’endormir sur le côté plutôt que sur le dos.",
          "Se réveiller ponctuellement sur le dos n’est pas une urgence. Le corps change naturellement de position pendant le sommeil. Replacez-vous simplement sur le côté."
        ]
      },
      {
        title: "Peut-on dormir sur le ventre ?",
        paragraphs: [
          "Dormir sur le ventre n’est pas dangereux tant que cette position reste confortable. Le bébé est protégé par l’utérus et le liquide amniotique.",
          "Avec l’arrondissement du ventre, cette position devient généralement inconfortable ou impossible sans que vous ayez besoin de l’éviter volontairement.",
          "Un coussin adapté ou une position légèrement inclinée vers le ventre peut parfois aider les personnes habituées à dormir ainsi."
        ]
      },
      {
        title: "Comment placer les coussins pour être plus confortable ?",
        bullets: [
          "Placez un coussin entre les genoux pour garder les hanches et le bassin mieux alignés.",
          "Glissez un petit coussin sous le ventre pour réduire la sensation de traction.",
          "Ajoutez un coussin derrière le dos pour vous sentir soutenue et limiter le basculement complet sur le dos.",
          "Surélevez légèrement le haut du corps si vous avez des brûlures d’estomac ou une gêne respiratoire.",
          "Un coussin de grossesse peut être utile, mais plusieurs coussins classiques peuvent offrir le même soutien."
        ],
        paragraphs: [
          "L’objectif est de trouver une position stable qui limite les tensions. Il n’existe pas une installation parfaite valable pour toutes les femmes enceintes."
        ]
      },
      {
        title: "Quelles habitudes peuvent favoriser l’endormissement ?",
        paragraphs: [
          "Essayez de garder des horaires de coucher et de lever relativement réguliers, y compris le week-end.",
          "Réduisez les écrans, le travail et les discussions stimulantes juste avant le coucher. Une routine calme peut aider le cerveau à associer la soirée au repos.",
          "Une activité physique douce et régulière, adaptée à votre grossesse, peut améliorer le sommeil. Évitez toutefois un exercice intense juste avant de vous coucher.",
          "Limitez la caféine, surtout l’après-midi et le soir. Le café, le thé, certains sodas, boissons énergisantes et le chocolat peuvent en contenir."
        ]
      },
      {
        title: "Comment limiter les réveils liés aux brûlures d’estomac ?",
        paragraphs: [
          "Évitez les repas très copieux, gras ou épicés le soir si vous remarquez qu’ils aggravent vos symptômes.",
          "Laissez si possible un délai entre le dîner et le coucher et surélevez légèrement le haut du corps.",
          "Dormir sur le côté gauche peut parfois améliorer le reflux, mais ne vous forcez pas à rester dans une position douloureuse.",
          "Si les brûlures sont fréquentes, demandez conseil à votre sage-femme, à votre médecin ou à votre pharmacien avant de prendre un médicament."
        ]
      },
      {
        title: "Que faire en cas d’envies fréquentes d’uriner ?",
        paragraphs: [
          "Continuez à boire suffisamment dans la journée. Réduire fortement l’hydratation pour éviter les réveils n’est pas recommandé.",
          "Vous pouvez répartir davantage les boissons en journée et boire un peu moins au cours de l’heure précédant le coucher, sans vous priver si vous avez soif.",
          "Prenez le temps de vider complètement votre vessie avant de vous coucher.",
          "Des brûlures urinaires, une douleur, de la fièvre ou des envies très fréquentes inhabituelles peuvent évoquer une infection urinaire et nécessitent un avis médical."
        ]
      },
      {
        title: "Peut-on prendre quelque chose pour dormir ?",
        paragraphs: [
          "Ne prenez pas de somnifère, d’antihistaminique sédatif, de complément, de mélatonine, de plante ou d’huile essentielle sans avis médical pendant la grossesse.",
          "Même les produits présentés comme naturels peuvent avoir des effets indésirables, interagir avec un traitement ou ne pas avoir été suffisamment étudiés chez la femme enceinte.",
          "Si les troubles du sommeil persistent, un professionnel pourra rechercher leur cause et proposer une solution compatible avec la grossesse."
        ]
      },
      {
        title: "Quand faut-il en parler à un professionnel ?",
        paragraphs: [
          "Parlez-en lors du suivi si l’insomnie dure plusieurs semaines, si la fatigue vous empêche de fonctionner normalement ou si l’anxiété occupe une grande partie de vos nuits.",
          "Consultez également si vous ronflez très fortement, si votre entourage remarque des pauses respiratoires, si vous vous réveillez en suffoquant ou si vous avez une somnolence importante dans la journée.",
          "Des sensations désagréables dans les jambes, surtout le soir, avec un besoin irrépressible de les bouger peuvent évoquer un syndrome des jambes sans repos. Un bilan, notamment du fer, peut parfois être utile.",
          "Une gêne respiratoire brutale, une douleur thoracique, un malaise ou tout symptôme inhabituel nécessite une évaluation médicale rapide."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Au deuxième trimestre, le sommeil peut être perturbé par les changements du corps, le reflux, les envies d’uriner ou les douleurs.",
          "Avant 28 semaines, recherchez surtout le confort et commencez progressivement à vous habituer au sommeil sur le côté.",
          "À partir de 28 semaines, endormez-vous sur le côté, à gauche ou à droite. Si vous vous réveillez sur le dos, replacez-vous simplement sans culpabiliser.",
          "Des coussins bien placés et quelques habitudes régulières peuvent améliorer les nuits. Si les troubles deviennent importants ou persistants, demandez conseil."
        ]
      }
    ],
    sources: [
      {
        label: "NHS — Tiredness and sleep problems",
        url: "https://www.nhs.uk/pregnancy/related-conditions/common-symptoms/tiredness/"
      },
      {
        label: "NHS — Your baby's movements and sleep position",
        url: "https://www.nhs.uk/pregnancy/keeping-well/your-babys-movements/"
      },
      {
        label: "Tommy’s — Sleep position in pregnancy",
        url: "https://www.tommys.org/pregnancy-information/im-pregnant/sleep-side/sleep-position-pregnancy"
      },
      {
        label: "American College of Obstetricians and Gynecologists — Problems of the Digestive System",
        url: "https://www.acog.org/womens-health/faqs/problems-of-the-digestive-system"
      }
    ]
  },

  {
    slug: "sexualite-pendant-grossesse-que-faut-il-savoir",
    title: "Sexualité pendant la grossesse : que faut-il savoir ?",
    description:
      "La sexualité peut évoluer pendant la grossesse. Découvrez ce qui est généralement sans risque, les adaptations possibles et les situations qui nécessitent un avis médical.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Deuxième trimestre",
    subcategorySlug: "deuxieme-trimestre",
    readingTime: "8 min",
    publishedAt: "2026-06-14",
    updatedAt: "2026-06-14",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Dans une grossesse sans complication, les rapports sexuels et l’orgasme sont généralement sans danger pour le bébé.",
          "Le désir peut augmenter, diminuer ou varier au fil des semaines : toutes ces évolutions sont normales.",
          "Le confort et le consentement priment. Il n’existe aucune obligation de maintenir une sexualité pénétrative pendant la grossesse.",
          "Un préservatif reste nécessaire en cas de risque d’infection sexuellement transmissible.",
          "En cas de saignement, de perte de liquide, de douleur importante ou si un professionnel vous a conseillé d’éviter les rapports, demandez un avis avant de reprendre."
        ],
        quote:
          "La grossesse ne crée ni devoir conjugal ni norme de fréquence. Une sexualité satisfaisante repose d’abord sur le consentement, le confort et la communication."
      },
      {
        title: "Les rapports sexuels sont-ils dangereux pour le bébé ?",
        paragraphs: [
          "Dans une grossesse qui évolue normalement, les rapports sexuels ne blessent pas le bébé. Celui-ci est protégé dans l’utérus par les membranes, le liquide amniotique, les muscles utérins et le col.",
          "La pénétration ne peut pas atteindre le bébé. Les mouvements ressentis pendant ou après un rapport ne signifient pas qu’il est en danger.",
          "Un rapport sexuel ou un orgasme ne provoque pas une fausse couche dans une grossesse sans complication. La majorité des fausses couches précoces sont liées à des anomalies du développement de l’embryon."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "La sécurité : en l’absence de complication ou de consigne médicale particulière, la sexualité est généralement possible pendant toute la grossesse.",
          "Le confort : adaptez les positions, le rythme, la profondeur de pénétration et utilisez un lubrifiant à base d’eau si nécessaire.",
          "Le consentement : chacun peut avoir plus ou moins de désir. Une envie changeante, une pause ou le choix d’autres formes d’intimité doivent être respectés."
        ],
        quote:
          "Le bon repère n’est pas ce que font les autres couples, mais ce qui reste agréable, librement consenti et compatible avec votre suivi médical."
      },
      {
        title: "Pourquoi le désir peut-il changer ?",
        paragraphs: [
          "Les hormones, la fatigue, les nausées, la sensibilité des seins, l’image du corps et les inquiétudes peuvent modifier le désir sexuel.",
          "Au deuxième trimestre, certaines femmes retrouvent de l’énergie et ressentent davantage de désir ou de sensibilité en raison de l’augmentation du flux sanguin dans la région génitale.",
          "D’autres ont moins envie de rapports ou n’en souhaitent pas du tout. Ces variations ne signifient pas qu’il existe un problème dans le couple.",
          "Le désir du ou de la partenaire peut lui aussi évoluer, notamment par peur de faire mal au bébé ou face aux changements corporels."
        ]
      },
      {
        title: "Quelles positions sont les plus confortables ?",
        paragraphs: [
          "Il n’existe pas une position obligatoire. L’objectif est d’éviter la pression sur le ventre et de choisir une installation qui ne provoque ni douleur ni gêne respiratoire.",
          "Les positions sur le côté, côte à côte ou en cuillère, sont souvent confortables lorsque le ventre s’arrondit.",
          "La personne enceinte au-dessus peut contrôler davantage le rythme et la profondeur de la pénétration.",
          "Des coussins sous les hanches, entre les genoux ou derrière le dos peuvent améliorer le soutien. Arrêtez ou changez de position dès qu’une gêne apparaît."
        ]
      },
      {
        title: "Que faire en cas de sécheresse ou de douleur ?",
        paragraphs: [
          "La lubrification peut augmenter ou diminuer pendant la grossesse. Un lubrifiant à base d’eau peut réduire les frottements lors d’une pénétration.",
          "Prenez davantage de temps, ralentissez et choisissez une pénétration moins profonde si certaines positions deviennent sensibles.",
          "Une douleur répétée, vive ou persistante pendant les rapports ne doit pas être considérée comme normale. Parlez-en à une sage-femme, à un médecin ou à un professionnel de santé."
        ]
      },
      {
        title: "L’orgasme peut-il provoquer des contractions ?",
        paragraphs: [
          "L’orgasme peut entraîner un durcissement temporaire de l’utérus ou de petites contractions, surtout lorsque la grossesse avance.",
          "Ces sensations sont généralement brèves, irrégulières et sans danger dans une grossesse sans complication. Elles ne correspondent pas forcément au début du travail.",
          "Si les contractions deviennent douloureuses, régulières, persistent ou s’accompagnent de saignements ou d’une perte de liquide, contactez la maternité."
        ]
      },
      {
        title: "De légers saignements après un rapport sont-ils possibles ?",
        paragraphs: [
          "Le col de l’utérus est davantage vascularisé pendant la grossesse. Une pénétration peut parfois provoquer un léger saignement ou quelques traces rosées.",
          "Tout saignement pendant la grossesse mérite toutefois d’être signalé, surtout s’il est rouge, abondant, répété, douloureux ou accompagné de contractions.",
          "Évitez de reprendre les rapports pénétratifs avant d’avoir demandé conseil si vous présentez un saignement inexpliqué."
        ]
      },
      {
        title: "Dans quelles situations faut-il éviter les rapports pénétratifs ?",
        paragraphs: [
          "Un médecin ou une sage-femme peut recommander d’éviter temporairement ou durablement la pénétration selon votre situation.",
          "C’est notamment possible en cas de placenta prævia ou très bas inséré avec risque de saignement, de rupture de la poche des eaux, de saignements inexpliqués ou de risque particulier d’accouchement prématuré.",
          "Une consigne d’abstinence peut concerner la pénétration uniquement ou inclure l’orgasme et l’utilisation de sex-toys. Demandez précisément ce qui est déconseillé et pendant combien de temps."
        ]
      },
      {
        title: "Comment prévenir les infections sexuellement transmissibles ?",
        paragraphs: [
          "La grossesse ne protège pas des infections sexuellement transmissibles. Certaines peuvent avoir des conséquences pour la mère et le bébé.",
          "Utilisez un préservatif en cas de nouveau partenaire, de partenaires multiples, de relation non exclusive ou de doute sur une infection.",
          "En cas de brûlures, de lésions, de douleurs, d’écoulements inhabituels ou de suspicion d’exposition, consultez rapidement pour un dépistage et un traitement adapté."
        ]
      },
      {
        title: "Le sexe oral et les sex-toys sont-ils possibles ?",
        paragraphs: [
          "Le sexe oral est généralement possible pendant la grossesse. Il faut toutefois éviter tout contact en présence d’un bouton de fièvre ou d’un herpès actif, en raison du risque de transmission.",
          "Il ne faut jamais souffler de l’air directement dans le vagin, car cela peut exceptionnellement entraîner une complication grave.",
          "Les sex-toys peuvent être utilisés s’ils sont propres, non douloureux et qu’aucune consigne médicale ne les interdit. Nettoyez-les après chaque utilisation et utilisez un préservatif neuf s’ils sont partagés."
        ]
      },
      {
        title: "Et si l’on ne souhaite pas de pénétration ?",
        paragraphs: [
          "L’intimité ne se limite pas aux rapports pénétratifs. Les caresses, les massages, les baisers, la masturbation mutuelle ou simplement le contact physique peuvent convenir davantage à certains moments.",
          "Parler de ce qui est agréable, inconfortable ou inquiétant permet d’éviter les malentendus et la pression.",
          "Personne ne doit accepter une activité sexuelle par peur de décevoir l’autre. Le consentement doit rester libre, clair et réversible à tout moment."
        ]
      },
      {
        title: "Quand faut-il demander un avis médical ?",
        paragraphs: [
          "Contactez rapidement la maternité ou le professionnel qui suit votre grossesse en cas de saignement important, de perte de liquide, de douleur intense, de fièvre ou de contractions régulières.",
          "Demandez aussi conseil si les rapports provoquent systématiquement une douleur ou des saignements, ou si vous ne savez pas si une complication vous impose des précautions particulières.",
          "Si la sexualité devient source de détresse, de conflit, de peur ou de pression, vous pouvez en parler à une sage-femme, à un médecin, à un psychologue ou à un conseiller conjugal."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Dans une grossesse sans complication, la sexualité est généralement sans danger pour le bébé.",
          "Le désir et le confort peuvent beaucoup varier. Il n’existe aucune fréquence ni pratique obligatoire.",
          "Adaptez les positions, utilisez un lubrifiant si nécessaire et protégez-vous des infections sexuellement transmissibles.",
          "En cas de saignement, de perte de liquide, de douleur importante ou de consigne médicale particulière, demandez un avis avant de poursuivre les rapports."
        ]
      }
    ],
    sources: [
      {
        label: "Tommy’s — Is it safe to have sex in pregnancy?",
        url: "https://www.tommys.org/pregnancy-information/im-pregnant/sex-pregnancy"
      },
      {
        label: "NHS Inform — Sex and sexual health in pregnancy",
        url: "https://www.nhsinform.scot/ready-steady-baby/pregnancy/relationships-and-wellbeing-in-pregnancy/sex-and-sexual-health-in-pregnancy"
      },
      {
        label: "Centers for Disease Control and Prevention — About sexually transmitted infections",
        url: "https://www.cdc.gov/sti/about/index.html"
      },
      {
        label: "NHS — Vaginal bleeding in pregnancy",
        url: "https://www.nhs.uk/pregnancy/common-symptoms/vaginal-bleeding/"
      }
    ]
  },

  {
    slug: "contractions-differencier-travail-et-faux-travail",
    title: "Contractions : comment différencier travail et faux travail ?",
    description:
      "Braxton Hicks ou début du travail ? Découvrez les repères utiles pour reconnaître l’évolution des contractions et savoir quand contacter la maternité.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Troisième trimestre",
    subcategorySlug: "troisieme-trimestre",
    readingTime: "8 min",
    publishedAt: "2026-06-14",
    updatedAt: "2026-06-14",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Les contractions de Braxton Hicks sont généralement irrégulières, peu fréquentes et ne deviennent pas progressivement plus longues, plus fortes et plus rapprochées.",
          "Les contractions du travail ont tendance à suivre un rythme de plus en plus régulier et à s’intensifier avec le temps.",
          "Le repos, l’hydratation ou un changement de position peuvent calmer les contractions de faux travail, mais pas toujours celles du véritable travail.",
          "La rupture de la poche des eaux, un saignement, une diminution des mouvements du bébé ou des contractions avant 37 semaines nécessitent un appel rapide à la maternité.",
          "En cas de doute, il ne faut pas attendre d’être certaine : la maternité peut vous guider par téléphone."
        ],
        quote:
          "On ne peut pas toujours faire la différence seule. Le meilleur repère reste l’évolution des contractions dans le temps et l’avis de la maternité en cas de doute."
      },
      {
        title: "Qu’est-ce qu’une contraction ?",
        paragraphs: [
          "Une contraction correspond au resserrement puis au relâchement du muscle de l’utérus. Le ventre devient dur pendant quelques secondes ou quelques minutes, puis se détend.",
          "Certaines contractions apparaissent pendant la grossesse sans annoncer le début de l’accouchement. Elles sont souvent appelées contractions de Braxton Hicks, contractions d’entraînement ou faux travail.",
          "Les contractions du travail, elles, participent progressivement à l’effacement et à l’ouverture du col de l’utérus."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Le rythme : le faux travail reste souvent irrégulier, tandis que les contractions du travail deviennent progressivement plus régulières et plus rapprochées.",
          "L’intensité : les contractions de travail ont tendance à devenir plus longues, plus fortes et plus difficiles à ignorer.",
          "L’évolution : des contractions qui persistent malgré le repos, l’hydratation ou un changement de position peuvent davantage évoquer un travail en cours."
        ],
        quote:
          "Une seule contraction ne permet pas de conclure. C’est surtout la manière dont elles évoluent sur plusieurs dizaines de minutes qui compte."
      },
      {
        title: "Comment reconnaître les contractions de Braxton Hicks ?",
        paragraphs: [
          "Les contractions de Braxton Hicks sont fréquentes au troisième trimestre. Elles peuvent donner une sensation de ventre dur, de tension ou de serrement, parfois inconfortable mais souvent peu douloureuse.",
          "Elles restent généralement irrégulières, espacées et de durée variable. Elles ne se rapprochent pas progressivement et ne deviennent pas systématiquement plus fortes.",
          "Elles peuvent apparaître après une journée active, un effort, un rapport sexuel, lorsque la vessie est pleine ou en cas de déshydratation.",
          "Elles peuvent diminuer après avoir bu, uriné, changé de position, ralenti l’activité ou pris un temps de repos."
        ]
      },
      {
        title: "Quels signes évoquent davantage le début du travail ?",
        paragraphs: [
          "Les contractions du travail deviennent généralement plus régulières, plus longues, plus fortes et plus rapprochées au fil du temps.",
          "Elles continuent souvent malgré le repos ou un changement de position et peuvent rendre la parole, la marche ou la concentration plus difficiles pendant leur passage.",
          "La douleur peut être ressentie dans le bas du ventre, le bassin ou le dos et parfois se déplacer vers l’avant.",
          "Le véritable travail s’accompagne d’une modification du col, mais seule une évaluation par un professionnel peut le confirmer."
        ]
      },
      {
        title: "Comment chronométrer les contractions ?",
        paragraphs: [
          "Chronométrez une contraction du début du durcissement jusqu’au relâchement complet. Notez ensuite le temps entre le début d’une contraction et le début de la suivante.",
          "Observez surtout leur tendance : deviennent-elles plus régulières, plus longues, plus rapprochées ou plus intenses ?",
          "Une application peut aider, mais un simple chronomètre ou une feuille suffit. Il n’est pas nécessaire de surveiller chaque contraction pendant des heures si elles restent occasionnelles et disparaissent.",
          "Suivez en priorité les consignes données par votre maternité, car le moment recommandé pour appeler ou se déplacer peut varier selon votre situation."
        ]
      },
      {
        title: "La règle des 5 minutes est-elle toujours valable ?",
        paragraphs: [
          "Certaines maternités conseillent d’appeler lorsque les contractions reviennent environ toutes les cinq minutes, mais cette règle n’est pas universelle.",
          "La conduite à tenir dépend notamment du terme, de la durée des contractions, de l’évolution de la douleur, de la distance jusqu’à la maternité, du nombre d’accouchements précédents et des particularités de la grossesse.",
          "Pour un deuxième accouchement ou les suivants, le travail peut parfois évoluer plus rapidement. Les consignes personnalisées de la maternité doivent donc toujours primer."
        ]
      },
      {
        title: "Le bouchon muqueux annonce-t-il le travail ?",
        paragraphs: [
          "Le bouchon muqueux peut se détacher en une fois ou progressivement. Il ressemble souvent à des glaires épaisses, transparentes, rosées ou légèrement teintées de sang.",
          "Sa perte indique que le col commence peut-être à évoluer, mais le travail peut débuter rapidement ou seulement plusieurs jours plus tard.",
          "Un saignement plus abondant que quelques traces ne doit pas être assimilé au bouchon muqueux et nécessite un appel à la maternité."
        ]
      },
      {
        title: "Que faire si la poche des eaux se rompt ?",
        paragraphs: [
          "La rupture de la poche des eaux peut se manifester par un écoulement soudain ou par une fuite continue difficile à contrôler.",
          "Notez si possible l’heure, la couleur et l’odeur du liquide, utilisez une protection hygiénique externe et contactez la maternité sans attendre les contractions.",
          "N’utilisez pas de tampon. Si le liquide est verdâtre, malodorant, très teinté de sang ou si les mouvements du bébé diminuent, l’évaluation doit être urgente."
        ]
      },
      {
        title: "Que peut-on essayer en cas de faux travail probable ?",
        bullets: [
          "Boire de l’eau et manger légèrement si vous en ressentez le besoin.",
          "Vider votre vessie.",
          "Changer de position ou marcher doucement si vous êtes restée immobile.",
          "Vous allonger et vous reposer si vous avez été active.",
          "Prendre une douche ou un bain tiède si votre maternité ne vous a donné aucune contre-indication.",
          "Observer l’évolution pendant un court moment sans ignorer les signes d’alerte."
        ],
        paragraphs: [
          "Si les contractions diminuent ou disparaissent, il s’agissait probablement de contractions d’entraînement. Si elles persistent, deviennent régulières ou s’intensifient, contactez la maternité."
        ]
      },
      {
        title: "Quand faut-il contacter la maternité ?",
        paragraphs: [
          "Appelez si vous pensez être en travail, si les contractions deviennent régulières et rapprochées ou si leur intensité augmente nettement.",
          "Contactez-la immédiatement en cas de rupture de la poche des eaux, de saignement vaginal, de diminution des mouvements du bébé, de douleur inhabituelle ou si vous vous sentez mal.",
          "Avant 37 semaines, des contractions ou durcissements réguliers, des douleurs de règles, une pression pelvienne, un mal de dos inhabituel ou une perte de liquide peuvent évoquer un travail prématuré et nécessitent un avis urgent.",
          "Appelez également si une contraction dure anormalement longtemps, si elles sont extrêmement fréquentes ou si vous ressentez une forte envie de pousser."
        ]
      },
      {
        title: "Faut-il attendre que la douleur soit très forte ?",
        paragraphs: [
          "Non. Il n’est pas nécessaire d’attendre d’avoir très mal pour demander conseil.",
          "Certaines femmes ressentent les contractions du début du travail de façon modérée, tandis que d’autres ont rapidement besoin d’aide pour les gérer.",
          "L’intensité de la douleur est un repère personnel. Le rythme, la progression des contractions et les autres signes associés sont tout aussi importants."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Les contractions de faux travail sont souvent irrégulières et peuvent se calmer avec le repos, l’hydratation ou un changement de position.",
          "Les contractions du travail deviennent généralement plus régulières, plus longues, plus fortes et plus rapprochées.",
          "La rupture de la poche des eaux, un saignement, une diminution des mouvements du bébé ou des contractions avant 37 semaines nécessitent un appel rapide.",
          "En cas de doute, contactez la maternité : il vaut mieux appeler trop tôt que rester seule avec une inquiétude."
        ]
      }
    ],
    sources: [
      {
        label: "NHS — Signs that labour has begun",
        url: "https://www.nhs.uk/pregnancy/labour-and-birth/signs-that-labour-has-begun/"
      },
      {
        label: "NHS — Premature labour and birth",
        url: "https://www.nhs.uk/pregnancy/labour-and-birth/premature-labour-and-birth/"
      },
      {
        label: "American College of Obstetricians and Gynecologists — How to Tell When Labor Begins",
        url: "https://www.acog.org/womens-health/faqs/how-to-tell-when-labor-begins"
      },
      {
        label: "Mayo Clinic — Signs of labor: Know what to expect",
        url: "https://www.mayoclinic.org/healthy-lifestyle/labor-and-delivery/in-depth/signs-of-labor/art-20046184"
      }
    ]
  },

  {
    slug: "essoufflement-reflux-jambes-lourdes-comment-se-soulager",
    title: "Essoufflement, reflux et jambes lourdes : comment se soulager ?",
    description:
      "Au troisième trimestre, l’essoufflement, le reflux et les jambes lourdes sont fréquents. Découvrez des gestes simples pour les soulager et les signes qui nécessitent un avis médical.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Troisième trimestre",
    subcategorySlug: "troisieme-trimestre",
    readingTime: "9 min",
    publishedAt: "2026-06-14",
    updatedAt: "2026-06-14",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Un essoufflement progressif à l’effort peut être fréquent en fin de grossesse, mais un essoufflement brutal ou au repos doit être évalué rapidement.",
          "Le reflux est souvent amélioré par des repas plus petits, l’évitement des aliments déclencheurs et une position moins allongée après les repas.",
          "Pour les jambes lourdes, marchez régulièrement, évitez les longues périodes immobiles et surélevez les jambes au repos.",
          "Ne prenez pas de médicament, de plante ou d’huile essentielle sans vérifier sa compatibilité avec la grossesse.",
          "Une jambe soudainement gonflée, rouge ou douloureuse, une douleur thoracique, un malaise ou une difficulté importante à respirer nécessitent une aide médicale urgente."
        ],
        quote:
          "Ces symptômes sont fréquents au troisième trimestre, mais ils ne doivent jamais être banalisés lorsqu’ils apparaissent brutalement, deviennent intenses ou s’accompagnent d’autres signes."
      },
      {
        title: "Pourquoi ces symptômes sont-ils fréquents au troisième trimestre ?",
        paragraphs: [
          "À mesure que l’utérus grandit, il prend davantage de place dans l’abdomen. Cela peut limiter l’amplitude du diaphragme, favoriser les remontées acides et ralentir le retour veineux dans les jambes.",
          "Les hormones de la grossesse relâchent aussi certains muscles, notamment le sphincter situé entre l’œsophage et l’estomac, ce qui facilite le reflux.",
          "L’augmentation du volume sanguin, la pression de l’utérus sur les veines du bassin et la chaleur peuvent accentuer la sensation de jambes lourdes ou les gonflements."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "L’essoufflement habituel est généralement progressif, surtout à l’effort, et s’améliore au repos. Un essoufflement soudain, intense ou présent au repos n’est pas à banaliser.",
          "Le reflux provoque souvent une brûlure derrière le sternum, des remontées acides ou une gêne après les repas, surtout en position allongée.",
          "Les jambes lourdes touchent souvent les deux côtés et s’aggravent en fin de journée. Une seule jambe brutalement gonflée, rouge, chaude ou douloureuse doit faire consulter rapidement."
        ],
        quote:
          "Le caractère progressif ou brutal, l’intensité et les symptômes associés sont plus importants que le symptôme isolé."
      },
      {
        title: "Comment soulager un essoufflement léger ?",
        paragraphs: [
          "Ralentissez le rythme et accordez-vous des pauses régulières. Évitez de porter des charges lourdes et adaptez les activités qui vous demandent beaucoup d’effort.",
          "Tenez-vous aussi droite que possible afin de libérer la cage thoracique. Assise, soutenez le dos et évitez de vous affaisser.",
          "Pour dormir, surélevez légèrement le haut du corps avec des coussins si cette position vous aide à mieux respirer.",
          "Une activité physique douce et régulière, si elle est autorisée dans votre grossesse, peut entretenir l’endurance. Arrêtez-vous et demandez conseil si l’effort provoque une gêne inhabituelle."
        ]
      },
      {
        title: "Quand l’essoufflement doit-il inquiéter ?",
        paragraphs: [
          "Contactez rapidement un professionnel si l’essoufflement apparaît brutalement, devient important, survient au repos ou vous empêche de parler normalement.",
          "Appelez les urgences en cas de douleur thoracique, de malaise, de lèvres bleutées, de palpitations importantes, de toux avec du sang ou de sensation d’étouffement.",
          "Un essoufflement associé à une douleur ou à un gonflement d’une seule jambe peut évoquer une complication veineuse et nécessite une évaluation urgente.",
          "Une fatigue extrême, une pâleur, des palpitations ou un essoufflement inhabituel peuvent aussi être liés à une anémie et doivent être signalés lors du suivi."
        ]
      },
      {
        title: "Comment reconnaître le reflux ?",
        paragraphs: [
          "Le reflux gastro-œsophagien se manifeste souvent par une sensation de brûlure qui remonte derrière le sternum, des régurgitations acides, un goût amer dans la bouche ou une gêne après les repas.",
          "Les symptômes sont fréquemment aggravés lorsque vous vous allongez, vous penchez en avant ou mangez un repas copieux.",
          "Une douleur thoracique ne doit toutefois pas être attribuée automatiquement au reflux, surtout si elle est intense, inhabituelle ou associée à un essoufflement."
        ]
      },
      {
        title: "Quels gestes peuvent réduire le reflux ?",
        bullets: [
          "Fractionnez les repas et mangez de plus petites quantités.",
          "Évitez de vous allonger immédiatement après avoir mangé.",
          "Repérez les aliments qui déclenchent vos symptômes, par exemple les plats gras, épicés, acides ou très chocolatés.",
          "Mangez lentement et évitez les vêtements qui compriment fortement l’abdomen.",
          "Surélevez légèrement la tête et le haut du corps pendant la nuit.",
          "Limitez la caféine et évitez l’alcool, qui est déconseillé pendant toute la grossesse."
        ],
        paragraphs: [
          "Il n’est pas nécessaire de supprimer de nombreux aliments sans raison. Identifiez plutôt ceux qui déclenchent réellement vos symptômes."
        ]
      },
      {
        title: "Peut-on prendre un traitement contre le reflux ?",
        paragraphs: [
          "Certains traitements peuvent être utilisés pendant la grossesse, mais le choix dépend de vos symptômes, de vos antécédents et des autres médicaments que vous prenez.",
          "Demandez conseil à votre sage-femme, à votre médecin ou à votre pharmacien avant de prendre un antiacide, un alginate ou un autre traitement.",
          "Évitez l’automédication prolongée et ne prenez pas de bicarbonate, de plante, de complément ou d’huile essentielle sans avis professionnel.",
          "Consultez si le reflux est très fréquent, vous empêche de manger ou de dormir, s’accompagne de vomissements persistants, de difficultés à avaler, de sang ou d’une perte de poids."
        ]
      },
      {
        title: "Pourquoi a-t-on les jambes lourdes ?",
        paragraphs: [
          "Pendant la grossesse, le retour du sang des jambes vers le cœur peut être ralenti par les hormones, l’augmentation du volume sanguin et la pression de l’utérus sur les veines du bassin.",
          "La sensation de lourdeur est souvent plus marquée en fin de journée, par temps chaud ou après une longue période debout ou assise.",
          "Des chevilles légèrement gonflées des deux côtés peuvent aussi apparaître. Elles doivent néanmoins être surveillées si le gonflement devient brutal ou important."
        ]
      },
      {
        title: "Comment soulager les jambes lourdes ?",
        bullets: [
          "Marchez régulièrement et mobilisez les chevilles plusieurs fois par jour.",
          "Évitez de rester longtemps debout ou assise sans bouger.",
          "Surélevez les jambes lorsque vous vous reposez.",
          "Évitez de croiser longtemps les jambes.",
          "Portez des chaussures confortables et des vêtements qui ne compriment pas l’aine ou les jambes.",
          "Passez de l’eau fraîche des chevilles vers les cuisses si cela vous soulage.",
          "Demandez conseil pour des bas ou collants de compression adaptés à la grossesse."
        ],
        paragraphs: [
          "Les massages doux peuvent être agréables lorsqu’il s’agit d’une lourdeur diffuse des deux jambes. Ne massez pas une jambe soudainement douloureuse, rouge, chaude ou gonflée avant d’avoir demandé un avis médical."
        ]
      },
      {
        title: "Quand un gonflement doit-il faire consulter ?",
        paragraphs: [
          "Une seule jambe qui devient soudainement gonflée, rouge, chaude ou douloureuse peut évoquer une thrombose veineuse. Contactez immédiatement un professionnel de santé.",
          "Un gonflement brutal du visage, des mains ou des jambes, surtout s’il s’accompagne de maux de tête, de troubles visuels, de douleur sous les côtes ou d’un malaise, nécessite aussi une évaluation urgente.",
          "Un œdème progressif et symétrique des chevilles est souvent bénin en fin de grossesse, mais signalez-le lors du suivi s’il s’aggrave ou vous inquiète."
        ]
      },
      {
        title: "Quand faut-il demander un avis médical ?",
        paragraphs: [
          "Consultez rapidement si l’un de ces symptômes apparaît brutalement, devient intense, ne s’améliore pas au repos ou s’accompagne d’un malaise.",
          "Appelez les urgences en cas de difficulté importante à respirer, de douleur thoracique, de perte de connaissance, de toux avec du sang ou de douleur et gonflement d’une seule jambe.",
          "Contactez également la maternité en cas de diminution des mouvements du bébé, de contractions régulières, de saignement ou de perte de liquide.",
          "Pour des symptômes plus modérés mais persistants, parlez-en à votre sage-femme, à votre médecin ou à votre pharmacien afin d’obtenir un conseil adapté à la grossesse."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Un essoufflement léger et progressif, le reflux et les jambes lourdes sont fréquents au troisième trimestre.",
          "Des pauses, une posture plus droite, des repas plus petits, une activité douce et la surélévation des jambes peuvent améliorer le confort.",
          "Les médicaments et produits naturels doivent toujours être vérifiés avant utilisation pendant la grossesse.",
          "Un essoufflement brutal, une douleur thoracique ou une seule jambe douloureuse et gonflée nécessitent une évaluation urgente."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Essoufflement ou dyspnée",
        url: "https://www.ameli.fr/assure/sante/themes/essoufflement-dyspnee"
      },
      {
        label: "Assurance Maladie — Reflux gastro-œsophagien de l’adulte",
        url: "https://www.ameli.fr/assure/sante/themes/rgo-adulte"
      },
      {
        label: "Assurance Maladie — Jambes lourdes",
        url: "https://www.ameli.fr/assure/sante/themes/jambes-lourdes"
      },
      {
        label: "ANSM — Médicaments et grossesse",
        url: "https://ansm.sante.fr/dossiers-thematiques/medicaments-et-grossesse"
      }
    ]
  },

  {
    slug: "comment-preparer-sa-valise-de-maternite",
    title: "Comment préparer sa valise de maternité ?",
    description:
      "Quand la préparer, quoi emporter pour la salle de naissance, le séjour et le bébé : une checklist simple pour une valise de maternité complète sans être surchargée.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Troisième trimestre",
    subcategorySlug: "troisieme-trimestre",
    readingTime: "9 min",
    publishedAt: "2026-06-14",
    updatedAt: "2026-06-14",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Préparez idéalement la valise autour du huitième mois, ou plus tôt si votre maternité vous le conseille.",
          "Vérifiez d’abord la liste fournie par votre maternité : le matériel demandé et ce qui est fourni varient selon les établissements.",
          "Séparez un petit sac pour la salle de naissance du reste de la valise afin d’avoir l’essentiel immédiatement accessible.",
          "Prévoyez les documents administratifs, des vêtements confortables pour vous, quelques tenues adaptées pour le bébé et le matériel demandé par la maternité.",
          "Installez le siège-auto avant le terme si le retour se fait en voiture."
        ],
        quote:
          "La meilleure valise n’est pas la plus remplie : c’est celle qui correspond aux consignes de votre maternité et dans laquelle l’essentiel est facile à trouver."
      },
      {
        title: "Quand faut-il préparer la valise ?",
        paragraphs: [
          "Vous pouvez commencer à rassembler les affaires au cours du septième mois et finaliser la valise autour du huitième mois de grossesse.",
          "Si vous avez un risque d’accouchement prématuré, une grossesse multiple, une maternité éloignée ou une situation médicale particulière, il peut être utile de la préparer plus tôt.",
          "Gardez la valise dans un endroit facile d’accès et indiquez à la personne qui vous accompagne où elle se trouve."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "La liste de votre maternité passe en premier. Certains établissements fournissent les couches, les protections ou le nécessaire de toilette, tandis que d’autres demandent de tout apporter.",
          "Séparez les affaires par moment : salle de naissance, séjour de la mère, séjour du bébé et retour à la maison.",
          "Privilégiez la simplicité. Quelques tenues faciles à enfiler et des pochettes clairement identifiées sont souvent plus utiles qu’une valise très chargée."
        ],
        quote:
          "Avant d’acheter quoi que ce soit, consultez le livret d’accueil ou la checklist de votre maternité."
      },
      {
        title: "Quels documents faut-il emporter ?",
        bullets: [
          "Une pièce d’identité.",
          "La carte Vitale et l’attestation de droits si elle est demandée.",
          "La carte de mutuelle.",
          "Le dossier de suivi de grossesse et les résultats d’examens récents.",
          "La carte de groupe sanguin si vous en possédez une.",
          "Le livret de famille, si vous en avez déjà un.",
          "La reconnaissance anticipée, si elle a été réalisée.",
          "Le projet de naissance, si vous en avez préparé un.",
          "Les coordonnées de la personne à prévenir et de la personne de confiance."
        ],
        paragraphs: [
          "Regroupez les documents dans une pochette distincte et facilement accessible. Vérifiez avec la maternité si elle demande des pièces supplémentaires."
        ]
      },
      {
        title: "Que mettre dans le sac pour la salle de naissance ?",
        bullets: [
          "Une tenue ample et confortable ou une chemise de nuit.",
          "Des chaussettes et des chaussons faciles à enfiler.",
          "Un élastique ou un bandeau pour les cheveux.",
          "Un brumisateur, un baume à lèvres et une petite bouteille d’eau si la maternité l’autorise.",
          "Un téléphone et son chargeur, éventuellement avec un câble long.",
          "Les lunettes plutôt que les lentilles si vous en portez.",
          "Une première tenue complète pour le bébé dans une pochette séparée.",
          "Un bonnet, une brassière ou un gilet selon les consignes de la maternité.",
          "Une couverture légère si elle est demandée."
        ],
        paragraphs: [
          "Demandez à la maternité ce qui est autorisé pendant le travail, notamment concernant les boissons, les collations, la musique ou les accessoires de confort."
        ]
      },
      {
        title: "Que prévoir pour le séjour de la mère ?",
        bullets: [
          "Deux ou trois tenues souples et faciles à enfiler.",
          "Des chemises de nuit ou pyjamas confortables.",
          "Des sous-vêtements larges, respirants et qui ne serrent pas.",
          "Des soutiens-gorge adaptés si vous souhaitez allaiter.",
          "Une robe de chambre ou un gilet.",
          "Des chaussons antidérapants.",
          "Une trousse de toilette avec des produits simples et non parfumés si possible.",
          "Une serviette de toilette, si elle n’est pas fournie.",
          "Des protections hygiéniques très absorbantes si la maternité les demande.",
          "Des coussinets d’allaitement si vous souhaitez en utiliser."
        ],
        paragraphs: [
          "Après un accouchement, le confort est prioritaire. Choisissez des vêtements qui ne compriment ni le ventre ni le périnée.",
          "En cas de césarienne prévue ou possible, privilégiez des sous-vêtements et des pantalons dont la taille ne repose pas directement sur la cicatrice."
        ]
      },
      {
        title: "Que faut-il prévoir pour le bébé ?",
        bullets: [
          "Plusieurs bodies, de préférence croisés pour les premiers jours.",
          "Plusieurs pyjamas adaptés à la saison.",
          "Deux ou trois brassières ou gilets.",
          "Un ou deux bonnets selon les consignes de la maternité.",
          "Des chaussettes ou chaussons souples.",
          "Des bavoirs ou langes.",
          "Une gigoteuse adaptée à la saison.",
          "Une tenue pour la sortie.",
          "Des couches et du matériel de change uniquement si la maternité le demande.",
          "Un thermomètre si celui-ci figure sur la liste de l’établissement."
        ],
        paragraphs: [
          "Prévoyez surtout des vêtements en taille naissance et un mois, car le gabarit du bébé ne peut pas toujours être anticipé avec précision.",
          "Lavez les vêtements avant la première utilisation avec une lessive simple, puis retirez les étiquettes susceptibles d’irriter la peau."
        ]
      },
      {
        title: "Comment choisir les vêtements selon la saison ?",
        paragraphs: [
          "En hiver, privilégiez plusieurs couches fines plutôt qu’un vêtement très épais : body, pyjama, gilet et gigoteuse adaptée.",
          "En été, prévoyez des vêtements légers, mais gardez une petite couche supplémentaire pour les espaces climatisés ou le trajet de retour.",
          "La température de la maternité peut être différente de celle de l’extérieur. Demandez conseil à l’équipe avant d’ajouter ou de retirer une couche au bébé."
        ]
      },
      {
        title: "Faut-il apporter du matériel pour l’allaitement ou les biberons ?",
        paragraphs: [
          "La plupart des maternités fournissent le matériel nécessaire à l’alimentation du nouveau-né pendant le séjour, mais les pratiques varient.",
          "Il est généralement inutile d’apporter un tire-lait, des biberons ou du lait infantile sans demande spécifique de l’équipe.",
          "Si vous avez un projet d’allaitement, des soutiens-gorge confortables, des coussinets et éventuellement une crème compatible peuvent suffire. Demandez conseil avant d’utiliser un produit sur les mamelons.",
          "Si vous ne souhaitez pas allaiter, informez l’équipe afin qu’elle puisse vous accompagner sans jugement et vous expliquer l’organisation du séjour."
        ]
      },
      {
        title: "Que prévoir pour la personne accompagnante ?",
        bullets: [
          "Une tenue de rechange.",
          "Une trousse de toilette.",
          "Un téléphone et un chargeur.",
          "De l’eau et des collations si elles sont autorisées.",
          "De la monnaie ou une carte bancaire.",
          "Une liste des personnes à prévenir.",
          "Les éventuels documents demandés par la maternité."
        ],
        paragraphs: [
          "Renseignez-vous sur les horaires de présence, les possibilités de dormir sur place et les repas proposés à l’accompagnant."
        ]
      },
      {
        title: "Comment organiser la valise pour tout retrouver facilement ?",
        paragraphs: [
          "Utilisez des pochettes ou des sacs transparents portant une étiquette : salle de naissance, première tenue, toilette, sortie, documents.",
          "Placez le sac de naissance et la pochette administrative sur le dessus.",
          "Laissez à la maison une petite réserve prête à être apportée en cas de séjour plus long.",
          "Glissez un sac séparé pour le linge sale afin de garder le reste de la valise organisé."
        ]
      },
      {
        title: "Que préparer pour le retour à la maison ?",
        paragraphs: [
          "Choisissez pour vous une tenue souple adaptée à la météo. Le ventre ne retrouve pas immédiatement son volume d’avant la grossesse.",
          "Préparez une tenue complète pour le bébé et vérifiez que le siège-auto est adapté, correctement installé et utilisé dos à la route si le retour se fait en voiture.",
          "N’habillez pas le bébé avec un manteau épais sous le harnais du siège-auto. Utilisez plutôt une couverture par-dessus les sangles une fois le bébé installé.",
          "Si le retour se fait autrement qu’en voiture, anticipez le moyen de transport et les conditions de sécurité."
        ]
      },
      {
        title: "Les objets utiles mais non indispensables",
        bullets: [
          "Un coussin personnel ou un coussin d’allaitement.",
          "Des écouteurs ou une petite enceinte si elle est autorisée.",
          "Un masque de sommeil et des bouchons d’oreilles.",
          "Une gourde facile à utiliser.",
          "Un carnet et un stylo.",
          "Une veilleuse douce.",
          "Un sac supplémentaire pliable."
        ],
        paragraphs: [
          "Évitez d’emporter des objets de valeur, trop de vêtements ou du matériel volumineux dont la maternité dispose déjà."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Préparez la valise suffisamment tôt, mais commencez toujours par vérifier la liste de votre maternité.",
          "Séparez un petit sac pour la salle de naissance du reste des affaires.",
          "Regroupez les documents, choisissez des vêtements confortables et prévoyez quelques tailles différentes pour le bébé.",
          "Installez le siège-auto avant le terme et gardez la valise dans un endroit facile d’accès."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Maternité, paternité et adoption : droits et démarches",
        url: "https://www.ameli.fr/assure/droits-demarches/famille/maternite-paternite-adoption"
      },
      {
        label: "Service-Public.fr — Déclaration de naissance",
        url: "https://www.service-public.fr/particuliers/vosdroits/F961"
      },
      {
        label: "Sécurité routière — Bien attacher son enfant en voiture",
        url: "https://www.securite-routiere.gouv.fr/chacun-sa-conduite/conseils-sur-la-route-avec-les-enfants/bien-attacher-son-enfant-en-voiture"
      }
    ]
  },

{
    slug: "comment-reconnaitre-les-signes-de-debut-du-travail",
    title: "Comment reconnaître les signes de début du travail ?",
    description:
      "Contractions régulières, perte des eaux, bouchon muqueux : les repères utiles pour reconnaître le début du travail et savoir quand contacter la maternité.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Troisième trimestre",
    subcategorySlug: "troisieme-trimestre",
    readingTime: "9 min",
    publishedAt: "2026-06-14",
    updatedAt: "2026-06-14",
    tone: "rose",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Le début du travail se manifeste le plus souvent par des contractions qui deviennent progressivement régulières, plus longues, plus rapprochées et plus intenses.",
          "La rupture de la poche des eaux peut survenir avant ou après le début des contractions : contactez alors la maternité, même si vous n’avez pas mal.",
          "La perte du bouchon muqueux peut annoncer que le col évolue, mais elle ne signifie pas forcément que l’accouchement est imminent.",
          "Un saignement rouge, une diminution des mouvements du bébé, une douleur continue ou des contractions avant 37 semaines nécessitent un avis rapide.",
          "Les consignes de votre maternité restent prioritaires : appelez-la dès que vous avez un doute."
        ],
        quote:
          "Le travail ne commence pas exactement de la même manière pour toutes les femmes. L’évolution des signes compte souvent davantage qu’un symptôme isolé."
      },
      {
        title: "Qu’appelle-t-on le début du travail ?",
        paragraphs: [
          "Le travail correspond à des contractions utérines efficaces qui entraînent progressivement des modifications du col de l’utérus, puis sa dilatation.",
          "À la maison, il n’est pas possible de savoir avec certitude si le col se modifie. On se repère donc surtout grâce au rythme des contractions, à leur évolution et aux autres signes associés.",
          "Le début peut être progressif, avec plusieurs heures de contractions encore espacées, ou plus rapide. Il peut aussi commencer par la rupture de la poche des eaux."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Les contractions du travail évoluent : elles tendent à devenir plus régulières, plus longues, plus fortes et plus rapprochées.",
          "La perte des eaux correspond à un écoulement de liquide clair, souvent difficile à retenir, qui peut être franc ou se produire par petites fuites répétées.",
          "La perte du bouchon muqueux est possible plusieurs jours avant le travail et ne suffit pas, à elle seule, pour décider de partir à la maternité."
        ],
        quote:
          "Chronométrez les contractions pendant quelque temps et observez surtout si elles poursuivent leur progression malgré le repos ou un changement de position."
      },
      {
        title: "Comment reconnaître les contractions du travail ?",
        paragraphs: [
          "Une contraction provoque un durcissement de l’utérus qui augmente progressivement, atteint un maximum, puis diminue. Le ventre redevient plus souple entre deux contractions.",
          "Au début du travail, elles peuvent rester espacées et supportables. Avec la progression, elles tendent à revenir selon un rythme plus prévisible, à durer davantage et à demander de plus en plus de concentration.",
          "La douleur peut être ressentie dans le bas-ventre, dans le dos, dans le bassin ou comme des douleurs de règles. Son intensité varie beaucoup d’une femme à l’autre.",
          "Il n’existe pas de seuil universel valable pour toutes. La distance avec la maternité, un premier accouchement ou non, les antécédents et les consignes données pendant le suivi doivent être pris en compte."
        ]
      },
      {
        title: "Contractions de travail ou contractions d’entraînement ?",
        paragraphs: [
          "Les contractions d’entraînement sont souvent irrégulières, variables et sans progression nette. Elles peuvent diminuer après du repos, une hydratation, une douche tiède ou un changement de position.",
          "Les contractions du travail persistent généralement et deviennent progressivement plus organisées, plus rapprochées ou plus intenses.",
          "Cette distinction n’est pas toujours évidente au début. Si les contractions continuent, vous empêchent de parler normalement, vous inquiètent ou s’accompagnent d’un autre signe, appelez la maternité."
        ]
      },
      {
        title: "Comment chronométrer les contractions ?",
        bullets: [
          "Notez l’heure à laquelle chaque contraction commence.",
          "Mesurez sa durée jusqu’au relâchement de l’utérus.",
          "Calculez l’intervalle entre le début d’une contraction et le début de la suivante.",
          "Observez pendant environ une heure si la situation vous le permet.",
          "Notez aussi l’évolution de l’intensité et votre capacité à parler ou à bouger pendant la contraction."
        ],
        paragraphs: [
          "Une application peut aider, mais un simple chronomètre suffit. Ne restez pas concentrée sur les chiffres si vous avez un signe d’alerte : contactez directement la maternité."
        ]
      },
      {
        title: "Comment reconnaître la perte des eaux ?",
        paragraphs: [
          "La rupture de la poche des eaux peut provoquer un écoulement soudain et abondant, mais aussi une fuite plus discrète et continue.",
          "Le liquide amniotique est généralement clair, transparent ou légèrement rosé. Il est souvent difficile à retenir contrairement à l’urine.",
          "Mettez une protection externe, notez l’heure, la couleur et l’odeur du liquide, puis appelez la maternité. N’utilisez pas de tampon et évitez les rapports sexuels après une suspicion de rupture.",
          "Un liquide vert, brun, malodorant ou fortement teinté de sang nécessite une évaluation rapide."
        ]
      },
      {
        title: "La perte du bouchon muqueux annonce-t-elle l’accouchement ?",
        paragraphs: [
          "Le bouchon muqueux ressemble à une glaire épaisse, parfois transparente, rosée ou légèrement striée de sang.",
          "Sa perte indique que le col commence peut-être à évoluer, mais le travail peut débuter quelques heures comme plusieurs jours plus tard.",
          "En l’absence de contractions régulières, de rupture de la poche des eaux ou de saignement important, la perte du bouchon muqueux seule ne nécessite généralement pas un départ immédiat.",
          "Un véritable saignement rouge ou abondant n’est cependant pas assimilable au bouchon muqueux et doit faire contacter la maternité sans attendre."
        ]
      },
      {
        title: "Quels autres changements peuvent précéder le travail ?",
        bullets: [
          "Une sensation que le bébé est descendu plus bas dans le bassin.",
          "Une pression pelvienne plus marquée.",
          "Des douleurs de règles ou un mal de dos inhabituel.",
          "Des selles plus fréquentes ou une sensation digestive différente.",
          "Une grande fatigue ou, au contraire, un regain d’énergie."
        ],
        paragraphs: [
          "Ces changements sont inconstants et peu spécifiques. Ils peuvent accompagner la fin de grossesse sans signifier que le travail a réellement commencé."
        ]
      },
      {
        title: "Quand faut-il partir à la maternité ?",
        paragraphs: [
          "Suivez d’abord les consignes qui vous ont été données par votre maternité. Certaines demandent de venir lorsque les contractions sont régulières depuis un certain temps, tandis que d’autres adaptent leurs recommandations à votre situation.",
          "Appelez avant de partir si cela est possible : l’équipe pourra vous poser quelques questions sur le terme, le rythme des contractions, la rupture éventuelle de la poche des eaux, les mouvements du bébé et vos antécédents.",
          "Partez ou demandez un avis sans attendre en cas de rupture de la poche des eaux, de saignement, de diminution des mouvements du bébé, de douleur continue ou inhabituelle, de malaise, de fièvre ou d’envie irrépressible de pousser.",
          "Si vous habitez loin, si vous avez déjà accouché rapidement, si vous attendez plusieurs bébés ou si votre grossesse nécessite une surveillance particulière, les consignes peuvent être différentes."
        ]
      },
      {
        title: "Que faire pendant le début du travail à la maison ?",
        bullets: [
          "Restez dans un environnement calme et économisez votre énergie.",
          "Buvez régulièrement et mangez légèrement si votre maternité ne vous a donné aucune restriction.",
          "Videz régulièrement votre vessie.",
          "Marchez, changez de position ou reposez-vous selon ce qui vous soulage.",
          "Respirez lentement pendant les contractions.",
          "Vérifiez que la valise, le dossier de grossesse et le moyen de transport sont prêts."
        ],
        paragraphs: [
          "Une douche ou un bain tiède peut apporter du confort si la poche des eaux n’est pas rompue et si aucune contre-indication ne vous a été donnée.",
          "Ne conduisez pas vous-même si les contractions sont fortes, rapprochées ou si vous ne vous sentez pas en sécurité."
        ]
      },
      {
        title: "Quand faut-il appeler sans attendre ?",
        bullets: [
          "Vous perdez les eaux, même sans contraction.",
          "Vous avez un saignement rouge ou abondant.",
          "Le bébé bouge nettement moins que d’habitude.",
          "Vous avez des contractions régulières ou douloureuses avant 37 semaines.",
          "Vous ressentez une douleur abdominale continue entre les contractions.",
          "Vous avez de la fièvre, un malaise, des maux de tête intenses ou des troubles visuels.",
          "Vous ressentez une forte envie de pousser ou avez l’impression que le bébé arrive."
        ],
        paragraphs: [
          "En cas d’urgence ou si l’accouchement semble imminent, appelez le 15 ou le 112. Ne tentez pas de rejoindre seule la maternité."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Les contractions du travail évoluent généralement vers un rythme plus régulier, une durée plus longue et une intensité croissante.",
          "La perte des eaux nécessite de contacter la maternité, même si les contractions n’ont pas commencé.",
          "La perte du bouchon muqueux seule ne signifie pas forcément que l’accouchement est imminent.",
          "Un saignement, une diminution des mouvements du bébé, une douleur inhabituelle ou des signes avant 37 semaines nécessitent un avis rapide.",
          "En cas de doute, appelez la maternité : l’équipe est là pour vous guider."
        ]
      }
    ],
    sources: [
      {
        label: "Haute Autorité de santé — Accouchement normal : accompagnement de la physiologie et interventions médicales",
        url: "https://www.has-sante.fr/jcms/c_2820336/fr/accouchement-normal-accompagnement-de-la-physiologie-et-interventions-medicales"
      },
      {
        label: "Assistance Publique – Hôpitaux de Paris — Grossesse et accouchement",
        url: "https://www.aphp.fr/grossesse-et-accouchement"
      },
      {
        label: "CHU de Toulouse — Quand venir à la maternité ?",
        url: "https://www.chu-toulouse.fr/-quand-venir-a-la-maternite-"
      },
      {
        label: "NHS — Signs that labour has begun",
        url: "https://www.nhs.uk/pregnancy/labour-and-birth/signs-that-labour-has-begun/"
      }
    ]
  },

{
    slug: "perte-des-eaux-que-faut-il-faire",
    title: "Perte des eaux : que faut-il faire ?",
    description:
      "Comment reconnaître une perte des eaux, quoi faire immédiatement et quand contacter la maternité.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Troisième trimestre",
    subcategorySlug: "troisieme-trimestre",
    readingTime: "8 min",
    publishedAt: "2026-06-14",
    updatedAt: "2026-06-14",
    tone: "rose",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Si vous pensez perdre les eaux, mettez une protection externe, notez l’heure, la couleur et l’odeur du liquide, puis contactez votre maternité.",
          "La perte des eaux peut être abondante et soudaine, mais aussi se manifester par de petites fuites répétées.",
          "N’utilisez pas de tampon, ne prenez pas de bain et évitez les rapports sexuels après une suspicion de rupture de la poche des eaux.",
          "Un liquide vert, brun, malodorant, très sanglant ou accompagné d’une diminution des mouvements du bébé nécessite une évaluation rapide.",
          "Avant 37 semaines, toute suspicion de perte des eaux doit être signalée sans attendre."
        ],
        quote:
          "Même sans contraction et même si vous n’êtes pas certaine qu’il s’agisse de liquide amniotique, appelez la maternité pour être guidée."
      },
      {
        title: "Qu’est-ce que la perte des eaux ?",
        paragraphs: [
          "La poche des eaux est constituée de membranes qui entourent le bébé et contiennent le liquide amniotique. Lorsqu’elles se rompent, le liquide peut s’écouler par le vagin.",
          "La rupture peut survenir pendant le travail, avant le début des contractions ou, plus rarement, avant le terme de la grossesse.",
          "Après la rupture, le risque infectieux augmente progressivement. C’est pourquoi la maternité doit être informée afin d’évaluer la situation et de vous indiquer quand venir."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Le liquide amniotique est généralement clair, transparent ou légèrement rosé.",
          "L’écoulement est souvent involontaire : il peut être difficile à retenir et recommencer lorsque vous bougez, toussez ou changez de position.",
          "Une perte des eaux peut être franche, comme une grande quantité de liquide, ou discrète, sous forme de petites fuites continues."
        ],
        quote:
          "En cas de doute entre urine, pertes vaginales et liquide amniotique, ne cherchez pas à poser vous-même le diagnostic : contactez la maternité."
      },
      {
        title: "Comment reconnaître une perte des eaux ?",
        paragraphs: [
          "Certaines femmes ressentent un petit claquement ou une sensation de liquide chaud qui s’écoule soudainement. Pour d’autres, la fuite est beaucoup plus progressive.",
          "Le liquide amniotique est souvent fluide et aqueux. Contrairement à l’urine, il n’a généralement pas l’odeur caractéristique d’ammoniaque et son écoulement peut se poursuivre malgré le fait de contracter le périnée.",
          "Les pertes vaginales habituelles sont souvent plus épaisses ou glaireuses. Toutefois, il n’est pas toujours possible de faire la différence à domicile.",
          "À la maternité, un examen au spéculum et, si nécessaire, des tests spécifiques peuvent confirmer ou non la rupture des membranes."
        ]
      },
      {
        title: "Que faire immédiatement ?",
        bullets: [
          "Notez l’heure à laquelle l’écoulement a commencé.",
          "Observez la couleur, l’odeur et la quantité approximative du liquide.",
          "Mettez une serviette hygiénique ou une protection propre, sans rien introduire dans le vagin.",
          "Appelez votre maternité et suivez ses consignes.",
          "Préparez votre dossier de grossesse, votre valise et un moyen de transport.",
          "Continuez à observer les mouvements du bébé."
        ],
        paragraphs: [
          "Vous pouvez vous asseoir ou vous allonger confortablement en attendant les consignes. Il n’est pas nécessaire de rester totalement immobile, sauf indication particulière de l’équipe.",
          "Si le liquide continue à couler, changez simplement de protection pour rester confortable et permettre à l’équipe d’en observer la couleur si besoin."
        ]
      },
      {
        title: "Faut-il aller immédiatement à la maternité ?",
        paragraphs: [
          "Oui, il faut au minimum contacter la maternité rapidement, même si vous n’avez aucune contraction. L’équipe vous indiquera quand venir selon votre terme, vos antécédents, la couleur du liquide et les mouvements du bébé.",
          "Certaines maternités demandent une venue immédiate, tandis que d’autres peuvent vous laisser un court délai si la grossesse est à terme, que le liquide est clair et que tout va bien.",
          "Ne restez pas seule sans avis médical. La rupture de la poche des eaux nécessite une évaluation, notamment pour vérifier le bien-être du bébé et le risque infectieux."
        ]
      },
      {
        title: "Quels signes nécessitent de partir sans attendre ?",
        bullets: [
          "Le liquide est vert, brun ou très foncé.",
          "Le liquide est malodorant.",
          "Vous avez un saignement rouge ou abondant.",
          "Le bébé bouge nettement moins que d’habitude.",
          "Vous avez de la fièvre, des frissons ou un malaise.",
          "Vous ressentez une douleur abdominale continue ou inhabituelle.",
          "Vous sentez quelque chose dans le vagin ou avez une forte envie de pousser.",
          "La perte des eaux survient avant 37 semaines."
        ],
        paragraphs: [
          "En cas d’urgence, de saignement important, de sensation que le bébé arrive ou si vous ne pouvez pas rejoindre la maternité en sécurité, appelez le 15 ou le 112."
        ]
      },
      {
        title: "Pourquoi la couleur du liquide est-elle importante ?",
        paragraphs: [
          "Un liquide clair ou légèrement rosé est fréquent. De petites traces rosées peuvent être liées aux modifications du col.",
          "Un liquide verdâtre ou brunâtre peut contenir du méconium, les premières selles du bébé. Cela nécessite une surveillance à la maternité.",
          "Un liquide rouge ou fortement teinté de sang n’est pas considéré comme une perte des eaux normale et doit conduire à une évaluation urgente.",
          "Une odeur inhabituelle ou désagréable peut faire suspecter une infection et doit être signalée."
        ]
      },
      {
        title: "Que ne faut-il pas faire après la perte des eaux ?",
        bullets: [
          "Ne mettez pas de tampon.",
          "N’introduisez pas vos doigts dans le vagin.",
          "N’ayez pas de rapport sexuel.",
          "Ne prenez pas de bain sans l’accord de la maternité.",
          "N’attendez pas plusieurs heures sans avoir appelé.",
          "Ne conduisez pas vous-même si vous avez des contractions fortes, un malaise ou un signe d’alerte."
        ],
        paragraphs: [
          "Une douche rapide peut généralement être possible si vous vous sentez bien, mais demandez l’avis de votre maternité, car les consignes peuvent varier selon la situation."
        ]
      },
      {
        title: "Et si les contractions ne commencent pas ?",
        paragraphs: [
          "Il est possible de perdre les eaux avant le début du travail. Les contractions peuvent commencer spontanément dans les heures qui suivent.",
          "À la maternité, l’équipe surveillera votre température, le rythme cardiaque du bébé, l’apparition des contractions et d’éventuels signes d’infection.",
          "Selon le terme, le résultat du dépistage du streptocoque B, votre état et celui du bébé, l’équipe peut proposer une surveillance, des antibiotiques ou un déclenchement.",
          "La conduite à tenir dépend de nombreux facteurs : il n’est donc pas possible de prévoir à l’avance un délai identique pour toutes les femmes."
        ]
      },
      {
        title: "Que se passe-t-il si la perte des eaux survient avant 37 semaines ?",
        paragraphs: [
          "Une rupture des membranes avant 37 semaines est appelée rupture prématurée des membranes avant terme. Elle nécessite une évaluation rapide en maternité.",
          "La prise en charge dépend du nombre de semaines de grossesse, de la présence de contractions, du risque infectieux et de l’état du bébé.",
          "Une hospitalisation, une antibiothérapie, une surveillance rapprochée ou des traitements destinés à préparer le bébé à une naissance prématurée peuvent être proposés.",
          "N’attendez pas l’apparition de contractions pour appeler : une simple suspicion de fuite de liquide avant terme doit être signalée."
        ]
      },
      {
        title: "Comment se préparer avant le départ ?",
        bullets: [
          "Prenez votre dossier de grossesse et vos documents administratifs.",
          "Emportez une protection propre et éventuellement une serviette pour le siège de la voiture.",
          "Demandez à une personne de vous accompagner.",
          "Notez l’heure, la couleur du liquide et le début éventuel des contractions.",
          "Gardez le téléphone de la maternité facilement accessible."
        ],
        paragraphs: [
          "Ne retardez pas votre départ pour finir de préparer la valise si la maternité vous demande de venir rapidement. L’essentiel pourra être apporté plus tard par votre accompagnant."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Toute suspicion de perte des eaux doit conduire à contacter la maternité.",
          "La rupture peut être franche ou se manifester par de petites fuites répétées.",
          "Après la perte des eaux, utilisez uniquement une protection externe et évitez tout ce qui peut augmenter le risque infectieux.",
          "La couleur du liquide, les mouvements du bébé, votre terme et votre état général sont des informations importantes à transmettre.",
          "En cas de doute ou de signe d’alerte, ne restez pas seule : demandez un avis médical rapidement."
        ]
      }
    ],
    sources: [
      {
        label: "Haute Autorité de santé — Accouchement normal : accompagnement de la physiologie et interventions médicales",
        url: "https://www.has-sante.fr/jcms/c_2820336/fr/accouchement-normal-accompagnement-de-la-physiologie-et-interventions-medicales"
      },
      {
        label: "Assistance Publique – Hôpitaux de Paris — Grossesse et accouchement",
        url: "https://www.aphp.fr/grossesse-et-accouchement"
      },
      {
        label: "Collège national des gynécologues et obstétriciens français — Recommandations pour la pratique clinique",
        url: "https://www.cngof.fr/pratiques-cliniques/recommandations-pour-la-pratique-clinique/"
      },
      {
        label: "NHS — Signs that labour has begun",
        url: "https://www.nhs.uk/pregnancy/labour-and-birth/signs-that-labour-has-begun/"
      }
    ]
  },

{
    slug: "comment-preparer-le-retour-a-la-maison-apres-la-naissance",
    title: "Comment préparer le retour à la maison après la naissance ?",
    description:
      "Organisation, suivi médical, repos, alimentation du bébé et soutien : les repères utiles pour préparer sereinement le retour à la maison après la maternité.",
    category: "Accouchement",
    categorySlug: "accouchement",
    subcategory: "Suites immédiates",
    subcategorySlug: "suites-immediates",
    readingTime: "10 min",
    publishedAt: "2026-06-14",
    updatedAt: "2026-06-14",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Préparez surtout un environnement simple, sûr et pratique : un endroit pour faire dormir le bébé, quelques vêtements, du matériel de change et des repas faciles pour les parents.",
          "Avant la sortie, vérifiez que le suivi de la mère et du nouveau-né est organisé avec une sage-femme, un médecin ou la PMI.",
          "Les premiers jours sont consacrés au repos, à l’alimentation du bébé, aux soins essentiels et à l’observation de l’état de la mère et de l’enfant.",
          "Il n’est pas nécessaire que la maison soit parfaite : mieux vaut limiter les visites, accepter de l’aide et préserver le sommeil dès que possible.",
          "Fièvre, saignements très abondants, douleur importante, difficulté respiratoire, bébé très somnolent ou qui s’alimente mal nécessitent un avis médical rapide."
        ],
        quote:
          "Le meilleur retour à la maison n’est pas celui où tout est parfaitement rangé, mais celui où les parents savent qui appeler, peuvent se reposer et disposent de l’essentiel."
      },
      {
        title: "Pourquoi préparer le retour avant la naissance ?",
        paragraphs: [
          "Le retour à la maison peut être à la fois heureux, intense et déstabilisant. Après quelques jours entourés par l’équipe de la maternité, les parents se retrouvent responsables des soins quotidiens tout en récupérant de l’accouchement.",
          "Anticiper quelques éléments pratiques permet de réduire la charge mentale : rendez-vous de suivi, repas, linge, couchage du bébé, aide de l’entourage et numéros utiles.",
          "L’objectif n’est pas de tout prévoir, mais de rendre les premiers jours plus simples et de savoir vers qui se tourner en cas de doute."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Organisez le suivi avant la sortie : une première visite doit être prévue rapidement après le retour, particulièrement après une sortie précoce.",
          "Préparez seulement l’essentiel pour le bébé et pour votre récupération, sans multiplier le matériel inutile.",
          "Planifiez du soutien concret : repas, courses, ménage, garde des aînés ou présence d’un proche, plutôt que des visites longues."
        ],
        quote:
          "Avant de quitter la maternité, demandez clairement qui appeler la nuit, le week-end et en cas de problème concernant la mère ou le bébé."
      },
      {
        title: "Quel suivi prévoir après la sortie de maternité ?",
        paragraphs: [
          "Le suivi postnatal doit être organisé avant le retour à domicile. Une sage-femme peut surveiller la récupération de la mère, la cicatrisation, les saignements, la douleur, la tension artérielle, l’allaitement ou les biberons, ainsi que l’état général du bébé.",
          "Après une durée de séjour standard, la Haute Autorité de santé recommande une première visite dans la semaine suivant la sortie, si possible dans les 48 heures. Après une sortie précoce, la première visite doit avoir lieu dans les 24 heures.",
          "Un examen médical du nouveau-né est également recommandé entre le sixième et le dixième jour de vie. Les rendez-vous exacts peuvent varier selon la maternité et la situation de l’enfant.",
          "Gardez à portée de main les coordonnées de la maternité, de la sage-femme, du médecin, du pédiatre et de la Protection maternelle et infantile."
        ]
      },
      {
        title: "Que faut-il préparer dans la maison ?",
        bullets: [
          "Un couchage sûr et dégagé pour le bébé.",
          "Quelques bodies, pyjamas, langes et une gigoteuse adaptée à la saison.",
          "Des couches et le matériel de change recommandé.",
          "Un thermomètre.",
          "Des protections hygiéniques adaptées au post-partum.",
          "Des vêtements souples et confortables pour la mère.",
          "Une petite réserve de produits du quotidien pour éviter les courses urgentes.",
          "Un espace accessible pour les soins, sans avoir à porter ou déplacer du matériel lourd."
        ],
        paragraphs: [
          "Il n’est pas nécessaire d’aménager plusieurs postes de change ni d’acheter de nombreux produits de toilette. Pour un nouveau-né, la simplicité est généralement préférable.",
          "Rangez les objets les plus utilisés à hauteur de main, surtout après une césarienne ou en cas de douleurs périnéales."
        ]
      },
      {
        title: "Comment préparer un sommeil sûr pour le bébé ?",
        paragraphs: [
          "Le bébé doit dormir sur le dos, dans son propre lit ou berceau, sur un matelas ferme et plat.",
          "Le couchage doit rester vide : pas d’oreiller, de couette, de tour de lit, de cale-bébé, de peluche ni d’objet mou.",
          "Une gigoteuse adaptée à la température de la pièce remplace les couvertures. Évitez de trop couvrir le bébé.",
          "Le lit peut être installé dans la chambre des parents pendant les premiers mois afin de faciliter la surveillance et les repas nocturnes.",
          "Ne vous endormez pas avec le bébé sur un canapé ou un fauteuil. Si vous le prenez dans votre lit pour le nourrir, replacez-le dans son couchage dès que vous êtes réveillée et disponible."
        ]
      },
      {
        title: "Comment simplifier les repas des parents ?",
        bullets: [
          "Préparez ou congelez quelques plats simples avant la naissance.",
          "Gardez des aliments rapides à consommer : soupes, légumes, féculents, œufs, produits laitiers, fruits et collations.",
          "Prévoyez une bouteille d’eau à proximité de l’endroit où vous nourrissez le bébé.",
          "Demandez aux proches d’apporter un repas plutôt qu’un cadeau supplémentaire.",
          "Utilisez ponctuellement la livraison de courses si cela allège réellement votre organisation."
        ],
        paragraphs: [
          "Après l’accouchement, l’alimentation doit surtout être variée, suffisante et facile à préparer. Il n’existe pas de régime particulier obligatoire en dehors d’une indication médicale.",
          "En cas d’allaitement, buvez selon votre soif et mangez normalement. Une alimentation équilibrée suffit généralement."
        ]
      },
      {
        title: "Comment organiser l’alimentation du bébé ?",
        paragraphs: [
          "Que le bébé soit allaité ou nourri au biberon, les premiers jours servent à observer ses signes d’éveil, la qualité des prises alimentaires, les urines, les selles et l’évolution du poids.",
          "Pour l’allaitement, installez un espace confortable avec de l’eau, des coussins ordinaires si besoin et les coordonnées d’une professionnelle pouvant vous aider rapidement.",
          "Pour les biberons, vérifiez les recommandations de préparation données par la maternité, l’hygiène du matériel et le dosage exact indiqué sur la boîte de lait.",
          "Ne changez pas de lait, ne donnez pas d’eau et n’ajoutez rien au biberon sans avis médical.",
          "Un bébé qui refuse plusieurs repas, tète très peu, est difficile à réveiller ou mouille moins de couches doit être évalué."
        ]
      },
      {
        title: "Comment préserver le repos de la mère ?",
        paragraphs: [
          "La récupération demande du temps, que l’accouchement ait eu lieu par voie basse ou par césarienne. Les saignements, la fatigue, les douleurs et les variations émotionnelles sont fréquents.",
          "Essayez de vous allonger plusieurs fois par jour et de dormir lorsque cela est possible, même brièvement. Les tâches domestiques peuvent attendre.",
          "Évitez de porter des charges lourdes et reprenez les activités progressivement. Après une césarienne, suivez les consignes spécifiques de la maternité.",
          "Acceptez une aide concrète pour les repas, le linge, les courses ou les autres enfants. L’autre parent peut prendre en charge les changes, les rots, le bain, les repas et la logistique."
        ]
      },
      {
        title: "Comment gérer les visites ?",
        paragraphs: [
          "Il est possible de limiter les visites pendant les premiers jours. La mère récupère, le bébé s’adapte et les parents apprennent à se connaître.",
          "Prévenez l’entourage que les visites seront courtes, espacées et confirmées à l’avance. Une personne malade ne doit pas venir au contact du nouveau-né.",
          "Demandez à chacun de se laver les mains avant de toucher le bébé et évitez les bisous sur le visage ou les mains.",
          "Vous n’avez pas à recevoir ni à préparer un repas pour les visiteurs. Une visite utile peut consister à apporter des courses, lancer une machine ou promener l’aîné."
        ]
      },
      {
        title: "Quels soins prévoir pour la mère ?",
        bullets: [
          "Surveiller les saignements et leur évolution.",
          "Prendre les traitements prescrits et respecter les doses.",
          "Nettoyer et surveiller la cicatrice du périnée ou de la césarienne selon les consignes.",
          "Boire régulièrement et prévenir la constipation.",
          "Observer les seins en cas d’allaitement : douleur importante, rougeur ou fièvre.",
          "Respecter les rendez-vous postnataux et parler de la contraception."
        ],
        paragraphs: [
          "Des saignements comparables à des règles peuvent persister plusieurs semaines, mais ils doivent diminuer progressivement.",
          "Consultez rapidement en cas de saignement très abondant, de gros caillots répétés, de fièvre, de mauvaise odeur, de douleur qui augmente, de difficulté à respirer, de douleur dans un mollet ou de maux de tête intenses."
        ]
      },
      {
        title: "Quels signes surveiller chez le bébé ?",
        bullets: [
          "La qualité des repas et la capacité du bébé à se réveiller pour manger.",
          "Le nombre de couches mouillées et l’émission des selles.",
          "La température et la respiration.",
          "La couleur de la peau, notamment une jaunisse qui s’intensifie.",
          "Le tonus, les pleurs et le comportement habituel.",
          "L’état du cordon ombilical."
        ],
        paragraphs: [
          "Demandez un avis rapidement si le bébé est très somnolent, difficile à réveiller, respire mal, devient bleu ou gris, présente une température anormale, vomit de façon répétée, s’alimente mal ou mouille nettement moins ses couches.",
          "En cas de détresse respiratoire, de coloration bleutée, de malaise ou si le bébé ne réagit pas normalement, appelez le 15 ou le 112."
        ]
      },
      {
        title: "Et si les émotions deviennent difficiles ?",
        paragraphs: [
          "Une grande émotivité, des pleurs ou une irritabilité peuvent apparaître dans les premiers jours : c’est souvent le baby blues, qui reste généralement transitoire.",
          "Demandez de l’aide si la tristesse persiste, si l’anxiété devient envahissante, si vous ne parvenez plus à dormir même lorsque le bébé dort, si vous vous sentez incapable de vous occuper de vous ou de votre enfant, ou si vous avez des pensées inquiétantes.",
          "Parlez-en rapidement à une sage-femme, un médecin, la maternité ou la PMI. Une dépression du post-partum peut toucher n’importe quel parent et nécessite un accompagnement.",
          "En cas d’idées suicidaires, de peur de faire du mal au bébé ou de perte de contact avec la réalité, demandez une aide médicale urgente et ne restez pas seule."
        ]
      },
      {
        title: "Que mettre sur une liste de contacts utiles ?",
        bullets: [
          "Le numéro de la maternité et des urgences obstétricales.",
          "La sage-femme chargée du suivi à domicile.",
          "Le médecin traitant et le pédiatre ou médecin du bébé.",
          "La Protection maternelle et infantile de votre secteur.",
          "Le 15 et le 112 en cas d’urgence.",
          "Une ou deux personnes proches pouvant venir rapidement."
        ],
        paragraphs: [
          "Placez cette liste près du téléphone et partagez-la avec l’autre parent ou la personne qui vous accompagne."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Le retour à la maison se prépare surtout en organisant le suivi médical, le soutien et les besoins essentiels du quotidien.",
          "Le bébé a besoin d’un couchage sûr, d’être nourri régulièrement et d’être observé, mais pas d’une grande quantité de matériel.",
          "La mère doit pouvoir se reposer, récupérer et demander de l’aide sans attendre que la situation devienne difficile.",
          "Les visites peuvent être limitées et les proches orientés vers une aide concrète.",
          "En cas de doute sur l’état de la mère ou du bébé, contactez la maternité, la sage-femme ou un médecin."
        ]
      }
    ],
    sources: [
      {
        label: "Haute Autorité de santé — Sortie de maternité après accouchement : conditions et organisation du retour à domicile des mères et de leurs nouveau-nés",
        url: "https://www.has-sante.fr/jcms/c_1290110/fr/sortie-de-maternite-apres-accouchement-conditions-et-organisation-du-retour-a-domicile-des-meres-et-de-leurs-nouveau-nes"
      },
      {
        label: "Assurance Maladie — Le suivi de la mère et du nouveau-né après la naissance",
        url: "https://www.ameli.fr/assure/sante/themes/accouchement-et-nouveau-ne/suivi-mere-nouveau-ne-apres-naissance"
      },
      {
        label: "Santé publique France — 1000 premiers jours",
        url: "https://www.1000-premiers-jours.fr/"
      },
      {
        label: "Ministère de la Santé — Prévention des risques liés au sommeil du nourrisson",
        url: "https://sante.gouv.fr/prevention-en-sante/preserver-sa-sante/article/prevention-des-risques-lies-au-sommeil-du-nourrisson"
      }
    ]
  },

{
    slug: "premier-rendez-vous-de-grossesse-comment-se-deroule-t-il",
    title: "Premier rendez-vous de grossesse : comment se déroule-t-il ?",
    description:
      "Questions, examen clinique, analyses, déclaration de grossesse : tout ce qu’il faut savoir pour préparer le premier rendez-vous de suivi.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Examens et suivi",
    subcategorySlug: "examens-suivi",
    readingTime: "9 min",
    publishedAt: "2026-06-14",
    updatedAt: "2026-06-14",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Le premier examen prénatal doit avoir lieu avant la fin du troisième mois de grossesse.",
          "Il peut être réalisé par une sage-femme, un médecin généraliste ou un gynécologue-obstétricien.",
          "Le professionnel fait le point sur vos antécédents, vos traitements, vos symptômes, votre mode de vie et le déroulement de la grossesse.",
          "Un examen clinique est réalisé et plusieurs analyses sont prescrites, notamment le groupe sanguin et le dépistage de certaines infections.",
          "La déclaration de grossesse est généralement effectuée à l’issue de ce rendez-vous."
        ],
        quote:
          "Ce premier rendez-vous ne sert pas seulement à prescrire des examens : il permet aussi d’identifier vos besoins, vos inquiétudes et les éventuels facteurs nécessitant un suivi particulier."
      },
      {
        title: "Quand prendre le premier rendez-vous de grossesse ?",
        paragraphs: [
          "Il est conseillé de prendre rendez-vous dès que la grossesse est confirmée afin d’obtenir une consultation dans les premières semaines.",
          "En France, le premier examen prénatal obligatoire doit être réalisé avant la fin du troisième mois de grossesse.",
          "Il n’est pas nécessaire d’attendre la première échographie pour consulter. Le rendez-vous permet justement d’organiser les examens et les étapes du suivi.",
          "En cas de douleur importante, de saignement, de malaise, de fièvre ou d’antécédent de grossesse extra-utérine, consultez plus rapidement."
        ]
      },
      {
        title: "Avec quel professionnel prendre rendez-vous ?",
        paragraphs: [
          "Le suivi d’une grossesse sans complication peut être assuré par une sage-femme, un médecin généraliste ou un gynécologue-obstétricien.",
          "Une sage-femme peut réaliser les consultations prénatales, prescrire les examens nécessaires et effectuer la déclaration de grossesse.",
          "Un suivi par un gynécologue-obstétricien peut être proposé en cas de grossesse à risque, d’antécédents particuliers ou de problème médical.",
          "Vous pouvez choisir un professionnel en ville, à la maternité ou dans un centre de protection maternelle et infantile selon votre situation."
        ]
      },
      {
        title: "Comment préparer le rendez-vous ?",
        bullets: [
          "Notez la date du premier jour de vos dernières règles, si vous la connaissez.",
          "Préparez la liste de vos traitements, compléments alimentaires et allergies.",
          "Rassemblez vos comptes rendus médicaux importants et vos résultats récents.",
          "Apportez votre carte Vitale et votre carte de mutuelle.",
          "Notez vos antécédents médicaux, chirurgicaux et gynécologiques.",
          "Préparez les questions qui vous préoccupent."
        ],
        paragraphs: [
          "Vous pouvez venir seule ou accompagnée si cela vous rassure. La présence de l’autre parent n’est pas obligatoire.",
          "Ne vous inquiétez pas si vous ne connaissez pas toutes les dates ou informations : le professionnel vous aidera à reconstituer les éléments utiles."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Le rendez-vous commence généralement par un échange détaillé sur votre santé et votre grossesse.",
          "L’examen clinique permet d’évaluer votre état général et de rechercher d’éventuels facteurs de risque.",
          "La consultation se termine souvent par les prescriptions, l’organisation du suivi et la déclaration de grossesse."
        ],
        quote:
          "Il n’existe pas un déroulement strictement identique pour toutes les femmes : certains examens dépendent du terme, des symptômes et des antécédents."
      },
      {
        title: "Quelles questions le professionnel va-t-il poser ?",
        bullets: [
          "La date des dernières règles et la régularité habituelle des cycles.",
          "Les grossesses précédentes et leur déroulement.",
          "Les maladies, opérations ou hospitalisations passées.",
          "Les traitements en cours et les allergies.",
          "Les antécédents familiaux importants.",
          "La consommation de tabac, d’alcool ou d’autres substances.",
          "Les conditions de travail et les éventuelles expositions à risque.",
          "Votre situation familiale, sociale et psychologique.",
          "Les symptômes actuels : nausées, douleurs, saignements, fatigue ou anxiété."
        ],
        paragraphs: [
          "Certaines questions peuvent sembler personnelles, mais elles servent à adapter le suivi et à proposer de l’aide si nécessaire.",
          "Vous pouvez signaler une difficulté financière, professionnelle, conjugale ou psychologique : ces informations sont confidentielles."
        ]
      },
      {
        title: "Quel examen clinique est réalisé ?",
        paragraphs: [
          "Le professionnel mesure généralement le poids et la tension artérielle.",
          "Il peut examiner le cœur, les poumons, l’abdomen et les jambes selon votre situation.",
          "Un examen gynécologique n’est pas systématique. Il peut être proposé en cas de symptômes, pour réaliser un frottis si vous n’êtes pas à jour ou si le professionnel estime qu’il est utile.",
          "Au tout début de la grossesse, il n’est pas toujours possible d’entendre les battements du cœur avec un appareil externe. Cela ne signifie pas qu’il existe un problème."
        ]
      },
      {
        title: "Une échographie est-elle faite pendant ce rendez-vous ?",
        paragraphs: [
          "Pas nécessairement. Le premier rendez-vous et la première échographie sont souvent deux rendez-vous distincts.",
          "L’échographie du premier trimestre est habituellement réalisée entre 11 semaines d’aménorrhée et 13 semaines d’aménorrhée plus 6 jours.",
          "Elle permet notamment de dater la grossesse, de vérifier le nombre d’embryons, d’observer le développement et de mesurer la clarté nucale dans le cadre du dépistage de la trisomie 21.",
          "Une échographie plus précoce peut être demandée en cas de douleur, de saignement, de doute sur le terme ou d’antécédent particulier."
        ]
      },
      {
        title: "Quelles analyses sont prescrites ?",
        bullets: [
          "La détermination du groupe sanguin et du rhésus si nécessaire.",
          "La recherche d’anticorps irréguliers.",
          "Le dépistage de la rubéole.",
          "Le dépistage de la toxoplasmose.",
          "Le dépistage de la syphilis.",
          "Le dépistage de l’hépatite B.",
          "La proposition d’un dépistage du VIH.",
          "Une analyse d’urines, notamment pour rechercher du sucre ou des protéines."
        ],
        paragraphs: [
          "D’autres examens peuvent être ajoutés selon vos antécédents, vos symptômes ou les habitudes de la maternité.",
          "Si vous n’êtes pas immunisée contre la toxoplasmose, des prises de sang régulières seront proposées pendant la grossesse."
        ]
      },
      {
        title: "Comment se passe le dépistage de la trisomie 21 ?",
        paragraphs: [
          "Le dépistage combiné du premier trimestre repose sur votre âge, une prise de sang et la mesure de la clarté nucale lors de l’échographie.",
          "Il permet d’estimer une probabilité, mais ne pose pas de diagnostic.",
          "Selon le résultat, un dépistage prénatal non invasif sur ADN libre circulant peut être proposé, puis éventuellement un examen diagnostique.",
          "Le professionnel doit vous expliquer les objectifs, les limites et les différentes possibilités afin que vous puissiez décider librement."
        ]
      },
      {
        title: "Quand la déclaration de grossesse est-elle faite ?",
        paragraphs: [
          "La déclaration de grossesse doit être transmise avant la fin du troisième mois.",
          "Le médecin ou la sage-femme peut généralement l’effectuer en ligne à l’aide de votre carte Vitale. Elle est alors envoyée directement à l’Assurance Maladie et à la Caf ou à la MSA.",
          "Si la télétransmission n’est pas possible, un formulaire papier vous est remis.",
          "Cette démarche permet d’ouvrir les droits liés à la maternité et d’organiser la prise en charge des examens."
        ]
      },
      {
        title: "Le professionnel va-t-il parler des habitudes de vie ?",
        paragraphs: [
          "Oui. La consultation permet d’aborder l’alimentation, l’activité physique, le sommeil, le travail, les médicaments et la prévention des infections.",
          "Le professionnel rappelle qu’aucune consommation d’alcool n’est considérée comme sans risque pendant la grossesse et peut proposer une aide pour arrêter le tabac.",
          "Il vérifie également les vaccinations, notamment la protection contre la coqueluche, la grippe et la Covid-19 selon les recommandations en vigueur.",
          "N’arrêtez pas un traitement prescrit sans avis médical. Certains médicaments doivent être poursuivis ou adaptés plutôt que supprimés brutalement."
        ]
      },
      {
        title: "L’acide folique est-il encore utile ?",
        paragraphs: [
          "La supplémentation en acide folique est idéalement commencée avant la conception et poursuivie pendant le début de la grossesse.",
          "Elle contribue à réduire le risque d’anomalies de fermeture du tube neural.",
          "Si vous n’en prenez pas encore, parlez-en lors du rendez-vous. Le professionnel adaptera la dose à votre situation.",
          "Des doses plus élevées sont parfois prescrites en cas d’antécédent ou de traitement particulier."
        ]
      },
      {
        title: "Qu’est-ce que l’entretien prénatal précoce ?",
        paragraphs: [
          "L’entretien prénatal précoce est un temps d’échange consacré à vos besoins, votre projet de naissance, votre environnement et vos éventuelles difficultés.",
          "Il est distinct du suivi médical habituel et peut être réalisé par une sage-femme ou un médecin.",
          "Il permet d’organiser un accompagnement personnalisé, de présenter la préparation à la naissance et d’orienter vers d’autres professionnels si besoin.",
          "Il peut être réalisé dès le début de la grossesse, seule ou en couple."
        ]
      },
      {
        title: "Quelles questions peut-on poser ?",
        bullets: [
          "Comment seront organisés les prochains rendez-vous ?",
          "Quand réaliser la première échographie ?",
          "Quels médicaments puis-je prendre en cas de douleur ou de nausées ?",
          "Quels aliments et activités dois-je éviter ?",
          "À quels signes dois-je consulter rapidement ?",
          "Comment choisir la maternité et quand s’y inscrire ?",
          "Quels professionnels peuvent m’accompagner ?",
          "Comment obtenir de l’aide si je me sens anxieuse ou dépassée ?"
        ],
        paragraphs: [
          "Aucune question n’est inutile. Vous pouvez demander des explications supplémentaires ou prendre des notes pendant la consultation."
        ]
      },
      {
        title: "Que se passe-t-il après ce premier rendez-vous ?",
        paragraphs: [
          "Le professionnel vous remet les ordonnances pour les analyses et l’échographie, puis planifie la suite du suivi.",
          "Après ce premier examen, une consultation prénatale est prévue chaque mois à partir du quatrième mois jusqu’à l’accouchement.",
          "Le calendrier peut être renforcé en cas de grossesse multiple, de maladie chronique, d’hypertension, de diabète, de complications antérieures ou d’anomalie détectée.",
          "Vous restez libre de changer de professionnel au cours de la grossesse si vous souhaitez un suivi différent."
        ]
      },
      {
        title: "Quand consulter avant le rendez-vous prévu ?",
        bullets: [
          "Saignement vaginal.",
          "Douleur abdominale ou pelvienne importante.",
          "Malaise, faiblesse marquée ou douleur à l’épaule.",
          "Fièvre.",
          "Vomissements empêchant de boire.",
          "Essoufflement inhabituel ou douleur thoracique.",
          "Aggravation d’une maladie chronique."
        ],
        paragraphs: [
          "En cas de symptômes importants ou inquiétants, contactez un professionnel de santé, la maternité ou les urgences sans attendre le rendez-vous programmé."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Le premier rendez-vous de grossesse doit avoir lieu avant la fin du troisième mois.",
          "Il peut être assuré par une sage-femme, un médecin généraliste ou un gynécologue-obstétricien.",
          "Il comprend un échange détaillé, un examen clinique, des prescriptions d’analyses et l’organisation de la première échographie.",
          "La déclaration de grossesse est généralement réalisée à l’issue de cette consultation.",
          "Ce rendez-vous est aussi le moment de poser vos questions et de signaler toute difficulté médicale, psychologique ou sociale."
        ]
      }
    ],
    sources: [
      {
        label: "Service Public — Grossesse : examens médicaux",
        url: "https://www.service-public.fr/particuliers/vosdroits/F963"
      },
      {
        label: "Assurance Maladie — Suivi mensuel de la grossesse à partir du 4e mois",
        url: "https://www.ameli.fr/assure/sante/themes/grossesse/grossesse-en-bonne-sante/suivi-mensuel-grossesse"
      },
      {
        label: "Haute Autorité de santé — Comment mieux informer les femmes enceintes ?",
        url: "https://www.has-sante.fr/jcms/c_547976/fr/comment-mieux-informer-les-femmes-enceintes"
      },
      {
        label: "Ministère de la Santé — L’entretien prénatal précoce",
        url: "https://sante.gouv.fr/prevention-en-sante/sante-des-populations/1000jours/article/l-entretien-prenatal-precoce"
      }
    ]
  },

{
    slug: "premiere-echographie-quand-a-t-elle-lieu-et-que-verifie-t-elle",
    title: "Première échographie : quand a-t-elle lieu et que vérifie-t-elle ?",
    description:
      "Date, déroulement, mesures et dépistage : les repères essentiels pour comprendre la première échographie de grossesse.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Examens et suivi",
    subcategorySlug: "examens-suivi",
    readingTime: "9 min",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "La première échographie recommandée a généralement lieu entre 11 semaines d’aménorrhée et 13 semaines d’aménorrhée plus 6 jours.",
          "Elle sert à vérifier que la grossesse évolue, à dater précisément son début et à déterminer s’il y a un ou plusieurs bébés.",
          "Elle permet aussi d’observer les premières structures anatomiques et de mesurer la clarté nucale dans le cadre du dépistage de la trisomie 21.",
          "Elle peut être réalisée par voie abdominale ou, si l’image n’est pas suffisante, par voie endovaginale.",
          "Une échographie normale est rassurante, mais elle ne peut pas exclure toutes les anomalies."
        ],
        quote:
          "Cette échographie est à la fois un examen médical important et souvent un moment très attendu par les futurs parents."
      },
      {
        title: "Quand la première échographie a-t-elle lieu ?",
        paragraphs: [
          "En France, la première échographie recommandée du suivi de grossesse est réalisée au premier trimestre, habituellement entre 11 semaines d’aménorrhée et 13 semaines d’aménorrhée plus 6 jours.",
          "Cette période permet de dater la grossesse avec précision, de mesurer la clarté nucale et d’observer plusieurs éléments du développement du bébé.",
          "Le rendez-vous est généralement prescrit lors de la première consultation prénatale.",
          "Une échographie plus précoce peut être proposée en cas de saignement, de douleur, de doute sur le terme, de grossesse obtenue par assistance médicale à la procréation ou d’antécédent particulier."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "La datation repose principalement sur la mesure de la longueur cranio-caudale, c’est-à-dire la distance entre le sommet du crâne et les fesses du bébé.",
          "La vitalité est vérifiée grâce à l’activité cardiaque et aux mouvements visibles à l’écran.",
          "La mesure de la clarté nucale participe au calcul du risque de trisomie 21, mais elle ne constitue pas un diagnostic."
        ],
        quote:
          "Le terme retenu après cette échographie peut être légèrement différent de celui calculé à partir des dernières règles."
      },
      {
        title: "Que vérifie l’échographiste ?",
        bullets: [
          "La localisation de la grossesse dans l’utérus.",
          "La présence d’une activité cardiaque.",
          "Le nombre d’embryons ou de fœtus.",
          "La datation de la grossesse.",
          "La croissance du bébé à ce stade.",
          "L’aspect général de la tête, du tronc et des membres.",
          "La mesure de la clarté nucale.",
          "L’aspect du placenta et de l’environnement du bébé."
        ],
        paragraphs: [
          "L’examen permet également d’identifier certaines anomalies visibles précocement, mais il ne remplace pas l’échographie morphologique du deuxième trimestre.",
          "Tous les organes ne peuvent pas encore être analysés avec le même niveau de détail."
        ]
      },
      {
        title: "Comment la grossesse est-elle datée ?",
        paragraphs: [
          "L’échographiste mesure la longueur cranio-caudale du bébé. Cette mesure est particulièrement fiable au premier trimestre.",
          "Elle permet d’estimer l’âge gestationnel et de fixer une date prévue d’accouchement.",
          "Si la date obtenue diffère de celle calculée à partir des dernières règles, la datation échographique est souvent retenue.",
          "Cette date sert ensuite de référence pour organiser les examens, surveiller la croissance et déterminer le terme de la grossesse."
        ]
      },
      {
        title: "Comment sait-on s’il y a un ou plusieurs bébés ?",
        paragraphs: [
          "L’échographie permet de voir s’il existe un seul bébé ou une grossesse multiple.",
          "En cas de grossesse gémellaire, l’échographiste cherche aussi à déterminer le nombre de placentas et de poches amniotiques.",
          "Cette information est importante car elle influence la fréquence et le type de surveillance pendant la grossesse.",
          "Le type de grossesse gémellaire est plus facile à déterminer au premier trimestre qu’ultérieurement."
        ]
      },
      {
        title: "Qu’est-ce que la clarté nucale ?",
        paragraphs: [
          "La clarté nucale correspond à une petite zone liquidienne située derrière la nuque du bébé.",
          "Elle est mesurée pendant une période précise du premier trimestre, lorsque la taille du bébé permet une mesure fiable.",
          "Cette mesure est intégrée au dépistage combiné de la trisomie 21 avec l’âge maternel et les marqueurs sanguins.",
          "Une clarté nucale augmentée ne signifie pas automatiquement que le bébé présente une anomalie, mais elle peut conduire à proposer des examens complémentaires."
        ]
      },
      {
        title: "La première échographie dépiste-t-elle la trisomie 21 ?",
        paragraphs: [
          "Elle participe au dépistage, mais elle ne suffit pas à elle seule.",
          "Le dépistage combiné du premier trimestre tient compte de la mesure de la clarté nucale, d’une prise de sang et de l’âge de la mère.",
          "Le résultat exprime une probabilité et non une certitude.",
          "Selon le niveau de risque obtenu, un dépistage prénatal non invasif sur ADN libre circulant peut être proposé, puis éventuellement un examen diagnostique."
        ]
      },
      {
        title: "Comment se déroule l’examen ?",
        paragraphs: [
          "Vous êtes installée allongée sur le dos ou légèrement inclinée.",
          "Le professionnel applique du gel sur l’abdomen puis déplace une sonde pour obtenir les différentes images.",
          "L’examen dure généralement entre vingt et trente minutes, mais il peut être plus long si la position du bébé ne permet pas certaines mesures.",
          "L’échographiste peut vous demander de tousser, de bouger légèrement ou de marcher quelques minutes afin que le bébé change de position."
        ]
      },
      {
        title: "L’échographie est-elle toujours réalisée sur le ventre ?",
        paragraphs: [
          "Le plus souvent, l’examen est réalisé par voie abdominale.",
          "Une échographie endovaginale peut être proposée si la grossesse est très précoce, si l’utérus est rétroversé ou si les images abdominales ne sont pas assez précises.",
          "La sonde est alors protégée et introduite doucement dans le vagin.",
          "Cet examen n’augmente pas le risque de fausse couche et n’est pas dangereux pour le bébé."
        ]
      },
      {
        title: "Faut-il avoir la vessie pleine ?",
        paragraphs: [
          "Les consignes varient selon le cabinet, le terme et le type d’échographie prévu.",
          "Une vessie modérément pleine peut parfois améliorer les images au début de la grossesse, mais ce n’est pas toujours nécessaire.",
          "Suivez les indications données lors de la prise de rendez-vous.",
          "Si vous êtes très inconfortable, signalez-le à l’équipe plutôt que de rester avec une douleur importante."
        ]
      },
      {
        title: "Peut-on venir accompagnée ?",
        paragraphs: [
          "Dans la plupart des établissements, une personne accompagnante est autorisée, mais les règles peuvent varier.",
          "Il est préférable de vérifier au moment du rendez-vous, notamment pour la présence des enfants.",
          "L’examen est avant tout un acte médical : l’échographiste doit pouvoir se concentrer et peut rester silencieux pendant certaines mesures.",
          "Les explications sont généralement données au fur et à mesure ou à la fin de l’examen."
        ]
      },
      {
        title: "Peut-on connaître le sexe du bébé ?",
        paragraphs: [
          "À ce stade, le sexe peut parfois être supposé, mais l’estimation reste incertaine.",
          "La position du bébé et le terme influencent fortement la fiabilité.",
          "Le sexe est généralement identifié plus sûrement lors de l’échographie du deuxième trimestre.",
          "Si vous ne souhaitez pas connaître le sexe, dites-le clairement au début de l’examen."
        ]
      },
      {
        title: "Que faut-il apporter au rendez-vous ?",
        bullets: [
          "L’ordonnance de l’échographie.",
          "La carte Vitale et la carte de mutuelle.",
          "Les résultats des prises de sang déjà réalisées.",
          "Les comptes rendus d’échographies précédentes, s’il y en a.",
          "Le dossier de grossesse ou le carnet de maternité.",
          "La date du premier jour des dernières règles, si vous la connaissez."
        ],
        paragraphs: [
          "Portez de préférence des vêtements faciles à relever au niveau du ventre.",
          "Vous pouvez aussi préparer les questions que vous souhaitez poser."
        ]
      },
      {
        title: "Que se passe-t-il si le bébé est mal positionné ?",
        paragraphs: [
          "Il arrive que le bébé soit dans une position qui empêche une mesure correcte, notamment celle de la clarté nucale.",
          "Le professionnel peut patienter, vous demander de bouger ou recommencer après quelques minutes.",
          "Dans certains cas, un nouveau rendez-vous est proposé dans les jours suivants, tant que la période recommandée n’est pas dépassée.",
          "Cela ne signifie pas qu’il existe un problème : il s’agit souvent simplement d’une difficulté technique."
        ]
      },
      {
        title: "Que signifient les mesures du compte rendu ?",
        paragraphs: [
          "La longueur cranio-caudale, souvent notée LCC, sert principalement à dater la grossesse.",
          "La clarté nucale, parfois notée CN, participe au dépistage de certaines anomalies chromosomiques.",
          "La fréquence cardiaque et différentes observations anatomiques sont également consignées.",
          "Le compte rendu peut contenir des termes techniques : demandez au professionnel de vous les expliquer avant de partir."
        ]
      },
      {
        title: "Une échographie normale garantit-elle que tout va bien ?",
        paragraphs: [
          "Une première échographie normale est rassurante, mais elle ne peut pas exclure toutes les anomalies.",
          "Certaines structures sont encore trop petites pour être étudiées précisément, et certaines anomalies apparaissent plus tard.",
          "L’échographie morphologique du deuxième trimestre reste donc indispensable pour analyser plus finement les organes.",
          "Des examens supplémentaires peuvent aussi être proposés selon les antécédents, les résultats du dépistage ou l’évolution de la grossesse."
        ]
      },
      {
        title: "Que se passe-t-il si une anomalie est suspectée ?",
        paragraphs: [
          "Le professionnel vous explique ce qui a été observé et les limites de l’examen.",
          "Une échographie de contrôle ou un avis spécialisé peut être proposé dans un centre de diagnostic prénatal.",
          "Selon la situation, d’autres examens peuvent être recommandés, comme un dépistage sur ADN libre circulant, une biopsie de trophoblaste ou une amniocentèse.",
          "Une image inhabituelle ne correspond pas toujours à une anomalie confirmée : des examens complémentaires sont souvent nécessaires avant de conclure."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "La première échographie recommandée a lieu entre 11 semaines d’aménorrhée et 13 semaines d’aménorrhée plus 6 jours.",
          "Elle permet de dater la grossesse, de vérifier la vitalité et de déterminer le nombre de bébés.",
          "Elle observe les premières structures anatomiques et mesure la clarté nucale.",
          "Elle participe au dépistage de la trisomie 21 mais ne pose pas de diagnostic.",
          "Une échographie normale est rassurante, sans pouvoir exclure toutes les anomalies."
        ]
      }
    ],
    sources: [
      {
        label: "Service Public — Grossesse : examens médicaux",
        url: "https://www.service-public.fr/particuliers/vosdroits/F963"
      },
      {
        label: "Haute Autorité de santé — Dépistage prénatal de la trisomie 21",
        url: "https://www.has-sante.fr/jcms/c_2898274/fr/depistage-prenatal-de-la-trisomie-21"
      },
      {
        label: "Assurance Maladie — Le suivi médical de la grossesse",
        url: "https://www.ameli.fr/assure/sante/themes/grossesse/grossesse-en-bonne-sante/suivi-medical-grossesse"
      },
      {
        label: "Collège français d’échographie fœtale — Informations sur l’échographie obstétricale",
        url: "https://www.cfef.org/"
      }
    ]
  },

{
    slug: "quelles-prises-de-sang-et-analyses-sont-realisees-pendant-la-grossesse",
    title: "Quelles prises de sang et analyses sont réalisées pendant la grossesse ?",
    description:
      "Groupe sanguin, toxoplasmose, rubéole, diabète gestationnel, anémie : les principaux examens biologiques réalisés pendant la grossesse et leur calendrier.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Examens et suivi",
    subcategorySlug: "examens-suivi",
    readingTime: "10 min",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Les analyses réalisées pendant la grossesse servent à connaître votre groupe sanguin, dépister certaines infections et surveiller votre état de santé.",
          "Au début de la grossesse, plusieurs sérologies sont prescrites, notamment pour la rubéole, la toxoplasmose, la syphilis, l’hépatite B et le VIH.",
          "Une numération sanguine peut être réalisée pour rechercher une anémie, et des analyses d’urines sont effectuées régulièrement.",
          "Le dépistage du diabète gestationnel n’est pas systématique pour toutes les femmes : il dépend des facteurs de risque et des recommandations du professionnel.",
          "Le calendrier peut être renforcé si la grossesse présente un risque particulier."
        ],
        quote:
          "Un résultat anormal ne signifie pas forcément qu’il existe une complication : il sert souvent à décider d’une surveillance ou d’un examen complémentaire."
      },
      {
        title: "Pourquoi autant d’analyses pendant la grossesse ?",
        paragraphs: [
          "La grossesse modifie le fonctionnement de l’organisme et peut révéler ou aggraver certaines maladies. Les examens biologiques permettent de repérer précocement une infection, une anémie, un trouble du sucre ou un problème immunologique.",
          "Ils servent aussi à prévenir certaines complications pour le bébé, notamment lorsqu’une infection peut traverser le placenta ou lorsqu’il existe une incompatibilité de groupe sanguin.",
          "Tous les examens ne sont pas réalisés au même moment ni chez toutes les femmes. Le suivi dépend du terme, des antécédents, des symptômes et des résultats précédents."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Le bilan du début de grossesse est le plus complet : il réunit plusieurs sérologies, le groupe sanguin et souvent une numération sanguine.",
          "Certaines analyses sont répétées chaque mois uniquement si vous n’êtes pas immunisée ou si votre groupe sanguin le nécessite.",
          "Les urines sont contrôlées régulièrement pour rechercher notamment des protéines, du sucre ou une infection."
        ],
        quote:
          "Gardez tous vos résultats dans votre dossier de grossesse, même lorsqu’ils sont normaux."
      },
      {
        title: "Quelles analyses sont prescrites au début de la grossesse ?",
        bullets: [
          "La détermination du groupe sanguin ABO et du rhésus.",
          "La recherche d’agglutinines irrégulières.",
          "La sérologie de la rubéole.",
          "La sérologie de la toxoplasmose.",
          "Le dépistage de la syphilis.",
          "Le dépistage de l’hépatite B.",
          "La proposition d’un dépistage du VIH.",
          "Une analyse d’urines.",
          "Une numération formule sanguine selon le contexte et les habitudes de suivi."
        ],
        paragraphs: [
          "D’autres examens peuvent être ajoutés selon vos antécédents, votre origine géographique, vos symptômes ou vos traitements.",
          "Le professionnel vous indique si vous devez être à jeun. Beaucoup de prises de sang de grossesse ne nécessitent pas de jeûne."
        ]
      },
      {
        title: "Pourquoi vérifier le groupe sanguin et le rhésus ?",
        paragraphs: [
          "Le groupe sanguin doit être connu de façon fiable, notamment en cas de saignement, d’intervention ou d’accouchement.",
          "Le rhésus est particulièrement important lorsqu’une femme est rhésus négatif. Si le bébé est rhésus positif, l’organisme maternel peut produire des anticorps dirigés contre ses globules rouges.",
          "La recherche d’agglutinines irrégulières sert à détecter ces anticorps.",
          "Une injection d’immunoglobulines anti-D peut être proposée à certains moments de la grossesse ou après une situation à risque afin de prévenir cette immunisation."
        ]
      },
      {
        title: "À quoi sert la sérologie de la toxoplasmose ?",
        paragraphs: [
          "La toxoplasmose est une infection souvent bénigne chez l’adulte, mais elle peut atteindre le bébé lorsqu’elle est contractée pendant la grossesse.",
          "La première prise de sang détermine si vous avez déjà été infectée et si vous êtes immunisée.",
          "Si vous n’êtes pas immunisée, un contrôle sérologique mensuel est généralement réalisé jusqu’à l’accouchement.",
          "Le professionnel vous rappelle alors les mesures de prévention liées à l’alimentation, au lavage des fruits et légumes, à la cuisson de la viande et au contact avec la terre ou les litières."
        ]
      },
      {
        title: "Pourquoi dépister la rubéole ?",
        paragraphs: [
          "La rubéole peut entraîner des complications importantes pour le bébé lorsqu’elle est contractée au début de la grossesse.",
          "La sérologie permet de savoir si vous êtes immunisée, généralement grâce à une vaccination antérieure ou à une ancienne infection.",
          "Si vous n’êtes pas immunisée, la vaccination ne peut pas être réalisée pendant la grossesse. Elle sera proposée après l’accouchement.",
          "Un contrôle peut être prescrit en cours de grossesse selon le résultat initial et les recommandations du professionnel."
        ]
      },
      {
        title: "Quels autres dépistages infectieux sont réalisés ?",
        paragraphs: [
          "Le dépistage de la syphilis est obligatoire car cette infection peut être transmise au bébé et nécessite un traitement.",
          "La recherche de l’antigène de l’hépatite B permet d’organiser la prise en charge du nouveau-né dès la naissance si la mère est porteuse du virus.",
          "Le dépistage du VIH est proposé à toutes les femmes enceintes. Un traitement adapté réduit très fortement le risque de transmission au bébé.",
          "D’autres dépistages, comme l’hépatite C, la chlamydia ou certaines infections sexuellement transmissibles, peuvent être proposés selon les facteurs de risque."
        ]
      },
      {
        title: "Pourquoi réaliser une numération sanguine ?",
        paragraphs: [
          "La numération formule sanguine mesure notamment l’hémoglobine, les globules rouges, les globules blancs et les plaquettes.",
          "Elle permet surtout de rechercher une anémie, fréquente pendant la grossesse, notamment en cas de manque de fer.",
          "Une anémie peut provoquer fatigue, essoufflement, palpitations ou faiblesse, mais elle peut aussi être découverte sans symptôme.",
          "Selon le résultat, le professionnel peut demander un dosage de la ferritine et proposer une supplémentation en fer."
        ]
      },
      {
        title: "Quelles analyses d’urines sont réalisées ?",
        paragraphs: [
          "Les urines sont contrôlées régulièrement au cours de la grossesse.",
          "La recherche de protéines peut aider à repérer une prééclampsie lorsqu’elle est associée à une tension artérielle élevée ou à d’autres signes.",
          "La recherche de sucre peut conduire à approfondir le dépistage d’un trouble de la glycémie.",
          "Un examen cytobactériologique des urines, appelé ECBU, peut être prescrit en cas de symptômes urinaires ou pour rechercher une infection sans symptôme."
        ]
      },
      {
        title: "Comment dépiste-t-on le diabète gestationnel ?",
        paragraphs: [
          "Le diabète gestationnel correspond à une élévation du taux de sucre dans le sang apparaissant pendant la grossesse.",
          "Le dépistage est proposé en priorité en présence de facteurs de risque : âge maternel élevé, surpoids, antécédent familial de diabète, diabète gestationnel antérieur ou naissance d’un bébé de poids élevé.",
          "Une glycémie à jeun peut être réalisée au début de la grossesse chez les femmes à risque.",
          "Entre 24 et 28 semaines d’aménorrhée, une hyperglycémie provoquée par voie orale peut être prescrite. Elle consiste à boire une solution sucrée puis à effectuer plusieurs prises de sang."
        ]
      },
      {
        title: "Comment se déroule l’hyperglycémie provoquée ?",
        bullets: [
          "Vous devez généralement être à jeun depuis plusieurs heures.",
          "Une première prise de sang mesure la glycémie à jeun.",
          "Vous buvez une solution contenant du glucose.",
          "D’autres prélèvements sont réalisés une heure puis deux heures plus tard.",
          "Vous devez rester au laboratoire sans manger, fumer ni faire d’effort pendant le test."
        ],
        paragraphs: [
          "La boisson peut provoquer des nausées. Signalez tout malaise au personnel du laboratoire.",
          "Un seul résultat dépassant le seuil retenu peut suffire à poser le diagnostic de diabète gestationnel."
        ]
      },
      {
        title: "Qu’est-ce que la recherche d’agglutinines irrégulières ?",
        paragraphs: [
          "Cette analyse recherche des anticorps dirigés contre certains antigènes présents sur les globules rouges.",
          "Elle est particulièrement importante chez les femmes de rhésus négatif, mais peut aussi concerner d’autres situations.",
          "Elle est réalisée au début de la grossesse puis répétée selon le groupe sanguin et les résultats précédents.",
          "Si des anticorps sont détectés, leur type et leur quantité sont étudiés afin d’adapter la surveillance du bébé."
        ]
      },
      {
        title: "Le dépistage de la trisomie 21 nécessite-t-il une prise de sang ?",
        paragraphs: [
          "Oui. Le dépistage combiné du premier trimestre associe une prise de sang, l’âge maternel et la mesure de la clarté nucale à l’échographie.",
          "Il estime une probabilité et ne constitue pas un diagnostic.",
          "Selon le résultat, un dépistage prénatal non invasif sur ADN libre circulant peut être proposé.",
          "En cas de risque élevé, un examen diagnostique peut être discuté avec une équipe spécialisée."
        ]
      },
      {
        title: "Le dépistage du streptocoque B est-il une prise de sang ?",
        paragraphs: [
          "Non. Il s’agit d’un prélèvement vaginal réalisé en fin de grossesse, habituellement entre 34 et 38 semaines d’aménorrhée selon les pratiques.",
          "Le streptocoque B peut être présent sans provoquer de symptôme chez la mère.",
          "S’il est détecté, des antibiotiques sont généralement administrés pendant le travail afin de réduire le risque d’infection chez le nouveau-né.",
          "Il ne s’agit pas d’une infection sexuellement transmissible et sa présence peut varier au cours du temps."
        ]
      },
      {
        title: "Faut-il refaire certaines analyses en fin de grossesse ?",
        paragraphs: [
          "Une numération sanguine est souvent contrôlée à nouveau pour vérifier l’hémoglobine et les plaquettes.",
          "La recherche d’agglutinines irrégulières peut être répétée selon votre groupe sanguin.",
          "Les sérologies sont renouvelées si vous n’êtes pas immunisée ou si un risque particulier est identifié.",
          "D’autres bilans peuvent être prescrits avant l’accouchement ou l’anesthésie selon les habitudes de la maternité et votre état de santé."
        ]
      },
      {
        title: "Que signifient les résultats positifs ou négatifs ?",
        paragraphs: [
          "Pour une sérologie, un résultat positif peut signifier une immunité ancienne, une infection récente ou simplement nécessiter une confirmation.",
          "Un résultat négatif signifie souvent que vous n’êtes pas immunisée, mais son interprétation dépend de l’analyse concernée.",
          "Ne tentez pas d’interpréter seule des taux ou des valeurs de référence, qui peuvent varier selon les laboratoires.",
          "Le professionnel croise toujours les résultats avec le terme de la grossesse, vos symptômes et les examens précédents."
        ]
      },
      {
        title: "Quand faut-il contacter rapidement un professionnel ?",
        bullets: [
          "Vous recevez un résultat signalé comme urgent par le laboratoire.",
          "Vous avez de la fièvre, une éruption cutanée ou un contact avec une maladie infectieuse.",
          "Vous présentez des brûlures urinaires, des douleurs lombaires ou des frissons.",
          "Vous ressentez une fatigue extrême, un essoufflement important ou des palpitations.",
          "Vous avez des maux de tête intenses, des troubles visuels ou un gonflement brutal.",
          "Vous ne comprenez pas un résultat et aucun rendez-vous n’est prévu rapidement."
        ],
        paragraphs: [
          "Le laboratoire peut signaler une anomalie, mais seul le professionnel qui suit la grossesse peut l’interpréter dans son contexte."
        ]
      },
      {
        title: "Comment bien se préparer aux prélèvements ?",
        bullets: [
          "Vérifiez si vous devez être à jeun.",
          "Buvez de l’eau avant la prise de sang sauf consigne contraire.",
          "Apportez l’ordonnance, la carte Vitale et les résultats précédents.",
          "Signalez les traitements et compléments que vous prenez.",
          "Prévenez le laboratoire si vous faites facilement des malaises.",
          "Demandez quand et comment les résultats seront transmis."
        ],
        paragraphs: [
          "Pour les urines, respectez les consignes du laboratoire concernant le flacon, la toilette locale et le moment du prélèvement."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Le bilan du début de grossesse comprend le groupe sanguin, plusieurs sérologies et des analyses d’urines.",
          "La toxoplasmose est contrôlée chaque mois si vous n’êtes pas immunisée.",
          "La numération sanguine permet notamment de rechercher une anémie.",
          "Le dépistage du diabète gestationnel dépend de vos facteurs de risque et peut nécessiter une hyperglycémie provoquée.",
          "Le calendrier exact des analyses est toujours adapté à votre situation médicale."
        ]
      }
    ],
    sources: [
      {
        label: "Service Public — Grossesse : examens médicaux",
        url: "https://www.service-public.fr/particuliers/vosdroits/F963"
      },
      {
        label: "Assurance Maladie — Le suivi médical de la grossesse",
        url: "https://www.ameli.fr/assure/sante/themes/grossesse/grossesse-en-bonne-sante/suivi-medical-grossesse"
      },
      {
        label: "Haute Autorité de santé — Suivi et orientation des femmes enceintes en fonction des situations à risque identifiées",
        url: "https://www.has-sante.fr/jcms/c_547976/fr/comment-mieux-informer-les-femmes-enceintes"
      },
      {
        label: "Collège national des gynécologues et obstétriciens français — Diabète gestationnel",
        url: "https://www.cngof.fr/pratiques-cliniques/recommandations-pour-la-pratique-clinique/"
      }
    ]
  },

{
    slug: "depistage-de-la-trisomie-21-comment-se-deroule-t-il",
    title: "Dépistage de la trisomie 21 : comment se déroule-t-il ?",
    description:
      "Échographie, prise de sang, calcul de probabilité, DPNI et examens diagnostiques : comprendre les étapes du dépistage de la trisomie 21 pendant la grossesse.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Examens et suivi",
    subcategorySlug: "examens-suivi",
    readingTime: "10 min",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Le dépistage de la trisomie 21 est proposé à toutes les femmes enceintes, mais il n’est jamais obligatoire.",
          "Au premier trimestre, il associe généralement l’âge maternel, une prise de sang et la mesure de la clarté nucale à l’échographie.",
          "Le résultat indique une probabilité et non un diagnostic.",
          "Selon cette probabilité, un dépistage prénatal non invasif, appelé DPNI, peut être proposé à partir d’une prise de sang maternel.",
          "Seuls un prélèvement de villosités choriales ou une amniocentèse permettent de confirmer ou d’exclure avec certitude une trisomie 21."
        ],
        quote:
          "À chaque étape, vous devez recevoir une information claire et pouvoir accepter ou refuser l’examen sans pression."
      },
      {
        title: "Qu’est-ce que la trisomie 21 ?",
        paragraphs: [
          "La trisomie 21 est une anomalie chromosomique liée à la présence d’un chromosome 21 supplémentaire.",
          "Elle peut entraîner une déficience intellectuelle de degré variable, des particularités physiques et parfois des malformations, notamment cardiaques.",
          "Son expression est très variable d’une personne à l’autre.",
          "Le risque augmente avec l’âge maternel, mais la trisomie 21 peut survenir à tout âge."
        ]
      },
      {
        title: "Pourquoi parle-t-on de dépistage et non de diagnostic ?",
        paragraphs: [
          "Le dépistage estime la probabilité que le bébé soit porteur d’une trisomie 21.",
          "Il ne donne pas une réponse certaine : un résultat dit à faible probabilité n’exclut pas totalement la trisomie 21, et un résultat à probabilité élevée ne signifie pas que le bébé est forcément porteur.",
          "Le diagnostic repose sur l’analyse des chromosomes du bébé à partir d’un prélèvement de villosités choriales ou de liquide amniotique.",
          "Cette distinction est essentielle pour comprendre les résultats et décider de la suite."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Le dépistage combiné du premier trimestre associe l’échographie, une prise de sang et l’âge maternel.",
          "Le DPNI analyse de l’ADN placentaire circulant dans le sang maternel et affine fortement l’estimation du risque.",
          "Un DPNI positif doit toujours être confirmé par un examen diagnostique avant toute décision médicale."
        ],
        quote:
          "Le dépistage est une démarche personnelle : vous pouvez demander du temps, poser des questions ou refuser certains examens."
      },
      {
        title: "Quand le dépistage est-il proposé ?",
        paragraphs: [
          "Le dépistage est généralement abordé lors du premier rendez-vous de grossesse.",
          "La première échographie est réalisée entre 11 semaines d’aménorrhée et 13 semaines d’aménorrhée plus 6 jours.",
          "La prise de sang des marqueurs sériques du premier trimestre est réalisée dans une période compatible avec cette échographie.",
          "Si le dépistage du premier trimestre n’a pas pu être effectué, d’autres modalités peuvent être proposées plus tard selon le terme."
        ]
      },
      {
        title: "Que mesure l’échographie du premier trimestre ?",
        paragraphs: [
          "L’échographiste mesure la clarté nucale, une petite zone liquidienne située derrière la nuque du bébé.",
          "Cette mesure doit être réalisée à une période précise et dans des conditions techniques rigoureuses.",
          "Une clarté nucale augmentée peut être associée à une anomalie chromosomique ou à certaines malformations, mais elle ne permet pas à elle seule de poser un diagnostic.",
          "L’échographie vérifie aussi la vitalité, le nombre de bébés, la datation et certains premiers éléments anatomiques."
        ]
      },
      {
        title: "Que mesure la prise de sang du premier trimestre ?",
        paragraphs: [
          "La prise de sang dose des marqueurs produits pendant la grossesse.",
          "Leurs valeurs sont interprétées avec l’âge maternel, le terme précis et la mesure de la clarté nucale.",
          "Un logiciel calcule ensuite une probabilité individuelle de trisomie 21.",
          "Le résultat est souvent présenté sous la forme d’un rapport, par exemple une probabilité sur plusieurs centaines ou plusieurs milliers."
        ]
      },
      {
        title: "Comment interpréter le résultat du dépistage combiné ?",
        paragraphs: [
          "Le résultat classe la grossesse dans une zone de probabilité plus ou moins élevée.",
          "Une probabilité faible ne supprime pas totalement le risque, mais ne justifie généralement pas d’examen supplémentaire spécifique.",
          "Une probabilité intermédiaire conduit souvent à proposer un DPNI.",
          "Une probabilité élevée peut conduire à discuter directement un examen diagnostique, avec la possibilité de réaliser d’abord un DPNI selon la situation et votre choix."
        ]
      },
      {
        title: "Qu’est-ce que le DPNI ?",
        paragraphs: [
          "Le dépistage prénatal non invasif, ou DPNI, est une prise de sang réalisée chez la mère.",
          "Il analyse des fragments d’ADN provenant principalement du placenta et circulant dans le sang maternel.",
          "Le DPNI est beaucoup plus performant que le dépistage combiné pour estimer le risque de trisomie 21.",
          "Il ne présente pas de risque de fausse couche car il ne nécessite aucun prélèvement dans l’utérus."
        ]
      },
      {
        title: "Le DPNI est-il un diagnostic ?",
        paragraphs: [
          "Non. Malgré sa grande fiabilité, le DPNI reste un test de dépistage.",
          "Un résultat négatif rend la trisomie 21 très peu probable, sans l’exclure absolument.",
          "Un résultat positif peut parfois être lié au placenta sans que le bébé soit porteur.",
          "Un résultat positif doit donc être confirmé par une analyse chromosomique après prélèvement de villosités choriales ou amniocentèse."
        ]
      },
      {
        title: "Pourquoi le résultat du DPNI peut-il être non interprétable ?",
        paragraphs: [
          "Dans certains cas, la quantité d’ADN analysable est insuffisante.",
          "Cela peut être lié au terme trop précoce, à certaines caractéristiques maternelles, à la grossesse ou à des raisons techniques.",
          "Le professionnel peut proposer de refaire la prise de sang ou de discuter un autre examen.",
          "Un résultat non interprétable ne signifie pas automatiquement que le bébé présente une anomalie."
        ]
      },
      {
        title: "Qu’est-ce que le prélèvement de villosités choriales ?",
        paragraphs: [
          "Le prélèvement de villosités choriales, aussi appelé biopsie de trophoblaste, prélève un petit fragment du futur placenta.",
          "Il peut être réalisé plus tôt dans la grossesse que l’amniocentèse.",
          "Le prélèvement s’effectue à travers l’abdomen ou, plus rarement, par voie vaginale selon la position du placenta.",
          "Il permet d’étudier les chromosomes et de poser un diagnostic."
        ]
      },
      {
        title: "Qu’est-ce que l’amniocentèse ?",
        paragraphs: [
          "L’amniocentèse consiste à prélever une petite quantité de liquide amniotique à l’aide d’une aiguille fine introduite à travers l’abdomen sous contrôle échographique.",
          "Le liquide contient des cellules du bébé qui peuvent être analysées.",
          "L’examen est réalisé à partir d’un terme défini par l’équipe spécialisée.",
          "Il permet de confirmer ou d’exclure une anomalie chromosomique."
        ]
      },
      {
        title: "Les examens diagnostiques comportent-ils un risque ?",
        paragraphs: [
          "Le prélèvement de villosités choriales et l’amniocentèse sont des examens invasifs.",
          "Ils comportent un faible risque de complication, notamment de fausse couche.",
          "Le professionnel doit vous expliquer le bénéfice attendu, les limites, le déroulement et les risques avant de recueillir votre consentement.",
          "La décision de réaliser ou non l’examen vous appartient."
        ]
      },
      {
        title: "Combien de temps faut-il attendre les résultats ?",
        paragraphs: [
          "Le délai dépend du test réalisé et du laboratoire.",
          "Le résultat du dépistage combiné est généralement disponible après réception des données échographiques et biologiques.",
          "Le DPNI nécessite souvent plusieurs jours.",
          "Après un prélèvement invasif, une première réponse ciblée peut parfois être disponible rapidement, tandis que l’analyse complète demande davantage de temps."
        ]
      },
      {
        title: "Que se passe-t-il si le diagnostic confirme une trisomie 21 ?",
        paragraphs: [
          "Une consultation spécialisée est proposée pour expliquer le diagnostic, ses conséquences possibles et les différentes options.",
          "Vous pouvez rencontrer une équipe de diagnostic prénatal, un généticien, un pédiatre ou des associations de familles.",
          "Vous pouvez décider de poursuivre la grossesse avec un accompagnement adapté ou demander une interruption médicale de grossesse.",
          "Aucune décision ne doit être imposée. Vous devez pouvoir disposer d’une information complète, loyale et d’un temps de réflexion."
        ]
      },
      {
        title: "Peut-on refuser le dépistage ?",
        paragraphs: [
          "Oui. Le dépistage de la trisomie 21 est proposé, mais il n’est pas obligatoire.",
          "Vous pouvez accepter le dépistage combiné, refuser le DPNI ou ne pas souhaiter d’examen diagnostique.",
          "Votre décision ne doit pas modifier la qualité de votre suivi de grossesse.",
          "Le professionnel doit respecter votre choix après vous avoir expliqué les avantages, les limites et les conséquences possibles."
        ]
      },
      {
        title: "Le dépistage est-il pris en charge ?",
        paragraphs: [
          "Les examens recommandés dans le parcours national de dépistage sont pris en charge selon les règles de l’Assurance Maladie.",
          "La prescription et les conditions de réalisation doivent respecter les indications prévues.",
          "Des tests plus larges proposés en dehors du parcours habituel peuvent ne pas être remboursés.",
          "Demandez au professionnel ou au laboratoire de vous préciser la prise en charge avant l’examen."
        ]
      },
      {
        title: "Quelles questions poser au professionnel ?",
        bullets: [
          "Que signifie exactement ma probabilité calculée ?",
          "Quelle est la différence entre dépistage et diagnostic ?",
          "Pourquoi me propose-t-on un DPNI ou un prélèvement invasif ?",
          "Quels sont les bénéfices et les limites de chaque option ?",
          "Quel est le délai pour recevoir les résultats ?",
          "Que se passera-t-il si le résultat est positif ou non interprétable ?",
          "Puis-je rencontrer un conseiller en génétique ou une équipe spécialisée ?"
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Le dépistage de la trisomie 21 est proposé à toutes les femmes enceintes mais reste facultatif.",
          "Le dépistage combiné associe la clarté nucale, une prise de sang et l’âge maternel.",
          "Le DPNI affine fortement l’estimation du risque sans geste invasif.",
          "Un résultat de dépistage positif doit être confirmé par un examen diagnostique.",
          "À chaque étape, la décision vous appartient après une information claire et complète."
        ]
      }
    ],
    sources: [
      {
        label: "Haute Autorité de santé — Dépistage prénatal de la trisomie 21",
        url: "https://www.has-sante.fr/jcms/c_2898274/fr/depistage-prenatal-de-la-trisomie-21"
      },
      {
        label: "Assurance Maladie — Le dépistage prénatal de la trisomie 21",
        url: "https://www.ameli.fr/assure/sante/themes/grossesse/grossesse-en-bonne-sante/depistage-prenatal-trisomie-21"
      },
      {
        label: "Service Public — Grossesse : examens médicaux",
        url: "https://www.service-public.fr/particuliers/vosdroits/F963"
      },
      {
        label: "Agence de la biomédecine — Diagnostic prénatal",
        url: "https://www.agence-biomedecine.fr/Diagnostic-prenatal"
      }
    ]
  },

{
    slug: "deuxieme-echographie-que-verifie-lechographie-morphologique",
    title: "Deuxième échographie : que vérifie l’échographie morphologique ?",
    description:
      "Organes, croissance, placenta, liquide amniotique et sexe du bébé : comprendre ce que vérifie l’échographie morphologique du deuxième trimestre.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Examens et suivi",
    subcategorySlug: "examens-suivi",
    readingTime: "10 min",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "La deuxième échographie recommandée est généralement réalisée autour du cinquième mois, entre 20 et 25 semaines d’aménorrhée selon l’organisation du suivi.",
          "Elle étudie en détail l’anatomie du bébé, sa croissance, ses mouvements, le placenta et la quantité de liquide amniotique.",
          "Elle permet de repérer certaines malformations, mais elle ne peut pas toutes les détecter.",
          "Le sexe du bébé peut souvent être identifié si vous souhaitez le connaître et si sa position le permet.",
          "Si une image est difficile à obtenir ou qu’un doute existe, une échographie de contrôle ou un avis spécialisé peut être proposé."
        ],
        quote:
          "L’échographie morphologique est un examen médical approfondi : l’échographiste peut rester silencieux pendant certaines mesures afin de se concentrer."
      },
      {
        title: "Quand a lieu la deuxième échographie ?",
        paragraphs: [
          "La deuxième échographie du suivi de grossesse est réalisée au deuxième trimestre, généralement autour du cinquième mois.",
          "En pratique, elle est souvent programmée entre 20 et 25 semaines d’aménorrhée, selon les recommandations du professionnel et l’organisation de la maternité.",
          "À ce terme, le bébé est suffisamment développé pour que la plupart de ses organes puissent être observés avec précision.",
          "Le rendez-vous doit parfois être décalé de quelques jours si la datation de la grossesse a été modifiée lors de la première échographie."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "L’échographie analyse l’anatomie du bébé organe par organe.",
          "Elle vérifie aussi la croissance grâce à plusieurs mesures biométriques.",
          "Elle observe l’environnement du bébé : placenta, cordon ombilical et liquide amniotique."
        ],
        quote:
          "Une échographie morphologique normale est rassurante, mais elle ne garantit pas l’absence de toute anomalie."
      },
      {
        title: "Pourquoi l’appelle-t-on échographie morphologique ?",
        paragraphs: [
          "Le terme morphologique signifie que l’examen étudie la forme et la structure des différentes parties du corps du bébé.",
          "L’échographiste suit une liste précise de structures à observer afin d’examiner la tête, le cerveau, le visage, la colonne vertébrale, le thorax, le cœur, l’abdomen et les membres.",
          "L’objectif est de repérer d’éventuelles anomalies visibles à ce stade et d’évaluer le développement global.",
          "Certaines structures restent toutefois difficiles à analyser selon la position du bébé, la qualité des images ou le terme."
        ]
      },
      {
        title: "Que vérifie-t-on au niveau de la tête et du cerveau ?",
        bullets: [
          "La forme du crâne.",
          "Les principales structures du cerveau.",
          "La symétrie des hémisphères.",
          "Les ventricules cérébraux.",
          "La fosse postérieure et le cervelet.",
          "Le profil et certaines structures du visage."
        ],
        paragraphs: [
          "L’échographiste peut aussi rechercher certains signes associés à des anomalies chromosomiques ou neurologiques.",
          "Toutes les anomalies du développement cérébral ne sont pas visibles à ce stade, car certaines apparaissent plus tard."
        ]
      },
      {
        title: "Comment le visage est-il examiné ?",
        paragraphs: [
          "Le profil, le nez, les lèvres et parfois les orbites sont observés selon la position du bébé.",
          "L’examen peut notamment rechercher une fente labiale visible.",
          "La qualité de l’analyse dépend fortement de l’orientation du visage, de la quantité de liquide amniotique et de la position des mains.",
          "Une image incomplète peut conduire à proposer un contrôle sans que cela signifie forcément qu’une anomalie est présente."
        ]
      },
      {
        title: "Que vérifie-t-on au niveau du cœur ?",
        paragraphs: [
          "Le cœur fait partie des organes étudiés avec une attention particulière.",
          "L’échographiste observe la position du cœur, ses quatre cavités, les principaux vaisseaux et le rythme cardiaque.",
          "Certaines malformations cardiaques peuvent être repérées lors de cet examen.",
          "D’autres sont plus difficiles à voir ou peuvent apparaître plus tard, ce qui explique qu’une échographie normale n’exclut pas toutes les cardiopathies."
        ]
      },
      {
        title: "Quels organes de l’abdomen sont observés ?",
        bullets: [
          "L’estomac.",
          "Les reins.",
          "La vessie.",
          "La paroi abdominale.",
          "L’insertion du cordon ombilical.",
          "La position générale des organes."
        ],
        paragraphs: [
          "L’échographiste vérifie également que le diaphragme semble continu et que l’abdomen présente un aspect adapté au terme.",
          "L’observation des reins et de la vessie renseigne indirectement sur la production d’urines et le fonctionnement des voies urinaires."
        ]
      },
      {
        title: "Comment la colonne vertébrale et les membres sont-ils étudiés ?",
        paragraphs: [
          "La colonne vertébrale est examinée dans plusieurs plans afin d’en vérifier l’alignement et la fermeture.",
          "Les bras, les avant-bras, les mains, les cuisses, les jambes et les pieds sont recherchés.",
          "L’échographiste observe aussi les mouvements du bébé.",
          "Le comptage précis de tous les doigts et orteils n’est pas toujours possible ni systématique."
        ]
      },
      {
        title: "Comment la croissance du bébé est-elle évaluée ?",
        paragraphs: [
          "Plusieurs mesures sont réalisées, notamment le diamètre ou le périmètre de la tête, le périmètre abdominal et la longueur du fémur.",
          "Ces mesures sont comparées à des courbes de référence adaptées au terme.",
          "Elles permettent d’estimer le poids du bébé, avec une marge d’erreur.",
          "Une mesure isolée légèrement différente de la moyenne n’indique pas forcément un problème : l’ensemble des données et leur évolution sont pris en compte."
        ]
      },
      {
        title: "Que vérifie-t-on concernant le placenta ?",
        paragraphs: [
          "L’échographiste observe la position du placenta dans l’utérus.",
          "Il vérifie notamment s’il est proche du col ou s’il le recouvre.",
          "Un placenta bas au deuxième trimestre peut remonter avec la croissance de l’utérus. Une échographie de contrôle est alors souvent programmée.",
          "L’aspect général du placenta et son insertion peuvent aussi être décrits."
        ]
      },
      {
        title: "Le cordon ombilical est-il examiné ?",
        paragraphs: [
          "L’insertion du cordon sur le placenta et sur l’abdomen du bébé est observée.",
          "L’échographiste peut vérifier le nombre de vaisseaux présents dans le cordon.",
          "Le Doppler n’est pas systématiquement utilisé pour toutes les grossesses à ce stade.",
          "Il peut être ajouté si la croissance, le placenta ou une situation médicale nécessite une étude de la circulation sanguine."
        ]
      },
      {
        title: "Comment évalue-t-on le liquide amniotique ?",
        paragraphs: [
          "La quantité de liquide amniotique est estimée visuellement ou à l’aide de mesures.",
          "Une quantité trop faible ou trop importante peut nécessiter des examens complémentaires.",
          "Le liquide permet au bébé de bouger et contribue au développement de certains organes, notamment les poumons.",
          "Son volume peut varier au cours de la grossesse et doit toujours être interprété avec les autres éléments de l’examen."
        ]
      },
      {
        title: "Peut-on connaître le sexe du bébé ?",
        paragraphs: [
          "Le sexe peut souvent être identifié lors de l’échographie morphologique si la position du bébé le permet.",
          "L’estimation est généralement fiable, mais une erreur reste possible.",
          "Si vous souhaitez connaître le sexe, vous pouvez le préciser au début de l’examen.",
          "Si vous ne souhaitez pas le savoir, dites-le clairement afin que l’échographiste évite de vous le révéler."
        ]
      },
      {
        title: "Comment se déroule l’examen ?",
        paragraphs: [
          "Vous êtes installée allongée, le ventre découvert.",
          "L’échographiste applique du gel puis déplace la sonde abdominale pour obtenir les différentes vues.",
          "L’examen dure souvent entre trente et quarante-cinq minutes, mais sa durée varie selon la position du bébé et les images à obtenir.",
          "Le professionnel peut appuyer légèrement sur le ventre, vous demander de changer de position ou de marcher quelques minutes."
        ]
      },
      {
        title: "Faut-il avoir la vessie pleine ?",
        paragraphs: [
          "À ce stade de la grossesse, une vessie pleine n’est généralement pas nécessaire.",
          "Certaines structures peuvent toutefois être mieux vues avec une vessie modérément remplie selon la position du bébé ou du placenta.",
          "Suivez les consignes données par le cabinet ou la maternité.",
          "Si aucune instruction particulière ne vous a été donnée, vous pouvez généralement aller aux toilettes normalement."
        ]
      },
      {
        title: "Pourquoi l’échographiste peut-il rester silencieux ?",
        paragraphs: [
          "L’examen demande beaucoup de concentration et plusieurs mesures précises.",
          "Le silence ne signifie pas qu’un problème a été découvert.",
          "L’échographiste peut préférer terminer l’analyse avant de commenter les images.",
          "À la fin, il vous explique les principaux résultats et vous remet un compte rendu."
        ]
      },
      {
        title: "Que se passe-t-il si le bébé est mal positionné ?",
        paragraphs: [
          "La position du bébé peut empêcher de voir correctement certaines structures.",
          "Le professionnel peut vous demander de changer de côté, de bouger, de tousser ou de revenir après quelques minutes.",
          "Un rendez-vous de contrôle peut être proposé si toutes les images nécessaires n’ont pas pu être obtenues.",
          "Cette situation est fréquente et ne signifie pas qu’une anomalie est suspectée."
        ]
      },
      {
        title: "Que signifie une échographie de contrôle ?",
        paragraphs: [
          "Une échographie de contrôle peut être demandée pour compléter une structure mal vue, surveiller une mesure ou réévaluer la position du placenta.",
          "Elle peut aussi vérifier la croissance ou un élément anatomique qui nécessite une nouvelle observation.",
          "Le délai dépend de la raison du contrôle.",
          "Le professionnel doit vous expliquer ce qui doit être revu et pourquoi."
        ]
      },
      {
        title: "Que se passe-t-il si une anomalie est suspectée ?",
        paragraphs: [
          "L’échographiste vous explique ce qui a été observé et les limites de l’examen.",
          "Une échographie spécialisée peut être proposée dans un centre de diagnostic prénatal.",
          "Selon la situation, d’autres examens peuvent être discutés : échocardiographie fœtale, IRM, analyse génétique ou prélèvement diagnostique.",
          "Une image inhabituelle ne correspond pas toujours à une anomalie confirmée. Des examens complémentaires sont souvent nécessaires avant de conclure."
        ]
      },
      {
        title: "Une échographie normale exclut-elle toutes les anomalies ?",
        paragraphs: [
          "Non. L’échographie morphologique permet de dépister de nombreuses anomalies, mais pas toutes.",
          "Certaines malformations sont trop petites, apparaissent plus tard ou ne modifient pas l’aspect visible des organes.",
          "La qualité de l’examen dépend aussi de la position du bébé, de la quantité de liquide amniotique et des conditions techniques.",
          "Le suivi du troisième trimestre reste important pour surveiller la croissance et l’évolution de la grossesse."
        ]
      },
      {
        title: "Que faut-il apporter au rendez-vous ?",
        bullets: [
          "L’ordonnance.",
          "La carte Vitale et la carte de mutuelle.",
          "Le dossier de grossesse.",
          "Le compte rendu de la première échographie.",
          "Les résultats du dépistage de la trisomie 21.",
          "Les comptes rendus médicaux utiles en cas d’antécédent particulier."
        ],
        paragraphs: [
          "Portez des vêtements faciles à relever au niveau du ventre.",
          "Vous pouvez noter vos questions à l’avance afin de ne pas les oublier."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "La deuxième échographie est généralement réalisée autour du cinquième mois.",
          "Elle étudie en détail l’anatomie, la croissance et les mouvements du bébé.",
          "Elle vérifie aussi le placenta, le cordon et la quantité de liquide amniotique.",
          "Elle peut détecter certaines anomalies, sans pouvoir toutes les exclure.",
          "Une échographie de contrôle est parfois nécessaire simplement parce qu’une structure n’a pas pu être correctement observée."
        ]
      }
    ],
    sources: [
      {
        label: "Service Public — Grossesse : examens médicaux",
        url: "https://www.service-public.fr/particuliers/vosdroits/F963"
      },
      {
        label: "Assurance Maladie — Les échographies de la grossesse",
        url: "https://www.ameli.fr/assure/sante/themes/grossesse/grossesse-en-bonne-sante/echographies-grossesse"
      },
      {
        label: "Haute Autorité de santé — Échographie obstétricale au cours de la grossesse",
        url: "https://www.has-sante.fr/jcms/c_547976/fr/comment-mieux-informer-les-femmes-enceintes"
      },
      {
        label: "Collège français d’échographie fœtale — Informations sur l’échographie obstétricale",
        url: "https://www.cfef.org/"
      }
    ]
  },

{
    slug: "test-du-diabete-gestationnel-qui-est-concerne-et-comment-se-passe-t-il",
    title: "Test du diabète gestationnel : qui est concerné et comment se passe-t-il ?",
    description:
      "Facteurs de risque, glycémie à jeun, HGPO, résultats et prise en charge : comprendre le dépistage du diabète gestationnel pendant la grossesse.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Examens et suivi",
    subcategorySlug: "examens-suivi",
    readingTime: "9 min",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Le dépistage du diabète gestationnel n’est pas systématique pour toutes les femmes enceintes : il est surtout proposé en présence de facteurs de risque.",
          "Une glycémie à jeun peut être prescrite dès le début de la grossesse.",
          "Entre 24 et 28 semaines d’aménorrhée, le test le plus utilisé est l’hyperglycémie provoquée par voie orale, appelée HGPO.",
          "L’HGPO consiste à boire une solution contenant 75 g de glucose puis à réaliser plusieurs prises de sang.",
          "Un seul résultat au-dessus du seuil retenu peut suffire à poser le diagnostic."
        ],
        quote:
          "Le diabète gestationnel ne provoque souvent aucun symptôme : le dépistage permet donc de le repérer avant l’apparition de complications."
      },
      {
        title: "Qu’est-ce que le diabète gestationnel ?",
        paragraphs: [
          "Le diabète gestationnel correspond à une augmentation du taux de sucre dans le sang découverte pendant la grossesse.",
          "Il apparaît lorsque l’organisme ne produit pas suffisamment d’insuline pour compenser la diminution normale de la sensibilité à cette hormone au cours de la grossesse.",
          "Il survient le plus souvent au deuxième ou au troisième trimestre.",
          "Dans certains cas, le bilan réalisé en début de grossesse révèle un diabète déjà présent avant la grossesse mais jusque-là méconnu."
        ]
      },
      {
        title: "Qui est concerné par le dépistage ?",
        paragraphs: [
          "En France, le dépistage est généralement ciblé sur les femmes présentant au moins un facteur de risque.",
          "Le professionnel qui suit la grossesse évalue ces facteurs dès le premier rendez-vous puis peut réévaluer la situation en cours de grossesse.",
          "Même sans facteur de risque initial, un test peut être proposé si l’échographie montre un bébé très grand, un excès de liquide amniotique ou un autre signe évocateur."
        ]
      },
      {
        title: "Quels sont les principaux facteurs de risque ?",
        bullets: [
          "Un âge maternel de 35 ans ou plus.",
          "Un indice de masse corporelle supérieur ou égal à 25 avant la grossesse.",
          "Un antécédent personnel de diabète gestationnel.",
          "Un antécédent de naissance d’un bébé de poids élevé.",
          "Un parent du premier degré atteint de diabète de type 2.",
          "Une glycémie anormale découverte au début de la grossesse."
        ],
        paragraphs: [
          "D’autres éléments peuvent être pris en compte par le professionnel selon votre histoire médicale et l’évolution de la grossesse.",
          "La présence d’un facteur de risque ne signifie pas que vous développerez forcément un diabète gestationnel."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Une glycémie à jeun peut être réalisée dès le premier trimestre chez les femmes à risque.",
          "L’HGPO est généralement proposée entre 24 et 28 semaines d’aménorrhée.",
          "Le test dure un peu plus de deux heures et nécessite de rester au laboratoire sans manger ni faire d’effort."
        ],
        quote:
          "Le test est contraignant mais ponctuel. Prévoir de quoi s’occuper et signaler rapidement toute nausée ou sensation de malaise peut aider."
      },
      {
        title: "Quel test est réalisé au début de la grossesse ?",
        paragraphs: [
          "Chez les femmes présentant des facteurs de risque, une glycémie veineuse à jeun peut être prescrite dès le premier trimestre.",
          "Elle permet de rechercher une hyperglycémie précoce et d’identifier éventuellement un diabète déjà présent avant la grossesse.",
          "Le prélèvement est réalisé après plusieurs heures sans manger, selon les consignes du laboratoire.",
          "Un résultat normal au début de la grossesse n’exclut pas toujours l’apparition d’un diabète gestationnel plus tard."
        ]
      },
      {
        title: "Quand réalise-t-on l’HGPO ?",
        paragraphs: [
          "L’hyperglycémie provoquée par voie orale est le plus souvent réalisée entre 24 et 28 semaines d’aménorrhée.",
          "Cette période correspond au moment où les hormones placentaires augmentent davantage la résistance à l’insuline.",
          "Le test peut être prescrit plus tard si un signe apparaît en cours de grossesse.",
          "Il n’est généralement pas utile de réaliser une HGPO si une glycémie antérieure a déjà permis de poser le diagnostic."
        ]
      },
      {
        title: "Comment se préparer au test ?",
        bullets: [
          "Respectez le jeûne indiqué par le laboratoire, souvent pendant 8 à 12 heures.",
          "Buvez uniquement de l’eau pendant le jeûne, sauf consigne contraire.",
          "Ne modifiez pas volontairement votre alimentation les jours précédents.",
          "Prenez vos traitements habituels uniquement selon les consignes du médecin ou du laboratoire.",
          "Prévoyez de rester sur place un peu plus de deux heures.",
          "Apportez l’ordonnance, votre carte Vitale et de quoi vous occuper."
        ],
        paragraphs: [
          "Évitez un effort physique inhabituel avant et pendant le test, car il pourrait modifier les résultats.",
          "Si vous êtes malade, fiévreuse ou avez vomi, contactez le laboratoire ou le professionnel avant de vous déplacer."
        ]
      },
      {
        title: "Comment se déroule l’HGPO ?",
        bullets: [
          "Une première prise de sang mesure la glycémie à jeun.",
          "Vous buvez une solution contenant 75 g de glucose.",
          "Une deuxième prise de sang est réalisée une heure après.",
          "Une troisième prise de sang est réalisée deux heures après.",
          "Pendant ce temps, vous restez au repos au laboratoire sans manger, fumer ni marcher longuement."
        ],
        paragraphs: [
          "La solution est très sucrée et doit généralement être bue en quelques minutes.",
          "Le laboratoire vous précise exactement l’heure de chaque prélèvement."
        ]
      },
      {
        title: "Le test peut-il provoquer des nausées ?",
        paragraphs: [
          "Oui. La boisson très sucrée peut provoquer des nausées, des sueurs, des vertiges ou une sensation de malaise.",
          "Restez assise et prévenez immédiatement le personnel si vous ne vous sentez pas bien.",
          "Si vous vomissez, le test ne peut généralement pas être interprété et devra parfois être reprogrammé.",
          "N’essayez pas de poursuivre sans prévenir le laboratoire."
        ]
      },
      {
        title: "Quels sont les seuils du test ?",
        paragraphs: [
          "Les seuils habituellement utilisés pour l’HGPO avec 75 g de glucose sont de 0,92 g/L à jeun, 1,80 g/L après une heure et 1,53 g/L après deux heures.",
          "Le diagnostic peut être retenu si une seule des trois valeurs atteint ou dépasse le seuil correspondant.",
          "Les résultats doivent toujours être interprétés par le professionnel qui suit la grossesse.",
          "Ne comparez pas vos valeurs à celles d’une autre personne, car le contexte médical peut être différent."
        ]
      },
      {
        title: "Que se passe-t-il si le test est positif ?",
        paragraphs: [
          "Le professionnel vous explique les résultats et organise une prise en charge adaptée.",
          "Vous pouvez être orientée vers une sage-femme, un diabétologue, un endocrinologue ou un diététicien.",
          "La prise en charge commence le plus souvent par des conseils alimentaires, une activité physique adaptée et une surveillance de la glycémie à domicile.",
          "Le suivi du bébé peut être renforcé, notamment pour surveiller sa croissance et la quantité de liquide amniotique."
        ]
      },
      {
        title: "Comment surveille-t-on la glycémie à la maison ?",
        paragraphs: [
          "Un lecteur de glycémie permet de mesurer le sucre dans une goutte de sang prélevée au bout du doigt.",
          "Les mesures sont généralement réalisées à jeun et après les repas selon le schéma donné par l’équipe.",
          "Les résultats sont notés dans un carnet ou transmis par une application.",
          "Cette surveillance permet de vérifier si les adaptations alimentaires suffisent."
        ]
      },
      {
        title: "Faut-il suivre un régime strict ?",
        paragraphs: [
          "L’objectif n’est pas de supprimer tous les glucides ni de perdre du poids pendant la grossesse.",
          "Les conseils visent à répartir les apports sur la journée, choisir des aliments rassasiants et limiter les produits très sucrés.",
          "Les féculents, le pain, les fruits et les produits laitiers peuvent généralement être conservés dans des quantités adaptées.",
          "Un accompagnement personnalisé est préférable aux régimes trouvés sur internet."
        ]
      },
      {
        title: "L’activité physique peut-elle aider ?",
        paragraphs: [
          "Une activité régulière et adaptée peut améliorer l’utilisation du glucose par l’organisme.",
          "La marche, la natation douce ou le vélo d’appartement peuvent être proposés en l’absence de contre-indication obstétricale.",
          "Une courte marche après les repas peut parfois aider à contrôler la glycémie.",
          "Demandez l’avis du professionnel qui suit la grossesse avant de modifier votre activité."
        ]
      },
      {
        title: "Quand l’insuline est-elle nécessaire ?",
        paragraphs: [
          "L’insuline peut être proposée si les objectifs glycémiques ne sont pas atteints malgré les mesures alimentaires et l’activité physique.",
          "Elle peut aussi être nécessaire d’emblée lorsque les valeurs sont très élevées.",
          "L’insuline ne traverse pas le placenta et constitue le traitement médicamenteux de référence dans de nombreuses situations.",
          "La dose est adaptée progressivement selon les mesures de glycémie."
        ]
      },
      {
        title: "Quels sont les risques d’un diabète gestationnel mal équilibré ?",
        bullets: [
          "Une croissance excessive du bébé.",
          "Un excès de liquide amniotique.",
          "Une hypertension ou une prééclampsie.",
          "Un accouchement plus difficile.",
          "Un risque accru de césarienne.",
          "Une baisse du sucre chez le bébé après la naissance."
        ],
        paragraphs: [
          "Un diabète bien pris en charge réduit nettement ces risques.",
          "La majorité des femmes suivies pour un diabète gestationnel ont une grossesse et un accouchement sans complication majeure."
        ]
      },
      {
        title: "Le diabète gestationnel disparaît-il après l’accouchement ?",
        paragraphs: [
          "Dans la majorité des cas, la glycémie revient à la normale après la naissance.",
          "Un contrôle est toutefois recommandé après l’accouchement afin de vérifier qu’il ne persiste pas de diabète.",
          "Avoir eu un diabète gestationnel augmente le risque de développer plus tard un diabète de type 2.",
          "Une surveillance régulière, une alimentation équilibrée et une activité physique sont donc recommandées à long terme."
        ]
      },
      {
        title: "Le bébé devra-t-il être surveillé après la naissance ?",
        paragraphs: [
          "Le bébé peut bénéficier d’une surveillance de sa glycémie dans les premières heures de vie.",
          "Une mise au sein ou un premier biberon précoce peut être proposé selon son état et les pratiques de la maternité.",
          "La surveillance dépend du poids de naissance, du terme, de l’équilibre du diabète et du déroulement de l’accouchement.",
          "L’équipe vous expliquera les contrôles nécessaires."
        ]
      },
      {
        title: "Quand faut-il contacter rapidement un professionnel ?",
        bullets: [
          "Vous recevez une glycémie très élevée signalée par le laboratoire.",
          "Vous vomissez pendant le test ou vous faites un malaise.",
          "Vos glycémies restent au-dessus des objectifs malgré les mesures recommandées.",
          "Vous avez une soif intense, des urines très fréquentes ou une fatigue inhabituelle.",
          "Vous ressentez une diminution des mouvements du bébé.",
          "Vous avez des maux de tête intenses, des troubles visuels ou un gonflement brutal."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Le dépistage du diabète gestationnel est surtout proposé aux femmes présentant des facteurs de risque.",
          "Une glycémie à jeun peut être prescrite au début de la grossesse.",
          "L’HGPO est généralement réalisée entre 24 et 28 semaines d’aménorrhée.",
          "Elle comporte trois prises de sang autour de l’ingestion de 75 g de glucose.",
          "Un diagnostic précoce et une prise en charge adaptée permettent de réduire les risques pour la mère et le bébé."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Diabète gestationnel : dépistage et diagnostic",
        url: "https://www.ameli.fr/assure/sante/themes/diabete-gestationnel/depistage-diagnostic"
      },
      {
        label: "Haute Autorité de santé — Diabète gestationnel",
        url: "https://www.has-sante.fr/"
      },
      {
        label: "Collège national des gynécologues et obstétriciens français — Recommandations sur le diabète gestationnel",
        url: "https://www.cngof.fr/pratiques-cliniques/recommandations-pour-la-pratique-clinique/"
      },
      {
        label: "Fédération française des diabétiques — Diabète gestationnel",
        url: "https://www.federationdesdiabetiques.org/information/diabete/gestationnel"
      }
    ]
  },

{
    slug: "troisieme-echographie-que-verifie-t-elle",
    title: "Troisième échographie : que vérifie-t-elle ?",
    description:
      "Croissance, position du bébé, placenta, liquide amniotique et préparation de l’accouchement : comprendre la troisième échographie de grossesse.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Examens et suivi",
    subcategorySlug: "examens-suivi",
    readingTime: "9 min",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "La troisième échographie est généralement réalisée autour de 32 semaines d’aménorrhée, au cours du huitième mois.",
          "Elle vérifie principalement la croissance du bébé, sa position, la quantité de liquide amniotique et la localisation du placenta.",
          "Elle permet d’estimer le poids du bébé, avec une marge d’erreur.",
          "Elle réexamine certains organes et peut repérer des anomalies apparues ou devenues visibles plus tard.",
          "Selon les résultats, une surveillance supplémentaire ou une échographie de contrôle peut être proposée."
        ],
        quote:
          "Cette échographie aide surtout à vérifier que la fin de grossesse évolue normalement et à préparer la naissance."
      },
      {
        title: "Quand la troisième échographie a-t-elle lieu ?",
        paragraphs: [
          "La troisième échographie recommandée est généralement programmée autour de 32 semaines d’aménorrhée, soit au cours du huitième mois de grossesse.",
          "La date exacte peut varier de quelques jours selon l’organisation de la maternité, la datation de la grossesse et votre situation médicale.",
          "Elle peut être réalisée plus tôt, plus tard ou répétée si la croissance du bébé, le placenta, le liquide amniotique ou une maladie maternelle nécessitent une surveillance particulière.",
          "Dans une grossesse sans complication, elle constitue habituellement la dernière échographie systématique avant l’accouchement."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "L’échographiste mesure la tête, l’abdomen et le fémur afin d’évaluer la croissance du bébé.",
          "Il vérifie la position du bébé et celle du placenta en vue de l’accouchement.",
          "Il estime la quantité de liquide amniotique et peut étudier la circulation sanguine avec le Doppler si nécessaire."
        ],
        quote:
          "Le poids annoncé reste une estimation : il peut être différent du poids réel à la naissance."
      },
      {
        title: "Comment la croissance du bébé est-elle évaluée ?",
        paragraphs: [
          "L’échographiste réalise plusieurs mesures, notamment le périmètre de la tête, le périmètre abdominal et la longueur du fémur.",
          "Ces mesures sont reportées sur des courbes de référence adaptées au terme de la grossesse.",
          "Elles permettent d’estimer le poids du bébé et de vérifier si sa croissance est régulière.",
          "L’évolution entre les différentes échographies est souvent plus informative qu’une mesure isolée."
        ]
      },
      {
        title: "Comment le poids du bébé est-il estimé ?",
        paragraphs: [
          "Le poids est calculé à partir de plusieurs mesures échographiques grâce à une formule statistique.",
          "Cette estimation comporte toujours une marge d’erreur, qui peut être de plusieurs centaines de grammes.",
          "Un poids estimé élevé ou faible ne prédit donc pas exactement le poids de naissance.",
          "Le professionnel interprète le résultat avec le terme, les courbes de croissance, les mesures précédentes et votre contexte médical."
        ]
      },
      {
        title: "Que signifie un bébé petit pour le terme ?",
        paragraphs: [
          "Un bébé peut être naturellement petit sans présenter de problème.",
          "Lorsque les mesures sont basses ou que la croissance ralentit, le professionnel recherche un éventuel retard de croissance fœtale.",
          "Une surveillance supplémentaire peut alors être proposée avec des échographies répétées, un Doppler et parfois un monitoring.",
          "La prise en charge dépend de la sévérité du ralentissement, du terme et du bien-être du bébé."
        ]
      },
      {
        title: "Que signifie un bébé estimé gros ?",
        paragraphs: [
          "Une estimation élevée peut correspondre à un bébé constitutionnellement grand.",
          "Elle peut aussi être associée à un diabète gestationnel ou à d’autres facteurs.",
          "L’échographie ne permet pas de prévoir avec certitude un poids important à la naissance.",
          "Le mode d’accouchement n’est pas décidé sur une seule estimation : l’ensemble de la situation obstétricale est pris en compte."
        ]
      },
      {
        title: "La position du bébé est-elle vérifiée ?",
        paragraphs: [
          "Oui. L’échographiste regarde si le bébé se présente tête en bas, en siège ou plus rarement en position transverse.",
          "À 32 semaines, certains bébés peuvent encore changer de position.",
          "Une présentation en siège à cette date ne signifie donc pas qu’une césarienne sera forcément nécessaire.",
          "Une nouvelle vérification est souvent réalisée plus tard lors d’une consultation ou d’une échographie de contrôle."
        ]
      },
      {
        title: "Que se passe-t-il si le bébé est en siège ?",
        paragraphs: [
          "Si le bébé reste en siège en fin de grossesse, l’équipe discute avec vous des différentes possibilités.",
          "Une version par manœuvre externe peut être proposée dans certaines situations afin d’essayer de tourner le bébé par des gestes réalisés sur le ventre.",
          "La décision dépend du terme, de la position du bébé, du placenta, de la quantité de liquide amniotique et de vos antécédents.",
          "Un accouchement par voie basse peut parfois être envisagé, tandis qu’une césarienne peut être recommandée dans d’autres cas."
        ]
      },
      {
        title: "Que vérifie-t-on concernant le placenta ?",
        paragraphs: [
          "L’échographiste vérifie la localisation du placenta et sa distance par rapport au col de l’utérus.",
          "Un placenta qui recouvre ou reste très proche du col peut modifier les conditions de l’accouchement.",
          "La troisième échographie permet de réévaluer un placenta décrit comme bas lors de l’échographie morphologique.",
          "L’aspect général du placenta et son insertion peuvent aussi être observés."
        ]
      },
      {
        title: "Comment le liquide amniotique est-il évalué ?",
        paragraphs: [
          "La quantité de liquide amniotique est estimée visuellement ou à l’aide de mesures.",
          "Un volume trop faible est appelé oligoamnios, tandis qu’un volume trop important est appelé hydramnios.",
          "Ces situations peuvent être temporaires ou nécessiter des examens complémentaires.",
          "Le professionnel interprète toujours la quantité de liquide avec la croissance, les mouvements et l’état général du bébé."
        ]
      },
      {
        title: "Le cordon ombilical est-il examiné ?",
        paragraphs: [
          "L’échographiste peut observer l’insertion du cordon sur le placenta et sur l’abdomen du bébé.",
          "Le nombre de vaisseaux du cordon a généralement déjà été vérifié lors de l’échographie morphologique.",
          "Le cordon peut parfois être visible autour du cou du bébé, mais cette situation est fréquente et ne permet pas à elle seule de prévoir une complication.",
          "L’échographie ne permet pas toujours de connaître la position du cordon au moment de l’accouchement."
        ]
      },
      {
        title: "À quoi sert le Doppler ?",
        paragraphs: [
          "Le Doppler étudie la circulation du sang dans certains vaisseaux.",
          "Il peut notamment être utilisé au niveau du cordon ombilical, des artères utérines ou de certains vaisseaux du bébé.",
          "Il n’est pas systématiquement nécessaire dans toutes les grossesses.",
          "Il est particulièrement utile lorsque la croissance semble insuffisante, qu’une hypertension est présente ou que le placenta nécessite une surveillance."
        ]
      },
      {
        title: "Les organes du bébé sont-ils à nouveau vérifiés ?",
        paragraphs: [
          "Oui. Certains organes et certaines structures sont réexaminés, notamment le cerveau, le cœur, les reins, la vessie et l’abdomen.",
          "L’objectif n’est pas de refaire exactement toute l’échographie morphologique, mais de vérifier les éléments accessibles et l’évolution générale.",
          "Certaines anomalies peuvent apparaître ou devenir visibles plus tard dans la grossesse.",
          "D’autres restent impossibles à détecter par échographie, même au troisième trimestre."
        ]
      },
      {
        title: "Le visage du bébé est-il visible ?",
        paragraphs: [
          "Le visage peut parfois être bien visible, mais la position du bébé, ses mains, le placenta ou la diminution relative de l’espace peuvent limiter les images.",
          "Une mauvaise visibilité ne signifie pas qu’il existe un problème.",
          "Les images en trois dimensions peuvent être proposées dans certains centres, mais elles ne sont pas indispensables au suivi médical.",
          "La priorité reste l’analyse des structures nécessaires à l’évaluation de la santé du bébé."
        ]
      },
      {
        title: "Comment se déroule l’examen ?",
        paragraphs: [
          "Vous êtes installée allongée, le ventre découvert.",
          "L’échographiste applique du gel puis déplace la sonde sur l’abdomen.",
          "L’examen dure généralement entre vingt et trente minutes, mais il peut être plus long si certaines mesures sont difficiles à obtenir.",
          "Le professionnel peut vous demander de changer de côté ou de bouger afin d’améliorer la position du bébé."
        ]
      },
      {
        title: "Faut-il avoir la vessie pleine ?",
        paragraphs: [
          "À ce stade de la grossesse, une vessie pleine n’est généralement pas nécessaire.",
          "Vous pouvez habituellement boire et aller aux toilettes normalement avant l’examen.",
          "Suivez toutefois les consignes spécifiques données par le cabinet ou la maternité.",
          "Signalez toute douleur ou gêne importante pendant l’examen."
        ]
      },
      {
        title: "Pourquoi une échographie de contrôle peut-elle être demandée ?",
        bullets: [
          "Une mesure doit être vérifiée.",
          "La croissance du bébé nécessite une surveillance.",
          "Le placenta est encore proche du col.",
          "La quantité de liquide amniotique est inhabituelle.",
          "Une structure a été difficile à observer.",
          "Une maladie maternelle nécessite un suivi renforcé.",
          "Le bébé est en siège ou dans une autre position particulière."
        ],
        paragraphs: [
          "Une échographie supplémentaire ne signifie pas automatiquement qu’une complication grave a été découverte.",
          "Elle permet souvent de vérifier l’évolution d’un élément ou de compléter un examen techniquement difficile."
        ]
      },
      {
        title: "Une troisième échographie normale garantit-elle que tout va bien ?",
        paragraphs: [
          "Une échographie normale est rassurante, mais elle ne peut pas exclure toutes les anomalies ou complications.",
          "Certaines maladies ne sont pas visibles à l’échographie et certaines anomalies peuvent apparaître après l’examen.",
          "Les consultations prénatales, la surveillance des mouvements du bébé et les autres examens restent donc indispensables.",
          "Contactez rapidement la maternité en cas de diminution des mouvements, de saignement, de perte de liquide ou de contractions inhabituelles."
        ]
      },
      {
        title: "Cette échographie décide-t-elle du mode d’accouchement ?",
        paragraphs: [
          "Elle apporte des informations utiles, mais elle ne décide pas seule du mode d’accouchement.",
          "La position du bébé, la localisation du placenta, la croissance estimée et vos antécédents sont pris en compte.",
          "La décision finale dépend aussi de l’évolution de la grossesse et des constatations faites à l’approche du terme.",
          "L’équipe vous explique les différentes possibilités lors des consultations suivantes."
        ]
      },
      {
        title: "Que faut-il apporter au rendez-vous ?",
        bullets: [
          "L’ordonnance.",
          "La carte Vitale et la carte de mutuelle.",
          "Le dossier de grossesse.",
          "Les comptes rendus des deux premières échographies.",
          "Les résultats d’examens récents.",
          "Les courriers médicaux utiles si la grossesse fait l’objet d’un suivi particulier."
        ],
        paragraphs: [
          "Portez des vêtements faciles à relever au niveau du ventre.",
          "Notez vos questions à l’avance, notamment sur la croissance, la position du bébé et les prochaines étapes du suivi."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "La troisième échographie a généralement lieu autour de 32 semaines d’aménorrhée.",
          "Elle vérifie la croissance, le poids estimé et la position du bébé.",
          "Elle évalue le placenta, le liquide amniotique et, si nécessaire, la circulation sanguine par Doppler.",
          "Elle réexamine certains organes sans pouvoir exclure toutes les anomalies.",
          "Ses résultats aident à organiser la surveillance de la fin de grossesse et à préparer l’accouchement."
        ]
      }
    ],
    sources: [
      {
        label: "Service Public — Grossesse : examens médicaux",
        url: "https://www.service-public.fr/particuliers/vosdroits/F963"
      },
      {
        label: "Assurance Maladie — Les échographies de la grossesse",
        url: "https://www.ameli.fr/assure/sante/themes/grossesse/grossesse-en-bonne-sante/echographies-grossesse"
      },
      {
        label: "Haute Autorité de santé — Information des femmes enceintes et suivi de grossesse",
        url: "https://www.has-sante.fr/jcms/c_547976/fr/comment-mieux-informer-les-femmes-enceintes"
      },
      {
        label: "Collège français d’échographie fœtale — Informations sur l’échographie obstétricale",
        url: "https://www.cfef.org/"
      }
    ]
  },

{
    slug: "consultations-prenatales-quel-est-le-calendrier-du-suivi",
    title: "Consultations prénatales : quel est le calendrier du suivi ?",
    description:
      "Premier rendez-vous, consultations mensuelles, échographies, analyses et rendez-vous du dernier trimestre : le calendrier du suivi prénatal en France.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Examens et suivi",
    subcategorySlug: "examens-suivi",
    readingTime: "10 min",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "En France, 7 consultations prénatales obligatoires sont prévues pendant la grossesse.",
          "La première doit avoir lieu avant la fin du troisième mois.",
          "Les 6 suivantes sont organisées chaque mois, du quatrième mois jusqu’à l’accouchement.",
          "Trois échographies sont habituellement recommandées au premier, au deuxième et au troisième trimestre.",
          "Le calendrier peut être renforcé si la grossesse nécessite une surveillance particulière."
        ],
        quote:
          "Le suivi ne se limite pas aux examens : chaque consultation permet aussi de parler de vos symptômes, de vos inquiétudes et de votre préparation à la naissance."
      },
      {
        title: "Combien de consultations prénatales sont prévues ?",
        paragraphs: [
          "Le suivi réglementaire comprend 7 examens prénataux obligatoires.",
          "Le premier a lieu avant la fin du troisième mois de grossesse.",
          "À partir du quatrième mois, une consultation est prévue chaque mois jusqu’à l’accouchement.",
          "Ces rendez-vous peuvent être assurés par une sage-femme, un médecin généraliste ou un gynécologue-obstétricien selon votre situation."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Le premier rendez-vous sert à confirmer et dater la grossesse, évaluer les facteurs de risque et lancer les premières analyses.",
          "Du quatrième au neuvième mois, les consultations deviennent mensuelles.",
          "Des rendez-vous supplémentaires sont ajoutés si un symptôme, un antécédent ou un résultat nécessite une surveillance renforcée."
        ],
        quote:
          "Le calendrier est une base commune, mais il reste personnalisé selon votre santé et celle du bébé."
      },
      {
        title: "Avant la fin du troisième mois",
        paragraphs: [
          "La première consultation prénatale doit avoir lieu avant la fin du troisième mois.",
          "Le professionnel fait le point sur vos antécédents, vos traitements, vos symptômes, votre mode de vie et votre environnement.",
          "Il mesure notamment la tension artérielle, le poids et prescrit les premières analyses.",
          "La déclaration de grossesse est généralement réalisée à l’issue de ce rendez-vous."
        ],
        bullets: [
          "Groupe sanguin et rhésus.",
          "Recherche d’agglutinines irrégulières.",
          "Sérologies de la rubéole, de la toxoplasmose, de la syphilis et de l’hépatite B.",
          "Proposition de dépistage du VIH.",
          "Analyse d’urines.",
          "Prescription de la première échographie."
        ]
      },
      {
        title: "Au quatrième mois",
        paragraphs: [
          "La deuxième consultation obligatoire a lieu au quatrième mois.",
          "Le professionnel vérifie la tension, le poids, les symptômes et l’évolution de la grossesse.",
          "Il recherche d’éventuels signes d’alerte et répond à vos questions.",
          "À partir de ce mois, un examen bucco-dentaire de prévention peut également être réalisé."
        ]
      },
      {
        title: "Au cinquième mois",
        paragraphs: [
          "La troisième consultation obligatoire a lieu au cinquième mois.",
          "L’échographie morphologique est généralement réalisée autour de cette période.",
          "Elle étudie en détail les organes, la croissance, le placenta et le liquide amniotique.",
          "Une prise de sang peut aussi être prescrite pour rechercher notamment une anémie."
        ]
      },
      {
        title: "Au sixième mois",
        paragraphs: [
          "La quatrième consultation obligatoire a lieu au sixième mois.",
          "Le suivi clinique reste similaire : tension, poids, symptômes, hauteur utérine et rythme cardiaque du bébé selon le terme.",
          "Une numération sanguine est souvent réalisée.",
          "La recherche d’anticorps irréguliers est renouvelée dans certaines situations, notamment si vous êtes rhésus négatif ou avez déjà été transfusée."
        ]
      },
      {
        title: "Au septième mois",
        paragraphs: [
          "La cinquième consultation obligatoire a lieu au septième mois.",
          "La troisième échographie est programmée autour de 32 semaines d’aménorrhée, selon le calendrier retenu par la maternité.",
          "Elle vérifie la croissance, la position du bébé, le placenta et le liquide amniotique.",
          "Les séances de préparation à la naissance et à la parentalité se déroulent souvent à partir de cette période."
        ]
      },
      {
        title: "Au huitième mois",
        paragraphs: [
          "La sixième consultation obligatoire a lieu au huitième mois.",
          "La consultation pré-anesthésique est obligatoire, même si vous ne souhaitez pas de péridurale.",
          "Une nouvelle détermination du groupe sanguin peut être réalisée selon le dossier.",
          "La position du bébé, le placenta et l’organisation de l’accouchement sont réévalués."
        ]
      },
      {
        title: "Au neuvième mois",
        paragraphs: [
          "La septième et dernière consultation obligatoire a lieu au neuvième mois.",
          "Le professionnel vérifie le bien-être de la mère et du bébé, la présentation du bébé et l’absence de complication.",
          "Il précise quand contacter la maternité et quels signes doivent conduire à venir sans attendre.",
          "Une deuxième détermination du groupe sanguin est réalisée si elle ne l’a pas encore été."
        ]
      },
      {
        title: "Que vérifie-t-on à chaque consultation ?",
        bullets: [
          "La tension artérielle.",
          "Le poids et son évolution.",
          "Les symptômes et le bien-être général.",
          "Les mouvements du bébé à partir du moment où vous les ressentez.",
          "La hauteur utérine à partir d’un certain terme.",
          "Le rythme cardiaque du bébé selon la consultation.",
          "Les résultats des analyses et échographies.",
          "Les signes nécessitant une surveillance particulière."
        ],
        paragraphs: [
          "Le contenu précis varie selon le terme, votre état de santé et le professionnel qui assure le suivi.",
          "Un examen gynécologique n’est pas systématique à chaque rendez-vous."
        ]
      },
      {
        title: "Quelles sont les trois échographies recommandées ?",
        bullets: [
          "La première échographie au premier trimestre, pour dater la grossesse, vérifier la vitalité et mesurer la clarté nucale.",
          "La deuxième échographie autour du cinquième mois, pour étudier la morphologie du bébé.",
          "La troisième échographie autour de 32 semaines d’aménorrhée, pour vérifier la croissance, la position et le placenta."
        ],
        paragraphs: [
          "Des échographies supplémentaires peuvent être prescrites en cas de grossesse multiple, de problème de croissance, de placenta bas ou de maladie maternelle.",
          "Une échographie supplémentaire ne signifie pas forcément qu’une complication grave est présente."
        ]
      },
      {
        title: "Quels autres rendez-vous faut-il prévoir ?",
        bullets: [
          "L’entretien prénatal précoce.",
          "Les séances de préparation à la naissance et à la parentalité.",
          "La consultation pré-anesthésique.",
          "Le rendez-vous d’inscription à la maternité si nécessaire.",
          "Un rendez-vous avec une sage-femme pour préparer l’allaitement ou le retour à domicile.",
          "Des consultations spécialisées si la grossesse présente un risque particulier."
        ]
      },
      {
        title: "Qu’est-ce que l’entretien prénatal précoce ?",
        paragraphs: [
          "L’entretien prénatal précoce est un temps d’échange distinct des consultations médicales habituelles.",
          "Il permet de parler de votre vécu, de vos besoins, de votre environnement, de votre projet de naissance et d’éventuelles difficultés.",
          "Il peut être réalisé par une sage-femme ou un médecin, seule ou en couple.",
          "Il aide à organiser un accompagnement personnalisé dès le début de la grossesse."
        ]
      },
      {
        title: "Quand le suivi doit-il être renforcé ?",
        bullets: [
          "Grossesse multiple.",
          "Hypertension ou diabète.",
          "Maladie chronique.",
          "Antécédent de complication obstétricale.",
          "Problème de croissance du bébé.",
          "Placenta bas ou autre anomalie échographique.",
          "Contractions précoces, saignements ou perte de liquide.",
          "Difficulté psychologique ou sociale nécessitant un accompagnement."
        ],
        paragraphs: [
          "Le nombre et la fréquence des rendez-vous sont alors adaptés par l’équipe.",
          "Le suivi peut associer sage-femme, obstétricien, médecin spécialiste et maternité de niveau adapté."
        ]
      },
      {
        title: "Que faire si vous manquez un rendez-vous ?",
        paragraphs: [
          "Contactez rapidement le professionnel ou la maternité afin de le reprogrammer.",
          "Un retard ponctuel ne signifie pas que la grossesse est en danger, mais certaines analyses doivent être réalisées à une période précise.",
          "N’attendez pas le rendez-vous suivant pour signaler un symptôme inquiétant.",
          "Si vous avez des difficultés de transport, de travail ou de garde d’enfants, parlez-en à l’équipe afin de rechercher une solution."
        ]
      },
      {
        title: "Quand consulter sans attendre le prochain rendez-vous ?",
        bullets: [
          "Saignement vaginal.",
          "Perte de liquide.",
          "Contractions régulières ou douloureuses avant le terme.",
          "Diminution des mouvements du bébé.",
          "Fièvre.",
          "Maux de tête intenses, troubles visuels ou gonflement brutal.",
          "Douleur abdominale importante.",
          "Essoufflement inhabituel, douleur thoracique ou malaise."
        ],
        paragraphs: [
          "En cas de doute, contactez la maternité ou le professionnel qui suit la grossesse.",
          "Le calendrier mensuel ne remplace jamais une consultation urgente lorsqu’un signe inhabituel apparaît."
        ]
      },
      {
        title: "Comment bien organiser son suivi ?",
        bullets: [
          "Planifiez plusieurs rendez-vous à l’avance lorsque cela est possible.",
          "Conservez les ordonnances, résultats et comptes rendus dans un seul dossier.",
          "Notez vos questions avant chaque consultation.",
          "Apportez la liste de vos traitements et compléments.",
          "Gardez les coordonnées de la maternité et de la sage-femme.",
          "Vérifiez les consignes spécifiques avant les analyses ou échographies."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Le suivi prénatal comprend 7 consultations obligatoires.",
          "La première a lieu avant la fin du troisième mois.",
          "Les consultations suivantes sont mensuelles du quatrième au neuvième mois.",
          "Trois échographies sont habituellement recommandées pendant la grossesse.",
          "Le calendrier reste adaptable et peut être renforcé selon votre situation."
        ]
      }
    ],
    sources: [
      {
        label: "Service Public — Grossesse : examens médicaux",
        url: "https://www.service-public.fr/particuliers/vosdroits/F963"
      },
      {
        label: "Assurance Maladie — Suivi mensuel de la grossesse à partir du 4e mois",
        url: "https://www.ameli.fr/assure/sante/themes/grossesse/grossesse-en-bonne-sante/suivi-mensuel-grossesse"
      },
      {
        label: "Haute Autorité de santé — Comment mieux informer les femmes enceintes ?",
        url: "https://www.has-sante.fr/jcms/c_547976/fr/comment-mieux-informer-les-femmes-enceintes"
      },
      {
        label: "Ministère de la Santé — L’entretien prénatal précoce",
        url: "https://sante.gouv.fr/prevention-en-sante/sante-des-populations/1000jours/article/l-entretien-prenatal-precoce"
      }
    ]
  },

{
    slug: "monitoring-du-bebe-quand-et-pourquoi-est-il-realise",
    title: "Monitoring du bébé : quand et pourquoi est-il réalisé ?",
    description:
      "Rythme cardiaque du bébé, contractions, indications et interprétation : comprendre le monitoring pendant la grossesse et l’accouchement.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Examens et suivi",
    subcategorySlug: "examens-suivi",
    readingTime: "9 min",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    tone: "sage",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Le monitoring enregistre le rythme cardiaque du bébé et, le plus souvent, les contractions de l’utérus.",
          "Pendant la grossesse, il est réalisé lorsqu’une surveillance supplémentaire est nécessaire : diminution des mouvements, contractions, dépassement du terme ou grossesse à risque.",
          "Pendant le travail, il permet de surveiller la réaction du bébé aux contractions.",
          "L’examen est indolore et utilise généralement deux capteurs placés sur le ventre.",
          "Un tracé inhabituel ne signifie pas toujours que le bébé va mal : l’équipe l’interprète avec le contexte et peut prolonger ou compléter la surveillance."
        ],
        quote:
          "Le monitoring est un outil de surveillance : il ne s’interprète jamais à partir d’un chiffre isolé ni sans tenir compte de la situation clinique."
      },
      {
        title: "Qu’est-ce qu’un monitoring du bébé ?",
        paragraphs: [
          "Le monitoring, aussi appelé cardiotocographie, enregistre simultanément le rythme cardiaque du bébé et l’activité contractile de l’utérus.",
          "Le tracé obtenu permet d’observer la fréquence cardiaque de base, ses variations et sa réaction aux mouvements du bébé ou aux contractions.",
          "Il peut être utilisé ponctuellement pendant la grossesse ou de manière continue ou intermittente pendant le travail.",
          "Il ne remplace pas l’examen clinique, l’échographie ou le Doppler lorsque ceux-ci sont nécessaires."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Un capteur enregistre le cœur du bébé et un autre repère les contractions.",
          "L’examen dure souvent entre vingt et trente minutes, mais peut être prolongé.",
          "Le tracé est interprété dans son ensemble : rythme de base, variabilité, accélérations et éventuels ralentissements."
        ],
        quote:
          "Si le bébé dort ou bouge peu pendant l’enregistrement, l’équipe peut attendre davantage avant de conclure."
      },
      {
        title: "Quand réalise-t-on un monitoring pendant la grossesse ?",
        bullets: [
          "Diminution ou modification inhabituelle des mouvements du bébé.",
          "Contractions régulières ou douloureuses.",
          "Saignement ou perte de liquide.",
          "Dépassement du terme.",
          "Hypertension ou prééclampsie.",
          "Diabète nécessitant une surveillance particulière.",
          "Retard de croissance ou anomalie du Doppler.",
          "Grossesse multiple ou autre situation à risque."
        ],
        paragraphs: [
          "Il n’est pas réalisé systématiquement à chaque consultation dans une grossesse sans complication.",
          "La fréquence dépend de la raison de la surveillance, du terme et des résultats des autres examens."
        ]
      },
      {
        title: "Pourquoi est-il proposé en cas de diminution des mouvements ?",
        paragraphs: [
          "Une diminution des mouvements ressentis peut parfois être liée au sommeil du bébé, à sa position ou au placenta.",
          "Elle peut aussi signaler qu’une évaluation est nécessaire.",
          "Le monitoring vérifie le rythme cardiaque du bébé et sa réactivité.",
          "Une échographie, une mesure du liquide amniotique ou un Doppler peuvent être ajoutés selon les résultats et le terme."
        ]
      },
      {
        title: "Pourquoi réalise-t-on un monitoring après le terme ?",
        paragraphs: [
          "Lorsque la grossesse dépasse la date prévue d’accouchement, la surveillance est renforcée.",
          "Le monitoring aide à vérifier le bien-être du bébé en complément de l’évaluation clinique et parfois de l’échographie.",
          "Le calendrier des contrôles varie selon la maternité et votre situation.",
          "L’équipe vous explique également à quel moment un déclenchement peut être proposé."
        ]
      },
      {
        title: "Comment se déroule l’examen ?",
        paragraphs: [
          "Vous êtes généralement installée semi-allongée ou sur le côté.",
          "Deux capteurs sont maintenus sur le ventre par des sangles souples.",
          "Le premier utilise les ultrasons pour enregistrer le rythme cardiaque du bébé.",
          "Le second détecte les variations de tension de la paroi abdominale liées aux contractions."
        ]
      },
      {
        title: "Le monitoring est-il douloureux ?",
        paragraphs: [
          "Non. Les capteurs externes sont indolores.",
          "Les sangles peuvent parfois être un peu serrées ou la position devenir inconfortable lorsque l’enregistrement dure longtemps.",
          "Signalez toute douleur, gêne, malaise ou difficulté à rester sur le dos.",
          "L’équipe peut modifier votre position ou replacer les capteurs."
        ]
      },
      {
        title: "Combien de temps dure un monitoring ?",
        paragraphs: [
          "Un enregistrement simple dure souvent entre vingt et trente minutes.",
          "Il peut être prolongé si le bébé semble dormir, si le tracé est difficile à obtenir ou si une anomalie doit être surveillée.",
          "Pendant le travail, la surveillance peut être intermittente ou continue selon les recommandations de l’équipe.",
          "La durée ne permet pas à elle seule de savoir si le tracé est normal ou préoccupant."
        ]
      },
      {
        title: "Que mesure le capteur du rythme cardiaque ?",
        paragraphs: [
          "Le capteur enregistre la fréquence cardiaque du bébé au fil du temps.",
          "L’équipe observe le rythme de base, les petites variations normales autour de ce rythme, les accélérations et les ralentissements.",
          "Un rythme qui varie correctement est généralement un signe rassurant.",
          "L’interprétation dépend toutefois du terme, de l’état de la mère, des médicaments et de la présence de contractions."
        ]
      },
      {
        title: "Que mesure le capteur des contractions ?",
        paragraphs: [
          "Le capteur externe repère la fréquence et la durée des contractions.",
          "Il ne mesure pas précisément leur intensité réelle ni la douleur ressentie.",
          "Une contraction peut apparaître faiblement sur le tracé si le capteur est déplacé ou si la position du bébé et de l’utérus rend l’enregistrement difficile.",
          "Pendant le travail, l’équipe associe donc toujours le tracé à vos sensations et à l’examen obstétrical."
        ]
      },
      {
        title: "Qu’est-ce qu’un tracé réactif ?",
        paragraphs: [
          "Pendant la grossesse, un tracé dit réactif présente généralement une variabilité adaptée et des accélérations du rythme cardiaque.",
          "Ces accélérations sont souvent liées aux mouvements du bébé.",
          "Les critères exacts dépendent du terme de la grossesse.",
          "Le professionnel est le seul à pouvoir conclure que l’enregistrement est rassurant."
        ]
      },
      {
        title: "Que signifient les ralentissements du rythme ?",
        paragraphs: [
          "Des ralentissements peuvent apparaître de manière ponctuelle ou répétée.",
          "Leur signification dépend de leur forme, de leur durée, de leur fréquence et de leur relation avec les contractions.",
          "Certains sont sans gravité, tandis que d’autres nécessitent une surveillance ou une intervention.",
          "L’équipe peut vous faire changer de position, arrêter un médicament, perfuser des liquides ou réaliser d’autres examens."
        ]
      },
      {
        title: "Pourquoi le tracé peut-il être difficile à enregistrer ?",
        bullets: [
          "Le bébé bouge beaucoup.",
          "Il change de position.",
          "La grossesse est encore peu avancée.",
          "Le placenta ou la morphologie maternelle modifient la transmission du signal.",
          "Les capteurs se déplacent.",
          "Le rythme maternel est capté à la place de celui du bébé."
        ],
        paragraphs: [
          "Le professionnel replace alors le capteur ou utilise un appareil d’échographie pour localiser le cœur.",
          "Une perte momentanée du signal ne signifie pas que le cœur du bébé s’est arrêté."
        ]
      },
      {
        title: "Le bébé doit-il bouger pendant le monitoring ?",
        paragraphs: [
          "Les mouvements du bébé peuvent provoquer des accélérations rassurantes du rythme cardiaque.",
          "Cependant, le bébé alterne des périodes d’éveil et de sommeil.",
          "S’il dort, le tracé peut sembler moins réactif pendant un certain temps.",
          "L’équipe peut prolonger l’examen, vous proposer de changer de position ou utiliser une stimulation adaptée."
        ]
      },
      {
        title: "Le monitoring est-il systématique pendant l’accouchement ?",
        paragraphs: [
          "Une surveillance du rythme cardiaque du bébé est organisée pendant le travail.",
          "Elle peut être intermittente ou continue selon le niveau de risque, le déroulement du travail et les pratiques de la maternité.",
          "Une surveillance continue est plus souvent utilisée en cas de péridurale, de déclenchement, d’ocytocine, de grossesse à risque ou de tracé inhabituel.",
          "L’équipe vous explique le type de surveillance proposé et les raisons de son choix."
        ]
      },
      {
        title: "Peut-on bouger avec un monitoring ?",
        paragraphs: [
          "Avec un appareil classique relié par des câbles, les déplacements peuvent être limités.",
          "Il est souvent possible de changer de position, de s’asseoir ou de se mettre sur le côté.",
          "Certaines maternités disposent de dispositifs sans fil ou adaptés à la mobilité.",
          "Demandez à l’équipe quelles positions et quels mouvements sont possibles sans perdre le signal."
        ]
      },
      {
        title: "Qu’est-ce qu’un monitoring interne ?",
        paragraphs: [
          "Pendant le travail, lorsque la poche des eaux est rompue et que le tracé externe est insuffisant, un capteur interne peut parfois être proposé.",
          "Une petite électrode est alors placée sur le cuir chevelu du bébé pour enregistrer directement son rythme cardiaque.",
          "Cette méthode n’est pas utilisée systématiquement.",
          "Le professionnel doit vous expliquer son intérêt, son déroulement et les éventuels risques."
        ]
      },
      {
        title: "Quels examens peuvent compléter le monitoring ?",
        bullets: [
          "Une échographie.",
          "Un Doppler des vaisseaux du bébé ou du placenta.",
          "Une mesure du liquide amniotique.",
          "Un examen du col.",
          "Un bilan sanguin ou urinaire maternel.",
          "Une surveillance répétée à distance."
        ],
        paragraphs: [
          "Pendant le travail, d’autres méthodes d’évaluation peuvent être discutées selon la situation.",
          "Le choix dépend du tracé, du terme, de l’avancement du travail et de l’état général de la mère et du bébé."
        ]
      },
      {
        title: "Que se passe-t-il si le monitoring est inhabituel ?",
        paragraphs: [
          "L’équipe vérifie d’abord la qualité du signal et votre position.",
          "Elle recherche une cause possible : contractions trop rapprochées, chute de tension, fièvre, médicament ou problème placentaire.",
          "Des mesures simples peuvent améliorer le tracé, comme changer de côté ou adapter la perfusion et les médicaments.",
          "Si les anomalies persistent et que le bébé semble mal tolérer la situation, une naissance plus rapide peut être envisagée."
        ]
      },
      {
        title: "Le monitoring peut-il prévoir toutes les complications ?",
        paragraphs: [
          "Non. Il fournit des informations importantes au moment de l’enregistrement, mais ne garantit pas l’absence de toute complication.",
          "Il peut aussi produire des tracés difficiles à interpréter ou des alertes qui ne correspondent pas à un problème grave.",
          "C’est pourquoi il est toujours associé à l’examen clinique et au contexte obstétrical.",
          "Sa principale utilité est de repérer les situations nécessitant une évaluation ou une réaction rapide."
        ]
      },
      {
        title: "Quand faut-il consulter pour faire vérifier le bébé ?",
        bullets: [
          "Vous ressentez nettement moins de mouvements que d’habitude.",
          "Vous avez des contractions régulières ou douloureuses avant le terme.",
          "Vous perdez du liquide ou du sang.",
          "Vous avez de la fièvre ou un malaise.",
          "Vous présentez des maux de tête intenses, des troubles visuels ou un gonflement brutal.",
          "Vous avez reçu une consigne de surveillance en raison d’une grossesse à risque."
        ],
        paragraphs: [
          "N’attendez pas le prochain rendez-vous si un signe vous inquiète.",
          "Contactez la maternité, qui vous indiquera si un monitoring ou un autre examen est nécessaire."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Le monitoring enregistre le rythme cardiaque du bébé et les contractions.",
          "Il est réalisé pendant la grossesse lorsqu’une surveillance supplémentaire est nécessaire.",
          "Pendant le travail, il vérifie comment le bébé réagit aux contractions.",
          "L’examen est indolore et dure généralement au moins vingt minutes.",
          "Le tracé doit toujours être interprété par une équipe médicale dans son contexte."
        ]
      }
    ],
    sources: [
      {
        label: "Haute Autorité de santé — Accouchement normal : accompagnement de la physiologie et interventions médicales",
        url: "https://www.has-sante.fr/jcms/c_2820336/fr/accouchement-normal-accompagnement-de-la-physiologie-et-interventions-medicales"
      },
      {
        label: "Assurance Maladie — Le suivi médical de la grossesse",
        url: "https://www.ameli.fr/assure/sante/themes/grossesse/grossesse-en-bonne-sante/suivi-medical-grossesse"
      },
      {
        label: "Collège national des gynécologues et obstétriciens français — Surveillance fœtale pendant le travail",
        url: "https://www.cngof.fr/pratiques-cliniques/recommandations-pour-la-pratique-clinique/"
      },
      {
        label: "CHU de Toulouse — Le monitoring fœtal",
        url: "https://www.chu-toulouse.fr/"
      }
    ]
  },

{
    slug: "alimentation-pendant-la-grossesse-quels-aliments-eviter-et-quelles-precautions-prendre",
    title: "Alimentation pendant la grossesse : quels aliments éviter et quelles précautions prendre ?",
    description:
      "Aliments crus, lait cru, charcuteries, poissons, caféine et hygiène en cuisine : les précautions alimentaires essentielles pendant la grossesse.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Symptômes et bien-être",
    subcategorySlug: "symptomes-bien-etre",
    readingTime: "11 min",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    tone: "rose",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Pendant la grossesse, l’objectif n’est pas de manger deux fois plus, mais de conserver une alimentation variée, équilibrée et suffisamment sûre.",
          "L’alcool doit être évité complètement pendant toute la grossesse.",
          "Pour réduire le risque de listériose et de toxoplasmose, évitez les aliments crus ou peu cuits à risque et respectez une hygiène rigoureuse en cuisine.",
          "Limitez les boissons contenant de la caféine et choisissez les poissons en variant les espèces, tout en évitant les plus contaminés par le mercure.",
          "En cas de doute sur un aliment, un complément ou une restriction, demandez conseil à une sage-femme, un médecin ou un pharmacien."
        ],
        quote:
          "Les précautions alimentaires doivent protéger la grossesse sans transformer chaque repas en source d’angoisse : quelques règles simples suffisent dans la majorité des situations."
      },
      {
        title: "Pourquoi certaines précautions sont-elles nécessaires ?",
        paragraphs: [
          "Pendant la grossesse, certaines infections alimentaires peuvent avoir des conséquences plus importantes pour la mère ou le bébé.",
          "La listériose et la toxoplasmose sont les deux risques le plus souvent évoqués, mais l’hygiène alimentaire contribue aussi à prévenir d’autres infections.",
          "Certains contaminants, comme le mercure présent dans quelques poissons, peuvent également atteindre le bébé.",
          "L’objectif n’est pas d’exclure de nombreux groupes d’aliments, mais de privilégier des produits adaptés, bien conservés et correctement préparés."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Évitez l’alcool et les aliments crus ou insuffisamment cuits les plus à risque.",
          "Lavez soigneusement les végétaux et séparez toujours les aliments crus des aliments déjà cuits.",
          "Respectez la chaîne du froid, les dates de consommation et un réchauffage suffisant des restes."
        ],
        quote:
          "Un aliment sûr dépend autant de sa nature que de sa conservation, de sa préparation et de sa cuisson."
      },
      {
        title: "Quels aliments faut-il éviter pour prévenir la listériose ?",
        bullets: [
          "Les fromages au lait cru à pâte molle et leur croûte.",
          "Les poissons fumés, coquillages crus, surimi, tarama et produits de la mer crus ou peu cuits.",
          "Les graines germées crues.",
          "Les produits de charcuterie consommés froids, comme les rillettes, pâtés, foie gras et produits en gelée.",
          "Les aliments sensibles vendus à la coupe et destinés à être consommés sans cuisson."
        ],
        paragraphs: [
          "La bactérie Listeria peut se développer au réfrigérateur. Respectez les températures de conservation et consommez rapidement les produits après ouverture.",
          "Conservez les aliments prêts à manger séparément des viandes, poissons et légumes crus."
        ]
      },
      {
        title: "Quelles précautions prendre contre la toxoplasmose ?",
        paragraphs: [
          "La toxoplasmose peut être transmise par de la viande insuffisamment cuite, des aliments souillés par de la terre ou des mains contaminées.",
          "Si vous n’êtes pas immunisée, consommez la viande bien cuite à cœur, sans partie rosée.",
          "Lavez soigneusement les fruits, les légumes, les herbes aromatiques et les crudités, y compris ceux qui seront épluchés.",
          "Portez des gants pour jardiner et évitez de nettoyer vous-même la litière du chat, ou utilisez des gants puis lavez-vous les mains."
        ]
      },
      {
        title: "La viande doit-elle toujours être bien cuite ?",
        paragraphs: [
          "Oui, en particulier si vous n’êtes pas immunisée contre la toxoplasmose.",
          "La viande hachée doit toujours être cuite à cœur, car les microbes peuvent être présents dans toute son épaisseur.",
          "Les carpaccios, tartares, viandes saignantes et préparations crues sont à éviter.",
          "La congélation domestique ne doit pas être considérée comme une garantie suffisante pour rendre une viande crue sans risque."
        ]
      },
      {
        title: "Quels produits de charcuterie peut-on consommer ?",
        paragraphs: [
          "Les charcuteries crues ou peu cuites, comme le jambon cru, le saucisson et le chorizo, exposent notamment au risque de toxoplasmose.",
          "Les pâtés, rillettes, foie gras et produits en gelée réfrigérés sont déconseillés en raison du risque de listériose.",
          "Les produits cuits et consommés bien chauds présentent moins de risque s’ils ont été correctement conservés.",
          "Pour le jambon cuit, privilégiez un produit préemballé et consommez-le rapidement après ouverture."
        ]
      },
      {
        title: "Quels fromages peut-on manger ?",
        paragraphs: [
          "Les fromages au lait pasteurisé sont généralement compatibles avec la grossesse lorsqu’ils sont bien conservés et consommés avant leur date limite.",
          "Retirez la croûte avant de les manger.",
          "Les fromages à pâte pressée cuite, comme l’emmental ou le comté, sont généralement moins à risque, à condition de retirer la croûte et de respecter la conservation.",
          "Vérifiez l’étiquette en cas de doute."
        ]
      },
      {
        title: "Les œufs crus sont-ils autorisés ?",
        paragraphs: [
          "Les préparations contenant des œufs crus ou peu cuits peuvent exposer à des bactéries comme les salmonelles.",
          "Évitez les œufs peu cuits, la mayonnaise maison, la mousse au chocolat maison, le tiramisu et les pâtes crues s’ils contiennent des œufs non pasteurisés.",
          "Les produits industriels utilisent souvent des œufs pasteurisés, mais vérifiez l’étiquette et respectez la conservation.",
          "Les œufs doivent être cuits jusqu’à ce que le blanc et le jaune soient suffisamment pris."
        ]
      },
      {
        title: "Peut-on manger du poisson pendant la grossesse ?",
        paragraphs: [
          "Oui. Le poisson apporte des protéines, de l’iode et des acides gras utiles au développement du bébé.",
          "Variez les espèces et les lieux d’approvisionnement.",
          "Consommez le poisson bien cuit et évitez les poissons crus, fumés ou marinés réfrigérés.",
          "Alternez poissons gras et poissons maigres sans consommer toujours la même espèce."
        ]
      },
      {
        title: "Quels poissons faut-il limiter ou éviter ?",
        paragraphs: [
          "Certains grands poissons prédateurs accumulent davantage de mercure.",
          "Évitez les espèces les plus contaminées, notamment le requin, la lamproie, l’espadon, le marlin et le siki.",
          "D’autres poissons prédateurs, comme le thon, la lotte, le bar, la dorade, la raie ou le brochet, doivent être consommés avec modération.",
          "Les recommandations pouvant évoluer, consultez les conseils actualisés de l’Anses."
        ]
      },
      {
        title: "Les sushis et poissons fumés sont-ils à éviter ?",
        paragraphs: [
          "Oui, les poissons crus exposent à des parasites et à des bactéries, tandis que les poissons fumés réfrigérés présentent un risque de listériose.",
          "Les sushis végétariens peuvent être consommés si les légumes ont été soigneusement lavés et si la préparation respecte une bonne hygiène.",
          "Les poissons cuits servis immédiatement sont une alternative plus sûre.",
          "Les produits marinés, comme le ceviche, restent considérés comme crus : l’acidité ne remplace pas la cuisson."
        ]
      },
      {
        title: "Peut-on manger des coquillages et crustacés ?",
        paragraphs: [
          "Les coquillages crus, comme les huîtres, sont à éviter pendant la grossesse.",
          "Les crustacés et coquillages peuvent être consommés s’ils sont très frais, bien cuits et conservés correctement.",
          "Évitez les produits décortiqués ou préparés longtemps à l’avance lorsqu’ils sont destinés à être consommés froids.",
          "Ne consommez jamais un coquillage dont la coquille reste fermée après cuisson."
        ]
      },
      {
        title: "Pourquoi faut-il éviter l’alcool ?",
        paragraphs: [
          "L’alcool traverse le placenta et atteint le bébé.",
          "Aucune quantité d’alcool n’a été démontrée comme sans risque pendant la grossesse.",
          "Le principe recommandé est donc zéro alcool pendant toute la grossesse, y compris pour les consommations occasionnelles.",
          "Si vous avez consommé de l’alcool avant de savoir que vous étiez enceinte, arrêtez dès maintenant et parlez-en sans culpabilité au professionnel qui vous suit."
        ]
      },
      {
        title: "Quelle quantité de caféine ne faut-il pas dépasser ?",
        paragraphs: [
          "La caféine se trouve dans le café, le thé, les boissons au cola, les boissons énergisantes, le chocolat et certains médicaments.",
          "Pendant la grossesse, limitez les apports quotidiens et évitez les consommations importantes.",
          "La quantité varie fortement selon la taille et le mode de préparation du café.",
          "Les boissons énergisantes sont déconseillées pendant la grossesse."
        ]
      },
      {
        title: "Les tisanes et plantes sont-elles toujours sans risque ?",
        paragraphs: [
          "Non. Une tisane est un produit actif et toutes les plantes n’ont pas été suffisamment étudiées pendant la grossesse.",
          "Évitez les mélanges dont la composition est imprécise, les cures concentrées et les huiles essentielles sans avis professionnel.",
          "Demandez conseil à un pharmacien, une sage-femme ou un médecin avant une consommation régulière.",
          "Les compléments à base de plantes ne sont pas automatiquement sûrs parce qu’ils sont naturels."
        ]
      },
      {
        title: "Faut-il éviter le foie et certains produits riches en vitamine A ?",
        paragraphs: [
          "Le foie et les produits fabriqués à partir de foie sont très riches en vitamine A sous forme de rétinol.",
          "Un excès de rétinol peut être nocif pendant la grossesse.",
          "Évitez les consommations régulières de foie et les compléments contenant de fortes doses de vitamine A.",
          "Les caroténoïdes présents dans les fruits et légumes ne présentent pas le même risque."
        ]
      },
      {
        title: "Comment laver correctement les fruits et légumes ?",
        bullets: [
          "Lavez-vous les mains avant de cuisiner.",
          "Rincez soigneusement chaque fruit, légume et herbe aromatique à l’eau potable.",
          "Frottez les surfaces et retirez les parties abîmées ou terreuses.",
          "Épluchez lorsque cela est possible après le lavage.",
          "Nettoyez le plan de travail, l’évier et les ustensiles utilisés.",
          "N’utilisez pas d’eau de Javel ou de produit ménager sur les aliments."
        ]
      },
      {
        title: "Quelles règles d’hygiène respecter en cuisine ?",
        bullets: [
          "Lavez-vous les mains avant et après avoir manipulé des aliments crus.",
          "Utilisez des planches et ustensiles distincts pour le cru et le cuit.",
          "Nettoyez régulièrement le réfrigérateur.",
          "Maintenez le réfrigérateur autour de 4 °C dans sa zone la plus froide.",
          "Respectez les dates limites de consommation.",
          "Placez rapidement les aliments cuisinés au réfrigérateur.",
          "Réchauffez les restes à cœur et consommez-les rapidement."
        ]
      },
      {
        title: "Peut-on consommer des restes ?",
        paragraphs: [
          "Oui, s’ils ont été refroidis rapidement, conservés au réfrigérateur dans un récipient fermé et consommés rapidement.",
          "Réchauffez-les jusqu’à ce qu’ils soient bien chauds à cœur.",
          "Ne consommez pas un aliment resté plusieurs heures à température ambiante.",
          "En cas de doute sur l’odeur, l’aspect, la conservation ou la date, jetez-le."
        ]
      },
      {
        title: "Faut-il manger davantage pendant la grossesse ?",
        paragraphs: [
          "Les besoins augmentent progressivement, mais il n’est pas nécessaire de manger pour deux.",
          "Une alimentation équilibrée repose sur des légumes et fruits bien lavés, des féculents, des protéines, des produits laitiers adaptés et des matières grasses de bonne qualité.",
          "Le professionnel peut adapter les conseils selon votre poids, vos nausées, votre activité, une grossesse multiple ou un diabète gestationnel.",
          "Évitez les régimes amaigrissants et les restrictions importantes sans suivi médical."
        ]
      },
      {
        title: "Quels compléments alimentaires sont nécessaires ?",
        paragraphs: [
          "L’acide folique est recommandé avant la conception et au début de la grossesse selon la prescription du professionnel.",
          "Le fer, la vitamine D, l’iode ou d’autres compléments ne sont prescrits qu’en fonction des besoins et des résultats.",
          "Ne cumulez pas plusieurs compléments destinés à la grossesse sans vérifier leur composition.",
          "Un excès de certaines vitamines et de certains minéraux peut être nocif."
        ]
      },
      {
        title: "Que faire après avoir mangé un aliment déconseillé ?",
        paragraphs: [
          "Ne paniquez pas : une consommation isolée n’entraîne pas automatiquement une infection ou une complication.",
          "Notez l’aliment, la date et les conditions de consommation.",
          "Surveillez l’apparition de fièvre, de troubles digestifs importants, de courbatures ou d’un état grippal.",
          "Contactez rapidement un professionnel si vous avez des symptômes, si l’aliment fait l’objet d’un rappel ou si vous êtes particulièrement inquiète."
        ]
      },
      {
        title: "Quand faut-il consulter rapidement ?",
        bullets: [
          "Fièvre pendant la grossesse.",
          "Vomissements ou diarrhées importantes empêchant de boire.",
          "Douleurs abdominales marquées.",
          "Signes de déshydratation.",
          "État grippal après la consommation d’un aliment à risque.",
          "Suspicion d’intoxication alimentaire collective.",
          "Diminution des mouvements du bébé à un terme où vous les ressentez habituellement."
        ],
        paragraphs: [
          "En cas de symptômes importants, contactez la maternité ou le professionnel qui suit la grossesse sans attendre."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Évitez totalement l’alcool pendant toute la grossesse.",
          "Privilégiez les aliments bien cuits, pasteurisés, frais et correctement conservés.",
          "Lavez soigneusement les végétaux et séparez les aliments crus des aliments cuits.",
          "Variez les poissons tout en évitant les espèces les plus contaminées par le mercure.",
          "Demandez conseil avant de prendre une plante, une huile essentielle ou un complément alimentaire."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Grossesse : alimentation et hygiène de vie",
        url: "https://www.ameli.fr/assure/sante/themes/grossesse/grossesse-en-bonne-sante/alimentation-grossesse"
      },
      {
        label: "Anses — Alimentation des femmes enceintes et allaitantes",
        url: "https://www.anses.fr/fr/content/alimentation-des-femmes-enceintes-et-allaitantes"
      },
      {
        label: "Santé publique France — Alcool et grossesse : zéro alcool",
        url: "https://www.santepubliquefrance.fr/determinants-de-sante/alcool/articles/alcool-et-grossesse"
      },
      {
        label: "1000 premiers jours — Bien manger pendant la grossesse",
        url: "https://www.1000-premiers-jours.fr/fr/bien-manger-pendant-la-grossesse"
      }
    ]
  },

{
    slug: "prise-de-poids-pendant-la-grossesse-quels-reperes",
    title: "Prise de poids pendant la grossesse : quels repères ?",
    description:
      "Évolution selon les trimestres, repères selon l’IMC, variations normales et situations nécessitant un avis médical : comprendre la prise de poids pendant la grossesse.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Symptômes et bien-être",
    subcategorySlug: "symptomes-bien-etre",
    readingTime: "10 min",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    tone: "rose",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "La prise de poids varie d’une femme à l’autre et dépend notamment de l’IMC avant la grossesse, de la morphologie, des symptômes et du nombre de bébés.",
          "Elle est souvent faible au premier trimestre, puis devient plus régulière au deuxième et au troisième trimestre.",
          "Il n’existe pas un objectif unique valable pour toutes les femmes : les repères doivent être adaptés par le professionnel qui suit la grossesse.",
          "Les régimes amaigrissants et les restrictions importantes sont déconseillés pendant la grossesse.",
          "Une prise de poids très rapide, des gonflements soudains ou une perte de poids persistante doivent être signalés."
        ],
        quote:
          "Le poids est un indicateur parmi d’autres : il doit toujours être interprété avec votre état de santé, la croissance du bébé et le déroulement de la grossesse."
      },
      {
        title: "Pourquoi prend-on du poids pendant la grossesse ?",
        paragraphs: [
          "La prise de poids ne correspond pas uniquement au poids du bébé.",
          "Elle comprend aussi le placenta, le liquide amniotique, l’augmentation du volume sanguin, le développement de l’utérus et des seins, ainsi que des réserves énergétiques utiles à la grossesse et à l’après-naissance.",
          "Ces différentes composantes évoluent progressivement et expliquent pourquoi la courbe de poids n’est pas identique d’un trimestre à l’autre.",
          "Une partie importante du poids pris disparaît naturellement après l’accouchement, tandis que le reste diminue plus progressivement."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Le premier trimestre est souvent marqué par une prise de poids faible ou irrégulière.",
          "La progression devient généralement plus régulière à partir du deuxième trimestre.",
          "L’évolution dans le temps est plus informative qu’un chiffre isolé sur la balance."
        ],
        quote:
          "Se peser dans des conditions similaires permet de suivre une tendance sans se focaliser sur les variations quotidiennes."
      },
      {
        title: "Quels sont les repères selon l’IMC avant la grossesse ?",
        paragraphs: [
          "Les repères de prise de poids sont généralement adaptés à l’indice de masse corporelle avant la grossesse.",
          "À titre indicatif, une prise de poids totale d’environ 12,5 à 18 kg est souvent proposée en cas d’insuffisance pondérale, de 11,5 à 16 kg pour un IMC considéré comme normal, de 7 à 11,5 kg en cas de surpoids et de 5 à 9 kg en cas d’obésité.",
          "Ces fourchettes sont des repères généraux et non des objectifs rigides.",
          "Votre professionnel peut proposer une surveillance différente selon votre histoire médicale, votre alimentation, votre activité et la croissance du bébé."
        ]
      },
      {
        title: "Comment calculer l’IMC avant la grossesse ?",
        paragraphs: [
          "L’IMC correspond au poids en kilogrammes divisé par la taille en mètres au carré.",
          "Il est utilisé comme repère général pour adapter les conseils, mais il ne décrit pas précisément la composition corporelle.",
          "Le poids de référence est idéalement celui d’avant la grossesse ou du tout début de grossesse.",
          "Le calcul ne remplace pas l’évaluation du médecin ou de la sage-femme."
        ]
      },
      {
        title: "Comment le poids évolue-t-il au premier trimestre ?",
        paragraphs: [
          "La prise de poids est souvent limitée pendant les trois premiers mois.",
          "Certaines femmes ne prennent presque pas de poids, tandis que d’autres en prennent davantage.",
          "Les nausées et les vomissements peuvent entraîner une stagnation ou une légère perte de poids.",
          "Une perte importante, persistante ou associée à une difficulté à boire doit conduire à demander un avis médical."
        ]
      },
      {
        title: "Comment évolue-t-il au deuxième trimestre ?",
        paragraphs: [
          "À partir du deuxième trimestre, la prise de poids devient souvent plus régulière.",
          "L’appétit peut revenir lorsque les nausées diminuent, tandis que le bébé, l’utérus et le placenta poursuivent leur croissance.",
          "La progression hebdomadaire varie selon l’IMC de départ et la situation individuelle.",
          "Une semaine sans changement ou une variation ponctuelle ne signifie pas forcément qu’il existe un problème."
        ]
      },
      {
        title: "Et au troisième trimestre ?",
        paragraphs: [
          "La prise de poids se poursuit généralement avec la croissance du bébé et l’augmentation du liquide et du volume sanguin.",
          "Elle peut ralentir à l’approche du terme.",
          "La rétention d’eau peut provoquer des variations rapides, notamment au niveau des jambes, des mains ou du visage.",
          "Un gonflement brutal associé à une prise de poids rapide, des maux de tête ou des troubles visuels nécessite un avis rapide."
        ]
      },
      {
        title: "Faut-il se peser toutes les semaines ?",
        paragraphs: [
          "Une pesée régulière peut être utile, mais il n’est pas nécessaire de se peser chaque jour.",
          "Une fréquence hebdomadaire ou lors des consultations suffit généralement.",
          "Utilisez si possible la même balance, au même moment de la journée et dans des conditions comparables.",
          "Si la pesée provoque de l’anxiété ou réactive un trouble du comportement alimentaire, parlez-en au professionnel qui vous suit."
        ]
      },
      {
        title: "Peut-on prendre peu de poids et avoir un bébé en bonne santé ?",
        paragraphs: [
          "Oui. Une prise de poids inférieure aux repères peut parfois être compatible avec une grossesse normale.",
          "Le professionnel vérifie surtout la croissance du bébé, votre alimentation, vos analyses et votre état général.",
          "Une prise insuffisante peut toutefois augmenter certains risques lorsqu’elle s’accompagne de carences, d’un faible poids avant la grossesse ou d’un ralentissement de croissance du bébé.",
          "Il ne faut pas essayer de compenser seule avec une alimentation très riche sans avoir identifié la cause."
        ]
      },
      {
        title: "Une prise de poids importante signifie-t-elle que le bébé sera gros ?",
        paragraphs: [
          "Non. Le poids pris par la mère ne correspond pas directement au poids du bébé.",
          "Une prise importante peut être liée aux réserves maternelles, à une rétention d’eau ou à d’autres facteurs.",
          "À l’inverse, un bébé de poids élevé peut être observé chez une femme dont la prise de poids reste modérée.",
          "La croissance du bébé est évaluée par les mesures cliniques et échographiques, pas uniquement par la balance."
        ]
      },
      {
        title: "Quels facteurs influencent la prise de poids ?",
        bullets: [
          "L’IMC et le poids avant la grossesse.",
          "Les nausées, vomissements et troubles digestifs.",
          "L’appétit et les habitudes alimentaires.",
          "Le niveau d’activité physique.",
          "La rétention d’eau.",
          "Le diabète gestationnel ou une autre maladie.",
          "Une grossesse multiple.",
          "L’arrêt du tabac.",
          "Le contexte émotionnel et social."
        ]
      },
      {
        title: "Que se passe-t-il en cas de grossesse gémellaire ?",
        paragraphs: [
          "Les besoins et la prise de poids attendue sont généralement plus élevés lors d’une grossesse multiple.",
          "Les repères dépendent de l’IMC avant la grossesse et du nombre de bébés.",
          "La surveillance nutritionnelle et échographique est plus rapprochée.",
          "Le professionnel peut vous orienter vers un diététicien si les apports sont difficiles à couvrir."
        ]
      },
      {
        title: "Faut-il manger pour deux ?",
        paragraphs: [
          "Non. Les besoins énergétiques augmentent progressivement, mais ils ne doublent pas.",
          "La qualité de l’alimentation compte davantage que l’augmentation importante des portions.",
          "Privilégiez des repas variés avec des légumes, des féculents, des protéines, des produits laitiers adaptés et des matières grasses de bonne qualité.",
          "En cas de faim entre les repas, une collation équilibrée peut être plus adaptée que des grignotages répétés."
        ]
      },
      {
        title: "Comment favoriser une prise de poids adaptée ?",
        bullets: [
          "Conserver des repas réguliers.",
          "Écouter les sensations de faim et de satiété.",
          "Varier les aliments sans supprimer inutilement un groupe entier.",
          "Limiter les boissons sucrées et les produits très transformés sans rechercher une alimentation parfaite.",
          "Boire de l’eau régulièrement.",
          "Maintenir une activité physique adaptée en l’absence de contre-indication.",
          "Demander de l’aide si l’alimentation devient une source de stress."
        ]
      },
      {
        title: "Peut-on faire un régime pendant la grossesse ?",
        paragraphs: [
          "Les régimes amaigrissants et les restrictions caloriques importantes sont déconseillés.",
          "Ils peuvent entraîner des carences et ne garantissent pas une grossesse plus sûre.",
          "En cas de surpoids ou d’obésité, l’objectif est généralement de limiter une prise excessive tout en conservant des apports suffisants.",
          "Un accompagnement par un professionnel permet d’adapter l’alimentation sans culpabilisation ni restriction dangereuse."
        ]
      },
      {
        title: "L’activité physique aide-t-elle à réguler le poids ?",
        paragraphs: [
          "Une activité régulière et adaptée contribue au bien-être, au maintien de la condition physique et à la prévention de certaines complications.",
          "La marche, la natation douce, le vélo d’appartement ou les activités prénatales peuvent être envisagés en l’absence de contre-indication.",
          "L’objectif n’est pas de brûler des calories ni de compenser les repas.",
          "Demandez conseil avant de commencer une nouvelle activité ou si votre grossesse nécessite une surveillance particulière."
        ]
      },
      {
        title: "Quand une prise de poids rapide doit-elle inquiéter ?",
        paragraphs: [
          "Une variation rapide peut être liée à la rétention d’eau, mais elle doit être signalée lorsqu’elle est importante ou brutale.",
          "Elle nécessite une attention particulière si elle s’accompagne de gonflement soudain du visage ou des mains, de maux de tête, de troubles visuels, de douleur sous les côtes ou d’une tension élevée.",
          "Ces signes peuvent évoquer une prééclampsie et justifient une évaluation rapide.",
          "N’attendez pas la consultation suivante pour contacter la maternité."
        ]
      },
      {
        title: "Quand une perte de poids doit-elle être signalée ?",
        bullets: [
          "La perte est importante ou se poursuit plusieurs semaines.",
          "Vous vomissez fréquemment.",
          "Vous ne parvenez pas à boire ou à garder les aliments.",
          "Vous présentez des signes de déshydratation.",
          "Vous êtes très faible, étourdie ou avez des palpitations.",
          "L’alimentation est limitée par une peur intense de prendre du poids."
        ],
        paragraphs: [
          "Une prise en charge précoce peut aider à contrôler les symptômes et à prévenir les carences."
        ]
      },
      {
        title: "Comment parler du poids sans culpabilisation ?",
        paragraphs: [
          "Le poids est un sujet sensible et ne devrait pas être présenté comme une faute ou un manque de volonté.",
          "De nombreux facteurs biologiques, médicaux et sociaux influencent son évolution.",
          "Vous pouvez demander au professionnel de ne pas annoncer le chiffre à voix haute ou de vous peser sans que vous regardiez la balance.",
          "Signalez tout antécédent de trouble du comportement alimentaire afin que le suivi soit adapté avec bienveillance."
        ]
      },
      {
        title: "Que se passe-t-il après l’accouchement ?",
        paragraphs: [
          "Une partie du poids disparaît rapidement avec la naissance du bébé, du placenta et la diminution du liquide.",
          "Le reste évolue progressivement au cours des mois suivants.",
          "Le post-partum n’est pas une période adaptée aux régimes stricts, en particulier lorsque la récupération est difficile ou en cas d’allaitement.",
          "Le repos, une alimentation régulière et une reprise progressive de l’activité sont prioritaires."
        ]
      },
      {
        title: "Quand demander conseil ?",
        bullets: [
          "Votre poids évolue très rapidement dans un sens ou dans l’autre.",
          "Vous avez des difficultés importantes à vous alimenter.",
          "Vous craignez de prendre du poids au point de restreindre vos repas.",
          "Vous présentez un diabète gestationnel ou une maladie nécessitant des conseils spécifiques.",
          "La croissance du bébé nécessite une surveillance.",
          "Les remarques sur votre poids vous mettent en difficulté."
        ],
        paragraphs: [
          "Une sage-femme, un médecin ou un diététicien formé à la périnatalité peut vous proposer des repères personnalisés."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "La prise de poids pendant la grossesse varie selon l’IMC de départ et la situation individuelle.",
          "Elle est souvent faible au premier trimestre puis plus régulière ensuite.",
          "Les fourchettes sont des repères et ne doivent pas devenir des objectifs rigides.",
          "Les régimes amaigrissants sont déconseillés pendant la grossesse.",
          "Une variation brutale, une perte persistante ou des signes associés doivent être signalés."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Alimentation et prise de poids pendant la grossesse",
        url: "https://www.ameli.fr/assure/sante/themes/grossesse/grossesse-en-bonne-sante/alimentation-grossesse"
      },
      {
        label: "1000 premiers jours — Bien manger pendant la grossesse",
        url: "https://www.1000-premiers-jours.fr/fr/bien-manger-pendant-la-grossesse"
      },
      {
        label: "Haute Autorité de santé — Suivi et orientation des femmes enceintes",
        url: "https://www.has-sante.fr/jcms/c_547976/fr/comment-mieux-informer-les-femmes-enceintes"
      },
      {
        label: "Organisation mondiale de la Santé — Recommandations sur les soins prénatals",
        url: "https://www.who.int/publications/i/item/9789241549912"
      }
    ]
  },

{
    slug: "activite-physique-pendant-la-grossesse-que-peut-on-faire",
    title: "Activité physique pendant la grossesse : que peut-on faire ?",
    description:
      "Marche, natation, renforcement musculaire, sports à éviter et signes d’alerte : les repères pour bouger en sécurité pendant la grossesse.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Symptômes et bien-être",
    subcategorySlug: "symptomes-bien-etre",
    readingTime: "10 min",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    tone: "rose",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "En l’absence de contre-indication, une activité physique régulière et adaptée est recommandée pendant la grossesse.",
          "La marche, la natation, le vélo d’appartement, le renforcement musculaire léger et les activités prénatales sont généralement de bonnes options.",
          "L’objectif habituel est de progresser vers environ 150 minutes d’activité d’intensité modérée par semaine, réparties sur plusieurs jours.",
          "Les sports avec risque de chute, de choc abdominal, de collision ou de plongée sous-marine sont à éviter.",
          "Arrêtez l’effort et demandez un avis en cas de saignement, perte de liquide, contractions douloureuses, malaise, douleur thoracique ou diminution des mouvements du bébé."
        ],
        quote:
          "Pendant la grossesse, l’objectif n’est pas la performance : il s’agit de rester active de façon régulière, confortable et adaptée à votre situation."
      },
      {
        title: "Pourquoi bouger pendant la grossesse ?",
        paragraphs: [
          "L’activité physique aide à entretenir le cœur, les muscles, la mobilité et le bien-être psychologique.",
          "Elle peut contribuer à limiter les douleurs du dos, la constipation, la prise de poids excessive et le risque de diabète gestationnel.",
          "Elle favorise aussi le sommeil, l’humeur et la récupération après l’accouchement.",
          "Ces bénéfices concernent surtout une pratique régulière, progressive et compatible avec le déroulement de la grossesse."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Choisissez une activité que vous pouvez pratiquer sans douleur et sans sensation d’épuisement.",
          "Pendant un effort modéré, vous devez généralement pouvoir parler, même si votre respiration est un peu plus rapide.",
          "Hydratez-vous, évitez la chaleur excessive et adaptez l’intensité au fil des trimestres."
        ],
        quote:
          "Une séance courte compte aussi : plusieurs périodes de dix à quinze minutes peuvent être plus faciles à intégrer qu’une longue séance."
      },
      {
        title: "Quelle quantité d’activité est recommandée ?",
        paragraphs: [
          "Pour une grossesse sans complication, les recommandations encouragent généralement environ 150 minutes d’activité d’intensité modérée par semaine.",
          "Cette durée peut être répartie sur plusieurs jours, par exemple trente minutes cinq jours par semaine.",
          "Si vous étiez peu active avant la grossesse, commencez par des séances courtes de dix à quinze minutes puis augmentez progressivement.",
          "Si vous étiez déjà sportive, vous pouvez souvent poursuivre une partie de vos activités en les adaptant avec le professionnel qui suit la grossesse."
        ]
      },
      {
        title: "Comment reconnaître une intensité modérée ?",
        paragraphs: [
          "Une activité modérée accélère légèrement la respiration et le rythme cardiaque sans vous empêcher de parler.",
          "Le test de la conversation est souvent plus utile qu’un objectif précis de fréquence cardiaque.",
          "Vous devez pouvoir terminer la séance sans épuisement important et récupérer rapidement.",
          "L’intensité ressentie peut varier selon le terme, la fatigue, la chaleur et les symptômes du jour."
        ]
      },
      {
        title: "Quelles activités sont généralement adaptées ?",
        bullets: [
          "La marche à un rythme confortable.",
          "La natation et l’aquagym prénatale.",
          "Le vélo d’appartement.",
          "Le yoga ou le Pilates prénatal encadré.",
          "Le renforcement musculaire léger à modéré.",
          "Les exercices de mobilité et d’assouplissement doux.",
          "La danse sans sauts ni risque de chute.",
          "Les activités quotidiennes comme les déplacements à pied."
        ],
        paragraphs: [
          "Le meilleur choix est une activité que vous appréciez et que vous pouvez pratiquer régulièrement.",
          "Les cours destinés aux femmes enceintes doivent être encadrés par une personne formée et informée de votre terme."
        ]
      },
      {
        title: "La marche est-elle suffisante ?",
        paragraphs: [
          "Oui. La marche est accessible, facile à adapter et ne nécessite pas de matériel particulier.",
          "Vous pouvez varier la durée et l’allure selon votre forme.",
          "Des chaussures confortables, un terrain stable et une bonne hydratation sont recommandés.",
          "En cas de douleurs pelviennes ou ligamentaires, réduisez la durée, ralentissez et demandez conseil si la gêne persiste."
        ]
      },
      {
        title: "Peut-on nager pendant la grossesse ?",
        paragraphs: [
          "La natation est généralement bien tolérée car l’eau soulage le poids du corps et limite les impacts.",
          "Elle peut aider à réduire les sensations de jambes lourdes et certaines douleurs du dos.",
          "Évitez les plongeons, les apnées prolongées et les mouvements qui provoquent une douleur.",
          "Après une perte des eaux ou en cas de problème médical, demandez l’accord de la maternité avant d’aller à la piscine."
        ]
      },
      {
        title: "Peut-on faire du renforcement musculaire ?",
        paragraphs: [
          "Oui, un renforcement léger à modéré peut être poursuivi ou commencé progressivement en l’absence de contre-indication.",
          "Privilégiez des mouvements contrôlés, une respiration régulière et des charges permettant de conserver une bonne technique.",
          "Évitez de bloquer votre respiration, de pousser en force ou de rechercher des charges maximales.",
          "Un professionnel formé peut vous aider à adapter les exercices au ventre, au périnée et aux changements d’équilibre."
        ]
      },
      {
        title: "Peut-on travailler les abdominaux ?",
        paragraphs: [
          "Certains exercices abdominaux peuvent être adaptés pendant la grossesse, notamment le travail respiratoire et le renforcement profond.",
          "Les mouvements provoquant une douleur, une poussée importante vers le bas ou un bombement marqué au centre du ventre doivent être modifiés.",
          "Les longues séries de relevés de buste classiques deviennent souvent inconfortables et peu adaptées.",
          "Une sage-femme ou un kinésithérapeute formé à la périnatalité peut proposer des exercices appropriés."
        ]
      },
      {
        title: "Faut-il faire des exercices du périnée ?",
        paragraphs: [
          "Les exercices du plancher pelvien peuvent aider à mieux connaître et contrôler le périnée.",
          "Ils peuvent contribuer à prévenir ou réduire certaines fuites urinaires.",
          "Le périnée doit pouvoir se contracter mais aussi se relâcher correctement.",
          "En cas de douleur pelvienne, de sensation de pesanteur ou de difficulté à identifier les muscles, demandez un accompagnement personnalisé."
        ]
      },
      {
        title: "Peut-on courir pendant la grossesse ?",
        paragraphs: [
          "Une femme qui courait régulièrement avant la grossesse peut parfois poursuivre en réduisant l’intensité et la durée.",
          "Il est généralement déconseillé de commencer un programme de course intense pendant la grossesse si vous ne couriez pas auparavant.",
          "Les douleurs pelviennes, les fuites urinaires, la sensation de lourdeur ou l’inconfort doivent conduire à adapter ou interrompre la course.",
          "Privilégiez un terrain stable, évitez la chaleur et demandez un avis en cas de grossesse à risque."
        ]
      },
      {
        title: "Quels sports faut-il éviter ?",
        bullets: [
          "Les sports de combat et les activités avec risque de choc abdominal.",
          "Les sports collectifs avec collisions fréquentes.",
          "L’équitation, le ski alpin, l’escalade ou les activités présentant un risque important de chute.",
          "La plongée sous-marine avec bouteilles.",
          "Les activités en altitude élevée sans acclimatation ni avis médical.",
          "Les exercices pratiqués dans une chaleur intense.",
          "Les sports mécaniques ou les attractions provoquant des secousses importantes."
        ],
        paragraphs: [
          "Le niveau de risque dépend aussi de votre expérience, du terme et des conditions de pratique.",
          "Une activité auparavant maîtrisée peut devenir moins sûre lorsque l’équilibre et les articulations se modifient."
        ]
      },
      {
        title: "Pourquoi la plongée sous-marine est-elle déconseillée ?",
        paragraphs: [
          "La plongée avec bouteilles expose le bébé aux variations de pression et à un risque d’accident de décompression.",
          "Elle est donc contre-indiquée pendant toute la grossesse.",
          "La nage en surface reste généralement possible si la grossesse évolue normalement.",
          "L’apnée intensive ou prolongée doit également être évitée."
        ]
      },
      {
        title: "Peut-on faire du vélo ?",
        paragraphs: [
          "Le vélo d’appartement est généralement une option stable et facile à contrôler.",
          "Le vélo en extérieur peut devenir plus risqué à mesure que l’équilibre change et que le ventre s’arrondit.",
          "Évitez les routes dangereuses, les terrains irréguliers et les situations avec risque de chute.",
          "Adaptez la hauteur du guidon et de la selle pour conserver une position confortable."
        ]
      },
      {
        title: "Faut-il éviter de rester allongée sur le dos ?",
        paragraphs: [
          "À partir du deuxième trimestre, une position prolongée à plat sur le dos peut provoquer un malaise chez certaines femmes en comprimant de gros vaisseaux.",
          "Si vous vous sentez étourdie, nauséeuse ou essoufflée, tournez-vous sur le côté et arrêtez l’exercice.",
          "Pour les exercices au sol, utilisez une position inclinée ou latérale lorsque cela est plus confortable.",
          "Il n’est pas nécessaire de s’inquiéter si vous vous réveillez brièvement sur le dos : changez simplement de position."
        ]
      },
      {
        title: "Comment adapter l’activité au premier trimestre ?",
        paragraphs: [
          "La fatigue, les nausées et les vertiges peuvent limiter l’activité au début de la grossesse.",
          "Réduisez l’intensité les jours difficiles et privilégiez des séances courtes.",
          "Évitez de vous entraîner à jeun si cela augmente les nausées ou les malaises.",
          "Une baisse temporaire de l’activité n’annule pas les bénéfices d’une reprise progressive lorsque vous vous sentez mieux."
        ]
      },
      {
        title: "Comment l’adapter au deuxième trimestre ?",
        paragraphs: [
          "Le deuxième trimestre est souvent plus confortable, mais le centre de gravité commence à se modifier.",
          "Privilégiez les activités stables et adaptez les exercices nécessitant beaucoup d’équilibre.",
          "Soutenez le ventre si cela améliore le confort et choisissez une tenue qui ne comprime pas.",
          "Réduisez les impacts si vous ressentez des douleurs ligamentaires, pelviennes ou des fuites urinaires."
        ]
      },
      {
        title: "Comment l’adapter au troisième trimestre ?",
        paragraphs: [
          "L’essoufflement, la fatigue, le poids du ventre et les troubles de l’équilibre peuvent nécessiter des séances plus courtes.",
          "La marche, la natation, la mobilité douce et les exercices de respiration sont souvent bien tolérés.",
          "Évitez les changements de direction rapides et les mouvements qui deviennent instables.",
          "À l’approche du terme, restez proche d’un lieu où vous pouvez vous asseoir, boire et demander de l’aide si nécessaire."
        ]
      },
      {
        title: "Comment éviter la chaleur et la déshydratation ?",
        bullets: [
          "Buvez avant, pendant et après l’activité.",
          "Évitez les heures les plus chaudes.",
          "Portez des vêtements légers et respirants.",
          "Préférez un lieu ventilé.",
          "Réduisez l’intensité lorsqu’il fait chaud ou humide.",
          "Arrêtez-vous en cas de vertige, faiblesse, crampes ou mal de tête."
        ],
        paragraphs: [
          "Les séances dans une pièce surchauffée, le yoga chaud et les efforts prolongés par forte chaleur sont déconseillés."
        ]
      },
      {
        title: "Quand faut-il demander un avis avant de commencer ?",
        bullets: [
          "Vous avez une maladie cardiaque, respiratoire ou neurologique.",
          "Vous présentez une hypertension, un diabète ou une anémie importante.",
          "La grossesse est multiple ou fait l’objet d’une surveillance renforcée.",
          "Vous avez un placenta bas, des saignements ou un risque d’accouchement prématuré.",
          "Vous avez déjà eu des complications obstétricales.",
          "Vous souhaitez reprendre un sport intense après une longue période d’inactivité."
        ],
        paragraphs: [
          "Le professionnel peut autoriser l’activité, l’adapter ou recommander temporairement de l’éviter selon votre situation."
        ]
      },
      {
        title: "Quels signes imposent d’arrêter immédiatement ?",
        bullets: [
          "Saignement vaginal.",
          "Perte de liquide.",
          "Contractions régulières et douloureuses.",
          "Essoufflement inhabituel avant même l’effort.",
          "Douleur thoracique, malaise ou vertige important.",
          "Mal de tête intense ou troubles visuels.",
          "Douleur ou gonflement d’un mollet.",
          "Faiblesse musculaire inhabituelle.",
          "Diminution des mouvements du bébé à un terme où vous les ressentez habituellement."
        ],
        paragraphs: [
          "Arrêtez l’activité, asseyez-vous ou allongez-vous sur le côté et contactez la maternité ou un professionnel selon l’intensité des symptômes.",
          "En cas de douleur thoracique, difficulté respiratoire importante ou malaise grave, appelez le 15 ou le 112."
        ]
      },
      {
        title: "L’activité physique peut-elle déclencher l’accouchement ?",
        paragraphs: [
          "Une activité modérée adaptée ne déclenche pas habituellement un accouchement prématuré dans une grossesse sans complication.",
          "Des contractions irrégulières peuvent parfois apparaître après un effort puis disparaître avec le repos et l’hydratation.",
          "Des contractions régulières, douloureuses ou persistantes doivent être évaluées.",
          "En cas de risque obstétrical particulier, suivez les consignes spécifiques de l’équipe."
        ]
      },
      {
        title: "Comment reprendre si l’on était sédentaire ?",
        paragraphs: [
          "Commencez par des activités simples comme dix minutes de marche à un rythme confortable.",
          "Augmentez progressivement la durée avant d’augmenter l’intensité.",
          "Alternez les jours actifs et les jours plus calmes si la fatigue est importante.",
          "La régularité est plus utile qu’une séance intense et occasionnelle."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Une activité physique régulière est recommandée pendant une grossesse sans complication.",
          "La marche, la natation, le vélo d’appartement et le renforcement adapté sont généralement de bonnes options.",
          "L’objectif habituel est d’approcher 150 minutes d’activité modérée par semaine, progressivement.",
          "Les activités à risque de chute, de collision, de choc abdominal ou de décompression doivent être évitées.",
          "Tout symptôme inhabituel pendant l’effort doit conduire à arrêter et, si nécessaire, à demander un avis médical."
        ]
      }
    ],
    sources: [
      {
        label: "Haute Autorité de santé — Prescription d’activité physique et sportive pendant la grossesse et en post-partum",
        url: "https://www.has-sante.fr/jcms/c_2859527/fr/prescription-d-activite-physique-et-sportive-pendant-la-grossesse-et-en-post-partum"
      },
      {
        label: "Assurance Maladie — Activité physique et grossesse",
        url: "https://www.ameli.fr/assure/sante/themes/grossesse/grossesse-en-bonne-sante/activite-physique-grossesse"
      },
      {
        label: "1000 premiers jours — Bouger pendant la grossesse",
        url: "https://www.1000-premiers-jours.fr/fr/bouger-pendant-la-grossesse"
      },
      {
        label: "Ministère des Sports — Activité physique et grossesse",
        url: "https://www.sports.gouv.fr/"
      }
    ]
  },

{
    slug: "medicaments-pendant-la-grossesse-quels-reflexes-adopter",
    title: "Médicaments pendant la grossesse : quels réflexes adopter ?",
    description:
      "Ordonnance, automédication, douleur, rhume, traitements chroniques et CRAT : les bons réflexes avant de prendre un médicament pendant la grossesse.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Symptômes et bien-être",
    subcategorySlug: "symptomes-bien-etre",
    readingTime: "10 min",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    tone: "rose",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Pendant la grossesse, ne commencez pas, n’arrêtez pas et ne modifiez pas un traitement sans avis médical.",
          "Un médicament disponible sans ordonnance peut aussi présenter un risque pendant la grossesse.",
          "Avant toute prise, signalez toujours votre grossesse au médecin, à la sage-femme ou au pharmacien.",
          "Les anti-inflammatoires non stéroïdiens, comme l’ibuprofène ou le kétoprofène, sont contre-indiqués à partir du début du sixième mois de grossesse et ne doivent pas être utilisés auparavant sans avis médical.",
          "En cas d’exposition accidentelle, ne paniquez pas et demandez rapidement conseil en précisant le nom du produit, la dose, la date et le terme de la grossesse."
        ],
        quote:
          "Le bon réflexe n’est pas d’éviter tous les médicaments, mais de choisir le traitement réellement nécessaire, à la bonne dose et pendant la durée la plus courte possible."
      },
      {
        title: "Pourquoi faut-il être prudente avec les médicaments ?",
        paragraphs: [
          "Certains médicaments peuvent traverser le placenta et atteindre le bébé.",
          "Le niveau de risque dépend de la substance, de la dose, de la durée du traitement et du moment de la grossesse.",
          "Le premier trimestre est notamment une période importante pour la formation des organes, tandis que certains médicaments peuvent avoir des effets particuliers plus tard sur la croissance, les reins, le cœur ou l’adaptation du nouveau-né.",
          "À l’inverse, ne pas traiter une maladie maternelle peut aussi présenter un risque pour la mère et le bébé."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Vérifiez chaque médicament, même s’il a déjà été utilisé avant la grossesse.",
          "N’arrêtez jamais brutalement un traitement chronique sans en parler au prescripteur.",
          "Demandez conseil à un professionnel plutôt que de vous fier uniquement à la notice, au pictogramme ou à une recherche sur internet."
        ],
        quote:
          "Gardez une liste à jour de tous vos médicaments, compléments et produits à base de plantes."
      },
      {
        title: "Que faire avant de prendre un médicament ?",
        bullets: [
          "Vérifier le nom exact du médicament et sa substance active.",
          "Lire la composition pour éviter les doublons entre plusieurs produits.",
          "Demander conseil à un médecin, une sage-femme ou un pharmacien.",
          "Préciser le terme de la grossesse.",
          "Signaler les autres traitements, allergies et maladies chroniques.",
          "Respecter la dose et la durée prescrites.",
          "Ne pas utiliser un reste d’ordonnance ancienne."
        ],
        paragraphs: [
          "Un même symptôme peut avoir plusieurs causes et ne nécessite pas toujours le même traitement.",
          "Le professionnel peut proposer une mesure non médicamenteuse, un autre médicament ou une consultation si le symptôme doit être évalué."
        ]
      },
      {
        title: "Les médicaments sans ordonnance sont-ils sans risque ?",
        paragraphs: [
          "Non. Le fait qu’un médicament soit vendu sans ordonnance ne signifie pas qu’il convient pendant la grossesse.",
          "Les médicaments contre le rhume, la toux, les allergies, les troubles digestifs ou la douleur peuvent contenir plusieurs substances.",
          "Certaines associations exposent à des prises inutiles ou à un surdosage lorsqu’elles sont combinées avec un autre produit.",
          "Demandez conseil au pharmacien en précisant systématiquement que vous êtes enceinte."
        ]
      },
      {
        title: "Peut-on reprendre un médicament déjà utilisé avant la grossesse ?",
        paragraphs: [
          "Pas automatiquement. Une substance bien tolérée auparavant peut nécessiter une vérification pendant la grossesse.",
          "La dose adaptée peut aussi changer en raison des modifications du fonctionnement du foie, des reins ou du volume sanguin.",
          "Si le médicament vous avait été prescrit pour un problème récurrent, contactez le professionnel avant de le reprendre.",
          "N’utilisez pas un médicament périmé ou conservé dans de mauvaises conditions."
        ]
      },
      {
        title: "Faut-il arrêter un traitement chronique ?",
        paragraphs: [
          "Non, jamais sans avis médical.",
          "L’arrêt brutal d’un traitement contre l’épilepsie, l’asthme, l’hypertension, le diabète, une maladie psychiatrique ou une autre affection chronique peut provoquer une aggravation dangereuse.",
          "Le médecin évalue le rapport entre les bénéfices du traitement et les risques éventuels, puis peut maintenir, adapter ou remplacer le médicament.",
          "Il est préférable de réévaluer les traitements avant la grossesse, mais une adaptation reste possible une fois la grossesse commencée."
        ]
      },
      {
        title: "Quels médicaments doivent faire l’objet d’une vigilance particulière ?",
        bullets: [
          "Les anti-inflammatoires non stéroïdiens.",
          "Certains traitements contre l’acné, notamment les rétinoïdes par voie orale.",
          "Certains antiépileptiques.",
          "Certains anticoagulants.",
          "Certains traitements de l’hypertension.",
          "Certains médicaments psychiatriques.",
          "Certains traitements anticancéreux ou immunosuppresseurs.",
          "Les médicaments contenant plusieurs substances actives."
        ],
        paragraphs: [
          "Cette liste n’est pas exhaustive et ne permet pas de conclure seule qu’un traitement doit être arrêté.",
          "Chaque situation doit être évaluée avec le prescripteur."
        ]
      },
      {
        title: "Pourquoi les anti-inflammatoires sont-ils problématiques ?",
        paragraphs: [
          "Les anti-inflammatoires non stéroïdiens, ou AINS, comprennent notamment l’ibuprofène, le kétoprofène, le naproxène et certaines doses d’aspirine.",
          "Ils sont contre-indiqués à partir du début du sixième mois de grossesse, même pour une prise unique, en raison de risques graves pour le bébé.",
          "Avant cette période, ils ne doivent pas être utilisés sans indication médicale.",
          "Les gels, crèmes, suppositoires et autres formes locales contenant un AINS doivent également être signalés."
        ]
      },
      {
        title: "Que peut-on prendre en cas de douleur ou de fièvre ?",
        paragraphs: [
          "Le paracétamol est généralement le médicament de première intention lorsqu’un traitement est nécessaire pendant la grossesse.",
          "Il doit toutefois être utilisé à la dose efficace la plus faible, pendant la durée la plus courte possible et en respectant la dose maximale indiquée.",
          "Vérifiez qu’il n’est pas déjà présent dans un médicament contre le rhume, la douleur ou la grippe.",
          "Une douleur importante, inhabituelle, persistante ou accompagnée d’autres symptômes doit être évaluée plutôt que simplement masquée."
        ]
      },
      {
        title: "Que faire en cas de rhume, toux ou mal de gorge ?",
        paragraphs: [
          "Commencez par des mesures simples : repos, hydratation, lavage du nez au sérum physiologique et boissons tièdes.",
          "Les médicaments décongestionnants vasoconstricteurs et de nombreuses associations contre le rhume ne doivent pas être utilisés sans avis médical.",
          "Les sirops peuvent contenir plusieurs substances, de l’alcool ou des plantes insuffisamment étudiées.",
          "Consultez en cas de fièvre persistante, gêne respiratoire, douleur thoracique ou aggravation."
        ]
      },
      {
        title: "Que faire en cas de nausées, reflux ou constipation ?",
        paragraphs: [
          "Des mesures alimentaires et posturales sont souvent proposées en premier.",
          "Si elles ne suffisent pas, certains traitements peuvent être utilisés pendant la grossesse après validation par un professionnel.",
          "Évitez de choisir seule un antiacide, un laxatif ou un médicament contre les nausées, car les substances et les doses diffèrent.",
          "Des vomissements empêchant de boire, une douleur abdominale ou une constipation sévère nécessitent un avis médical."
        ]
      },
      {
        title: "Les médicaments à base de plantes sont-ils plus sûrs ?",
        paragraphs: [
          "Non. Une origine naturelle ne garantit pas l’absence de risque.",
          "Les plantes peuvent avoir des effets pharmacologiques, provoquer des interactions ou être présentes à des concentrations variables.",
          "Les huiles essentielles sont particulièrement concentrées et plusieurs sont déconseillées pendant la grossesse.",
          "Demandez conseil avant de prendre une tisane médicinale, un complément, une huile essentielle ou un produit traditionnel."
        ]
      },
      {
        title: "Les compléments alimentaires doivent-ils être signalés ?",
        paragraphs: [
          "Oui. Les vitamines, minéraux et compléments peuvent interagir avec un traitement ou entraîner un apport excessif.",
          "Ne cumulez pas plusieurs produits destinés à la grossesse sans comparer leur composition.",
          "La vitamine A sous forme de rétinol peut être nocive à forte dose.",
          "Le fer, la vitamine D, l’iode ou d’autres compléments doivent être adaptés à vos besoins et aux prescriptions du professionnel."
        ]
      },
      {
        title: "Que signifie le pictogramme grossesse sur une boîte ?",
        paragraphs: [
          "Certaines boîtes comportent un pictogramme ou un message d’avertissement concernant la grossesse.",
          "Il attire l’attention sur un risque ou sur la nécessité d’un avis médical.",
          "L’absence de pictogramme ne signifie pas automatiquement que le médicament est sans risque.",
          "N’interrompez pas seule un traitement à cause d’un pictogramme : contactez rapidement le prescripteur ou le pharmacien."
        ]
      },
      {
        title: "Qu’est-ce que le CRAT ?",
        paragraphs: [
          "Le **Centre de Référence sur les Agents Tératogènes** est une structure française spécialisée dans l’évaluation des risques liés aux médicaments et à d’autres expositions pendant la **grossesse** et l’**allaitement**.",
          "Son site met à disposition des fiches par substance ou par classe de médicaments.",
          "Ces informations peuvent aider à préparer une discussion avec un professionnel de santé.",
          "Elles ne remplacent pas une prescription ni une évaluation individuelle."
        ]
      },
      {
        title: "Que faire après une prise accidentelle ?",
        bullets: [
          "Ne pas reprendre une nouvelle dose avant d’avoir obtenu un avis, sauf s’il s’agit d’un traitement indispensable qui ne doit pas être interrompu.",
          "Noter le nom exact du produit.",
          "Noter la dose et le nombre de prises.",
          "Noter la date et l’heure.",
          "Préciser le terme de la grossesse.",
          "Conserver la boîte et la notice.",
          "Contacter rapidement le médecin, la sage-femme, le pharmacien ou la maternité."
        ],
        paragraphs: [
          "Une exposition accidentelle ne signifie pas automatiquement qu’un problème surviendra.",
          "L’évaluation dépend de la substance, de la dose et du moment de la grossesse."
        ]
      },
      {
        title: "Que faire si le test de grossesse devient positif pendant un traitement ?",
        paragraphs: [
          "Contactez rapidement le prescripteur, mais n’arrêtez pas brutalement le traitement sans consigne.",
          "Préparez la liste des médicaments, des doses et des dates de prise.",
          "Le professionnel vérifie si le traitement doit être poursuivi, modifié ou remplacé.",
          "Une surveillance particulière peut parfois être proposée, mais elle n’est pas systématique."
        ]
      },
      {
        title: "Comment éviter les doublons et les surdosages ?",
        paragraphs: [
          "Plusieurs médicaments de marques différentes peuvent contenir la même substance active.",
          "C’est fréquent avec les produits contre la douleur, le rhume ou la grippe.",
          "Lisez la composition et demandez au pharmacien de vérifier l’ensemble des produits utilisés.",
          "Ne prenez pas plusieurs médicaments en même temps uniquement parce que leurs noms commerciaux sont différents."
        ]
      },
      {
        title: "Comment préparer une consultation ou un passage en pharmacie ?",
        bullets: [
          "Apporter ou photographier les boîtes des traitements.",
          "Indiquer le terme exact de la grossesse.",
          "Préciser les doses et la fréquence des prises.",
          "Signaler les médicaments sans ordonnance.",
          "Mentionner les plantes, tisanes, huiles essentielles et compléments.",
          "Décrire précisément le symptôme et sa durée.",
          "Signaler les allergies et maladies chroniques."
        ]
      },
      {
        title: "Quand faut-il consulter rapidement ?",
        bullets: [
          "Vous avez pris un médicament formellement déconseillé ou contre-indiqué pendant la grossesse.",
          "Vous avez dépassé la dose recommandée.",
          "Vous présentez une réaction allergique, un malaise ou des difficultés respiratoires.",
          "Vous avez une fièvre persistante ou élevée.",
          "La douleur est intense, inhabituelle ou s’aggrave.",
          "Vous avez des saignements, une perte de liquide ou des contractions.",
          "Vous ressentez moins les mouvements du bébé à un terme où ils sont habituellement perçus."
        ],
        paragraphs: [
          "En cas de surdosage, de réaction grave ou de détresse respiratoire, appelez le 15 ou le 112."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Aucun médicament ne doit être commencé, arrêté ou modifié sans avis pendant la grossesse.",
          "Les produits sans ordonnance, les plantes et les compléments doivent aussi être vérifiés.",
          "Les AINS sont contre-indiqués à partir du début du sixième mois et ne doivent pas être pris auparavant sans avis médical.",
          "Un traitement chronique ne doit jamais être arrêté brutalement.",
          "En cas de prise accidentelle, notez précisément l’exposition et contactez rapidement un professionnel."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Médicament et grossesse",
        url: "https://www.ameli.fr/assure/sante/medicaments/medicaments-et-situation-de-vie/medicament-grossesse"
      },
      {
        label: "ANSM — Médicaments et grossesse",
        url: "https://ansm.sante.fr/dossiers-thematiques/medicaments-et-grossesse"
      },
      {
        label: "CRAT — Centre de Référence sur les Agents Tératogènes",
        url: "https://www.lecrat.fr/"
      },
      {
        label: "Haute Autorité de santé — Comment mieux informer les femmes enceintes ?",
        url: "https://www.has-sante.fr/jcms/c_547976/fr/comment-mieux-informer-les-femmes-enceintes"
      }
    ]
  },

{
    slug: "constipation-ballonnements-et-reflux-comment-les-soulager",
    title: "Constipation, ballonnements et reflux : comment les soulager ?",
    description:
      "Alimentation, hydratation, activité physique, positions et traitements compatibles : les gestes utiles pour soulager la constipation, les ballonnements et le reflux pendant la grossesse.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Symptômes et bien-être",
    subcategorySlug: "symptomes-bien-etre",
    readingTime: "10 min",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    tone: "rose",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "La constipation, les ballonnements et le reflux sont fréquents pendant la grossesse en raison des hormones, du ralentissement du transit et de la pression exercée par l’utérus.",
          "Commencez par des mesures simples : boire régulièrement, augmenter progressivement les fibres, bouger chaque jour et fractionner les repas.",
          "Pour le reflux, évitez de vous allonger juste après avoir mangé et surélevez légèrement le haut du corps la nuit si nécessaire.",
          "N’utilisez pas de laxatif, d’antiacide, de plante ou d’huile essentielle sans l’avis d’un professionnel.",
          "Consultez en cas de douleur importante, vomissements persistants, sang dans les selles, ventre très tendu, fièvre ou impossibilité d’émettre des gaz."
        ],
        quote:
          "Ces troubles sont souvent bénins, mais ils méritent d’être pris en charge lorsqu’ils deviennent douloureux, persistent ou perturbent l’alimentation et le sommeil."
      },
      {
        title: "Pourquoi ces troubles sont-ils fréquents pendant la grossesse ?",
        paragraphs: [
          "La progestérone ralentit naturellement les mouvements du tube digestif pendant la grossesse.",
          "Ce ralentissement peut favoriser la constipation, l’accumulation de gaz et une digestion plus lente.",
          "À mesure que l’utérus augmente de volume, il exerce une pression sur l’estomac et les intestins, ce qui peut accentuer le reflux et les ballonnements.",
          "Le fer prescrit pendant la grossesse peut également aggraver la constipation chez certaines femmes."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Augmentez les fibres progressivement pour éviter d’aggraver les ballonnements.",
          "Buvez régulièrement tout au long de la journée plutôt que de grandes quantités d’un seul coup.",
          "Après les repas, restez assise ou marchez doucement au lieu de vous allonger immédiatement."
        ],
        quote:
          "Une modification progressive des habitudes est souvent mieux tolérée qu’un changement brutal."
      },
      {
        title: "Comment reconnaître une constipation ?",
        paragraphs: [
          "La constipation ne se définit pas uniquement par la fréquence des selles.",
          "Elle peut aussi se manifester par des selles dures, des efforts importants, une sensation d’évacuation incomplète ou une gêne abdominale.",
          "Pendant la grossesse, quelques jours de ralentissement peuvent être fréquents.",
          "En revanche, une constipation persistante, très douloureuse ou associée à des vomissements doit être évaluée."
        ]
      },
      {
        title: "Quels aliments peuvent aider le transit ?",
        bullets: [
          "Les légumes cuits ou crus soigneusement lavés.",
          "Les fruits, notamment les pruneaux, poires, kiwis et agrumes.",
          "Les légumineuses si elles sont bien tolérées.",
          "Les céréales complètes ou semi-complètes.",
          "Le pain complet ou aux céréales.",
          "Les graines de chia ou de lin moulues en petite quantité avec suffisamment d’eau.",
          "Les yaourts et aliments fermentés si vous les tolérez."
        ],
        paragraphs: [
          "Augmentez les fibres progressivement sur plusieurs jours.",
          "Une augmentation trop rapide peut majorer les gaz et les douleurs abdominales."
        ]
      },
      {
        title: "Combien faut-il boire ?",
        paragraphs: [
          "Une hydratation suffisante aide les fibres à retenir l’eau et à ramollir les selles.",
          "Buvez régulièrement de l’eau au cours de la journée, en adaptant les quantités à votre soif, à la chaleur et à votre activité.",
          "Les soupes, les fruits riches en eau et certaines infusions autorisées peuvent compléter les apports.",
          "Si vous avez une maladie nécessitant une restriction hydrique, suivez les consignes de votre médecin."
        ]
      },
      {
        title: "L’activité physique peut-elle aider ?",
        paragraphs: [
          "Oui. La marche et les mouvements doux stimulent le transit et peuvent réduire la sensation de lourdeur digestive.",
          "Une promenade de dix à vingt minutes après un repas peut être utile.",
          "Le yoga prénatal, la natation et les exercices de mobilité peuvent également favoriser le confort.",
          "Adaptez toujours l’activité à votre terme et aux éventuelles contre-indications."
        ]
      },
      {
        title: "Quelle position adopter aux toilettes ?",
        paragraphs: [
          "Prenez le temps de vous installer sans pousser de façon prolongée.",
          "Un petit marchepied sous les pieds peut aider à rapprocher les genoux du ventre et faciliter l’évacuation.",
          "Respirez lentement et évitez de bloquer votre souffle.",
          "Si vous ressentez une douleur, une sensation de blocage ou un besoin de pousser très fort, parlez-en à une sage-femme ou à un médecin."
        ]
      },
      {
        title: "Que faire si le fer aggrave la constipation ?",
        paragraphs: [
          "Ne stoppez pas seule le complément prescrit.",
          "Parlez-en au professionnel qui suit la grossesse : il peut vérifier la nécessité du traitement, adapter la dose ou proposer une autre forme de fer.",
          "Prendre le fer avec un repas peut parfois améliorer la tolérance digestive, mais cela dépend du produit.",
          "Une alimentation riche en fibres et une hydratation régulière peuvent compléter les mesures proposées."
        ]
      },
      {
        title: "Quand un laxatif peut-il être utilisé ?",
        paragraphs: [
          "Si les mesures alimentaires et l’activité ne suffisent pas, un laxatif peut parfois être proposé.",
          "Le choix dépend du terme, de la durée des symptômes et de vos autres traitements.",
          "Les laxatifs de lest ou osmotiques sont souvent privilégiés, mais ils doivent être validés par un professionnel.",
          "Évitez les laxatifs stimulants, les purges, les huiles minérales, les plantes laxatives et les lavements répétés sans avis médical."
        ]
      },
      {
        title: "Comment soulager les ballonnements ?",
        bullets: [
          "Manger plus lentement et bien mâcher.",
          "Fractionner les repas.",
          "Éviter les boissons gazeuses.",
          "Limiter les chewing-gums et les pailles, qui favorisent l’ingestion d’air.",
          "Repérer les aliments qui augmentent les gaz sans supprimer inutilement de grands groupes alimentaires.",
          "Marcher doucement après les repas.",
          "Porter des vêtements qui ne compriment pas l’abdomen."
        ],
        paragraphs: [
          "Les légumes secs, les choux, les oignons ou certains produits laitiers peuvent augmenter les gaz chez certaines femmes, mais la tolérance est individuelle.",
          "Il vaut mieux ajuster les quantités et les modes de cuisson que supprimer systématiquement ces aliments."
        ]
      },
      {
        title: "Les probiotiques sont-ils utiles ?",
        paragraphs: [
          "Les probiotiques sont parfois proposés pour certains troubles digestifs, mais leur efficacité dépend des souches et des situations.",
          "Tous les produits n’ont pas été étudiés de la même manière pendant la grossesse.",
          "Ne choisissez pas un complément uniquement sur la base d’une publicité.",
          "Demandez conseil à un professionnel avant une cure, surtout si vous avez une maladie chronique ou un traitement."
        ]
      },
      {
        title: "Pourquoi le reflux augmente-t-il pendant la grossesse ?",
        paragraphs: [
          "La progestérone relâche le sphincter situé entre l’œsophage et l’estomac.",
          "Le contenu acide de l’estomac peut alors remonter plus facilement.",
          "La pression exercée par l’utérus augmente également au fil des mois.",
          "Le reflux peut provoquer des brûlures derrière le sternum, des remontées acides, une toux nocturne ou un goût amer dans la bouche."
        ]
      },
      {
        title: "Quels gestes peuvent réduire le reflux ?",
        bullets: [
          "Fractionner les repas et éviter les portions très copieuses.",
          "Manger lentement.",
          "Éviter de s’allonger dans les deux à trois heures suivant un repas.",
          "Surélever légèrement la tête du lit ou le haut du corps.",
          "Dormir de préférence sur le côté gauche si cette position est confortable.",
          "Éviter les vêtements serrés au niveau du ventre.",
          "Limiter les aliments qui déclenchent clairement vos symptômes."
        ],
        paragraphs: [
          "Les déclencheurs varient selon les personnes.",
          "Les aliments très gras, épicés, acides, le chocolat, la menthe, le café et les boissons gazeuses peuvent aggraver les symptômes chez certaines femmes."
        ]
      },
      {
        title: "Faut-il supprimer tous les aliments acides ou épicés ?",
        paragraphs: [
          "Non. Il n’existe pas une liste universelle valable pour toutes les femmes.",
          "Observez les aliments qui provoquent réellement vos symptômes.",
          "Évitez surtout les grandes quantités ou les repas tardifs si vous remarquez une aggravation.",
          "Une suppression excessive peut appauvrir inutilement l’alimentation."
        ]
      },
      {
        title: "Peut-on prendre un antiacide ?",
        paragraphs: [
          "Certains antiacides ou alginates peuvent être utilisés pendant la grossesse après conseil d’un professionnel.",
          "Le choix dépend de vos symptômes, de vos traitements et de vos antécédents.",
          "Respectez les doses et espacez la prise de certains médicaments lorsque cela est nécessaire.",
          "N’utilisez pas régulièrement un produit sans réévaluation si les symptômes persistent."
        ]
      },
      {
        title: "Quand un traitement plus fort est-il proposé ?",
        paragraphs: [
          "Si les mesures simples et les antiacides ne suffisent pas, un médecin peut proposer un traitement réduisant l’acidité gastrique.",
          "Les inhibiteurs de la pompe à protons ou d’autres médicaments peuvent être utilisés dans certaines situations.",
          "Le traitement doit être adapté à la fréquence et à la sévérité des symptômes.",
          "Une douleur thoracique atypique ou persistante ne doit pas être attribuée automatiquement au reflux."
        ]
      },
      {
        title: "Les tisanes et huiles essentielles peuvent-elles aider ?",
        paragraphs: [
          "Certaines plantes utilisées pour la digestion ne sont pas recommandées pendant la grossesse ou manquent de données fiables.",
          "Les huiles essentielles sont très concentrées et plusieurs sont déconseillées.",
          "Évitez l’automédication à base de plantes, notamment les préparations laxatives ou les mélanges dont la composition est imprécise.",
          "Demandez conseil à un pharmacien, une sage-femme ou un médecin."
        ]
      },
      {
        title: "Comment organiser les repas pour limiter les trois troubles ?",
        bullets: [
          "Prendre des repas réguliers mais moins volumineux.",
          "Prévoir une collation simple si les longues périodes sans manger aggravent les symptômes.",
          "Répartir les fibres sur la journée.",
          "Boire entre les repas si de grandes quantités pendant le repas majorent le reflux.",
          "Éviter les repas très gras le soir.",
          "Prendre le temps de manger assise et au calme."
        ]
      },
      {
        title: "Quand faut-il consulter rapidement ?",
        bullets: [
          "Douleur abdominale intense ou localisée.",
          "Vomissements persistants.",
          "Impossibilité d’émettre des selles et des gaz.",
          "Ventre très distendu et douloureux.",
          "Sang rouge ou selles noires.",
          "Fièvre.",
          "Perte de poids ou difficulté à s’alimenter.",
          "Douleur thoracique, malaise ou essoufflement.",
          "Contractions, saignement ou perte de liquide."
        ],
        paragraphs: [
          "Ces signes ne correspondent pas à un simple trouble digestif et nécessitent une évaluation médicale.",
          "En cas de douleur thoracique importante, de malaise ou de difficulté respiratoire, appelez le 15 ou le 112."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "La constipation, les ballonnements et le reflux sont fréquents pendant la grossesse.",
          "L’hydratation, les fibres progressives, l’activité douce et des repas fractionnés sont les premières mesures utiles.",
          "Le reflux est souvent amélioré en évitant de s’allonger après les repas et en surélevant le haut du corps.",
          "Les laxatifs, antiacides, plantes et huiles essentielles doivent être vérifiés avant utilisation.",
          "Une douleur importante, des vomissements persistants, du sang dans les selles ou un arrêt des gaz nécessitent un avis médical."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Constipation : que faire et quand consulter ?",
        url: "https://www.ameli.fr/assure/sante/themes/constipation-adulte/que-faire-quand-consulter"
      },
      {
        label: "Assurance Maladie — Reflux gastro-œsophagien de l’adulte",
        url: "https://www.ameli.fr/assure/sante/themes/rgo-adulte"
      },
      {
        label: "CRAT — Médicaments utilisables pendant la grossesse",
        url: "https://www.lecrat.fr/"
      },
      {
        label: "1000 premiers jours — Les petits maux de la grossesse",
        url: "https://www.1000-premiers-jours.fr/"
      }
    ]
  },

{
    slug: "maux-de-dos-pendant-la-grossesse-que-faire",
    title: "Maux de dos pendant la grossesse : que faire ?",
    description:
      "Postures, mouvements, activité physique, chaleur et traitements compatibles : les gestes utiles pour soulager les douleurs de dos pendant la grossesse.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Symptômes et bien-être",
    subcategorySlug: "symptomes-bien-etre",
    readingTime: "10 min",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    tone: "rose",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Les douleurs de dos sont fréquentes pendant la grossesse en raison des changements de posture, du relâchement ligamentaire et du poids du ventre.",
          "Bouger régulièrement, renforcer doucement les muscles et éviter les positions prolongées sont souvent plus utiles que le repos complet.",
          "La chaleur modérée, les étirements doux et l’adaptation du sommeil peuvent apporter un soulagement.",
          "Avant de prendre un médicament, demandez conseil : les anti-inflammatoires ne doivent pas être utilisés sans avis et sont contre-indiqués à partir du début du sixième mois.",
          "Consultez rapidement en cas de douleur brutale, fièvre, faiblesse d’une jambe, perte de sensibilité, contractions, saignement ou perte de liquide."
        ],
        quote:
          "Une douleur fréquente n’est pas forcément une douleur à supporter : des adaptations simples et un accompagnement précoce peuvent nettement améliorer le quotidien."
      },
      {
        title: "Pourquoi le dos peut-il devenir douloureux pendant la grossesse ?",
        paragraphs: [
          "À mesure que le ventre s’arrondit, le centre de gravité se déplace et la posture se modifie.",
          "Les muscles du dos, du bassin et de l’abdomen travaillent différemment pour maintenir l’équilibre.",
          "Les hormones de la grossesse assouplissent les ligaments, ce qui peut rendre certaines articulations plus sensibles.",
          "La fatigue, une position prolongée, le manque d’activité ou, au contraire, un effort inhabituel peuvent accentuer la douleur."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Changez régulièrement de position plutôt que de rester longtemps assise, debout ou allongée.",
          "Privilégiez une activité douce et régulière au lieu du repos complet.",
          "Adaptez les gestes du quotidien pour éviter de vous pencher ou de porter en torsion."
        ],
        quote:
          "Le mouvement doit rester confortable : une gêne légère peut être acceptable, mais une douleur qui augmente impose d’adapter ou d’arrêter."
      },
      {
        title: "Comment reconnaître une douleur de dos liée à la grossesse ?",
        paragraphs: [
          "La douleur se situe souvent dans le bas du dos, au niveau des lombaires, du sacrum ou des fesses.",
          "Elle peut apparaître après une longue journée, une station debout prolongée, un trajet en voiture ou un effort.",
          "Certaines douleurs sont diffuses et musculaires, tandis que d’autres sont plus localisées autour du bassin.",
          "Une douleur qui descend dans la jambe, s’accompagne d’engourdissements ou de faiblesse nécessite une évaluation médicale."
        ]
      },
      {
        title: "Quelles postures adopter au quotidien ?",
        bullets: [
          "Répartir le poids sur les deux jambes.",
          "Éviter de cambrer volontairement le bas du dos.",
          "Garder les épaules relâchées.",
          "S’asseoir avec le dos soutenu et les pieds posés au sol.",
          "Éviter de croiser les jambes longtemps.",
          "Changer de position toutes les trente à soixante minutes.",
          "Utiliser un petit coussin lombaire si cela améliore le confort."
        ],
        paragraphs: [
          "Il n’existe pas une posture parfaite à conserver toute la journée.",
          "Le plus important est d’alterner les positions et d’éviter l’immobilité prolongée."
        ]
      },
      {
        title: "Comment se relever et se pencher sans aggraver la douleur ?",
        paragraphs: [
          "Pour ramasser un objet, rapprochez-vous, écartez légèrement les pieds et pliez les genoux plutôt que de courber le dos.",
          "Gardez l’objet près du corps et évitez de tourner le tronc en portant.",
          "Pour sortir du lit, tournez-vous sur le côté, laissez descendre les jambes puis poussez avec les bras.",
          "Pour vous relever d’une chaise, avancez-vous vers le bord, placez les pieds sous les genoux et poussez avec les jambes."
        ]
      },
      {
        title: "Peut-on continuer à bouger ?",
        paragraphs: [
          "Oui, sauf contre-indication donnée par le professionnel qui suit la grossesse.",
          "Le repos complet peut raidir les muscles et entretenir la douleur.",
          "La marche, la natation, le vélo d’appartement, le yoga prénatal et certains exercices de renforcement sont souvent bien tolérés.",
          "Commencez progressivement et privilégiez la régularité plutôt que les séances longues ou intenses."
        ]
      },
      {
        title: "Quels exercices peuvent aider ?",
        bullets: [
          "Les bascules douces du bassin.",
          "La mobilité du dos à quatre pattes.",
          "Les étirements légers des hanches et des fessiers.",
          "Le renforcement doux des fessiers.",
          "Les exercices de respiration et de gainage profond.",
          "La marche à un rythme confortable."
        ],
        paragraphs: [
          "Les exercices doivent être réalisés sans blocage respiratoire, sans douleur vive et sans pression importante vers le bas.",
          "Une sage-femme ou un kinésithérapeute formé à la périnatalité peut vous montrer les mouvements adaptés."
        ]
      },
      {
        title: "La natation peut-elle soulager le dos ?",
        paragraphs: [
          "L’eau diminue la sensation de poids et permet de bouger avec moins d’impact.",
          "La nage douce ou l’aquagym prénatale peut soulager les tensions lombaires et pelviennes.",
          "Évitez les mouvements qui accentuent la cambrure ou provoquent une douleur.",
          "Après une perte des eaux ou en cas de complication, demandez l’avis de la maternité avant d’aller à la piscine."
        ]
      },
      {
        title: "La chaleur est-elle autorisée ?",
        paragraphs: [
          "Une bouillotte tiède, une douche chaude ou une compresse chauffante peuvent détendre les muscles.",
          "La chaleur doit rester modérée et être appliquée pendant une durée limitée.",
          "Évitez de placer une source très chaude directement sur la peau ou de vous exposer à une chaleur excessive.",
          "Les bains très chauds, saunas et hammams peuvent favoriser le malaise et la surchauffe."
        ]
      },
      {
        title: "Le massage peut-il aider ?",
        paragraphs: [
          "Un massage doux du bas du dos, des fessiers ou des épaules peut réduire les tensions.",
          "La pression doit rester confortable et ne pas provoquer de douleur.",
          "Évitez les huiles essentielles sans validation professionnelle.",
          "Pour un massage thérapeutique, choisissez un professionnel informé de la grossesse et formé à la périnatalité."
        ]
      },
      {
        title: "Comment dormir avec moins de douleurs ?",
        bullets: [
          "Dormir sur le côté dans la position la plus confortable.",
          "Placer un coussin entre les genoux.",
          "Ajouter un petit coussin sous le ventre si besoin.",
          "Soutenir le dos avec un coussin placé derrière soi.",
          "Choisir un matelas ni trop mou ni excessivement ferme.",
          "Tourner tout le corps ensemble pour changer de position."
        ],
        paragraphs: [
          "Il n’est pas nécessaire d’acheter un coussin spécifique si des oreillers ordinaires apportent un soutien suffisant.",
          "Si vous vous réveillez sur le dos, changez simplement de position sans vous inquiéter."
        ]
      },
      {
        title: "Quel type de chaussures privilégier ?",
        paragraphs: [
          "Choisissez des chaussures stables, confortables et adaptées à votre activité.",
          "Un petit talon large peut parfois être plus confortable qu’une chaussure totalement plate, mais cela dépend de vos habitudes.",
          "Évitez les talons hauts, les semelles instables et les chaussures qui modifient fortement votre équilibre.",
          "Remplacez les chaussures très usées si elles n’amortissent plus correctement."
        ]
      },
      {
        title: "Une ceinture de grossesse est-elle utile ?",
        paragraphs: [
          "Une ceinture ou un bandeau de soutien peut soulager temporairement certaines femmes.",
          "Elle ne doit pas être trop serrée ni remplacer le renforcement musculaire et le mouvement.",
          "Son intérêt dépend du type de douleur, du terme et de votre morphologie.",
          "Demandez conseil à une sage-femme, un médecin ou un kinésithérapeute avant un usage prolongé."
        ]
      },
      {
        title: "Comment adapter le travail et les trajets ?",
        bullets: [
          "Faire des pauses régulières.",
          "Alterner les positions assise et debout.",
          "Ajuster la hauteur du siège et du bureau.",
          "Soutenir le bas du dos.",
          "Éviter de porter seule des charges lourdes.",
          "Limiter les torsions répétées.",
          "Faire quelques pas lors des longs trajets."
        ],
        paragraphs: [
          "Si le poste de travail aggrave fortement les douleurs, parlez-en au médecin ou à la sage-femme.",
          "Un aménagement temporaire peut parfois être proposé."
        ]
      },
      {
        title: "Peut-on prendre un médicament contre la douleur ?",
        paragraphs: [
          "Le paracétamol est généralement le traitement de première intention lorsqu’un médicament est nécessaire pendant la grossesse.",
          "Il doit être pris à la dose efficace la plus faible, pendant la durée la plus courte possible et après validation d’un professionnel.",
          "Les anti-inflammatoires non stéroïdiens, comme l’ibuprofène ou le kétoprofène, ne doivent pas être utilisés sans avis et sont contre-indiqués à partir du début du sixième mois.",
          "Une douleur persistante mérite une évaluation plutôt qu’une automédication prolongée."
        ]
      },
      {
        title: "Quand consulter un kinésithérapeute ou un ostéopathe ?",
        paragraphs: [
          "Un kinésithérapeute peut proposer des exercices, travailler la mobilité et vous aider à adapter les gestes du quotidien.",
          "La prise en charge doit être individualisée et tenir compte du terme de la grossesse.",
          "Si vous consultez un ostéopathe, choisissez un professionnel habitué à accompagner les femmes enceintes et informez le professionnel qui suit la grossesse.",
          "Aucune manipulation ne doit être douloureuse ou réalisée en force."
        ]
      },
      {
        title: "Qu’est-ce qu’une douleur de la ceinture pelvienne ?",
        paragraphs: [
          "Certaines douleurs proviennent davantage des articulations du bassin que de la colonne vertébrale.",
          "Elles peuvent se situer au niveau du pubis, des fesses, des hanches ou de l’arrière du bassin.",
          "Elles sont parfois aggravées par la marche, les escaliers, l’écartement des jambes ou le fait de se retourner dans le lit.",
          "Une prise en charge précoce avec des exercices adaptés et des conseils de mouvement peut améliorer le confort."
        ]
      },
      {
        title: "Comment distinguer douleur musculaire et sciatique ?",
        paragraphs: [
          "Une douleur musculaire reste souvent localisée au dos ou aux fesses.",
          "Une irritation du nerf sciatique peut provoquer une douleur qui descend derrière la cuisse ou la jambe.",
          "Des fourmillements, une perte de sensibilité ou une faiblesse musculaire doivent être signalés.",
          "Une douleur intense avec difficulté à marcher ou troubles urinaires nécessite une évaluation rapide."
        ]
      },
      {
        title: "Quand faut-il consulter rapidement ?",
        bullets: [
          "Douleur brutale, très intense ou qui s’aggrave rapidement.",
          "Fièvre ou frissons.",
          "Douleur dans le dos accompagnée de brûlures urinaires.",
          "Faiblesse d’une jambe ou difficulté à marcher.",
          "Perte de sensibilité dans la jambe ou autour du périnée.",
          "Difficulté à uriner ou perte de contrôle des urines ou des selles.",
          "Contractions régulières, saignement ou perte de liquide.",
          "Douleur sous les côtes associée à des maux de tête ou des troubles visuels."
        ],
        paragraphs: [
          "Ces signes peuvent correspondre à une infection, une atteinte neurologique ou une complication obstétricale.",
          "En cas de déficit neurologique brutal, de malaise important ou de douleur incontrôlable, appelez le 15 ou le 112."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Les douleurs de dos sont fréquentes pendant la grossesse mais peuvent souvent être soulagées.",
          "Le mouvement régulier, les postures variées et les exercices adaptés sont généralement préférables au repos complet.",
          "La chaleur modérée, le soutien au sommeil et l’adaptation des gestes du quotidien peuvent aider.",
          "Les médicaments doivent être vérifiés avant toute prise.",
          "Une douleur brutale, neurologique, fébrile ou associée à des signes obstétricaux nécessite un avis rapide."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Mal de dos : que faire et quand consulter ?",
        url: "https://www.ameli.fr/assure/sante/themes/lombalgie-aigue/que-faire-quand-consulter"
      },
      {
        label: "Haute Autorité de santé — Prescription d’activité physique pendant la grossesse et en post-partum",
        url: "https://www.has-sante.fr/jcms/c_2859527/fr/prescription-d-activite-physique-et-sportive-pendant-la-grossesse-et-en-post-partum"
      },
      {
        label: "1000 premiers jours — Les petits maux de la grossesse",
        url: "https://www.1000-premiers-jours.fr/"
      },
      {
        label: "CRAT — Médicaments utilisables pendant la grossesse",
        url: "https://www.lecrat.fr/"
      }
    ]
  },

{
    slug: "troubles-du-sommeil-comment-mieux-dormir-enceinte",
    title: "Troubles du sommeil : comment mieux dormir enceinte ?",
    description:
      "Réveils nocturnes, insomnies, position de sommeil, reflux, jambes sans repos et fatigue : les repères pour mieux dormir pendant la grossesse.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Symptômes et bien-être",
    subcategorySlug: "symptomes-bien-etre",
    readingTime: "10 min",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    tone: "rose",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Les troubles du sommeil sont fréquents pendant la grossesse et peuvent évoluer selon les trimestres.",
          "Une routine régulière, une chambre calme, des écrans limités le soir et une activité douce dans la journée peuvent aider.",
          "Dormez dans la position la plus confortable, généralement sur le côté à partir du deuxième trimestre, sans vous inquiéter si vous vous réveillez sur le dos.",
          "Le reflux, les douleurs, les envies d’uriner et le syndrome des jambes sans repos doivent être pris en charge s’ils perturbent les nuits.",
          "Demandez un avis si l’insomnie dure, si vous ronflez fortement avec des pauses respiratoires, si l’anxiété devient envahissante ou si la fatigue vous empêche de fonctionner."
        ],
        quote:
          "Mieux dormir ne signifie pas forcément dormir d’une traite : l’objectif est aussi d’améliorer le confort, la récupération et la régularité."
      },
      {
        title: "Pourquoi le sommeil change-t-il pendant la grossesse ?",
        paragraphs: [
          "Les hormones, les modifications du corps et les préoccupations liées à la grossesse peuvent perturber le sommeil.",
          "Au premier trimestre, la fatigue est souvent importante, mais les nausées, les envies d’uriner et l’anxiété peuvent fragmenter les nuits.",
          "Au deuxième trimestre, le sommeil peut s’améliorer, puis devenir plus difficile avec l’augmentation du ventre, le reflux, les douleurs et les mouvements du bébé.",
          "À l’approche du terme, les réveils fréquents sont courants et ne signifient pas forcément qu’il existe un trouble médical."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Gardez des heures de lever et de coucher aussi régulières que possible.",
          "Réservez le lit au sommeil et aux moments calmes plutôt qu’au travail ou aux écrans.",
          "Traitez la cause concrète des réveils : douleur, reflux, jambes sans repos, anxiété ou envies d’uriner."
        ],
        quote:
          "Une bonne nuit commence souvent dès la journée, avec de la lumière naturelle, du mouvement et des horaires réguliers."
      },
      {
        title: "Quelle position adopter pour dormir ?",
        paragraphs: [
          "La position la plus confortable est généralement la meilleure.",
          "À partir du deuxième trimestre, beaucoup de femmes préfèrent dormir sur le côté.",
          "Le côté gauche peut parfois améliorer le confort, notamment en cas de reflux ou de sensation de compression, mais il n’est pas obligatoire toute la nuit.",
          "Si vous vous réveillez sur le dos, tournez-vous simplement sur le côté sans vous inquiéter."
        ]
      },
      {
        title: "Les coussins de grossesse sont-ils indispensables ?",
        paragraphs: [
          "Non. Des oreillers ordinaires peuvent suffire.",
          "Un coussin entre les genoux peut soulager le bassin et le bas du dos.",
          "Un petit coussin sous le ventre ou derrière le dos peut améliorer le maintien.",
          "L’important est d’obtenir une position stable et confortable, sans multiplier inutilement le matériel."
        ]
      },
      {
        title: "Comment créer une routine favorable au sommeil ?",
        bullets: [
          "Se lever à une heure relativement stable.",
          "S’exposer à la lumière naturelle le matin.",
          "Limiter les siestes tardives ou très longues.",
          "Prévoir une transition calme avant le coucher.",
          "Réduire les écrans et les contenus stimulants le soir.",
          "Garder une chambre fraîche, sombre et silencieuse.",
          "Éviter de regarder l’heure à répétition pendant la nuit."
        ],
        paragraphs: [
          "La régularité est souvent plus efficace qu’une routine parfaite suivie seulement quelques jours.",
          "Choisissez des habitudes réalistes et compatibles avec votre quotidien."
        ]
      },
      {
        title: "Les siestes sont-elles une bonne idée ?",
        paragraphs: [
          "Oui, surtout lorsque la fatigue est importante.",
          "Une sieste courte en début d’après-midi peut améliorer la récupération sans trop retarder l’endormissement du soir.",
          "Si vous souffrez d’insomnie, évitez les siestes longues ou tardives.",
          "Écoutez votre niveau de fatigue plutôt que de vous imposer de rester éveillée à tout prix."
        ]
      },
      {
        title: "L’activité physique peut-elle améliorer le sommeil ?",
        paragraphs: [
          "Une activité régulière et adaptée peut faciliter l’endormissement, réduire le stress et améliorer le confort physique.",
          "La marche, la natation, le yoga prénatal ou le vélo d’appartement sont souvent de bonnes options.",
          "Évitez les séances très intenses ou stimulantes juste avant le coucher si elles retardent votre endormissement.",
          "En cas de grossesse à risque, demandez conseil avant de modifier votre activité."
        ]
      },
      {
        title: "Comment limiter les réveils pour uriner ?",
        paragraphs: [
          "Buvez régulièrement pendant la journée afin de ne pas concentrer toute votre hydratation le soir.",
          "Réduisez légèrement les boissons dans l’heure ou les deux heures précédant le coucher, sans vous déshydrater.",
          "Allez aux toilettes juste avant de dormir.",
          "Des brûlures urinaires, des douleurs ou une envie très fréquente inhabituelle doivent être signalées."
        ]
      },
      {
        title: "Comment dormir malgré le reflux ?",
        bullets: [
          "Éviter les repas très copieux le soir.",
          "Ne pas s’allonger dans les deux à trois heures suivant le dîner.",
          "Surélever légèrement le haut du corps.",
          "Dormir sur le côté si cette position est confortable.",
          "Limiter les aliments qui déclenchent clairement les symptômes.",
          "Demander conseil si les brûlures persistent."
        ],
        paragraphs: [
          "Certains antiacides ou alginates peuvent être utilisés pendant la grossesse après avis d’un professionnel.",
          "Une douleur thoracique inhabituelle ne doit pas être attribuée automatiquement au reflux."
        ]
      },
      {
        title: "Que faire contre les douleurs nocturnes ?",
        paragraphs: [
          "Adaptez les coussins pour soutenir le ventre, le bassin et le dos.",
          "Une douche tiède, une chaleur modérée ou quelques mouvements doux peuvent détendre les muscles.",
          "Évitez les positions qui augmentent la douleur ou provoquent des engourdissements.",
          "Une douleur persistante, intense ou neurologique doit être évaluée."
        ]
      },
      {
        title: "Que faire en cas de crampes nocturnes ?",
        paragraphs: [
          "Étirez doucement le mollet en ramenant les orteils vers vous.",
          "Marchez quelques minutes puis massez légèrement la zone.",
          "Hydratez-vous régulièrement et conservez une activité adaptée.",
          "Une douleur d’un seul mollet associée à un gonflement, une chaleur ou une rougeur nécessite un avis urgent."
        ]
      },
      {
        title: "Qu’est-ce que le syndrome des jambes sans repos ?",
        paragraphs: [
          "Il provoque un besoin irrépressible de bouger les jambes, souvent accompagné de sensations désagréables au repos et le soir.",
          "Le mouvement apporte généralement un soulagement temporaire.",
          "Ce trouble peut être favorisé par une carence en fer.",
          "Parlez-en au professionnel qui suit la grossesse : une prise de sang et une adaptation de la supplémentation peuvent être proposées."
        ]
      },
      {
        title: "Comment calmer les jambes sans repos ?",
        bullets: [
          "Marcher quelques minutes.",
          "Étirer doucement les jambes.",
          "Prendre une douche tiède.",
          "Masser les mollets.",
          "Limiter la caféine.",
          "Garder des horaires de sommeil réguliers.",
          "Faire vérifier le fer si les symptômes persistent."
        ]
      },
      {
        title: "Les mouvements du bébé peuvent-ils empêcher de dormir ?",
        paragraphs: [
          "Oui, certains bébés sont plus actifs le soir ou lorsque la mère s’allonge.",
          "Changez légèrement de position et prenez quelques respirations lentes.",
          "Ces mouvements sont généralement rassurants.",
          "En revanche, une diminution nette des mouvements habituels doit conduire à contacter la maternité."
        ]
      },
      {
        title: "Comment gérer les pensées qui tournent en boucle ?",
        paragraphs: [
          "Notez les préoccupations ou les tâches à faire avant de vous coucher afin de ne pas essayer de tout retenir.",
          "Prévoyez un court moment dans la journée pour traiter les questions pratiques liées à la grossesse.",
          "La respiration lente, la relaxation ou une méditation guidée peuvent aider.",
          "Si l’anxiété devient envahissante, parlez-en à une sage-femme, un médecin ou un psychologue."
        ]
      },
      {
        title: "Que faire si l’on ne parvient pas à s’endormir ?",
        paragraphs: [
          "Si vous restez éveillée longtemps, levez-vous quelques minutes et choisissez une activité calme avec une lumière douce.",
          "Retournez au lit lorsque la somnolence revient.",
          "Évitez de travailler, de consulter les réseaux sociaux ou de regarder l’heure en continu.",
          "Cette stratégie aide à ne pas associer durablement le lit à l’éveil et à la frustration."
        ]
      },
      {
        title: "La caféine peut-elle perturber le sommeil ?",
        paragraphs: [
          "Oui. La caféine peut retarder l’endormissement et augmenter les réveils nocturnes.",
          "Elle se trouve dans le café, le thé, les boissons au cola, le chocolat, les boissons énergisantes et certains médicaments.",
          "Limitez les apports quotidiens et évitez la caféine en fin de journée si vous êtes sensible.",
          "Les boissons énergisantes sont déconseillées pendant la grossesse."
        ]
      },
      {
        title: "Peut-on prendre de la mélatonine ou un somnifère ?",
        paragraphs: [
          "Ne prenez pas de mélatonine, de somnifère, d’antihistaminique sédatif ou de plante pour dormir sans avis médical.",
          "Les données et les indications varient selon les produits.",
          "Un traitement peut parfois être proposé lorsque l’insomnie est importante, mais il doit être choisi au cas par cas.",
          "Les mesures non médicamenteuses restent généralement la première étape."
        ]
      },
      {
        title: "Les tisanes et huiles essentielles sont-elles sûres ?",
        paragraphs: [
          "Non, pas automatiquement.",
          "Certaines plantes ont des effets actifs ou manquent de données fiables pendant la grossesse.",
          "Les huiles essentielles sont très concentrées et plusieurs sont déconseillées.",
          "Demandez conseil à un pharmacien, une sage-femme ou un médecin avant toute utilisation régulière."
        ]
      },
      {
        title: "Le ronflement est-il normal pendant la grossesse ?",
        paragraphs: [
          "Le ronflement peut apparaître ou augmenter en raison de la congestion nasale et de la prise de poids.",
          "Un ronflement léger isolé est fréquent.",
          "En revanche, des pauses respiratoires, des réveils en suffoquant, des maux de tête au réveil ou une somnolence importante peuvent évoquer une apnée du sommeil.",
          "Ces signes doivent être signalés, car un bilan et une prise en charge peuvent être nécessaires."
        ]
      },
      {
        title: "Quand l’insomnie doit-elle être prise en charge ?",
        paragraphs: [
          "Demandez conseil si les difficultés durent plusieurs semaines, si elles surviennent plusieurs nuits par semaine ou si elles ont un impact important dans la journée.",
          "Une fatigue sévère, une irritabilité marquée, des difficultés de concentration ou une anxiété persistante justifient un accompagnement.",
          "L’insomnie peut parfois être liée à une dépression, un trouble anxieux, une douleur ou un problème médical.",
          "Une prise en charge précoce évite que le cercle fatigue-anxiété-insomnie s’installe."
        ]
      },
      {
        title: "Quand consulter rapidement ?",
        bullets: [
          "Vous ronflez fortement avec des pauses respiratoires ou des réveils en suffoquant.",
          "Vous ressentez une somnolence incontrôlable dans la journée.",
          "Vous avez une douleur thoracique, un essoufflement important ou un malaise.",
          "Une jambe devient douloureuse, gonflée, chaude ou rouge.",
          "Vous avez des maux de tête intenses, des troubles visuels ou un gonflement brutal.",
          "Vous présentez des contractions régulières, un saignement ou une perte de liquide.",
          "Vous ressentez nettement moins les mouvements du bébé."
        ],
        paragraphs: [
          "Ces signes ne correspondent pas à un simple trouble du sommeil et nécessitent un avis médical.",
          "En cas de détresse respiratoire, de douleur thoracique ou de malaise grave, appelez le 15 ou le 112."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Les troubles du sommeil sont fréquents et peuvent varier au cours de la grossesse.",
          "Des horaires réguliers, une activité adaptée et une routine calme peuvent améliorer le sommeil.",
          "Dormez dans la position la plus confortable, généralement sur le côté à partir du deuxième trimestre.",
          "Le reflux, les douleurs, les jambes sans repos et l’anxiété doivent être pris en charge s’ils perturbent les nuits.",
          "Les produits pour dormir, même naturels, ne doivent pas être utilisés sans avis médical."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Insomnie : que faire et quand consulter ?",
        url: "https://www.ameli.fr/assure/sante/themes/insomnie-adulte/que-faire-quand-consulter"
      },
      {
        label: "1000 premiers jours — Sommeil et grossesse",
        url: "https://www.1000-premiers-jours.fr/"
      },
      {
        label: "Haute Autorité de santé — Suivi et information des femmes enceintes",
        url: "https://www.has-sante.fr/jcms/c_547976/fr/comment-mieux-informer-les-femmes-enceintes"
      },
      {
        label: "CRAT — Médicaments et grossesse",
        url: "https://www.lecrat.fr/"
      }
    ]
  },

{
    slug: "stress-anxiete-et-emotions-quand-demander-de-laide",
    title: "Stress, anxiété et émotions : quand demander de l’aide ?",
    description:
      "Inquiétudes, anxiété, pleurs, crises d’angoisse et idées noires : comprendre les émotions pendant la grossesse et savoir quand demander de l’aide.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Symptômes et bien-être",
    subcategorySlug: "symptomes-bien-etre",
    readingTime: "10 min",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    tone: "rose",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Les émotions peuvent être plus intenses et changeantes pendant la grossesse sans que cela signifie forcément qu’un trouble psychique est présent.",
          "Il est utile de demander de l’aide lorsque l’anxiété, la tristesse ou les pensées inquiétantes durent, s’intensifient ou perturbent le sommeil, l’alimentation, le travail ou le quotidien.",
          "Une sage-femme, un médecin, un psychologue ou une équipe de psychiatrie périnatale peut proposer un accompagnement adapté.",
          "Les troubles anxieux et dépressifs peuvent être pris en charge pendant la grossesse, y compris lorsqu’un traitement médicamenteux est nécessaire.",
          "En cas d’idées suicidaires, de peur de se faire du mal, de faire du mal au bébé ou de perte de contact avec la réalité, il faut demander une aide médicale urgente et ne pas rester seule."
        ],
        quote:
          "Demander de l’aide n’est ni un échec ni le signe que vous serez une mauvaise mère : c’est une façon de prendre soin de vous et de votre bébé."
      },
      {
        title: "Pourquoi les émotions peuvent-elles être plus intenses ?",
        paragraphs: [
          "La grossesse entraîne des changements hormonaux, physiques, familiaux et sociaux importants.",
          "La fatigue, les symptômes, les examens médicaux, les inquiétudes concernant le bébé ou l’accouchement et les changements dans le couple peuvent fragiliser l’équilibre émotionnel.",
          "Des émotions contradictoires peuvent coexister : joie, peur, ambivalence, impatience, culpabilité ou sentiment d’irréalité.",
          "Ces réactions sont fréquentes, mais elles méritent une attention particulière lorsqu’elles deviennent envahissantes ou durables."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Observez depuis combien de temps le mal-être dure et s’il s’aggrave.",
          "Évaluez son impact sur le sommeil, l’alimentation, les relations et les activités habituelles.",
          "Parlez-en tôt à un professionnel, même si vous ne savez pas encore comment nommer ce que vous ressentez."
        ],
        quote:
          "Il n’est pas nécessaire d’attendre d’aller très mal pour demander un soutien."
      },
      {
        title: "Quelles émotions sont fréquentes pendant la grossesse ?",
        bullets: [
          "Une sensibilité plus forte.",
          "Des changements d’humeur.",
          "Des inquiétudes concernant la santé du bébé.",
          "La peur de l’accouchement.",
          "Une ambivalence face à la grossesse.",
          "Des doutes sur ses capacités à devenir parent.",
          "Une irritabilité ou une impatience inhabituelle.",
          "Des pleurs plus faciles."
        ],
        paragraphs: [
          "Ces émotions peuvent être temporaires et varier selon les étapes de la grossesse.",
          "Elles ne deviennent préoccupantes que lorsqu’elles sont très intenses, persistantes ou qu’elles empêchent de fonctionner normalement."
        ]
      },
      {
        title: "Comment distinguer inquiétude normale et anxiété envahissante ?",
        paragraphs: [
          "Une inquiétude ponctuelle diminue généralement après avoir obtenu une information, du repos ou du soutien.",
          "L’anxiété devient plus problématique lorsque les pensées tournent en boucle, semblent incontrôlables ou provoquent une tension constante.",
          "Elle peut entraîner des palpitations, une oppression, des troubles digestifs, des difficultés de concentration ou un évitement des rendez-vous et des activités.",
          "Le niveau de souffrance et l’impact sur la vie quotidienne comptent davantage que le nombre exact de symptômes."
        ]
      },
      {
        title: "Quels signes doivent inciter à en parler ?",
        bullets: [
          "Une anxiété présente presque tous les jours.",
          "Une tristesse ou un vide qui dure.",
          "Une perte d’intérêt pour les activités habituelles.",
          "Des crises d’angoisse répétées.",
          "Des troubles importants du sommeil ou de l’appétit.",
          "Une culpabilité excessive ou un sentiment d’incapacité.",
          "Des pensées intrusives très pénibles.",
          "Un isolement croissant.",
          "Une difficulté à se rendre aux rendez-vous ou à prendre soin de soi."
        ],
        paragraphs: [
          "Un seul de ces signes peut suffire à justifier une discussion avec un professionnel s’il vous fait souffrir.",
          "Plus la prise en charge commence tôt, plus il est souvent facile de retrouver un équilibre."
        ]
      },
      {
        title: "Qu’est-ce qu’une crise d’angoisse ?",
        paragraphs: [
          "Une crise d’angoisse correspond à une montée brutale de peur ou de malaise intense.",
          "Elle peut s’accompagner de palpitations, tremblements, vertiges, sensation d’étouffement, douleur thoracique ou peur de perdre le contrôle.",
          "La crise atteint souvent un maximum en quelques minutes puis diminue progressivement.",
          "Une première crise, une douleur thoracique ou une difficulté respiratoire importante doit être évaluée afin d’écarter une cause médicale."
        ]
      },
      {
        title: "Que faire pendant une montée d’angoisse ?",
        bullets: [
          "S’asseoir dans un endroit calme et sûr.",
          "Relâcher les épaules et desserrer les vêtements.",
          "Ralentir progressivement la respiration sans chercher à inspirer très profondément.",
          "Nommer cinq choses visibles, quatre sensations corporelles et trois sons.",
          "Contacter une personne de confiance.",
          "Éviter de conduire tant que le malaise persiste."
        ],
        paragraphs: [
          "Ces gestes peuvent aider à traverser la crise, mais ils ne remplacent pas une consultation si les épisodes se répètent.",
          "Un accompagnement psychologique permet d’apprendre des stratégies adaptées et de réduire la peur d’une nouvelle crise."
        ]
      },
      {
        title: "Les pensées intrusives sont-elles fréquentes ?",
        paragraphs: [
          "Certaines personnes ont des pensées ou des images involontaires et angoissantes concernant un accident, une maladie ou un danger pour le bébé.",
          "Avoir une pensée intrusive ne signifie pas vouloir qu’elle se réalise ni être dangereuse.",
          "Ces pensées deviennent préoccupantes lorsqu’elles sont répétitives, très pénibles ou conduisent à des vérifications et des évitements importants.",
          "Parlez-en sans honte à un professionnel, qui pourra rechercher un trouble anxieux ou obsessionnel et proposer une prise en charge."
        ]
      },
      {
        title: "Comment reconnaître une dépression pendant la grossesse ?",
        paragraphs: [
          "Une dépression peut apparaître pendant la grossesse, même lorsque celle-ci était souhaitée.",
          "Les principaux signes sont une tristesse persistante, une perte d’intérêt, une fatigue inhabituelle, un ralentissement, une forte culpabilité ou un sentiment de désespoir.",
          "Certains symptômes physiques peuvent être confondus avec ceux de la grossesse, comme la fatigue ou les troubles du sommeil.",
          "Le diagnostic repose donc sur l’ensemble des symptômes, leur durée et leur impact."
        ]
      },
      {
        title: "Qui peut-on contacter en premier ?",
        bullets: [
          "La sage-femme qui suit la grossesse.",
          "Le médecin traitant.",
          "Le gynécologue-obstétricien.",
          "La maternité.",
          "Un psychologue.",
          "Un psychiatre.",
          "La Protection maternelle et infantile.",
          "Une équipe spécialisée en psychiatrie périnatale."
        ],
        paragraphs: [
          "Vous pouvez commencer par le professionnel avec lequel vous vous sentez le plus en confiance.",
          "Il pourra vous écouter, évaluer l’urgence et vous orienter si nécessaire."
        ]
      },
      {
        title: "À quoi sert l’entretien prénatal précoce ?",
        paragraphs: [
          "L’entretien prénatal précoce est un temps d’échange consacré à vos besoins, votre vécu et votre environnement.",
          "Il permet d’aborder les inquiétudes, les difficultés familiales, le travail, l’isolement, les violences ou les antécédents psychologiques.",
          "Il peut être réalisé par une sage-femme ou un médecin, seule ou avec l’autre parent.",
          "Il ne remplace pas une consultation spécialisée mais facilite le repérage et l’organisation d’un accompagnement."
        ]
      },
      {
        title: "Comment se déroule une première consultation psychologique ?",
        paragraphs: [
          "Le professionnel vous demande ce que vous ressentez, depuis quand, et comment cela affecte votre quotidien.",
          "Il peut vous interroger sur le sommeil, l’alimentation, les antécédents, les traitements, le soutien disponible et la présence éventuelle d’idées noires.",
          "Vous n’êtes pas obligée de tout raconter immédiatement.",
          "À la fin, un suivi, une thérapie, une orientation ou une réévaluation médicale peuvent être proposés."
        ]
      },
      {
        title: "Quelles thérapies peuvent aider ?",
        paragraphs: [
          "Les psychothérapies peuvent aider à comprendre les pensées anxieuses, retrouver des repères et développer des stratégies concrètes.",
          "Les thérapies cognitives et comportementales sont notamment utilisées pour l’anxiété, les crises d’angoisse, les phobies et la dépression.",
          "D’autres approches peuvent être proposées selon vos besoins, votre histoire et les professionnels disponibles.",
          "Le soutien du couple ou de la famille peut aussi être utile lorsque les difficultés concernent l’organisation ou les relations."
        ]
      },
      {
        title: "Peut-on prendre un traitement pendant la grossesse ?",
        paragraphs: [
          "Oui, certains traitements peuvent être utilisés lorsqu’ils sont nécessaires.",
          "Le choix dépend du trouble, de sa gravité, des traitements déjà efficaces, du terme et des risques liés à l’absence de soins.",
          "Un médicament ne doit jamais être commencé, arrêté ou modifié sans avis médical.",
          "Le médecin recherche le traitement le mieux connu, à la dose efficace, avec une surveillance adaptée."
        ]
      },
      {
        title: "Faut-il arrêter un antidépresseur après un test positif ?",
        paragraphs: [
          "Non, pas sans avis médical.",
          "Un arrêt brutal peut provoquer un syndrome de sevrage ou une rechute.",
          "Contactez rapidement le prescripteur afin de réévaluer le traitement.",
          "Selon la situation, il peut être poursuivi, adapté ou remplacé, mais la décision doit être individualisée."
        ]
      },
      {
        title: "Quelles habitudes peuvent soutenir le bien-être émotionnel ?",
        bullets: [
          "Conserver un rythme quotidien simple et régulier.",
          "Sortir à la lumière du jour.",
          "Pratiquer une activité physique adaptée.",
          "Manger et boire régulièrement.",
          "Limiter les informations anxiogènes et les recherches répétées.",
          "Garder un contact régulier avec une personne de confiance.",
          "Prévoir de courtes activités agréables sans objectif de performance.",
          "Réduire l’alcool à zéro et éviter les substances psychoactives."
        ],
        paragraphs: [
          "Ces habitudes peuvent soutenir la récupération, mais elles ne remplacent pas des soins lorsqu’un trouble anxieux ou dépressif est présent."
        ]
      },
      {
        title: "Comment limiter les recherches anxieuses sur internet ?",
        paragraphs: [
          "Choisissez quelques sources fiables et évitez de multiplier les forums ou les témoignages inquiétants.",
          "Notez vos questions pour les poser lors du rendez-vous plutôt que de chercher une réponse pendant des heures.",
          "Fixez un temps limité pour vous informer, puis passez à une activité différente.",
          "Si les recherches deviennent incontrôlables, parlez-en à un professionnel car elles peuvent entretenir l’anxiété."
        ]
      },
      {
        title: "Comment l’entourage peut-il aider ?",
        bullets: [
          "Écouter sans minimiser ni chercher immédiatement une solution.",
          "Proposer une aide concrète pour les rendez-vous, les repas ou les tâches.",
          "Respecter le besoin de repos ou de solitude.",
          "Encourager à consulter sans culpabiliser.",
          "Rester présent lors d’une période de crise.",
          "Aider à contacter un professionnel si la personne n’y parvient plus seule."
        ],
        paragraphs: [
          "Des phrases comme « tu devrais être heureuse » ou « pense positif » peuvent renforcer la culpabilité.",
          "Mieux vaut reconnaître la souffrance et rappeler que des solutions existent."
        ]
      },
      {
        title: "Les difficultés du couple peuvent-elles aggraver l’anxiété ?",
        paragraphs: [
          "Oui. Les changements de rôles, les inquiétudes financières, la sexualité, la fatigue et les différences de vécu peuvent créer des tensions.",
          "Parler à un professionnel peut aider à distinguer une difficulté relationnelle ponctuelle d’une situation plus préoccupante.",
          "Une consultation de couple peut être proposée lorsque les deux partenaires le souhaitent.",
          "En cas de peur, de contrôle, de menaces ou de violence, demandez une aide confidentielle rapidement."
        ]
      },
      {
        title: "Les antécédents psychologiques augmentent-ils le risque ?",
        paragraphs: [
          "Un antécédent de dépression, d’anxiété, de trouble bipolaire, de psychose, de trouble alimentaire ou de traumatisme peut augmenter la vulnérabilité.",
          "Cela ne signifie pas qu’une rechute est inévitable.",
          "Prévenir tôt le professionnel permet d’organiser une surveillance et un soutien adaptés.",
          "Les traitements et le projet de suivi après l’accouchement peuvent être anticipés pendant la grossesse."
        ]
      },
      {
        title: "Pourquoi préparer aussi le post-partum ?",
        paragraphs: [
          "La période qui suit la naissance comporte de nouveaux changements : récupération physique, manque de sommeil, alimentation du bébé et réorganisation familiale.",
          "Un trouble psychique peut commencer pendant la grossesse ou apparaître après l’accouchement.",
          "Préparer les contacts utiles, le relais de l’entourage et les rendez-vous de suivi réduit le risque de rester seule en cas de difficulté.",
          "Un entretien postnatal précoce est prévu pour repérer les besoins et proposer un accompagnement."
        ]
      },
      {
        title: "Quels signes nécessitent une aide urgente ?",
        bullets: [
          "Des idées suicidaires ou l’envie de se faire du mal.",
          "La peur de faire du mal au bébé ou à une autre personne.",
          "Une impression de ne plus contrôler ses gestes.",
          "Des voix, visions ou convictions inhabituelles.",
          "Une agitation extrême ou plusieurs nuits presque sans sommeil avec une énergie anormalement élevée.",
          "Une confusion, une désorientation ou une perte de contact avec la réalité.",
          "L’impossibilité de manger, boire ou rester seule en sécurité."
        ],
        paragraphs: [
          "Dans ces situations, ne restez pas seule et contactez immédiatement les urgences, la maternité ou un proche capable de rester avec vous.",
          "Éloignez les médicaments et autres moyens potentiellement dangereux jusqu’à l’arrivée de l’aide."
        ]
      },
      {
        title: "Quand demander de l’aide même sans urgence ?",
        bullets: [
          "Le mal-être dure depuis plus de deux semaines.",
          "Les symptômes s’aggravent.",
          "Vous ne parvenez plus à vous reposer malgré la fatigue.",
          "Vous évitez les soins ou les sorties par peur.",
          "Vous vous sentez coupée de votre entourage.",
          "Vous ne ressentez plus de plaisir.",
          "Vous avez besoin d’alcool, de médicaments ou d’autres substances pour tenir.",
          "Vous avez simplement le sentiment que quelque chose ne va pas."
        ],
        paragraphs: [
          "Votre ressenti suffit pour demander une consultation.",
          "Il n’est pas nécessaire de remplir tous les critères d’un trouble pour mériter du soutien."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Les émotions intenses peuvent être fréquentes pendant la grossesse, mais elles ne doivent pas être minimisées lorsqu’elles font souffrir.",
          "Demandez de l’aide si l’anxiété, la tristesse ou les pensées inquiétantes durent ou perturbent le quotidien.",
          "Une sage-femme, un médecin, un psychologue ou une équipe spécialisée peut vous accompagner.",
          "Les psychothérapies et certains médicaments peuvent être utilisés pendant la grossesse lorsque cela est nécessaire.",
          "Des idées suicidaires, des hallucinations, une confusion ou la peur de faire du mal nécessitent une aide médicale urgente."
        ]
      }
    ],
    sources: [
      {
        label: "Haute Autorité de santé — Entretien prénatal précoce et accompagnement de la grossesse",
        url: "https://www.has-sante.fr/jcms/c_547976/fr/comment-mieux-informer-les-femmes-enceintes"
      },
      {
        label: "1000 premiers jours — Bien-être psychique pendant la grossesse",
        url: "https://www.1000-premiers-jours.fr/"
      },
      {
        label: "Assurance Maladie — Dépression : symptômes et prise en charge",
        url: "https://www.ameli.fr/assure/sante/themes/depression-troubles-depressifs"
      },
      {
        label: "Santé publique France — Santé mentale périnatale",
        url: "https://www.santepubliquefrance.fr/maladies-et-traumatismes/sante-mentale"
      }
    ]
  },

{
    slug: "fievre-douleur-ou-malaise-quand-consulter-rapidement",
    title: "Fièvre, douleur ou malaise : quand consulter rapidement ?",
    description:
      "Fièvre, douleurs abdominales, malaise, maux de tête ou essoufflement : les signes qui nécessitent un avis médical rapide pendant la grossesse.",
    category: "Pendant la grossesse",
    categorySlug: "pendant-grossesse",
    subcategory: "Symptômes et bien-être",
    subcategorySlug: "symptomes-bien-etre",
    readingTime: "10 min",
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    tone: "rose",
    sections: [
      {
        title: "L’essentiel en 30 secondes",
        bullets: [
          "Pendant la grossesse, une fièvre à partir de 38 °C, une douleur importante ou un malaise inhabituel doivent être signalés rapidement à un professionnel.",
          "Appelez la maternité sans attendre en cas de saignement, perte de liquide, contractions régulières, diminution des mouvements du bébé ou douleur abdominale intense.",
          "Des maux de tête importants associés à des troubles visuels, une douleur sous les côtes ou un gonflement brutal peuvent évoquer une prééclampsie.",
          "Une douleur thoracique, une difficulté à respirer, une perte de connaissance, des convulsions ou un déficit neurologique imposent d’appeler le 15 ou le 112.",
          "Ne prenez pas d’anti-inflammatoire et ne retardez pas la consultation pour essayer plusieurs médicaments à la maison."
        ],
        quote:
          "Vous n’avez pas besoin d’être certaine qu’il s’agit d’une urgence pour appeler : la maternité peut évaluer les symptômes et vous indiquer la conduite à tenir."
      },
      {
        title: "Pourquoi certains symptômes nécessitent-ils un avis rapide ?",
        paragraphs: [
          "La plupart des douleurs et malaises survenant pendant la grossesse sont sans gravité, mais certains peuvent révéler une infection, une complication obstétricale ou un problème médical nécessitant un traitement.",
          "La grossesse modifie le fonctionnement du cœur, de la circulation, des reins et du système digestif, ce qui peut rendre l’interprétation des symptômes plus difficile.",
          "Le terme de la grossesse, l’intensité, la durée et les signes associés permettent d’évaluer le niveau d’urgence.",
          "Il est préférable de demander conseil trop tôt plutôt que d’attendre l’aggravation d’un symptôme inhabituel."
        ]
      },
      {
        title: "Les 3 repères les plus utiles",
        paragraphs: [
          "Mesurez votre température et notez l’heure de début des symptômes.",
          "Repérez les signes associés : saignement, perte de liquide, contractions, vomissements, gêne respiratoire ou diminution des mouvements du bébé.",
          "Contactez directement la maternité lorsque le symptôme concerne la grossesse ou lorsque vous ne savez pas à qui vous adresser."
        ],
        quote:
          "Avant d’appeler, notez le nombre de semaines de grossesse, vos traitements en cours, vos principaux antécédents médicaux et les symptômes que vous ressentez."
      },
      {
        title: "À partir de quelle température parle-t-on de fièvre ?",
        paragraphs: [
          "On parle généralement de fièvre lorsque la température atteint ou dépasse 38 °C.",
          "Prenez la température avec un thermomètre fiable plutôt que de vous fier uniquement à une sensation de chaleur ou de frissons.",
          "Une fièvre pendant la grossesse doit conduire à rechercher sa cause, notamment une infection respiratoire, urinaire, digestive ou gynécologique.",
          "Contactez le professionnel qui suit la grossesse ou la maternité, surtout si la fièvre persiste, s’accompagne de douleur ou altère votre état général."
        ]
      },
      {
        title: "Que faire en attendant l’avis médical en cas de fièvre ?",
        bullets: [
          "Se reposer.",
          "Boire régulièrement de petites quantités d’eau.",
          "Porter des vêtements légers.",
          "Noter la température et son évolution.",
          "Repérer les autres symptômes.",
          "Demander conseil avant de prendre un médicament."
        ],
        paragraphs: [
          "Le paracétamol est généralement le médicament de première intention lorsqu’un traitement est nécessaire, mais il doit être utilisé à la dose adaptée et après vérification par un professionnel.",
          "Les anti-inflammatoires non stéroïdiens, comme l’ibuprofène ou le kétoprofène, ne doivent pas être pris sans avis médical et sont contre-indiqués à partir du début du sixième mois."
        ]
      },
      {
        title: "Quels signes associés à la fièvre sont particulièrement préoccupants ?",
        bullets: [
          "Des frissons intenses ou un état général très altéré.",
          "Une difficulté à respirer.",
          "Une douleur abdominale ou pelvienne.",
          "Des brûlures urinaires ou une douleur dans le dos.",
          "Des vomissements empêchant de boire.",
          "Une éruption cutanée.",
          "Des contractions, un saignement ou une perte de liquide.",
          "Une diminution des mouvements du bébé."
        ],
        paragraphs: [
          "Une fièvre avec confusion, difficulté respiratoire importante, douleur thoracique ou malaise grave nécessite un appel au 15 ou au 112."
        ]
      },
      {
        title: "Quand une douleur abdominale doit-elle inquiéter ?",
        paragraphs: [
          "De petites tensions ligamentaires ou des douleurs digestives peuvent être fréquentes.",
          "Une douleur doit être évaluée rapidement lorsqu’elle est intense, brutale, persistante, localisée d’un seul côté ou associée à un saignement.",
          "Au début de la grossesse, une douleur pelvienne avec saignement, malaise ou douleur à l’épaule peut évoquer une grossesse extra-utérine.",
          "Plus tard, une douleur continue, des contractions régulières, un ventre très dur ou une diminution des mouvements du bébé nécessitent de contacter la maternité."
        ]
      },
      {
        title: "Quels signes peuvent évoquer une prééclampsie ?",
        bullets: [
          "Des maux de tête importants ou inhabituels.",
          "Des troubles visuels : points lumineux, vision floue ou baisse de la vision.",
          "Une douleur sous les côtes, surtout à droite.",
          "Des nausées ou vomissements inhabituels en deuxième partie de grossesse.",
          "Un gonflement brutal du visage ou des mains.",
          "Une prise de poids très rapide liée à une rétention d’eau.",
          "Une tension artérielle élevée."
        ],
        paragraphs: [
          "Ces signes nécessitent un avis rapide, même s’ils ne sont pas tous présents.",
          "Une prééclampsie peut apparaître après 20 semaines d’aménorrhée et nécessite une surveillance médicale."
        ]
      },
      {
        title: "Quand un mal de tête doit-il faire consulter ?",
        paragraphs: [
          "Un mal de tête léger et ponctuel peut être lié à la fatigue, au stress, au manque de sommeil ou à la déshydratation.",
          "Consultez rapidement s’il est brutal, très intense, persistant, différent de vos maux de tête habituels ou accompagné de troubles visuels.",
          "Une raideur de la nuque, une fièvre, une confusion, une faiblesse d’un côté du corps ou des troubles de la parole constituent également des signes d’alerte.",
          "Ne multipliez pas les antalgiques sans évaluation lorsque le mal de tête persiste."
        ]
      },
      {
        title: "Quand un malaise est-il préoccupant ?",
        paragraphs: [
          "Une sensation de faiblesse peut être liée à la chaleur, au fait de rester debout, à une baisse de tension ou à un manque d’alimentation.",
          "Asseyez-vous ou allongez-vous sur le côté, desserrez les vêtements et demandez à quelqu’un de rester près de vous.",
          "Un malaise avec perte de connaissance, douleur thoracique, essoufflement, palpitations persistantes, saignement ou douleur abdominale nécessite une évaluation urgente.",
          "Des malaises répétés doivent être signalés afin de rechercher notamment une anémie, un trouble du rythme ou une autre cause."
        ]
      },
      {
        title: "Que faire en cas d’essoufflement ?",
        paragraphs: [
          "Un essoufflement léger à l’effort peut apparaître progressivement pendant la grossesse.",
          "Il devient préoccupant s’il survient au repos, apparaît brutalement, s’aggrave rapidement ou empêche de parler normalement.",
          "Une douleur thoracique, des lèvres bleutées, des palpitations, une toux avec du sang ou un malaise associé imposent d’appeler les urgences.",
          "Une gêne respiratoire avec fièvre peut également nécessiter une prise en charge rapide."
        ]
      },
      {
        title: "Une douleur dans un mollet est-elle urgente ?",
        paragraphs: [
          "Une crampe brève qui disparaît après un étirement est fréquente.",
          "En revanche, une douleur persistante d’un seul mollet avec gonflement, chaleur, rougeur ou différence de volume peut évoquer une phlébite.",
          "Ne massez pas la jambe et demandez un avis médical rapidement.",
          "Si cette douleur s’accompagne d’un essoufflement brutal ou d’une douleur thoracique, appelez immédiatement le 15 ou le 112."
        ]
      },
      {
        title: "Quand des vomissements nécessitent-ils une consultation ?",
        paragraphs: [
          "Les nausées et vomissements sont fréquents au premier trimestre.",
          "Consultez si vous ne parvenez plus à boire, si vous urinez très peu, si vous perdez du poids ou si vous êtes très faible.",
          "Des vomissements accompagnés de fièvre, de douleur abdominale, de sang ou de maux de tête importants nécessitent aussi une évaluation.",
          "En fin de grossesse, des vomissements inhabituels associés à une douleur sous les côtes ou des troubles visuels doivent être signalés rapidement."
        ]
      },
      {
        title: "Quand une douleur urinaire ou lombaire doit-elle alerter ?",
        paragraphs: [
          "Des brûlures urinaires, des envies fréquentes, une urine trouble ou malodorante peuvent évoquer une infection urinaire.",
          "Pendant la grossesse, une infection urinaire doit être traitée afin d’éviter sa progression.",
          "Une fièvre, des frissons, une douleur dans le dos ou sur le côté et des nausées peuvent évoquer une infection du rein.",
          "Dans ce cas, contactez rapidement la maternité ou un médecin."
        ]
      },
      {
        title: "Quels signes obstétricaux imposent d’appeler la maternité ?",
        bullets: [
          "Un saignement vaginal.",
          "Une perte de liquide ou une suspicion de perte des eaux.",
          "Des contractions régulières ou douloureuses avant le terme.",
          "Une douleur abdominale intense ou continue.",
          "Une diminution nette des mouvements du bébé.",
          "Une forte pression pelvienne ou une envie de pousser.",
          "Un liquide amniotique vert, brun, malodorant ou sanglant."
        ],
        paragraphs: [
          "Ces signes doivent être évalués même si vous ne ressentez pas de fièvre.",
          "Avant 37 semaines, des contractions régulières, une pression pelvienne ou une perte de liquide peuvent évoquer une menace d’accouchement prématuré."
        ]
      },
      {
        title: "Comment évaluer les mouvements du bébé ?",
        paragraphs: [
          "Il n’existe pas un nombre identique de mouvements valable pour toutes les grossesses.",
          "L’important est de connaître le rythme habituel de votre bébé.",
          "Si vous le sentez nettement moins, installez-vous au calme et concentrez-vous quelques instants sur ses mouvements.",
          "Si la diminution persiste ou vous inquiète, contactez la maternité sans attendre le lendemain."
        ]
      },
      {
        title: "Quand appeler le 15 ou le 112 ?",
        bullets: [
          "Difficulté respiratoire importante ou brutale.",
          "Douleur thoracique.",
          "Perte de connaissance.",
          "Convulsions.",
          "Saignement abondant avec malaise.",
          "Faiblesse d’un côté du corps ou troubles de la parole.",
          "Douleur abdominale insupportable.",
          "Impression que l’accouchement est imminent sans possibilité de rejoindre la maternité en sécurité.",
          "Réaction allergique avec gonflement du visage ou gêne respiratoire."
        ],
        paragraphs: [
          "Ne conduisez pas vous-même dans ces situations.",
          "Allongez-vous en sécurité et demandez à une personne de rester avec vous jusqu’à l’arrivée de l’aide."
        ]
      },
      {
        title: "Que préparer avant d’appeler ?",
        bullets: [
          "Le nombre de semaines d’aménorrhée.",
          "L’heure de début des symptômes.",
          "La température mesurée.",
          "La localisation et l’intensité de la douleur.",
          "La présence de saignement, perte de liquide ou contractions.",
          "Les mouvements du bébé.",
          "Les médicaments déjà pris.",
          "Les antécédents et complications connues de la grossesse."
        ],
        paragraphs: [
          "Ces informations permettent à l’équipe d’évaluer plus rapidement la situation.",
          "N’attendez toutefois pas de tout noter si l’état est grave ou s’aggrave rapidement."
        ]
      },
      {
        title: "Quels médicaments éviter en automédication ?",
        paragraphs: [
          "N’utilisez pas d’anti-inflammatoire non stéroïdien comme l’ibuprofène, le kétoprofène ou le naproxène sans avis médical.",
          "Évitez également les associations contre le rhume, les huiles essentielles et les médicaments déjà prescrits lors d’un épisode ancien.",
          "Vérifiez toujours la substance active, car plusieurs marques peuvent contenir le même médicament.",
          "Un traitement pris pour masquer les symptômes ne doit pas retarder une consultation."
        ]
      },
      {
        title: "Quand peut-on surveiller à domicile ?",
        paragraphs: [
          "Une gêne légère, connue et rapidement améliorée par le repos peut parfois être surveillée.",
          "Vous devez pouvoir boire, manger, respirer normalement et poursuivre vos activités essentielles.",
          "Les symptômes ne doivent pas s’aggraver ni s’accompagner d’un signe obstétrical.",
          "En cas de doute, appelez tout de même la maternité : elle vous indiquera si une surveillance à domicile est adaptée."
        ]
      },
      {
        title: "À retenir",
        paragraphs: [
          "Une fièvre à partir de 38 °C, une douleur importante ou un malaise inhabituel doivent être signalés pendant la grossesse.",
          "Saignement, perte de liquide, contractions régulières ou diminution des mouvements du bébé imposent de contacter la maternité.",
          "Maux de tête intenses, troubles visuels, douleur sous les côtes ou gonflement brutal peuvent évoquer une prééclampsie.",
          "Douleur thoracique, détresse respiratoire, perte de connaissance ou convulsions nécessitent d’appeler le 15 ou le 112.",
          "Ne retardez pas l’évaluation en essayant plusieurs médicaments en automédication."
        ]
      }
    ],
    sources: [
      {
        label: "Assurance Maladie — Grossesse : suivi médical et signes nécessitant un avis",
        url: "https://www.ameli.fr/assure/sante/themes/grossesse/grossesse-en-bonne-sante/suivi-medical-grossesse"
      },
      {
        label: "Haute Autorité de santé — Suivi et orientation des femmes enceintes",
        url: "https://www.has-sante.fr/jcms/c_547976/fr/comment-mieux-informer-les-femmes-enceintes"
      },
      {
        label: "Service Public — Numéros d’urgence",
        url: "https://www.service-public.fr/particuliers/actualites/A15841"
      },
      {
        label: "1000 premiers jours — Les petits maux et signes d’alerte pendant la grossesse",
        url: "https://www.1000-premiers-jours.fr/"
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
