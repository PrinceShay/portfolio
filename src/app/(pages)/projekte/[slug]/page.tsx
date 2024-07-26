import { FullProject, ProjectCard } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import Hero from "@/app/components/pages/Project_Page/Hero";
import ProjectContent from "@/app/components/pages/Project_Page/ProjectContent";
import Challenge from "@/app/components/pages/Project_Page/Challenge";
import NextProject from "@/app/components/pages/Project_Page/NextProject";
import { Metadata } from "next";

export const revalidate = 30;

async function getData(slug: string): Promise<FullProject> {
  const query = `
  *[_type == "project" && slug.current == "${slug}"] {
    "currentSlug": slug.current,
    title,
    content,
    titleImage,
    titleVideo{asset->{url,_id}},
    introText,
    "categories": categories[]->title,
    "mediaCollection": mediaCollection[] {
        ...,
        asset->{
            _id,
            url,
            mimeType
        }
    },
    challengeTitle,
    challengeContent,
    challengeImage,
    solutionTitle,
    solutionContent,
    solutionImage,
    collectionTitle,
    collectionText
  } [0]
  `;

  const data = await client.fetch(query);
  return data;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data: FullProject = await getData(params.slug);
  const titleImageUrl = urlFor(data.titleImage).url();

  return {
    title: `${data.title} - Jannis Röstel`,
    description: data.introText,
    openGraph: {
      title: `${data.title} - Jannis Röstels`,
      description: data.introText,
      images: [
        {
          url: titleImageUrl,
          alt: `${data.title} Image`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.title} - Your Site Name`,
      description: data.introText,
      images: titleImageUrl,
    },
  };
}

async function getDataNext(currentSlug: string): Promise<ProjectCard[]> {
  const query = `
  *[_type == 'project' && slug.current != "${currentSlug}"] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage,
    id,
    "categories": categories[]->title
  }
  `;

  const dataNext = await client.fetch(query);
  return dataNext;
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: FullProject = await getData(params.slug);
  const nextProjects: ProjectCard[] = await getDataNext(params.slug);

  return (
    <section className="">
      <Hero
        title={data.title}
        introText={data.introText}
        titleVideo={data.titleVideo.asset.url}
      />
      <Challenge
        challengeTitle={data.challengeTitle}
        challengeContent={data.challengeContent}
        challengeImage={data.challengeImage}
        solutionTitle={data.solutionTitle}
        solutionContent={data.solutionContent}
        solutionImage={data.solutionImage}
      />

      <ProjectContent
        title={data.collectionTitle}
        text={data.collectionText}
        mediaCollection={data.mediaCollection}
      />
      <NextProject projects={nextProjects} />
    </section>
  );
}
