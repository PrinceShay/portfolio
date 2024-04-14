import Link from "next/link";

export default function Introduction() {
  return (
    <section className="pt-32 pb-32 max-w-screen mx-auto">
      <h1 className="Section_Headline">Who the fuck is Jannis</h1>
      <p className="text-3xl ">
        Bist du auch die endlosen Reihen von langweiligen, vorgefertigten
        Template-Seiten leid, auf denen eine genauso aussieht wie die andere?
        Ich definitiv! Ich bin{" "}
        <Link
          href={"/"}
          className=" font-amador text-primary-500 hover:text-primary-300 transition-colors uppercase"
        >
          Jannis Röstel
        </Link>
        , ein Webdesigner und Entwickler aus Karlsruhe. Für mich hat jedes
        Business seine einzigartige Geschichte. Warum also diese mit einem
        0815-Template erzählen? Viel besser ist eine maßgeschneiderte Webseite,
        die nicht nur optisch, sondern auch in Funktionalität und Budget perfekt
        zu dir und deinem Unternehmen passt.
      </p>
    </section>
  );
}
