import React, { Dispatch, ReactNode, SetStateAction } from "react";

import ModalBgImages from "../backgrounds/ModalBgImages";
import IconButton from "../buttons/IconButton";
import IconClose from "../icons/IconClose";

interface ModalProps {
  isPopUpShown: boolean;
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
  isError?: boolean;
  children: ReactNode;
}

export default function Modal({
  isPopUpShown,
  setIsPopUpShown,
  isError = false,
  children,
}: ModalProps) {
  return (
    <div
      className={`${
        isPopUpShown
          ? "-translate-y-[calc(50dvh-50%)] opacity-100"
          : "translate-y-full opacity-100"
      } fixed left-1/2 bottom-0 transform -translate-x-1/2 transition duration-[1000ms] ease-out z-50 overflow-hidden flex flex-col gap-4 
   min-w-[312px] max-w-[496px] w-[86.6%] tab:w-[496px] max-h-screen px-6 py-12 tab:px-12 bg-white rounded-[16px] tab:rounded-[24px] shadow-base`}
    >
      {!isError && <ModalBgImages />}
      <div className="absolute top-2 right-2 tab:top-6 tab:right-6">
        <IconButton handleClick={() => setIsPopUpShown(false)}>
          {<IconClose className="size-9 tab:size-10 text-black" />}
        </IconButton>
      </div>
      {children}
    </div>
  );
}
