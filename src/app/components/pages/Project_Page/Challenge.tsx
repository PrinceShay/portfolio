"use client";
import { urlFor } from "@/app/lib/sanity";
import React, { useEffect, useRef, useState } from "react";
import { PortableText } from "@portabletext/react";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ChallengeProps {
  title: string;
  challengeTitle: string;
  challengeContent: any;
  challengeImage: any;
  solutionTitle: string;
  solutionContent: any;
  solutionImage: any;
}

const Challenge: React.FC<ChallengeProps> = ({
  title,
  challengeTitle,
  challengeContent,
  challengeImage,
  solutionTitle,
  solutionContent,
  solutionImage,
}) => {
  const challengeheadline = useRef<HTMLHeadingElement>(null);
  const challengetextRef = useRef<HTMLDivElement>(null);
  const solutionheadline = useRef<HTMLHeadingElement>(null);
  const solutiontextRef = useRef<HTMLDivElement>(null);
  const challengeImageWrapperRef = useRef<HTMLDivElement>(null);
  const challengeImageRef = useRef<HTMLImageElement>(null);
  const solutionImageWrapperRef = useRef<HTMLDivElement>(null);
  const solutionImageRef = useRef<HTMLImageElement>(null);

  const [isSplit, setSplit] = useState(false);

  useEffect(() => {
    const elements = document.getElementsByClassName("split");
    Array.from(elements).forEach((element) => {
      new SplitType(element as HTMLElement, { types: "lines,words,chars" });
    });

    setSplit(true);
  }, []);

  useGSAP(() => {
    if (
      isSplit &&
      challengeheadline.current &&
      challengetextRef.current &&
      challengeImageWrapperRef.current &&
      solutionheadline.current &&
      solutiontextRef.current &&
      solutionImageRef.current
    ) {
      // Define animations with responsive behavior
      const mm = gsap.matchMedia();

      mm.add(
        {
          isMobile: "(max-width: 767px)",
          isDesktop: "(min-width: 768px)",
        },
        (context) => {
          const isMobile = context.conditions!.isMobile;

          const endValue = isMobile ? "top 65%" : "top 55%";

          // Challenge Tag Animation
          gsap.from(".challenge-tag", {
            opacity: 0,
            ease: "power4.out",
            scrollTrigger: {
              trigger: ".challenge-tag",
              start: "top 90%",
              scrub: true,
              end: "top 40%",
            },
          });

          // Challenge Headline Animation
          gsap.from(challengeheadline.current!.querySelectorAll(".char"), {
            yPercent: 30,
            opacity: 0,
            rotateX: 80,
            stagger: 0.05,
            rotate: 5,
            duration: 1.4,
            scrollTrigger: {
              trigger: challengeheadline.current,
              start: "top 90%",
              scrub: true,
              end: isMobile ? "top 65%" : "top 65%",
            },
            ease: "back.out(2)",
          });

          // Challenge Text Animation
          gsap.from(challengetextRef.current, {
            yPercent: 30,
            opacity: 0,
            scrollTrigger: {
              trigger: challengetextRef.current,
              start: "top 95%",
              scrub: true,
              end: endValue,
            },
            ease: "power4.out",
          });

          // Challenge Image Animation
          const cTL = gsap.timeline({});
          cTL.from(challengeImageWrapperRef.current, {
            scale: 0.6,
            ease: "power4.out",
            duration: 1.5,
            scrollTrigger: {
              trigger: challengeImageWrapperRef.current,
              start: "top 90%",
              scrub: true,
              end: "top 30%",
            },
          });

          cTL.from(
            challengeImageRef.current,
            {
              scale: 2,
              ease: "power4.out",
              duration: 1.5,
              opacity: 0,
              scrollTrigger: {
                trigger: challengeImageWrapperRef.current,
                start: "top 90%",
                scrub: true,
                end: "top 30%",
              },
            },
            "<"
          );

          // Solution Tag Animation
          gsap.from(".solution-tag", {
            opacity: 0,
            ease: "power4.out",
            scrollTrigger: {
              trigger: ".solution-tag",
              start: "top 90%",
              scrub: true,
              end: "top 40%",
            },
          });

          // Solution Headline Animation
          gsap.from(solutionheadline.current!.querySelectorAll(".char"), {
            yPercent: 30,
            opacity: 0,
            rotateX: 80,
            stagger: 0.05,
            rotate: 5,
            duration: 1.4,
            scrollTrigger: {
              trigger: solutionheadline.current,
              start: "top 90%",
              scrub: true,
              end: isMobile ? "top 65%" : "top 65%",
            },
            ease: "back.out(2)",
          });

          // Solution Text Animation
          gsap.from(solutiontextRef.current, {
            yPercent: 25,
            opacity: 0,
            scrollTrigger: {
              trigger: solutiontextRef.current,
              start: "top 95%",
              scrub: true,
              end: endValue,
            },
            ease: "power4.out",
          });

          // Solution Image Animation
          const sTL = gsap.timeline({});
          sTL.from(solutionImageWrapperRef.current, {
            scale: 0.6,
            ease: "power4.out",
            duration: 1.5,
            scrollTrigger: {
              trigger: solutionImageWrapperRef.current,
              start: "top 90%",
              scrub: true,
              end: "top 30%",
            },
          });

          sTL.from(
            solutionImageRef.current,
            {
              scale: 2,
              ease: "power4.out",
              duration: 1.5,
              opacity: 0,
              scrollTrigger: {
                trigger: solutionImageWrapperRef.current,
                start: "top 90%",
                scrub: true,
                end: "top 30%",
              },
            },
            "<"
          );
        }
      );
    }
  }, [isSplit]);

  return (
    <div className="px-6 md:px-24 lg:px-48 mb-24 md:mb-48">
      <section className="flex flex-col-reverse justify-between md:flex-row gap-16 py-24">
        <div className="basis-1/2 content-center">
          <p className="md:text-lg challenge-tag">Die Challenge</p>
          <h1
            ref={challengeheadline}
            className="split mt-6  text-3xl md:text-5xl"
          >
            {challengeTitle}
          </h1>
          <div className="mt-12 grid grid-cols-12">
            <div
              ref={challengetextRef}
              className="text-xl col-span-12 col-start-1"
            >
              <PortableText value={challengeContent} />
            </div>
          </div>
        </div>
        <div
          ref={challengeImageWrapperRef}
          className="basis-1/2 xl:basis-1/3 overflow-hidden rounded-md min-h-[70vh] relative"
        >
          {challengeImage && (
            <img
              ref={challengeImageRef}
              className="h-full w-full object-cover absolute"
              src={urlFor(challengeImage).url()}
              alt={"Challenge"}
              title={title}
            />
          )}
        </div>
      </section>

      <section className="flex flex-col justify-between md:flex-row gap-16 py-24">
        <div
          ref={solutionImageWrapperRef}
          className="basis-1/2 xl:basis-1/3 overflow-hidden rounded-md max-h-[70vh]"
        >
          {solutionImage && (
            <img
              ref={solutionImageRef}
              className="h-full w-full object-cover"
              src={urlFor(solutionImage).url()}
              alt="Solution"
              title={title}
            />
          )}
        </div>
        <div className="basis-1/2 content-center">
          <p className="md:text-lg solution-tag">Die Lösung</p>
          <h1
            ref={solutionheadline}
            className="split mt-6 text-3xl md:text-5xl"
          >
            {solutionTitle}
          </h1>
          <div className="mt-12 grid grid-cols-12">
            <div
              ref={solutiontextRef}
              className="split text-xl col-span-12 col-start-1"
            >
              <PortableText value={solutionContent} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Challenge;
