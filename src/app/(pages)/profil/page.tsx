import CV from "@/app/components/pages/Profile/CV";
import React from "react";
import CTAWindow from "@/app/components/shared/ui/CTAWindow";
import { Metadata } from "next";
import Biography from "@/app/components/pages/Profile/Biography";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
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
    <section className="min-h-screen pt-64 px-6 md:px-24 lg:px-48 ">
      <h1 className="Section_Headline">Profil</h1>
      <Biography />

      <div className="grid grid-cols-12">
        <CV />
      </div>
      <CTAWindow
        title="Bereit wenn du es bist"
        text="Schreib mir eine kurze Mail und ich melde mich bei dir.

"
      />
    </section>
  );
}

export default Page;
