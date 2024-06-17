import { FullProject } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Hero from "@/app/components/pages/Project_Page/Hero";
import ProjectContent from "@/app/components/pages/Project_Page/ProjectContent";
import Challenge from "@/app/components/pages/Project_Page/Challenge";

export const revalidate = 30;

async function getData(slug: string) {
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
    solutionImage
  } [0]
  `;

  const data = await client.fetch(query);
  return data;
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: FullProject = await getData(params.slug);

  return (
    <main className="">
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
      <div className="grid grid-cols-12 grid-flow-row">
        <div className="col-start-2 col-end-12 mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary">
          <PortableText value={data.content} />
        </div>
      </div>
      <ProjectContent mediaCollection={data.mediaCollection} />
    </main>
  );
}
