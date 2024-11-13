"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

import Backdrop from "../backdrop/Backdrop";
import OrderPopUp from "../pop-ups/OrderPopUp";
import MainButton from "./MainButton";

interface OpenPopupButtonProps {
  buttonName: string;
  className?: string;
}

export default function OpenPopupButton({
  buttonName,
  className = "",
}: OpenPopupButtonProps) {
  const [isPopUpShown, setIsPopUpShown] = useState(false);
  const t = useTranslations();

  return (
    <>
      <MainButton onClick={() => setIsPopUpShown(true)} className={className}>
        {buttonName}
      </MainButton>
      <OrderPopUp
        title={t("orderPopUp.title")}
        description={t("writeUs.description.partTwo")}
        isPopUpShown={isPopUpShown}
        setIsPopUpShown={setIsPopUpShown}
      />
      <Backdrop
        isVisible={isPopUpShown}
        onClick={() => setIsPopUpShown(false)}
      />
    </>
  );
}
