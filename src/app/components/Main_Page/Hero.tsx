"use client";
import React, { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { motion, useAnimation } from "framer-motion";

function Hero() {
  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);
  const controls1 = useAnimation();

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);
  const controls2 = useAnimation();

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3);
  const controls3 = useAnimation();

  const ref4 = useRef(null);
  const isInView4 = useInView(ref4);
  const controls4 = useAnimation();

  useEffect(() => {
    if (isInView1) {
      controls1.start("visible");
    } else {
      controls1.start("hidden");
    }
    if (isInView2) {
      controls2.start("visible");
    } else {
      controls2.start("hidden");
    }
    if (isInView3) {
      controls3.start("visible");
    } else {
      controls3.start("hidden");
    }
    if (isInView4) {
      controls4.start("visible");
    } else {
      controls4.start("hidden");
    }
  }, [
    isInView1,
    controls1,
    isInView2,
    controls2,
    isInView3,
    controls3,
    isInView4,
    controls4,
  ]);

  const variants = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 },
  };

  return (
    <section className="HeroWrapper px-48">
      <div className="h-screen items-center grid grid-cols-12">
        <div className="col-start-1 col-span-7">
          <motion.p
            ref={ref1}
            className="text-2xl mb-8"
            initial="hidden"
            animate={controls1}
            variants={variants}
          >
            Hey, mein Name ist
          </motion.p>
          <motion.h1
            ref={ref2}
            className="Section_Headline"
            initial="hidden"
            animate={controls2}
            variants={variants}
          >
            Jannis Röstel
          </motion.h1>
        </div>
      </div>
      <div className="h-screen items-center grid grid-cols-12">
        <div className="col-span-6 col-start-7 justify-self-end">
          <motion.p
            ref={ref3}
            className="text-2xl mb-8"
            initial="hidden"
            animate={controls3}
            variants={variants}
          >
            Und ich bin
          </motion.p>
          <motion.h1
            ref={ref4}
            className="Section_Headline leading-tight"
            initial="hidden"
            animate={controls4}
            variants={variants}
          >
            Web- und Motiondesigner
          </motion.h1>
          <motion.p
            ref={ref4} // Reusing ref4 for simplicity, or use a new ref if needed
            className="text-xl mt-8"
            initial="hidden"
            animate={controls4}
            variants={variants}
          >
            An independent creative agency for all your branding, advertising
            and film production needs. With our signature style of
            Aanstekelijk-ness® we create advertising that is as entertaining as
            it&apos;s effective. Team up with us to grow your business value
            through contagious creativity.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
