import React from "react";

import { ButtonProps } from "@/types/buttonProps";

import IconArrow from "../icons/IconArrow";
import IconLoader from "../icons/IconLoader";

export default function MainButton({
  children,
  ariaLabel = "",
  className = "",
  type = "button",
  disabled = false,
  isLoading = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`group relative z-10 flex items-center gap-3 h-14 px-4 font-gogh text-baseb text-black before:content-[''] before:absolute 
        before:-z-10 before:top-0 before:left-0 before:rounded-full before:size-full laptop:before:size-14 before:bg-yellow disabled:before:bg-backgroundLight 
        transition before:duration-300 before:ease-out-quart before:will-change-transform enabled:hover:before:w-full 
        enabled:focus-visible:before:w-full enabled:focus-visible:before:bg-yellowDark enabled:active:before:bg-yellowDark
        enabled:active:scale-95 ${
          isLoading ? "disabled:before:bg-yellow before:w-full" : ""
        } outline-none ${className}`}
    >
      {children}
      {isLoading ? (
        <IconLoader className="animate-rotation" />
      ) : (
        <IconArrow
          className="text-blue transition duration-300 ease-out will-change-transform -translate-x-1 group-enabled:group-hover:translate-x-0 
      laptop:group-disabled:text-backgroundLight"
        />
      )}
    </button>
  );
}
