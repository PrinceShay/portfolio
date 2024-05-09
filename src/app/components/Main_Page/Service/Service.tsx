import React from "react";
import ServiceItem from "./ServiceItem";

const WebData = {
  title: "Web",
  Headline: "Professionelles Webdesign und maßgeschneiderte Webentwicklung",
  Text: "Entdecken Sie die Welt des kreativen Webdesigns und der innovativen Webentwicklung. Mit maßgeschneiderten Lösungen, die auf Ihre spezifischen Bedürfnisse zugeschnitten sind, verhelfen wir Ihrem Online-Auftritt zu einem einzigartigen und beeindruckenden Erscheinungsbild. Ob responsive Design oder komplexe Webanwendungen, wir bringen Ihre Vision ins Netz.",
  items: [
    "Responsive Webdesign",
    "Webflow-Entwicklung",
    "E-Commerce",
    "SEO-optimierte Inhalte",
  ],
};

const MotionData = {
  title: "Motion",
  Headline: "Dynamisches Motion Design für visuelle Highlights",
  Text: "Setzen Sie ein visuelles Statement mit professionellem Motion Design. Von animierten Logos bis hin zu komplexen Videoanimationen, wir gestalten visuelle Erlebnisse, die Ihre Botschaft nicht nur vermitteln, sondern auch mit Emotionen laden. Perfekt für Marketingkampagnen, Erklärungsvideos und vieles mehr.",
  items: [
    "Animationsvideos",
    "Werbespots/ Ads",
    "Erklärungsvideos",
    "Animiertes Branding",
  ],
};

function Service() {
  return (
    <section className=" px-12 xl:px-48">
      <ServiceItem
        title={WebData.title}
        Headline={WebData.Headline}
        Text={WebData.Text}
        items={WebData.items}
      />
      <ServiceItem
        title={MotionData.title}
        Headline={MotionData.Headline}
        Text={MotionData.Text}
        items={MotionData.items}
      />
    </section>
  );
}

export default Service;
