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
        y: 50,
        rotateX: -70,
        opacity: 0,
        stagger: 0.15,
        duration: 1.75,
        ease: "elastic.out(1,0.8)",
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section className="py-32 px-6 md:px-24 lg:px-48 bg-primary-800">
      <ProjectText
        title="Warum kunden mit mir arbeiten"
        text="An independent creative agency for all your branding, advertising, and film production needs."
      />
      <div className="mt-24">
        <ul
          ref={container}
          className="grid grid-cols-1 md:grid-cols-[auto,auto] gap-4 justify-center"
        >
          <BenefitCard
            title={
              <>
                Keine versteckten
                <wbr /> Kosten
              </>
            }
            content="Ich arbeite mit Festpreisen. Das bedeutet, dass es keine versteckten
                       Kosten gibt. Du weißt genau, was du für dein Budget erhältst, ohne
                       unangenehme Überraschungen."
          />
          <BenefitCard
            title={
              <>
                Persönlicher
                <wbr /> Ansprechpartner
              </>
            }
            content="Während des gesamten Projekts hast du stets einen festen Ansprechpartner – mich. Das garantiert klare Kommunikation, schnelle Antworten auf deine Fragen und individuelle Betreuung."
          />
          <BenefitCard
            title={<>Kosteneffizienz</>}
            content="Als Freelancer kann ich qualitativ hochwertige Webdesign-Dienstleistungen zu einem günstigeren Preis anbieten als größere Agenturen. Du sparst Geld, ohne Kompromisse bei der Qualität einzugehen."
          />
          <BenefitCard
            title={
              <>
                Freiheit im
                <wbr /> Design
              </>
            }
            content="Durch die Verwendung von Webflow als Plattform bin ich in der Lage, einzigartige und maßgeschneiderte Webseiten zu erstellen. Deine Seite wird sich von der Masse abheben und genau deine Vorstellungen entsprechen."
          />
        </ul>
      </div>
    </section>
  );
}

export default CustomerBenefits;
