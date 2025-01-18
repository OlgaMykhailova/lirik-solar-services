import { FormikProps } from "formik";
import { useTranslations } from "next-intl";
import MaskedInput from "react-text-mask";

import CustomizedInput from "@/components/shared/forms/formComponents/CustomizedInput";
import SubmitButton from "@/components/shared/forms/formComponents/SubmitButton";
import FormDescription from "@/components/shared/forms/FormDescription";
import FormSubtitle from "@/components/shared/titles/FormSubtitle";
import PopUpTitle from "@/components/shared/titles/PopUpTitle";
import { PHONE_NUMBER_MASK } from "@/constants/constants";

import { ValuesApplicationFormType } from "./ApplicationForm";

interface Step5Props {
  formProps: FormikProps<ValuesApplicationFormType>;
  isLoading: boolean;
}

export default function Step5({ formProps, isLoading }: Step5Props) {
  const t = useTranslations("");
  const { errors, touched, dirty, isValid } = formProps;

  return (
    <>
      <FormSubtitle className="tab:mb-2">
        {t("applicationPage.question5.subtitle")}
      </FormSubtitle>
      <PopUpTitle>{t("applicationPage.question5.title")}</PopUpTitle>
      <CustomizedInput
        fieldName="name"
        label={t("forms.name")}
        required={true}
        placeholder={t("forms.namePlaceholder")}
        errors={errors}
        touched={touched}
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
        fieldClassName="pl-[80px]"
        mask={PHONE_NUMBER_MASK}
      />
      <CustomizedInput
        fieldName="region"
        label={t("forms.region")}
        required={false}
        placeholder={t("forms.cityPlaceholder")}
        errors={errors}
        touched={touched}
      />
      <CustomizedInput
        fieldName="city"
        label={t("forms.city")}
        required={false}
        placeholder={t("forms.cityPlaceholder")}
        errors={errors}
        touched={touched}
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
      <FormDescription title={t("buttons.send")}/>
      <SubmitButton dirty={dirty} isValid={isValid} isLoading={isLoading}>
        {t("buttons.send")}
      </SubmitButton>
    </>
  );
}
