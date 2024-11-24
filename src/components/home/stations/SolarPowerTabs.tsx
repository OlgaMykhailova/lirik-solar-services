"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

import { TabType } from "@/types/tab";
import { TabMenuItem } from "@/types/tabMenuItem";

import ImageLegend from "../../shared/elecricityImageLegend/ImageLegend";
import AutonomousNoElectricity from "./energyPathsImages/AutonomousNoElectricity";
import AutonomousWIthElectricity from "./energyPathsImages/AutonomousWithElectricity";
import GridNoElectricity from "./energyPathsImages/GridNoElectricity";
import GridWIthElectricity from "./energyPathsImages/GridWIthElectricity";
import HybridNoElectricity from "./energyPathsImages/HybridNoElectricity";
import HybridWIthElectricity from "./energyPathsImages/HybridWithElectricity";
import SolarStationItem from "./SolarStationItem";
import StationsDescription from "./StationsDescription";
import TabMenu from "./TabMenu";

export default function SolarPowerTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("grid");
  const [isGrid, setIsGrid] = useState(true);
  const t = useTranslations("stations.tabs");

  const tabs: TabMenuItem[] = [
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

  const electricityMap = {
    grid: {
      true: <GridWIthElectricity />,
      false: <GridNoElectricity />,
    },
    autonomous: {
      true: <AutonomousWIthElectricity />,
      false: <AutonomousNoElectricity />,
    },
    hybrid: {
      true: <HybridWIthElectricity />,
      false: <HybridNoElectricity />,
    },
  };

  const renderElectricityComponent = () => (
    <div className="absolute top-0 left-0 w-full h-full">
      {electricityMap[activeTab]?.[isGrid.toString() as "true" | "false"]}
    </div>
  );

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
            src={`/images/buildings/building${
              activeTab === "grid" ? "Grid" : "Autonomous"
            }.svg`}
            alt="building"
            width={472}
            height={398}
            className="w-full h-full"
          />
          {renderElectricityComponent()}
          <ImageLegend
            activeTab={activeTabData?.id}
            className="flex flex-col gap-[2px] tab:gap-1 absolute -bottom-9 right-0 tab:bottom-0 tab:right-0 min-w-[220px] min-h-[55px] tab:min-w-[290px] tab:min-h-[74px]"
          />
        </div>
      </div>
    </div>
  );
}
