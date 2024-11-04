import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: `Impressum – Jannis Röstel | Designer & Entwickler aus Karlsruhe`,
    description: "",
  };
}

function page() {
  return (
    <section className="min-h-screen pt-64 page_padding flex flex-col">
      <h1 className="Section_Headline mb-12">Impressum</h1>
      <div className="text-xl max-w-5xl">
        <h2 className="font-bold">
          Verantwortlich für den Inhalt dieser Website gemäß § 5 TMG:
        </h2>
        <p className="mb-5">
          Jannis Röstel
          <br />
          Nuitsstraße 10
          <br />
          76185 Karlsruhe
          <br />
        </p>

        <h2 className="font-bold">Kontakt:</h2>
        <p className="mb-5">
          Telefon:{" "}
          <a
            className=" text-primary-300 hover:text-primary-500 transition-colors"
            href="tel:+4917666811884"
          >
            +49 176 66811884
          </a>
          <br />
          E-Mail:
          <a
            className=" text-primary-300 hover:text-primary-500 transition-colors"
            href="mailto:j.roestel@jannisroestel.de"
          >
            j.roestel@jannisroestel.de
          </a>
          <br />
        </p>

        <h2 className="font-bold">
          Umsatzsteuer-Identifikationsnummer gemäß §27a UStG:
        </h2>
        <p className="mb-5">DE331277066</p>

        <h2 className="font-bold">Haftungsausschluss:</h2>
        <p className="mb-5">
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber verantwortlich.
        </p>

        <h2 className="font-bold">Urheberrecht:</h2>
        <p className="mb-5">
          Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser
          Website unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers.
        </p>

        <p>
          Bitte beachte auch meine{" "}
          <a
            className=" text-primary-300 hover:text-primary-500 transition-colors"
            href="/Datenschutz"
          >
            Datenschutzerklärung.
          </a>
        </p>
      </div>
    </section>
  );
}

export default page;
