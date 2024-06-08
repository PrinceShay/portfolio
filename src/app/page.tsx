import React from "react";
import BlogComponent from "./components/Main_Page/Blog/BlogComponent";
import CustomerBenefits from "./components/Main_Page/CustomerBenefits/CustomerBenefits";
import Hero from "./components/Main_Page/Hero";
import Projects from "./components/Main_Page/Projects/Projects";
import Service from "./components/Main_Page/Service/Service";
import CTA from "./components/shared/ui/CTA";
import Preloader from "./components/shared/Preloader";

export default function Home() {
  return (
    <main className="">
      <Preloader />
      <Hero />
      <Projects />
      <CustomerBenefits />
      <BlogComponent />
      <Service />
      <CTA />
    </main>
  );
}
