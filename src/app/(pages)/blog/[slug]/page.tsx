import BlogItem from "@/app/components/pages/Main_Page/Blog/BlogItem";
import { FullProject } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30;

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <figure className="my-12">
          <img
            src={urlFor(value).url()}
            alt={value.alt || "Blog Image"}
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-300 mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    // Weitere benutzerdefinierte Typen können hier hinzugefügt werden
  },
  block: {
    h2: ({ children }: any) => {
      return (
        <h2 className="text-3xl md:text-3xl mb-8 font-bold first:mt-0 mt-24 text-primary-200">
          {children}
        </h2>
      );
    },
    h3: ({ children }: any) => {
      return (
        <h3 className="text-xl first:mt-0 mt-12 mb-6 font-semibold">
          {children}
        </h3>
      );
    },
    h4: ({ children }: any) => {
      return <h4 className="text-lg md:mb-8 mb-4 font-medium">{children}</h4>;
    },
    normal: ({ children }: any) => {
      return <p className="text-lg">{children}</p>;
    },
    blockquote: ({ children }: any) => {
      return (
        <blockquote className="border-l-4 border-primary-500 italic  pl-4 my-8">
          {children}
        </blockquote>
      );
    },
    // Listen hinzufügen
  },
  marks: {
    link: ({ children, value }: any) => {
      return (
        <Link
          href={value.href}
          className="text-primary-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </Link>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc bg-darkBlue-400 bg-opacity-60 rounded-xl md:text-lg p-8 marker:text-primary-500 pl-8 my-8 flex flex-col gap-8">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal marker:text-primary-500 list-inside md:text-lg">
        {children}
      </ol>
    ),
  },
};

async function getData(slug: string) {
  const query = `
  *[_type == "blog" && slug.current == "${slug}"] {
    "currentSlug": slug.current,
    title,
    content,
    "publishDate": _createdAt,
    titleImage,
    introText,
  } [0]
  `;

  const data = await client.fetch(query);
  return data;
}

async function getAllPosts(currentSlug: string) {
  const query = `
  *[_type == 'blog' && slug.current != "${currentSlug}"] {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage,
    "publishDate": _createdAt
  }`;
  const data = await client.fetch(query);
  return data;
}

function getRandomPosts(posts: any[], count: number) {
  const shuffled = posts.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data: FullProject = await getData(params.slug);
  const titleImageUrl = urlFor(data.titleImage).url();

  const metaDescription = `${data.smallDescription} - Erfahre mehr über ${data.title}, geschrieben von Jannis Röstel.`;

  return {
    title: `${data.title} - Blog von Jannis Röstel`,
    description: metaDescription,
    keywords: `${data.title}, Blog, Jannis Röstel, ${params.slug.replace("-", " ")}, Artikel, ${data.smallDescription || "Zusammenfassung"}`,
    openGraph: {
      title: `${data.title} - Blog von Jannis Röstel`,
      description: metaDescription,
      images: [
        {
          url: titleImageUrl,
          alt: `${data.title} - Feature Image`,
        },
      ],
      type: "article",
      authors: ["Jannis Röstel"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.title} - Blog von Jannis Röstel`,
      description: metaDescription,
      images: [titleImageUrl],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: FullProject = await getData(params.slug);

  if (!data) {
    return (
      <section className="min-h-screen pt-64 page_padding">
        <h1 className="Section_Headline text-center">Beitrag nicht gefunden</h1>
      </section>
    );
  }

  const allPosts = await getAllPosts(data.currentSlug);
  const randomPosts = getRandomPosts(allPosts, 4);

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("de-DE", options);
  };

  return (
    <article className="min-h-screen pt-8 md:pt-64 page_padding max-w-[1600px] mx-auto">
      <header>
        <h1 className="text-3xl md:text-5xl">{data.title}</h1>
        <p className="text-lg opacity-80 mt-6">
          {formatDate(data.publishDate)}
        </p>
        <div className="w-full  rounded-xl overflow-hidden mt-16 max-h-screen aspect-video relative border border-primary-800">
          <Image
            className="w-full h-full object-cover  "
            title={data.title}
            fill
            sizes="100vw"
            src={urlFor(data.titleImage).url()}
            alt={data.title}
          />
        </div>
      </header>

      <section className="flex flex-col md:flex-row gap-32 relative ">
        <div className="mt-32 md:basis-3/4">
          <PortableText
            value={data.content}
            components={ptComponents}
          ></PortableText>
        </div>
        <div className="basis-1/4 xl:mt-32 ">
          <div className="xl:sticky xl:top-48">
            <p className="text-xl text-center mb-8">
              Das könnte dich auch interessieren
            </p>
            <div className="flex flex-col gap-4">
              {randomPosts.slice(0, 2).map((post: any, idx: number) => (
                <BlogItem key={post.currentSlug} post={post} idx={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
