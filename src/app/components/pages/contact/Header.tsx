import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Dribbble, Instagram, Linkedin } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full p-32 bg-darkBlue-400 bg-gradient-to-t from-[#6a499969] to-darkBlue-400 rounded-2xl max-w-[1600px] flex flex-col xl:flex-row justify-center gap-16 items-center mb-24 border border-primary-700 relative overflow-hidden">
      <div className=" min-w-64 min-h-64 rounded-full relative overflow-hidden">
        <Image
          src={"/Navigation/ProfilePic.jpg"}
          fill
          className="object-cover"
          alt="Jannis Röstel"
          sizes="16rem"
        ></Image>
      </div>
      <div className="">
        <h1 className="text-5xl mb-6">Kontakt</h1>
        <p className="text-xl max-w-md">
          Danke für dein Interesse! Ich schätze deine Zeit sehr und freu mich
          schon jetzt von dir zu hören!
        </p>
        <ul className="flex gap-4 mt-4">
          <li className=" hover:text-primary-500">
            <Link href={"https://www.instagram.com/jannis_roestel"}>
              <Instagram size={32} />
            </Link>
          </li>

          <li className=" hover:text-primary-500  text-white">
            <Link href={"https://www.behance.net/jannisroestel"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
              </svg>
            </Link>
          </li>

          <li className=" hover:text-primary-500 ">
            <Link
              href={"https://www.linkedin.com/in/jannis-r%C3%B6stel-a4a261251/"}
            >
              <Linkedin fill="currentColor" stroke="none" size={32} />
            </Link>
          </li>

          <li className=" hover:text-primary-500 ">
            <Link href={"https://dribbble.com/jannisroestel"}>
              <Dribbble size={32} />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
