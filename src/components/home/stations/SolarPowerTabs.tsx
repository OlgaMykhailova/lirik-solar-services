"use client";

import { useTranslations } from "next-intl";
import React, { useState } from "react";

import StationsDescription from "./StationsDescription";
import TabContent from "./TabContent";
import TabMenu from "./TabMenu";

export default function SolarPowerTabs() {
  const [activeTab, setActiveTab] = useState("grid");
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
      <div className="flex flex-col laptop:flex-row items-start gap-y-8 pb-2 laptop:pb-6 laptop:border-b border-blueLight">
        <StationsDescription />
        <TabMenu
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <TabContent activeTabData={activeTabData} />
    </div>
  );
}
