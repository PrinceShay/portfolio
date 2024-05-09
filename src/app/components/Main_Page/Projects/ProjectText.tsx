"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import SplitType from "split-type";

function ProjectText() {
  const headline = useRef<HTMLHeadingElement>(null);
  const text = useRef<HTMLParagraphElement>(null);

  const [isSplit, setSplit] = useState(false);

  useEffect(() => {
    const elements = document.getElementsByClassName("split");
    Array.from(elements).forEach((element) => {
      new SplitType(element as HTMLElement, { types: "lines,words,chars" });
    });

    setSplit(true);
  }, []);

  useGSAP(() => {
    if (isSplit && headline.current && text.current) {
      gsap.from(headline.current.querySelectorAll(".char"), {
        yPercent: 30,
        opacity: 0,
        stagger: 0.05,
        rotate: 5,
        duration: 1.4,
        scrollTrigger: {
          trigger: headline.current,
          start: "top 80%",
        },
        ease: "back.out(2)",
      });

      gsap.from(text.current.querySelectorAll(".line"), {
        yPercent: 30,
        opacity: 0,
        stagger: 0.05,
        rotate: 5,
        duration: 1.4,
        scrollTrigger: {
          trigger: text.current,
          start: "top 80%",
        },
        ease: "back.out(2)",
      });
    }
  }, [isSplit]);
  return (
    <div className="text-center pb-24">
      <h1 ref={headline} className="split Section_Headline">
        Aktuelle Cases
      </h1>
      <p ref={text} className="split text-xl mt-6">
        An independent creative agency for all your branding, advertising, and
        film production needs.
      </p>
    </div>
  );
}

export default ProjectText;
