import { FormikProps } from "formik";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";
import MaskedInput from "react-text-mask";

import SecondaryButton from "@/components/shared/buttons/SecondaryButton";
import CustomizedInput from "@/components/shared/forms/formComponents/CustomizedInput";
import SubmitButton from "@/components/shared/forms/formComponents/SubmitButton";
import FormDescription from "@/components/shared/forms/FormDescription";
import FormSubtitle from "@/components/shared/titles/FormSubtitle";
import PopUpTitle from "@/components/shared/titles/PopUpTitle";
import { PHONE_NUMBER_MASK } from "@/constants/constants";

import { ValuesApplicationFormType } from "./ApplicationForm";
import SelectInput from "@/components/shared/forms/formComponents/SelectInput";

interface Step5Props {
  formProps: FormikProps<ValuesApplicationFormType>;
  isLoading: boolean;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

export default function Step5({
  formProps,
  isLoading,
  setCurrentStep,
}: Step5Props) {
  const t = useTranslations("");
  const { errors, touched, dirty, isValid } = formProps;
  const selectOptions = [
    { value: "Київська", label: "Київська" },
    { value: "Інша", label: "Інша" },
  ];

  return (
    <>
      <FormSubtitle>{t("applicationPage.question5.subtitle")}</FormSubtitle>
      <PopUpTitle className="tab:min-h-20">
        {t("applicationPage.question5.title")}
      </PopUpTitle>
      <div className="flex flex-col tab:flex-row tab:flex-wrap justify-between gap-y-4">
        <CustomizedInput
          fieldName="name"
          label={t("forms.name")}
          required={true}
          placeholder={t("forms.namePlaceholder")}
          errors={errors}
          touched={touched}
          labelClassName="tab:w-[48.7%]"
        />
        <CustomizedInput
          fieldName="phone"
          label={t("forms.phone")}
          required={true}
          placeholder={t("forms.phonePlaceholder")}
          errors={errors}
          touched={touched}
          as={MaskedInput}
          image="/images/icons/phonePrefix.svg"
          fieldClassName="pl-[70px]"
          mask={PHONE_NUMBER_MASK}
          labelClassName="tab:w-[48.7%]"
        />
        <SelectInput
          fieldName="region"
          label={t("forms.region")}
          options={selectOptions}
          required={false}
          placeholder={t("forms.regionPlaceholder")}
          errors={errors}
          touched={touched}
          labelClassName="tab:w-[48.7%]"
        />

        <CustomizedInput
          fieldName="city"
          label={t("forms.city")}
          required={false}
          placeholder={t("forms.cityPlaceholder")}
          errors={errors}
          touched={touched}
          labelClassName="tab:w-[48.7%]"
        />
        <CustomizedInput
          fieldName="message"
          label={t("forms.comment")}
          required={false}
          placeholder={t("forms.commentPlaceholder")}
          errors={errors}
          touched={touched}
          as="textarea"
          wrapperClassName="h-[92px]"
          fieldClassName="min-h-[92px] resize-none"
        />
      </div>
      <FormDescription title={t("buttons.send")} />
      <div className="flex gap-x-4 mt-14 mx-auto tab:mx-0 tab:mr-auto">
        <SecondaryButton
          onClick={() => setCurrentStep((prev) => prev - 1)}
          variant="ghost"
          className="w-[156px]"
        >
          {t("buttons.back")}
        </SecondaryButton>
        <SubmitButton
          dirty={dirty}
          isValid={isValid}
          isLoading={isLoading}
          variant="secondary"
          className="w-[156px]"
        >
          {t("buttons.send")}
        </SubmitButton>
      </div>
    </>
  );
}
