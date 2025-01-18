"use client";

import Image from "next/image";
import React from "react";

import { useOnScreen } from "@/hooks/useOnScreen";

interface SunspotBgImagesProps {
  id: string;
  className?: string;
}

export default function SunspotBgImages({
  id,
  className = "",
}: SunspotBgImagesProps) {
  const { isVisible } = useOnScreen(id);

  return (
    <div
      id="sunspot"
      className={`absolute -top-[200px] left-0 z-[-10] w-full h-full ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition duration-1000 ease-out`}
    >
      <Image
        src="/images/bgImages/sunspotPC.svg"
        alt="sunspot"
        width="867"
        height="1009"
        className="hidden laptop:block sticky ml-auto laptop:right-0 laptop:top-3 laptop:w-[867px] laptop:h-[1009px]"
      />
      <Image
        src="/images/bgImages/sunspotTab.svg"
        alt="sunspot"
        width="675"
        height="773"
        className="hidden tab:block laptop:hidden sticky z-[-10] mt-[-42px] ml-auto top-0 tab:top-0 w-full tab:w-[675px] h-[773px]"
      />
      <Image
        src="/images/bgImages/sunspotMob.svg"
        alt="sunspot"
        width="370"
        height="471"
        className="tab:hidden sticky z-[-10] top-[29px] w-[370px] h-[471px] ml-auto"
      />
    </div>
  );
}
