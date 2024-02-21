import Hero from "./components/Hero";
import Projects from "./components/Projects/Projects";
import Service from "./components/Service";

export default function Home() {
  return (
    <main className="ml-12 mr-12">
      <Hero />
      <Projects />
      <Service />
    </main>
  );
}
