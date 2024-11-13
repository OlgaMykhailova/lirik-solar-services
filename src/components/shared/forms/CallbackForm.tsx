"use client";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Dispatch, SetStateAction,useState } from "react";
import MaskedInput from "react-text-mask";

import { PHONE_NUMBER_MASK } from "@/constants/constants";
import { CallBackValidation } from "@/schemas/callBackFormValidation";

import MainButton from "../buttons/MainButton";

interface ValuesCallBackFormType {
  name: string;
  phone: string;
}

interface CallBackFormProps {
  setIsError: Dispatch<SetStateAction<boolean>>;
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
}

export default function CallBackForm({
  setIsError,
  setIsNotificationShown,
  setIsPopUpShown,
}: CallBackFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const locale = useLocale();
  const t = useTranslations("");

  const initialValues = {
    name: "",
    phone: "",
  };

  const validationSchema = CallBackValidation();

  const submitForm = async (
    values: ValuesCallBackFormType,
    { resetForm }: FormikHelpers<ValuesCallBackFormType>
  ) => {
    try {
      setIsLoading(true);
      const data =
        `<b>Нова заявка</b>\n` +
        `Ім'я та прізвище: ${values.name.trim()}\n` +
        `Телефон: +380${values.phone.replace(/[^\d+]/g, "")}\n`;

      await axios({
        method: "post",
        url: "/api/sendDataTelegram",
        data,
        headers: {
          "Content-Type": "application/json",
        },
      });
      resetForm();
      setIsPopUpShown(false);
    } catch (error) {
      setIsError(true);
      return error;
    } finally {
      setIsLoading(false);
      setIsNotificationShown(true);
    }
  };

  const labelStyles =
    "relative flex flex-col gap-y-1 w-full text-inputLabel text-xs";
  const fieldStyles =
    "relative w-full h-full px-3 py-[14px] text-black placeholder-inputText border rounded-[12px] outline-none text-sm transition duration-300 ease-out";
  const fieldWrapperStyles =
    "relative group before:content-[''] before:absolute before:top-0 before:left-0 before:rounded-[12px] before:w-full before:h-full before:blur-[3px] before:transition before:duration-300 before:ease-out ";
  const errorStyles =
    "absolute bottom-[-19px] right-0 text-xxs text-inputError";

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={validationSchema}
    >
      {({ errors, touched, dirty, isValid }) => (
        <Form className="flex flex-col gap-y-4 w-full h-full rounded-[24px] bg-white">
          <label className={labelStyles}>
            <p>
              {t("forms.name")} <span className="text-inputError">*</span>
            </p>
            <div
              className={`${fieldWrapperStyles} ${
                errors.name && touched.name
                  ? "before:bg-inputError"
                  : "before:bg-transparent group-hover:before:bg-blueLight focus-within:before:bg-blueLight"
              }`}
            >
              <Field
                name="name"
                type="text"
                autoComplete="on"
                placeholder={t("forms.namePlaceholder")}
                className={`${fieldStyles} ${
                  errors.name && touched.name
                    ? "border-inputErrorLight"
                    : "border-inputStroke focus:border-blueLight "
                }`}
              ></Field>
            </div>
            <ErrorMessage
              name="name"
              component="p"
              className={errorStyles}
            ></ErrorMessage>
          </label>
          <label className={labelStyles}>
            <p>
              {t("forms.phone")} <span className="text-inputError">*</span>
            </p>
            <div
              className={`${fieldWrapperStyles} ${
                errors.phone && touched.phone
                  ? "before:bg-inputError"
                  : "before:bg-transparent group-hover:before:bg-blueLight focus-within:before:bg-blueLight"
              }`}
            >
              <Image
                src="/images/icons/phonePrefix.svg"
                alt="phone prefix"
                width={66}
                height={22}
                className="absolute top-1/2 left-3 z-10 transform -translate-y-1/2"
              />
              <Field
                as={MaskedInput}
                mask={PHONE_NUMBER_MASK}
                name="phone"
                type="text"
                autoComplete="on"
                placeholder={t("forms.phonePlaceholder")}
                className={`pl-[80px] ${fieldStyles}  ${
                  errors.phone && touched.phone
                    ? "border-inputErrorLight"
                    : "border-inputStroke focus:border-blueLight"
                }`}
              ></Field>
            </div>
            <ErrorMessage
              name="phone"
              component="p"
              className={errorStyles}
            ></ErrorMessage>
          </label>
          <div className="text-sm">
            <div className="flex gap-x-2 w-full mb-1.5">
              <span className="text-inputError">*</span>
              <p>{t("forms.requiredFields")}</p>
            </div>
            <p>
              {t("forms.agreement")}
              <Link
                href={`policy`}
                target="_blank"
                locale={locale}
                className="outline-none border-b text-blue border-blue active:text-blueLight active:border-blueLight 
                laptop:hover:text-blueLight laptop:focus-visible:text-blueLight laptop:hover:border-blueLight 
                laptop:focus-visible:border-blueLight transition duration-300 ease-out"
              >
                {t("forms.policy")}
              </Link>
              .
            </p>
          </div>
          <MainButton
            type="submit"
            disabled={!(dirty && isValid) || isLoading}
            isLoading={isLoading}
            className="mt-6 mr-auto"
          >
            {t("buttons.sendMessage")}
          </MainButton>
        </Form>
      )}
    </Formik>
  );
}