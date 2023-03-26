import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { BsBookmarkStar } from "react-icons/bs";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";

const Menubar = () => {
  return (
    <div className="md:flex flex-col gap-2 items-start justify-start w-[60px]  lg:w-full rounded-2xl bg-cblack   ">
      <div className="relative  w-full ">
        <div className="flex gap-3  items-center justify-start h-16">
          <AiOutlineMessage className="w-6 h-6 lg:w-7 lg:h-7 ml-6  mx-2 text-cwhite " />
          <span className="text-cwhite items-center font-akaya lg:inline lg:text-xl md:text-base hidden">
            Home
          </span>
        </div>
      </div>
      <div className="relative  bg-cdark  w-full ">
        <div className="flex gap-3 before:block before:w-2 before:absolute before:bg-cprimary before:rounded-tl-2xl before:rounded-bl-2xl  before:h-[100%] items-center justify-start h-16">
          <MdOutlineExplore className="w-6 h-6 lg:w-7 lg:h-7 ml-6  mx-2 text-cprimary " />
          <span className="text-cprimary items-center font-akaya lg:inline lg:text-xl md:text-base hidden">
            Explore
          </span>
        </div>
      </div>
      <div className="relative  w-full ">
        <div className="flex gap-3  items-center justify-start h-16">
          <IoMdNotificationsOutline className="w-6 h-6 lg:w-7 lg:h-7 ml-6  mx-2 text-cwhite " />
          <span className="text-cwhite items-center font-akaya lg:inline lg:text-xl md:text-base hidden">
            Notifications
          </span>
        </div>
      </div>{" "}
      <div className="relative  w-full ">
        <div className="flex gap-3  items-center justify-start h-16">
          <AiOutlineMessage className="w-6 h-6 lg:w-7 lg:h-7 ml-6  mx-2 text-cwhite " />
          <span className="text-cwhite items-center font-akaya lg:inline lg:text-xl md:text-base hidden">
            Messages
          </span>
        </div>
      </div>{" "}
      <div className="relative  w-full ">
        <div className="flex gap-3  items-center justify-start h-16">
          <BsBookmarkStar className="w-6 h-6 lg:w-7 lg:h-7 ml-6  mx-2 text-cwhite " />
          <span className="text-cwhite items-center font-akaya lg:inline lg:text-xl md:text-base hidden">
            Favorites
          </span>
        </div>
      </div>{" "}
      <div className="relative  w-full ">
        <div className="flex gap-3  items-center justify-start h-16">
          <TbDeviceDesktopAnalytics className="w-6 h-6 lg:w-7 lg:h-7 ml-6  mx-2 text-cwhite " />
          <span className="text-cwhite items-center font-akaya lg:inline lg:text-xl md:text-base hidden">
            Analytics
          </span>
        </div>
      </div>{" "}
      <div className="relative  w-full ">
        <div className="flex gap-3  items-center justify-start h-16">
          <FiSettings className="w-6 h-6 lg:w-7 lg:h-7 ml-6  mx-2 text-cwhite " />
          <span className="text-cwhite items-center font-akaya lg:inline lg:text-xl md:text-base hidden">
            Analytics
          </span>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
