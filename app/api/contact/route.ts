import { NextResponse } from "next/server";

const CONTACT_EMAIL = "contact.mamanpasapas@gmail.com";
const RESEND_ENDPOINT = "https://api.resend.com/emails";

function normalize(value: unknown, maxLength: number) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is missing");
    return NextResponse.json(
      { error: "Configuration d’envoi indisponible." },
      { status: 500 }
    );
  }

  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const name = normalize(payload.name, 100);
  const email = normalize(payload.email, 160);
  const subject = normalize(payload.subject, 160);
  const message = normalize(payload.message, 5000);
  const website = normalize(payload.website, 200);

  // Honeypot anti-spam : un visiteur humain ne remplit jamais ce champ caché.
  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !subject || !message || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Merci de compléter correctement tous les champs." },
      { status: 400 }
    );
  }

  const emailText = [
    "Nouveau message envoyé depuis mamanpasapas.fr",
    "",
    `Nom : ${name}`,
    `E-mail : ${email}`,
    `Objet : ${subject}`,
    "",
    "Message :",
    message
  ].join("\n");

  try {
    const resendResponse = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Maman, Pas à Pas <onboarding@resend.dev>",
        to: [CONTACT_EMAIL],
        reply_to: email,
        subject: `[Maman, Pas à Pas] ${subject}`,
        text: emailText
      })
    });

    if (!resendResponse.ok) {
      const details = await resendResponse.text();
      console.error("Resend error:", resendResponse.status, details);
      return NextResponse.json(
        { error: "Le message n’a pas pu être envoyé." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Le message n’a pas pu être envoyé." },
      { status: 502 }
    );
  }
}
