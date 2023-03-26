import React from "react";

import { IoIosCreate } from "react-icons/io";
import MessageTabs from "./MessageTabs";
import SearchInputCard from "./SearchInputCard";

const MessagesCard = () => {
  return (
    <div className="flex flex-col gap-3 items-start justify-start w-full rounded-2xl bg-cblack p-6 overflow-hidden">
      <div className="flex w-full justify-between items-center">
        <span className="text-cwhite items-center font-akaya text-2xl">
          Messages
        </span>
        <IoIosCreate className="w-6 h-6 text-cwhite " />
      </div>
          <SearchInputCard />
          <MessageTabs />
<div>text</div>
    </div>
  );
};

export default MessagesCard;
