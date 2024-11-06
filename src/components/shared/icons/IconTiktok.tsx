import { IconProps } from "@/types/iconProps";

export default function IconTiktok({ className }: IconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`outline-none laptop:group-hover:text-black group-focus-visible:text-black group-active:text-black 
        transition duration-300 ease-out ${className}`}
      aria-label="icon tiktok"
    >
      <rect width="40" height="40" rx="20" fill="currentColor" />
      <path
        d="M26.3811 6H21.4485V25.0724C21.4485 27.3449 19.5515 29.2116 17.1906 29.2116C14.8297 29.2116 12.9325 27.3449 12.9325 25.0724C12.9325 22.8406 14.7875 21.0145 17.0641 20.9333V16.1449C12.0472 16.2261 8 20.1623 8 25.0724C8 30.0232 12.1315 34 17.2327 34C22.3339 34 26.4654 29.9826 26.4654 25.0724V15.2927C28.3204 16.5913 30.5969 17.3623 33 17.4029V12.6145C29.2901 12.4928 26.3811 9.57101 26.3811 6Z"
        fill="#FFFEFA"
      />
    </svg>
  );
}