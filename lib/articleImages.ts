export function getArticleImage(
  categorySlug: string,
  slug?: string
) {
  if (slug === "que-faire-avant-essayer-avoir-bebe") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "se-preparer-emotionnellement-projet-bebe") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "parler-projet-bebe-avec-partenaire") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "nausees-vomissements-comment-les-soulager") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "test-positif-premieres-demarches") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "plantes-huiles-essentielles-complements-sans-risque") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "automedication-avant-pendant-grossesse-reflexes") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "vitamine-b9-avant-grossesse-quand-comment-prendre") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "medicaments-projet-bebe-lesquels-signaler") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "quels-vaccins-verifier-avant-grossesse") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "comment-vivre-emotionnellement-parcours-pma") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "comment-se-deroule-fiv-etape-par-etape") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "fiv-classique-icsi-quelles-differences") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "insemination-intra-uterine-iiu-comment-ca-se-passe") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "pma-demarches-delais-prise-en-charge") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "pma-amp-definition-a-qui-adresse") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "produits-quotidien-environnement-que-limiter-avant-grossesse") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "alcool-projet-bebe-faut-il-arreter-avant-grossesse") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "tabac-projet-grossesse-pourquoi-comment-arreter") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "sommeil-stress-projet-bebe-prendre-soin-de-soi") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "activite-physique-avant-grossesse") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "preparer-alimentation-avant-grossesse") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "sante-partenaire-points-verifier-avant-grossesse") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "antecedents-medicaux-que-signaler-avant-grossesse") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "quand-faire-bilan-fertilite") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "quel-professionnel-consulter-avant-projet-bebe") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "quels-examens-faire-avant-grossesse") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "consultation-preconceptionnelle-pourquoi-quand-faire") {
    return "/images/article-a-la-une.png";
  }

  if (slug === "apres-arret-contraception-quand-cycle-revient") {
    return "/images/article-ovulation-periode-fertile.png";
  }

  if (slug === "combien-temps-moyenne-tomber-enceinte") {
    return "/images/article-ovulation-periode-fertile.png";
  }

  if (slug === "tests-ovulation-utiliser-interpreter") {
    return "/images/article-ovulation-periode-fertile.png";
  }

  if (slug === "cycles-irreguliers-mieux-comprendre") {
    return "/images/article-ovulation-periode-fertile.png";
  }

  if (slug === "comment-reperer-ovulation-periode-fertile") {
    return "/images/article-ovulation-periode-fertile.png";
  }

  if (slug === "periode-fertile-jours-plus-favorables") {
    return "/images/article-ovulation-periode-fertile.png";
  }

  if (slug === "retour-maison-bebe") {
    return "/images/retour-maison-bebe.png";
  }

  if (slug === "preparer-valise-maternite") {
    return "/images/valise-maternite.png";
  }

  const images: Record<string, string> = {
    "avant-grossesse": "/images/projet-bebe.png",
    "pendant-grossesse": "/images/hero-maman-pas-a-pas.png",
    accouchement: "/images/article-a-la-une.png",
    "post-partum": "/images/hero-maman-pas-a-pas.png",
    "vie-pratique": "/images/projet-bebe.png"
  };

  return images[categorySlug] ?? "/images/article-a-la-une.png";
}
