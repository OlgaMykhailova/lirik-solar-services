import { useTranslations } from "next-intl";
import React from "react";

import MainButton from "../../buttons/MainButton";

interface SubmitButtonProps {
  dirty: boolean;
  isValid: boolean;
  isLoading: boolean;
  children: string;
}

export default function SubmitButton({
  dirty,
  isValid,
  isLoading,
  children,
}: SubmitButtonProps) {
  const t = useTranslations();
  return (
    <MainButton
      type="submit"
      disabled={!(dirty && isValid) || isLoading}
      isLoading={isLoading}
      className="mt-4 tab:mt-6 mr-auto"
    >
      {children}
    </MainButton>
  );
}
