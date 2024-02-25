import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects/Projects";
import Service from "./components/Service";

export default function Home() {
  return (
    <main className="px-12">
      <Hero />
      <Projects />
      <Service />
      <Introduction />
    </main>
  );
}
