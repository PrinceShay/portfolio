"use client";
import PrimaryButton from "@/app/components/shared/ui/PrimaryButton";
import React, { useLayoutEffect, useRef, useState } from "react";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import dynamic from "next/dynamic";
import Video from "./Video";
import ButtonSecondary from "@/app/components/shared/Navbar/ButtonSecondary";

const HeroGridAnimation = dynamic(() => import("./HeroGridAnimation"), {
  ssr: false,
});

export default function Hero() {
  const [isSplit, setSplit] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const heroHeadline = useRef<HTMLHeadingElement>(null);
  const heroParagraph = useRef(null);
  const heroButton = useRef(null);
  const heroHighlight = useRef(null);
  const heroSection = useRef(null);

  useLayoutEffect(() => {
    // Function to check screen size
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 640);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(
    () => {
      const elements = document.getElementsByClassName("split");
      Array.from(elements).forEach((element) => {
        new SplitType(element as HTMLElement, {
          types: "words,chars",
        });
      });

      setSplit(true);
      if (heroHeadline && isSplit) {
        gsap.set("#heroTextContainer", { opacity: 1 });
        const heroIn = gsap.timeline({});
        heroIn.from(heroHeadline.current!.querySelectorAll(".word"), {
          yPercent: 60,
          opacity: 0,
          stagger: 0.04,
          duration: 2,
          ease: "power4.out",
        });

        // heroIn.from(
        //   heroParagraph.current,
        //   {
        //     yPercent: 100,
        //     opacity: 0,
        //     duration: 1.5,
        //     ease: "power4.out",
        //   },
        //   "<25%"
        // );

        heroIn.from(
          heroButton.current,
          {
            yPercent: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out",
          },
          "<"
        );
      }
    },
    { dependencies: [isSplit] }
  );

  return (
    <section
      ref={heroSection}
      className="min-h-screen pt-12 sm:pt-48 overflow-x-clip"
    >
      <div className="w-full left-0 absolute -top-1/4 flex justify-center">
        <div
          ref={heroHighlight}
          className="h-72 bg-primary-300 w-1/2 blur-[512px]"
        ></div>
      </div>
      <div
        id="heroTextContainer"
        className="page_padding text-center flex flex-col items-center justify-center min-h-[70vh] opacity-0"
      >
        <h1
          ref={heroHeadline}
          className="split font-humane font-bold mb-16 uppercase leading-[90%] text-[24vw] sm:text-[18vw] md:text-[10vw] xl:text-[] 2xl:text-[12.5em]"
        >
          <span className="text-primary-400">Digitale Lösungen,</span>
          <br /> die dein Business voranbringen
        </h1>
        {/* <p ref={heroParagraph} className="mt-8 text-2xl mb-16 opacity-80">
          Hey🚀✌, mein Name ist{" "}
          <span className="font-bold text-primary-300"> Jannis Röstel</span>.
          Ich bin{" "}
          <span className="font-bold text-primary-300">
            Web- und Motiondesigner{" "}
          </span>
          aus Karlsruhe.
        </p> */}
        <div
          className="flex flex-col md:flex-row items-center gap-4"
          ref={heroButton}
        >
          <PrimaryButton title="Projekte anschauen" link="/projekte" />
          <ButtonSecondary firstTitle="Beratung vereinbaren" link="/kontakt" />
        </div>
      </div>
      {isLargeScreen ? <HeroGridAnimation /> : <Video />}
    </section>
  );
}
