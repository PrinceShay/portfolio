import ProjectText from "@/app/components/shared/ui/SectionText";
import React from "react";

function Service2() {
  return (
    <section className="py-32 px-6 md:px-24 lg:px-48">
      <ProjectText title="Service" text="" />
      <div className="grid max-w-2xl grid-cols-1 2xl:grid-cols-3 gap-8 min-h-[60vh] 2xl:max-w-[1600px] mx-auto relative">
        <div className="bg-primary-600 z-10 p-8 flex flex-col items-center justify-center rounded-2xl">
          <div className="text-center">
            <h3 className="Section_Headline small">Webdesign</h3>
            <p className="mt-4 text-lg">
              Professionelles Webdesign und maßgeschneiderte Webentwicklung
            </p>
          </div>
          <div className="flex  flex-col">
            <ul className="mt-24 flex flex-wrap justify-center  gap-2  text-lg">
              <li className="py-3 px-4 bg-primary-800 bg-opacity-75 rounded-full">
                Webdesign
              </li>
              <li className="py-3 px-4 bg-primary-800 bg-opacity-75 rounded-full">
                Webentwicklung
              </li>
              <li className="py-3 px-4 bg-primary-800 bg-opacity-75 rounded-full">
                Landingpage
              </li>
              <li className="py-3 px-4 bg-primary-800 bg-opacity-75 rounded-full">
                E-Commerce
              </li>
              <li className="py-3 px-4 bg-primary-800 bg-opacity-75 rounded-full">
                Landingpage
              </li>
            </ul>
            <div className="mt-12">
              <p className="text-center opacity-50 uppercase mb-3">Tools</p>
              <ul className=" flex flex-col sm:flex-row justify-center gap-4 text-xl items-center">
                <li>
                  <img
                    src="/assets/images/main/Service/Logo1.svg"
                    alt="Webflow"
                    title="Webflow"
                  />
                </li>
                <li className="flex gap-1 items-center">
                  <img
                    src="/assets/images/main/Service/Logo2.svg"
                    alt="React"
                    title="React"
                  />
                  React.js
                </li>
                <li className="flex gap-1 items-center">
                  <img
                    src="/assets/images/main/Service/Logo3.svg"
                    alt="Next"
                    title="Next"
                  />
                  Next.js
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-primary-600 z-10 p-8 flex flex-col items-center justify-center rounded-2xl">
          <div className="text-center">
            <h3 className="Section_Headline small">Motion</h3>
            <p className="mt-4 text-lg">
              Dynamisches Motion Design für visuelle Highlights
            </p>
          </div>
          <div className="flex  flex-col">
            <ul className="mt-24 flex flex-wrap justify-center  gap-2  text-lg">
              <li className="py-3 px-4 bg-primary-800 bg-opacity-75 rounded-full">
                Animationsvideos
              </li>
              <li className="py-3 px-4 bg-primary-800 bg-opacity-75 rounded-full">
                Werbespots/ Ads
              </li>
              <li className="py-3 px-4 bg-primary-800 bg-opacity-75 rounded-full">
                Erklärungsvideos
              </li>
              <li className="py-3 px-4 bg-primary-800 bg-opacity-75 rounded-full">
                Animierte Logos
              </li>
              <li className="py-3 px-4 bg-primary-800 bg-opacity-75 rounded-full">
                Animiertes Branding
              </li>
            </ul>
            <div className="mt-12">
              <p className="text-center opacity-50 uppercase mb-3">Tools</p>
              <ul className=" flex flex-col sm:flex-row justify-center gap-4 text-xl items-center">
                <li>
                  <img
                    src="/assets/images/main/Service/Logo1.svg"
                    alt="Webflow"
                    title="Webflow"
                  />
                </li>
                <li className="flex gap-1 items-center">
                  <img
                    src="/assets/images/main/Service/Logo2.svg"
                    alt="React"
                    title="React"
                  />
                  React.js
                </li>
                <li className="flex gap-1 items-center">
                  <img
                    src="/assets/images/main/Service/Logo3.svg"
                    alt="Next"
                    title="Next"
                  />
                  Next.js
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-primary-600 z-10 p-8 flex flex-col items-center justify-center rounded-2xl">
          <div className="text-center">
            <h3 className="Section_Headline small">Branding</h3>
            <p className="mt-4 text-lg">
              Dynamisches Motion Design für visuelle Highlights
            </p>
          </div>
          <div className="flex  flex-col">
            <ul className="mt-24 flex flex-wrap justify-center  gap-2  text-lg">
              <li className="py-3 px-4 bg-primary-800 bg-opacity-75 rounded-full">
                Webdesign
              </li>
              <li className="py-3 px-4 bg-primary-800 bg-opacity-75 rounded-full">
                Webentwicklung
              </li>
              <li className="py-3 px-4 bg-primary-800 bg-opacity-75 rounded-full">
                Landingpage
              </li>
              <li className="py-3 px-4 bg-primary-800 bg-opacity-75 rounded-full">
                E-Commerce
              </li>
              <li className="py-3 px-4 bg-primary-800 bg-opacity-75 rounded-full">
                Landingpage
              </li>
            </ul>
            <div className="mt-12">
              <p className="text-center opacity-50 uppercase mb-3">Tools</p>
              <ul className=" flex flex-col sm:flex-row justify-center gap-4 text-xl items-center">
                <li>
                  <img
                    src="/assets/images/main/Service/Logo1.svg"
                    alt="Webflow"
                    title="Webflow"
                  />
                </li>
                <li className="flex gap-1 items-center">
                  <img
                    src="/assets/images/main/Service/Logo2.svg"
                    alt="React"
                    title="React"
                  />
                  React.js
                </li>
                <li className="flex gap-1 items-center">
                  <img
                    src="/assets/images/main/Service/Logo3.svg"
                    alt="Next"
                    title="Next"
                  />
                  Next.js
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service2;
