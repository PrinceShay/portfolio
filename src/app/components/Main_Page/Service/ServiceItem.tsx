"use client";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger); // Register once outside component

function ServiceItem() {
  const container = useRef<HTMLDivElement>(null);

  const title = useRef<HTMLHeadingElement>(null);
  const refText = useRef<HTMLParagraphElement>(null);
  const [isSplit, setSplit] = useState(false);

  useEffect(() => {
    // Assume `useSplitType` can accept a callback to set `isSplit` true after completion
    const elements = document.getElementsByClassName("split");
    Array.from(elements).forEach((element) => {
      new SplitType(element as HTMLElement, { types: "lines,words,chars" });
    });

    setSplit(true); // Set split state to true after all elements are split
  }, []);

  useGSAP(() => {
    if (isSplit && container.current && title.current && refText.current) {
      const serviceTL = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "0 90%",
          end: "bottom 10%",
        },
      });

      serviceTL
        .from(title.current.children, {
          yPercent: 20,
          opacity: 0,
          rotate: -10,
          duration: 1,
          ease: "power4.out",
        })
        .from(
          refText.current.children,
          {
            yPercent: 20,
            opacity: 0,
            rotate: -2,
            stagger: 0.1,
            duration: 1,
            ease: "power4.out",
          },
          "<25%"
        )
        .from(
          container.current.querySelectorAll("li"),
          {
            xPercent: -5,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            ease: "power4.out",
          },
          "<25%"
        )
        .from(
          ".divider",
          {
            width: 0,
            duration: 1,
            ease: "power4.out",
          },
          "<25%"
        );
    }
  }, [isSplit]); // Depend on isSplit

  return (
    <div ref={container} className="grid grid-cols-12 mb-36">
      <h2 ref={title} className="split text-6xl">
        Web
      </h2>
      <div className="col-start-5 col-end-13 flex flex-col w-full">
        <div className="flex justify-between w-full">
          <div className="basis-3/4 w-full">
            <h3 className="split text-2xl">Meow</h3>
            <p ref={refText} className="split text-xl mt-8">
              Dies ist ein Beispiel für einen Blindtext, der auf Deutsch
              geschrieben ist. Es gibt noch viele weitere Arten des Hauses,
              wobei die ersten Menschen heute
            </p>
            <ul className="mt-24">
              <li className="text-xl text-primary-200">Point 1</li>
              <li className="text-xl text-primary-200">Point 2</li>
              <li className="text-xl text-primary-200">Point 3</li>
              <li className="text-xl text-primary-200">Point 4</li>
            </ul>
          </div>
          <div className="flex basis-1/3 justify-end">Meow</div>
        </div>
        <div className="divider w-full h-[1.5px] bg-primary-100 mt-12"></div>
      </div>
    </div>
  );
}

export default ServiceItem;
