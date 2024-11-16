"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";

import StationsDescription from "./StationsDescription";
import Image from "next/image";
import TabMenu from "./TabMenu";
import GridWIthElectricity from "./energyPathsImages/GridWIthElectricity";
import GridButtons from "./gridButtons/GridButtons";
import ImageLegend from "./imageLegend/ImageLegend";
import SolarStationItem from "./SolarStationItem";

export default function SolarPowerTabs() {
  const [activeTab, setActiveTab] = useState("grid");
  const [isGrid, setIsGrid] = useState(true);
  const t = useTranslations("stations.tabs");

  const tabs = [
    {
      id: "grid",
      label: t("grid.name"),
      title: t("grid.title"),
      description: t("grid.description"),
    },
    {
      id: "autonomous",
      label: t("autonomous.name"),
      title: t("autonomous.title"),
      description: t("autonomous.description"),
    },
    {
      id: "hybrid",
      label: t("hybrid.name"),
      title: t("hybrid.title"),
      description: t("hybrid.description"),
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div>
      <StationsDescription />
      <div className="flex flex-col laptop:flex-row gap-y-6 laptop:pt-8 laptop:border-t border-blueLight">
        <div className="flex flex-col gap-y-6 tab:gap-y-8">
          <TabMenu
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div className="tab:w-[81.5%] laptop:w-full h-full">
            {activeTabData && (
              <SolarStationItem
                title={activeTabData.title}
                description={activeTabData.description}
                isGrid={isGrid}
                setIsGrid={setIsGrid}
              />
            )}
          </div>
        </div>
        <div className="relative w-full h-auto laptop:min-w-[604px] laptop:w-[55%]">
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
            className="flex flex-col gap-[2px] tab:gap-1 absolute -bottom-9 right-0 tab:bottom-0 tab:right-0"
          />
        </div>
        <GridButtons
          isGrid={isGrid}
          setIsGrid={setIsGrid}
          className="laptop:hidden mt-8 tab:mt-0"
        />
      </div>
    </div>
  );
}
