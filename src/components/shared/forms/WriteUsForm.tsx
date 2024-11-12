"use client";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import MaskedInput from "react-text-mask";

import { PHONE_NUMBER_MASK } from "@/constants/constants";
import { WriteUsValidation } from "@/schemas/writeUsFormValidation";

import MainButton from "../buttons/MainButton";

interface ValuesWriteUsFormType {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface WriteUsFormProps {
  setIsError: (value: boolean | ((prev: boolean) => boolean)) => void;
  setIsNotificationShawn: (
    value: boolean | ((prev: boolean) => boolean)
  ) => void;
}

export default function WriteUsForm({
  setIsError,
  setIsNotificationShawn,
}: WriteUsFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const locale = useLocale();
  const t = useTranslations("");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = WriteUsValidation();

  const submitForm = async (
    values: ValuesWriteUsFormType,
    { resetForm }: FormikHelpers<ValuesWriteUsFormType>
  ) => {
    try {
      setIsLoading(true);
      const data =
        `<b>Нова заявка</b>\n` +
        `Ім'я та прізвище: ${values.name.trim()}\n` +
        `Email: ${values.email.toLowerCase().trim()}\n` +
        `Телефон: ${values.phone.replace(/[^\d+]/g, "")}\n` +
        `Повідомлення: ${values.message.trim()}\n`;

      await axios({
        method: "post",
        url: "/api/sendDataTelegram",
        data,
        headers: {
          "Content-Type": "application/json",
        },
      });
      resetForm();
    } catch (error) {
      setIsError(true);
      return error;
    } finally {
      setIsLoading(false);
      setIsNotificationShawn(true);
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
        <Form className="flex flex-col gap-y-4 w-full h-full tab:p-12 rounded-[24px] tab:bg-white tab:shadow-base">
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
          <label className={labelStyles}>
            <p>
              {t("forms.email")} <span className="text-inputError">*</span>
            </p>
            <div
              className={`${fieldWrapperStyles} ${
                errors.email && touched.email
                  ? "before:bg-inputError"
                  : "before:bg-transparent group-hover:before:bg-blueLight focus-within:before:bg-blueLight"
              }`}
            >
              <Field
                name="email"
                type="email"
                autoComplete="on"
                placeholder={t("forms.emailPlaceholder")}
                className={`${fieldStyles}  ${
                  errors.email && touched.email
                    ? "border-inputErrorLight"
                    : "border-inputStroke focus:border-blueLight"
                }`}
              ></Field>
            </div>
            <ErrorMessage
              name="email"
              component="p"
              className={errorStyles}
            ></ErrorMessage>
          </label>

          <label className={labelStyles}>
            {t("forms.comment")}
            <div
              className={`h-[92px] ${fieldWrapperStyles} ${
                errors.message && touched.message
                  ? "before:bg-inputError"
                  : "before:bg-transparent group-hover:before:bg-blueLight focus-within:before:bg-blueLight"
              }`}
            >
              <Field
                as="textarea"
                name="message"
                type="text"
                autoComplete="on"
                placeholder={t("forms.commentPlaceholder")}
                className={`min-h-[92px] resize-none ${fieldStyles} ${
                  errors.message && touched.message
                    ? "border-inputErrorLight"
                    : "border-inputStroke focus:border-blueLight"
                }`}
              ></Field>
            </div>
            <ErrorMessage
              name="message"
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
