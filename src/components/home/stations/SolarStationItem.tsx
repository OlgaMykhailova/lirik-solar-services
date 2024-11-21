import React, { Dispatch, SetStateAction } from "react";

import SubTitle from "@/components/shared/titles/SubTitle";

import GridButtons from "../../shared/buttons/gridButtons/GridButtons";

interface SolarStationItemProps {
  title: string;
  description: string;
  isGrid: boolean;
  setIsGrid: Dispatch<SetStateAction<boolean>>;
}

export default function SolarStationItem({
  title,
  description,
  isGrid,
  setIsGrid,
}: SolarStationItemProps) {
  return (
    <div className="laptop:flex flex-col gap-y-[15.5%] h-full">
      <div>
        <SubTitle className="h-[50px] tab:h-auto mb-2 laptop:mb-6">
          {title}
        </SubTitle>
        <p className="h-[132px] tab:min-h-[66px] laptop:min-h-[100px] max-w-[312px] tab:max-w-none laptop:w-[448px]">
          {description}
        </p>
      </div>
      <GridButtons
        isGrid={isGrid}
        setIsGrid={setIsGrid}
        className="hidden laptop:flex"
      />
    </div>
  );
}
