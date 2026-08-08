"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(form.get("name") || ""),
          email: String(form.get("email") || ""),
          subject: String(form.get("subject") || ""),
          message: String(form.get("message") || ""),
          website: String(form.get("website") || "")
        })
      });

      if (!response.ok) {
        throw new Error("Envoi impossible");
      }

      formElement.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form-row">
        <label>
          Nom
          <input name="name" autoComplete="name" maxLength={100} required />
        </label>
        <label>
          Adresse e-mail
          <input
            name="email"
            type="email"
            autoComplete="email"
            maxLength={160}
            required
          />
        </label>
      </div>

      <label>
        Objet
        <input name="subject" maxLength={160} required />
      </label>

      <label>
        Message
        <textarea name="message" maxLength={5000} required />
      </label>

      <div
        aria-hidden="true"
        style={{
          height: 0,
          left: "-10000px",
          overflow: "hidden",
          position: "absolute",
          width: 0
        }}
      >
        <label>
          Site web
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
          <Send size={18} />
        </button>
      </div>

      <div aria-live="polite">
        {status === "success" && (
          <p className="muted" style={{ marginTop: 14 }}>
            Votre message a bien été envoyé. Merci !
          </p>
        )}
        {status === "error" && (
          <p className="muted" style={{ marginTop: 14 }}>
            Le message n’a pas pu être envoyé. Réessayez dans quelques instants.
          </p>
        )}
      </div>
    </form>
  );
}
