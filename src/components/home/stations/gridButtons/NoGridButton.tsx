import React, { Dispatch, SetStateAction } from "react";
import { useTranslations } from "next-intl";

interface NoGridButtonProps {
  isGrid: boolean;
  setIsGrid: Dispatch<SetStateAction<boolean>>;
}

export default function NoGridButton({ isGrid, setIsGrid }: NoGridButtonProps) {
  const t = useTranslations("buttons.gridButtons");

  return (
    <button
      onClick={() => setIsGrid(false)}
      className={`w-[154px] px-4 py-3 rounded-[60px] border border-blueLight outline-none text-base text-left transition duration-300 ease-out ${
        isGrid ? "bg-transparent" : "bg-backgroundLight"
      }`}
    >
      {t("noElectricity")}
    </button>
  );
}
