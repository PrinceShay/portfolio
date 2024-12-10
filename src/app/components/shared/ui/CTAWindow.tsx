"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import PrimaryButton from "./PrimaryButton";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonSecondary from "../Navbar/ButtonSecondary";
import Image from "next/image"; // Importiere das Image Modul

function CTAWindow({ title, text }: { title: string; text: string }) {
  const headline = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const CTAcontainer = useRef<HTMLDivElement>(null);

  // Neue Refs für die Bildspalten
  const ctaParent = useRef(null);
  const firstColumnRef = useRef(null);
  const secondColumnRef = useRef(null);
  const thirdColumnRef = useRef(null);
  const fourthColumnRef = useRef(null); // Vierte Spalte
  const fifthColumnRef = useRef(null); // Fünfte Spalte hinzugefügt

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

      // Animation für die Bildspalten hinzufügen
      if (
        ctaParent.current &&
        firstColumnRef.current &&
        secondColumnRef.current &&
        thirdColumnRef.current &&
        fourthColumnRef.current &&
        fifthColumnRef.current // Fünfte Spalte berücksichtigt
      ) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ctaParent.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        tl.to(firstColumnRef.current, {
          y: "-20%",
          ease: "none",
        });

        tl.to(
          secondColumnRef.current,
          {
            y: "20%",
            ease: "none",
          },
          "<"
        );

        tl.to(
          thirdColumnRef.current,
          {
            y: "-20%",
            ease: "none",
          },
          "<"
        );

        tl.to(
          fourthColumnRef.current,
          {
            y: "20%",
            ease: "none",
          },
          "<"
        );

        tl.to(
          fifthColumnRef.current,
          {
            y: "-20%",
            ease: "none",
          },
          "<"
        );

        tl.from(
          ctaParent.current,
          {
            rotateX: 20,
            ease: "none",
          },
          "<"
        );
      }
    },
    { scope: CTAcontainer, dependencies: [isSplit] }
  );

  return (
    <section className="py-8 page_padding relative">
      <div
        ref={CTAcontainer}
        className="relative py-16 px-12 flex-row justify-center items-end bg-primary-500 w-full max-w-[1600px] md:min-h-48 mx-auto rounded-2xl overflow-hidden"
      >
        {/* Bildgrid Container */}
        <div
          style={{ perspective: "1500px" }}
          className="w-full h-full absolute left-0 top-0 z-10 rounded-2xl overflow-hidden flex items-center justify-center"
        >
          <div
            style={{
              transform: "rotateY(12deg) rotateX(56deg) rotateY(347deg)",
            }}
            className="flex min-w-[150%] h-full items-center justify-center gap-4"
            ref={ctaParent}
          >
            {/* Erste Spalte */}
            <div
              ref={firstColumnRef}
              className="relative flex flex-col basis-1/5 shrink-0 gap-4"
            >
              {/* Bilder für die erste Spalte */}
              <Image
                src="/assets/images/main/Benefits/wg (1).jpg"
                width={500}
                height={600}
                className="object-cover w-full h-full shadow-lg rounded-xl"
                alt="Screenshot von Wessa Gruppe Webseite"
                sizes="20vw"
              />
              <Image
                src="/assets/images/main/Benefits/khk (2).jpg"
                width={500}
                height={600}
                className="object-cover w-full h-full shadow-lg rounded-xl"
                alt="Screenshot von Karl-Heinz Krause Webseite"
                sizes="20vw"
              />
              {/* Weitere Bilder hinzufügen */}
              <Image
                src="/assets/images/main/Benefits/hf (1).jpg"
                width={500}
                height={600}
                className="object-cover w-full h-full rounded-xl"
                alt="Screenshot von HomeFinder Webseite"
                sizes="20vw"
              />
            </div>

            {/* Zweite Spalte */}
            <div
              ref={secondColumnRef}
              className="relative flex flex-col basis-1/5 gap-4 mt-48"
            >
              {/* Bilder für die zweite Spalte */}
              <Image
                src="/assets/images/main/Benefits/hf (1).jpg"
                width={500}
                height={600}
                className="object-cover w-full h-full shadow-lg rounded-xl"
                alt="Screenshot von HomeFinder Webseite"
                sizes="20vw"
              />
              <Image
                src="/assets/images/main/Benefits/hf (3).jpg"
                width={500}
                height={600}
                className="object-cover w-full h-full shadow-lg rounded-xl"
                alt="Screenshot von HomeFinder Webseite"
                sizes="20vw"
              />
              <Image
                src="/assets/images/main/Benefits/wg (2).jpg"
                width={500}
                height={600}
                className="object-cover w-full h-full rounded-xl "
                alt="Screenshot von Wessa Gruppe Webseite"
                sizes="20vw"
              />
            </div>

            {/* Dritte Spalte */}
            <div
              ref={thirdColumnRef}
              className="relative flex flex-col basis-1/5 gap-4"
            >
              {/* Bilder für die dritte Spalte */}
              <Image
                src="/assets/images/main/Benefits/khk (3).jpg"
                width={500}
                height={600}
                className="object-cover w-full h-full shadow-lg rounded-xl"
                alt="Screenshot von Karl-Heinz Krause Webseite"
                sizes="20vw"
              />
              <Image
                src="/assets/images/main/Benefits/wg (1).jpg"
                width={500}
                height={600}
                className="object-cover w-full h-full rounded-xl"
                alt="Screenshot von Wessa Gruppe Webseite"
                sizes="20vw"
              />
              <Image
                src="/assets/images/main/Benefits/hf (2).jpg"
                width={500}
                height={600}
                className="object-cover w-full h-full shadow-lg rounded-xl"
                alt="Screenshot von HomeFinder Webseite"
                sizes="20vw"
              />
            </div>

            {/* Vierte Spalte */}
            <div
              ref={fourthColumnRef}
              className="relative flex flex-col basis-1/5 gap-4 mt-48"
            >
              {/* Bilder für die vierte Spalte */}
              <Image
                src="/assets/images/main/Benefits/wg (2).jpg"
                width={500}
                height={600}
                className="object-cover w-full h-full"
                alt="Screenshot von Wessa Gruppe Webseite"
                sizes="20vw"
              />
              <Image
                src="/assets/images/main/Benefits/khk (1).jpg"
                width={500}
                height={600}
                className="object-cover w-full h-full"
                alt="Screenshot von Karl-Heinz Krause Webseite"
                sizes="20vw"
              />
              <Image
                src="/assets/images/main/Benefits/hf (4).jpg"
                width={500}
                height={600}
                className="object-cover w-full h-full"
                alt="Screenshot von HomeFinder Webseite"
                sizes="20vw"
              />
            </div>

            {/* Fünfte Spalte */}
            <div
              ref={fifthColumnRef}
              className="relative flex flex-col basis-1/5 gap-4"
            >
              {/* Bilder für die fünfte Spalte */}
              <Image
                src="/assets/images/main/Benefits/khk (1).jpg"
                width={500}
                height={600}
                className="object-cover w-full h-full"
                alt="Screenshot von Karl-Heinz Krause Webseite"
                sizes="20vw"
              />
              <Image
                src="/assets/images/main/Benefits/hf (2).jpg"
                width={500}
                height={600}
                className="object-cover w-full h-full"
                alt="Screenshot von HomeFinder Webseite"
                sizes="20vw"
              />
              <Image
                src="/assets/images/main/Benefits/wg (1).jpg"
                width={500}
                height={600}
                className="object-cover w-full h-full"
                alt="Screenshot von Wessa Gruppe Webseite"
                sizes="20vw"
              />
            </div>
          </div>
          {/* Abdunkelungs-Div hinzufügen */}
          <div className="absolute inset-0 bg-primary-900 opacity-80"></div>
        </div>

        {/* Inhalt über dem Bildgrid */}
        <div className="relative z-20">
          <div className="TextTransform text-center">
            <h1
              ref={headline}
              className="max-w-5xl mx-auto split font-humane text-[6em] sm:text-[14em] font-bold uppercase leading-none"
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
      </div>
    </section>
  );
}

export default CTAWindow;
