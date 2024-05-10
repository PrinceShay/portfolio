import React from "react";
import { ProjectCard } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import BlogItem from "./BlogItem";
import PrimaryButton from "../../shared/ui/PrimaryButton";
import SectionText from "../../shared/ui/SectionText";

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc)[0..5] {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage,
    "publishDate": _createdAt
}`;
  const data = await client.fetch(query);
  return data;
}

export default async function () {
  const data: ProjectCard[] = await getData();

  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <section className="py-64 flex flex-col items-center px-12 xl:px-48">
      <SectionText
        title="Aktuelle News"
        text="An independent creative agency for all your branding, advertising, and
          film production needs."
      />
      <div className="grid grid-cols-12 w-full">
        <div className=" col-start-1 col-end-13 grid xl:grid-cols-3 grid-flow-row gap-16 xl:gap-8 relative">
          {data.map((post, idx) => (
            <BlogItem key={post.id} post={post} idx={idx} />
          ))}
        </div>
      </div>
      <PrimaryButton link="/blog" title="Alle Beiträge anschauen" />
    </section>
  );
}
