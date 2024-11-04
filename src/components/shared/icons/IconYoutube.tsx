import { IconProps } from "@/types/iconProps";

export default function IconYoutube({ className }: IconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`outline-none laptop:group-hover:text-youtube group-focus-visible:text-youtube group-active:text-youtube 
        transition duration-300 ease-out ${className}`}
      aria-label="icon youtube"
    >
      <rect width="40" height="40" rx="20" fill="currentColor" />
      <path
        d="M33.6984 13.1304C33.3689 11.9065 32.4039 10.9415 31.1799 10.612C28.9439 10 19.9999 10 19.9999 10C19.9999 10 11.0558 10 8.81978 10.5884C7.61939 10.9179 6.63083 11.9065 6.30132 13.1304C5.71289 15.3664 5.71289 20.0032 5.71289 20.0032C5.71289 20.0032 5.71289 24.6636 6.30132 26.876C6.63083 28.1 7.59585 29.065 8.81978 29.3945C11.0793 30.0065 19.9999 30.0065 19.9999 30.0065C19.9999 30.0065 28.9439 30.0065 31.1799 29.418C32.4039 29.0885 33.3689 28.1235 33.6984 26.8996C34.2868 24.6636 34.2868 20.0268 34.2868 20.0268C34.2868 20.0268 34.3104 15.3664 33.6984 13.1304Z"
        fill="#FFFEFA"
      />
      <path
        d="M17.1523 24.2872L24.59 20.0035L17.1523 15.7197V24.2872Z"
        fill="currentColor"
      />
    </svg>
  );
}
