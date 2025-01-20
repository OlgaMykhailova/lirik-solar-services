"use client";
import { Form, Formik, FormikHelpers } from "formik";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction, useState } from "react";
import MaskedInput from "react-text-mask";

import { PHONE_NUMBER_MASK } from "@/constants/constants";
import { CallBackValidation } from "@/schemas/callBackFormValidation";
import { handleSubmitForm } from "@/utils/handleSubmitForm";

import CustomizedInput from "./formComponents/CustomizedInput";
import SubmitButton from "./formComponents/SubmitButton";
import FormDescription from "./FormDescription";

export interface ValuesCallBackFormType {
  name: string;
  phone: string;
}

interface CallBackFormProps {
  setIsError: Dispatch<SetStateAction<boolean>>;
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
  applicationName: string;
}

export default function CallBackForm({
  setIsError,
  setIsNotificationShown,
  setIsPopUpShown,
  applicationName,
}: CallBackFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("");

  const initialValues = {
    name: "",
    phone: "",
  };

  const validationSchema = CallBackValidation();

  const submitForm = async (
    values: ValuesCallBackFormType,
    formikHelpers: FormikHelpers<ValuesCallBackFormType>
  ) => {
    const data =
      `<b>Заявка "${applicationName}"</b>\n` +
      `Ім'я: ${values.name.trim()}\n` +
      `Телефон: +38${values.phone.replace(/[^\d+]/g, "")}\n`;

    await handleSubmitForm<ValuesCallBackFormType>(
      formikHelpers,
      setIsLoading,
      setIsError,
      setIsNotificationShown,
      data,
      values,
      applicationName,
      setIsPopUpShown
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={validationSchema}
    >
      {({ errors, touched, dirty, isValid }) => (
        <Form className="flex flex-col gap-y-4 w-full h-full rounded-[24px]">
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
            fieldClassName="pl-[70px]"
            mask={PHONE_NUMBER_MASK}
          />
          <FormDescription title={t("buttons.sendMessage")} />
          <SubmitButton dirty={dirty} isValid={isValid} isLoading={isLoading}>
            {t("buttons.sendMessage")}
          </SubmitButton>
        </Form>
      )}
    </Formik>
  );
}
