import React from "react";

import ElectricityGrid from "./ElectricityGrid";
import ElectricityInvertor from "./ElectricityInvertor";
import ElectricityPanels from "./ElectricityPanels";
import ElectricityPanelsBatteries from "./ElectricityPanelsBatteries";
import SaleElectricity from "./SaleElectricity";

interface ImageLegendProps {
  activeTab: string | undefined;
  className: string;
}

export default function ImageLegend({
  activeTab = "grid",
  className = "",
}: ImageLegendProps) {
  switch (activeTab) {
    case "grid":
      return (
        <div className={className}>
          <ElectricityGrid />
          <ElectricityPanels />
          <SaleElectricity />
        </div>
      );
    case "autonomous":
      return (
        <div className={className}>
          <ElectricityGrid />
          <ElectricityPanels />
        </div>
      );
    case "hybrid":
      return (
        <div className={className}>
          <ElectricityGrid />
          <ElectricityPanelsBatteries />
          <SaleElectricity />
        </div>
      );
    case "ess":
      return (
        <div className={className}>
          <ElectricityGrid />
          <ElectricityInvertor />
        </div>
      );
  }
}
