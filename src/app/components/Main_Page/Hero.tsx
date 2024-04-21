"use client";
import AnimatedText from "../Functions/AnimatedText";

function Hero() {
  return (
    <section className="relative px-48 overflow-hidden HeroSection">
      <img
        className="w-full h-full absolute object-cover left-0 z-0 object-top"
        src="/assets/images/Hero.jpg"
        alt="Jannis Röstel"
      />
      <div className="relative z-10">
        <div className="h-screen items-center grid grid-cols-12">
          <div className="col-start-1 col-span-7">
            <p className="text-2xl mb-8">Hey, mein Name ist</p>
            <AnimatedText
              text="Jannis Röstel"
              className="Section_Headline"
              triggerStart="top 90%"
              animationType="fadeUp"
              as="h1"
            />
          </div>
        </div>
        <div className="h-screen items-center grid grid-cols-12">
          <div className="col-span-6 col-start-7 justify-self-end">
            <p className="text-2xl mb-8">Und ich bin</p>
            <AnimatedText
              text="Web- und Motiondesigner"
              className="Section_Headline leading-tight"
              triggerStart="top 90%"
              animationType="staggeredFadeUp"
              as="h1"
            />
            <AnimatedText
              text="An independent creative agency for all your branding, advertising
              and film production needs. With our signature style of
              Aanstekelijk-ness® we create advertising that is as entertaining
              as it is effective. Team up with us to grow your business value
              through contagious creativity."
              className="text-xl mt-8"
              triggerStart="top 80%"
              animationType="lineStagger"
              as="div"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
