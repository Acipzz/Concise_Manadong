import React from "react";

import AboutUsImg from "../assets/image 14.png";

function AboutUs() {
  return (
    <div className="flex flex-col px-10 py-16 md:px-20 ml-12">
      <div className="flex w-full mb-6 AboutUsTitle">
        <h1 className="text-2xl font-bold text-blue-600">
          <span className="underline decoration-[3px] underline-offset-[6px] decoration-red-500">
            Ab
          </span>
          out Us
        </h1>
      </div>
      <div className="flex flex-col w-full gap-5 md:flex-row">
        <div className="w-full md:w-1/2">
          <img src={AboutUsImg} alt="About Us" className="w-full h-full" />
        </div>
        <div className="w-full md:w-1/2">
          <div className="h-full">
            <h1 className="text-2xl font-bold text-black lg:text-3xl">
              About Our Company
            </h1>
            <p className="mt-4 text-sm text-black lg:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores, aspernatur fugit? Dolorem, praesentium. Doloremque
              iste saepe, maxime reiciendis mollitia, velit soluta quod
              quibusdam id consequatur at fugit quae minima sint?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;