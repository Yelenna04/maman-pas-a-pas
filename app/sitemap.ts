import type { MetadataRoute } from "next";
import { articles, categories } from "@/lib/articles";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "", "/articles", "/a-propos", "/contact", "/methode-verification",
    "/mentions-legales", "/politique-confidentialite"
  ];
  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : .7
    })),
    ...categories.map((category) => ({
      url: `${siteConfig.url}/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: .8
    })),
    ...articles.map((article) => ({
      url: `${siteConfig.url}/articles/${article.slug}`,
      lastModified: new Date(article.updatedAt),
      changeFrequency: "monthly" as const,
      priority: .75
    }))
  ];
}
