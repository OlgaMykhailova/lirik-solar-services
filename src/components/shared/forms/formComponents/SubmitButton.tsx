import React from "react";

import MainButton from "../../buttons/MainButton";
import SecondaryButton from "../../buttons/SecondaryButton";

interface SubmitButtonProps {
  dirty: boolean;
  isValid: boolean;
  isLoading: boolean;
  children: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function SubmitButton({
  dirty,
  isValid,
  isLoading,
  children,
  variant = "primary",
  className = "",
}: SubmitButtonProps) {
  return (
    <>
      {variant === "primary" ? (
        <MainButton
          type="submit"
          disabled={!(dirty && isValid) || isLoading}
          isLoading={isLoading}
          className={`mt-4 tab:mt-6 mr-auto ${className}`}
        >
          {children}
        </MainButton>
      ) : (
        <SecondaryButton
          type="submit"
          disabled={!(dirty && isValid) || isLoading}
          isLoading={isLoading}
          className={className}
        >
          {children}
        </SecondaryButton>
      )}
    </>
  );
}
