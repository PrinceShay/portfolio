"use client";
import React, { useRef, useState } from "react";
import { Lock, User, Zap, Cpu } from "lucide-react";
import PrimaryButton from "@/app/components/shared/ui/PrimaryButton";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// KeineVerstecktenKosten-Komponente bleibt unverändert
export function KeineVerstecktenKosten() {
  return (
    <div className="relative w-full h-full flex flex-col justify-end items-start z-20">
      <div className="w-full h-full items-center justify-center absolute flex z-10 rounded-2xl overflow-hidden">
        <video
          src="/assets/videos/lockAnim.webm"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div className="flex w-full flex-col items-start p-6 sm:p-12 relative z-20 bg-gradient-to-b from-transparent to-darkBlue-400 to-60% rounded-2xl">
        <div className="bg-primary-500 rounded-lg p-3 mb-8">
          <Lock size={32} />
        </div>
        <h2 className="text-4xl mb-6 font-semibold">
          Keine versteckten Kosten
        </h2>
        <p className="text-xl text-gray-300 max-w-prose">
          Ich arbeite mit Festpreisen. Das bedeutet, dass es keine versteckten
          Kosten gibt. Du weißt genau, was du für dein Budget erhältst, ohne
          unangenehme Überraschungen.
        </p>
      </div>
    </div>
  );
}

// Persönlicher Ansprechpartner
export function PersoenlicherAnsprechpartner() {
  const benefitRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement[]>([]);

  // Initialisiere die Refs für die Nachrichten
  messagesRef.current = [];

  useGSAP(() => {
    if (!benefitRef.current || messagesRef.current.length === 0) return;

    gsap.from(messagesRef.current, {
      x: (index: number) => (index % 2 === 0 ? -100 : 100),
      opacity: 0,
      stagger: 0.2,
      duration: 1.6,
      ease: "power4.out",
      scrollTrigger: {
        trigger: benefitRef.current,
        start: "top 80%",
        toggleActions: "play pause resume reset",
      },
    });
  }, []);

  return (
    <div
      ref={benefitRef}
      className="relative w-full h-full flex flex-col justify-end items-start z-20"
    >
      <div className="w-full h-full absolute overflow-hidden rounded-2xl p-6 sm:p-12">
        <div className="flex flex-col gap-6">
          {/* Nachricht von Jannis */}
          <div
            className="flex items-center justify-center gap-4"
            ref={(el) => {
              if (el) messagesRef.current.push(el);
            }}
          >
            <div className="w-16 h-16 rounded-full overflow-hidden relative border-2 border-primary-500">
              <Image
                src={"/assets/images/profile/slider/SON08701.jpg_web_sw.jpg"}
                alt="Jannis Röstel"
                fill
                className="object-cover scale-[3] mt-11 ml-5"
                sizes="40vw"
              />
            </div>
            <div className="rounded-t-full rounded-r-full bg-primary-900 text-md lg:text-xl px-6 py-3">
              Hallo, wie kann ich dir helfen?
            </div>
          </div>
          {/* Nachricht vom Kunden */}
          <div
            className="flex flex-row-reverse items-center justify-center gap-4"
            ref={(el) => {
              if (el) messagesRef.current.push(el);
            }}
          >
            <div className="min-w-16 min-h-16 max-w-16 max-h-16 p-4 flex items-center justify-center rounded-full overflow-hidden relative border-2 border-primary-500">
              <User size={"100%"} />
            </div>
            <div className="rounded-tr-full rounded-s-full bg-primary-900 text-md lg:text-xl px-6 py-3">
              Hi Jannis, meine Website lädt sehr langsam. Kannst du dir das
              anschauen?
            </div>
          </div>
          {/* Antwort von Jannis */}
          <div
            className="flex items-center justify-center gap-4"
            ref={(el) => {
              if (el) messagesRef.current.push(el);
            }}
          >
            <div className="w-16 h-16 rounded-full overflow-hidden relative border-2 border-primary-500">
              <Image
                src={"/assets/images/profile/slider/SON08701.jpg_web_sw.jpg"}
                alt="Jannis Röstel"
                fill
                className="object-cover scale-[3] mt-11 ml-5"
                sizes="40vw"
              />
            </div>
            <div className="rounded-t-full rounded-r-full bg-primary-900 text-md lg:text-xl px-6 py-3">
              Klar, ich überprüfe das sofort und melde mich gleich bei dir.
            </div>
          </div>
          {/* Weitere Nachricht vom Kunden */}
          <div
            className="flex flex-row-reverse items-center justify-center gap-4"
            ref={(el) => {
              if (el) messagesRef.current.push(el);
            }}
          >
            <div className="min-w-16 min-h-16 max-w-16 max-h-16 p-4 flex items-center justify-center rounded-full overflow-hidden relative border-2 border-primary-500">
              <User size={"100%"} />
            </div>
            <div className="rounded-tr-full rounded-s-full bg-primary-900 text-md lg:text-xl px-6 py-3">
              Super, danke für die schnelle Hilfe!
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full justify-end items-start p-6 sm:p-12 relative z-20 bg-gradient-to-b from-transparent to-darkBlue-400 to-60% rounded-2xl">
        <div className="bg-primary-500 rounded-lg p-3 mb-8">
          <User size={32} />
        </div>
        <h2 className="text-4xl mb-6 font-semibold">
          Persönlicher Ansprechpartner
        </h2>
        <p className="text-xl text-gray-300 max-w-prose">
          Während des gesamten Projekts hast du stets einen festen
          Ansprechpartner – mich. Das garantiert klare Kommunikation, schnelle
          Antworten auf deine Fragen und individuelle Betreuung.
        </p>
      </div>
    </div>
  );
}

