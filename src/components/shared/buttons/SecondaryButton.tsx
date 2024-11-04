import React from "react";

import { ButtonProps } from "@/types/buttonProps";

export default function SecondaryButton({
  children,
  ariaLabel = "",
  className = "",
  variant = "solid",
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      type={type}
      onClick={onClick}
      className={`flex justify-center items-center px-4 py-3 rounded-full outline-none ${
        variant === "solid"
          ? "bg-backgroundLight"
          : "bg-none border-backgroundLight border-[1px]"
      } text-base text-black transition duration-300 ease-out laptop:hover:bg-blueMedium focus-visible:bg-blueMedium active:bg-blueLight 
      active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}
