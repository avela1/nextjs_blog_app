import React from 'react'

import { useState } from "react";

const MessageTabs = () => {
    const tabsData = [
      {
        label: "Primary",
        content:
          "Ut irure mollit nulla eiusmod excepteur laboris elit sit anim magna tempor excepteur labore nulla.",
      },
      {
        label: "General",
        content:
          "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
      },
      {
        label: "Request",
        content:
          "Fugiat dolor et quis in incididunt aute. Ullamco voluptate consectetur dolor officia sunt est dolor sint.",
      },
    ];
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
      <div className="flex w-full border-b space-x-9">
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`py-2 border-b-4 transition-colors duration-300  ${
                idx === activeTabIndex
                  ? "border-cprimary"
                  : "border-transparent hover:border-gray-200"
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
      {/* <div className="py-4">
        <p>{tabsData[activeTabIndex].content}</p>
      </div> */}
    </div>
  );
}

export default MessageTabs
