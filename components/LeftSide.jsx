import React from "react";

const LeftSide = () => {
  return (
    <div className="flex flex-col md:w-1/4 w-20h-[600px] justify-start items-start gap-2 ">
      <div className="md:flex flex-col gap-2 items-start justify-start w-full rounded-2xl bg-cblack  hidden">
        <div className=" flex gap-2 items-center justify-start h-[80px] ">
          <img
            src="/profile-3.jpg"
            className=" md:w-14 md:h-14 w-10 h-10  rounded-full ml-5"
            alt="Avatar"
          />
          <div className="flex flex-col ">
            <span className="text-cwhite font-akaya font-bold lg:text-xl text-sm">
              HANNA DEREGE
            </span>
            <span className=" text-clight  font-dancing lg:text-xl text-sm">
              @hannad
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 w-full mb-5">
          <hr className="w-[85%] text-cgray" />
          <div className="flex gap-1 w-[80%] items-center justify-around">
            <div className="flex flex-col gap-1 items-center justify-center">
              <span className="text-cwhite font-akaya font-bold text-xl">
                790
              </span>
              <span className="text-clight font-dancing lg:text-base text-sm ">
                Following
              </span>
            </div>
            <div className="h-[100%] border-x-2 text-cgray"></div>
            <div className="flex flex-col gap-1 items-center justify-center">
              <span className="text-cwhite font-akaya font-bold text-xl">
                7190
              </span>
              <span className="text-clight font-dancing  lg:text-base text-sm ">
                Followers
              </span>
            </div>
            <div className="h-[100%] border-x-2 text-cgray"></div>
            <div className="flex flex-col gap-1 items-center justify-center">
              <span className="text-cwhite font-akaya font-bold text-xl">
                10
              </span>
              <span className="text-clight font-dancing  lg:text-base text-sm ">
                Post
              </span>
            </div>
          </div>
          <hr className="w-5/6 text-cgray" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default LeftSide;
