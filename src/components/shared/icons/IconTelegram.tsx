import { IconProps } from "@/types/iconProps";

export default function IconTelegram({ className }: IconProps) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="icon telegram"
      className={`outline-none laptop:group-hover:text-telegram group-focus-visible:text-telegram group-active:text-telegram 
        transition duration-300 ease-out ${className}`}
    >
      <rect width="40" height="40" rx="20" fill="currentColor" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.05368 19.7889C14.8841 17.2487 18.7719 15.574 20.7172 14.7649C26.2715 12.4547 27.4256 12.0534 28.1778 12.0402C28.3433 12.0373 28.7132 12.0783 28.9528 12.2727C29.1551 12.4369 29.2108 12.6587 29.2375 12.8143C29.2641 12.97 29.2973 13.3246 29.2709 13.6017C28.9699 16.7641 27.6676 24.4386 27.005 27.9806C26.7246 29.4794 26.1726 29.9819 25.6382 30.0311C24.4767 30.138 23.5948 29.2635 22.4699 28.5261C20.7096 27.3723 19.7152 26.654 18.0066 25.528C16.0319 24.2268 17.312 23.5116 18.4373 22.3428C18.7318 22.0369 23.8492 17.3823 23.9482 16.96C23.9606 16.9072 23.9721 16.7104 23.8551 16.6065C23.7382 16.5025 23.5656 16.5381 23.4411 16.5663C23.2645 16.6064 20.4525 18.465 15.0049 22.1423C14.2067 22.6904 13.4838 22.9574 12.836 22.9434C12.1219 22.928 10.7483 22.5397 9.72709 22.2077C8.47459 21.8006 7.47913 21.5853 7.56581 20.8939C7.61096 20.5337 8.10692 20.1654 9.05368 19.7889Z"
        fill="#FFFEFA"
      />
    </svg>
  );
}
