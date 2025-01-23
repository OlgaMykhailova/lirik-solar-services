import { useTranslations } from "next-intl";
import React from "react";
import { Dispatch, SetStateAction } from "react";

import SecondaryButton from "@/components/shared/buttons/SecondaryButton";

interface NavigationButtonsProps {
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

export default function NavigationButtons({
  setCurrentStep,
}: NavigationButtonsProps) {
  const t = useTranslations();

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex gap-x-4 mt-14 tab:mt-auto mx-auto tab:mx-0 tab:mr-auto">
      <SecondaryButton
        onClick={handlePrevStep}
        variant="ghost"
        className="w-[156px]"
      >
        {t("buttons.back")}
      </SecondaryButton>
      <SecondaryButton onClick={handleNextStep} className="w-[156px]">
        {t("buttons.forward")}
      </SecondaryButton>
    </div>
  );
}
