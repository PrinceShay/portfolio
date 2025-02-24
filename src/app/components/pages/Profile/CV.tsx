"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import JobItem from "./JobItem";

function CV() {
  const HeadingRef = useRef<HTMLHeadingElement>(null);

  const [isSplit, setSplit] = useState(false);

  useEffect(() => {
    if (HeadingRef.current) {
      new SplitType(HeadingRef.current, { types: "chars" });
    }

    setSplit(true);
  }, []);

  useGSAP(() => {
    if (isSplit && HeadingRef.current) {
      gsap.from(HeadingRef.current.querySelectorAll(".char"), {
        yPercent: 30,
        opacity: 0,
        rotateX: 80,
        stagger: 0.05,
        rotate: 5,
        duration: 1.4,
        scrollTrigger: {
          trigger: HeadingRef.current,
          start: "top 80%",
          scrub: true,
          end: "top 10%",
        },
        ease: "back.out(2)",
      });
    }
  }, [isSplit]);

  return (
    <div id="cv" className="col-start-1 col-end-13 md:col-end-8 xl:col-end-6">
      <h2 ref={HeadingRef} className="text-5xl mb-12 TextTransform">
        Erfahrung
      </h2>
      <ul>
        <JobItem
          jobTitle="Webdesigner und Entwickler"
          company="Freelance"
          JobDate="Januar 2024 - Heute"
        />
        <JobItem
          jobTitle="Webdesigner und Entwickler"
          company="Accenty"
          JobDate="Oktober 2023 - September 2024"
        />
        <JobItem
          jobTitle="Grafikdesign und Marketing"
          company="Wessa Gruppe"
          JobDate="Oktober 2022 - Juli 2023"
        />
        <JobItem
          jobTitle="Ausbildung zum Mediengestalter"
          company="Einrichtungshaus Ehrmann"
          JobDate="August 2019 - Mai 2022"
        />
      </ul>
    </div>
  );
}

export default CV;
