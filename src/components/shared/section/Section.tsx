import React from "react";

import Container from "../container/Container";

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
      className={`pl-4 tab:pl-8 laptop:pl-0 pb-20 tab:pb-[100px] laptop:pb-[150px] scroll-mt-[72px] ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
