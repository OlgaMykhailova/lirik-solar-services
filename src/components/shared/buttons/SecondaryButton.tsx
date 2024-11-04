import React from "react";

interface ButtonProps {
  children: string;
  ariaLabel?: string;
  className?: string;
  type?: "submit" | "button";
  disabled?: boolean;
  onClick?: () => void;
}

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
      className={`flex justify-center items-center py-3 px-4 rounded-full outline-none bg-backgroundLight text-base text-black 
       transition duration-300 ease-out active:bg-blueLight active:scale-105 ${className}`}
    >
      {children}
    </button>
  );
}
