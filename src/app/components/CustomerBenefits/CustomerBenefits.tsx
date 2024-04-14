import React from "react";
import BenefitCard from "./BenefitCard";

function CustomerBenefits() {
  return (
    <section className="py-64">
      <div className="text-center pb-24">
        <h1 className="Section_Headline">
          Warum Kunden mit <br /> mir arbeiten
        </h1>
        <p className="text-xl mt-6">
          An independent creative agency for all your branding, advertising, and
          film production needs.
        </p>
        <div className="grid grid-cols-12 mt-24">
          <ul className="col-start-2 col-end-12 grid grid-cols-3 gap-4">
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
      </div>
    </section>
  );
}

export default CustomerBenefits;
