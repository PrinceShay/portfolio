"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import PrimaryButton from "./PrimaryButton";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonSecondary from "../Navbar/ButtonSecondary";

function CTAWindow({ title, text }: { title: string; text: string }) {
  const headline = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const CTAcontainer = useRef<HTMLDivElement>(null);

  const [isSplit, setSplit] = useState(false);

  useLayoutEffect(() => {
    const elements = document.getElementsByClassName("split");
    Array.from(elements).forEach((element) => {
      new SplitType(element as HTMLElement, { types: "words,chars" });
    });

    setSplit(true);
  }, []);

  useGSAP(
    () => {
      if (isSplit && headline.current && textRef.current) {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(headline.current.querySelectorAll(".char"), {
          yPercent: 30,
          opacity: 0,
          rotateX: 80,
          stagger: 0.05,
          rotate: 5,
          duration: 1.4,
          scrollTrigger: {
            trigger: headline.current,
            start: "top 90%",
            scrub: true,
            end: "top 30%",
          },
          ease: "back.out(2)",
        });

        gsap.from(textRef.current.querySelectorAll(".line"), {
          yPercent: 30,
          opacity: 0,
          stagger: 0.05,
          rotate: 5,
          rotateX: 80,
          duration: 1.4,
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
            scrub: true,
            end: "top 30%",
          },
          ease: "back.out(2)",
        });
      }

      gsap.from(CTAcontainer.current, {
        scaleX: 0.5,
        scrollTrigger: {
          trigger: CTAcontainer.current,
          start: "top 100%",
          scrub: true,
          end: "top 50%",
        },
      });
    },
    { scope: CTAcontainer, dependencies: [isSplit] }
  );

  return (
    <section className="py-8 md:py-32 page_padding">
      <div
        ref={CTAcontainer}
        className="py-16 md:py-64 px-12 flex-row justify-center items-center bg-primary-500 w-full max-w-[1600px] md:min-h-48 mx-auto rounded-2xl"
      >
        <div className="TextTransform text-center ">
          <h1
            ref={headline}
            className=" max-w-5xl mx-auto split Section_Headline "
          >
            {title}
          </h1>
          <p ref={textRef} className="split text-2xl mt-6">
            {text}
          </p>
        </div>
        <div className="mx-auto flex justify-center mt-16 text-lg md:text-xl">
          <ButtonSecondary
            inverted={true}
            link="mailto:j.roestel@jannisroestel.de"
            firstTitle="Jetzt kontaktieren"
          />
        </div>
      </div>
    </section>
  );
}

export default CTAWindow;
