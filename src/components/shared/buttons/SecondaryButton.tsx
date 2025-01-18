import React from "react";

import { ButtonProps } from "@/types/buttonProps";

import IconLoader from "../icons/IconLoader";

export default function SecondaryButton({
  children,
  ariaLabel = "",
  className = "",
  variant = "solid",
  type = "button",
  onClick,
  disabled = false,
  isLoading = false,
}: ButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`flex justify-center items-center px-4 py-3 rounded-full outline-none ${
        variant === "solid"
          ? "bg-backgroundLight"
          : "bg-none border-backgroundLight border-[1px]"
      } text-base text-black transition duration-300 ease-out laptop:enabled:hover:bg-blueMedium focus-visible:enabled:bg-blueMedium enabled:active:bg-blueLight 
      enabled:active:scale-95 disabled:bg-inputStroke ${className}`}
    >
      {children}
      {isLoading ? <IconLoader className="ml-1 animate-rotation" /> : null}
    </button>
  );
}
