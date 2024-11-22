import Image from "next/image";
import React from "react";

import HeroInfo from "./HeroInfo";

export default function Hero() {
  return (
    <section className="relative h-[618px] tab:h-[728px] pt-6 laptop:pt-16 laptop:pb-[90px] bg-headerGradient overflow-hidden">
      <HeroInfo />
      <Image
        src="/images/solarPanels.webp"
        alt="solar panels"
        width="1478"
        height="951"
        priority
        className="absolute z-10 left-[26.11%] tab:left-[31%] laptop:left-[47%] -bottom-2 min-w-[449px] object-cover object-left tab:min-w-[593px] w-[83%] tab:w-[67%] laptop:w-[57.7%] 
        laptop:max-w-[1030px] h-auto"
      />
    </section>
  );
}
