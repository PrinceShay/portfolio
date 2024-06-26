"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import SplitType from "split-type";

function Hero({
  title,
  introText,
  titleVideo,
}: {
  title: string;
  introText: string;
  titleVideo: string;
}) {
  const NameRef = useRef<HTMLHeadingElement>(null);
  const introTextRef = useRef<HTMLParagraphElement>(null);
  const HeaderRef = useRef(null);

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
      var tl = gsap.timeline({});
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
          stagger: 0.05,
          rotate: 5,
          duration: 1.4,
          ease: "back.out(2)",
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
        <div className="px-6 md:px-24 lg:px-48 col-start-1 col-end-13 flex flex-col items-center justify-center">
          <p
            ref={NameRef}
            className="text-2xl block text-center text-primary font-semibold tracking-wide uppercase split"
          >
            {title}
          </p>
          <h1
            ref={introTextRef}
            className="mt-8 block text-center Section_Headline split"
          >
            {introText}
          </h1>
        </div>
      </header>
      <div className="w-full h-screen relative">
        <video
          className="w-full h-full object-cover absolute top-0 object-top"
          src={titleVideo}
          autoPlay
          playsInline
          muted
          loop
        ></video>
      </div>
    </>
  );
}

export default Hero;
