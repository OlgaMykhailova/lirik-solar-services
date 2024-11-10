import Image from "next/image";
import React from "react";

import { ADDRESS_LINK } from "@/constants/constants";

export default function Map() {
  return (
    <div className="flex justify-center w-full tab:w-[46%]">
      <a
        href={ADDRESS_LINK}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="relative outline-none"
      >
        <Image
          src="/images/map.png"
          alt="map"
          width="528"
          height="501"
          className="w-full h-auto tab:h-[521px] aspect-[528/521] max-w-[528px] laptop:min-w-[528px] pc:min-w-[490px] object-cover tab:object-left"
        />

        <Image
          src="/images/icons/mapPin.svg"
          alt="map pin"
          width="38"
          height="38"
          className="absolute left-[11.2%] top-[23.5%] tab:left-[58px] tab:top-[134px]"
        />
      </a>
    </div>
  );
}
