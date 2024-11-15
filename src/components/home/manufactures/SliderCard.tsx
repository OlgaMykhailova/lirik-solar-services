import React from "react";
import Image from "next/image";

interface SliderCardProps {
  image: string;
}

const manufacturesList = [
  "ABB",
  "BYD",
  "Canadian-Solar",
  "Chisage-ESS",
  "DEYE",
  "Dyness",
  "Felicity-ESS",
  "FOX ESS",
  "Fronius",
  "GOODWE",
  "Growatt",
  "GSL-ENERGY",
  "Huawei",
  "JA Solar",
  "Jinko Solar",
  "KBE",
  "Longi-solar",
  "Pylontech",
  "Risen",
  "SMA",
  "SOFAR",
  "Solaredge",
  "SOLAX-Prosolax",
  "Solis",
];

export default function SliderCard({ image }: SliderCardProps) {
  return (
    <div className="size-[148px] tab:size-[160px] rounded-[16px] bg-white shadow-base">
      <Image
        src={`/images/manufactures/${image}.webp`}
        alt={image}
        width="531"
        height="531"
        className="size-[148px] tab:size-[160px] rounded-[16px]"
      />
    </div>
  );
}
