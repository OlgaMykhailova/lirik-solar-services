"use client";
import React, { useEffect, useState } from "react";

import Backdrop from "../backdrop/Backdrop";
import OrderPopUp from "./OrderPopUp";

export default function DelayedOrderPopUp() {
  const [isPopUpShown, setIsPopUpShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopUpShown(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
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
