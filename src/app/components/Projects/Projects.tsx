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
  console.log(data);
  return (
    <section className=" max-w-screen m-auto py-52 flex flex-wrap group-odd:w-1/3">
      {data.map((post, idx) => (
        <Link
          className="group"
          key={idx}
          href={`/projekte/${post.currentSlug}`}
        >
          <div>
            <Image
              className="rounded-xl"
              width={500}
              height={500}
              alt={post.title}
              src={urlFor(post.titleImage).url()}
            ></Image>
            <h2 className="text-2xl mt-4">{post.title}</h2>
          </div>
        </Link>
      ))}
    </section>
  );
}
