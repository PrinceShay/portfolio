import React, { Suspense } from "react";
import { ProjectCard } from "@/app/lib/interface"; // Assuming BlogCard is the correct type for blog data
import { client } from "@/app/lib/sanity";
import BlogItem from "./BlogItem";
import ButtonSecondary from "@/app/components/shared/Navbar/ButtonSecondary";
import HugeHeadline from "@/app/components/shared/ui/HugeHeadline";

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

export const revalidate = 60;

const BlogSection = async () => {
  const data: ProjectCard[] = await getData(); // Changed type to BlogCard for blog data

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <section className="py-32 flex flex-col items-center page_padding">
      <HugeHeadline text="News" />
      <div className="grid grid-cols-12 w-full">
        <div className="col-start-1 col-end-13 grid xl:grid-cols-3 grid-flow-row gap-16 xl:gap-8 relative max-w-[1600px] mx-auto">
          {data.map((post, idx) => (
            <BlogItem key={post.currentSlug} post={post} idx={idx} />
          ))}
        </div>
      </div>
      <div className="text-xl mt-12">
        <ButtonSecondary firstTitle="Alle Blogbeiträge" link="/blog" />
      </div>
    </section>
  );
};

// Adding display name to the component
BlogSection.displayName = "BlogSection";

export default BlogSection;
