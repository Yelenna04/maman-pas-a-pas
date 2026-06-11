"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Avant grossesse", "/avant-grossesse"],
  ["Grossesse", "/pendant-grossesse"],
  ["Accouchement", "/accouchement"],
  ["Post-partum", "/post-partum"],
  ["Vie pratique", "/vie-pratique"],
  ["Articles", "/articles"]
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container navbar">
        <Link
          href="/"
          className="brand-logo-link"
          aria-label="Maman, Pas à Pas — Accueil"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo-instagram-maman-pas-a-pas.png"
            alt=""
            width={80}
            height={80}
            className="site-logo-icon"
            priority
          />

          <span className="site-brand-name">
            Maman, Pas à Pas
          </span>
        </Link>

        <nav className="nav-links" aria-label="Navigation principale">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}

          <Link className="header-about-link" href="/a-propos">
            À propos
          </Link>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="mobile-menu container" aria-label="Navigation mobile">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link href="/a-propos" onClick={() => setOpen(false)}>
            À propos
          </Link>

          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
