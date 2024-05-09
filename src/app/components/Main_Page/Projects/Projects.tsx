import React from "react";
import { ProjectCard } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import ProjectItem from "./ProjectItem";

async function getData() {
  const query = `
  *[_type == 'project'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage,
    titleVideo{asset->{url,_id}},
    "categories": categories[]->title,
    introText
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
    <section className="pt-64">
      <div className="text-center pb-24">
        <h1 className="font-humane">Aktuelle Cases</h1>
        <p className="text-xl mt-6">
          An independent creative agency for all your branding, advertising, and
          film production needs.
        </p>
      </div>
      <div className="px-48 grid grid-cols-12 grid-flow-row gap-8 relative">
        {data.map((post, idx) => (
          <ProjectItem key={post.id} post={post} idx={idx} />
        ))}
      </div>
    </section>
  );
}
