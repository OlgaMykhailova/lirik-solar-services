import Image from "next/image";
import React from "react";

import { ADDRESS_LINK } from "@/constants/constants";

export default function Map() {
  return (
    <div className="relative w-full tab:w-[46%]">
      <Image
        src="/images/map.png"
        alt="map"
        width="528"
        height="501"
        className="w-full aspect-[528/521] max-w-[528px] h-[521px] laptop:min-w-[528px] pc:min-w-[490px] object-cover object-left"
      />
      <a
        href={ADDRESS_LINK}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="absolute left-[58px] top-[134px] outline-none"
      >
        <Image
          src="/images/icons/mapPin.svg"
          alt="map pin"
          width="38"
          height="38"
        />
      </a>
    </div>
  );
}
