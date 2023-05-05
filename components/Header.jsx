import React from "react";

import Link from "next/link";

import { AiOutlineMessage } from "react-icons/ai";
import { RiNotification2Line } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";

import { SearchInputCard } from "./";

const Header = () => {
  return (
    <div className="bg-cblack top-0 fixed w-full">
      <div className="lg:container mx-auto lg:px-10 px-5">
        <div className="w-full h-16 md:flex md:flex-auto items-center justify-between">
          <div className="md:flex inline-block float-left ">
            <Link href="/" className="flex flex-row items-center ">
              <img src="/logo1.png" className=" w-12 h-12 mr-3" alt="Avatar" />
              <span className="cursor-pointer xl:text-3xl text-xl text-cprimary font-tilt font-bold">
                {" "}
                AV-BLOG
              </span>
            </Link>
          </div>
          <div className="md:flex md:flex-auto md:visible hidden  ">
            <SearchInputCard />
          </div>

          <div className="md:flex md:flex-row inline-block float-right items-center">
            <div className="md:flex md:flex-row inline-block items-center justify-center mt-3 ">
              <button>
                <FaUserFriends className="md:w-5 md:h-5 w-5 h-5 mx-2 text-cgray" />
                <div className="relative inline-flex items-center justify-center w-3 h-3 text-xs text-clight bg-cdanger rounded-full -top-7 md:-top-7  -right-3">
                  2
                </div>
              </button>{" "}
              <button>
                <AiOutlineMessage className="md:w-5 md:h-5 w-5 h-5  mx-2 text-cgray" />
                <div className="relative inline-flex items-center justify-center w-3 h-3 text-xs text-white bg-cdanger rounded-full -top-7 md:-top-7 -right-3">
                  3
                </div>
              </button>
              <button className="mr-5">
                <RiNotification2Line className="md:w-5 md:h-5 w-5 h-5 mx-2  text-cgray" />
                <div className="relative inline-flex items-center justify-center w-3 h-3 text-xs text-whiterounded-full -top-7 md:-top-7 -right-2"></div>
              </button>
            </div>

            <div className="justify-center inline-block items-center">
              <img
                src="/profile-3.jpg"
                className=" md:w-10 md:h-10 w-7 h-7  rounded-full mb-3"
                alt="Avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
