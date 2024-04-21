"use client";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedText from "../../Functions/AnimatedText";

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
      className="relative min-h-screen w-full px-48  flex items-center justify-center flex-col"
    >
      <video
        className=" z-0 absolute w-full h-full object-cover"
        src="/assets/videos/cow.webm"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute w-full h-full bg-primary-800 mix-blend-multiply opacity-50"></div>

      <div className="overflow-hidden relative py-36 rounded-3xl bg-primary-500 bg-opacity-0  w-full h-full flex items-center justify-center flex-col">
        <AnimatedText
          text="Mach jetzt irgendwas. Wirklich irgendwas."
          className="Section_Headline text-center z-20 max-w-[1500]"
          triggerStart="top 90%"
          animationType="fadeUp"
          as="h1"
        />

        <AnimatedText
          text="An independent creative agency for all your branding, advertising, and
          film production needs."
          className="text-xl mt-6 z-20"
          triggerStart="top 90%"
          animationType="lineStagger"
          as="div"
        />

        <PrimaryButton link="/blog" title="Alle Beiträge anschauen" />
      </div>
    </section>
  );
}

export default CTA;
