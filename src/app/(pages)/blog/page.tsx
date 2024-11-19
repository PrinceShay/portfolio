import BlogItemLarge from "@/app/components/pages/BlogCollection/BlogItemLarge";
import React from "react";
import { ProjectCard } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import SectionText from "@/app/components/shared/ui/SectionText";
import PrimaryButton from "@/app/components/shared/ui/PrimaryButton";
import BlogItem from "@/app/components/pages/Main_Page/Blog/BlogItem";
import CTAWindow from "@/app/components/shared/ui/CTAWindow";
import { Metadata } from "next";

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

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: `Blog – Jannis Röstel | Designer & Entwickler aus Karlsruhe`,
    description:
      "Spannende Beiträge rund um Webdesign, Webentwicklung, Webflow und Motiondesign – Inspiration und Know-how für deine digitalen Projekte!",
    openGraph: {
      title: `Blog – Jannis Röstel | Designer & Entwickler aus Karlsruhe`,
      description:
        "Spannende Beiträge rund um Webdesign, Webentwicklung, Webflow und Motiondesign – Inspiration und Know-how für deine digitalen Projekte!",
      images: [
        {
          url: "/assets/images/Hero.jpg",
          alt: `Blog – Jannis Röstel | Designer & Entwickler aus Karlsruhe`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Blog – Jannis Röstel | Designer & Entwickler aus Karlsruhe`,
      description:
        "Spannende Beiträge rund um Webdesign, Webentwicklung, Webflow und Motiondesign – Inspiration und Know-how für deine digitalen Projekte!",
      images: "",
    },
  };
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
      <section className="py-64 flex flex-col page_padding">
        <SectionText
          title="Blogbeiträge"
          text="Spannende Beiträge rund um Webdesign, Webentwicklung, Webflow und Motiondesign – Inspiration und Know-how für deine digitalen Projekte!"
        />

        <BlogItemLarge post={dataFeature} idx={0} />

        <div className="mt-12 grid grid-cols-12 w-full max-w-[1600px] mx-auto mb-24">
          <h2 className="text-4xl col-span-12 mb-6">Alle Beiträge</h2>
          <div className=" col-start-1 col-end-13 grid xl:grid-cols-3 grid-flow-row gap-16 xl:gap-8 relative">
            {dataItem.map((post: ProjectCard, idx: number) => (
              <BlogItem key={post.currentSlug} post={post} idx={idx} />
            ))}
          </div>
        </div>
        <CTAWindow
          title="Bereit, wenn du es bist"
          text="Schreib mir eine kurze Mail und ich melde mich bei dir."
        />
      </section>
    );
  } catch (error) {
    console.error("Error fetching data", error);
    return <p>Loading...</p>;
  }
}
