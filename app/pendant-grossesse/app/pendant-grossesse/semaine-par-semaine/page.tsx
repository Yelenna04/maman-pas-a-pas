import SemaineParSemaineClient from "./SemaineParSemaineClient";
import "./semaine-par-semaine.css";

export const metadata = {
  title: "Bébé semaine par semaine | Maman, Pas à Pas",
  description:
    "Découvrez l’évolution de votre bébé semaine après semaine, dans une interface douce et rassurante.",
};

export default function SemaineParSemainePage() {
  return <SemaineParSemaineClient />;
}
