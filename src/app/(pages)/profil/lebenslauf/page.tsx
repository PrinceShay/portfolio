"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import JobItem from "@/app/components/pages/Profile/JobItem";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const HeadingRef = useRef(null);

  const sections = [
    {
      title: "Skills",
      items: [
        "Next.js",
        "React",
        "Vue.js",
        "Nuxt.js",
        "GSAP",
        "Sanity",
        "Webflow",
      ],
    },
    {
      title: "Tools",
      items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "After Effects"],
    },
    {
      title: "Sprachen",
      items: ["Deutsch (Muttersprache)", "Englisch (Fließend)"],
    },
  ];

  return (
    <div className="mt-64 min-h-screen page_padding max-w-[1600px]">
      <h1 className="text-4xl mb-12">Lebenslauf</h1>

      <div>
        <h1 className="text-2xl mb-8">Persönliche Informationen</h1>
        <div>
          <p>Name: Jannis Rostel</p>
          <p>Adresse: Musterstraße 1, 12345 Musterstadt</p>
          <p>Telefon: +49 123 456789</p>
          <p>Email: jannis.rostel@example.com</p>
          <p>Geburtsdatum: 01.01.1990</p>
        </div>
      </div>
      <div>
        <h1 className="text-4xl mb-12">Lebenslauf</h1>
        <div
          id="cv"
          className="flex flex-col xl:flex-row justify-between w-full gap-12 mb-16"
        >
          <div className="basis-1/2">
            <ul>
              <JobItem
                jobTitle="Webdesigner und Entwickler"
                company="Freelance"
                JobDate="Januar 2024 - Heute"
              />
              <JobItem
                jobTitle="Webdesigner und Entwickler"
                company="Accenty"
                JobDate="Oktober 2023 - September 2024"
              />
              <JobItem
                jobTitle="Grafikdesign und Marketing"
                company="Wessa Gruppe"
                JobDate="Oktober 2022 - Juli 2023"
              />
              <JobItem
                jobTitle="Ausbildung zum Mediengestalter"
                company="Einrichtungshaus Ehrmann"
                JobDate="August 2019 - Mai 2022"
              />
            </ul>
          </div>
          <div className="basis-1/2 flex flex-col gap-16">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h1 className="text-2xl mb-8">{section.title}</h1>
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
    </div>
  );
}
