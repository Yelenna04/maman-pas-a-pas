import Image from "next/image";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  CalendarDays,
  Check,
  ChevronDown,
  ClipboardList,
  Droplets,
  Heart,
  Leaf,
  Lightbulb,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  TestTubeDiagonal,
  Thermometer,
  Users,
} from "lucide-react";

import { articles, getArticle } from "@/lib/articles";
import { getArticleImage } from "@/lib/articleImages";

type Props = { params: Promise<{ slug: string }> };
type Article = NonNullable<ReturnType<typeof getArticle>>;

function renderRichText(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    return part;
  });
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/articles/${article.slug}` },
  };
}

const articleDisplayConfig: Record<
  string,
  {
    essentialIcons: (typeof Heart)[];
    cardIcons: (typeof Heart)[];
    cardTitles: string[];
    adviceTitle?: string;
  }
> = {
  "nausees-vomissements-comment-les-soulager": {
    essentialIcons: [Heart, CalendarDays, Droplets, AlertTriangle],
    cardIcons: [ClipboardList, Droplets, ShieldCheck],
    cardTitles: [
      "Fractionner les repas",
      "Boire par petites gorgées",
      "Limiter les déclencheurs",
    ],
  },
  "fatigue-premier-trimestre-pourquoi-si-importante": {
    essentialIcons: [Heart, Sparkles, CalendarDays, AlertTriangle],
    cardIcons: [Heart, ClipboardList, Sparkles],
    cardTitles: [
      "Écouter son corps",
      "Alléger son quotidien",
      "Garder un rythme doux",
    ],
  },
  "douleurs-saignements-debut-grossesse-quand-consulter": {
    essentialIcons: [Heart, MessageCircle, AlertTriangle, TestTubeDiagonal],
    cardIcons: [Droplets, Thermometer, AlertTriangle],
    cardTitles: [
      "Observer le saignement",
      "Évaluer la douleur",
      "Repérer les signes associés",
    ],
  },
  "evolution-bebe-semaine-par-semaine-premier-trimestre": {
    essentialIcons: [CalendarDays, Sparkles, Heart, ClipboardList],
    cardIcons: [Sparkles, Heart, CalendarDays],
    cardTitles: ["Le tout début", "La période embryonnaire", "Le stade fœtal"],
  },
  "test-positif-premieres-demarches": {
    essentialIcons: [Heart, CalendarDays, ClipboardList, AlertTriangle],
    cardIcons: [CalendarDays, ClipboardList, ShieldCheck],
    cardTitles: [
      "Prendre rendez-vous",
      "Préparer les informations",
      "Adopter les précautions",
    ],
  },
  "plantes-huiles-essentielles-complements-sans-risque": {
    essentialIcons: [Leaf, ShieldCheck, ClipboardList, AlertTriangle],
    cardIcons: [Leaf, ClipboardList, ShieldCheck],
    cardTitles: [
      "Vérifier la composition",
      "Éviter les mélanges",
      "Demander conseil",
    ],
  },
  "automedication-avant-pendant-grossesse-reflexes": {
    essentialIcons: [ShieldCheck, ClipboardList, AlertTriangle, Heart],
    cardIcons: [Users, ClipboardList, ShieldCheck],
    cardTitles: [
      "Signaler le projet",
      "Vérifier la substance",
      "Demander conseil",
    ],
  },
  "vitamine-b9-avant-grossesse-quand-comment-prendre": {
    essentialIcons: [Leaf, CalendarDays, ClipboardList, ShieldCheck],
    cardIcons: [CalendarDays, ClipboardList, ShieldCheck],
    cardTitles: ["Commencer tôt", "Prendre chaque jour", "Demander conseil"],
  },
  "medicaments-projet-bebe-lesquels-signaler": {
    essentialIcons: [ClipboardList, ShieldCheck, Heart, Users],
    cardIcons: [ClipboardList, ShieldCheck, Leaf],
    cardTitles: [
      "Traitements prescrits",
      "Sans ordonnance",
      "Produits naturels",
    ],
  },
  "quels-vaccins-verifier-avant-grossesse": {
    essentialIcons: [ShieldCheck, ClipboardList, CalendarDays, Heart],
    cardIcons: [ShieldCheck, Heart, ClipboardList],
    cardTitles: ["Vaccin ROR", "Varicelle", "Rappels habituels"],
  },
  "comment-vivre-emotionnellement-parcours-pma": {
    essentialIcons: [Heart, Sparkles, Users, ShieldCheck],
    cardIcons: [Heart, Users, Sparkles],
    cardTitles: [
      "Nommer ses émotions",
      "Choisir ce que l’on partage",
      "Préserver des espaces sans PMA",
    ],
  },
  "comment-se-deroule-fiv-etape-par-etape": {
    essentialIcons: [CalendarDays, TestTubeDiagonal, Sparkles, ShieldCheck],
    cardIcons: [CalendarDays, TestTubeDiagonal, Heart],
    cardTitles: [
      "Stimulation",
      "Ponction et fécondation",
      "Culture et transfert",
    ],
  },
  "fiv-classique-icsi-quelles-differences": {
    essentialIcons: [TestTubeDiagonal, Users, ShieldCheck, ClipboardList],
    cardIcons: [TestTubeDiagonal, Users, ClipboardList],
    cardTitles: [
      "Rencontre des gamètes",
      "Indications",
      "Geste au laboratoire",
    ],
  },
  "insemination-intra-uterine-iiu-comment-ca-se-passe": {
    essentialIcons: [TestTubeDiagonal, Users, CalendarDays, ShieldCheck],
    cardIcons: [CalendarDays, TestTubeDiagonal, Heart],
    cardTitles: [
      "Préparer le cycle",
      "Préparer le sperme",
      "Réaliser l’insémination",
    ],
  },
  "pma-demarches-delais-prise-en-charge": {
    essentialIcons: [CalendarDays, ClipboardList, Users, ShieldCheck],
    cardIcons: [TestTubeDiagonal, Users, ClipboardList],
    cardTitles: ["Bilan médical", "Entretiens", "Démarches administratives"],
  },
  "pma-amp-definition-a-qui-adresse": {
    essentialIcons: [Heart, TestTubeDiagonal, Users, ClipboardList],
    cardIcons: [Users, TestTubeDiagonal, Heart],
    cardTitles: ["Insémination", "FIV", "Accueil d’embryon"],
  },
  "produits-quotidien-environnement-que-limiter-avant-grossesse": {
    essentialIcons: [Leaf, ShieldCheck, Sparkles, ClipboardList],
    cardIcons: [CalendarDays, Leaf, ShieldCheck],
    cardTitles: ["Aérer", "Simplifier", "Éviter les sprays"],
  },
  "alcool-projet-bebe-faut-il-arreter-avant-grossesse": {
    essentialIcons: [ShieldCheck, Heart, ClipboardList, Users],
    cardIcons: [ShieldCheck, ClipboardList, Users],
    cardTitles: ["Zéro verre", "Tous les alcools", "Soutien du partenaire"],
  },
  "tabac-projet-grossesse-pourquoi-comment-arreter": {
    essentialIcons: [ShieldCheck, Heart, ClipboardList, Users],
    cardIcons: [CalendarDays, Sparkles, ShieldCheck],
    cardTitles: [
      "Préparer l’arrêt",
      "Repérer les déclencheurs",
      "Se faire aider",
    ],
  },
  "sommeil-stress-projet-bebe-prendre-soin-de-soi": {
    essentialIcons: [Heart, Sparkles, CalendarDays, ShieldCheck],
    cardIcons: [CalendarDays, Sparkles, Heart],
    cardTitles: ["Rythme régulier", "Transition calme", "Moins de pression"],
  },
  "activite-physique-avant-grossesse": {
    essentialIcons: [Heart, CalendarDays, Sparkles, ShieldCheck],
    cardIcons: [CalendarDays, Heart, Sparkles],
    cardTitles: ["Fréquence", "Intensité", "Variété"],
  },
  "preparer-alimentation-avant-grossesse": {
    essentialIcons: [Leaf, Heart, ShieldCheck, ClipboardList],
    cardIcons: [Leaf, Heart, ShieldCheck],
    cardTitles: ["Varier les aliments", "Vitamine B9", "Hydratation"],
  },
  "sante-partenaire-points-verifier-avant-grossesse": {
    essentialIcons: [Users, ShieldCheck, Heart, ClipboardList],
    cardIcons: [ShieldCheck, ClipboardList, Heart],
    cardTitles: ["Antécédents", "Traitements", "Habitudes et expositions"],
  },
  "antecedents-medicaux-que-signaler-avant-grossesse": {
    essentialIcons: [ShieldCheck, ClipboardList, Users, Heart],
    cardIcons: [ShieldCheck, Heart, Users],
    cardTitles: [
      "Santé et opérations",
      "Grossesses précédentes",
      "Antécédents familiaux",
    ],
  },
  "quand-faire-bilan-fertilite": {
    essentialIcons: [CalendarDays, CalendarDays, ShieldCheck, Users],
    cardIcons: [CalendarDays, ClipboardList, Users],
    cardTitles: ["Cycles ou ovulation", "Antécédents", "Santé du partenaire"],
  },
  "quel-professionnel-consulter-avant-projet-bebe": {
    essentialIcons: [Users, Heart, ShieldCheck, ClipboardList],
    cardIcons: [Users, Heart, ShieldCheck],
    cardTitles: ["Médecin généraliste", "Sage-femme", "Gynécologue"],
  },
  "quels-examens-faire-avant-grossesse": {
    essentialIcons: [
      ClipboardList,
      ShieldCheck,
      TestTubeDiagonal,
      CalendarDays,
    ],
    cardIcons: [TestTubeDiagonal, ShieldCheck, ClipboardList],
    cardTitles: [
      "Groupe sanguin",
      "Immunités et infections",
      "Suivi gynécologique",
    ],
  },
  "consultation-preconceptionnelle-pourquoi-quand-faire": {
    essentialIcons: [CalendarDays, Users, ShieldCheck, Heart],
    cardIcons: [Heart, ShieldCheck, ClipboardList],
    cardTitles: [
      "Santé et antécédents",
      "Médicaments et vaccins",
      "Préparation à la grossesse",
    ],
  },
  "apres-arret-contraception-quand-cycle-revient": {
    essentialIcons: [CalendarDays, ShieldCheck, CalendarDays, Thermometer],
    cardIcons: [CalendarDays, ShieldCheck, Thermometer],
    cardTitles: ["Pilule, patch, anneau", "Implant ou stérilet", "Injection"],
  },
  "combien-temps-moyenne-tomber-enceinte": {
    essentialIcons: [CalendarDays, Heart, Users, ShieldCheck],
    cardIcons: [CalendarDays, Heart, ShieldCheck],
    cardTitles: ["Âge", "Rapports réguliers", "Santé du couple"],
  },
  "tests-ovulation-utiliser-interpreter": {
    essentialIcons: [
      TestTubeDiagonal,
      CalendarDays,
      ClipboardList,
      ShieldCheck,
    ],
    cardIcons: [CalendarDays, TestTubeDiagonal, ClipboardList],
    cardTitles: ["Quand commencer", "Comment tester", "Quand lire"],
  },
  "cycles-irreguliers-mieux-comprendre": {
    essentialIcons: [CalendarDays, CalendarDays, Sparkles, ClipboardList],
    cardIcons: [CalendarDays, ClipboardList, Sparkles],
    cardTitles: [
      "Noter les dates",
      "Observer les symptômes",
      "Repérer les changements",
    ],
  },
  "comment-reperer-ovulation-periode-fertile": {
    essentialIcons: [CalendarDays, Droplets, TestTubeDiagonal, Thermometer],
    cardIcons: [Droplets, TestTubeDiagonal, Thermometer],
    cardTitles: ["Glaire cervicale", "Test d’ovulation", "Température basale"],
  },
  "periode-fertile-jours-plus-favorables": {
    essentialIcons: [CalendarDays, Heart, Thermometer, CalendarDays],
    cardIcons: [Heart, Droplets, TestTubeDiagonal],
    cardTitles: [
      "Rapports réguliers",
      "Observer la glaire",
      "Test d’ovulation",
    ],
  },
  "que-faire-avant-essayer-avoir-bebe": {
    essentialIcons: [CalendarDays, Leaf, ShieldCheck, Heart],
    cardIcons: [ClipboardList, CalendarDays, ShieldCheck],
    cardTitles: ["Première étape", "À préparer", "À vérifier"],
  },
  "se-preparer-emotionnellement-projet-bebe": {
    essentialIcons: [Heart, Sparkles, Lightbulb, ShieldCheck],
    cardIcons: [Heart, CalendarDays, MessageCircle],
    cardTitles: [
      "Clarifier ses attentes",
      "Choisir ses priorités",
      "Identifier ses soutiens",
    ],
  },
  "parler-projet-bebe-avec-partenaire": {
    essentialIcons: [MessageCircle, Heart, CalendarDays, Users],
    cardIcons: [Heart, MessageCircle, ClipboardList],
    cardTitles: ["Envies et calendrier", "Inquiétudes", "Premières étapes"],
  },
};

function getItems(section: Article["sections"][number] | undefined): string[] {
  if (!section) return [];
  if (section.paragraphs?.length) return section.paragraphs;
  if (section.bullets?.length) return section.bullets;
  return [];
}

function FruitIllustration({ kind }: { kind: string }) {
  const common = { width: 58, height: 58, viewBox: "0 0 58 58", role: "img" };

  if (kind === "dust") {
    return (
      <svg {...common} aria-label="Grain de poussière">
        <circle cx="29" cy="29" r="3.2" fill="#6d4336" />
        <circle cx="24" cy="25" r="1.1" fill="#9b6959" />
        <circle cx="34" cy="33" r="1.4" fill="#8a594a" />
      </svg>
    );
  }

  if (kind === "poppy") {
    return (
      <svg {...common} aria-label="Graine de pavot">
        <defs>
          <radialGradient id="poppy" cx="35%" cy="30%">
            <stop offset="0" stopColor="#77717a" />
            <stop offset=".65" stopColor="#39323f" />
            <stop offset="1" stopColor="#211d27" />
          </radialGradient>
        </defs>
        <ellipse cx="29" cy="30" rx="11" ry="13" fill="url(#poppy)" />
        <path
          d="M22 24c5-4 11-3 15 1"
          fill="none"
          stroke="#9a929d"
          strokeWidth="1.2"
          opacity=".7"
        />
      </svg>
    );
  }

  if (kind === "sesame") {
    return (
      <svg {...common} aria-label="Graine de sésame">
        <defs>
          <linearGradient id="sesame" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f7e4b8" />
            <stop offset="1" stopColor="#c99d54" />
          </linearGradient>
        </defs>
        <path
          d="M16 32c4-13 20-18 27-8 4 7-5 16-17 16-7 0-12-3-10-8Z"
          fill="url(#sesame)"
        />
        <path
          d="M20 31c7 2 13 1 18-3"
          fill="none"
          stroke="#b98743"
          strokeWidth="1.3"
          opacity=".65"
        />
      </svg>
    );
  }

  if (kind === "lentil") {
    return (
      <svg {...common} aria-label="Lentille">
        <defs>
          <radialGradient id="lentil" cx="35%" cy="28%">
            <stop offset="0" stopColor="#b9a46f" />
            <stop offset=".7" stopColor="#8c774b" />
            <stop offset="1" stopColor="#66532f" />
          </radialGradient>
        </defs>
        <ellipse cx="29" cy="31" rx="15" ry="10" fill="url(#lentil)" />
        <ellipse cx="27" cy="28" rx="8" ry="3" fill="#d4c18c" opacity=".35" />
      </svg>
    );
  }

  if (kind === "pea") {
    return (
      <svg {...common} aria-label="Petit pois">
        <defs>
          <radialGradient id="pea" cx="35%" cy="30%">
            <stop offset="0" stopColor="#b8d95d" />
            <stop offset=".72" stopColor="#78a72f" />
            <stop offset="1" stopColor="#4f7c20" />
          </radialGradient>
        </defs>
        <circle cx="29" cy="29" r="14" fill="url(#pea)" />
        <ellipse cx="24" cy="23" rx="6" ry="3" fill="#e0efaa" opacity=".45" />
      </svg>
    );
  }

  if (kind === "blueberry") {
    return (
      <svg {...common} aria-label="Myrtille">
        <defs>
          <radialGradient id="blueberry" cx="35%" cy="30%">
            <stop offset="0" stopColor="#8094c7" />
            <stop offset=".72" stopColor="#455b94" />
            <stop offset="1" stopColor="#2d3d70" />
          </radialGradient>
        </defs>
        <circle cx="29" cy="30" r="15" fill="url(#blueberry)" />
        <path
          d="m29 15 3 5 6-1-4 5 3 5-8-3-8 3 3-5-4-5 6 1Z"
          fill="#2f3e6d"
          opacity=".75"
        />
      </svg>
    );
  }

  if (kind === "raspberry") {
    const berries = [
      [23, 22],
      [29, 20],
      [35, 23],
      [20, 29],
      [27, 28],
      [34, 29],
      [39, 31],
      [23, 36],
      [30, 36],
      [36, 37],
    ];
    return (
      <svg {...common} aria-label="Framboise">
        <g fill="#c94464" stroke="#a92d4c" strokeWidth=".7">
          {berries.map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="6" />
          ))}
        </g>
        <path
          d="M25 15c4 3 6 3 9 0"
          fill="none"
          stroke="#639148"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (kind === "strawberry") {
    return (
      <svg {...common} aria-label="Fraise">
        <path
          d="M29 47c-10-8-16-17-13-25 2-6 8-8 13-4 5-4 11-2 13 4 3 8-3 17-13 25Z"
          fill="#d95155"
        />
        <path d="m20 18 6 2 3-6 3 6 7-2-4 6H24Z" fill="#5d9743" />
        {[23, 29, 35].flatMap((x) =>
          [27, 34, 40].map((y, i) => (
            <ellipse
              key={`${x}-${y}`}
              cx={x + (i % 2)}
              cy={y}
              rx="1"
              ry="1.5"
              fill="#ffd88a"
            />
          )),
        )}
      </svg>
    );
  }

  if (kind === "fig") {
    return (
      <svg {...common} aria-label="Figue">
        <path
          d="M29 11c2 7 14 11 15 24 1 10-6 15-15 15s-16-5-15-15c1-13 13-17 15-24Z"
          fill="#6f4b73"
        />
        <path
          d="M29 11c-2 2-4 3-6 3"
          fill="none"
          stroke="#61864a"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <ellipse cx="24" cy="28" rx="6" ry="9" fill="#a879a4" opacity=".35" />
      </svg>
    );
  }

  if (kind === "plum") {
    return (
      <svg {...common} aria-label="Prune">
        <defs>
          <radialGradient id="plum" cx="35%" cy="28%">
            <stop offset="0" stopColor="#9a6aa4" />
            <stop offset=".7" stopColor="#694474" />
            <stop offset="1" stopColor="#4d3058" />
          </radialGradient>
        </defs>
        <ellipse cx="29" cy="31" rx="16" ry="18" fill="url(#plum)" />
        <path
          d="M29 13c1-4 4-6 7-7"
          fill="none"
          stroke="#587a3d"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg {...common} aria-label="Petit citron">
      <defs>
        <radialGradient id="lemon" cx="35%" cy="28%">
          <stop offset="0" stopColor="#fff28d" />
          <stop offset=".72" stopColor="#e9c933" />
          <stop offset="1" stopColor="#c3a518" />
        </radialGradient>
      </defs>
      <ellipse
        cx="29"
        cy="30"
        rx="17"
        ry="13"
        fill="url(#lemon)"
        transform="rotate(-8 29 30)"
      />
      <path
        d="M43 25c4 0 6-2 7-4"
        fill="none"
        stroke="#6d9348"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EmbryoIllustration({ week }: { week: string }) {
  const stage = Number.parseInt(week, 10);
  const head = Math.min(23, 10 + (stage - 3) * 1.35);
  const bodyLength = Math.min(45, 10 + (stage - 3) * 4.2);
  const limb = Math.max(0, stage - 6);

  if (stage <= 4) {
    return (
      <svg
        viewBox="0 0 120 120"
        role="img"
        aria-label={`Développement à ${week}`}
      >
        <defs>
          <radialGradient id={`cell-${stage}`} cx="35%" cy="30%">
            <stop offset="0" stopColor="#ffe6df" />
            <stop offset="1" stopColor="#cf7e6d" />
          </radialGradient>
        </defs>
        <circle cx="60" cy="60" r="49" fill="#f8d6cd" opacity=".65" />
        {stage === 3 ? (
          <>
            <circle cx="50" cy="58" r="18" fill={`url(#cell-${stage})`} />
            <circle cx="70" cy="61" r="17" fill="#dc9180" />
            <circle cx="48" cy="56" r="5" fill="#a95d54" />
            <circle cx="69" cy="60" r="5" fill="#a95d54" />
          </>
        ) : (
          <>
            <circle
              cx="60"
              cy="60"
              r="32"
              fill="none"
              stroke="#c97d6e"
              strokeWidth="8"
            />
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
              const a = (i / 10) * Math.PI * 2;
              return (
                <circle
                  key={i}
                  cx={60 + Math.cos(a) * 24}
                  cy={60 + Math.sin(a) * 24}
                  r="7"
                  fill="#e3a091"
                />
              );
            })}
            <circle cx="60" cy="60" r="13" fill="#f6c6ba" />
          </>
        )}
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 120 120"
      role="img"
      aria-label={`Développement à ${week}`}
    >
      <defs>
        <radialGradient id={`embryo-bg-${stage}`} cx="35%" cy="30%">
          <stop offset="0" stopColor="#ffe8e1" />
          <stop offset="1" stopColor="#e5a695" />
        </radialGradient>
        <linearGradient id={`body-${stage}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f7b9a7" />
          <stop offset="1" stopColor="#ca796b" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="51" fill={`url(#embryo-bg-${stage})`} />
      <circle
        cx={47 - Math.min(8, stage - 5)}
        cy={39 - Math.min(5, stage - 5)}
        r={head}
        fill={`url(#body-${stage})`}
      />
      <path
        d={`M${51 - head / 3} ${48} C${38} ${55}, ${40} ${78}, ${61} ${87} C${75} ${92}, ${83} ${78}, ${72} ${67} C${66} ${60}, ${58} ${56}, ${51 - head / 3} ${48}Z`}
        fill={`url(#body-${stage})`}
      />
      <circle
        cx={42 - Math.min(6, stage - 5)}
        cy={36 - Math.min(4, stage - 5)}
        r="2.2"
        fill="#8c4f49"
      />
      {stage >= 7 && (
        <path
          d={`M52 61 C${45 - limb} ${64 + limb}, ${42 - limb} ${70 + limb}, ${48 - limb} ${77 + limb}`}
          fill="none"
          stroke="#ba685d"
          strokeWidth="4"
          strokeLinecap="round"
        />
      )}
      {stage >= 8 && (
        <path
          d={`M59 66 C${68 + limb} ${68}, ${72 + limb} ${76}, ${67 + limb} ${84}`}
          fill="none"
          stroke="#ba685d"
          strokeWidth="4"
          strokeLinecap="round"
        />
      )}
      {stage >= 9 && (
        <path
          d="M38 51 C29 56 27 64 31 69"
          fill="none"
          stroke="#ba685d"
          strokeWidth="3.6"
          strokeLinecap="round"
        />
      )}
      {stage >= 10 && (
        <path
          d="M55 84 C49 91 46 96 49 99"
          fill="none"
          stroke="#ba685d"
          strokeWidth="3.6"
          strokeLinecap="round"
        />
      )}
      <path
        d="M52 45 C60 49 66 55 69 63"
        fill="none"
        stroke="#f6d2ca"
        strokeWidth="2"
        opacity=".65"
      />
    </svg>
  );
}

