import React from "react";
import Image from "next/image";

export default function ImagePlugConnection() {
  return (
    <div className="tab:absolute tab:top-[253px] laptop:top-[288px] flex justify-between w-full mb-8">
      <div className="relative w-[120px] tab:w-[91px] laptop:w-[273px] h-[3px] laptop:h-1 bg-inputLabel">
        <Image
          src="/images/icons/connector.svg"
          alt="connector"
          width={38}
          height={35}
          className="absolute top-[-16.5px] laptop:top-[-21px] right-[-31px] laptop:right-[-37px] w-[38px] h-auto laptop:w-[48px]"
        />
      </div>
      <div className="relative w-[120px] tab:w-[91px] laptop:w-[273px] h-[3px] laptop:h-1 bg-inputLabel">
        <Image
          src="/images/icons/plug.svg"
          alt="plug"
          width={38}
          height={35}
          className="absolute top-[-17.5px] laptop:top-[-20px] left-[-31px] laptop:laptop-[-37px] h-[38px] w-auto laptop:h-[44px]"
        />
      </div>
    </div>
  );
}
