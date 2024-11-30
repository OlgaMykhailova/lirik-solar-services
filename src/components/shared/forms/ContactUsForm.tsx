"use client";
import { Form, Formik, FormikHelpers } from "formik";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction, useState } from "react";
import MaskedInput from "react-text-mask";

import { PHONE_NUMBER_MASK } from "@/constants/constants";
import { ContactUsValidation } from "@/schemas/contactUsFormValidation";
import { handleSubmitForm } from "@/utils/handleSubmitForm";

import CustomizedInput from "./formComponents/CustomizedInput";
import RadioButtonInput from "./formComponents/RadioButtonInput";
import SubmitButton from "./formComponents/SubmitButton";
import FormDescription from "./FormDescription";

export interface ValuesContactUsFormType {
  name: string;
  city: string;
  phone: string;
  message: string;
}

const APPLICATION_NAME = "Безкоштовна консультація";

interface ContactUsFormProps {
  setIsError: Dispatch<SetStateAction<boolean>>;
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
}

export default function ContactUsForm({
  setIsError,
  setIsNotificationShown,
}: ContactUsFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations("");

  const initialValues = {
    name: "",
    city: "",
    phone: "",
    message: "",
  };

  const validationSchema = ContactUsValidation();

  const submitForm = async (
    values: ValuesContactUsFormType,
    formikHelpers: FormikHelpers<ValuesContactUsFormType>
  ) => {
    const data =
      `<b>Заявка "${APPLICATION_NAME}"</b>\n` +
      `Ім'я: ${values.name.trim()}\n` +
      `Наслений пункт: ${values.city.toLowerCase().trim()}\n` +
      `Телефон: +380${values.phone.replace(/[^\d+]/g, "")}\n` +
      `Повідомлення: ${values.message.trim()}\n`;

    await handleSubmitForm<ValuesContactUsFormType>(
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
            fieldClassName="pl-[80px]"
            mask={PHONE_NUMBER_MASK}
          />
          <CustomizedInput
            fieldName="city"
            label={t("forms.city")}
            required={false}
            placeholder={t("forms.cityPlaceholder")}
            errors={errors}
            touched={touched}
          />
          <div id="my-radio-group" className="text-inputLabel text-sm">
            Де ви плануєте ставити обладнання?
          </div>
          <div aria-labelledby="my-radio-group" className="flex gap-x-4">
            <RadioButtonInput
              fieldName="equipment"
              label="Квартира"
              value="Квартира"
              required={false}
              placeholder={t("forms.cityPlaceholder")}
              errors={errors}
              touched={touched}
            />
            <RadioButtonInput
              fieldName="equipment"
              label="Будинок"
              value="Будинок"
              required={false}
              placeholder={t("forms.cityPlaceholder")}
              errors={errors}
              touched={touched}
            />
            <RadioButtonInput
              fieldName="equipment"
              label="Підприємство"
              value="Підприємство"
              required={false}
              placeholder={t("forms.cityPlaceholder")}
              errors={errors}
              touched={touched}
            />
          </div>
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
          <FormDescription />
          <SubmitButton dirty={dirty} isValid={isValid} isLoading={isLoading} />
        </Form>
      )}
    </Formik>
  );
}
