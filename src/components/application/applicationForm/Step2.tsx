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

interface Step2Props {
  formProps: FormikProps<ValuesApplicationFormType>;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  customValue: CustomValues;
  setCustomValue: Dispatch<SetStateAction<CustomValues>>;
}

export default function Step2({
  formProps,
  setCurrentStep,
  customValue,
  setCustomValue,
}: Step2Props) {
  const t = useTranslations();
  const { errors, touched } = formProps;

  return (
    <>
      <FormSubtitle>{t("applicationPage.question2.subtitle")}</FormSubtitle>
      <PopUpTitle>{t("applicationPage.question2.title")}</PopUpTitle>
      <p className="mb-6 tab:mb-14 laptop:mb-8">
        {t("applicationPage.question2.description")}
      </p>
      <div
        role="group"
        aria-labelledby="radio-group"
        className="flex flex-col gap-y-4 tab:gap-y-7 mb-14 tab:mb-20 laptop:mb-14"
      >
        <RadioButtonInput
          fieldName="placementPanels"
          label={t("forms.onTheRoof")}
          value="На даху"
          required={false}
          placeholder={t("forms.cityPlaceholder")}
          errors={errors}
          touched={touched}
        />
        <RadioButtonInput
          fieldName="placementPanels"
          label={t("forms.onTheGround")}
          value="На землі"
          required={false}
          placeholder={t("forms.cityPlaceholder")}
          errors={errors}
          touched={touched}
        />
        <RadioButtonInput
          fieldName="placementPanels"
          label={t("forms.dontPlanToInstallPanels")}
          value="Не планую встановлювати"
          required={false}
          placeholder={t("forms.cityPlaceholder")}
          errors={errors}
          touched={touched}
        />
        <RadioButtonTextInput
          fieldName="placementPanels"
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
