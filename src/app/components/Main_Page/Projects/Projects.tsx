import React, { useEffect, useState } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ProjectList from "./ProjectList";
import ProjectText from "./ProjectText";

function Projects() {
  return (
    <section className="pt-64">
      <ProjectText />
      <ProjectList />
    </section>
  );
}

export default Projects;
