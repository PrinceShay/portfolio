import React from "react";
import JobItem from "./JobItem";

function CV() {
  return (
    <div className="col-start-1 col-end-13 md:col-end-8 xl:col-end-6">
      <h2 className="Section_Headline small mb-12">Erfahrung</h2>
      <ul>
        <JobItem
          jobTitle="Webdesigner und Entwickler"
          company="Accenty"
          JobDate="Oktober 2023 - Heute"
        />
        <JobItem
          jobTitle="Grafikdesign und Marketing"
          company="Wessa Gruppe"
          JobDate="Oktober 2022 - Juli 2023"
        />
        <JobItem
          jobTitle="Ausbildung zum Mediengestalter"
          company="Einrichtungshaus Ehrmann"
          JobDate="August 2019 - Mai 2022"
        />
      </ul>
    </div>
  );
}

export default CV;
