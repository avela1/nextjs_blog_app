import React from "react";

import Link from "next/link";

import { AiOutlineMessage } from "react-icons/ai";
import { RiNotification2Line } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-cblack top-0 fixed w-full">
      <div className="lg:container mx-auto lg:px-10 px-5">
        <div className="w-full h-16 md:flex md:flex-auto items-center justify-center">
          <div className="md:flex inline-block float-left ">
            <Link href="/" className="flex flex-row items-center ">
              <img src="/logo1.png" className=" w-12 h-12 mr-3" alt="Avatar" />
              <span className="cursor-pointer text-3xl text-cwhite font-tilt font-bold">
                {" "}
                AV-BLOG
              </span>
            </Link>
          </div>

          <form class=" md:flex lg:flex-auto lg:visible hidden items-center ">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="w-full ml-20 mr-20 relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 px-4 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
          </form>

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
