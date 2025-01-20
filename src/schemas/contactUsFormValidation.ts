import { useTranslations } from "next-intl";
import * as yup from "yup";

import { nameRegex, phoneRegex } from "./regex";

export const ContactUsValidation = () => {
  const t = useTranslations("forms.errors");

  const contactUsFormValidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, t("nameMinMaxSymbols"))
      .max(30, t("nameMinMaxSymbols"))
      .matches(nameRegex, t("nameAllowedSymbols"))
      .required(t("required")),
    city: yup
      .string()
      .min(2, t("cityMinMaxSymbols"))
      .max(30, t("cityMinMaxSymbols"))
      .matches(nameRegex, t("nameAllowedSymbols")),
    phone: yup
      .string()
      .test(
        "starts-with-zero",
        t("startsWithZero"),
        (value) => value?.startsWith("0") || false
      )
      .matches(phoneRegex, t("wrongPhone"))
      .required(t("required")),
    message: yup.string().max(200, t("messageMinMaxSymbols")),
  });

  return contactUsFormValidationSchema;
};
