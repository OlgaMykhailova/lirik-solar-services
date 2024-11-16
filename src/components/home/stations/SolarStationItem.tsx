import React from "react";

import SubTitle from "@/components/shared/titles/SubTitle";

interface SolarStationItemProps {
  title: string;
  description: string;
}

export default function SolarStationItem({
  title,
  description,
}: SolarStationItemProps) {
  return (
    <div>
      <SubTitle className="mb-2">{title}</SubTitle>
      <p className="h-[132px] tab:h-[66px] laptop:h-[100px] max-w-[312px] tab:max-w-none">
        {description}
      </p>
    </div>
  );
}
