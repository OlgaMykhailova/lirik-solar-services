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

interface Step1Props {
  formProps: FormikProps<ValuesApplicationFormType>;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  customValue: CustomValues;
  setCustomValue: Dispatch<SetStateAction<CustomValues>>;
}

export default function Step1({
  formProps,
  currentStep,
  setCurrentStep,
  customValue,
  setCustomValue,
}: Step1Props) {
  const t = useTranslations();
  const { errors, touched, values } = formProps;

  return (
    <>
      <FormSubtitle>{t("applicationPage.question1.subtitle")}</FormSubtitle>
      <PopUpTitle className="tab:min-h-20">
        {t("applicationPage.question1.title")}
      </PopUpTitle>
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
        <RadioButtonTextInput
          fieldName="placementEquipment"
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
      <NavigationButtons
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
      />
    </>
  );
}
