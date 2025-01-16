import React from "react";

import AnimatedSun from "@/components/shared/animatedSun/AnimatedSun";

import HeroInfo from "./HeroInfo";

export default function Hero() {
  return (
    <section
      id="hero-contact-us"
      className="relative h-[428px] sm:h-[268px] tab:h-[540px] tabxl:h-[430px] laptop:h-[738px] desk:h-[538px] px-2 tab:px-0 pt-[180px] 
      sm:pt-0 tab:pt-[110px] tabxl:pt-0 laptop:pt-[240px] desk:pt-0 pb-10 tab:pb-14 desk:pb-20 mt-[70px] laptop:mt-[110px] overflow-x-clip"
    >
      <AnimatedSun
        id="hero-contact-us"
        className={`absolute z-20 right-4 tab:right-[31px] top-[-64px] laptop:top-[-106px] size-[228px] 
            tab:size-[291px] laptop:size-[578px] before:content-[''] before:absolute before:top-[46px] laptop:before:top-[96px] before:left-[-4px] tab:before:left-6 before:z-[-10] 
            before:size-[85%] before:rounded-full before:bg-yellow before:bg-opacity-15 before:blur-[40px] laptop:before:blur-[100px]
            `}
      />
      <HeroInfo />
    </section>
  );
}
