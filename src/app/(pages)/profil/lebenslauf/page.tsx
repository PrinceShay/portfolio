import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Cake, Mail, MapPin, Phone } from "lucide-react";
import JobItemCV from "@/app/components/pages/Profile/JobItemCV";
import { Metadata } from "next";

gsap.registerPlugin(ScrollTrigger);

export const metadata: Metadata = {
  title: "Lebenslauf - Jannis Röstel",
  robots: "noindex",
};

export default function Page() {
  const sections = [
    {
      title: "Programmiersprachen",
      items: ["HTML", "CSS", "TypeScript"],
    },
    {
      title: "Libraries & Frameworks",
      items: [
        "React",
        "Next.js",
        "Vue.js",
        "Nuxt",
        "Tailwind CSS",
        "GSAP",
        "Three.js",
        "Astro.js",
        "React-Three-Fiber",
      ],
    },
    {
      title: "Tools",
      items: [
        "Git / GitHub",
        "Vercel",
        "Sanity",
        "Figma",
        "MongoDB",
        "Webflow",
        "Mongoose",
        "Photoshop",
        "After Effects",
        "inDesign",
        "Illustrator",
      ],
    },
    {
      title: "Sprachen",
      items: ["Deutsch (Muttersprache)", "Englisch (Fliessend)"],
    },
  ];

  const infoItems = [
    { icon: <MapPin />, text: "Nuitsstrasse 10, Karlsruhe" },
    { icon: <Cake />, text: "08.08.2000" },
    {
      icon: <Phone />,
      text: (
        <a className="hover:text-primary-500" href="tel:+49123456789">
          +49 123 456789
        </a>
      ),
    },
    {
      icon: <Mail />,
      text: (
        <a
          className="hover:text-primary-500"
          href="mailto:j.roestel@jannisroestel.de"
        >
          j.roestel@jannisroestel.de
        </a>
      ),
    },
  ];

  const jobItems = [
    {
      jobTitle: "Webdesigner und Entwickler",
      company: "Freelance",
      JobDate: "Januar 2024 - Heute",
      tasks: [
        "Design und Entwicklung moderner, performanter Webseiten mit Next.js, Astro.js, Nuxt und Webflow, massgeschneidert auf die Anforderungen der Kunden.",
        "Datenbank- und Backend-Integration mit Supabase, Medusa.js, PostgreSQL, MongoDB und Mongoose für skalierbare und effiziente Webanwendungen.",
        "High-End-Animationen mit GSAP für interaktive, dynamische Nutzererlebnisse.",
        "Motion Graphics & Video Content: Erstellung von Social Media Reels, animierten Werbeanzeigen, 3D-Visualisierungen und Corporate Motion Design für maximale Brand Awareness.",
        "Landing Pages & Conversion-Optimierung: Entwicklung von zielgerichteten Marketing- und Produktseiten mit Fokus auf Usability und Performance.",
        "Headless CMS & E-Commerce: Implementierung flexibler Lösungen mit Sanity, Shopify, Medusa.js und Strapi für dynamische Content- und Shop-Systeme.",
        "UX/UI-Design mit einem starken Fokus auf Benutzerfreundlichkeit, Markenidentität und interaktive Erlebnisse.",
        "SEO & Performance-Optimierung für bessere Sichtbarkeit, schnellere Ladezeiten und eine höhere Conversion-Rate.",
      ],
    },
    {
      jobTitle: "Webdesigner und Entwickler",
      company: "Accenty",
      JobDate: "Oktober 2023 - September 2024",
      tasks: [
        "Eigenständige Konzeption, Design und Entwicklung moderner Webseiten in Webflow (Client-First-Ansatz) mit Custom Code für maximale Flexibilität.",
        "Interaktive Animationen mit GSAP für dynamische Nutzererlebnisse.",
        "Integration und Gestaltung von 3D-Objekten mit Spline, um visuell ansprechende Effekte zu erzeugen.",
        "Gestaltung und Produktion von Printmedien wie Flyer, Broschüren und Werbematerialien mit einem starken Fokus auf Markenidentität.",
      ],
    },
    {
      jobTitle: "Grafikdesign und Marketing",
      company: "Wessa Gruppe",
      JobDate: "Oktober 2022 - Juli 2023",
      tasks: [
        "Ganzheitliches Rebranding basierend auf neuen Markenanforderungen – von Strategie bis Umsetzung – mit nahtloser Adaption für den Digitalbereich zur Ansprache der neuen Zielgruppe.",
        "Eigenständige Konzeption und Umsetzung von medienübergreifenden Marketingkampagnen für Print und Digital.",
        "Design und Produktion von Printmedien wie Flyern, Geschäftsausstattung, Grossflächenplakaten und Mappen im Corporate Design.",
        "Erstellung von Video- und Animationscontent sowie statischen Social Media Posts zur Steigerung der Markenpräsenz.",
        "Neuentwicklung der Unternehmenswebseite mit Webflow, um zentrale Geschäftsziele zu erfüllen, Fahrzeuge optimal darzustellen und das neue Corporate Design zu integrieren.",
        "Verantwortung für das Content-Team: Aufgabenverteilung für Content-Pflege, z. B. Einpflegen neuer Fahrzeuge und Erstellen von Blogbeiträgen.",
        "Entwicklung zielgruppenspezifischer Landingpages, um die Conversion-Rate zu optimieren.",
      ],
    },
    {
      jobTitle: "Ausbildung zum Mediengestalter",
      company: "Einrichtungshaus Ehrmann",
      JobDate: "August 2019 - Mai 2022",
      tasks: [
        "Gestaltung und Produktion von Printmedien wie Visitenkarten im Corporate Design.",
        "Konzeption und Umsetzung von Werbemitteln (z. B. Kundenstopper, Inhouse-Banner) passgenau zur jeweiligen Marketingaktion.",
        "Design und Erstellung von Zeitungsanzeigen, abgestimmt auf Zielgruppe und Markenauftritt.",
        "Erstellung von animierten Video Walls, um visuelle Botschaften wirkungsvoll zu präsentieren.",
        "Design und Umsetzung von Inhouse-Beschilderungen (z. B. Wegweiser), um eine klare Besucherführung sicherzustellen.",
      ],
    },
  ];

  const hobbies = ["Fotografie", "Bergsteigen", "Kraftsport", "Motorradfahren"];

  return (
    <div className="md:mt-64 mt-12 mb-24 min-h-screen page_padding max-w-[1600px] mx-auto  ">
      <h1 className="text-5xl mb-16">Lebenslauf</h1>

      <div className="flex flex-col gap-16 xl:gap-4 xl:grid grid-cols-3 ">
        <div className="col-span-1 relative h-full ">
          <div className="sticky top-16">
            <div className="aspect-square relative rounded-full w-32 overflow-hidden mb-6">
              <Image
                alt="Jannis Röstel"
                fill
                className="object-cover scale-125"
                sizes="(max-width: 640px) 100vw, 640px"
                src={"/Navigation/ProfilePic.jpg"}
              />
            </div>
            <div className="text-lg">
              <p className="text-2xl mb-6">Jannis Röstel</p>
              {infoItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  {item.icon}
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div id="cv" className="flex flex-col  w-full gap-12 mb-16">
            <div className="">
              <h2 className="text-3xl mb-12">Berufserfahrung</h2>
              <ul>
                {jobItems.map((job, index) => (
                  <JobItemCV
                    key={index}
                    jobTitle={job.jobTitle}
                    company={job.company}
                    JobDate={job.JobDate}
                    tasks={job.tasks}
                  />
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl mb-12">Skills</h2>
              <div className=" flex flex-col gap-16">
                {sections.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-2xl mb-8">{section.title}</h3>
                    <ul className="flex items-start flex-wrap gap-3">
                      {section.items.map((item, index) => (
                        <li
                          key={index}
                          className="bg-primary-500 px-5 py-2 rounded-full text-lg"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl mb-12">Hobbys</h2>
            <div>
              <ul className="list-disc list-outside ml-4 mt-2">
                {hobbies.map((hobby, index) => (
                  <li className="text-lg" key={index}>
                    {hobby}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
