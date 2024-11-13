"use client";
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

  return (
    <>
      <MainButton onClick={() => setIsPopUpShown(true)} className={className}>
        {buttonName}
      </MainButton>
      <OrderPopUp
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
