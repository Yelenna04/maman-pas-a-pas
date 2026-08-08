import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link
              href="/"
              className="footer-brand"
              aria-label="Maman, Pas à Pas — Accueil"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "12px",
                textDecoration: "none"
              }}
            >
              <Image
                src="/images/logo-instagram-maman-pas-a-pas.png"
                alt=""
                width={52}
                height={52}
                className="footer-logo-icon"
              />

              <span
                style={{
                  display: "inline-block",
                  color: "#ffffff",
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "1.35rem",
                  lineHeight: 1.1,
                  whiteSpace: "nowrap"
                }}
              >
                {siteConfig.name}
              </span>
            </Link>

            <p
              style={{
                color: "#ded4d4",
                maxWidth: 430,
                marginTop: 18
              }}
            >
              Des informations accessibles pour avancer avec davantage de repères,
              de confiance et de douceur.
            </p>
          </div>

          <div>
            <h3>Explorer</h3>

            <div className="footer-links">
              <Link href="/articles">Tous les articles</Link>
              <Link href="/avant-grossesse">Avant la grossesse</Link>
              <Link href="/pendant-grossesse">Pendant la grossesse</Link>
              <Link href="/accouchement">Accouchement</Link>
              <Link href="/post-partum">Post-partum</Link>
            </div>
          </div>

          <div>
            <h3>À propos</h3>

            <div className="footer-links">
              <Link href="/a-propos">La démarche</Link>
              <Link href="/methode-verification">
                Méthode de vérification
              </Link>
              <Link href="/contact">Contact</Link>
              <Link href="/mentions-legales">Mentions légales</Link>
              <Link href="/politique-confidentialite">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} {siteConfig.name}. Les contenus ne
          remplacent pas une consultation médicale.
        </div>
      </div>
    </footer>
  );
}
