import PrimaryButton from "@/app/components/shared/ui/PrimaryButton";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen py-32 page_padding flex flex-col items-center justify-center">
      <h1 className="Section_Headline text-center">Beitrag nicht gefunden</h1>
      <p className="text-center mt-4 mb-12">
        Der angeforderte Beitrag existiert nicht. Bitte überprüfe die URL oder
        kehre zur Startseite zurück.
      </p>
      <PrimaryButton title="Zurück zur Startseite" link="/" />
    </section>
  );
}
