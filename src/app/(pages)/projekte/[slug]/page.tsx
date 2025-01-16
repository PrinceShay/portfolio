import { FullProject, ProjectCard } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import Hero from "@/app/components/pages/Project_Page/Hero";
import ProjectContent from "@/app/components/pages/Project_Page/ProjectContent";
import Challenge from "@/app/components/pages/Project_Page/Challenge";
import NextProject from "@/app/components/pages/Project_Page/NextProject";
import { Metadata } from "next";
import ProjectText from "@/app/components/shared/ui/SectionText";
import ProjectInfo from "@/app/components/pages/Project_Page/ProjectInfo";
export const revalidate = 30;

async function getData(slug: string): Promise<FullProject> {
  const query = `
  *[_type == "project" && slug.current == "${slug}"] {
    "currentSlug": slug.current,
    title,
    content,
    titleImage,
    smallDescription,
    titleVideo{asset->{url,_id}},
    heroText,
    "categories": categories[]->title,
    collectionHeadline,
    collectionBigText,
    mediaCollection[] {
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
    collectionText,
    publishDate
  } [0]
  `;

  const data = await client.fetch(query);
  return data;
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const data: FullProject = await getData(params.slug);
  const titleImageUrl = urlFor(data.titleImage).url();

  return {
    title: `${data.title} - Jannis Röstel`,
    description: data.heroText,
    openGraph: {
      title: `${data.title} - Jannis Röstel`,
      description: data.heroText,
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
      description: data.heroText,
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

export default async function page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const data: FullProject = await getData(params.slug);
  const nextProjects: ProjectCard[] = await getDataNext(params.slug);

  return (
    <section className="">
      <Hero
        title={data.title}
        heroText={data.heroText}
        titleVideo={data.titleVideo.asset.url}
        publishDate={data.publishDate}
      />
      <ProjectInfo
        smallDescription={data.smallDescription}
        categories={data.categories}
        publishDate={data.publishDate}
      />
      <Challenge
        challengeTitle={data.challengeTitle}
        title={data.title}
        challengeContent={data.challengeContent}
        challengeImage={data.challengeImage}
        solutionTitle={data.solutionTitle}
        solutionContent={data.solutionContent}
        solutionImage={data.solutionImage}
      />
      <div className="page_padding mb-24">
        <ProjectText
          title={data.collectionHeadline}
          text={data.collectionBigText}
        />
      </div>
      {data.mediaCollection && (
        <ProjectContent mediaCollection={data.mediaCollection} />
      )}{" "}
      <NextProject projects={nextProjects} />
    </section>
  );
}
