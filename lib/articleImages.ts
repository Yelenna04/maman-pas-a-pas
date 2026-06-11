export function getArticleImage(categorySlug: string, slug?: string) {
  if (slug === "que-faire-avant-essayer-avoir-bebe") {
    return "/images/article-a-la-une.png";
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
