import React, { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroGridAnimation() {
  const heroScrollRef = useRef(null);
  const heroGridRef = useRef(null);
  const heroGridRow1 = useRef(null);
  const heroGridRow2 = useRef(null);
  const heroGridRow3 = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    //animate in
    gsap.from(".js_heroGridItem", {
      yPercent: 80,
      duration: 1.6,
      opacity: 0,
      ease: "power4.out",
      stagger: {
        each: 0.1,
        ease: "power2.inOut",
      },
      delay: 2.2,
    });

    const gridMove = gsap.timeline();

    gridMove.fromTo(
      heroGridRow1.current,
      {
        yPercent: -15,
      },
      {
        yPercent: 15,
        scrollTrigger: {
          trigger: heroScrollRef.current,
          start: "0% 100%",
          end: "100% 0%",
          scrub: true,
        },
      }
    );

    gridMove.fromTo(
      heroGridRow3.current,
      {
        yPercent: 15,
      },
      {
        yPercent: -15,
        scrollTrigger: {
          trigger: heroScrollRef.current,
          start: "0% 100%",
          end: "100% 0%",
          scrub: true,
        },
      }
    );

    //scale animation
    const heroScale = gsap.timeline();
    heroScale.fromTo(
      heroGridRef.current,
      {
        scale: 0.33333,
      },
      {
        scale: 1,
        scrollTrigger: {
          trigger: heroScrollRef.current,
          start: "33% 100%",
          end: "66% 0%",
          scrub: true,
        },
      }
    );
  });

  return (
    <div ref={heroScrollRef} className="h-[300vh] overflow-clip">
      <div
        ref={heroGridRef}
        className="flex flex-row items-center justify-center gap-16 w-screen h-screen sticky top-0"
      >
        <div
          ref={heroGridRow1}
          className="js_heroGridRow flex flex-col items-center justify-center gap-16 w-screen"
        >
          <div className="js_heroGridItem w-screen h-screen bg-primary-700 relative ">
            <Image
              src={
                "/assets/images/hero/048dc6a2fc5a044ab70769fe86065cec13263c6d-1400x933.webp"
              }
              fill
              sizes="50vw"
              className="object-cover"
              alt="Hero Screen von der Boss Lounge Bar Webseite"
            ></Image>
          </div>
          <div className="js_heroGridItem w-screen h-screen bg-primary-700 relative ">
            <Image
              src={
                "/assets/images/hero/2ae7f393f79d6041a7bed5ee6cd3c779979e689a-1600x781.webp"
              }
              fill
              sizes="50vw"
              className="object-cover"
              alt="Screenshot vom Spline Interface von der 3D Flasche für die Alle Farben Wein Webseite"
            ></Image>
          </div>
          <div className="js_heroGridItem w-screen h-screen bg-primary-700 relative ">
            <Image
              src={
                "/assets/images/hero/8ecd9545a05d9f6d52bade95fb693c3b90afc7b4-1600x1200.webp"
              }
              fill
              sizes="50vw"
              className="object-cover"
              alt="Hero Screen der Alle Farben Wein Webseite"
            ></Image>
          </div>
        </div>

        <div
          ref={heroGridRow2}
          className="js_heroGridRow flex flex-col items-center justify-center gap-16 w-screen "
        >
          <div className="js_heroGridItem w-screen h-screen bg-primary-700 relative ">
            <Image
              src={
                "/assets/images/hero/6d4d6f6ee6bc243ca71af9704dab92aff259633c-1600x1067.webp"
              }
              fill
              sizes="50vw"
              className="object-cover"
              alt="Gallerie Ansicht Karl-Heinz Krause Webseite"
            ></Image>
          </div>
          <div className=" w-screen h-screen bg-primary-500 ">
            <video
              src="/assets/videos/heroAnim.webm"
              className="w-full h-full object-cover"
              loop
              autoPlay
              muted
              playsInline
            ></video>
          </div>
          <div className="js_heroGridItem w-screen h-screen bg-primary-700 relative ">
            <Image
              src={
                "/assets/images/hero/366a5a11c87fa3418603a330fa785a6bc247499a-800x533.jpg"
              }
              fill
              sizes="50vw"
              className="object-cover"
              alt="Karl-Heinz Krause Webseite"
            ></Image>
          </div>
        </div>

        <div
          ref={heroGridRow3}
          className="js_heroGridRow flex flex-col items-center justify-center gap-16 w-screen "
        >
          <div className="js_heroGridItem w-screen h-screen bg-primary-700 relative ">
            <Image
              src={
                "/assets/images/hero/dbce91a75a828b41423ed613354d14e721ba6b6a-1500x1125.webp"
              }
              fill
              sizes="50vw"
              className="object-cover"
              alt="Alle Farben Wein Hero Screen"
            ></Image>
          </div>
          <div className="js_heroGridItem w-screen h-screen bg-primary-700 relative ">
            <Image
              src={
                "/assets/images/hero/88a4addf6ee65f5c7060bbfbefdcbc319906f8b9-1800x1350.webp"
              }
              fill
              sizes="50vw"
              className="object-cover"
              alt="Boss Lounge Webseite"
            ></Image>
          </div>
          <div className="js_heroGridItem w-screen h-screen bg-primary-700 relative ">
            <Image
              src={
                "/assets/images/hero/77042f34ec5825357174e79cadd2074ad065bef5-1600x1067.webp"
              }
              fill
              sizes="50vw"
              className="object-cover"
              alt="Karl-Heinz Krause Webseite"
            ></Image>
          </div>
          <div className="js_heroGridItem w-screen h-screen bg-primary-700 relative ">
            <Image
              src={
                "/assets/images/hero/59a64c496c6ce8afd54fb17652a7d089bf438738-1600x2400.webp"
              }
              fill
              sizes="50vw"
              className="object-cover"
              alt="Karl-Heinz Krause Webseite"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}