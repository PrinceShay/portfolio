import React, { Suspense } from "react";
import BlogComponent from "./components/pages/Main_Page/Blog/BlogComponent";
import CustomerBenefits from "./components/pages/Main_Page/CustomerBenefits/CustomerBenefits";
import Projects from "./components/pages/Main_Page/Projects/Projects";
import Preloader from "./components/shared/Preloader";
import Hero2 from "./components/pages/Main_Page/Hero/Hero2";
import CTAWindow from "./components/shared/ui/CTAWindow";
import Service2 from "./components/pages/Main_Page/Service/Service2";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    metadataBase: new URL("https://www.jannisroestel.de"),
    title: `Jannis Röstel - Webdesign & Webentwicklung in Karlsruhe`,
    description:
      "Professionelles Webdesign und Webentwicklung in Karlsruhe – spezialisiert auf React, Next.js und Webflow. Jannis Röstel bietet maßgeschneiderte digitale Lösungen, von modernen Webseiten bis hin zu beeindruckendem Motiondesign. Animierte Logos, Werbung und Reels, die deine Marke ins Rampenlicht rücken. Gemeinsam setzen wir deine kreativen Visionen in die Tat um.",
    openGraph: {
      title: `Jannis Röstel - Webdesign & Webentwicklung in Karlsruhe`,
      description:
        "Professionelles Webdesign und Webentwicklung in Karlsruhe – spezialisiert auf React, Next.js und Webflow. Jannis Röstel bietet maßgeschneiderte digitale Lösungen, von modernen Webseiten bis hin zu beeindruckendem Motiondesign. Animierte Logos, Werbung und Reels, die deine Marke ins Rampenlicht rücken. Gemeinsam setzen wir deine kreativen Visionen in die Tat um.",
      images: [
        {
          url: "/assets/images/Hero.jpg",
          alt: `Jannis Röstel - Webdesign & Webentwicklung in Karlsruhe`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Jannis Röstel - Webdesign & Webentwicklung in Karlsruhe`,
      description:
        "Professionelles Webdesign und Webentwicklung in Karlsruhe – spezialisiert auf React, Next.js und Webflow. Jannis Röstel bietet maßgeschneiderte digitale Lösungen, von modernen Webseiten bis hin zu beeindruckendem Motiondesign. Animierte Logos, Werbung und Reels, die deine Marke ins Rampenlicht rücken. Gemeinsam setzen wir deine kreativen Visionen in die Tat um.",
      images: "",
    },
  };
}

export default function Home() {
  return (
    <main className="">
      <Preloader />
      <Hero2 />
      <Projects />
      <CustomerBenefits />
      <Service2 />
      <CTAWindow
        text="Schreib mir eine kurze Mail und ich melde mich bei dir."
        title="Bereit, wenn du es bist"
      />
      <BlogComponent />
    </main>
  );
}
