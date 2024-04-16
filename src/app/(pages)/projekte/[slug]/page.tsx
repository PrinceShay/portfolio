import { fullProject } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 30;

async function getData(slug: string) {
  const query = `
    *[_type == "project" && slug.current =="${slug}"] {
        "currentSlug": slug.current,
          title,
          content,
          titleImage,
          introText,
          "categories": categories[]->title,
      } [0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProject = await getData(params.slug);

  return (
    <main className="">
      {/* Hero */}

      <header className="min-h-[80vh] grid grid-cols-12 ">
        <div className="col-start-2 col-end-12 flex flex-col items-center justify-center">
          <p className="text-2xl block text-center text-primary font-semibold tracking-wide uppercase">
            {data.title}
          </p>
          <h1 className="mt-8 block  text-center Section_Headline">
            {data.introText}
          </h1>
        </div>
      </header>
      <div className="w-full h-screen relative">
        <img
          src="/assets/images/Hero.jpg"
          className="w-full h-full object-cover absolute top-0 object-top"
        ></img>
      </div>

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
    </main>
  );
}

/*<div className="grid grid-cols-12 grid-flow-row">
        <Image
          src={urlFor(data.titleImage).url()}
          width={0}
          height={0}
          sizes="100vw"
          alt="Title Image"
          priority
          className=" col-start-2 col-end-12 rounded-lg mt-8 w-full h-auto max-h-[80vh] object-cover"
        />
      </div>*/
