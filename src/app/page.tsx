import React from "react";
import BlogComponent from "./components/pages/Main_Page/Blog/BlogComponent";
import CustomerBenefits from "./components/pages/Main_Page/CustomerBenefits/CustomerBenefits";
import Hero from "./components/pages/Main_Page/Hero";
import Projects from "./components/pages/Main_Page/Projects/Projects";
import Service from "./components/pages/Main_Page/Service/Service";
import CTA from "./components/shared/ui/CTA";
import Preloader from "./components/shared/Preloader";
import Hero2 from "./components/pages/Main_Page/Hero2";
import CTAWindow from "./components/shared/ui/CTAWindow";

export default function Home() {
  return (
    <main className="">
      <Preloader />
      <Hero2 />
      <Projects />
      <CustomerBenefits />
      <CTAWindow
        text="Schreib mir eine kurze Mail und ich melde mich bei dir."
        title="Bereit, wenn du es bist"
      />
      <BlogComponent />
      <Service />
      <CTA />
    </main>
  );
}
