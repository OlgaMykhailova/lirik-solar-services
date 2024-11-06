import { IconProps } from "@/types/iconProps";

export default function IconFacebook({ className }: IconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`outline-none laptop:group-hover:text-facebook group-focus-visible:text-facebook group-active:text-facebook 
        transition duration-300 ease-out ${className}`}
      aria-label="icon facebook"
    >
      <rect width="40" height="40" rx="20" fill="currentColor" />
      <path
        d="M27.7852 25.7812L28.6719 20H23.125V16.25C23.125 14.668 23.8984 13.125 26.3828 13.125H28.9062V8.20312C28.9062 8.20312 26.6172 7.8125 24.4297 7.8125C19.8594 7.8125 16.875 10.582 16.875 15.5938V20H11.7969V25.7812H16.875V39.7578C17.8945 39.918 18.9375 40 20 40C21.0625 40 22.1055 39.918 23.125 39.7578V25.7812H27.7852Z"
        fill="#FFFEFA"
      />
    </svg>
  );
}