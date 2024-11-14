import React from "react";

interface PopUpTitleProps {
  children: string;
  className?: string;
}

export default function PopUpTitle({
  children,
  className = "",
}: PopUpTitleProps) {
  return (
    <h2
      data-label={children}
      className={`relative text-xmdb tab:text-lgb font-gogh before:content-[attr(data-label)] before:absolute 
before:-left-4 tab:before:-left-7 before:top-4 tab:before:top-5 before:w-full before:text-grey before:text-xmdb tab:before:text-lgb
 before:blur-[1px] ${className}`}
    >
      {children}
    </h2>
  );
}
