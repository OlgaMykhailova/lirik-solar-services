import React, { Dispatch, SetStateAction } from "react";

import NoGridButton from "./NoGridButton";
import WithGridButton from "./WithGridButton";

interface GridButtonsProps {
  isGrid: boolean;
  setIsGrid: Dispatch<SetStateAction<boolean>>;
  className: string;
}

export default function GridButtons({ isGrid, setIsGrid, className="" }: GridButtonsProps) {
  return (
    <div className={`flex flex-col gap-y-6 pl-10 tab:pl-14 mt-8 ${className}`}>
      <WithGridButton isGrid={isGrid} setIsGrid={setIsGrid} />
      <NoGridButton isGrid={isGrid} setIsGrid={setIsGrid} />
    </div>
  );
}
