import BlogItemLarge from "@/app/components/pages/BlogCollection/BlogItemLarge";
import React from "react";
import { ProjectCard } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import SectionText from "@/app/components/shared/ui/SectionText";
import PrimaryButton from "@/app/components/shared/ui/PrimaryButton";
import BlogItem from "@/app/components/pages/Main_Page/Blog/BlogItem";

// Function to fetch data items
async function getDataItems(): Promise<ProjectCard[]> {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage,
    "publishDate": _createdAt
  }`;
  const dataItem = await client.fetch(query);
  // Return all except the first item
  return dataItem.slice(1);
}

// Function to fetch featured data
async function getDataFeature(): Promise<ProjectCard> {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage,
    "publishDate": _createdAt
  }`;
  const dataFeature = await client.fetch(query);
  // Return only the first item
  return dataFeature[0];
}

export default async function BlogPage() {
  try {
    // Fetch data items
    const dataItem: ProjectCard[] = await getDataItems();
    const dataFeature: ProjectCard = await getDataFeature(); // Adjust the type here

    if (!Array.isArray(dataItem) || !dataFeature) {
      console.error("Fetched data is not correct", { dataItem, dataFeature });
      return <p>Loading...</p>;
    }

    return (
      <section className="py-64 flex flex-col items-center px-6 md:px-24 lg:px-48">
        <BlogItemLarge post={dataFeature} idx={0} /> {/* Handle single item */}
        <div className="mt-12 grid grid-cols-12 w-full">
          <div className=" col-start-1 col-end-13 grid xl:grid-cols-3 grid-flow-row gap-16 xl:gap-8 relative">
            {dataItem.map((post: ProjectCard, idx: number) => (
              <BlogItem key={post.currentSlug} post={post} idx={idx} />
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching data", error);
    return <p>Loading...</p>;
  }
}
