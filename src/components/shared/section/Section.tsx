import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`tab:pb-[100px] laptop:pb-[150px] ${className}`}>
      {children}
    </section>
  );
}
