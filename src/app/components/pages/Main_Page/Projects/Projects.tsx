// Projects.tsx
import React from "react";
import ProjectList from "./ProjectList";
import PrimaryButton from "../../../shared/ui/PrimaryButton";
import HugeHeadline from "@/app/components/shared/ui/HugeHeadline";

async function Projects() {
  return (
    <section className="py-32 page_padding overflow-clip">
      <div className="sm:h-screen flex items-center justify-center whitespace-nowrap sticky top-1/3 sm:top-0">
        <HugeHeadline text="Projekte" fontSizeClass="text-[40vw]" />
      </div>
      {/* @ts-expect-error Server Component */}
      <ProjectList />
      <div className="flex justify-center mt-8">
        <PrimaryButton title="Alle Projekte" link="/projekte" />
      </div>
    </section>
  );
}

export default Projects;
