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
import BenefitCard from "./BenefitCard"; // Stelle sicher, dass der Pfad korrekt ist

gsap.registerPlugin(ScrollTrigger);

function CustomerBenefits() {
  const container = useRef<HTMLElement>(null);
  const benefitCards = useRef<HTMLElement[]>([]);

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
          <BenefitCard
            ref={(el) => {
              if (el) benefitCards.current.push(el);
            }}
            className="col-span-12 md:col-span-6 min-h-[70vh] sm:min-h-[50vh]"
          >
            <KeineVerstecktenKosten />
          </BenefitCard>

          <BenefitCard
            ref={(el) => {
              if (el) benefitCards.current.push(el);
            }}
            className="col-span-12 md:col-span-6 min-h-[70vh] sm:min-h-[50vh]"
          >
            <PersoenlicherAnsprechpartner />
          </BenefitCard>

          {/* Zweite Reihe */}
          <BenefitCard
            ref={(el) => {
              if (el) benefitCards.current.push(el);
            }}
            className="col-span-12 md:col-span-6 2xl:col-span-4 min-h-[70vh] sm:min-h-[50vh]"
          >
            <SchnellEffizientErschwinglich />
          </BenefitCard>

          <BenefitCard
            ref={(el) => {
              if (el) benefitCards.current.push(el);
            }}
            className="col-span-12 md:row-start-2 2xl:col-span-4 min-h-[70vh] sm:min-h-[50vh]"
          >
            <BenefitCTA />
          </BenefitCard>

          <BenefitCard
            ref={(el) => {
              if (el) benefitCards.current.push(el);
            }}
            className="col-span-12 md:col-span-6 2xl:col-span-4 min-h-[70vh] sm:min-h-[60vh] "
          >
            <ModernsteTechnologie />
          </BenefitCard>
        </div>
      </div>
    </section>
  );
}

export default CustomerBenefits;
