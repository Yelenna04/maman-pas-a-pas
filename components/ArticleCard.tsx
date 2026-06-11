import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import type { Article } from "@/lib/articles";
import { MiniIllustration } from "./LogoIllustration";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("fr-FR", { dateStyle: "medium" }).format(new Date(value));
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="card card-hover article-card">
      <Link href={`/articles/${article.slug}`} aria-label={`Lire ${article.title}`}>
        <div className={`article-cover ${article.tone}`}>
          <MiniIllustration tone={article.tone} />
        </div>
      </Link>

      <div className="article-card-body">
        <span className="badge">{article.subcategory || article.category}</span>

        <div className="article-meta">
          <span><CalendarDays size={15} /> {formatDate(article.updatedAt)}</span>
          <span><Clock size={15} /> {article.readingTime}</span>
        </div>

        <h3>
          <Link href={`/articles/${article.slug}`}>{article.title}</Link>
        </h3>

        <p className="muted">{article.description}</p>

        <Link className="link-arrow" href={`/articles/${article.slug}`}>
          Lire l’article <ArrowRight size={17} />
        </Link>
      </div>
    </article>
  );
}
