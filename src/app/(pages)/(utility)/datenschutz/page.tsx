import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: `Datenschutz – Jannis Röstel | Designer & Entwickler aus Karlsruhe`,
    description: "",
  };
}

function page() {
  return (
    <section className="min-h-screen pt-64 px-6 md:px-24 lg:px-48 flex flex-col">
      <h1 className="Section_Headline mb-12">Datenschutz</h1>
      <div className="text-xl max-w-5xl">
        <h2 className="text-3xl mb-5">Erfassung und Verarbeitung von Daten</h2>
        <p className="mb-12">
          Bei jedem Zugriff auf unsere Website werden automatisch bestimmte
          Informationen erfasst und in den Server-Logfiles gespeichert. Dazu
          gehören unter anderem Ihre IP-Adresse, Datum und Uhrzeit des Zugriffs,
          aufgerufene Seiten, Art des Browsers, das Betriebssystem und der
          Domainname Ihres Internet Service Providers. Diese Daten werden
          anonymisiert erhoben und dienen ausschließlich statistischen
          Auswertungen.
        </p>

        <h2 className="text-3xl mb-5">Verwendung von Cookies</h2>
        <p className="mb-12">
          Wir verwenden auf unserer Website Cookies, um die Nutzung unserer
          Website zu analysieren und zu verbessern. Dabei kommen auch Dienste
          von Drittanbietern wie Google Analytics und Google Tag Manager zum
          Einsatz. Cookies sind kleine Textdateien, die auf Ihrem Endgerät
          gespeichert werden und Informationen enthalten. Die Cookies
          ermöglichen es uns, Ihren Browser bei Ihrem nächsten Besuch
          wiederzuerkennen. Sie können die Verwendung von Cookies in Ihren
          Browsereinstellungen deaktivieren, allerdings können dadurch einige
          Funktionen der Website beeinträchtigt werden.
        </p>

        <h3 className="text-2xl mb-5">
          Verwendung von Google Analytics und Google Tag Manager
        </h3>
        <p className="mb-12">
          Wir nutzen Google Analytics und Google Tag Manager, um das
          Nutzerverhalten auf unserer Website zu analysieren und daraus
          Erkenntnisse für die Verbesserung unserer Website zu gewinnen. Dabei
          werden Daten wie Ihre IP-Adresse, die von Ihnen besuchten Seiten, Ihr
          Gerätetyp und Ihr Standort erfasst. Diese Daten werden anonymisiert
          und aggregiert ausgewertet. Google Analytics und Google Tag Manager
          verwenden ebenfalls Cookies zur Datenerfassung. Die erhobenen Daten
          werden von Google in Übereinstimmung mit den geltenden
          Datenschutzbestimmungen verwendet.
        </p>

        <h3 className="text-2xl mb-5">Verwendung von Microsoft Clarity</h3>
        <p className="mb-12">
          Unsere Website verwendet das Analysetool Microsoft Clarity, um das
          Nutzerverhalten zu analysieren und die Benutzererfahrung zu
          verbessern. Microsoft Clarity sammelt anonymisierte Daten über das
          Verhalten der Besucher auf unserer Website, um uns Einblicke in die
          Nutzung und Navigation zu geben. Die von Microsoft Clarity gesammelten
          Daten umfassen Informationen wie Mausklicks, Bildschirmaktivitäten und
          Tastatureingaben. Diese Daten werden in aggregierter Form ausgewertet
          und dienen ausschließlich zur Optimierung unserer Website und zur
          Verbesserung der Benutzerfreundlichkeit.
        </p>
        <p className="mb-12">
          Microsoft Clarity verwendet Cookies, um Informationen über die Nutzung
          unserer Website zu speichern. Cookies sind kleine Textdateien, die auf
          Ihrem Gerät gespeichert werden und Informationen wie Ihre IP-Adresse,
          den von Ihnen verwendeten Browser und Ihre Browsing-Aktivitäten
          enthalten. Diese Informationen werden anonymisiert und können nicht
          mit Ihrer Identität in Verbindung gebracht werden.
        </p>
        <p className="mb-12">
          Durch die Verwendung von Microsoft Clarity können wir das Verhalten
          unserer Website-Besucher besser verstehen und gezielte Verbesserungen
          vornehmen. Ihre Privatsphäre ist uns dabei wichtig, und wir
          gewährleisten, dass Ihre Daten sicher und geschützt sind.
        </p>

        <h2 className="text-3xl mb-5">Weitergabe von Daten</h2>
        <p className="mb-12">
          Wir geben Ihre personenbezogenen Daten nicht ohne Ihre ausdrückliche
          Zustimmung an Dritte weiter. Ausnahmen gelten nur für den Fall, dass
          dies zur Erfüllung unserer vertraglichen Pflichten erforderlich ist
          oder wir gesetzlich dazu verpflichtet sind.
        </p>

        <h2 className="text-3xl mb-5">Ihre Rechte</h2>
        <p className="mb-12">
          Sie haben das Recht, Auskunft über die von uns gespeicherten
          personenbezogenen Daten zu erhalten und deren Berichtigung, Löschung
          oder Sperrung zu verlangen. Bitte wenden Sie sich dazu an die in
          unserem Impressum angegebene Kontaktperson.
        </p>
        <p className="mb-12">
          Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit
          zu ändern. Die jeweils aktuelle Version finden Sie auf unserer
          Website.
        </p>
        <p className="mb-12">
          Bitte beachten Sie auch unsere Allgemeinen Geschäftsbedingungen.
        </p>

        <p className="">Stand: 20.06.2023</p>
      </div>
    </section>
  );
}

export default page;
