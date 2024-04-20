import React from "react";
import PrimaryButton from "./PrimaryButton";

function CTA() {
  return (
    <section className="relative min-h-screen w-full px-48 py-24 bg-primary-900 flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col z-20">
        <h1 className="Section_Headline text-center">
          Mach jetzt irgendwas.
          <br /> Wirklich irgendwas.
        </h1>
        <p className="text-xl mt-6">
          An independent creative agency for all your branding, advertising, and
          film production needs.
        </p>

        <PrimaryButton link="/blog" title="Alle Beiträge anschauen" />
      </div>
      <div className="Highlight_CTA bg-primary-700 top"></div>
    </section>
  );
}

export default CTA;
