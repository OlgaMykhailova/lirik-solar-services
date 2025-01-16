import React from "react";
import AnimatedSun from "@/components/shared/animatedSun/AnimatedSun";
import Application from "@/components/application/Application";

const SECTION_ID = "application-page";

export default function page() {
  return (
    <main
      id={SECTION_ID}
      className="relative flex-1 flex flex-col overflow-clip"
    >
      <AnimatedSun
        id={SECTION_ID}
        className={`absolute z-20 right-1 tab:right-4 top-1 tab:top-4 size-[191px] tab:size-[278px] laptop:size-[304px] 
                before:content-[''] before:absolute before:top-[46px] laptop:before:top-[66px] before:left-[-4px] tab:before:left-2 before:z-[-10] 
                  before:size-[85%] before:rounded-full before:bg-yellow before:bg-opacity-15 before:blur-[30px] laptop:before:blur-[50px]
                  `}
      />
      <Application />
    </main>
  );
}
