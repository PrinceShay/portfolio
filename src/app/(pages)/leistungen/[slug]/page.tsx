// Importiere notwendige Module und Komponenten
import { notFound } from "next/navigation";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import CTAWindow from "@/app/components/shared/ui/CTAWindow";
import ServiceSlider from "@/app/components/pages/leistungen/ServiceSlider";
import { Metadata } from "next";

// Definiere die PortableText-Komponenten
const ptComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <figure className="my-12">
          <img
            src={urlFor(value).url()}
            alt={value.alt || "Service Image"}
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
    h2: ({ children }: any) => (
      <h2 className="text-3xl md:text-3xl mb-8 font-bold first:mt-0 mt-24 text-primary-200">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl first:mt-0 mt-12 mb-6 font-semibold">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-lg md:mb-8 mb-4 font-medium">{children}</h4>
    ),
    normal: ({ children }: any) => <p className="text-lg">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary-500 italic pl-4 my-8">
        {children}
      </blockquote>
    ),
    // Listen hinzufügen
  },
  marks: {
    link: ({ children, value }: any) => (
      <Link
        href={value.href}
        className="text-primary-500 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </Link>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc bg-darkBlue-400 bg-opacity-60 rounded-xl md:text-lg p-8 marker:text-primary-500 pl-8 my-8 flex flex-col gap-8">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal bg-darkBlue-400 bg-opacity-60 rounded-xl md:text-lg p-8 marker:text-primary-500 pl-8 my-8 flex flex-col gap-8">
        {children}
      </ol>
    ),
  },
};

// Funktion zum Abrufen der Service-Daten basierend auf dem Slug
async function getServiceData(slug: string) {
  const query = `
    *[_type == "service" && slug.current == $slug] {
      title,
      heroTitle,
      heroParagraph,
      titleImage,
      description,
      blogArticles[]->{
        title,
      "currentSlug": slug.current,
        smallDescription,
        "publishDate": _createdAt,
        titleImage
      }
    }[0]
  `;
  const data = await client.fetch(query, { slug });
  return data;
}

// Definiere die Metadata-Funktion für SEO
export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>;
  }
): Promise<Metadata> {
  const params = await props.params;
  const data = await getServiceData(params.slug);

  if (!data) {
    return {
      title: "Service nicht gefunden",
      description: "Der angeforderte Service wurde nicht gefunden.",
    };
  }

  return {
    title: `${data.title} | Jannis Röstel | Digitale Lösungen aus Karlsruhe`,
    description: data.heroParagraph,
    openGraph: {
      title: `${data.title} | Jannis Röstel | Digitale Lösungen aus Karlsruhe`,
      description: data.heroParagraph,
      images: [
        {
          url: urlFor(data.titleImage).url(),
          width: 800,
          height: 600,
          alt: data.title,
        },
      ],
      url: `https://jannisroestel.de/leistungen/${params.slug}`,
      siteName: "Jannis Röstel",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.title} | Jannis Röstel | Digitale Lösungen aus Karlsruhe`,
      description: data.heroParagraph,
      images: [urlFor(data.titleImage).url()],
    },
  };
}

export default async function ServicePage(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;
  const data = await getServiceData(params.slug);

  if (!data) {
    notFound();
  }

  return (
    <section className="min-h-screen pt-8 md:pt-48 ">
      {/* Hero Bereich */}
      <div className="flex flex-col page_padding max-w-[1600px] mx-auto">
        <div className="flex flex-col items-start gap-8 mb-16 max-w-4xl">
          <p className="bg-primary-500 text-sm p-3 rounded-xl">
            {data.title} in Karlsruhe
          </p>

          <h1 className="text-5xl basis-2/3">{data.heroTitle}</h1>
          <p className="basis-1/3 text-lg">{data.heroParagraph}</p>
        </div>
        <div className="w-full aspect-video relative rounded-2xl overflow-hidden">
          <Image
            src={urlFor(data.titleImage).url()}
            fill
            className="object-cover"
            sizes="100vw"
            alt={data.title}
          />
        </div>
      </div>
      {/* Service Content */}
      <div className="py-24 page_padding max-w-[1600px] mx-auto ">
        <div className="max-w-4xl">
          <PortableText value={data.description} components={ptComponents} />
        </div>
      </div>
      {/* Service Slider */}
      {data.blogArticles && data.blogArticles.length > 0 && (
        <ServiceSlider blogArticles={data.blogArticles} />
      )}
    </section>
  );
}
