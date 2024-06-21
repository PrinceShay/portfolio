import React from "react";
import ButtonSecondary from "../Navbar/ButtonSecondary";

function Footer() {
  return (
    <footer className=" flex flex-col justify-between w-full h-[60vh]  bg-gradient-to-b from-primary-600 to-primary-500 px-12 md:px-24 lg:px-48  pt-24 pb-12 gap-8 rounded-t-[3em] mt-[-3em] relative">
      <div className="flex justify-between">
        <div className="base-1/2">
          <h1 className="text-5xl">Schreib mir eine Nachricht!</h1>
          <p className="text-xl opacity-85 mt-6 max-w-md">
            Projekt im Kopf? Du bist nur eine kleine Nachricht von deinem Glück
            entfernt!😉
          </p>
          <div className="w-full flex gap-4 mt-10">
            <ButtonSecondary
              firstTitle="j.roestel@jannisroestel.de"
              secondTitle="Jetzt kontaktieren"
              link="mailto:j.roestel@jannisroestel.de"
            />
            <ButtonSecondary
              firstTitle="+49 177 3396973"
              secondTitle="Jetzt kontaktieren"
              link="tel:+491773396973"
            />
          </div>
        </div>
        <div className="col-start-8 col-end-13 flex gap-24">
          <div>
            <h2 className=" text-md mb-4 uppercase">Navigation</h2>
            <ul className="text-2xl">
              <li>Projekte</li>
              <li>Profil</li>
              <li>Blog</li>
              <li>Kontakt</li>
            </ul>
          </div>

          <div>
            <h2 className=" text-md mb-4 uppercase">Social</h2>
            <ul className="text-2xl">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Behance</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="Section_Headline">Jannis Röstel</div>
        <div className="flex justify-between">
          <div>© Jannis Röstel 2024</div>
          <div>Impressum Datenschutz</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
