import React from "react";
import { ProjectCard } from "@/app/lib/interface"; // Assuming BlogCard is the correct type for blog data
import { client } from "@/app/lib/sanity";
import BlogItem from "./BlogItem";
import SectionText from "../../../shared/ui/SectionText";
import ButtonSecondary from "@/app/components/shared/Navbar/ButtonSecondary";

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

const BlogSection = async () => {
  const data: ProjectCard[] = await getData(); // Changed type to BlogCard for blog data

  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <section className="py-32 flex flex-col items-center px-6 md:px-24 lg:px-48">
      <SectionText
        title="Aktuelle News"
        text="An independent creative agency for all your branding, advertising, and
          film production needs."
      />
      <div className="grid grid-cols-12 w-full">
        <div className="col-start-1 col-end-13 grid xl:grid-cols-3 grid-flow-row gap-16 xl:gap-8 relative max-w-[1600px] mx-auto">
          {data.map((post, idx) => (
            <BlogItem key={post.id} post={post} idx={idx} />
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
