import React from "react";

interface FormSubtitleProps {
  children: string;
  className?: string;
}

export default function FormSubtitle({
  children,
  className,
}: FormSubtitleProps) {
  return (
    <h3 className={`text-yellowDark text-14reg tab:text-16reg ${className}`}>
      {children}
    </h3>
  );
}
