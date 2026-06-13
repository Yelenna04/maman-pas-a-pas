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
  const common = {
    width: 78,
    height: 78,
    viewBox: "0 0 78 78",
    role: "img",
  };

  if (kind === "dust") {
    return (
      <svg {...common} aria-label="Grain de poussière">
        <circle cx="39" cy="39" r="2.6" fill="#7a5549" />
        <circle cx="33" cy="34" r="1.5" fill="#a47d70" />
        <circle cx="46" cy="43" r="1.7" fill="#8b6358" />
        <circle cx="44" cy="32" r="1.2" fill="#c59f93" />
      </svg>
    );
  }

  if (kind === "poppy") {
    return (
      <svg {...common} aria-label="Graine de pavot">
        <defs>
          <radialGradient id="poppyGrad" cx="35%" cy="30%">
            <stop offset="0%" stopColor="#7f7884" />
            <stop offset="55%" stopColor="#3f3947" />
            <stop offset="100%" stopColor="#25212b" />
          </radialGradient>
        </defs>
        <ellipse cx="39" cy="40" rx="11.5" ry="14.5" fill="url(#poppyGrad)" />
        <path d="M32 33c4-2 10-2 14 2" fill="none" stroke="#918a97" strokeWidth="1.2" />
        <ellipse cx="35" cy="34" rx="4.2" ry="6" fill="#8f8794" opacity=".4" />
      </svg>
    );
  }

  if (kind === "sesame") {
    return (
      <svg {...common} aria-label="Graine de sésame">
        <defs>
          <linearGradient id="sesameGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="#f2d9a6" />
            <stop offset="100%" stopColor="#d4b077" />
          </linearGradient>
        </defs>
        <path
          d="M19 44c4-16 25-24 37-14 9 8 1 24-17 26-13 2-24-4-20-12Z"
          fill="url(#sesameGrad)"
          stroke="#c39a5e"
          strokeWidth="1.4"
        />
        <path d="M26 44c9 2 18 0 25-5" fill="none" stroke="#b48548" strokeWidth="1.2" />
        <ellipse cx="32" cy="35" rx="8" ry="4" fill="#fff1cf" opacity=".55" />
      </svg>
    );
  }

  if (kind === "lentil") {
    return (
      <svg {...common} aria-label="Lentille">
        <defs>
          <linearGradient id="lentilGrad" x1="0" x2="1">
            <stop offset="0%" stopColor="#8f6d37" />
            <stop offset="100%" stopColor="#c0a26b" />
          </linearGradient>
        </defs>
        <ellipse cx="39" cy="44" rx="22" ry="13" fill="#8f6d37" />
        <ellipse cx="39" cy="39" rx="20" ry="10" fill="url(#lentilGrad)" />
        <ellipse cx="33" cy="35" rx="7" ry="3.5" fill="#e1c790" opacity=".5" />
      </svg>
    );
  }

  if (kind === "pea") {
    return (
      <svg {...common} aria-label="Petit pois">
        <defs>
          <radialGradient id="peaGrad" cx="30%" cy="28%">
            <stop offset="0%" stopColor="#cce78b" />
            <stop offset="55%" stopColor="#89bb39" />
            <stop offset="100%" stopColor="#648f22" />
          </radialGradient>
        </defs>
        <circle cx="39" cy="40" r="20" fill="url(#peaGrad)" stroke="#557b24" strokeWidth="1.4" />
        <ellipse cx="32" cy="32" rx="8" ry="5" fill="#e0f0b0" opacity=".55" />
      </svg>
    );
  }

  if (kind === "blueberry") {
    return (
      <svg {...common} aria-label="Myrtille">
        <defs>
          <radialGradient id="blueGrad" cx="32%" cy="28%">
            <stop offset="0%" stopColor="#8ea0d0" />
            <stop offset="55%" stopColor="#4d649d" />
            <stop offset="100%" stopColor="#304272" />
          </radialGradient>
        </defs>
        <circle cx="39" cy="41" r="21" fill="url(#blueGrad)" stroke="#2d3d6d" strokeWidth="1.4" />
        <path d="m39 19 4 7 8-1-6 6 4 7-10-4-10 4 4-7-6-6 8 1Z" fill="#2f3f70" />
        <ellipse cx="32" cy="33" rx="7.5" ry="5.5" fill="#a8b6dc" opacity=".45" />
      </svg>
    );
  }

  if (kind === "raspberry") {
    const dots = [
      [30, 28], [39, 25], [48, 28],
      [25, 37], [34, 36], [44, 36], [53, 38],
      [28, 47], [39, 46], [50, 47],
      [33, 56], [45, 56],
    ];
    return (
      <svg {...common} aria-label="Framboise">
        <path d="M31 21c5 2 11 2 16 0" fill="none" stroke="#5c9447" strokeWidth="3.5" strokeLinecap="round" />
        <path d="m35 20 4-6 4 6" fill="#79ad60" />
        <g fill="#dc5471" stroke="#be3f5c" strokeWidth="1">
          {dots.map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="6.5" />
          ))}
        </g>
      </svg>
    );
  }

  if (kind === "strawberry") {
    return (
      <svg {...common} aria-label="Fraise">
        <defs>
          <linearGradient id="strawGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#f36b72" />
            <stop offset="100%" stopColor="#cf4048" />
          </linearGradient>
        </defs>
        <path
          d="M39 66C25 57 18 44 20 32c2-9 9-13 17-12 1-5 5-8 10-8 8 0 13 7 11 16-2 14-9 25-19 38Z"
          fill="url(#strawGrad)"
          stroke="#b93942"
          strokeWidth="1.4"
        />
        <path d="M24 23c4 2 7 2 10 1 1-4 3-7 5-8 2 3 4 6 5 8 3 1 6 1 10-1-2 4-4 6-7 8H31c-3-2-5-4-7-8Z" fill="#5a9448" />
        {[
          [31,34],[39,31],[47,35],
          [28,43],[36,41],[45,43],
          [32,51],[40,50],[37,58]
        ].map(([cx, cy], i) => (
          <ellipse key={i} cx={cx} cy={cy} rx="1.2" ry="2" fill="#ffe1a0" />
        ))}
        <ellipse cx="32" cy="32" rx="8" ry="5" fill="#ff9aa1" opacity=".3" />
      </svg>
    );
  }

  if (kind === "fig") {
    return (
      <svg {...common} aria-label="Figue">
        <path
          d="M39 12c3 10 20 16 20 34 0 13-9 20-20 20s-20-7-20-20c0-18 17-24 20-34Z"
          fill="#7a537d"
          stroke="#5d3d60"
          strokeWidth="1.4"
        />
        <path d="M39 13c-2 2-5 4-9 4" fill="none" stroke="#6a914d" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="32" cy="38" rx="7" ry="12" fill="#af8db0" opacity=".35" />
      </svg>
    );
  }

  if (kind === "plum") {
    return (
      <svg {...common} aria-label="Prune">
        <defs>
          <radialGradient id="plumGrad" cx="32%" cy="28%">
            <stop offset="0%" stopColor="#b18abb" />
            <stop offset="60%" stopColor="#745084" />
            <stop offset="100%" stopColor="#53385e" />
          </radialGradient>
        </defs>
        <ellipse cx="39" cy="43" rx="22" ry="25" fill="url(#plumGrad)" stroke="#4e3158" strokeWidth="1.4" />
        <path d="M39 17c1-6 5-9 10-11" fill="none" stroke="#648848" strokeWidth="4" strokeLinecap="round" />
        <path d="M48 10c8 0 11 4 12 8-7 1-12-1-14-5Z" fill="#7ead5f" />
        <ellipse cx="31" cy="35" rx="7.5" ry="10" fill="#c8a8cf" opacity=".25" />
      </svg>
    );
  }

  return (
    <svg {...common} aria-label="Petit citron">
      <defs>
        <linearGradient id="lemonGrad" x1="0" x2="1">
          <stop offset="0%" stopColor="#ffe05d" />
          <stop offset="100%" stopColor="#e0ba18" />
        </linearGradient>
      </defs>
      <path
        d="M18 42c2-10 10-18 21-20 10-2 18 1 24 8 6 8 6 17 0 24-6 8-15 11-26 10-11-2-18-10-19-22Z"
        fill="url(#lemonGrad)"
        stroke="#be9b11"
        strokeWidth="1.5"
      />
      <path d="M18 42c-5 0-7 2-9 5 2-5 4-8 9-9" fill="#ebc633" />
      <path d="M63 32c6-1 9-4 12-8" fill="none" stroke="#6a9149" strokeWidth="4" strokeLinecap="round" />
      <path d="M67 25c8 0 10 4 10 8-6 1-10-1-13-5Z" fill="#7fb05e" />
      <ellipse cx="33" cy="34" rx="8" ry="5" fill="#fff2a4" opacity=".5" />
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
          --timeline-rose: #b97c76;
          --timeline-dark: #4d403d;
          --timeline-cream: #fffaf7;
          --timeline-blush: #fff5f3;
          --timeline-border: #eed5d3;
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
          color: var(--timeline-dark);
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
          border: 1px solid #eed5d3;
          border-radius: 22px;
          background: #fff5f3;
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
          width: 86px;
          height: 86px;
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
          padding: 24px 28px;
          border: 1px solid var(--timeline-border);
          border-radius: 24px;
          background: #fff5f3;
          box-shadow: none;
        }
        .timeline-sources h2 {
          margin: 0 0 14px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.45rem;
          color: var(--timeline-dark);
        }
        .timeline-sources ul {
          margin: 0;
          padding-left: 20px;
        }
        .timeline-sources li {
          margin-bottom: 10px;
          color: #6d615d;
          line-height: 1.55;
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
          <h1>{article.title}</h1>
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
