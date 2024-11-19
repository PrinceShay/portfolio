import React from "react";
import ButtonPrimary from "./components/shared/Navbar/ButtonPrimary";
import PrimaryButton from "./components/shared/ui/PrimaryButton";

function notFound() {
  return (
    <section className="w-full h-screen justify-center flex flex-col items-center">
      <h1 className="Section_Headline">404</h1>
      <p className="text-2xl mb-12">Wie bist du hierher gekommen?</p>
      <PrimaryButton title="Zurück zur Startseite" link="/" />
    </section>
  );
}

export default notFound;
