"use client";
import React from "react";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import PrimaryButton from "../../shared/ui/PrimaryButton";

function Hero2() {
  const container = useRef<HTMLDivElement>(null);
  const VideoContainer = useRef<HTMLDivElement>(null);
  const TextContainer = useRef<HTMLDivElement>(null);
  const NameRef = useRef<HTMLHeadingElement>(null);
  const TagRef = useRef<HTMLParagraphElement>(null);
  const VideoRef = useRef<HTMLVideoElement>(null);

  const [isSplit, setSplit] = useState(false);

  useEffect(() => {
    const elements = document.getElementsByClassName("split");
    Array.from(elements).forEach((element) => {
      new SplitType(element as HTMLElement, { types: "lines,words,chars" });
    });

    setSplit(true);
  }, []);

  useGSAP(() => {
    if (
      isSplit &&
      TagRef.current &&
      NameRef.current &&
      VideoRef &&
      VideoContainer &&
      TextContainer
    ) {
      const HeroTL = gsap.timeline({ delay: 1.8 });

      HeroTL.from(TagRef.current.querySelectorAll(".word"), {
        yPercent: 30,
        opacity: 0,
        stagger: 0.05,
        rotate: 5,
        duration: 1,
        ease: "back.out(2)",
      });

      HeroTL.from(
        NameRef.current.querySelectorAll(".char"),
        {
          yPercent: 30,
          opacity: 0,
          stagger: 0.05,
          rotate: 5,
          duration: 1,
          ease: "back.out(2)",
        },
        "<25%"
      );
      HeroTL.from(
        VideoContainer.current,
        {
          yPercent: -80,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "0 0",
            end: "100% 100%",
            scrub: true,
          },
        },
        "<"
      );

      HeroTL.to(
        TextContainer.current,
        {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "0 0",
            end: "100% 100%",
            scrub: true,
          },
        },
        "<"
      );

      HeroTL.from(
        VideoRef.current,
        {
          scale: 1.2,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "0 0",
            end: "100% 100%",
            scrub: true,
          },
        },
        "<"
      );
    }
  }, [isSplit]);

  return (
    <section ref={container}>
      <div
        ref={TextContainer}
        className=" md:pt-36 bg-primary-900 bg-opacity-80 backdrop-blur-xl relative z-20 min-h-[80vh] px-6 md:px-24 lg:px-48 py-24 flex flex-col justify-end items-center text-center rounded-b-[3em]"
      >
        <p ref={TagRef} className="text-xl md:text-2xl mb-8 split">
          Hey👋, mein Name ist
          <strong className="text-primary-500"> Jannis Röstel</strong>. Ich bin
        </p>
        <h1 ref={NameRef} className="Section_Headline split">
          Web- und <br />
          Motion
          <wbr />
          designer
        </h1>
        <PrimaryButton link={"/projekte"} title={"Text"} />
      </div>
      <div
        ref={VideoContainer}
        className="w-full h-screen relative bg-slate-900 overflow-hidden"
      >
        <video
          ref={VideoRef}
          autoPlay
          playsInline
          muted
          loop
          className="w-full h-screen absolute top-0 object-cover"
        >
          <source src="/assets/videos/meow.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Hero2;
