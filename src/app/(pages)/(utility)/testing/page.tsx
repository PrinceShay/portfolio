import BlogComponent from "@/app/components/pages/Main_Page/Blog/BlogComponent";
import CustomerBenefits from "@/app/components/pages/Main_Page/CustomerBenefits/CustomerBenefits";
import Hero2 from "@/app/components/pages/Main_Page/Hero/Hero2";
import Projects from "@/app/components/pages/Main_Page/Projects/Projects";
import Service2 from "@/app/components/pages/Main_Page/Service/Service2";
import Preloader from "@/app/components/shared/Preloader";
import CTAWindow from "@/app/components/shared/ui/CTAWindow";
import React, { Suspense } from "react";

export default function page() {
  return (
    <main className="">
      <Preloader />
      <Hero2 />
      {/* <Projects /> */}
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
