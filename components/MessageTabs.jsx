import React from "react";

import { useState } from "react";
import { Users } from "./../data/Users";

const MessageTabs = () => {
  const tabsData = [
    {
      label: "Unseen",
      content: Users,
    },
    {
      label: "All",
      content:
        "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
    },
  ];
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
      <div className="flex w-full space-x-4 ">
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`py-2 border-b-4 transition-colors duration-300  ${
                idx === activeTabIndex
                  ? "border-cprimary font-akaya"
                  : "border-transparent hover:border-gray-200 text-clight"
              }`}
              // Change the active tab on click.
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {/* Show active tab content. */}
      <div className=" overflow-y-scroll w-full h-full ">
        {tabsData[activeTabIndex].content.map((content, index) => {
          return (
            <div>
              <img
                src={content.imgSrc}
                className=" md:w-10 md:h-10 w-7 h-7  rounded-full mb-3 "
                alt="Avatar"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MessageTabs;
