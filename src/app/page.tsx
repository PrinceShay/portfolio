import BlogComponent from "./components/Main_Page/Blog/BlogComponent";
import CustomerBenefits from "./components/Main_Page/CustomerBenefits/CustomerBenefits";
import Hero from "./components/Main_Page/Hero";
import Projects from "./components/Main_Page/Projects/Projects";
import CTA from "./components/shared/ui/CTA";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <Projects />
      <CustomerBenefits />
      <BlogComponent />
      <CTA />
    </main>
  );
}
