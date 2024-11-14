"use client";
import Image from "next/image";
import React, { useState } from "react";

import { TabMenuItem } from "@/types/tabMenuItem";

import GridButtons from "./gridButtons/GridButtons";
import ImageLegend from "./imageLegend/ImageLegend";
import SolarStationItem from "./SolarStationItem";

interface TabContentProps {
  activeTabData: TabMenuItem | undefined;
}

export default function TabContent({ activeTabData }: TabContentProps) {
  const [isGrid, setIsGrid] = useState(true);

  return (
    <div className="laptop:flex justify-between pt-6">
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
      <div className="relative w-full laptop:w-[51.1%] h-auto mt-8 laptop:order-3">
        <Image
          src="/images/building.svg"
          alt=""
          width={472}
          height={398}
          className="w-full h-full"
        />
        <ImageLegend
          activeTab={activeTabData?.id}
          className="flex flex-col gap-1 tab:absolute bottom-0 right-0 laptop:bottom-[-20px] laptop:right-[-20px]"
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
