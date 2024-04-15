import BlogComponent from "./components/Blog/BlogComponent";
import CustomerBenefits from "./components/CustomerBenefits/CustomerBenefits";
import Hero from "./components/Hero";
import Projects from "./components/Projects/Projects";
export default function Home() {
  return (
    <main className="">
      <Hero />
      <Projects />
      <CustomerBenefits />
      <BlogComponent />
    </main>
  );
}