// Schnell. Effizient. Erschwinglich.
export function SchnellEffizientErschwinglich() {
  return (
    <div className="relative w-full h-full group flex flex-col justify-end items-start z-20 overflow-hidden rounded-2xl">
      <div className="w-full h-3/4 absolute left-0 top-0">
        <video
          src="/assets/videos/Zap.webm"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </div>
      <div className="flex flex-col w-full h-full justify-end items-start p-6 sm:p-12 relative z-20 bg-gradient-to-b from-transparent to-darkBlue-400 to-60% rounded-2xl">
        <div className="bg-primary-500 rounded-lg p-3 mb-8">
          <Zap size={32} />
        </div>
        <h2 className="text-4xl mb-6 font-semibold">
          Schnell. Effizient. Erschwinglich.
        </h2>
        <p className="text-xl text-gray-300 max-w-prose">
          Mit optimierten Prozessen bringe ich dein Projekt zügig und in
          höchster Qualität ans Ziel – und das zu einem Bruchteil der Kosten
          einer teuren Agentur. Ohne Kompromisse.
        </p>
      </div>
    </div>
  );
}

// Modernste Technologie. Maximale Geschwindigkeit.
export function ModernsteTechnologie() {
  const data = [
    { label: "Performance", value: 97 },
    { label: "SEO", value: 100 },
    { label: "Best Practices", value: 95 },
  ];

  const [progressValues, setProgressValues] = useState<number[]>([0, 0, 0]);
  const benefitRef = useRef<HTMLDivElement>(null);
  const progressAnims = useRef<{ val: number }[]>(data.map(() => ({ val: 0 })));

  useGSAP(() => {
    if (!benefitRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: benefitRef.current,
        start: "top 100%",
        toggleActions: "play pause resume reset",
      },
    });

    tl.from("#circleBackground", {
      scale: 0.6,
      opacity: 0,
      duration: 3,
      ease: "power4.out",
    });

    tl.to(
      progressAnims.current,
      {
        val: (index: number) => data[index].value,
        duration: 1.5,
        ease: "power4.out",
        onUpdate: function () {
          setProgressValues(
            progressAnims.current.map((item) => Math.round(item.val))
          );
        },
        stagger: 0.2,
      },
      "<"
    );
  }, []);

  return (
    <div
      ref={benefitRef}
      className="relative w-full h-full flex flex-col justify-end items-start z-20 p-6 sm:p-12 overflow-hidden rounded-2xl"
    >
      <div className="w-full h-full flex justify-center relative">
        <div
          id="circleBackground"
          className="w-96 bg-gradient-to-br from-transparent to-darkBlue-500 opacity-30 rounded-full aspect-square absolute -top-[35rem] bg-gradient"
        ></div>
        <div className="flex gap-8">
          {data.map((item, index) => (
            <div key={index} className={`relative w-32 h-32 circle-${index}`}>
              <CircularProgressbar
                value={progressValues[index]}
                styles={buildStyles({
                  pathColor: `#B17AFF`,
                  trailColor: "#231832",
                  strokeLinecap: "round",
                  backgroundColor: "#1F1F1F",
                })}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl text-white font-semibold text-center">
                  {progressValues[index]}
                  <br />
                  <div className="text-sm opacity-60">/100</div>
                </span>
              </div>
              <p className="text-center mt-2 text-white">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col items-start relative z-20 ">
        <div className="bg-primary-500 rounded-lg p-3 mb-8">
          <Cpu size={32} />
        </div>
        <h2 className="text-4xl mb-6 font-semibold">
          Modernste Technologie. Maximale Geschwindigkeit.
        </h2>
        <p className="text-xl text-gray-300 max-w-prose">
          Deine Website lädt blitzschnell, läuft reibungslos und stärkt deine
          Präsenz in Suchmaschinen – für ein Erlebnis, das deine Kunden
          begeistert.
        </p>
      </div>
    </div>
  );
}

// BenefitCTA
export const BenefitCTA = () => {
  const ctaParent = useRef<HTMLDivElement>(null);
  const firstColumnRef = useRef<HTMLDivElement>(null);
  const secondColumnRef = useRef<HTMLDivElement>(null);
  const thirdColumnRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (
      !ctaParent.current ||
      !firstColumnRef.current ||
      !secondColumnRef.current ||
      !thirdColumnRef.current
    )
      return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ctaParent.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    tl.to(firstColumnRef.current, {
      y: "-20%",
      ease: "none",
    });

    tl.to(
      secondColumnRef.current,
      {
        y: "20%",
        ease: "none",
      },
      "<"
    );

    tl.to(
      thirdColumnRef.current,
      {
        y: "-20%",
        ease: "none",
      },
      "<"
    );

    tl.from(
      ctaParent.current,
      {
        rotateX: 20,
        ease: "none",
      },
      "<"
    );
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-end items-start z-20 relative rounded-2xl overflow-hidden">
      <div
        style={{ perspective: "1500px" }}
        className="w-full h-full absolute left-0 top-0 z-10 rounded-2xl overflow-hidden flex items-center justify-center"
      >
        <div
          style={{
            transform: "rotateY(12deg) rotateX(56deg) rotateY(347deg)",
          }}
          className="flex min-w-[150%] h-full items-center justify-center gap-4"
          ref={ctaParent}
        >
          {/* Erste Spalte */}
          <div
            ref={firstColumnRef}
            className="relative flex flex-col basis-1/3 shrink-0 gap-4"
          >
            <Image
              src="/assets/images/main/Benefits/wg (1).jpg"
              width={500}
              height={600}
              className="object-cover w-full h-full shadow-lg rounded-xl"
              alt="Screenshot von Wessa Gruppe Webseite"
              sizes="20vw"
            />
            <Image
              src="/assets/images/main/Benefits/khk (2).jpg"
              width={500}
              height={600}
              className="object-cover w-full h-full shadow-lg rounded-xl"
              alt="Screenshot von Karl-Heinz Krause Webseite"
              sizes="20vw"
            />
            <Image
              src="/assets/images/main/Benefits/wg (2).jpg"
              width={500}
              height={600}
              className="object-cover w-full h-full shadow-lg rounded-xl"
              alt="Screenshot von Wessa Gruppe Webseite"
              sizes="20vw"
            />
            <Image
              src="/assets/images/main/Benefits/khk (1).jpg"
              width={500}
              height={600}
              className="object-cover w-full h-full shadow-lg rounded-xl"
              alt="Screenshot von Karl-Heinz Krause Webseite"
              sizes="20vw"
            />
            <Image
              src="/assets/images/main/Benefits/khk (3).jpg"
              width={500}
              height={600}
              className="object-cover w-full h-full shadow-lg rounded-xl"
              alt="Screenshot von Karl-Heinz Krause Webseite"
              sizes="20vw"
            />
          </div>

          {/* Zweite Spalte */}
          <div
            ref={secondColumnRef}
            className="relative flex flex-col basis-1/3 gap-4 mt-48"
          >
            <Image
              src="/assets/images/main/Benefits/hf (1).jpg"
              width={500}
              height={600}
              className="object-cover w-full h-full shadow-lg rounded-xl"
              alt="Screenshot von HomeFinder Webseite"
              sizes="20vw"
            />
            <Image
              src="/assets/images/main/Benefits/hf (3).jpg"
              width={500}
              height={600}
              className="object-cover w-full h-full shadow-lg rounded-xl"
              alt="Screenshot von HomeFinder Webseite"
              sizes="20vw"
            />
            <Image
              src="/assets/images/main/Benefits/hf (2).jpg"
              width={500}
              height={600}
              className="object-cover w-full h-full shadow-lg rounded-xl "
              alt="Screenshot von HomeFinder Webseite"
              sizes="20vw"
            />
            <Image
              src="/assets/images/main/Benefits/hf (4).jpg"
              width={500}
              height={600}
              className="object-cover w-full h-full shadow-lg rounded-xl"
              alt="Screenshot von HomeFinder Webseite"
              sizes="20vw"
            />
            <Image
              src="/assets/images/main/Benefits/hf (2).jpg"
              width={500}
              height={600}
              className="object-cover w-full h-full rounded-xl"
              alt="Screenshot von HomeFinder Webseite"
              sizes="20vw"
            />
          </div>

          {/* Dritte Spalte */}
          <div
            ref={thirdColumnRef}
            className="relative flex flex-col basis-1/3 gap-4"
          >
            <Image
              src="/assets/images/main/Benefits/khk (2).jpg"
              width={500}
              height={600}
              className="object-cover w-full h-full rounded-xl"
              alt="Screenshot von Karl-Heinz Krause Webseite"
              sizes="20vw"
            />
            <Image
              src="/assets/images/main/Benefits/wg (1).jpg"
              width={500}
              height={600}
              className="object-cover w-full h-full rounded-xl"
              alt="Screenshot von Wessa Gruppe Webseite"
              sizes="20vw"
            />
            <Image
              src="/assets/images/main/Benefits/khk (3).jpg"
              width={500}
              height={600}
              className="object-cover w-full h-full shadow-lg rounded-xl"
              alt="Screenshot von Karl-Heinz Krause Webseite"
              sizes="20vw"
            />
            <Image
              src="/assets/images/main/Benefits/wg (2).jpg"
              width={500}
              height={600}
              className="object-cover w-full h-full"
              alt="Screenshot von Wessa Gruppe Webseite"
              sizes="20vw"
            />
            <Image
              src="/assets/images/main/Benefits/khk (1).jpg"
              width={500}
              height={600}
              className="object-cover w-full h-full"
              alt="Screenshot von Karl-Heinz Krause Webseite"
              sizes="20vw"
            />
          </div>
        </div>
      </div>
      <div className="h-full w-full p-6 sm:p-12 relative flex justify-end flex-col items-start z-20 bg-gradient-to-b from-[#46306625] to-darkBlue-400 to-80%">
        <h2 className="text-4xl mb-6 font-semibold">
          Zusammen Großes erreichen.
        </h2>
        <p className="text-xl text-gray-300 max-w-prose mb-8">
          Deine Website. Dein Stil. Lass uns starten.
        </p>
        <PrimaryButton link="/kontakt" title="Lass uns loslegen" />
      </div>
    </div>
  );
};
