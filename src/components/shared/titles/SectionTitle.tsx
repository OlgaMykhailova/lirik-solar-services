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
       before:-left-6 laptop:before:-left-7 before:top-4 laptop:before:top-5 before:w-full before:text-grey before:text-lgb 
       laptop:before:text-xlb before:blur-[1px] after:content-[''] after:absolute after:z-50 after:top-[10px] after:left-[-24px]
      tab:after:left-[-10px] after:size-[19px] tab:after:size-[23px] after:rounded-full after:bg-blue after:transition after:delay-[920ms] 
      after:duration-300 after:ease-out ${className}`}
    >
      {children}
    </h2>
  );
}
