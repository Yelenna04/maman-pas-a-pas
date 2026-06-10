export function LogoIllustration() {
  return (
    <svg
      className="hero-illustration"
      viewBox="0 0 440 420"
      role="img"
      aria-label="Illustration douce d’une maman tenant son bébé"
    >
      <circle cx="220" cy="210" r="185" fill="#fffaf6" />
      <path d="M109 340c9-80 46-126 110-138 72 6 116 52 124 138" fill="#9eb5a4" />
      <circle cx="212" cy="138" r="72" fill="#f1c9b5" />
      <path d="M145 143c-2-67 33-100 76-100 51 0 77 39 71 94-12-27-31-50-61-59-24 30-55 49-86 53" fill="#6e514b" />
      <path d="M166 174c16 21 31 30 51 30 19 0 35-9 51-30" fill="none" stroke="#bf7d7d" strokeWidth="5" strokeLinecap="round" />
      <circle cx="188" cy="143" r="5" fill="#5d4541" />
      <circle cx="245" cy="143" r="5" fill="#5d4541" />
      <circle cx="261" cy="254" r="53" fill="#f1c9b5" />
      <path d="M215 249c5-38 25-58 52-58 32 0 51 25 48 55-12-17-28-29-48-34-14 17-31 28-52 31" fill="#8b675d" />
      <path d="M140 340c5-53 32-91 82-111 9 56 37 92 83 111" fill="#d98f96" opacity=".9" />
      <path d="M215 313c28 14 55 8 77-17" fill="none" stroke="#a45e68" strokeWidth="11" strokeLinecap="round" />
      <path d="M184 253c18 44 61 66 102 55" fill="none" stroke="#f1c9b5" strokeWidth="23" strokeLinecap="round" />
      <circle cx="365" cy="96" r="16" fill="#ead9c8" />
      <path d="M69 111c14-18 26-18 40 0-14 18-26 18-40 0Z" fill="#f0c9ce" />
      <path d="M341 363c10-23 26-35 47-36-1 23-17 37-47 36Z" fill="#9eb5a4" />
      <path d="M342 363c-22-8-34-23-36-44 22-1 37 13 36 44Z" fill="#bed0c2" />
    </svg>
  );
}

export function MiniIllustration({ tone = "rose" }: { tone?: "rose" | "sage" | "sand" }) {
  const main = tone === "sage" ? "#9eb5a4" : tone === "sand" ? "#d6b28e" : "#d98f96";
  const soft = tone === "sage" ? "#e8f0ea" : tone === "sand" ? "#f3e7da" : "#f8e4e4";
  return (
    <svg viewBox="0 0 240 140" aria-hidden="true" style={{ width: "75%", maxWidth: 220 }}>
      <circle cx="120" cy="70" r="58" fill={soft} />
      <path d="M72 110c6-38 25-61 55-67 31 7 48 29 52 67" fill={main} opacity=".9" />
      <circle cx="119" cy="47" r="26" fill="#f1c9b5" />
      <path d="M94 48c-1-25 12-38 28-38 20 0 30 15 28 36-8-11-17-18-29-21-8 11-17 18-27 21" fill="#76564e" />
      <circle cx="147" cy="77" r="19" fill="#f1c9b5" />
      <path d="M129 76c3-13 10-20 20-20 12 0 19 9 18 20-7-7-13-10-20-11-5 6-11 9-18 11" fill="#8b675d" />
      <path d="M104 84c15 20 34 26 54 17" fill="none" stroke="#f1c9b5" strokeWidth="9" strokeLinecap="round" />
    </svg>
  );
}
