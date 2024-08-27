import React from "react";
import { ProjectCard } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import ProjectItem from "@/app/components/pages/Main_Page/Projects/ProjectItem";
import ProjectText from "@/app/components/shared/ui/SectionText";
import { Metadata } from "next";

async function getData() {
  const query = `
  *[_type == 'project'] | order(_createdAt desc) {
    _id, // Make sure you're selecting an ID or unique identifier for the key
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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return {
    title: `Webdesign & Motiondesign Projekte - Jannis Röstel`,
    description:
      "Entdecke eine Sammlung von Webdesign- und Motiondesign-Projekten von Jannis Röstel. Inspirierende Designs und kreative Lösungen aus Karlsruhe.",
    openGraph: {
      title: `Webdesign & Motiondesign Projekte - Jannis Röstel`,
      description:
        "Entdecke eine Sammlung von Webdesign- und Motiondesign-Projekten von Jannis Röstel. Inspirierende Designs und kreative Lösungen aus Karlsruhe.",
      images: [
        {
          url: "/assets/images/Hero.jpg",
          alt: `Webdesign & Motiondesign Projekte - Jannis Röstel`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Webdesign & Motiondesign Projekte - Jannis Röstel`,
      description:
        "Entdecke eine Sammlung von Webdesign- und Motiondesign-Projekten von Jannis Röstel. Inspirierende Designs und kreative Lösungen aus Karlsruhe.",
      images: "",
    },
  };
}

const ProjectSection = async () => {
  const data: ProjectCard[] = await getData();

  if (!data) {
    return <p>Loading...</p>; // Handle loading state
  }

  return (
    <section className="pt-64 px-6 md:px-24 lg:px-48">
      <ProjectText title="Aktuelle Cases" text="" />
      <div className="max-w-full md:max-w-[124em] mx-auto md:grid grid-cols-12 grid-flow-row gap-8 relative">
        {data.map((post, idx) => (
          <ProjectItem key={post.id} post={post} idx={idx} />
        ))}
      </div>
    </section>
  );
};

// Adding display name to the component to resolve the warning
ProjectSection.displayName = "ProjectSection";

export default ProjectSection;
