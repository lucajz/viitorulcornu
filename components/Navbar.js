import React, { useState } from "react";
import Image from "next/dist/client/image";
import { MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className=" w-full h-[10vh] shadow-xl bg-white ">
      <div className="flex mx-auto justify-between items-center w-11/12 lg:w-9/12 h-full lg:px-2 ">
        {/* LEFT SIDE */}
        <div className="flex space-x-5 h-10/10 w-fit items-center">
          <Link href="/">
            <Image
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png"
              height={60}
              width={60}
              className="cursor-pointer hover:scale-110"
            />
          </Link>
          <Link href="/">
            <h1 className="hidden lg:inline-flex text-3xl text-blue-500 font-semibold text-center cursor-pointer transition ease-out cursor-pointer hover:text-blue-800 hover:scale-105">
              VIITORUL CORNU
            </h1>
          </Link>
        </div>

        {/* MID SIDE */}
        <div className="lg:hidden w-full">
          <h1 className="text-2xl text-blue-500 font-semibold text-center">
            VIITORUL CORNU
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="mr-4">
          <MenuIcon className="lg:hidden w-10 h-10 text-blue-500 " />
          <div className="hidden lg:inline-flex">
            <ul className="flex space-x-10 text-2xl text-blue-500 font-medium ">
              <li>
                <Link href="">
                  <h2 className="hover:text-blue-800 transition ease-out hover:scale-110 cursor-pointer">
                    Fixtures
                  </h2>
                </Link>
              </li>
              <li>
                <Link href="">
                  <h2 className="hover:text-blue-800 transition ease-out hover:scale-110 cursor-pointer">
                    Team
                  </h2>
                </Link>
              </li>
              <li>
                <Link href="">
                  <h2 className="hover:text-blue-800 transition ease-out hover:scale-110 cursor-pointer">
                    Fans
                  </h2>
                </Link>
              </li>
              <li>
                <Link href="">
                  <h2 className="text-white bg-blue-500 pb-1 px-2 rounded-xl transition ease-out hover:scale-110 cursor-pointer">
                    Sign in
                  </h2>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
