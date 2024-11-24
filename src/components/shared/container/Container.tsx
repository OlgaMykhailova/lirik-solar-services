import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`container max-w-full laptop:max-w-[1920px] ${className}`}>
      {children}
    </div>
  );
}
