import { fullProject } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Hero from "@/app/components/pages/Project_Page/Hero";
import ProjectContent from "@/app/components/pages/Project_Page/ProjectContent";

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
  const data: fullProject = await getData(params.slug);

  return (
    <main className="">
      <Hero
        title={data.title}
        introText={data.introText}
        titleVideo={data.titleVideo.asset.url}
      />

      {/* Challenge */}

      <section className="grid grid-cols-12 gap-16 py-24">
        <div className="col-start-2 col-end-6 content-center">
          <p className="text-lg">Die Challenge</p>
          <h1 className="mt-8 text-5xl">
            Ich bin eine Headline, welche eine Headline ist.
          </h1>

          <div className="mt-16 grid grid-cols-8 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary">
            {
              //<PortableText value={data.content} />
            }
            <p className="text-xl col-span-7 col-start-3  ">
              ls er an seinem ersten dienstfreien Wochenende aus der Kaserne zu
              seinen Eltern fährt, muss er feststellen, dass sein Kinderzimmer
              von seinem Vater als Hobbyraum für Elektroarbeiten genutzt wird.
              Obwohl sich seine Eltern einig sind, dass sie ihren Sohn nicht aus
              der Wohnung haben wollen, entscheidet sich Frank für den Auszug
              und zieht zu seinem Schulfreund Martin Klapp, der eine
              Wohngemeinschaft mit zwei seiner Freunde aus der linksalternativen
              Szene im Ostertor-Viertel Bremens direkt neben dem Cinema im
              Ostertor am Ostertorsteinweg gegründet hat.
            </p>
          </div>
        </div>
        <div className="col-span-4 col-start-8 py-12 ">
          <img
            className="max-h-[70vh] w-full object-cover rounded-md"
            src="/assets/images/Hero.jpg"
          />
        </div>
      </section>

      <section className="grid grid-cols-12 gap-16 py-24">
        <div className="col-start-2 col-end-6 py-12 ">
          <img
            className="max-h-[70vh] w-full object-cover rounded-md"
            src="/assets/images/Hero.jpg"
          />
        </div>

        <div className="col-span-5 col-start-7 content-center">
          <p className="text-lg">Die Challenge</p>
          <h1 className="mt-8 text-5xl">Ich bin eine Headline</h1>

          <div className="mt-16 grid grid-cols-8 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary">
            {
              //<PortableText value={data.content} />
            }
            <p className="text-xl col-span-7 col-start-3  ">
              ls er an seinem ersten dienstfreien Wochenende aus der Kaserne zu
              seinen Eltern fährt, muss er feststellen, dass sein Kinderzimmer
              von seinem Vater als Hobbyraum für Elektroarbeiten genutzt wird.
              Obwohl sich seine Eltern einig sind, dass sie ihren Sohn nicht aus
              der Wohnung haben wollen, entscheidet sich Frank für den Auszug
              und zieht zu seinem Schulfreund Martin Klapp, der eine
              Wohngemeinschaft mit zwei seiner Freunde aus der linksalternativen
              Szene im Ostertor-Viertel Bremens direkt neben dem Cinema im
              Ostertor am Ostertorsteinweg gegründet hat.
            </p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-12 grid-flow-row">
        <div className="col-start-2 col-end-12 mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary">
          <PortableText value={data.content} />
        </div>
      </div>
      <ProjectContent mediaCollection={data.mediaCollection} />
    </main>
  );
}
