import React from "react";
import ButtonSecondary from "../Navbar/ButtonSecondary";
import FooterLink from "./FooterLink";

function Footer() {
  return (
    <footer className=" mt-48 flex flex-col justify-between items-center xl:items-stretch w-full min-h-[60vh]  bg-gradient-to-b from-primary-600 to-primary-500 px-12 md:px-24 lg:px-48  pt-24 pb-12 gap-24 rounded-t-[3em] relative">
      <div className="flex items-center flex-col xl:flex-row gap-16 xl:gap-8 justify-between">
        <div className="base-1/2 text-center md:text-left">
          <h1 className="text-5xl">Schreib mir eine Nachricht!</h1>
          <p className="text-xl opacity-85 mt-6 max-w-md">
            Projekt im Kopf? Du bist nur eine kleine Nachricht von deinem Glück
            entfernt!😉
          </p>
          <div className="w-full flex flex-col md:flex-row gap-4 mt-10">
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
        <div className="flex sm:flex-row flex-col  gap-12 sm:gap-24">
          <div>
            <h2 className=" text-md mb-4 uppercase">Navigation</h2>
            <ul className="text-2xl flex flex-col gap-2">
              <FooterLink url="/projekte" title="Projekte" />
              <FooterLink url="/profil" title="Profil" />
              <FooterLink url="/blog" title="Blog" />
              <FooterLink url="/kontakt" title="Kontakt" />
            </ul>
          </div>

          <div>
            <h2 className=" text-md mb-4 uppercase">Social</h2>
            <ul className="text-2xl flex flex-col gap-2">
              <FooterLink url="/" title="Instagram" />
              <FooterLink url="/" title="LinkedIn" />
              <FooterLink url="/" title="Behance" />
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="Section_Headline text-nowrap">Jannis Röstel</div>
        <div className="flex flex-col gap-4 mb-12 mt-6 items-center sm:items-stretch sm:flex-row justify-between">
          <div>© Jannis Röstel 2024</div>
          <ul className="flex flex-row gap-4">
            <FooterLink url="/impressum" title="Impressum" />
            <FooterLink url="/datenschutz" title="Datenschutz" />
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
