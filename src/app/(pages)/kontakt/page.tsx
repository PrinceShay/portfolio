import ContactForm from "@/app/components/pages/contact/ContactForm";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: `Kontakt – Jannis Röstel | Designer & Entwickler aus Karlsruhe`,
    description:
      "Nimm Kontakt mit Jannis Röstel auf. Fülle das Kontaktformular aus und starte dein nächstes kreatives Projekt mit einem erfahrenen Designer und Entwickler.",
    openGraph: {
      title: `Kontakt – Jannis Röstel | Designer & Entwickler aus Karlsruhe`,
      description:
        "Nimm Kontakt mit Jannis Röstel auf. Fülle das Kontaktformular aus und starte dein nächstes kreatives Projekt mit einem erfahrenen Designer und Entwickler.",
      images: [
        {
          url: "/assets/images/Hero.jpg",
          alt: `Kontakt – Jannis Röstel | Designer & Entwickler aus Karlsruhe`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Kontakt – Jannis Röstel | Designer & Entwickler aus Karlsruhe`,
      description:
        "Nimm Kontakt mit Jannis Röstel auf. Fülle das Kontaktformular aus und starte dein nächstes kreatives Projekt mit einem erfahrenen Designer und Entwickler.",
      images: "",
    },
  };
}

function page() {
  return (
    <section className="min-h-screen pt-36 flex flex-col justify-center items-center px-6 md:px-24 lg:px-48 py-24">
      <h1 className="Section_Headline font-bold text-center">
        Kontaktiere mich
      </h1>
      <p className="text-xl mt-6 mb-16 text-center">
        Fülle einfach das Formular aus und ich werde mich in Kürze bei dir
        melden.
      </p>
      <ContactForm />
    </section>
  );
}

export default page;
