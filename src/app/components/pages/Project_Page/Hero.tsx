"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import SplitType from "split-type";

function Hero({
  title,
  heroText,
  titleVideo,
  publishDate,
}: {
  title: string;
  heroText: string;
  titleVideo: string;
  publishDate: string;
}) {
  const NameRef = useRef<HTMLHeadingElement>(null);
  const introTextRef = useRef<HTMLParagraphElement>(null);
  const HeaderRef = useRef(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const [isSplit, setSplit] = useState(false);

  useEffect(() => {
    const elements = document.getElementsByClassName("split");
    Array.from(elements).forEach((element) => {
      new SplitType(element as HTMLElement, { types: "lines,words,chars" });
    });

    setSplit(true);
  }, []);

  useGSAP(() => {
    if (isSplit && NameRef.current && introTextRef.current) {
      const tl = gsap.timeline({});
      tl.from(NameRef.current.querySelectorAll(".char"), {
        yPercent: 30,
        opacity: 0,
        rotateX: 80,
        stagger: 0.05,
        rotate: 5,
        duration: 1.4,
        ease: "back.out(2)",
      });

      tl.from(
        introTextRef.current.querySelectorAll(".char"),
        {
          yPercent: 30,
          opacity: 0,
          rotateX: 80,
          stagger: 0.01,
          rotate: 5,
          duration: 1.4,
          ease: "back.out(2)",
        },
        "<25%"
      );

      tl.from(
        infoRef.current,
        {
          opacity: 0,
          ease: "power4.out",
          duration: 1.4,
          y: 30,
        },
        "<25%"
      );

      tl.from(
        HeaderRef.current,
        {
          height: "100vh",
          ease: "power4.out",
          duration: 1.5,
        },
        "<80%"
      );
    }
  }, [isSplit]);

  return (
    <>
      <header ref={HeaderRef} className="min-h-[80vh] grid grid-cols-12">
        <div className="page_padding py-12 col-start-1 col-end-13 flex flex-col items-center justify-center text-center">
          <p
            ref={NameRef}
            className="text-2xl block text-center text-primary font-semibold tracking-wide uppercase split"
          >
            {title}
          </p>
          <h1
            ref={introTextRef}
            className="mt-8 block text-center font-humane text-[5rem] md:text-[14rem] uppercase font-bold leading-none split"
          >
            {heroText}
          </h1>

          <div ref={infoRef} className="flex flex-col sm:flex-row gap-16  mt-8">
            <div className=" items-center">
              <p className="opacity-50 mb-4 text-lg uppercase">Zeitraum</p>
              <p className="text-xl max-w-48">{publishDate}</p>
            </div>
          </div>
        </div>
      </header>
      <div className="md:w-full md:h-screen relative">
        <video
          className="w-full md:h-full md:object-cover md:absolute md:top-0 md:object-top"
          autoPlay
          playsInline
          muted
          loop
        >
          <source src={titleVideo} type="video/webm" />
        </video>
      </div>
    </>
  );
}

export default Hero;
