import { useTranslations } from "next-intl";
import React from "react";
import { Dispatch, SetStateAction } from "react";

import SecondaryButton from "@/components/shared/buttons/SecondaryButton";

interface NavigationButtonsProps {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

export default function NavigationButtons({
  currentStep,
  setCurrentStep,
}: NavigationButtonsProps) {
  const t = useTranslations();

  return (
    <div className="flex gap-x-4 mt-14 mx-auto tab:mx-0 tab:mr-auto">
      <SecondaryButton
        onClick={() => setCurrentStep(currentStep - 1)}
        variant="ghost"
        className="w-[156px]"
      >
        {t("buttons.back")}
      </SecondaryButton>
      <SecondaryButton
        onClick={() => setCurrentStep(currentStep + 1)}
        className="w-[156px]"
      >
        {t("buttons.forward")}
      </SecondaryButton>
    </div>
  );
}
