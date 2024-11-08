import { IconProps } from "@/types/iconProps";

export default function IconBurgerMenu({ className }: IconProps) {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="icon burger menu"
      className={className}
    >
      <rect x="10" y="15" width="36" height="2" rx="1" fill="currentColor" />
      <rect x="10" y="27" width="36" height="2" rx="1" fill="currentColor" />
      <rect x="10" y="39" width="36" height="2" rx="1" fill="currentColor" />
    </svg>
  );
}
