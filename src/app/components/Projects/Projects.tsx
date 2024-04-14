import React from "react";
import { ProjectCard } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import ProjectItem from "./ProjectItem";

async function getData() {
  const query = `
  *[_type == 'Project'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function () {
  const data: ProjectCard[] = await getData();

  if (!data) {
    return <p>Loading...</p>; // Handle loading state
  }
  return (
    <section className="py-64">
      <div className="text-center pb-24">
        <h1 className="Section_Headline">Aktuelle cases</h1>
        <p className="text-xl mt-6">
          An independent creative agency for all your branding, advertising, and
          film production needs.
        </p>
      </div>
      <div className="grid grid-cols-12 grid-flow-row gap-8 relative">
        {data.map((post, idx) => (
          <ProjectItem key={post.id} post={post} idx={idx} />
        ))}
      </div>
    </section>
  );
}
