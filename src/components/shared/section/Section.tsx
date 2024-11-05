import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section
      className={`pl-4 tab:pl-8 laptop:pl-0 pb-20 tab:pb-[100px] laptop:pb-[150px] ${className}`}
    >
      {children}
    </section>
  );
}
