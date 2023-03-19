import React from "react";
import { ProfileCard, Menubar } from "./.";

const LeftSide = () => {
  return (
    <div className="flex flex-col md:w-1/4 w-20h-[600px] justify-start items-start gap-5 ">
      <ProfileCard />
      <Menubar />
    </div>
  );
};

export default LeftSide;
