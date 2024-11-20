import React, { Dispatch, SetStateAction } from "react";

import NoGridButton from "./NoGridButton";
import WithGridButton from "./WithGridButton";

interface GridButtonsProps {
  isGrid: boolean;
  setIsGrid: Dispatch<SetStateAction<boolean>>;
  className?: string;
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
      <div
        data-label="with grid"
        className="relative hidden tab:block ml-20 before:content-[''] before:absolute before:top-1/2 before:left-[-106px] 
       before:bg-blue before:w-[56px] before:h-[3px] after:content-[''] after:absolute after:size-[23px] after:rounded-full
      after:left-[-54px] after:top-[14px] after:bg-[var(--after-color)] after:transition after:duration-300 after:ease-out"
      >
        <div
          data-button="with grid"
          className="absolute left-[-106px] top-1/2 w-[56px] h-[3px] bg-yellowGradientRight opacity-[var(--div-opacity)] transition duration-300
          ease-out"
        ></div>
        <WithGridButton isGrid={isGrid} setIsGrid={setIsGrid} />
      </div>
      <div
        className="relative hidden tab:block ml-20 before:content-[''] before:absolute before:top-1/2 before:left-[-106px] 
      before:bg-blue before:w-[56px] before:h-[3px] after:content-[''] after:absolute after:w-[3px] after:h-[27px] after:rounded-full
      after:left-[-51px] after:top-[12px] after:bg-blue after:rotate-[25deg]"
      >
        <NoGridButton isGrid={isGrid} setIsGrid={setIsGrid} />
      </div>
    </div>
  );
}
