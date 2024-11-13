import Image from "next/image";
import React from "react";

export default function ModalBgImages() {
  return (
    <>
      <Image
        src="/images/bgImages/notificationBgMob.svg"
        alt="sunspot"
        width="0"
        height="0"
        className="tab:hidden absolute top-[-60px] right-[-20px] w-[360px] h-[471px]"
      />
      <Image
        src="/images/bgImages/notificationBgTab.svg"
        alt="sunspot"
        width="0"
        height="0"
        className="hidden tab:block absolute top-[-130px] right-[-40px] w-[664px] h-[773px]"
      />
    </>
  );
}
