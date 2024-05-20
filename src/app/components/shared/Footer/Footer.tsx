import React from "react";

function Footer() {
  return (
    <footer className="w-full px-48  py-16 gap-8">
      <img
        src="/Navigation/Logo.svg"
        alt="Logo"
        className="w-12  col-start-1 row-start-1 content-end"
      />
      <h1 className="Section_Headline smaller font-bold col-start-1 row-start-2">
        Ich bin eine coole Überschrift
      </h1>

      <h2 className="uppercase col-start-2 row-start-1 content-end tracking-wide">
        Navigation
      </h2>
      <ul className="col-start-2 row-start-2">
        <li>Projekte</li>
        <li>Profil</li>
        <li>News</li>
        <li>Kontakt</li>
      </ul>
      <h2 className="uppercase  col-start-3 row-start-1 content-end tracking-wide justify-end">
        Social
      </h2>
      <ul className="col-start-3 row-start-2 justify-end">
        <li>Linkedin</li>
        <li>Instagram</li>
        <li>Behance</li>
      </ul>
      <div className="row-start-3 col-start-1 auto-rows-auto">
        {" "}
        c 2024 Jannis Röstel
      </div>
      <ul className=" row-start-3 col-start-3 flex gap-4 auto-rows-auto justify-end">
        <li>Impressum</li>
        <li>Datenschutz</li>
      </ul>
    </footer>
  );
}

export default Footer;
