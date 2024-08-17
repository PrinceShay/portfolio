import React from "react";

function Service2() {
  return (
    <section className="py-32 px-6 md:px-24 lg:px-48">
      <h1 className="Section_Headline text-center mb-16">Service</h1>
      <div className=" flex gap-8 min-h-[85vh]">
        <div className="bg-primary-500 p-12 basis-1/2 hover:basis-3/4 transition-all ease-inout duration-700 rounded-2xl flex flex-col items-center">
          <h2 className="Section_Headline small">Webdesign</h2>
          <p className="text-lg text-center mt-6">
            Entdecken Sie die Welt des kreativen Webdesigns und der innovativen
            Webentwicklung. Mit maßgeschneiderten Lösungen, die auf Ihre
            spezifischen Bedürfnisse zugeschnitten sind, verhelfen wir Ihrem
            Online-Auftritt zu einem einzigartigen und beeindruckenden
            Erscheinungsbild. Ob responsive Design oder komplexe Webanwendungen,
            wir bringen Ihre Vision ins Netz.
          </p>
        </div>
        <div className="bg-primary-400 p-12 basis-1/2 hover:basis-3/4 transition-all ease-inout duration-700 rounded-2xl flex flex-col items-center ">
          <h2 className="Section_Headline small text-primary-600">Motion</h2>
          <p className="text-lg text-center mt-6 text-primary-700">
            Entdecken Sie die Welt des kreativen Webdesigns und der innovativen
            Webentwicklung. Mit maßgeschneiderten Lösungen, die auf Ihre
            spezifischen Bedürfnisse zugeschnitten sind, verhelfen wir Ihrem
            Online-Auftritt zu einem einzigartigen und beeindruckenden
            Erscheinungsbild. Ob responsive Design oder komplexe Webanwendungen,
            wir bringen Ihre Vision ins Netz.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Service2;
