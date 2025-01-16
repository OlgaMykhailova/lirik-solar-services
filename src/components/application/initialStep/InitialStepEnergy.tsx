import { useTranslations } from "next-intl";
import React from "react";

interface InitialStepEnergyProps {
  isVisible: boolean;
}

export default function InitialStepEnergy({
  isVisible,
}: InitialStepEnergyProps) {
  const t = useTranslations();

  return (
    <div className="flex flex-col justify-between w-[328px] tab:w-[497px] laptop:w-[607px] h-[120px] tab:h-[182px] laptop:h-[222px] p-2">
      <p
        className={`relative z-10 flex justify-center items-center w-fit h-[37px] tab:h-14 laptop:h-[68px] px-[10px] tab:px-[22px] font-gogh 
            text-xmdb tab:text-lgb laptop:text-largeb text-blue before:content-[''] before:absolute before:-z-10 before:rounded-full 
            before:w-full before:h-full before:bg-blueMedium transition delay-700 duration-[1000ms] ease-gentle ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[-45px] tab:translate-x-[-95px]"
            }`}
      >
        {t("contactUsPage.energy")}
      </p>
      <p
        className={`relative z-10 w-fit h-[37px] tab:h-14 laptop:h-[68px] ml-auto flex justify-center items-center px-[10px] tab:px-[22px] 
            font-gogh text-xmdb tab:text-lgb laptop:text-largeb text-white before:content-[''] before:absolute before:-z-10 before:rounded-full 
            before:w-full before:h-full before:bg-blue transition delay-700 duration-[1000ms] ease-gentle ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[-45px] tab:translate-x-[-95px]"
            }}`}
      >
        {t("contactUsPage.independence")}
      </p>
    </div>
  );
}
