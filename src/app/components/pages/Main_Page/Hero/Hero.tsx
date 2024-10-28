"use client";
import PrimaryButton from "@/app/components/shared/ui/PrimaryButton";
import React, { useLayoutEffect, useRef, useState } from "react";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import dynamic from "next/dynamic";

const HeroGridAnimation = dynamic(() => import("./HeroGridAnimation"), {
  ssr: false,
});

export default function Hero() {
  const [isSplit, setSplit] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const heroHeadline = useRef<HTMLHeadingElement>(null);
  const heroParagraph = useRef(null);
  const heroButton = useRef(null);

  useLayoutEffect(() => {
    const elements = document.getElementsByClassName("split");
    Array.from(elements).forEach((element) => {
      new SplitType(element as HTMLElement, {
        types: "words,chars",
      });
    });

    setSplit(true);

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
      if (heroHeadline && isSplit) {
        const heroIn = gsap.timeline({ delay: 2.2 });
        heroIn.from(heroHeadline.current!.querySelectorAll(".word"), {
          yPercent: 60,
          opacity: 0,
          stagger: 0.04,
          duration: 2,
          ease: "power4.out",
        });

        heroIn.from(
          heroParagraph.current,
          {
            yPercent: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out",
          },
          "<25%"
        );

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
    <section className="min-h-screen pt-12 sm:pt-48 overflow-x-clip">
      <div className="w-full left-0 absolute -top-1/4 flex justify-center">
        <div className="h-72 bg-primary-300 w-1/2 blur-[512px]"></div>
      </div>
      <div className="px-6 md:px-24 lg:px-48 text-center flex flex-col items-center justify-center min-h-[70vh]">
        <h1
          ref={heroHeadline}
          className="split font-humane font-bold uppercase leading-[90%] text-[24vw] sm:text-[18vw] md:text-[10vw] xl:text-[] 2xl:text-[12.5em]"
        >
          <span className="text-primary-400">Digitale Lösungen,</span>
          <br /> die dein Business voranbringen
        </h1>
        <p ref={heroParagraph} className="mt-8 text-2xl mb-16 opacity-80">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam facere
          id fuga possimus rem voluptate aliquid.
        </p>
        <div ref={heroButton}>
          <PrimaryButton title="Projekte anschauen" link="/projekte" />
        </div>
      </div>
      {isLargeScreen ? (
        <HeroGridAnimation />
      ) : (
        <video
          src="/path/to/your/video.mp4"
          autoPlay
          muted
          loop
          className="w-full h-auto"
        />
      )}
    </section>
  );
}
