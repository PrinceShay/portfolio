"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import SplitType from "split-type";

function ProjectText({ title, text }: { title?: string; text?: string }) {
  // Move Hooks to the top level
  const headline = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isSplit, setSplit] = useState(false);

  useEffect(() => {
    const elements = document.getElementsByClassName("split");
    Array.from(elements).forEach((element) => {
      new SplitType(element as HTMLElement, { types: "lines,words,chars" });
    });

    setSplit(true);
  }, []);

  useGSAP(() => {
    if (isSplit && headline.current && textRef.current) {
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
  }, [isSplit]);

  // Now perform the conditional return
  if (!title || !text) {
    return null;
  }

  return (
    <div className="TextTransform text-center pb-24">
      <h1 ref={headline} className="max-w-5xl mx-auto split Section_Headline">
        {title}
      </h1>
      <p ref={textRef} className="split text-xl mt-6 max-w-6xl mx-auto">
        {text}
      </p>
    </div>
  );
}

export default ProjectText;
