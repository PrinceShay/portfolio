"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import PrimaryButton from "../../../shared/ui/PrimaryButton";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Hero2() {
  const container = useRef<HTMLDivElement>(null);
  const VideoContainer = useRef<HTMLDivElement>(null);
  const TextContainer = useRef<HTMLDivElement>(null);
  const NameRef = useRef<HTMLHeadingElement>(null);
  const TagRef = useRef<HTMLParagraphElement>(null);
  const VideoRef = useRef<HTMLVideoElement>(null);
  const HeroButton = useRef<HTMLDivElement>(null);

  const [isSplit, setSplit] = useState(false);

  useEffect(() => {
    const elements = document.getElementsByClassName("split");
    Array.from(elements).forEach((element) => {
      new SplitType(element as HTMLElement, { types: "words,chars" });
    });

    setSplit(true);
  }, []);

  useGSAP(
    () => {
      if (
        isSplit &&
        TagRef.current &&
        NameRef.current &&
        VideoRef &&
        VideoContainer &&
        TextContainer
      ) {
        gsap.registerPlugin(ScrollTrigger);
        const HeroTL = gsap.timeline({ delay: 1.45 });

        HeroTL.from(TextContainer.current, {
          scaleY: 0,
          duration: 1.6,
          ease: "power4.out",
        });

        HeroTL.from(
          TagRef.current.querySelectorAll(".word"),
          {
            yPercent: 30,
            opacity: 0,
            stagger: 0.05,
            rotate: 5,
            duration: 1,
            ease: "back.out(2)",
          },
          "<35%"
        );

        HeroTL.from(
          NameRef.current.querySelectorAll(".char"),
          {
            yPercent: 10,
            rotateX: 90,
            opacity: 0,
            stagger: { amount: 0.5, from: "random" },
            duration: 1.7,
            ease: "back.out(2)",
          },
          "<"
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
          HeroButton.current,
          {
            opacity: 0,
            yPercent: 70,
            duration: 2,
            ease: "power4.out",
          },
          "<75%"
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
    },
    { scope: container, dependencies: [isSplit] }
  );

  return (
    <section ref={container}>
      <div
        ref={TextContainer}
        className=" TextTransform origin-top md:pt-36 bg-primary-900 bg-opacity-80 backdrop-blur-xl relative z-20 min-h-[80vh] page_padding py-24 flex flex-col justify-end items-center text-center rounded-b-[3em]"
      >
        <p ref={TagRef} className="text-xl 2xl:text-2xl mb-8 split">
          Hey👋, mein Name ist
          <strong className="text-primary-500"> Jannis Röstel</strong>. Ich bin
        </p>
        <h1
          ref={NameRef}
          className="font-humane uppercase font-[700] text-[25vw] md:text-[20vw] xl:text-[14vw] 2xl:text-[9vw] leading-[85%]  split "
        >
          Web- und <br />
          Motion
          <wbr />
          designer
        </h1>
        <div className="mt-8 text-lg md:text-xl" ref={HeroButton}>
          <PrimaryButton title="Projekte anschauen" link="/projekte" />
        </div>
      </div>
      <div
        ref={VideoContainer}
        className="w-full h-screen relative bg-slate-900 overflow-hidden"
      >
        <video
          ref={VideoRef}
          playsInline
          muted
          autoPlay
          preload="auto"
          loop
          className={`w-full h-screen pointer-events-none touch-none absolute top-0 object-cover transition-opacity duration-500
          `}
        >
          <source src="/assets/videos/heroAnim.webm" type="video/webm" />
          <source src="/assets/videos/heroAnim.mp4" type="video/mp4" />
          <Image src={"/assets/images/Hero.jpg"} fill alt="Hero" />
        </video>
      </div>
    </section>
  );
}

export default Hero2;
