import React from "react";
import FaqItem from "./FaqItem";
import HugeHeadline from "@/app/components/shared/ui/HugeHeadline";
import Link from "next/link";

const faqData = [
  {
    title: "Wie läuft ein Projekt mit dir ab?",
    text: (
      <>
        Ein typisches Projekt beginnt mit einem ausführlichen Beratungsgespräch,
        um deine Ziele und Anforderungen zu verstehen. Anschliessend erstelle
        ich ein Konzept und ein Angebot. Nach deiner Freigabe starte ich mit der
        Gestaltung und Entwicklung, begleitet von regelmässigen Updates und
        Feedback-Runden. Nach Abschluss des Projekts erfolgt die Übergabe und
        gegebenenfalls eine Schulung zur Nutzung der Webseite.
      </>
    ),
  },
  {
    title: "Wie lange dauert die Erstellung einer Webseite?",
    text: (
      <>
        Die Projektzeit hängt von der Komplexität und dem Umfang der Webseite
        ab.{" "}
        <span className="font-bold text-primary-200">
          In der Regel kann eine Standard-Webseite zwischen 4 und 8 Wochen
          erstellt werden.
        </span>{" "}
        Für umfangreichere Projekte oder spezielle Anforderungen kann sich die
        Dauer entsprechend verlängern. Ich stelle sicher, dass wir klare
        Meilensteine und Deadlines festlegen, um den Fortschritt transparent zu
        halten.
      </>
    ),
  },
  {
    title: "Wie viel kostet eine Webseite bei dir?",
    text: (
      <>
        <span className="font-bold text-primary-200">
          Ich arbeite mit Festpreisen
        </span>
        , sodass du von Anfang an genau weisst, welches Investment auf dich
        zukommt. Es gibt keine versteckten Kosten , und du kannst zwischen
        verschiedenen Paketen wählen, die auf deine Anforderungen zugeschnitten
        sind. Beachte: Ein One-Pager fängt bei mir ab{" "}
        <span className="font-bold text-primary-200">2000€</span> an.
      </>
    ),
  },
  {
    title: "Welche Technologien oder Plattformen nutzt du?",
    text: (
      <>
        Ich passe die Wahl der Technologien individuell an die Anforderungen
        meiner Kunden an. Für die Entwicklung nutze ich unter anderem{" "}
        <span className="font-bold text-primary-200">Next.js</span>,{" "}
        <span className="font-bold text-primary-200">Nuxt.js</span>,{" "}
        <span className="font-bold text-primary-200">Hydrogen</span> oder{" "}
        <span className="font-bold text-primary-200">Webflow</span>. Als
        Content-Management-Systeme setze ich häufig auf{" "}
        <span className="font-bold text-primary-200">Sanity</span> oder{" "}
        <span className="font-bold text-primary-200">Payload</span>. Dabei wähle
        ich stets die passenden Werkzeuge, um jedes Projekt effizient und
        flexibel umzusetzen. So kann ich sicherstellen, dass die Lösung perfekt
        auf deine Bedürfnisse abgestimmt ist.
      </>
    ),
  },
  {
    title: "Was passiert, wenn ich während des Projekts unzufrieden bin?",
    text: (
      <>
        Wir stimmen jeden Meilenstein eng miteinander ab, sodass zu keinem
        Zeitpunkt Unklarheiten oder Überraschungen entstehen. Durch diese
        transparente Arbeitsweise hast du stets Einblick in den
        Projektfortschritt. Sollte es dennoch vorkommen, dass du nicht zufrieden
        bist, biete ich eine{" "}
        <span className="font-bold text-primary-200">
          30-tägige Geld-zurück-Garantie
        </span>{" "}
        an. Die bereits geleistete Anzahlung behalte ich jedoch ein, um den
        bisherigen Arbeitsaufwand abzudecken. Mein Ziel ist es, gemeinsam mit
        dir ein Ergebnis zu schaffen, das deinen Erwartungen entspricht oder sie
        sogar übertrifft!
      </>
    ),
  },
  {
    title: "Kann ich dich auch nach Projektabschluss für Fragen kontaktieren?",
    text: (
      <>
        Natürlich! Auch nach Abschluss des Projekts stehe ich dir bei Fragen
        oder kleineren Anpassungen zur Verfügung. Für umfangreichere Änderungen
        oder längerfristige Unterstützung biete ich separate{" "}
        <span className="font-bold text-primary-200">
          Wartungs- und Serviceverträge
        </span>{" "}
        an.
      </>
    ),
  },
];

export default function Faq() {
  return (
    <section className="py-32 flex flex-col items-center page_padding">
      <HugeHeadline text="FAQ" />
      <ul className="max-w-screen-md mx-auto flex flex-col gap-4">
        {faqData.map((faq) => (
          <FaqItem key={faq.title} title={faq.title} text={faq.text} />
        ))}
      </ul>
      <div className="text-center mt-12">
        <h2 className="text-2xl">Hast du noch weitere Fragen?</h2>
        <p className="text-lg mt-4">
          Schreib mir gerne{" "}
          <Link
            className="underline hover:text-primary-500"
            href={"mailto:j.roestel@jannisroestel.de"}
          >
            eine Mail{" "}
          </Link>
        </p>
      </div>
    </section>
  );
}
