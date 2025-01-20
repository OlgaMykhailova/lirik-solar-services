import { FormikProps } from "formik";
import { useTranslations } from "next-intl";
import React from "react";
import { Dispatch, SetStateAction } from "react";

import RadioButtonInput from "@/components/shared/forms/formComponents/RadioButtonInput";
import FormSubtitle from "@/components/shared/titles/FormSubtitle";
import PopUpTitle from "@/components/shared/titles/PopUpTitle";

import { ValuesApplicationFormType } from "./ApplicationForm";
import NavigationButtons from "./NavigationButtons";

interface Step1Props {
  formProps: FormikProps<ValuesApplicationFormType>;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

export default function Step1({
  formProps,
  currentStep,
  setCurrentStep,
}: Step1Props) {
  const t = useTranslations();
  const { errors, touched } = formProps;

  return (
    <>
      <FormSubtitle>{t("applicationPage.question1.subtitle")}</FormSubtitle>
      <PopUpTitle>{t("applicationPage.question1.title")}</PopUpTitle>
      <div
        role="group"
        aria-labelledby="radio-group"
        className="flex flex-col gap-y-4 tab:gap-y-7"
      >
        <RadioButtonInput
          fieldName="placementEquipment"
          label={t("forms.apartment")}
          value="Квартира"
          required={false}
          placeholder={t("forms.cityPlaceholder")}
          errors={errors}
          touched={touched}
        />
        <RadioButtonInput
          fieldName="placementEquipment"
          label={t("forms.house")}
          value="Будинок"
          required={false}
          placeholder={t("forms.cityPlaceholder")}
          errors={errors}
          touched={touched}
        />
        <RadioButtonInput
          fieldName="placementEquipment"
          label={t("forms.companyOrOffice")}
          value="Підприємство або офіс"
          required={false}
          placeholder={t("forms.cityPlaceholder")}
          errors={errors}
          touched={touched}
        />
        <RadioButtonInput
          fieldName="placementEquipment"
          label={t("forms.yourOption")}
          value="Ваш варіант"
          required={false}
          placeholder={t("forms.cityPlaceholder")}
          errors={errors}
          touched={touched}
        />
      </div>
      <NavigationButtons
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
      />
    </>
  );
}
