import React from "react";
import Image from "next/image";

const Cornean = () => {
  return (
    <div className="mt-3 flex flex-col h-[45vh] w-11/12 lg:w-9/12 mx-auto shadow-2xl lg:flex-row">
      <div className="relative h-full w-full lg:w-full">
        <Image
          src="/../public/msn-city-wall.jpg"
          alt="banner"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className=" bg-blue-800 h-28 w-full lg:h-full lg:w-4/12">
        <div className="flex h-full justify-between items-center w-11/12 mx-auto lg:flex-col lg:justify-center lg:space-y-10 ">
          <div className=" w-full space-y-2">
            <h1 className="text-xl lg:text-2xl xl:text-3xl text-white font-semibold">
              Become a Cornean
            </h1>
            <p className="text-white text-sm xl:text-xl lg:text-base">
              WIN TICKETS AND MERCH
            </p>
          </div>
          <button className="whitespace-nowrap pb-1 pt-1 px-3 bg-blue-500 rounded-xl xl:text-2xl lg:text-lg font-semibold text-white hover:scale-105 transition ease-out active:scale-90">
            JOIN NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cornean;
