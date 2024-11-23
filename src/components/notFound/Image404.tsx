import React from "react";
import Image from "next/image";

export default function Image404() {
  return (
    <div className="relative flex mb-[41px] tab:mb-4 py-6 tab:py-9 laptop:py-11">
      <Image
        src="/images/icons/lightning.svg"
        alt="4"
        width={52}
        height={41}
        className="absolute top-0 left-[60px] tab:left-[87px] laptop:left-[111px] w-[52px] h-[41px] tab:w-[76px] tab:h-[60px] laptop:w-[96px] laptop:h-[75px]"
      />
      <Image
        src="/images/icons/lightning.svg"
        alt="lightning"
        width={52}
        height={41}
        className="absolute bottom-0 right-[64px] tab:right-[95px] laptop:right-[120px] rotate-180  w-[52px] h-[41px] tab:w-[76px] tab:h-[60px] laptop:w-[96px] laptop:h-[75px]"
      />
      <Image
        src="/images/icons/4.svg"
        alt="4"
        width={90}
        height={112}
        className="w-[90px] h-[112px] tab:w-[133px] tab:h-[166px] laptop:w-[168px] laptop:h-[210px]"
      />
      <Image
        src="/images/icons/socket.svg"
        alt="socket"
        width={112}
        height={112}
        className="size-[122px] tab:size-[167px] laptop:size-[211px]"
      />
      <Image
        src="/images/icons/4.svg"
        alt="4"
        width={90}
        height={112}
        className="w-[90px] h-[112px] tab:w-[133px] tab:h-[166px] laptop:w-[168px] laptop:h-[210px]"
      />
    </div>
  );
}
