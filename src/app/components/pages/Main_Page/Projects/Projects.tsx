import React, { useEffect, useState } from "react";
import ProjectList from "./ProjectList";
import ProjectText from "../../../shared/ui/SectionText";
import PrimaryButton from "../../../shared/ui/PrimaryButton";
import ButtonSecondary from "@/app/components/shared/Navbar/ButtonSecondary";
import HugeHeadline from "@/app/components/shared/ui/HugeHeadline";

function Projects() {
  return (
    <section className="py-32 px-6 md:px-24 lg:px-48">
      <div className="sm:h-screen flex items-center justify-center overflow-hidden whitespace-nowrap sticky top-1/3 sm:top-0">
        <HugeHeadline text="Projekte" fontSizeClass="text-[40vw]" />
      </div>
      <ProjectText title="Aktuelle Cases" text="" />
      <ProjectList />
      <div className=" flex justify-center mt-8">
        <PrimaryButton title="Alle Projekte" link="/projekte" />
      </div>
    </section>
  );
}

export default Projects;
