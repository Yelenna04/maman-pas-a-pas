"use client";

import { useMemo, useState } from "react";
import type { Article } from "@/lib/articles";
import { ArticleCard } from "./ArticleCard";

export function ArticlesExplorer({ articles }: { articles: Article[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Toutes");

  const categories = ["Toutes", ...Array.from(new Set(articles.map((article) => article.category)))];

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesCategory = category === "Toutes" || article.category === category;
      const matchesQuery =
        !normalized ||
        `${article.title} ${article.description} ${article.category}`.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [articles, category, query]);

  return (
    <>
      <div className="search-bar">
        <input
          type="search"
          placeholder="Rechercher un sujet…"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Rechercher un article"
        />
      </div>
      <div className="tag-list" aria-label="Filtrer par catégorie">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            className={`tag-button ${category === item ? "active" : ""}`}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      {filtered.length ? (
        <div className="grid-3">
          {filtered.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      ) : (
        <div className="card empty">Aucun article ne correspond à cette recherche.</div>
      )}
    </>
  );
}
