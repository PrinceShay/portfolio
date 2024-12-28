import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedImage from "@/app/components/shared/ui/AnimatedImage";

export default function HeroGridAnimation() {
  const heroScrollRef = useRef(null);
  const heroGridRef = useRef(null);
  const heroGridRow1 = useRef(null);
  const heroGridRow2 = useRef(null);
  const heroGridRow3 = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(heroScrollRef.current, { opacity: 1 });

    // animate in
    gsap.from(".js_heroGridItem", {
      yPercent: 80,
      duration: 1.6,
      opacity: 0,
      ease: "power4.out",
      stagger: {
        each: 0.1,
        ease: "power2.inOut",
      },
      delay: 0.1,
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

    // scale animation
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
    <div ref={heroScrollRef} className="h-[300vh] overflow-clip opacity-0">
      <div
        ref={heroGridRef}
        className="flex flex-row items-center justify-center gap-16 w-screen h-screen sticky top-0"
      >
        <div
          ref={heroGridRow1}
          className="js_heroGridRow flex flex-col items-center justify-center gap-16 w-screen"
        >
          <div className="js_heroGridItem w-screen h-screen  relative">
            <AnimatedImage
              src="/assets/images/hero/real-estate-green-beta.vercel2.jpg"
              alt="Hero Screen von der Boss Lounge Bar Webseite"
            />
          </div>
          <div className="js_heroGridItem w-screen h-screen  relative">
            <AnimatedImage
              src="/assets/images/hero/2ae7f393f79d6041a7bed5ee6cd3c779979e689a-1600x781.webp"
              alt="Screenshot vom Spline Interface von der 3D Flasche für die Alle Farben Wein Webseite"
            />
          </div>
          <div className="js_heroGridItem w-screen h-screen  relative">
            <AnimatedImage
              src="/assets/images/hero/real-estate-green-beta.vercel5.jpg"
              alt="Hero Screen der Alle Farben Wein Webseite"
            />
          </div>
        </div>

        <div
          ref={heroGridRow2}
          className="js_heroGridRow flex flex-col items-center justify-center gap-16 w-screen"
        >
          <div className="js_heroGridItem w-screen h-screen  relative">
            <AnimatedImage
              src="/assets/images/hero/Landing-min.jpg"
              alt="Gallerie Ansicht Karl-Heinz Krause Webseite"
            />
          </div>

          {/* Video bleibt unverändert */}
          <div className="w-screen h-screen bg-primary-500">
            <video
              src="/assets/videos/heroAnimNew.webm"
              className="w-full h-full object-cover"
              loop
              autoPlay
              muted
              playsInline
            ></video>
          </div>

          <div className="js_heroGridItem w-screen h-screen  relative">
            <AnimatedImage
              src="/assets/images/hero/366a5a11c87fa3418603a330fa785a6bc247499a-800x533.jpg"
              alt="Karl-Heinz Krause Webseite"
            />
          </div>
        </div>

        <div
          ref={heroGridRow3}
          className="js_heroGridRow flex flex-col items-center justify-center gap-16 w-screen"
        >
          <div className="js_heroGridItem w-screen h-screen  relative">
            <AnimatedImage
              src="/assets/images/hero/dbce91a75a828b41423ed613354d14e721ba6b6a-1500x1125.webp"
              alt="Alle Farben Wein Hero Screen"
            />
          </div>
          <div className="js_heroGridItem w-screen h-screen  relative">
            <AnimatedImage
              src="/assets/images/hero/real-estate-green-beta.vercel4.jpg"
              alt="Boss Lounge Webseite"
            />
          </div>
          <div className="js_heroGridItem w-screen h-screen  relative">
            <AnimatedImage
              src="/assets/images/hero/Desktop - 2 Kopie.webp"
              alt="Karl-Heinz Krause Webseite"
            />
          </div>
          <div className="js_heroGridItem w-screen h-screen  relative">
            <AnimatedImage
              src="/assets/images/hero/59a64c496c6ce8afd54fb17652a7d089bf438738-1600x2400.webp"
              alt="Herobereich einer Immobilienmakler Webseite"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
