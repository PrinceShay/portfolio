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
          titleImage
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
    <div className="mt-48">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Miau
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold -tracking-tight sm:text-4xl ">
          {data.title}
        </span>
      </h1>
      <div className="grid grid-cols-12 grid-flow-row">
        <Image
          src={urlFor(data.titleImage).url()}
          width={0}
          height={0}
          sizes="100vw"
          alt="Title Image"
          priority
          className=" col-start-2 col-end-12 rounded-lg mt-8 w-full h-auto max-h-[80vh] object-cover"
        />

        <div className="col-start-2 col-end-12 mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary">
          <PortableText value={data.content} />
        </div>
      </div>
    </div>
  );
}
