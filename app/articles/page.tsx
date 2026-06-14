import Link from "next/link";
import { articles } from "@/lib/articles";

export const metadata = {
  title: "Tous les articles | Maman, Pas à Pas",
  description:
    "Retrouvez tous les articles de Maman, Pas à Pas pour vous accompagner avant, pendant et après la grossesse.",
};

export default function ArticlesPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fffaf7",
        padding: "30px 20px 96px",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            width: "100%",
            margin: "0 auto 52px",
            textAlign: "center",
          }}
        >
          <nav
            aria-label="Fil d’Ariane"
            style={{
              marginBottom: "18px",
              color: "#9a6f66",
              fontSize: "1rem",
              lineHeight: 1.4,
            }}
          >
            <Link
              href="/"
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Accueil
            </Link>
            <span aria-hidden="true" style={{ margin: "0 10px" }}>
              ›
            </span>
            <span>Articles</span>
          </nav>

          <h1
            style={{
              margin: "0 0 10px",
              color: "#493733",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(3rem, 5vw, 4rem)",
              lineHeight: 1.08,
              fontWeight: 700,
            }}
          >
            Articles
          </h1>

          <p
            style={{
              margin: 0,
              color: "#8a655d",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontSize: "clamp(1.15rem, 1.8vw, 1.4rem)",
              fontStyle: "italic",
              lineHeight: 1.45,
            }}
          >
            Conseils et informations pour vous accompagner à chaque étape.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {articles.map((article) => (
            <article
              key={article.slug}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "28px",
                border: "1px solid #efd9d3",
                borderRadius: "24px",
                background: "#ffffff",
                boxShadow: "0 14px 34px rgba(93, 66, 59, 0.07)",
              }}
            >
              <p
                style={{
                  margin: "0 0 12px",
                  color: "#bf7b73",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                }}
              >
                {article.category}
                {article.subcategory ? ` · ${article.subcategory}` : ""}
              </p>

              <h2
                style={{
                  margin: "0 0 14px",
                  color: "#493733",
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "1.65rem",
                  lineHeight: 1.2,
                }}
              >
                {article.title}
              </h2>

              <p
                style={{
                  flex: 1,
                  margin: "0 0 22px",
                  color: "#725f59",
                  lineHeight: 1.65,
                }}
              >
                {article.description}
              </p>

              <Link
                href={`/articles/${article.slug}`}
                style={{
                  alignSelf: "flex-start",
                  color: "#b66f68",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Lire l’article →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
