"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/all";

export default function About() {
  const [isSplit, setSplit] = useState(false);

  const ScrollText = useRef<HTMLParagraphElement>(null);
  const ScrollTextContainer = useRef<HTMLDivElement>(null);
  const aboutSection = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 800);
  });

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      new SplitType(ScrollText.current!, { types: "words,chars" });

      setSplit(true);

      if (isSplit && ScrollText.current && ScrollTextContainer.current) {
        gsap.fromTo(
          ScrollText.current.querySelectorAll(".char"),
          {
            opacity: 0.2,
          },
          {
            opacity: 1,
            stagger: 0.05,
            scrollTrigger: {
              trigger: ScrollTextContainer.current,
              start: "20% center",
              scrub: true,
              end: "bottom bottom",
            },
          }
        );
      }
    },
    { scope: aboutSection, dependencies: [isSplit] }
  );

  return (
    <section ref={aboutSection} className="pt-32  relative">
      <div className="page_padding flex flex-col items-center justify-center">
        <div ref={ScrollTextContainer} className="h-[200vh] relative">
          <div className="min-h-screen sticky top-0 flex flex-col justify-center">
            <p className="text-sm sm:text-md md:text-lg lg:text-xl uppercase mb-8 tracking-wider split">
              Über mich
            </p>
            <p
              ref={ScrollText}
              className="js-scrollText text-[6.5vw] md:text-[3vw] lg:text-[3.25vw] xl:text-[3vw] split font-light leading-[120%] text-primary-200"
            >
              Hi, ich bin Jannis Röstel – Designer & Developer aus Karlsruhe.
              Ich helfe Teams und Unternehmen, digitale Produkte zu schaffen,
              die begeistern und funktionieren. Von der ersten Idee bis zum
              Launch bringe ich Design und Technik zusammen, um Erlebnisse zu
              entwickeln, die im Kopf bleiben. Wenn es darum geht, Kreativität
              und Code zu vereinen, bin ich genau der Richtige.
            </p>
          </div>
        </div>
        {/* <div className="relative">
          <div className="w-96 h-96 rounded-full absolute blur-3xl bg-primary-600 opacity-35"></div>
          <div className="w-96 h-96 mb-24 rounded-full relative overflow-hidden border-4 border-primary-500 flex items-center justify-center">
            <div className="rounded-full w-80 h-80 relative overflow-hidden">
              <Image
                src={"/assets/images/_MG_4682-cutout-bg-with-light-web.jpg"}
                alt="Jannis"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
