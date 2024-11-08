import SubTitle from "@/components/shared/titles/SubTitle";
import Image from "next/image";

interface StageItemProps {
  stage: { title: string; description: string; icon: string };
}

export default function StageItem({ stage }: StageItemProps) {
  const { title, description, icon } = stage;

  return (
    <li className="flex flex-col items-center gap-4 tab:w-[45%] laptop:w-[23%] h-full">
      <Image
        src={`/images/bgImages/${icon}.webp`}
        alt={icon}
        height="93"
        width="163"
        className="h-[93px] w-auto"
      />
      <div className="size-4 rounded-full bg-backgroundLight"></div>
      <h3 className="laptop:h-16 mb-2 font-gogh text-xmdb laptop:text-mdb text-center">
        {title}
      </h3>
      <p className="text-center">{description}</p>
    </li>
  );
}
