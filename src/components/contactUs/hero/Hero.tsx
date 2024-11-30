import React from "react";

import AnimatedSun from "@/components/home/about/AnimatedSun";

import HeroInfo from "./HeroInfo";

export default function Hero() {
  return (
    <section
      id="hero-contact-us"
      className="relative h-[448px] sm:h-[268px] tab:h-[540px] laptop:h-[738px] desk:h-[538px] px-2 tab:px-0 pt-[180px] sm:pt-0 tab:pt-[110px] laptop:pt-[240px] desk:pt-0 pb-10 tab:pb-14 desk:pb-20 mt-[70px] laptop:mt-[110px]"
    >
      <AnimatedSun id="hero-contact-us" />
      <HeroInfo />
    </section>
  );
}
