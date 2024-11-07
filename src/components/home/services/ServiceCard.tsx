import React from "react";

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
      <h3 className="mb-6 font-gogh text-baseb tab:text-xmdb laptop:text-mdb">
        {title}
      </h3>
      <p>{description}</p>
    </li>
  );
}
