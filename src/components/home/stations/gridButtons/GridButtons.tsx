import React, { Dispatch, SetStateAction } from "react";

import NoGridButton from "./NoGridButton";
import WithGridButton from "./WithGridButton";

interface GridButtonsProps {
  isGrid: boolean;
  setIsGrid: Dispatch<SetStateAction<boolean>>;
  className: string;
}

export default function GridButtons({
  isGrid,
  setIsGrid,
  className = "",
}: GridButtonsProps) {
  return (
    <div
      className={`flex laptop:flex-col gap-y-6 justify-between max-w-[350px] ${className}`}
    >
      <WithGridButton isGrid={isGrid} setIsGrid={setIsGrid} />
      <NoGridButton isGrid={isGrid} setIsGrid={setIsGrid} />
    </div>
  );
}
