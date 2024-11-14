import React, { Dispatch, SetStateAction } from "react";

import { TabMenuItem } from "@/types/tabMenuItem";

interface TabMenuProps {
  tabs: TabMenuItem[];
  setActiveTab: Dispatch<SetStateAction<string>>;
  activeTab: string;
}

export default function TabMenu({
  tabs,
  setActiveTab,
  activeTab,
}: TabMenuProps) {
  return (
    <div className="flex justify-between w-[312px] tab:w-[669px] laptop:w-[527px] p-1 mx-auto bg-white rounded-[30px] border border-inputStroke">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-[16px] tab:px-10 laptop:px-6 py-[6px] tab:py-2 text-sm tab:text-md rounded-[24px] transition duration-300 ease-out ${
            activeTab === tab.id ? "bg-blueLight" : "bg-transparent"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
