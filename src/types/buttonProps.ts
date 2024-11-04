export interface ButtonProps {
  children: string;
  ariaLabel?: string;
  className?: string;
  type?: "submit" | "button";
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}
