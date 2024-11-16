"use client";
import Image from "next/image";
import React, { useState } from "react";

import { TabMenuItem } from "@/types/tabMenuItem";

import GridWIthElectricity from "./energyPathsImages/GridWIthElectricity";
import GridButtons from "./gridButtons/GridButtons";
import ImageLegend from "./imageLegend/ImageLegend";
import SolarStationItem from "./SolarStationItem";

interface TabContentProps {
  activeTabData: TabMenuItem | undefined;
}

export default function TabContent({ activeTabData }: TabContentProps) {
  const [isGrid, setIsGrid] = useState(true);

  return (
    <div className="flex flex-col gap-y-6 laptop:flex-row justify-between pt-6">
      <div className="flex flex-col gap-16 tab:w-[81.5%] laptop:w-[45.1%]">
        {activeTabData && (
          <SolarStationItem
            title={activeTabData.title}
            description={activeTabData.description}
          />
        )}
        <GridButtons
          isGrid={isGrid}
          setIsGrid={setIsGrid}
          className="hidden laptop:flex"
        />
      </div>
      <div className="relative w-full laptop:w-[51.1%] h-auto">
        <Image
          src="/images/building.svg"
          alt=""
          width={472}
          height={398}
          className="w-full h-full"
        />
        <GridWIthElectricity className="absolute top-0 left-0 w-full h-auto" />
        <ImageLegend
          activeTab={activeTabData?.id}
          className="flex flex-col gap-1 absolute bottom-[-12px] right-0 laptop:bottom-[-20px] laptop:right-[-20px]"
        />
      </div>
      <GridButtons
        isGrid={isGrid}
        setIsGrid={setIsGrid}
        className="laptop:hidden"
      />
    </div>
  );
}
