import { useTranslations } from "next-intl";
import React, { Dispatch, SetStateAction } from "react";

interface WithGridButtonProps {
  isGrid: boolean;
  setIsGrid: Dispatch<SetStateAction<boolean>>;
}

export default function WithGridButton({
  isGrid,
  setIsGrid,
}: WithGridButtonProps) {
  const t = useTranslations("buttons.gridButtons");

  return (
    <button
      onClick={() => setIsGrid(true)}
      className={`w-[154px] h-11 tab:h-12 px-4 rounded-[60px] border border-backgroundLight outline-none text-sm tab:text-base text-left transition duration-300 ease-out ${
        isGrid ? "bg-backgroundLight text-black" : "bg-white text-inputText"
      }`}
    >
      {t("withElectricity")}
    </button>
  );
}
