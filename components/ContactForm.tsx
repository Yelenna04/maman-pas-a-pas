"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(String(form.get("subject") || "Message depuis le site"));
    const body = encodeURIComponent(
      `Nom : ${form.get("name")}\nE-mail : ${form.get("email")}\n\n${form.get("message")}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-row">
        <label>
          Nom
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Adresse e-mail
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label>
        Objet
        <input name="subject" required />
      </label>
      <label>
        Message
        <textarea name="message" required />
      </label>
      <div>
        <button className="btn btn-primary" type="submit">
          Préparer le message <Send size={18} />
        </button>
      </div>
      {sent && <p className="muted">Votre application de messagerie va s’ouvrir pour envoyer le message.</p>}
    </form>
  );
}
