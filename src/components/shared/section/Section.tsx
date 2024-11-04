import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`tab:pb-[100px] laptop:pb-[150px] scroll-mt-[72px] ${className}`}
    >
      {children}
    </section>
  );
}
