"use client";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import Slider from "./Slider";

function Biography() {
  const [isSplit, setSplit] = useState(false);

  const ScrollText = useRef<HTMLParagraphElement>(null);
  const ImageRef = useRef<HTMLImageElement>(null);
  const BioRef = useRef<HTMLDivElement>(null);

  const ScrollTextContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = document.getElementsByClassName("split");
    Array.from(elements).forEach((element) => {
      new SplitType(element as HTMLElement, { types: "lines,words,chars" });
    });

    setSplit(true);
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (isSplit && ScrollText.current && ScrollTextContainer.current) {
      gsap.fromTo(
        ScrollText.current.querySelectorAll(".char"),
        {
          opacity: 0.3,
          color: "#35254D",
        },
        {
          opacity: 1,
          stagger: 0.05,
          color: "#E8D7FF",
          scrollTrigger: {
            trigger: ScrollTextContainer.current,
            start: "20% center",
            scrub: true,
            end: "bottom bottom",
          },
        }
      );
    }

    let tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: ImageRef.current,
        start: "top 75%",
      },
    });
    tl.from(ImageRef.current, {
      scale: 0.75,
      opacity: 0,
      ease: "power4.out",
      duration: 1.4,
    });

    tl.from(
      ".ImageProfile",
      {
        scale: 2,
        ease: "power4.out",
        duration: 1.4,
      },
      "<"
    );
  }, [isSplit]);

  return (
    <>
      <div
        ref={BioRef}
        className=" mt-12 md:mt-48 flex gap-12 flex-col-reverse md:grid grid-cols-12"
      >
        <div className="col-start-6 col-end-13">
          <h2 className="text-2xl uppercase col-span-3 mb-8">Über mich</h2>
          <p className=" text-lg lg:text-3xl split">
            Jannis Röstel (*2000) ist Designer und Entwickler aus Karlsruhe.
            Bereits mit 15 Jahren begann er sich intensiv mit Fotografie zu
            beschäftigen, wodurch er frühzeitig mit gestalterischen Prinzipien
            in Berührung kam. Kurz darauf entdeckte er Photoshop, das er nicht
            nur zur Bildbearbeitung, sondern auch für die Erstellung von Digital
            Art und Postern nutzte. Dieser kreative Prozess führte ihn zur
            Typografie, wo er lernte, wie Überschriften und Fließtexte
            harmonisch zueinander stehen müssen, um eine hierarchisch stimmige
            und ästhetische Gestaltung zu erreichen. Dadurch entwickelte er ein
            Gespür dafür, Informationen so zu gestalten, dass sie sofort ins
            Auge fallen, ohne den Betrachter zu überfordern. Sein Interesse
            weitete sich bald auf Animationen aus. Auf der Suche nach neuen
            Wegen, seine Designs in der digitalen Welt weiterzuentwickeln,
            entdeckte er After Effects und vertiefte seine Fähigkeiten in der
            Animation und Motion Graphics. Während seiner Ausbildung erweiterte
            er sein Verständnis für Designprinzipien. Parallel dazu begann er,
            seine ersten Webseiten zu programmieren – zunächst ohne Frameworks,
            später mit Webflow und React/ Next.js.
          </p>
          <div className="col-start-6 col-end-13 mt-12">
            <p className=" uppercase opacity-25 mb-2 ">Social</p>
            <ul className="flex gap-4">
              <li className=" hover:text-primary-500">
                <Link href={"https://www.instagram.com/jannis_roestel"}>
                  <Instagram size={32} />
                </Link>
              </li>

              <li className=" hover:text-primary-500  text-white">
                <Link href={"https://www.behance.net/jannisroestel"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                  </svg>
                </Link>
              </li>

              <li className=" hover:text-primary-500 ">
                <Link
                  href={
                    "https://www.linkedin.com/in/jannis-r%C3%B6stel-a4a261251/"
                  }
                >
                  <Linkedin size={32} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          ref={ImageRef}
          className="bg-primary-500 w-full md:col-start-6 md:col-end-13 h-[80vh] mt-32 rounded-xl overflow-hidden relative"
        >
          <Image
            className="ImageProfile absolute"
            src="/assets/images/_MG_4682-cutout-bg-with-light-web.jpg"
            alt="Jannis Röstel"
            fill={true}
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </div>
      </div>

      <Slider />

      <div ref={ScrollTextContainer} className="h-[200vh] relative">
        <div className="min-h-screen py-48 sticky top-0 flex flex-col justify-center">
          <p className="text-sm sm:text-md md:text-lg lg:text-xl uppercase mb-8 tracking-wider split">
            Zitat
          </p>
          <p
            ref={ScrollText}
            className="text-[7vw] md:text-[3vw] lg:text-[3.25vw] xl:text-[3vw] split leading-[120%]"
          >
            Design is not just what it looks like and feels like. Design is how
            it works. The process of design goes far beyond mere decoration; it
            involves solving problems and enhancing the experience for the user.
          </p>
        </div>
      </div>
    </>
  );
}

export default Biography;
