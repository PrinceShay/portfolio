import React from "react";
import BlogComponent from "./components/pages/Main_Page/Blog/BlogComponent";
import CustomerBenefits from "./components/pages/Main_Page/CustomerBenefits/CustomerBenefits";
import Projects from "./components/pages/Main_Page/Projects/Projects";
import Preloader from "./components/shared/Preloader";
import Hero2 from "./components/pages/Main_Page/Hero2";
import CTAWindow from "./components/shared/ui/CTAWindow";
import Service2 from "./components/pages/Main_Page/Service/Service2";

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
