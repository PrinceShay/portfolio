"use client";
import { useRef, useEffect, useState, FC } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Defining an interface for component props
interface ServiceItemProps {
  title: string;
  Headline: string;
  Text: string;
  items: string[];
}

// ServiceItem component definition using the props interface
const ServiceItem: FC<ServiceItemProps> = ({
  title,
  Headline,
  Text,
  items,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const HeadlineRef = useRef<HTMLHeadingElement>(null);
  const refText = useRef<HTMLParagraphElement>(null);
  const divider = useRef<HTMLDivElement>(null);
  const [isSplit, setSplit] = useState(false);

  useEffect(() => {
    // Splitting text elements
    const elements = document.getElementsByClassName("split");
    Array.from(elements).forEach((element) => {
      new SplitType(element as HTMLElement, { types: "lines,words,chars" });
    });
    setSplit(true);
  }, []);

  useGSAP(() => {
    if (
      isSplit &&
      container.current &&
      titleRef.current &&
      HeadlineRef.current &&
      refText.current
    ) {
      const serviceTL = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "0 90%",
          end: "bottom 10%",
        },
      });

      serviceTL
        .from(titleRef.current?.querySelectorAll(".word"), {
          y: 50,
          opacity: 0,
          rotate: 5,
          duration: 1,
          stagger: 0.05,
          ease: "power4.out",
        })

        .from(
          HeadlineRef.current?.querySelectorAll(".word"),
          {
            y: 50,
            opacity: 0,
            rotate: 5,
            duration: 1,
            stagger: 0.05,
            ease: "power4.out",
          },
          "<25%"
        )
        .from(
          refText.current?.children,
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
          divider.current,
          {
            width: 0,
            duration: 1,
            ease: "power4.out",
          },
          "<25%"
        );
    }
  }, [isSplit]);

  return (
    <div ref={container} className="grid grid-cols-12 mb-36">
      <h2 ref={titleRef} className="split text-6xl col-span-3">
        {title}
      </h2>
      <div className="col-start-5 col-end-13 flex flex-col w-full">
        <div className="flex justify-between w-full">
          <div className="basis-3/4 w-full">
            <h3 ref={HeadlineRef} className="split text-2xl">
              {Headline}
            </h3>
            <p ref={refText} className="split text-lg mt-6">
              {Text}
            </p>
            <ul className="mt-24">
              {items.map((item, index) => (
                <li key={index} className="list-disc text-lg text-primary-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex basis-1/3 justify-end">Meow</div>
        </div>
        <div
          ref={divider}
          className="divider w-full h-[1.5px] bg-primary-100 mt-12"
        ></div>
      </div>
    </div>
  );
};

export default ServiceItem;
