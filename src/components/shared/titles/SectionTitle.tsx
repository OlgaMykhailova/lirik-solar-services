interface SectionTitleProps {
  children: string;
  className?: string;
}

export default function SectionTitle({
  children,
  className,
}: SectionTitleProps) {
  return (
    <h2
      data-label={children}
      className={`relative mb-8 laptop:mb-12 text-lgb laptop:text-xlb font-gogh before:content-[attr(data-label)] before:absolute 
       before:-left-6 laptop:before:-left-7 before:top-4 laptop:before:top-5 before:text-grey before:text-xxlb before:blur-[1px]
        ${className}`}
    >
      {children}
    </h2>
  );
}
