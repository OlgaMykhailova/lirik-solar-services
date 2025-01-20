"use client";
import { Form, Formik, FormikHelpers } from "formik";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction, useState } from "react";
import MaskedInput from "react-text-mask";

import { PHONE_NUMBER_MASK } from "@/constants/constants";
import { WriteUsValidation } from "@/schemas/writeUsFormValidation";
import { handleSubmitForm } from "@/utils/handleSubmitForm";

import CustomizedInput from "./formComponents/CustomizedInput";
import SubmitButton from "./formComponents/SubmitButton";
import FormDescription from "./FormDescription";

export interface ValuesWriteUsFormType {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const APPLICATION_NAME = "Безкоштовна консультація";

interface WriteUsFormProps {
  setIsError: Dispatch<SetStateAction<boolean>>;
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
}

export default function WriteUsForm({
  setIsError,
  setIsNotificationShown,
}: WriteUsFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations();

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = WriteUsValidation();

  const submitForm = async (
    values: ValuesWriteUsFormType,
    formikHelpers: FormikHelpers<ValuesWriteUsFormType>
  ) => {
    const data =
      `<b>Заявка "${APPLICATION_NAME}"</b>\n` +
      `Ім'я: ${values.name.trim()}\n` +
      `Email: ${values.email.toLowerCase().trim()}\n` +
      `Телефон: +38${values.phone.replace(/[^\d+]/g, "")}\n` +
      `Повідомлення: ${values.message.trim()}\n`;

    await handleSubmitForm<ValuesWriteUsFormType>(
      formikHelpers,
      setIsLoading,
      setIsError,
      setIsNotificationShown,
      data,
      values,
      APPLICATION_NAME
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={validationSchema}
    >
      {({ errors, touched, dirty, isValid }) => (
        <Form className="flex flex-col gap-y-4 w-full h-full tab:p-12 rounded-[24px] tab:bg-white tab:shadow-base">
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
          <CustomizedInput
            fieldName="email"
            label={t("forms.email")}
            required={false}
            placeholder={t("forms.emailPlaceholder")}
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
          <FormDescription title={t("buttons.sendMessage")} />
          <SubmitButton dirty={dirty} isValid={isValid} isLoading={isLoading}>
            {t("buttons.sendMessage")}
          </SubmitButton>
        </Form>
      )}
    </Formik>
  );
}
