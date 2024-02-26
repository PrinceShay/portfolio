import { ProjectCard } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    <section className=" max-w-screen m-auto py-52 grid grid-flow-col gap-6">
      {data.map((post, idx) => (
        <Link
          className="group max-w-1/2"
          key={idx}
          href={`/projekte/${post.currentSlug}`}
        >
          <div className="relative min-h-96 w-auto h-auto p-6 flex items-end">
            <Image
              className="rounded-xl object-cover absolute"
              fill={true}
              alt={post.title}
              src={urlFor(post.titleImage).url()}
            ></Image>
            <h2 className="text-xl mt-4 relative">{post.title}</h2>
          </div>
        </Link>
      ))}
    </section>
  );
}
