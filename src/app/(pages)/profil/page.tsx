import CV from "@/app/components/pages/Profile/CV";
import React from "react";
import CTAWindow from "@/app/components/shared/ui/CTAWindow";
import { Metadata } from "next";
import Biography from "@/app/components/pages/Profile/Biography";
import HugeHeadline from "@/app/components/shared/ui/HugeHeadline";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
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
}

function Page() {
  return (
    <section className="min-h-screen pt-64  ">
      <HugeHeadline text="Profil" />
      <Biography />

      <section className="grid grid-cols-12 grid-flow-col grid-rows-2 page_padding mb-24 w-full">
        <CV />
        <div className="col-start-1 col-end-13 md:col-end-8 xl:col-end-6 grid grid-rows-3 gap-4 mt-16">
          <div className="">
            <h1 className="text-2xl mb-8">Sprachen</h1>
            <ul className="flex items-start flex-wrap gap-3">
              <li className="bg-primary-500 px-5 py-2 rounded-full text-lg">
                HTML
              </li>
              <li className="bg-primary-500 px-5 py-2 rounded-full text-lg">
                CSS
              </li>
              <li className="bg-primary-500 px-5 py-2 rounded-full text-lg">
                JavaScript
              </li>
              <li className="bg-primary-500 px-5 py-2 rounded-full text-lg">
                TypeScript
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-2xl mb-8">Libraries & Frameworks</h1>
            <ul className="flex items-start flex-wrap gap-3">
              <li className="bg-primary-500 px-5 py-2 rounded-full text-lg">
                React
              </li>
              <li className="bg-primary-500 px-5 py-2 rounded-full text-lg">
                Next.js
              </li>
              <li className="bg-primary-500 px-5 py-2 rounded-full text-lg">
                Vue.js
              </li>
              <li className="bg-primary-500 px-5 py-2 rounded-full text-lg">
                Nuxt
              </li>
              <li className="bg-primary-500 px-5 py-2 rounded-full text-lg">
                Tailwind CSS
              </li>
              <li className="bg-primary-500 px-5 py-2 rounded-full text-lg">
                GSAP
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="text-2xl mb-8">Tools & Platformen</h1>
            <ul className="flex items-start flex-wrap gap-3">
              <li className="bg-primary-500 px-5 py-2 rounded-full text-lg">
                GitHub
              </li>
              <li className="bg-primary-500 px-5 py-2 rounded-full text-lg">
                Vercel
              </li>
              <li className="bg-primary-500 px-5 py-2 rounded-full text-lg">
                Sanity
              </li>
              <li className="bg-primary-500 px-5 py-2 rounded-full text-lg">
                Figma
              </li>
              <li className="bg-primary-500 px-5 py-2 rounded-full text-lg">
                Photoshop
              </li>
              <li className="bg-primary-500 px-5 py-2 rounded-full text-lg">
                After Effects
              </li>
              <li className="bg-primary-500 px-5 py-2 rounded-full text-lg">
                inDesign
              </li>
              <li className="bg-primary-500 px-5 py-2 rounded-full text-lg">
                Illustrator
              </li>
            </ul>
          </div>
        </div>
      </section>
      <CTAWindow
        title="Bereit wenn du es bist"
        text="Schreib mir eine kurze Mail und ich melde mich bei dir.

"
      />
    </section>
  );
}

export default Page;
