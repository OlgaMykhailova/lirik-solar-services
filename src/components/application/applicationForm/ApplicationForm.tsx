"use client";
import { Form, Formik, FormikHelpers } from "formik";
import { Dispatch, SetStateAction, useState } from "react";

import { ApplicationValidation } from "@/schemas/applicationFormValidation";
import { handleSubmitForm } from "@/utils/handleSubmitForm";

import Progressbar from "./Progressbar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

export interface ValuesApplicationFormType {
  placementEquipment: string;
  placementPanels: string;
  autonomy: string;
  purpose: string;
  name: string;
  phone: string;
  region: string;
  city: string;
  message: string;
}

interface ApplicationFormProps {
  setIsError: Dispatch<SetStateAction<boolean>>;
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

export type CustomValues = Record<string, string>;

const APPLICATION_NAME = "Форма-опитувальник";

const SECTION_ID = "application-page-form";

export default function ApplicationForm({
  setIsError,
  setIsNotificationShown,
  currentStep,
  setCurrentStep,
}: ApplicationFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const [customValue, setCustomValue] = useState<CustomValues>({
    placementEquipment: "",
    placementPanels: "",
    autonomy: "",
    purpose: "",
  });

  const initialValues = {
    placementEquipment: "",
    placementPanels: "",
    autonomy: "",
    purpose: "",
    name: "",
    phone: "",
    region: "",
    city: "",
    message: "",
  };

  const validationSchema = ApplicationValidation();

  const submitForm = async (
    values: ValuesApplicationFormType,
    formikHelpers: FormikHelpers<ValuesApplicationFormType>
  ) => {
    const data =
      `<b>Заявка "${APPLICATION_NAME}"</b>\n` +
      `Де планується встановити обладнання: <b>${values.placementEquipment.trim()}</b>\n` +
      `Де ви плануєте встановити сонячні панелі: <b>${values.placementPanels.trim()}</b>\n` +
      `Яка бажана орієнтовна робота станції на акумуляторах, без мережі: <b>${values.autonomy.trim()}</b>\n` +
      `Яке призначення станції: <b>${values.purpose.trim()}</b>\n` +
      `Ім'я: <b>${values.name.trim()}</b>\n` +
      `Телефон: <b>+38${values.phone.replace(/[^\d+]/g, "")}</b>\n` +
      `Область: <b>${values.region.trim()}</b>\n` +
      `Насeлений пункт: <b>${values.city.trim()}</b>\n` +
      `Повідомлення: <b>${values.message.trim()}</b>\n`;

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
    <div
      id={SECTION_ID}
      className="relative flex-1 container flex flex-col tab:flex-row tab:gap-x-10 laptop:gap-x-[76px] laptop:w-[71.6%] max-w-[1920px] pt-12 pb-20 
      tab:pt-[254px] tab:pb-20 laptop:pt-20 tab:pl-[100px] laptop:pl-[140px] laptop:ml-0 laptop:mr-auto"
    >
      <Progressbar currentStep={currentStep} />
      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
        validationSchema={validationSchema}
      >
        {(props) => (
          <Form className="flex-1 flex flex-col gap-y-4 tab:gap-y-6 w-full laptop:w-[95.11%] max-w-[700px]">
            {currentStep === 2 ? (
              <Step1
                formProps={props}
                setCurrentStep={setCurrentStep}
                setCustomValue={setCustomValue}
                customValue={customValue}
              />
            ) : currentStep === 3 ? (
              <Step2
                formProps={props}
                setCurrentStep={setCurrentStep}
                setCustomValue={setCustomValue}
                customValue={customValue}
              />
            ) : currentStep === 4 ? (
              <Step3
                formProps={props}
                setCurrentStep={setCurrentStep}
                setCustomValue={setCustomValue}
                customValue={customValue}
              />
            ) : currentStep === 5 ? (
              <Step4
                formProps={props}
                setCurrentStep={setCurrentStep}
                setCustomValue={setCustomValue}
                customValue={customValue}
              />
            ) : (
              <Step5
                formProps={props}
                isLoading={isLoading}
                setCurrentStep={setCurrentStep}
              />
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
