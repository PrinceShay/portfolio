import React, { useEffect, useState } from "react";
import ProjectList from "./ProjectList";
import ProjectText from "../../../shared/ui/SectionText";
import PrimaryButton from "../../../shared/ui/PrimaryButton";

function Projects() {
  return (
    <section className="pt-32 px-12 md:px-24 lg:px-48">
      <ProjectText
        title="Aktuelle Cases"
        text="An independent creative agency for all your branding, advertising, and film production needs."
      />
      <ProjectList />
      <div className=" flex justify-center">
        <PrimaryButton title="Alle Projekte" link="/projekte" />
      </div>
    </section>
  );
}

export default Projects;
