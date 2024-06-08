"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const NameRef = useRef<HTMLHeadingElement>(null);
  const TagRef = useRef<HTMLParagraphElement>(null);
  const NameRef2 = useRef<HTMLHeadingElement>(null);
  const TagRef2 = useRef<HTMLParagraphElement>(null);
  const TextRef = useRef<HTMLParagraphElement>(null);

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
      TagRef.current &&
      NameRef.current &&
      TagRef2.current &&
      NameRef2.current &&
      TextRef.current
    ) {
      const HeroTL = gsap.timeline({ delay: 1.8 });

      HeroTL.from(TagRef.current.querySelectorAll(".word"), {
        yPercent: 30,
        opacity: 0,
        stagger: 0.05,
        rotate: 5,
        duration: 1,
        ease: "back.out(2)",
      });

      HeroTL.from(
        NameRef.current.querySelectorAll(".char"),
        {
          yPercent: 30,
          opacity: 0,
          stagger: 0.05,
          rotate: 5,
          duration: 1,
          ease: "back.out(2)",
        },
        "<25%"
      );

      gsap.from(TagRef2.current.querySelectorAll(".word"), {
        yPercent: 30,
        opacity: 0,
        stagger: 0.05,
        rotate: 5,
        duration: 1.4,
        scrollTrigger: {
          trigger: TagRef2.current,
          start: "top 80%",
        },
        ease: "back.out(2)",
      });

      gsap.from(NameRef2.current.querySelectorAll(".word"), {
        yPercent: 30,
        opacity: 0,
        stagger: 0.05,
        rotate: 5,
        duration: 1.4,
        scrollTrigger: {
          trigger: NameRef2.current,
          start: "top 80%",
        },
        ease: "back.out(2)",
      });
      gsap.from(TextRef.current.querySelectorAll(".line"), {
        yPercent: 30,
        opacity: 0,
        stagger: 0.05,
        rotate: 5,
        duration: 1.4,
        scrollTrigger: {
          trigger: TextRef.current,
          start: "top 80%",
        },
        ease: "back.out(2)",
      });

      gsap.to(image.current, {
        scale: 1.2,
        opacity: 0.5,
        yPercent: 20,
        scrollTrigger: {
          trigger: container.current,
          toggleActions: "play pause resume reset",
          start: "top 40vh",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, [isSplit]);
  return (
    <section
      ref={container}
      className="relative px-12 xl:px-48 overflow-hidden HeroSection"
    >
      <img
        className="w-full h-full absolute object-cover left-0 z-0 object-top"
        src="/assets/images/Hero.jpg"
        alt="Jannis Röstel"
        ref={image}
      />
      <div className="relative z-10">
        <div className="h-screen items-center grid grid-cols-12">
          <div className="Highlight_CTA w-24 h-24 absolute bg-primary-500 top-80 -right-[35vw] opacity-30"></div>
          <div className="col-start-1 col-span-full md:col-span-7">
            <p ref={TagRef} className="text-2xl mb-8 split">
              Hey, mein Name ist
            </p>
            <h1 ref={NameRef} className="Section_Headline split">
              Jannis Röstel
            </h1>
          </div>
        </div>
        <div className="h-screen items-center grid grid-cols-12">
          <div className="col-span-full md:col-span-6 md:col-start-7 col-start-2 justify-self-end">
            <p ref={TagRef2} className="split text-2xl mb-8">
              Und ich bin
            </p>
            <h1 ref={NameRef2} className="split Section_Headline">
              Web- und Motiondesigner
            </h1>
            <p ref={TextRef} className="split text-xl mt-8">
              An independent creative agency for all your branding, advertising
              and film production needs. With our signature style of
              Aanstekelijk-ness® we create advertising that is as entertaining
              as it is effective. Team up with us to grow your business value
              through contagious creativity.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[50vh] absolute bg-gradient-to-t from-darkBlue-500 to-transparent bottom-0 left-0"></div>
    </section>
  );
}

export default Hero;
