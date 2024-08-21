import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface JobItemProps {
  jobTitle: string;
  company: string;
  JobDate: string;
}

const JobItem: React.FC<JobItemProps> = ({ jobTitle, company, JobDate }) => {
  const ItemRef = useRef<HTMLLIElement>(null);
  const Line = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLHeadingElement>(null);
  const jobTitleRef = useRef<HTMLHeadingElement>(null);
  const JobDateRef = useRef<HTMLParagraphElement>(null);

  const [isSplit, setSplit] = useState(false);

  useEffect(() => {
    if (jobTitleRef.current) {
      new SplitType(jobTitleRef.current, { types: "lines,words,chars" });
    }
    if (companyRef.current) {
      new SplitType(companyRef.current, { types: "lines,words,chars" });
    }
    if (JobDateRef.current) {
      new SplitType(JobDateRef.current, { types: "lines,words,chars" });
    }

    setSplit(true);
  }, []);

  useGSAP(() => {
    if (
      isSplit &&
      jobTitleRef.current &&
      companyRef.current &&
      Line.current &&
      JobDateRef.current
    ) {
      let ItemTL = gsap.timeline({
        scrollTrigger: {
          trigger: ItemRef.current,
          start: "top 80%",
        },
      });

      ItemTL.from(jobTitleRef.current.querySelectorAll(".char"), {
        yPercent: 50,
        opacity: 0,
        stagger: 0.01,
        duration: 0.9,
        rotateX: 45,
        ease: "power4.out",
      });

      ItemTL.from(
        companyRef.current.querySelectorAll(".char"),
        {
          yPercent: 50,
          opacity: 0,
          stagger: 0.01,
          duration: 0.9,
          rotateX: 45,
          ease: "power4.out",
        },
        "<25%"
      );

      ItemTL.from(
        Line.current,
        {
          width: 0,
          duration: 0.9,
          ease: "power4.out",
        },
        "<25%"
      );

      ItemTL.from(
        JobDateRef.current.querySelectorAll(".char"),
        {
          yPercent: 50,
          opacity: 0,
          stagger: 0.01,
          duration: 0.9,
          rotateX: 45,
          ease: "power4.out",
        },
        "<"
      );
    }
  }, [isSplit]);

  return (
    <li ref={ItemRef} className="mb-8">
      <div className="flex flex-col sm:flex-row w-full gap-10 sm:gap-6 justify-between sm:items-end pb-8">
        <div className="flex flex-col">
          <h3 ref={jobTitleRef} className="text-2xl mb-2 split TextTransform">
            {jobTitle}
          </h3>
          <h4
            ref={companyRef}
            className="text-xl text-gray-400 split TextTransform"
          >
            {company}
          </h4>
        </div>
        <p ref={JobDateRef} className="text-xl">
          {JobDate}
        </p>
      </div>
      <div ref={Line} className="h-[1px] bg-gray-200 w-full"></div>
    </li>
  );
};

export default JobItem;
