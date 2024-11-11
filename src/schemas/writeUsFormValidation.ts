import { useTranslations } from "next-intl";
import * as yup from "yup";

import { emailRegex, nameRegex, phoneRegex } from "./regex";

export const WriteUsValidation = () => {
  const t = useTranslations("Errors");

  const writeUsFormValidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, t("nameMinMaxSymbols"))
      .max(30, t("nameMinMaxSymbols"))
      .matches(nameRegex, t("nameAllowedSymbols"))
      .required(t("required")),
    email: yup
      .string()
      .matches(emailRegex, t("wrongEmail"))
      .required(t("required")),
    phone: yup.string().matches(phoneRegex, t("wrongPhone")),
    message: yup
      .string()
      .min(3, t("messageMinMaxSymbols"))
      .max(200, t("messageMinMaxSymbols"))
      .required(t("required")),
  });

  return writeUsFormValidationSchema;
};
