"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Revenir en haut de la page"
      title="Haut de page"
      style={{
        alignItems: "center",
        background: "var(--sage)",
        border: "1px solid rgba(255,255,255,.72)",
        borderRadius: "50%",
        bottom: 22,
        boxShadow: "0 12px 30px rgba(73,58,53,.18)",
        color: "white",
        display: "flex",
        height: 52,
        justifyContent: "center",
        position: "fixed",
        right: 22,
        transition: "transform .2s ease, box-shadow .2s ease",
        width: 52,
        zIndex: 90
      }}
      onMouseEnter={(event) => {
        event.currentTarget.style.transform = "translateY(-3px)";
        event.currentTarget.style.boxShadow = "0 16px 34px rgba(73,58,53,.22)";
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.transform = "translateY(0)";
        event.currentTarget.style.boxShadow = "0 12px 30px rgba(73,58,53,.18)";
      }}
    >
      <ArrowUp aria-hidden="true" size={24} strokeWidth={2.2} />
    </button>
  );
}
