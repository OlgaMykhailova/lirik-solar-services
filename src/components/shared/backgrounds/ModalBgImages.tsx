import Image from "next/image";
import React from "react";

export default function ModalBgImages() {
  return (
    <Image
      src="/images/bgImages/notificationBg.svg"
      alt="sunspot"
      width="395"
      height="411"
      className="block absolute top-0 right-0 w-[90%] h-auto overflow-hidden"
    />
  );
}
