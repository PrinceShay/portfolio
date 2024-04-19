import React from "react";

function Hero() {
  return (
    <section className="HeroWrapper px-48">
      <div className="h-screen items-center grid grid-cols-12">
        <div className="col-start-1 col-span-7">
          <p className="text-2xl mb-8">Hey, mein Name ist</p>
          <h1 className="Section_Headline">Jannis Röstel</h1>
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
            Aanstekelijk-ness® we create advertising that is as entertaining as
            it&apos;s effective. Team up with us to grow your business value
            through contagious creativity.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
