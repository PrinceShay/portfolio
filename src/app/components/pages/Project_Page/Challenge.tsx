"use client";
import { urlFor } from "@/app/lib/sanity";
import React, { useEffect, useRef, useState } from "react";
import { PortableText } from "@portabletext/react";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { start } from "repl";

interface ChallengeProps {
  challengeTitle: string;
  challengeContent: any;
  challengeImage: any; // Adjust this type based on your actual data structure
  solutionTitle: string;
  solutionContent: any;
  solutionImage: any; // Adjust this type based on your actual data structure
}

const Challenge: React.FC<ChallengeProps> = ({
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
  const challengeImageRef = useRef(null);
  const solutionImageWrapperRef = useRef<HTMLDivElement>(null);
  const solutionImageRef = useRef(null);

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
      challengeImageWrapperRef &&
      solutionheadline.current &&
      solutiontextRef.current &&
      solutionImageRef.current
    ) {
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
      gsap.from(challengeheadline.current.querySelectorAll(".char"), {
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
          end: "top 40%",
        },
        ease: "back.out(2)",
      });

      gsap.from(challengetextRef.current, {
        xPercent: -15,
        opacity: 0,
        scrollTrigger: {
          trigger: challengetextRef.current,
          start: "top 90%",
          scrub: true,
          end: "top 30%",
        },
        ease: "power4.out",
      });

      var cTL = gsap.timeline({});
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

      gsap.from(solutionheadline.current.querySelectorAll(".char"), {
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
          end: "top 40%",
        },
        ease: "back.out(2)",
      });

      gsap.from(solutiontextRef.current, {
        xPercent: -15,
        opacity: 0,
        scrollTrigger: {
          trigger: solutiontextRef.current,
          start: "top 90%",
          scrub: true,
          end: "top 30%",
        },
        ease: "power4.out",
      });

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

      var sTL = gsap.timeline({});
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
  }, [isSplit]);
  return (
    <div className="px-6 md:px-24 lg:px-48">
      <section className="flex flex-col justify-between md:flex-row gap-16 py-24">
        <div className="basis-1/2 content-center">
          <p className="text-lg challenge-tag">Die Challenge</p>
          <h1 ref={challengeheadline} className="split mt-8 text-5xl">
            {challengeTitle}
          </h1>
          <div className="mt-16 grid grid-cols-12">
            <div
              ref={challengetextRef}
              className="text-xl col-span-12 col-start-2"
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
              alt="Challenge"
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
            />
          )}
        </div>
        <div className="basis-1/2 content-center">
          <p className="text-lg solution-tag">Die Lösung</p>
          <h1 ref={solutionheadline} className="split mt-8 text-5xl">
            {solutionTitle}
          </h1>
          <div className="mt-16 grid grid-cols-12">
            <div
              ref={solutiontextRef}
              className="split text-xl col-span-12 col-start-2"
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
