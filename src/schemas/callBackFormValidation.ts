import { useTranslations } from "next-intl";
import * as yup from "yup";

import { nameRegex, phoneRegex } from "./regex";

export const CallBackValidation = () => {
  const t = useTranslations("forms.errors");

  const callBackFormValidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, t("nameMinMaxSymbols"))
      .max(30, t("nameMinMaxSymbols"))
      .matches(nameRegex, t("nameAllowedSymbols"))
      .required(t("required")),
    phone: yup
      .string()
      .test(
        "starts-with-zero",
        t("startsWithZero"),
        (value) => value?.startsWith("0") || false
      )
      .matches(phoneRegex, t("wrongPhone"))
      .required(t("required")),
  });

  return callBackFormValidationSchema;
};
