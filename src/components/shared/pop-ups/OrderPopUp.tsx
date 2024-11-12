"use client";

import React, { Dispatch, SetStateAction } from "react";
import Backdrop from "../backdrop/Backdrop";

interface OrderPopUpProps {
  isPopUpShown: boolean;
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
}

export default function OrderPopUp({
  isPopUpShown,
  setIsPopUpShown,
}: OrderPopUpProps) {
  return (
    <>
      <div
        className={`${
          isPopUpShown
            ? "-translate-y-[calc(50vh-50%)] opacity-100 no-doc-scroll"
            : "translate-y-full opacity-100"
        } fixed left-1/2 bottom-0 transform -translate-x-1/2 transition duration-[1000ms] ease-out z-50 overflow-hidden flex flex-col gap-4 
         min-w-[312px] tab:w-[496px] px-6 py-[30px] tab:p-12 bg-white rounded-[16px] tab:rounded-[24px] shadow-base`}
      ></div>
      <Backdrop
        isVisible={isPopUpShown}
        onClick={() => setIsPopUpShown(false)}
      />
    </>
  );
}
