import { IconProps } from "@/types/iconProps";

export default function IconClose({ className }: IconProps) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="icon close"
      className={className}
    >
      <rect
        x="12.0679"
        y="10.431"
        width="36"
        height="2"
        rx="1"
        transform="rotate(45 12.0679 10.431)"
        fill="currentColor"
      />
      <rect
        x="11"
        y="36.4559"
        width="36"
        height="2"
        rx="1"
        transform="rotate(-45 11 36.4559)"
        fill="currentColor"
      />
    </svg>
  );
}
