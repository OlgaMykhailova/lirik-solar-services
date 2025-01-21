import { useTranslations } from "next-intl";
import * as yup from "yup";

import { nameRegex, phoneRegex } from "./regex";

export const ApplicationValidation = () => {
  const t = useTranslations("forms.errors");

  const applicationFormValidationSchema = yup.object().shape({
    placementEquipment: yup.string().required(t("required")),
    placementPanels: yup.string().required(t("required")),
    autonomy: yup.string().required(t("required")),
    purpose: yup.string().required(t("required")),
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
    region: yup
      .string()
      .min(2, t("cityMinMaxSymbols"))
      .max(50, t("cityMinMaxSymbols"))
      .matches(nameRegex, t("nameAllowedSymbols")),
    city: yup
      .string()
      .min(2, t("cityMinMaxSymbols"))
      .max(50, t("cityMinMaxSymbols"))
      .matches(nameRegex, t("nameAllowedSymbols")),
    message: yup.string().max(200, t("messageMinMaxSymbols")),
  });

  return applicationFormValidationSchema;
};
