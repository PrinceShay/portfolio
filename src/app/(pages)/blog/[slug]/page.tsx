import BlogItem from "@/app/components/pages/Main_Page/Blog/BlogItem";
import { fullProject } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";

export const revalidate = 30;

const ptComponents = {
  block: {
    h2: ({ children }: any) => {
      return <h2 className="text-5xl mb-10">{children}</h2>;
    },
    h3: ({ children }: any) => {
      return <h3 className="text-4xl mb-10">{children}</h3>;
    },
    h4: ({ children }: any) => {
      return <h4 className="text-3xl mb-10">{children}</h4>;
    },
    normal: ({ children }: any) => {
      return <p className="text-xl mb-16">{children}</p>;
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

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProject = await getData(params.slug);

  if (!data) {
    return (
      <section className="min-h-screen pt-64 px-48">
        <h1 className="Section_Headline text-center">Beitrag nicht gefunden</h1>
      </section>
    );
  }

  const allPosts = await getAllPosts(data.currentSlug);
  const randomPosts = getRandomPosts(allPosts, 4);

  return (
    <section className="min-h-screen pt-64 px-12 xl:px-48">
      <section>
        <h1 className="Section_Headline text-center">{data.title}</h1>
        <div className="w-full rounded-xl overflow-hidden mt-16 max-h-screen aspect-video">
          <img
            className="w-full h-full object-cover"
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
    </section>
  );
}
