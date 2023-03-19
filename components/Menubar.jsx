import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { BsBookmarkStar } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io";

const Menubar = () => {
  return (
    <div className="md:flex flex-col gap-5 items-start justify-start w-[60px]  md:w-full rounded-2xl bg-cblack  ">
      <div className="relative  bg-cdark  w-full ">
        <div className="flex gap-3 before:block before:w-2 before:absolute before:bg-cprimary before:rounded-tl-2xl before:rounded-bl-2xl  before:h-[100%] items-center justify-start h-16">
          <AiOutlineMessage className="w-5 h-5 md:w-7 md:h-7 ml-6  mx-2 text-cprimary " />
          <span className="text-cprimary items-center font-akaya md:text-xl hidden">
            Home
          </span>
        </div>
      </div>
      <div className="flex items-center justify-start  h-16 gap-3 w-full">
        <AiOutlineMessage className="w-5 h-5 md:w-7 md:h-7 ml-6 mx-2 text-cwhite" />
        <span className="text-cwhite font-akaya md:text-xl hidden rounded-tl-2xl">
          Home
        </span>
      </div>
    </div>
  );
};

export default Menubar;
