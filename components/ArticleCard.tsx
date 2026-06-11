import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Article } from "@/lib/articles";
import { getArticleImage } from "@/lib/articleImages";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="card card-hover article-card editorial-card">
      <Link
        href={`/articles/${article.slug}`}
        aria-label={`Lire ${article.title}`}
      >
        <div className="article-photo-wrap">
          <Image
            src={getArticleImage(article.categorySlug, article.slug)}
            alt=""
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
            className="article-photo"
          />
        </div>
      </Link>

      <div className="article-card-body">
        <span className="badge">
          {article.subcategory || article.category}
        </span>

        <h3>
          <Link href={`/articles/${article.slug}`}>
            {article.title}
          </Link>
        </h3>

        <p className="muted">
          {article.description}
        </p>

        <Link
          className="link-arrow"
          href={`/articles/${article.slug}`}
        >
          Lire l’article
          <ArrowRight size={17} />
        </Link>
      </div>
    </article>
  );
}
