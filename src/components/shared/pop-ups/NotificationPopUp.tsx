import React from "react";
import Image from "next/image";

export default function NotificationPopUp() {
  return (
    <div className="flex flex-col gap-4 w-[312px] tab:w-[496px] px-6 py-[30px] bg-white rounded-[16px]">
      <h2></h2>
      <p></p>
      <Image src="/images/icons/logo.svg" alt="logo" width={168} height={168} />
    </div>
  );
}
