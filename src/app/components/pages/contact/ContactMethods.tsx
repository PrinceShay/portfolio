import { Bird, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const contactMethods = [
  {
    id: 1,
    title: "Brieftaube",
    description: "Zur Zeit nicht verfügbar",
    icon: <Bird className="w-full h-full" />,
    link: "",
  },
  {
    id: 2,
    title: "Ruf mich an",
    description: "+49 177 3396973",
    icon: <Phone className="w-full h-full" />,
    link: "tel:+491773396973",
  },
  {
    id: 3,
    title: "Schick mir eine Mail",
    description: "hello@jannisroestel.de",
    icon: <Mail className="w-full h-full" />,
    link: "mailto:hello@jannisroestel.de",
  },
];

export default function ContactMethods() {
  return (
    <div className=" sticky top-32 flex flex-col">
      <div className="h-16 w-16 p-4 mb-6 rounded-xl bg-primary-500">
        <img src="/Navigation/logo.svg" alt="Logo" />
      </div>
      <h1 className="text-3xl mb-4">Schreib mir</h1>
      <p className="text-gray-200 text-xl max-w-prose">
        Hast du Fragen oder möchtest dein Projekt auf das nächste Level bringen?
        Lass uns gemeinsam an deinem Erfolg arbeiten!
      </p>
      <div className="grid xl:grid-cols-2 2xl:grid-cols-3 gap-4 justify-stretch mt-12 w-full">
        {contactMethods.map((method) =>
          method.link ? (
            <Link
              href={method.link}
              key={method.id}
              className="ShadowInset w-full border-2 border-primary-600 p-2 sm:p-4 rounded-xl flex items-center gap-4 group active:scale-95 transition-transform duration-150 ease-out"
            >
              <div className="sm:w-24 sm:h-24 w-16 h-16 border-2 border-primary-700 rounded-lg flex items-end justify-center p-4 group-hover:bg-primary-700 group-hover:text-primary-100 transition-colors duration-300 ease-out">
                {method.icon}
              </div>
              <div>
                <h2 className="text-xl group-hover:text-primary-200 transition-colors duration-300 ease-out">
                  {method.title}
                </h2>
                <p className="text-md text-gray-400">{method.description}</p>
              </div>
            </Link>
          ) : (
            <div
              key={method.id}
              className="ShadowInset w-full border-2 border-primary-600 p-2 sm:p-4 rounded-xl flex items-center gap-4 group cursor-pointer"
            >
              <div className="sm:w-24 sm:h-24 w-16 h-16 border-2 border-primary-700  rounded-lg flex items-end justify-center p-4 group-hover:bg-primary-700 group-hover:text-primary-100 transition-colors duration-300 ease-out">
                {method.icon}
              </div>
              <div>
                <h2 className="text-xl group-hover:text-primary-200 transition-colors duration-300 ease-out">
                  {method.title}
                </h2>
                <p className="text-md text-gray-400">{method.description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
