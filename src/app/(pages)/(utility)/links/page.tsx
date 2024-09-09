import LinkRef from "@/app/components/pages/links/LinkRef";
import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <section className="w-full min-h-screen px-6 md:px-24 lg:px-48 py-24 md:py-48 flex flex-col items-center">
      <div className="flex flex-col items-center mb-24">
        <div className="w-48 h-48 rounded-full overflow-hidden">
          <Image
            src={"/Navigation/ProfilePic.jpg"}
            alt="Jannis Röstel"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
              scale: "1.5",
            }}
          />
        </div>
        <p className="text-2xl mt-6">Jannis Röstel</p>
        <ul className="flex gap-4 mt-4 ">
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
              <Linkedin size={32} />
            </Link>
          </li>
        </ul>
      </div>
      <ul className="w-full flex flex-col gap-6 sm:items-center">
        <LinkRef
          title="SEE NO EVIL clothing"
          link="https://seenoevil-clothing.com"
          image="/assets/images/links/sne.svg"
        />

        <LinkRef title="Mein Portfolio" link="/" image="" />
      </ul>
    </section>
  );
}

export default page;
