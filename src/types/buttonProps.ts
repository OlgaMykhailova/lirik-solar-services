export interface ButtonProps {
  children: string | React.JSX.Element;
  ariaLabel?: string;
  className?: string;
  type?: "submit" | "button";
  variant?: "solid" | "ghost";
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}
