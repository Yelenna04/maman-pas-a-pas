import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumbs"><Link href="/">Accueil</Link><span>›</span><span>Contact</span></div>
          <p className="eyebrow">Contact</p>
          <h1>Parlons de ce qui vous serait utile.</h1>
          <p className="lead">Question, suggestion de sujet, correction ou proposition de partenariat.</p>
        </div>
      </section>
      <section className="section-sm">
        <div className="container grid-2">
          <div className="card">
            <Mail size={32} color="#a45e68" />
            <h2 style={{ fontSize: "2rem", marginTop: 18 }}>Contact</h2>
            <p className="muted">
              Ce formulaire prépare un e-mail dans votre application de messagerie.
              Pour un vrai envoi automatique, vous pourrez ensuite connecter Formspree, Resend ou Brevo.
            </p>
            <p><strong>{siteConfig.email}</strong></p>
            <div className="notice">
              Pour une urgence médicale, n’utilisez pas ce formulaire. Contactez immédiatement
              un professionnel de santé ou les services d’urgence.
            </div>
          </div>
          <div className="card"><ContactForm /></div>
        </div>
      </section>
    </>
  );
}
