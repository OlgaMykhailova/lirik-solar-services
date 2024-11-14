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
      className={`w-[154px] px-4 py-3 rounded-[60px] border border-blueLight outline-none text-base text-left transition duration-300 ease-out ${
        isGrid ? "bg-backgroundLight" : "bg-transparent"
      }`}
    >
      {t("withElectricity")}
    </button>
  );
}
