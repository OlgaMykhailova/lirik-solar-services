import Image from "next/image";
import React from "react";

interface BenefitItemProps {
  benefit: { title: string; description: string; icon: string };
}

export default function BenefitItem({ benefit }: BenefitItemProps) {
  const { title, description, icon } = benefit;
  return (
    <li className="laptop:flex laptop:justify-between laptop:items-center">
      <h3 className="mb-4 laptop:mb-0 font-gogh text-baseb tab:text-xmdb laptop:text-mdb">
        {title}
      </h3>
      <div className="flex items-center gap-6 tab:gap-10 laptop:w-[56%]">
        <Image
          src={`/images/icons/${icon}.svg`}
          alt={icon}
          width="0"
          height="0"
          className="size-16 tab:size-20 laptop:size-[104px]"
        />
        <p>{description}</p>
      </div>
    </li>
  );
}