const weekVisuals: Record<
  string,
  {
    week: string;
    comparison: string;
    size: string;
    fruit: string;
    headline: string;
  }
> = {
  "3 SA": {
    week: "3 SA",
    comparison: "Plus petit qu’un grain de poussière",
    size: "Taille microscopique",
    fruit: "dust",
    headline: "La fécondation vient d’avoir lieu.",
  },
  "4 SA": {
    week: "4 SA",
    comparison: "La taille d’une graine de pavot",
    size: "Moins de 1 mm",
    fruit: "poppy",
    headline: "L’implantation commence dans l’utérus.",
  },
  "5 SA": {
    week: "5 SA",
    comparison: "La taille d’une graine de sésame",
    size: "Environ 1 à 2 mm",
    fruit: "sesame",
    headline: "Les premières structures se forment.",
  },
  "6 SA": {
    week: "6 SA",
    comparison: "La taille d’une lentille",
    size: "Environ 4 à 6 mm",
    fruit: "lentil",
    headline: "Le cœur commence son activité.",
  },
  "7 SA": {
    week: "7 SA",
    comparison: "La taille d’un petit pois",
    size: "Environ 7 à 10 mm",
    fruit: "pea",
    headline: "Les bras et les jambes apparaissent.",
  },
  "8 SA": {
    week: "8 SA",
    comparison: "La taille d’une myrtille",
    size: "Environ 1 à 1,5 cm",
    fruit: "blueberry",
    headline: "Le visage commence à se préciser.",
  },
  "9 SA": {
    week: "9 SA",
    comparison: "La taille d’une framboise",
    size: "Environ 2 cm",
    fruit: "raspberry",
    headline: "Les doigts et les orteils se dessinent.",
  },
  "10 SA": {
    week: "10 SA",
    comparison: "La taille d’une petite fraise",
    size: "Environ 3 cm",
    fruit: "strawberry",
    headline: "Les grandes structures sont en place.",
  },
  "11 SA": {
    week: "11 SA",
    comparison: "La taille d’une figue",
    size: "Environ 4 cm",
    fruit: "fig",
    headline: "On parle désormais de fœtus.",
  },
  "12 SA": {
    week: "12 SA",
    comparison: "La taille d’une prune",
    size: "Environ 5 à 6 cm",
    fruit: "plum",
    headline: "Le corps s’allonge et bouge davantage.",
  },
  "13 SA": {
    week: "13 SA",
    comparison: "La taille d’un petit citron",
    size: "Environ 7 cm",
    fruit: "lemon",
    headline: "Le premier trimestre touche à sa fin.",
  },
};

