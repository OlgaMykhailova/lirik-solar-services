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
    <div className="flex justify-between max-w-[368px] tab:max-w-none w-full tab:w-[669px] laptop:w-[527px] p-[2px] bg-white rounded-[30px] border border-inputStroke">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-[15px] tab:px-10 laptop:px-6 py-[9px] tab:py-2 text-sm tab:text-md rounded-[24px] transition duration-300 ease-out
            outline-none ${
              activeTab === tab.id
                ? "bg-blueLight text-black"
                : "bg-transparent text-inputText"
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
