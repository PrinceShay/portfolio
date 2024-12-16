import ContactForm from "@/app/components/pages/contact/ContactForm";
import ContactGrid from "@/app/components/pages/contact/ContactGrid";
import Header from "@/app/components/pages/contact/Header";
import HugeHeadline from "@/app/components/shared/ui/HugeHeadline";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
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

function page() {
  return (
    <section className="min-h-screen pt-48 flex flex-col justify-center items-center page_padding py-24">
      <Header />
      <ContactGrid />
    </section>
  );
}

export default page;
