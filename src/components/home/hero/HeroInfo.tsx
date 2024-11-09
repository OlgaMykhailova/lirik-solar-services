import { useTranslations } from "next-intl";
import React from "react";

import MainButton from "@/components/shared/buttons/MainButton";
import Container from "@/components/shared/container/Container";

export default function HeroInfo() {
  const t = useTranslations();

  return (
    <Container className="relative">
      <p className="font-gogh text-white text-xlbb tab:text-xxxlb laptop:text-xxxxlb">
        {t("hero.companyName")}
      </p>
      <p className="mb-4 laptop:mb-6 font-gogh text-xxmdb tab:text-xlb laptop:text-xxlb text-white">
        {t("hero.path")}
      </p>
      <span
        className="relative z-10 inline-block px-4 tab:px-[38px] laptop:px-[50px] font-gogh text-lg tab:text-xxl laptop:text-xxxl text-blue before:content-[''] before:absolute before:-z-10 before:top-0 laptop:before:top-1
     before:left-0 before:rounded-full before:w-full before:h-14 tab:before:h-[88px] laptop:before:h-[98px] before:bg-white before:opacity-30"
      >
        {t("hero.sunny")}
      </span>
      <span
        className="absolute z-10 left-[172px] tab:left-[356px] laptop:left-[456px] top-[160px] tab:top-[259px] laptop:top-[300px] inline-block px-4 tab:px-[38px] laptop:px-[50px] align-text-top font-gogh text-lg tab:text-xxl laptop:text-xxxl text-blue 
    before:content-[''] before:absolute before:-z-10 before:top-0 laptop:before:top-1 before:left-0 before:rounded-full before:w-full before:h-14 tab:before:h-[88px] laptop:before:h-[98px]
          before:bg-white before:opacity-30"
      >
        {t("hero.energy")}
      </span>
      <h1 className="w-[291px] mt-[84px] mb-6 tab:mb-10 tab:text-base text-white">
        {t("hero.title")}
      </h1>
      <MainButton>{t("buttons.startPath")}</MainButton>
    </Container>
  );
}
