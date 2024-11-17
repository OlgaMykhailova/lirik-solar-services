import { useTranslations } from "next-intl";
import React, { Dispatch, SetStateAction } from "react";

interface NoGridButtonProps {
  isGrid: boolean;
  setIsGrid: Dispatch<SetStateAction<boolean>>;
}

export default function NoGridButton({ isGrid, setIsGrid }: NoGridButtonProps) {
  const t = useTranslations("buttons.gridButtons");

  return (
    <button
      onClick={() => setIsGrid(false)}
      className={`w-[158px] h-11 tab:h-12 px-4 rounded-[60px] border border-backgroundLight outline-none text-sm tab:text-base 
        text-center tab:text-left transition duration-300 ease-out ${
          isGrid ? "bg-white text-inputText" : "bg-backgroundLight text-black"
        }`}
    >
      {t("noElectricity")}
    </button>
  );
}
