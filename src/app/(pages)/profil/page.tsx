import React from "react";

function page() {
  return (
    <section className="min-h-screen pt-64 px-12 xl:px-48">
      <h1 className="Section_Headline">Profil</h1>
      <div className="mt-48 grid grid-cols-12">
        <h2 className="text-3xl uppercase col-span-3">Über mich</h2>
        <p className="col-start-6 col-end-13 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eum
          dolore error ex perspiciatis aperiam, suscipit corrupti, debitis eius
          numquam enim. Incidunt nesciunt odit ullam adipisci iure harum sit
          placeat?
        </p>
        <div className="bg-primary-500 col-start-6 col-end-13 h-screen mt-32"></div>
      </div>
    </section>
  );
}

export default page;
