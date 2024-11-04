import React from "react";

import { ButtonProps } from "@/types/buttonProps";

export default function SecondaryButton({
  children,
  ariaLabel = "",
  className = "",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`flex justify-center items-center px-4 py-3 rounded-full outline-none bg-backgroundLight text-base text-black 
       transition duration-300 ease-out active:bg-blueLight active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}
