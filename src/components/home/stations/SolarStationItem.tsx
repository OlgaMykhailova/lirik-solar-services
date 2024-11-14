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
      <p>{description}</p>
    </div>
  );
}
