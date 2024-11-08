import React from "react";

interface BackdropProps {
  isVisible: boolean;
  onClick: () => void;
}

export default function Backdrop({
  isVisible = false,
  onClick,
}: BackdropProps) {
  return (
    <div
      className={`fixed z-40 inset-0 bg-white bg-opacity-70 transition-opacity duration-300 ${
        isVisible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClick}
    />
  );
}
