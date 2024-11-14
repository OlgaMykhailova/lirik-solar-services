import React from "react";
import { TabMenuItem } from "@/types/tabMenuItem";
import SolarStationItem from "./SolarStationItem";

interface TabContentProps {
  activeTabData: TabMenuItem | undefined;
}

export default function TabContent({ activeTabData }: TabContentProps) {
  return (
    <div className="pt-6">
      {activeTabData && (
        <SolarStationItem
          title={activeTabData.title}
          description={activeTabData.description}
        />
      )}
    </div>
  );
}
