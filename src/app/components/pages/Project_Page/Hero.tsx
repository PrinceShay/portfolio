import React from "react";

function Hero({ title, introText }: { title: string; introText: string }) {
  return (
    <>
      <header className="min-h-[80vh] grid grid-cols-12">
        <div className="px-48 col-start-1 col-end-13 flex flex-col items-center justify-center">
          <p className="text-2xl block text-center text-primary font-semibold tracking-wide uppercase">
            {title}
          </p>
          <h1 className="mt-8 block text-center Section_Headline">
            {introText}
          </h1>
        </div>
      </header>
      <div className="w-full h-screen relative">
        <img
          src="/assets/images/Hero.jpg"
          className="w-full h-full object-cover absolute top-0 object-top"
        ></img>
      </div>
    </>
  );
}

export default Hero;
