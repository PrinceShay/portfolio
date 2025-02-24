import CV from "@/app/components/pages/Profile/CV";
import React from "react";
import CTAWindow from "@/app/components/shared/ui/CTAWindow";
import { Metadata } from "next";
import Biography from "@/app/components/pages/Profile/Biography";
import HugeHeadline from "@/app/components/shared/ui/HugeHeadline";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jannisroestel.de"),
  title: `Profil – Jannis Röstel | Designer & Entwickler aus Karlsruhe`,
  description:
    "Lerne Jannis Röstel, Designer und Entwickler aus Karlsruhe, kennen. Erfahre mehr über seine Reise von der Fotografie über Digital Art bis hin zu Webentwicklung und Motion Design.",
  openGraph: {
    title: `Über Jannis Röstel – Designer & Entwickler aus Karlsruhe`,
    description:
      "Lerne Jannis Röstel, Designer und Entwickler aus Karlsruhe, kennen. Erfahre mehr über seine Reise von der Fotografie über Digital Art bis hin zu Webentwicklung und Motion Design.",
    images: [
      {
        url: "/assets/images/Hero.jpg",
        alt: `Über Jannis Röstel – Designer & Entwickler aus Karlsruhe`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Über Jannis Röstel – Designer & Entwickler aus Karlsruhe`,
    description:
      "Lerne Jannis Röstel, Designer und Entwickler aus Karlsruhe, kennen. Erfahre mehr über seine Reise von der Fotografie über Digital Art bis hin zu Webentwicklung und Motion Design.",
    images: "",
  },
};

function Page() {
  const languageItems = ["HTML", "CSS", "JavaScript", "TypeScript"];
  const libraryItems = [
    "React",
    "Next.js",
    "Vue.js",
    "Nuxt",
    "Tailwind CSS",
    "GSAP",
    "Three.js",
    "Astro.js",
    "React-Three-Fiber",
  ];
  const toolItems = [
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
  ];

  const sections = [
    { title: "Sprachen", items: languageItems },
    { title: "Libraries & Frameworks", items: libraryItems },
    { title: "Tools & Platformen", items: toolItems },
  ];

  return (
    <section className="min-h-screen pt-64">
      <HugeHeadline text="Profil" />
      <Biography />

      <section className="grid grid-cols-12 grid-flow-col page_padding mb-24 w-full gap-4">
        <CV />
        <div className="col-end-13 col-start-1 xl:col-start-9 flex flex-col gap-16">
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
      </section>
    </section>
  );
}

export default Page;
