import React from "react";
import Image from "next/image";
import { urlFor } from "../lib/client";

const Banner = ({ banner }) => {
  return (
    <div className="mt-3 z-10 flex h-[45vh] w-full lg:w-9/12 mx-auto relative shadow-2xl">
      <img
        src={urlFor(banner.mainImage)}
        alt=""
        className="object-cover lg:rounded-md h-full w-full brightness-[60%]"
      />
      <h1 className="absolute text-5xl font-semibold top-36 text-blue-600 font left-1/2 transform -translate-x-1/2 md:left-7 md:translate-x-1/4 md:text-6xl">
        {banner.title}
      </h1>
      <h2 className="absolute text-xl font-semibold top-48 whitespace-nowrap text-white font left-1/2 transform -translate-x-1/2 md:left-0 md:translate-x-1/4 md:text-2xl md:top-52">
        {banner.subtitle}
      </h2>
    </div>
  );
};

export default Banner;
