"use client";
import React, { useEffect, useRef, useState } from "react";
import ButtonSecondary from "../Navbar/ButtonSecondary";
import Image from "next/image";
import FooterLink from "./FooterLink";
import { Dribbble, Instagram, Linkedin } from "lucide-react";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function FooterNew() {
  const footerHeadline = useRef<HTMLHeadingElement>(null);
  const footerText = useRef<HTMLParagraphElement>(null);
  const footerBtn = useRef(null);
  const footerLogo = useRef(null);
  const footerMenu_1 = useRef<HTMLUListElement>(null);
  const footerMenu_2 = useRef<HTMLUListElement>(null);
  const footerMenu_3 = useRef<HTMLDivElement>(null);

  // Neue Refs für die Bildspalten
  const ctaParentFooter = useRef(null);
  const firstColumnRefFooter = useRef(null);
  const secondColumnRefFooter = useRef(null);
  const thirdColumnRefFooter = useRef(null);
  const fourthColumnRefFooter = useRef(null); // Vierte Spalte
  const bgDarken = useRef<HTMLDivElement>(null);

  const footerSection = useRef<HTMLDivElement>(null);

  const [isSplit, setSplit] = useState(false);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 800);
  });

  useGSAP(
    () => {
      new SplitType(footerHeadline.current!, { types: "words,chars" });
      new SplitType(footerText.current!, { types: "words" });

      setSplit(true);

      if (
        isSplit &&
        footerHeadline.current &&
        footerSection.current &&
        footerText.current
      ) {
        const footerTL = gsap.timeline({
          scrollTrigger: {
            trigger: footerSection.current,
            start: "10% 75%",
            scrub: true,
            end: "bottom bottom",
          },
        });

        footerTL.from(footerSection.current, {
          scale: 0.75,
          scrollTrigger: {
            trigger: footerSection.current,
            start: "-10% 100%",
            scrub: true,
            end: "100% 90%",
          },
        });

        footerTL.from(footerLogo.current, {
          scale: 0,
          rotate: 13,
          opacity: 0,
        });
        footerTL.from(
          footerHeadline.current.querySelectorAll(".char"),
          {
            opacity: 0,
            scale: 0.1,
            rotate: () => gsap.utils.random(-15, 15), // Random rotation between -10 and 10
            stagger: { each: 0.02, from: "random" },
          },
          "<"
        );
        footerTL.from(
          footerText.current.querySelectorAll(".word"),
          {
            XPercent: -100,
            opacity: 0,
            ease: "power4.out",
            stagger: { each: 0.05 },
          },
          "<50%"
        );
        footerTL.from(
          footerBtn.current,
          {
            yPercent: 50,
            opacity: 0,
            ease: "power4.out",
          },
          "<50%"
        );
      }
      // Animation für die Bildspalten hinzufügen
    },
    { scope: footerSection, dependencies: [isSplit, ctaParentFooter] }
  );

  useGSAP(
    () => {
      if (
        ctaParentFooter.current &&
        firstColumnRefFooter.current &&
        secondColumnRefFooter.current &&
        thirdColumnRefFooter.current &&
        fourthColumnRefFooter.current
      ) {
        const tlt = gsap.timeline({
          scrollTrigger: {
            trigger: footerSection.current,
            start: "-10% 100%",
            scrub: true,
            end: "100% 90%",
          },
        });

        tlt.to(firstColumnRefFooter.current, {
          y: "-10%",
          ease: "none",
        });

        tlt.to(
          secondColumnRefFooter.current,
          {
            y: "10%",
            ease: "none",
          },
          "<"
        );

        tlt.to(
          thirdColumnRefFooter.current,
          {
            y: "-10%",
            ease: "none",
          },
          "<"
        );

        tlt.to(
          fourthColumnRefFooter.current,
          {
            y: "10%",
            ease: "none",
          },
          "<"
        );

        tlt.from(
          ctaParentFooter.current,
          {
            rotateX: 15,
            rotateZ: 5,
            ease: "none",
          },
          "<"
        );
        tlt.from(
          bgDarken.current,
          {
            opacity: 0,
          },
          "<"
        );
      }
    },
    {
      scope: footerSection,
      dependencies: [
        ctaParentFooter,
        firstColumnRefFooter,
        secondColumnRefFooter,
        thirdColumnRefFooter,
        fourthColumnRefFooter,
        bgDarken,
      ],
    }
  );

  return (
    <section className="p-4 md:p-8 min-h-screen h-screen w-full">
      <div
        ref={footerSection}
        className="bg-gradient-to-b from-darkBlue-400 to-darkBlue-400  relative  rounded-2xl w-full min-h-full h-full overflow-hidden z-[51]"
      >
        <div className="w-full min-h-full h-full absolute">
          {/* Bildgrid Container */}
          <div
            style={{ perspective: "1500px" }}
            className="w-[120%] h-full absolute left-0 top-0 z-10 rounded-2xl overflow-hidden flex items-center justify-end"
          >
            <div
              style={{
                transform: "rotateY(12deg) rotateX(56deg) rotateY(347deg)",
              }}
              className="flex min-w-[150%] h-full items-center justify-center gap-4"
              ref={ctaParentFooter}
            >
              {/* Erste Spalte */}
              <div
                ref={firstColumnRefFooter}
                className="relative flex flex-col basis-1/4 shrink-0 gap-4"
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
                ref={secondColumnRefFooter}
                className="relative flex flex-col basis-1/4 gap-4 mt-48"
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
                ref={thirdColumnRefFooter}
                className="relative flex flex-col basis-1/4 gap-4"
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
                ref={fourthColumnRefFooter}
                className="relative flex flex-col basis-1/4 gap-4 mt-48"
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
            </div>
            {/* Abdunkelungs-Div hinzufügen */}
            <div
              ref={bgDarken}
              className="absolute inset-0  opacity-100 bg-gradient-to-t from-primary-900 to-50% to-[#231832e8]"
            ></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between p-2 md:p-8 min-h-full h-full relative z-20">
          <Image
            ref={footerLogo}
            src="/Navigation/logo.svg"
            alt="Logo"
            width={64}
            height={64}
            className="justify-self-center"
          />
          <div className="h-full flex flex-col items-center justify-center text-center">
            <h1
              ref={footerHeadline}
              className="text-[20vw] md:text-[14vw] lg:text-[10vw] leading-[0.8] font-humane  font-bold uppercase"
            >
              Interesse an einer
              <br /> Zusammenarbeit?
            </h1>
            <div className="overflow-hidden">
              <p
                ref={footerText}
                className="text-lg md:text-2xl opacity-85 mt-6 "
              >
                Du bist nur eine kleine Nachricht von deinem Glück entfernt!😉
              </p>
            </div>

            <div ref={footerBtn} className="text-lg lg:text-2xl mt-8">
              <ButtonSecondary
                inverted
                firstTitle="j.roestel@jannisroestel.de"
                secondTitle="Jetzt kontaktieren"
                link="mailto:j.roestel@jannisroestel.de"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:justify-between w-full">
            <ul
              ref={footerMenu_1}
              className="hidden text-md md:text-xl xl:flex gap-4 row-start-3 xl:self-end"
            >
              <FooterLink url="/projekte" title="Projekte" />
              <FooterLink url="/profil" title="Profil" />
              <FooterLink
                url="https://www.jannisroestel.de/#service"
                title="Service"
              />
              <FooterLink url="/blog" title="Blog" />
              <FooterLink url="/kontakt" title="Kontakt" />
            </ul>

            <ul
              ref={footerMenu_2}
              className="text-xl mb-8 lg:mb-0 flex gap-4 row-start-3 col-start-2 lg:self-end justify-self-center"
            >
              <li className="hover:text-primary-500 transition-colors ease-out">
                <a
                  title="Instagram"
                  href="https://www.instagram.com/jannis_roestel"
                >
                  <Instagram />
                </a>
              </li>

              <li className="hover:text-primary-500 transition-colors ease-out">
                <a
                  title="LinkedIn"
                  href="https://www.linkedin.com/in/jannis-r%C3%B6stel-a4a261251/"
                >
                  <Linkedin fill="currentColor" stroke="none" />
                </a>
              </li>

              <li className="hover:text-primary-500 transition-colors ease-out">
                <a title="Behance" href="https://www.behance.net/jannisroestel">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                  </svg>
                </a>
              </li>

              <li className="hover:text-primary-500 transition-colors ease-out">
                <a title="Dribbble" href="https://dribbble.com/jannisroestel">
                  <Dribbble />
                </a>
              </li>
            </ul>
            <div
              ref={footerMenu_3}
              className="row-start-3 col-start-3 lg:self-end justify-self-end flex lg:flex-row flex-col-reverse items-center gap-2 lg:gap-6 md:text-lg text-md"
            >
              <div>© Jannis Röstel {new Date().getFullYear()}</div>
              <span className="hidden lg:block">|</span>
              <ul className=" flex gap-4 ">
                <FooterLink url="/impressum" title="Impressum" />
                <FooterLink url="/datenschutz" title="Datenschutz" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
