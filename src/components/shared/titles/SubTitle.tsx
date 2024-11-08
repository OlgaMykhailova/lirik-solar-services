interface SubTitleProps {
  children: string;
  className?: string;
}

export default function SubTitle({ children, className }: SubTitleProps) {
  return (
    <h3
      className={`text-baseb tab:text-xmdb laptop:text-mdb font-gogh ${className}`}
    >
      {children}
    </h3>
  );
}
