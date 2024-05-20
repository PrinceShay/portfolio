import React, { useEffect, useState } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ProjectList from "./ProjectList";
import ProjectText from "../../shared/ui/SectionText";

function Projects() {
  return (
    <section className="pt-32">
      <ProjectText
        title="Aktuelle Cases"
        text="An independent creative agency for all your branding, advertising, and film production needs."
      />
      <ProjectList />
    </section>
  );
}

export default Projects;
