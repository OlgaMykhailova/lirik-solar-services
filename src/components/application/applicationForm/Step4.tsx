import { FormikProps } from "formik";
import { useTranslations } from "next-intl";
import React from "react";
import { Dispatch, SetStateAction } from "react";

import RadioButtonInput from "@/components/shared/forms/formComponents/RadioButtonInput";
import RadioButtonTextInput from "@/components/shared/forms/formComponents/RadioButtonTextInput";
import FormSubtitle from "@/components/shared/titles/FormSubtitle";
import PopUpTitle from "@/components/shared/titles/PopUpTitle";

import { CustomValues, ValuesApplicationFormType } from "./ApplicationForm";
import NavigationButtons from "./NavigationButtons";

interface Step4Props {
  formProps: FormikProps<ValuesApplicationFormType>;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  customValue: CustomValues;
  setCustomValue: Dispatch<SetStateAction<CustomValues>>;
}

export default function Step4({
  formProps,
  setCurrentStep,
  customValue,
  setCustomValue,
}: Step4Props) {
  const t = useTranslations();
  const { errors, touched } = formProps;

  return (
    <>
      <FormSubtitle>{t("applicationPage.question4.subtitle")}</FormSubtitle>
      <PopUpTitle>{t("applicationPage.question4.title")}</PopUpTitle>
      <p className="mb-6 tab:mb-14 laptop:mb-8">
        {t("applicationPage.question4.description")}
      </p>
      <div
        role="group"
        aria-labelledby="radio-group"
        className="flex flex-col gap-y-4 tab:gap-y-7 mb-14 tab:mb-20 laptop:mb-14"
      >
        <RadioButtonInput
          fieldName="purpose"
          label={t("forms.energyIndependence")}
          value="Енергетична незалежність будинку та економія"
          required={false}
          placeholder={t("forms.cityPlaceholder")}
          errors={errors}
          touched={touched}
        />
        <RadioButtonInput
          fieldName="purpose"
          label={t("forms.passiveIncome")}
          value="Пасивний дохід, можливість заробітку"
          required={false}
          placeholder={t("forms.cityPlaceholder")}
          errors={errors}
          touched={touched}
        />
        <RadioButtonTextInput
          fieldName="purpose"
          label={t("forms.yourOption")}
          value="Ваш варіант"
          required={false}
          placeholder={t("forms.cityPlaceholder")}
          errors={errors}
          touched={touched}
          setCustomValue={setCustomValue}
          customValue={customValue}
        />
      </div>
      <NavigationButtons setCurrentStep={setCurrentStep} />
    </>
  );
}
