"use client";
import CV from "@/app/components/pages/Profile/CV";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function Page() {
  const [isSplit, setSplit] = useState(false);

  const ScrollText = useRef<HTMLParagraphElement>(null);
  const ImageRef = useRef<HTMLImageElement>(null);

  const ScrollTextContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = document.getElementsByClassName("split");
    Array.from(elements).forEach((element) => {
      new SplitType(element as HTMLElement, { types: "lines,words,chars" });
    });

    setSplit(true);
  }, []);

  useGSAP(() => {
    if (isSplit && ScrollText.current && ScrollTextContainer.current) {
      gsap.fromTo(
        ScrollText.current.querySelectorAll(".char"),
        {
          opacity: 0.1,
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
  }, [isSplit]);

  return (
    <section className="min-h-screen pt-64 px-6 md:px-24 lg:px-48">
      <h1 className="Section_Headline">Profil</h1>
      <div className="mt-48 flex gap-12 flex-col md:grid grid-cols-12">
        <h2 className="text-3xl uppercase col-span-3">Über mich</h2>
        <p className="col-start-6 col-end-13 text-2xl split">
          Hey, mein Name ist Jannis Röstel und ich bin Web- und Motiondesigner
          aus Karlsruhe. Hey, mein Name ist Jannis Röstel und ich bin Web- und
          Motiondesigner aus Karlsruhe. Hey, mein Name ist Jannis Röstel und ich
          bin Web- und Motiondesigner aus Karlsruhe.
        </p>
        <div
          ref={ImageRef}
          className="bg-primary-500 col-start-6 col-end-13 md:h-screen mt-32 rounded-xl overflow-hidden relative"
        >
          <Image
            src="/assets/images/_MG_4682-cutout-bg-with-light-web.jpg"
            alt="Jannis Röstel"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div ref={ScrollTextContainer} className="h-[200vh] relative">
        <div className="min-h-screen py-48 sticky top-0 flex flex-col justify-center">
          <p className="text-sm sm:text-md md:text-lg lg:text-xl uppercase mb-8 tracking-wider split">
            Was gibts noch zu sagen
          </p>
          <p
            ref={ScrollText}
            className="text-[5vw] sm:text-[3.5vw] md:text-[3vw] lg:text-[2.8vw] split leading-[120%]"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            corrupti velit harum facilis nihil impedit adipisci voluptatem
            ipsam, vero deserunt? Corporis libero blanditiis temporibus impedit
            pariatur nemo qui, nam enim! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Mollitia corrupti velit harum facilis nihil
            impedit adipisci voluptatem ipsam, vero deserunt? Corporis libero
            blanditiis temporibus impedit pariatur nemo qui, nam enim!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <CV />
      </div>
    </section>
  );
}

export default Page;