function WeekByWeekArticle({ article }: { article: Article }) {
  const essentials = article.sections.find(
    (section) => section.title === "L’essentiel en 30 secondes",
  );
  const datingSection = article.sections.find((section) =>
    section.title.startsWith("SA ou SG"),
  );
  const ultrasound = article.sections.find((section) =>
    section.title.includes("échographie du premier trimestre"),
  );
  const takeaway = article.sections.find(
    (section) => section.title === "À retenir",
  );
  const weekSections = article.sections.filter((section) =>
    /^\d+ SA/.test(section.title),
  );

  return (
    <main className="pregnancy-timeline-page">
      <style>{`
        .pregnancy-timeline-page {
          --timeline-rose: #dc7f88;
          --timeline-dark: #4d403d;
          --timeline-cream: #fffaf7;
          --timeline-blush: #fdf0ef;
          --timeline-border: #f1dfda;
          background:
            radial-gradient(circle at top left, rgba(246, 220, 216, .45), transparent 31rem),
            #fffdfb;
          color: var(--timeline-dark);
          padding: 34px 20px 80px;
        }
        .timeline-shell {
          width: min(1050px, 100%);
          margin: 0 auto;
        }
        .timeline-breadcrumbs {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          align-items: center;
          margin-bottom: 34px;
          color: #8d817d;
          font-size: .92rem;
        }
        .timeline-breadcrumbs a {
          color: inherit;
          text-decoration: none;
        }
        .timeline-header {
          max-width: 880px;
          margin: 0 auto 26px;
          text-align: center;
        }
        .timeline-header h1 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.25rem, 5vw, 4.4rem);
          font-weight: 700;
          line-height: 1.04;
          letter-spacing: -.035em;
        }
        .timeline-header h1 em {
          display: block;
          color: var(--timeline-rose);
          font-style: normal;
        }
        .timeline-header .timeline-lead {
          max-width: 760px;
          margin: 22px auto 0;
          color: #756a66;
          font-size: clamp(1.05rem, 2vw, 1.28rem);
          line-height: 1.65;
        }
        .timeline-info {
          display: grid;
          grid-template-columns: 52px 1fr;
          gap: 18px;
          align-items: center;
          max-width: 850px;
          margin: 30px auto 16px;
          padding: 18px 22px;
          border: 1px solid #f4dddb;
          border-radius: 22px;
          background: linear-gradient(100deg, #fcebea, #fff7f5);
          box-shadow: 0 12px 36px rgba(119, 81, 72, .06);
        }
        .timeline-info-icon {
          display: grid;
          width: 52px;
          height: 52px;
          place-items: center;
          border-radius: 50%;
          background: white;
          color: var(--timeline-rose);
          box-shadow: 0 5px 14px rgba(130, 84, 75, .12);
        }
        .timeline-info p {
          margin: 0 0 5px;
          color: #675b57;
          line-height: 1.55;
        }
        .timeline-disclaimer {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          max-width: 850px;
          margin: 18px auto 30px;
          color: #7a706c;
          font-size: .95rem;
          line-height: 1.55;
        }
        .timeline-disclaimer svg {
          flex: 0 0 auto;
          margin-top: 2px;
          color: var(--timeline-rose);
        }
        .timeline-essentials {
          max-width: 850px;
          margin: 0 auto 34px;
          padding: 24px 26px;
          border: 1px solid var(--timeline-border);
          border-radius: 24px;
          background: rgba(255, 255, 255, .88);
        }
        .timeline-essentials h2 {
          margin: 0 0 16px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.55rem;
        }
        .timeline-essentials-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px 22px;
        }
        .timeline-essential {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          margin: 0;
          color: #665b57;
          line-height: 1.55;
        }
        .timeline-essential svg {
          flex: 0 0 auto;
          margin-top: 3px;
          color: var(--timeline-rose);
        }
        .week-list {
          display: grid;
          gap: 16px;
        }
        .week-card {
          display: grid;
          grid-template-columns: 220px minmax(0, 1fr);
          min-height: 210px;
          overflow: hidden;
          border: 1px solid var(--timeline-border);
          border-radius: 22px;
          background: rgba(255, 255, 255, .94);
          box-shadow: 0 12px 35px rgba(107, 73, 65, .08);
        }
        .week-card-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 24px 20px;
          text-align: center;
          border-right: 1px solid #f3e8e4;
          background: linear-gradient(145deg, #fff, #fffaf7);
        }
        .week-number {
          margin-bottom: 8px;
          color: var(--timeline-rose);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 2.55rem;
          line-height: 1;
        }
        .week-comparison {
          max-width: 155px;
          margin: 0;
          color: #554946;
          font-size: 1rem;
          line-height: 1.35;
        }
        .week-fruit {
          display: grid;
          width: 58px;
          height: 58px;
          margin: 13px 0 8px;
          place-items: center;
          border-radius: 50%;
          background: var(--timeline-blush);
          overflow: hidden;
        }
        .week-fruit svg {
          width: 48px;
          height: 48px;
        }
        .week-size {
          margin: 0;
          color: #8a7e79;
          font-size: .9rem;
        }
        .week-card-content {
          padding: 30px 34px;
        }
        .week-card-content h2 {
          display: flex;
          gap: 10px;
          align-items: center;
          margin: 0 0 16px;
          color: var(--timeline-rose);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.25rem, 2vw, 1.6rem);
          font-weight: 500;
        }
        .week-card-content h2 svg {
          flex: 0 0 auto;
        }
        .week-card-content ul {
          margin: 0;
          padding-left: 21px;
          color: #675c58;
        }
        .week-card-content li {
          margin: 0 0 9px;
          padding-left: 4px;
          line-height: 1.5;
        }
        .week-visual {
          display: grid;
          place-items: center;
          padding: 20px;
          background: linear-gradient(160deg, #fffaf8, #fae9e5);
        }
        .week-orb {
          display: grid;
          width: 110px;
          height: 110px;
          place-items: center;
          border: 8px solid rgba(255, 255, 255, .72);
          border-radius: 50%;
          background:
            radial-gradient(circle at 40% 35%, #ffdcd3 0 14%, transparent 15%),
            radial-gradient(circle at center, #eaa996, #d98778 62%, #c87367);
          box-shadow:
            inset 0 0 25px rgba(255, 255, 255, .55),
            0 8px 24px rgba(145, 83, 69, .18);
          overflow: hidden;
        }
        .week-orb svg {
          width: 100%;
          height: 100%;
          display: block;
        }
        .timeline-ultrasound {
          display: grid;
          grid-template-columns: 58px 1fr;
          gap: 20px;
          align-items: start;
          margin: 34px 0 20px;
          padding: 25px 28px;
          border: 1px solid var(--timeline-border);
          border-radius: 24px;
          background: linear-gradient(100deg, #fff2f0, #fffaf7);
        }
        .timeline-ultrasound-icon {
          display: grid;
          width: 58px;
          height: 58px;
          place-items: center;
          border-radius: 18px;
          background: white;
          color: var(--timeline-rose);
        }
        .timeline-ultrasound h2,
        .timeline-takeaway h2 {
          margin: 0 0 10px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.65rem;
          font-weight: 500;
        }
        .timeline-ultrasound p,
        .timeline-takeaway p {
          margin: 0 0 9px;
          color: #675c58;
          line-height: 1.6;
        }
        .timeline-takeaway {
          margin-top: 22px;
          padding: 27px 30px;
          border-radius: 24px;
          background: #5e514d;
          color: white;
        }
        .timeline-takeaway p {
          color: rgba(255, 255, 255, .9);
        }
        .timeline-sources {
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid var(--timeline-border);
        }
        .timeline-sources h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.45rem;
        }
        .timeline-sources li {
          margin-bottom: 8px;
        }
        .timeline-sources a {
          color: #7b5f59;
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 3px;
        }
        @media (max-width: 780px) {
          .pregnancy-timeline-page {
            padding: 24px 14px 60px;
          }
          .timeline-header h1 em {
            display: inline;
          }
          .timeline-info {
            grid-template-columns: 42px 1fr;
            padding: 15px;
          }
          .timeline-info-icon {
            width: 42px;
            height: 42px;
          }
          .timeline-essentials-grid {
            grid-template-columns: 1fr;
          }
          .week-card {
            grid-template-columns: 1fr;
          }
          .week-card-left {
            border-right: 0;
            border-bottom: 1px solid #f3e8e4;
            padding: 20px;
          }
          .week-number {
            font-size: 2.2rem;
          }
          .week-card-content {
            padding: 24px 22px;
          }
          .week-visual {
            padding: 18px;
          }
          .week-orb {
            width: 92px;
            height: 92px;
          }
          .timeline-ultrasound {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="timeline-shell">
        <div className="timeline-breadcrumbs">
          <Link href="/">Accueil</Link>
          <span>›</span>
          <Link href={`/${article.categorySlug}`}>{article.category}</Link>
          <span>›</span>
          <span>{article.subcategory || "Article"}</span>
        </div>

        <header className="timeline-header">
          <h1>
            L’évolution du bébé semaine par semaine
            <em> pendant le premier trimestre</em>
          </h1>
          <p className="timeline-lead">{article.description}</p>
        </header>

        {datingSection && (
          <>
            <section className="timeline-info">
              <span className="timeline-info-icon">
                <Heart size={24} />
              </span>
              <div>
                {datingSection.paragraphs?.slice(0, 2).map((paragraph) => (
                  <p key={paragraph}>{renderRichText(paragraph)}</p>
                ))}
              </div>
            </section>

            <p className="timeline-disclaimer">
              <Sparkles size={18} />
              <span>
                Les tailles et les comparaisons avec des fruits sont
                approximatives et peuvent varier légèrement selon les sources.
              </span>
            </p>
          </>
        )}

        {essentials?.bullets && (
          <section className="timeline-essentials">
            <h2>L’essentiel en 30 secondes</h2>
            <div className="timeline-essentials-grid">
              {essentials.bullets.map((bullet) => (
                <p className="timeline-essential" key={bullet}>
                  <Check size={17} />
                  <span>{renderRichText(bullet)}</span>
                </p>
              ))}
            </div>
          </section>
        )}

        <div className="week-list">
          {weekSections.map((section) => {
            const key = section.title.match(/^\d+ SA/)?.[0] ?? "";
            const visual = weekVisuals[key];

            if (!visual) return null;

            return (
              <section className="week-card" key={section.title}>
                <div className="week-card-left">
                  <div className="week-number">{visual.week}</div>
                  <p className="week-comparison">{visual.comparison}</p>
                  <span className="week-fruit">
                    <FruitIllustration kind={visual.fruit} />
                  </span>
                  <p className="week-size">{visual.size}</p>
                </div>

                <div className="week-card-content">
                  <h2>
                    <Heart size={20} />
                    {visual.headline}
                  </h2>
                  <ul>
                    {section.paragraphs?.map((paragraph) => (
                      <li key={paragraph}>{renderRichText(paragraph)}</li>
                    ))}
                  </ul>
                </div>

                <div className="week-visual">
                  <div className="week-orb">
                    <EmbryoIllustration week={visual.week} />
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {ultrasound && (
          <section className="timeline-ultrasound">
            <span className="timeline-ultrasound-icon">
              <CalendarDays size={27} />
            </span>
            <div>
              <h2>Le grand rendez-vous du premier trimestre</h2>
              {ultrasound.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{renderRichText(paragraph)}</p>
              ))}
            </div>
          </section>
        )}

        {takeaway && (
          <section className="timeline-takeaway">
            <h2>À retenir</h2>
            {takeaway.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{renderRichText(paragraph)}</p>
            ))}
          </section>
        )}

        <section className="timeline-sources">
          <h2>Sources consultées</h2>
          <ul>
            {article.sources.map((source) => (
              <li key={source.label}>
                <a href={source.url} target="_blank" rel="noreferrer">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

function UnifiedArticle({ article }: { article: Article }) {
  const essentials = article.sections.find(
    (section) => section.title === "L’essentiel en 30 secondes",
  );
  const takeaway = article.sections.find(
    (section) => section.title === "À retenir",
  );

  const contentSections = article.sections.filter(
    (section) => section !== essentials && section !== takeaway,
  );

  const primary = contentSections[0];

  const cardSection =
    contentSections.find(
      (section, index) =>
        index > 0 &&
        ((section.paragraphs?.length ?? 0) >= 3 ||
          (section.bullets?.length ?? 0) >= 3),
    ) ?? contentSections[1];

  const helpSection =
    [...contentSections]
      .reverse()
      .find(
        (section) =>
          section !== primary &&
          section !== cardSection &&
          /quand|consulter|aide|soutien|avis/i.test(section.title),
      ) ??
    [...contentSections]
      .reverse()
      .find((section) => section !== primary && section !== cardSection);

  const extraSections = contentSections.filter(
    (section) =>
      section !== primary && section !== cardSection && section !== helpSection,
  );

  const config = articleDisplayConfig[article.slug] ?? {
    essentialIcons: [Heart, Sparkles, Lightbulb, ShieldCheck],
    cardIcons: [Heart, CalendarDays, MessageCircle],
    cardTitles: ["Premier repère", "Deuxième repère", "Troisième repère"],
  };

  const cardItems = getItems(cardSection).slice(0, 3);

  return (
    <main className="compact-article">
      <div className="article-shell">
        <section className="compact-article-hero">
          <div className="compact-hero-copy">
            <div className="breadcrumbs compact-breadcrumbs">
              <Link href="/">Accueil</Link>
              <span>›</span>
              <Link href={`/${article.categorySlug}`}>{article.category}</Link>
              <span>›</span>
              <span>{article.subcategory || "Article"}</span>
            </div>

            <h1>{article.title}</h1>
            <p className="lead">{article.description}</p>

            <div className="verified-pill">
              <ShieldCheck size={18} />
              Informations vérifiées
            </div>
          </div>

          <div className="compact-hero-photo">
            <Image
              src={getArticleImage(article.categorySlug, article.slug)}
              alt=""
              fill
              priority
              sizes="(max-width: 900px) 100vw, 43vw"
            />
          </div>
        </section>

        {essentials?.bullets && essentials.bullets.length > 0 && (
          <section className="compact-essentials">
            <h2>L’essentiel en 30 secondes</h2>
            <div className="essential-grid">
              {essentials.bullets.slice(0, 4).map((bullet, index) => {
                const Icon =
                  config.essentialIcons[index] ?? config.essentialIcons[0];

                return (
                  <div className="essential-card" key={bullet}>
                    <span className="essential-icon">
                      <Icon size={23} />
                    </span>
                    <p>{renderRichText(bullet)}</p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        <div className="compact-article-grid">
          <article className="compact-main-column">
            {primary && (
              <section className="compact-section">
                <h2>
                  <span>1</span>
                  {primary.title}
                </h2>

                {primary.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{renderRichText(paragraph)}</p>
                ))}

                {primary.bullets && (
                  <ul>
                    {primary.bullets.map((bullet) => (
                      <li key={bullet}>{renderRichText(bullet)}</li>
                    ))}
                  </ul>
                )}

                {essentials?.quote && (
                  <div className="compact-note rose-note">
                    <strong>Bon à savoir</strong>
                    <p>{renderRichText(essentials.quote)}</p>
                  </div>
                )}
              </section>
            )}

            {cardSection && cardItems.length > 0 && (
              <section className="compact-section">
                <h2>
                  <span>2</span>
                  {cardSection.title}
                </h2>

                <div className="sign-grid">
                  {cardItems.map((item, index) => {
                    const Icon = config.cardIcons[index] ?? config.cardIcons[0];

                    return (
                      <div className="sign-card" key={item}>
                        <span className="sign-icon">
                          <Icon size={25} />
                        </span>
                        <h3>
                          {index + 1}.{" "}
                          {config.cardTitles[index] ?? `Repère ${index + 1}`}
                        </h3>
                        <p>{renderRichText(item)}</p>
                      </div>
                    );
                  })}
                </div>

                {cardSection.quote && (
                  <div className="compact-note rose-note">
                    <strong>À retenir</strong>
                    <p>{renderRichText(cardSection.quote)}</p>
                  </div>
                )}
              </section>
            )}

            {helpSection && (
              <section className="compact-section medical-section">
                <h2>
                  <span>3</span>
                  {helpSection.title}
                </h2>

                <div className="medical-list">
                  {getItems(helpSection).map((item) => (
                    <p key={item}>
                      <Check size={18} />
                      <span>{renderRichText(item)}</span>
                    </p>
                  ))}
                </div>

                {/urgence|douleur|fièvre|saignement/i.test(
                  getItems(helpSection).join(" "),
                ) && (
                  <div className="compact-warning">
                    <AlertTriangle size={21} />
                    <p>
                      En cas de symptôme intense, inhabituel ou inquiétant,
                      demandez rapidement un avis médical.
                    </p>
                  </div>
                )}
              </section>
            )}

            {takeaway && (
              <section className="compact-takeaway">
                <h2>À retenir</h2>

                {takeaway.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{renderRichText(paragraph)}</p>
                ))}

                {takeaway.bullets && (
                  <ul>
                    {takeaway.bullets.map((bullet) => (
                      <li key={bullet}>{renderRichText(bullet)}</li>
                    ))}
                  </ul>
                )}

                {takeaway.quote && (
                  <div className="project-takeaway-note">
                    {renderRichText(takeaway.quote)}
                  </div>
                )}
              </section>
            )}
          </article>

          <aside className="compact-side-column">
            {extraSections.length > 0 && (
              <section className="learn-more-box">
                <h2>En savoir plus</h2>

                {extraSections.map((section) => (
                  <div key={section.title}>
                    <details>
                      <summary>
                        {section.title}
                        <ChevronDown size={18} />
                      </summary>

                      {section.paragraphs?.map((paragraph) => (
                        <p key={paragraph}>{renderRichText(paragraph)}</p>
                      ))}

                      {section.bullets && (
                        <ul>
                          {section.bullets.map((bullet) => (
                            <li key={bullet}>{renderRichText(bullet)}</li>
                          ))}
                        </ul>
                      )}

                      {section.quote &&
                        !(
                          article.slug === "quand-faire-bilan-fertilite" &&
                          section.title ===
                            "Quels examens peuvent être proposés ?"
                        ) && (
                          <div
                            className="project-mini-tip"
                            style={{ marginTop: 12 }}
                          >
                            {renderRichText(section.quote)}
                          </div>
                        )}
                    </details>

                    {section.quote &&
                      article.slug === "quand-faire-bilan-fertilite" &&
                      section.title ===
                        "Quels examens peuvent être proposés ?" && (
                        <div
                          className="project-mini-tip"
                          style={{ marginTop: 12 }}
                        >
                          {renderRichText(section.quote)}
                        </div>
                      )}
                  </div>
                ))}
              </section>
            )}

            {(cardSection?.quote || essentials?.quote) && (
              <section className="simple-advice-box">
                <Lightbulb size={25} />
                <h2>{config.adviceTitle ?? "Le conseil le plus simple"}</h2>
                <p>
                  {renderRichText(
                    cardSection?.quote ||
                      essentials?.quote ||
                      "Avancez étape par étape.",
                  )}
                </p>
              </section>
            )}
          </aside>
        </div>

        <section className="compact-source-box">
          <h2>Sources consultées</h2>
          <ul>
            {article.sources.map((source) => (
              <li key={source.label}>
                <a href={source.url} target="_blank" rel="noreferrer">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  if (article.slug === "evolution-bebe-semaine-par-semaine-premier-trimestre") {
    return <WeekByWeekArticle article={article} />;
  }

  return <UnifiedArticle article={article} />;
}
