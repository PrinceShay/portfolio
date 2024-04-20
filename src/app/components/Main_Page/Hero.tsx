"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitText from "../../hooks/SplitText";

function Hero() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef(null);
  const text = useRef(null);
  const image = useRef(null);

  useGSAP(
    () => {
      gsap.from("#text .char", { yPercent: 110, opacity: 0 });
    },
    { scope: container }
  );

  useGSAP(() => {
    gsap.fromTo(
      image.current,
      {
        scale: 1,
        yPercent: "-20",
        opacity: 100,
      },
      {
        scale: 1,
        yPercent: "20",
        opacity: 0,

        scrollTrigger: {
          trigger: image.current,
          scrub: true,
          start: "top top",
          end: "bottom top",
          markers: true,
        },
      }
    );
  });

  return (
    <section className="relative px-48 overflow-hidden HeroSection">
      <img
        className="w-full h-full absolute object-cover left-0 z-0 object-top"
        src="/assets/images/Hero.jpg"
        alt="Jannis Röstel"
        ref={image}
      />
      <div className="relative z-10">
        <div
          ref={container}
          className="h-screen items-center grid grid-cols-12"
        >
          <div className="col-start-1 col-span-7">
            <p className="text-2xl mb-8">Hey, mein Name ist</p>
            <h1 ref={text} id="text" className="Section_Headline">
              <SplitText text="Jannis Röstel" />
            </h1>
          </div>
        </div>
        <div className="h-screen items-center grid grid-cols-12">
          <div className="col-span-6 col-start-7 justify-self-end">
            <p className="text-2xl mb-8">Und ich bin</p>
            <h1 className="Section_Headline leading-tight">
              Web- und Motiondesigner
            </h1>
            <p className="text-xl mt-8">
              An independent creative agency for all your branding, advertising
              and film production needs. With our signature style of
              Aanstekelijk-ness® we create advertising that is as entertaining
              as it's effective. Team up with us to grow your business value
              through contagious creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
