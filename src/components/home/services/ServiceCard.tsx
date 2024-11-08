import React from "react";

import SubTitle from "@/components/shared/titles/SubTitle";

interface ServiceCardProps {
  service: { title: string; description: string };
  className?: string;
}

export default function ServiceCard({
  service,
  className = "",
}: ServiceCardProps) {
  const { title, description } = service;
  return (
    <li
      className={`flex flex-col justify-center tab:w-[48%] laptop:w-[32%] min-h-[182px] tab:min-h-[242px] p-6 rounded-[23px] even:bg-white odd:bg-sky 
     bg-cover shadow-base ${className}`}
    >
      <SubTitle className="mb-6">{title}</SubTitle>
      <p>{description}</p>
    </li>
  );
}
