"use client";
import { Form, Formik, FormikHelpers } from "formik";
import { Dispatch, SetStateAction, useState } from "react";

import { ContactUsValidation } from "@/schemas/contactUsFormValidation";
import { handleSubmitForm } from "@/utils/handleSubmitForm";

import Progressbar from "./Progressbar";
import Step5 from "./Step5";

export interface ValuesApplicationFormType {
  name: string;
  phone: string;
  region: string;
  city: string;
  message: string;
}

const APPLICATION_NAME = "Форма-опитувальник";

interface ApplicationFormProps {
  setIsError: Dispatch<SetStateAction<boolean>>;
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>;

  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

export default function ApplicationForm({
  setIsError,
  setIsNotificationShown,
  currentStep,
  setCurrentStep,
}: ApplicationFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    name: "",
    phone: "",
    region: "",
    city: "",
    message: "",
  };

  const validationSchema = ContactUsValidation();

  const submitForm = async (
    values: ValuesApplicationFormType,
    formikHelpers: FormikHelpers<ValuesApplicationFormType>
  ) => {
    const data =
      `<b>Заявка "${APPLICATION_NAME}"</b>\n` +
      `Ім'я: ${values.name.trim()}\n` +
      `Телефон: +38${values.phone.replace(/[^\d+]/g, "")}\n` +
      `Область: ${values.region.trim()}\n` +
      `Насeлений пункт: ${values.city.trim()}\n` +
      `Повідомлення: ${values.message.trim()}\n`;

    await handleSubmitForm<ValuesApplicationFormType>(
      formikHelpers,
      setIsLoading,
      setIsError,
      setIsNotificationShown,
      data,
      values,
      APPLICATION_NAME,
      undefined,
      setCurrentStep,
      7
    );
  };

  return (
    <div className="container tab:flex tab:gap-x-10 laptop:gap-x-[76px] laptop:w-[64.9%] max-w-[1920px] pt-12 pb-14 tab:pt-[254px] tab:pb-20 laptop:pt-20 laptop:ml-0 laptop:mr-auto">
      <Progressbar currentStep={currentStep} />
      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
        validationSchema={validationSchema}
      >
        {(props) => (
          <Form className="flex flex-col gap-y-4 w-full h-full">
            <Step5
              formProps={props}
              isLoading={isLoading}
              setCurrentStep={setCurrentStep}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
