import React from "react";
import { PortableText } from "@portabletext/react";
import { link } from "fs";

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
      return <p className=" text-xl md:text-3xl">{children}</p>;
    },
  },
  types: {
    link: ({ value, children }: any) => {
      const target = value.href.startsWith("http") ? "_blank" : "_self";
      return (
        <a
          href={value.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="underline text-blue-600 font-bold"
        >
          {children}
        </a>
      );
    },
  },
};

function ProjectInfo({
  categories,
  publishDate,
  smallDescription,
}: {
  categories: string[];
  publishDate: string;
  smallDescription: any;
}) {
  return (
    <section className="page_padding min-h-[80vh] flex flex-col justify-center py-24">
      <div className=" grid grid-cols-12">
        <div className="col-span-12 md:col-span-8 2xl:col-span-5">
          <p className="md:text-lg mb-8">Über das Projekt</p>

          <PortableText components={ptComponents} value={smallDescription} />
          <div className="mt-12 md:mt-16 md:text-lg opacity-70 flex flex-col gap-4">
            <p>{publishDate}</p>
            <ul className="flex-col items-center md:text-xl">
              {categories.map((category: string) => (
                <li key={category} className="">
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectInfo;
