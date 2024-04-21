"use client";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function CTA() {
  const container = useRef(null);
  const light = useRef(null);

  useGSAP(
    () => {
      gsap.from(light.current, {
        scale: 0.3,
        opacity: 0.5,
        scrollTrigger: {
          trigger: container.current,
          toggleActions: "play pause resume reset",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }); // <-- automatically reverted
    },
    { scope: container }
  ); // <-- scope is for selector text (optional)
  return (
    <section
      ref={container}
      className="relative min-h-screen w-full px-48 py-24 bg-primary-900 flex items-center justify-center flex-col"
    >
      <div className="flex items-center justify-center flex-col z-20">
        <h1 className="Section_Headline text-center">
          Mach jetzt irgendwas.
          <br /> Wirklich irgendwas.
        </h1>
        <p className="text-xl mt-6">
          An independent creative agency for all your branding, advertising, and
          film production needs.
        </p>

        <PrimaryButton link="/blog" title="Alle Beiträge anschauen" />
      </div>
      <div ref={light} className="Highlight_CTA bg-primary-700 top"></div>
    </section>
  );
}

export default CTA;
