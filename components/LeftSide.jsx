import React from "react";

import { ProfileCard, Menubar } from "./.";

import { FaUpload } from "react-icons/fa";

const LeftSide = () => {
  return (
    <div className="flex flex-col md:w-1/4 w-20h-[600px] justify-start items-start gap-5 ">
      <ProfileCard />
      <Menubar />
      <button class="bg-cprimary hover:bg-cprimary text-cwhite lg:text-xl text-base font-akaya font-bold py-3 hidden  rounded md:inline-flex items-center w-full justify-center hover:border-b-4  hover:border-blue-500 space-x-4 ">
        <FaUpload className="w-5 h-5  text-cwhite " />
        <span>Post</span>
      </button>
    </div>
  );
};

export default LeftSide;
