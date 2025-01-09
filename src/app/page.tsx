import dynamic from "next/dynamic";
import { Metadata } from "next";
import Hero from "./components/pages/Main_Page/Hero/Hero";

// Lazy-loaded components
const About = dynamic(
  () => import("./components/pages/Main_Page/about/About"),
  {
    loading: () => <p>Loading About...</p>,
  }
);

const CustomerBenefits = dynamic(
  () =>
    import("./components/pages/Main_Page/CustomerBenefits/CustomerBenefits"),
  { loading: () => <p>Loading Benefits...</p> }
);

const Service2 = dynamic(
  () => import("./components/pages/Main_Page/Service/Service2"),
  {
    loading: () => <p>Loading Services...</p>,
  }
);

const Projects = dynamic(
  () => import("./components/pages/Main_Page/Projects/Projects"),
  {
    loading: () => <p>Loading Projects...</p>,
  }
);

const CTAWindow = dynamic(() => import("./components/shared/ui/CTAWindow"), {
  loading: () => <p>Loading Call to Action...</p>,
});

const BlogComponent = dynamic(
  () => import("./components/pages/Main_Page/Blog/BlogComponent"),
  {
    loading: () => <p>Loading Blog...</p>,
  }
);

const Faq = dynamic(() => import("./components/pages/Main_Page/Faq/Faq"), {
  loading: () => <p>Loading FAQ...</p>,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jannisroestel.de"),
  title: `Jannis Röstel - Webdesign & Webentwicklung in Karlsruhe`,
  description:
    "Professionelles Webdesign und Webentwicklung in Karlsruhe – spezialisiert auf React, Next.js und Webflow. Jannis Röstel bietet massgeschneiderte digitale Lösungen, von modernen Webseiten bis hin zu beeindruckendem Motiondesign. Animierte Logos, Werbung und Reels, die deine Marke ins Rampenlicht rücken. Gemeinsam setzen wir deine kreativen Visionen in die Tat um.",
  openGraph: {
    title: `Jannis Röstel - Webdesign & Webentwicklung in Karlsruhe`,
    description:
      "Professionelles Webdesign und Webentwicklung in Karlsruhe – spezialisiert auf React, Next.js und Webflow. Jannis Röstel bietet massgeschneiderte digitale Lösungen, von modernen Webseiten bis hin zu beeindruckendem Motiondesign. Animierte Logos, Werbung und Reels, die deine Marke ins Rampenlicht rücken. Gemeinsam setzen wir deine kreativen Visionen in die Tat um.",
    images: [
      {
        url: "/assets/images/OpenGraphImage.jpg",
        alt: `Jannis Röstel - Webdesign & Webentwicklung in Karlsruhe`,
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Jannis Röstel - Webdesign & Webentwicklung in Karlsruhe`,
    description:
      "Professionelles Webdesign und Webentwicklung in Karlsruhe – spezialisiert auf React, Next.js und Webflow. Jannis Röstel bietet massgeschneiderte digitale Lösungen, von modernen Webseiten bis hin zu beeindruckendem Motiondesign. Animierte Logos, Werbung und Reels, die deine Marke ins Rampenlicht rücken.",
    images: "",
  },
};

export default function Home() {
  return (
    <main>
      {/* Critical component */}
      <Hero />

      {/* Lazy-loaded components */}
      <About />
      <CustomerBenefits />
      <Projects />
      <Service2 />
      <CTAWindow
        text="Schreib mir eine kurze Mail und ich melde mich bei dir."
        title="Bereit, wenn du es bist"
      />
      <BlogComponent />
      <Faq />
    </main>
  );
}
