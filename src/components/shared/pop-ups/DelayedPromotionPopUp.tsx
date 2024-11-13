"use client";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

import Backdrop from "../backdrop/Backdrop";
import OrderPopUp from "./OrderPopUp";

const APPLICATION_NAME = "Акція -15%";

export default function DelayedPromotionPopUp() {
  const [isPopUpShown, setIsPopUpShown] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopUpShown(true);
    }, 35000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <OrderPopUp
        isPopUpShown={isPopUpShown}
        setIsPopUpShown={setIsPopUpShown}
        title={t("promotionPopUp.title")}
        description={t("promotionPopUp.description")}
        applicationName={APPLICATION_NAME}
      />
      <Backdrop
        isVisible={isPopUpShown}
        onClick={() => setIsPopUpShown(false)}
      />
    </>
  );
}
