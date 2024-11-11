"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BenefitCTA,
  KeineVerstecktenKosten,
  ModernsteTechnologie,
  PersoenlicherAnsprechpartner,
  SchnellEffizientErschwinglich,
} from "./BenefitLib";

gsap.registerPlugin(ScrollTrigger);

function CustomerBenefits() {
  const container = useRef<HTMLElement>(null);
  const benefitCards = useRef<HTMLElement[]>([]);

  // Initialisiere die Refs für die BenefitCards
  benefitCards.current = [];

  useGSAP(() => {
    if (!container.current || benefitCards.current.length === 0) return;

    gsap.from(benefitCards.current, {
      y: 50,
      rotateX: -20,
      scale: 1.3,
      opacity: 0,
      stagger: 0.2,
      duration: 2,
      ease: "elastic.out(1, 0.8)",
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      },
      onComplete: () => {
        ScrollTrigger.refresh();
      },
    });
  }, []);

  return (
    <section
      className="py-32 page_padding min-h-screen overflow-x-hidden"
      ref={container}
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="w-full grid grid-cols-12 grid-rows-2 gap-8">
          {/* Erste Reihe */}
          <article
            ref={(el) => {
              if (el) benefitCards.current.push(el);
            }}
            className="col-span-12 md:col-span-6 bg-darkBlue-400 min-h-[70vh] sm:min-h-[50vh] rounded-2xl relative BenefitCard"
          >
            <KeineVerstecktenKosten />
            <div className="absolute w-full h-full left-0 top-0 rounded-2xl z-10 overflow-hidden pointer-events-none">
              <div className="bg-primary-500 w-64 h-64 blur-[200px] absolute right-0"></div>
            </div>
          </article>
          <article
            ref={(el) => {
              if (el) benefitCards.current.push(el);
            }}
            className="col-span-12 md:col-span-6 bg-darkBlue-400 min-h-[70vh] sm:min-h-[50vh] rounded-2xl BenefitCard"
          >
            <PersoenlicherAnsprechpartner />
            <div className="absolute w-full h-full left-0 top-0 rounded-2xl z-10 overflow-hidden pointer-events-none">
              <div className="bg-primary-500 w-64 h-64 blur-[200px] absolute left-0"></div>
            </div>
          </article>

          {/* Zweite Reihe */}
          <article
            ref={(el) => {
              if (el) benefitCards.current.push(el);
            }}
            className="col-span-12 md:col-span-6 2xl:col-span-4 bg-darkBlue-400 min-h-[70vh] sm:min-h-[50vh] rounded-2xl BenefitCard"
          >
            <SchnellEffizientErschwinglich />
            <div className="absolute w-full h-full left-0 top-0 rounded-2xl z-10 overflow-hidden pointer-events-none">
              <div className="bg-primary-500 w-full h-64 blur-[200px] absolute right-0 top-0"></div>
            </div>
          </article>
          <article
            ref={(el) => {
              if (el) benefitCards.current.push(el);
            }}
            className="col-span-12 md:row-start-2 2xl:col-span-4 bg-darkBlue-400 min-h-[70vh] sm:min-h-[50vh] rounded-2xl BenefitCard"
          >
            <BenefitCTA />
          </article>
          <article
            ref={(el) => {
              if (el) benefitCards.current.push(el);
            }}
            className="col-span-12 md:col-span-6 2xl:col-span-4 bg-darkBlue-400 min-h-[70vh] sm:min-h-[60vh] rounded-2xl BenefitCard"
          >
            <ModernsteTechnologie />

            <div className="absolute w-full h-full left-0 top-0 rounded-2xl z-10 overflow-hidden pointer-events-none">
              <div className="bg-primary-500 w-64 h-64 blur-[200px] absolute left-0"></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default CustomerBenefits;
