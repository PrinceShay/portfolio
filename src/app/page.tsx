import React from "react";
import BlogComponent from "./components/pages/Main_Page/Blog/BlogComponent";
import CustomerBenefits from "./components/pages/Main_Page/CustomerBenefits/CustomerBenefits";
import Hero from "./components/pages/Main_Page/Hero";
import Projects from "./components/pages/Main_Page/Projects/Projects";
import Service from "./components/pages/Main_Page/Service/Service";
import CTA from "./components/shared/ui/CTA";
import Preloader from "./components/shared/Preloader";
import Hero2 from "./components/pages/Main_Page/Hero2";

export default function Home() {
  return (
    <main className="">
      <Preloader />
      <Hero2 />
      <Projects />
      <CustomerBenefits />
      <BlogComponent />
      <Service />
      <CTA />
    </main>
  );
}
