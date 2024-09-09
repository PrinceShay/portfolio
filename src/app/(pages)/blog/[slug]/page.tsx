import BlogItem from "@/app/components/pages/Main_Page/Blog/BlogItem";
import { FullProject } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";

export const revalidate = 30;

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <figure className="my-12">
          <img
            src={urlFor(value).url()}
            alt={value.alt || "Blog Image"}
            className="w-full h-auto object-cover rounded-xl"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-300 mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }: any) => {
      return <h2 className="text-3xl md:text-5xl md:mb-12 mb-6">{children}</h2>;
    },
    h3: ({ children }: any) => {
      return <h3 className="md:text-4xl text-2xl mb-6 md:mb-8">{children}</h3>;
    },
    h4: ({ children }: any) => {
      return <h4 className="md:text-3xl text-2xl md:mb-8 mb-4">{children}</h4>;
    },
    normal: ({ children }: any) => {
      return <p className="text-xl mb-24 md:mb-36 ">{children}</p>;
    },
  },
};

async function getData(slug: string) {
  const query = `
  *[_type == "blog" && slug.current == "${slug}"] {
    "currentSlug": slug.current,
    title,
    content,
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
      <section className="min-h-screen pt-64 px-6 md:px-24 lg:px-48">
        <h1 className="Section_Headline text-center">Beitrag nicht gefunden</h1>
      </section>
    );
  }

  const allPosts = await getAllPosts(data.currentSlug);
  const randomPosts = getRandomPosts(allPosts, 4);

  return (
    <article className="min-h-screen pt-64 px-6 md:px-24 lg:px-48">
      <section>
        <h1 className="Section_Headline text-center">{data.title}</h1>
        <div className="w-full rounded-xl overflow-hidden mt-16 max-h-screen aspect-video">
          <img
            className="w-full h-full object-cover"
            title={data.title}
            src={urlFor(data.titleImage).url()}
            alt={data.title}
          />
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-12 gap-8 relative">
        <div className="mt-32 max-w-4xl md:col-span-9">
          <PortableText
            value={data.content}
            components={ptComponents}
          ></PortableText>
        </div>
        <div className="col-span-3 xl:mt-32 ">
          <div className="xl:sticky xl:top-48">
            <p className="text-xl text-center">
              Das könnte dich auch interessieren
            </p>
            {randomPosts.map((post: any, idx: number) => (
              <BlogItem key={post.currentSlug} post={post} idx={idx} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
