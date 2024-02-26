import Link from "next/link";

export default function FullscreenNav() {
  return (
    <div className="FullscreenNav w-full h-screen bg-primary-900 z-40 fixed top-0 pt-64 pb-32 px-24 flex items-end justify-start">
      <ul className="text-primary-400 font-bold text-6xl">
        <li className="mb-12 ">
          <Link className="hover:text-primary-200 transition-colors" href={"/"}>
            Startseite
          </Link>
        </li>

        <li className="mb-12">
          <Link className="hover:text-primary-200 transition-colors" href={"/"}>
            Startseite
          </Link>
        </li>

        <li className="mb-12">
          <Link className="hover:text-primary-200 transition-colors" href={"/"}>
            Startseite
          </Link>
        </li>

        <li className="mb-12">
          <Link className="hover:text-primary-200 transition-colors" href={"/"}>
            Startseite
          </Link>
        </li>
      </ul>
    </div>
  );
}
