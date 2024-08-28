import ProjectText from "@/app/components/shared/ui/SectionText";
import React from "react";
import ServiceItem from "./ServiceItem";

function Service2() {
  const itemsWeb = [
    "Webdesign",
    "Webentwicklung",
    "Landingpage",
    "E-Commerce",
    "Webflow",
  ];
  const itemsMotion = [
    "Animationsvideos",
    "Werbespots/ Ads",
    "Erklärungsvideos",
    "Animierte Logos",
    "Animiertes Branding",
  ];

  const itemsBranding = [
    "Rebranding",
    "Printdesign",
    "Geschäftsaustattung",
    "Flyer",
    "Broschüren",
  ];

  const toolsWeb = [
    { name: "", logo: "/assets/images/main/Service/Logo1.svg" },
    { name: "React.js", logo: "/assets/images/main/Service/Logo2.svg" },
    { name: "Next.js", logo: "/assets/images/main/Service/Logo3.svg" },
    { name: "Figma", logo: "/assets/images/main/Service/figma.svg" },
    { name: "TypeScript", logo: "/assets/images/main/Service/Typescript.svg" },
  ];

  const toolsMotion = [
    { name: "After Effects", logo: "/assets/images/main/Service/AE.svg" },
  ];

  const toolsBranding = [
    { name: "Photoshop", logo: "/assets/images/main/Service/Photoshop.svg" },
    {
      name: "Illustrator",
      logo: "/assets/images/main/Service/Illustrator.svg",
    },
    { name: "Indesign", logo: "/assets/images/main/Service/Indesign.svg" },
  ];

  return (
    <section className="py-32 px-6 md:px-24 lg:px-48" id="service">
      <ProjectText title="Service" text="" />
      <div className="grid max-w-2xl grid-cols-1 2xl:grid-cols-3 gap-8 min-h-[60vh] 2xl:max-w-[1600px] mx-auto relative">
        <ServiceItem
          title="Webdesign"
          description="Professionelles Webdesign und maßgeschneiderte Webentwicklung"
          items={itemsWeb}
          tools={toolsWeb}
        />
        <ServiceItem
          title="Motion"
          description="Dynamisches Motion Design für visuelle Highlights"
          items={itemsMotion}
          tools={toolsMotion}
        />
        <ServiceItem
          title="Branding"
          description="Vom einfachen Flyer bis hin zum vollständigen Branding"
          items={itemsBranding}
          tools={toolsBranding}
        />
      </div>
    </section>
  );
}

export default Service2;
