import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

import NoGridButton from "@/components/shared/buttons/gridButtons/NoGridButton";
import WithGridButton from "@/components/shared/buttons/gridButtons/WithGridButton";
import ImageLegend from "@/components/shared/elecricityImageLegend/ImageLegend";

import EssNoElectricity from "./energyPathsImages/EssNoElectricity";
import EssWIthElectricity from "./energyPathsImages/EssWithElectricity";

interface EssStationProps {
  isGrid: boolean;
  setIsGrid: Dispatch<SetStateAction<boolean>>;
}

export default function EssStation({ isGrid, setIsGrid }: EssStationProps) {
  return (
    <div className="laptop:min-w-[604px] laptop:w-[55%]">
      <div className="relative w-full h-full">
        <Image
          src={`/images/buildings/buildingEss.svg`}
          alt="building"
          width={472}
          height={398}
          className="w-full h-full"
        />
        <ImageLegend
          activeTab="ess"
          className="flex flex-col gap-[2px] tab:gap-1 absolute -bottom-11 right-0 tab:bottom-0 tab:right-0 max-w-[230px] min-h-[55px] tab:min-w-[290px] tab:min-h-[74px]"
        />
        <div className="absolute top-0 left-0 w-full h-full">
          {isGrid ? <EssWIthElectricity /> : <EssNoElectricity />}
        </div>
      </div>
      <div className="tab:hidden flex justify-between max-w-[350px] mt-12">
        <WithGridButton isGrid={isGrid} setIsGrid={setIsGrid} />
        <NoGridButton isGrid={isGrid} setIsGrid={setIsGrid} />
      </div>
    </div>
  );
}
