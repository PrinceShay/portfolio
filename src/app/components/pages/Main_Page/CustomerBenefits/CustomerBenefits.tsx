"use client";
import React from "react";
import BenefitCard from "./BenefitCard";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ProjectText from "../../../shared/ui/SectionText";

function CustomerBenefits() {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.from(".BenefitCard", {
        scale: 0.5,
        opacity: 0,
        stagger: 0.15,
        duration: 1.75,
        ease: "elastic.out(1,0.8)",
        scrollTrigger: {
          trigger: container.current,
          toggleActions: "play pause resume reset",
          start: "top bottom",
        },
      });
    },
    { scope: container }
  );

  return (
    <section className="pt-64 px-12 md:px-24 lg:px-48">
      <ProjectText
        title="Warum kunden mit mir arbeiten"
        text="An independent creative agency for all your branding, advertising, and film production needs."
      />
      <div className="grid grid-cols-12 mt-24">
        <ul
          ref={container}
          className="col-start-1 col-end-13 grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-4 "
        >
          <BenefitCard
            title="Keine versteckten Kosten"
            content="Ich arbeite mit Festpreisen. Das bedeutet, dass es keine versteckten
                       Kosten gibt. Du weißt genau, was du für dein Budget erhältst, ohne
                       unangenehme Überraschungen."
          />
          <BenefitCard
            title="Persönlicher Ansprechpartner"
            content="Während des gesamten Projekts hast du stets einen festen Ansprechpartner – mich. Das garantiert klare Kommunikation, schnelle Antworten auf deine Fragen und individuelle Betreuung."
          />
          <BenefitCard
            title="Kosteneffizienz"
            content="Als Freelancer kann ich qualitativ hochwertige Webdesign-Dienstleistungen zu einem günstigeren Preis anbieten als größere Agenturen. Du sparst Geld, ohne Kompromisse bei der Qualität einzugehen."
          />

          <BenefitCard
            title="Freiheit im Design"
            content="Durch die Verwendung von Webflow als Plattform bin ich in der Lage, einzigartige und maßgeschneiderte Webseiten zu erstellen. Deine Seite wird sich von der Masse abheben und genau deine Vorstellungen entsprechen."
          />
        </ul>
      </div>
    </section>
  );
}

export default CustomerBenefits;
