import Image from "next/image";
import React from "react";

export default function SunspotBgImages() {
  return (
    <div className="absolute top-0 left-0 z-[-10] w-full h-full">
      <Image
        src="/images/bgImages/sunspotPC.svg"
        alt="sunspot"
        width="0"
        height="0"
        className="hidden laptop:block sticky ml-auto laptop:right-0 laptop:top-3 laptop:w-[867px] laptop:h-[1009px]"
      />
      <Image
        src="/images/bgImages/sunspotTab.svg"
        alt="sunspot"
        width="0"
        height="0"
        className="hidden tab:block laptop:hidden sticky z-[-10] mt-[-42px] ml-auto top-0 tab:top-0 w-full tab:w-[675px] h-[773px]"
      />
      <Image
        src="/images/bgImages/sunspotMob.svg"
        alt="sunspot"
        width="0"
        height="0"
        className="tab:hidden sticky z-[-10] top-[29px] w-[370px] h-[471px] ml-auto"
      />
    </div>
  );
}
