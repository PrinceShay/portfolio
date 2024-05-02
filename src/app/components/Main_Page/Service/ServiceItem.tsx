"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect, useState } from "react";
import SplitType from "split-type";

function ServiceItem() {
  const container = useRef(null);
  const title = useRef(null);
  const RefText = useRef(null);
  const [splitComplete, setSplitComplete] = useState(false);

  useGSAP(
    () => {
      if (splitComplete) {
        var ServiceTL = gsap.timeline({});

        ServiceTL.from(title.current, {
          yPercent: 20,
          opacity: 0,
          rotate: -10,
          duration: 1,
          ease: "power4.out",
        });

        ServiceTL.from("#meow .line", {
          yPercent: 20,
          opacity: 0,
          rotate: -10,
          duration: 1,
          ease: "power4.out",
        });
      } else {
        console.log("sum ting wong");
      }
    },

    { scope: container }
  ); // <-- scope is for selector text (optional)

  return (
    <div ref={container} className="grid grid-cols-12 mb-36">
      <h2 ref={title} className=" text-6xl">
        Web
      </h2>

      <div className=" col-start-5 col-end-13 flex flex-col">
        <div className="flex justify-between">
          <div className=" basis-3/4">
            <h3 className="text-2xl">Meow</h3>
            <p id="meow" ref={RefText} className="text-xl mt-8">
              Die ist ein Beispiel für einen Blindtext, der auf deutsch
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
        <div className="w-full h-[1.5px] bg-primary-100 mt-12"></div>
      </div>
    </div>
  );
}

export default ServiceItem;
