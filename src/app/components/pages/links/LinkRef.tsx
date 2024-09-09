import Link from "next/link";
import React from "react";

// Define props interface
interface LinkRefProps {
  link: string;
  title: string;
  image?: string;
}

// Functional Component with typed props
const LinkRef: React.FC<LinkRefProps> = ({ link, title, image }) => {
  return (
    <Link href={link}>
      <div className="flex items-center gap-4 text-lg bg-primary-500 px-8 w-full py-4 rounded-full justify-center hover:bg-primary-600 active:scale-95  transition-all ease-out">
        {image && <img src={image} alt={title} className="h-8" />}
        <span>{title}</span>
      </div>
    </Link>
  );
};

export default LinkRef;
