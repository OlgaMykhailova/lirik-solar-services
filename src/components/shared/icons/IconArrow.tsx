import { IconProps } from "@/types/iconProps";

export default function IconArrow({ className }: IconProps) {
  return (
    <svg
      width="15px"
      height="10px"
      viewBox="0 0 13 10"
      className={className}
      aria-label="icon arrow"
    >
      <path
        d="M1,5 L11,5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <polyline
        points="8 1 12 5 8 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></polyline>
    </svg>
  );
}
