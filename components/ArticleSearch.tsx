"use client";

import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { useMemo, useState } from "react";

type SearchableArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  subcategory?: string;
};

type ArticleSearchProps = {
  articles: SearchableArticle[];
};

const preferredCategoryOrder = [
  "Avant la grossesse",
  "Pendant la grossesse",
  "Accouchement",
  "Post-partum",
  "Vie pratique"
];

const categoryRank = new Map(
  preferredCategoryOrder.map((category, index) => [category, index])
);

export function ArticleSearch({ articles }: ArticleSearchProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const categories = useMemo(() => {
    const availableCategories = Array.from(
      new Set(articles.map((article) => article.category))
    );

    const orderedCategories = preferredCategoryOrder.filter((category) =>
      availableCategories.includes(category)
    );

    const remainingCategories = availableCategories.filter(
      (category) => !preferredCategoryOrder.includes(category)
    );

    return ["Tous", ...orderedCategories, ...remainingCategories];
  }, [articles]);

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("fr");

    return articles
      .filter((article) => {
        const matchesCategory =
          selectedCategory === "Tous" || article.category === selectedCategory;

        const searchableText = [
          article.title,
          article.description,
          article.category,
          article.subcategory ?? ""
        ]
          .join(" ")
          .toLocaleLowerCase("fr");

        return matchesCategory &&
          (normalizedQuery === "" || searchableText.includes(normalizedQuery));
      })
      .sort((articleA, articleB) => {
        const rankA = categoryRank.get(articleA.category) ?? Number.MAX_SAFE_INTEGER;
        const rankB = categoryRank.get(articleB.category) ?? Number.MAX_SAFE_INTEGER;
        return rankA - rankB;
      });
  }, [articles, query, selectedCategory]);

  return (
    <>
      <div
        className="card"
        style={{
          marginBottom: 34,
          padding: "22px"
        }}
      >
        <label
          htmlFor="article-search"
          style={{
            display: "block",
            fontWeight: 700,
            marginBottom: 10
          }}
        >
          Rechercher un article
        </label>

        <div style={{ position: "relative" }}>
          <Search
            aria-hidden="true"
            size={20}
            style={{
              color: "var(--muted)",
              left: 18,
              pointerEvents: "none",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)"
            }}
          />

          <input
            id="article-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Ex. nausées, projet bébé, premier trimestre…"
            style={{
              background: "white",
              border: "1px solid var(--line)",
              borderRadius: 999,
              color: "var(--ink)",
              minHeight: 54,
              padding: "0 20px 0 50px",
              width: "100%"
            }}
          />
        </div>

        <div
          aria-label="Filtrer les articles par catégorie"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginTop: 18
          }}
        >
          {categories.map((category) => {
            const isSelected = category === selectedCategory;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedCategory(category)}
                className={isSelected ? "btn btn-primary" : "btn btn-secondary"}
                style={{ minHeight: 44, padding: "0 18px" }}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <p
        className="muted"
        aria-live="polite"
        style={{ marginBottom: 22 }}
      >
        {filteredArticles.length} article{filteredArticles.length > 1 ? "s" : ""}
      </p>

      {filteredArticles.length > 0 ? (
        <div className="grid-3 category-grid">
          {filteredArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="category-card-link"
              aria-label={`Lire ${article.title}`}
              style={{ display: "flex", height: "100%" }}
            >
              <article
                className="card card-hover"
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  height: "100%"
                }}
              >
                <p
                  className="muted"
                  style={{
                    fontSize: ".88rem",
                    marginBottom: 10
                  }}
                >
                  {article.category}
                  {article.subcategory ? ` · ${article.subcategory}` : ""}
                </p>

                <h3>{article.title}</h3>
                <p className="muted">{article.description}</p>

                <span
                  className="link-arrow"
                  style={{ marginTop: "auto" }}
                >
                  Lire l’article
                  <ArrowRight size={17} />
                </span>
              </article>
            </Link>
          ))}
        </div>
      ) : (
        <div className="card center" style={{ padding: "42px 24px" }}>
          <h2 style={{ fontSize: "1.8rem", marginBottom: 10 }}>
            Aucun article trouvé
          </h2>
          <p className="muted" style={{ marginBottom: 0 }}>
            Essayez un autre mot-clé ou choisissez une autre catégorie.
          </p>
        </div>
      )}
    </>
  );
}
