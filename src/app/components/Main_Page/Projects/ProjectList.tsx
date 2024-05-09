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
    <div className="px-48 grid grid-cols-12 grid-flow-row gap-8 relative">
      {data.map((post, idx) => (
        <ProjectItem key={post.id} post={post} idx={idx} />
      ))}
    </div>
  );
}
