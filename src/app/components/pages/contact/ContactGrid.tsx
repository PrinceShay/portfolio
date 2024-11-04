import React from "react";
import ContactForm2 from "./ContactForm2";
import ContactMethods from "./ContactMethods";

export default function ContactGrid() {
  return (
    <section className="flex flex-col-reverse items-start min-h-[75vh] py-12 w-full gap-16 max-w-[1600px] z-10">
      <div className="2xl:basis-1/3 basis-full bg-darkBlue-400 backdrop-blur-xl bg-opacity-75 w-full  rounded-2xl flex flex-col gap-8 p-6 md:p-12 border-2 border-primary-700">
        <ContactMethods />
      </div>
      <div className="2xl:basis-2/3 basis-full min-h-full bg-darkBlue-400 backdrop-blur-xl bg-opacity-75 w-full rounded-2xl flex items-center justify-center p-6 md:p-12 border-2 border-primary-700">
        <ContactForm2 />
      </div>
    </section>
  );
}
