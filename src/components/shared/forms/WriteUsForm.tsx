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
        `Ім'я: ${values.name.trim()}\n` +
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

  const labelStyles = "relative w-full h-12 px-4 py-3 bg-white-bg";
  const textLabelStyles =
    "absolute left-4 transition-[top] duration-300 ease-out-quart bg-white-bg";
  const fieldStyles = "outline-none w-full h-full text-black bg-white-bg";
  const teaxtAreaLabelStyles = "relative w-full h-[116px] p-4 bg-white-bg";
  const textAreaStyles =
    "outline-none w-full h-full resize-none text-black bg-white-bg";
  const errorStyles =
    "absolute bottom-[-16px] right-0 text-2xs text-error-text";

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={validationSchema}
    >
      {({ values, errors, touched, status, setStatus, dirty, isValid }) => (
        <Form className="flex flex-col items-center gap-y-7 h-full laptop:w-[40%] text-base">
          <label
            className={`${labelStyles} ${
              errors.name && touched.name
                ? "border-[1px] border-error-input"
                : ""
            }`}
          >
            <p
              className={`${textLabelStyles} ${
                values.name || status === "name"
                  ? "top-[-8px] px-1.5 text-xs"
                  : "top-[14px] text-base"
              }`}
            >
              {t("WriteUs.name")}
            </p>
            <Field
              name="name"
              type="text"
              autoComplete="on"
              placeholder={
                status === "name" ? t("WriteUs.namePlaceholder") : ""
              }
              onFocus={() => setStatus("name")}
              className={`${fieldStyles} ${
                errors.name && touched.name ? "text-error-input" : ""
              }`}
            ></Field>
            <ErrorMessage
              name="name"
              component="p"
              className={errorStyles}
            ></ErrorMessage>
          </label>
          <label
            className={`${labelStyles} ${
              errors.email && touched.email
                ? "border-[1px] border-error-input"
                : ""
            }`}
          >
            <p
              className={`${textLabelStyles} ${
                values.email || status === "email"
                  ? "top-[-8px] px-1.5 text-xs"
                  : "top-[14px] text-base"
              }`}
            >
              {t("WriteUs.email")}
            </p>
            <Field
              name="email"
              type="email"
              autoComplete="on"
              placeholder={
                status === "email" ? t("WriteUs.emailPlaceholder") : ""
              }
              onFocus={() => setStatus("email")}
              className={`${fieldStyles} ${
                errors.email && touched.email ? "text-error-input" : ""
              }`}
            ></Field>
            <ErrorMessage
              name="email"
              component="p"
              className={errorStyles}
            ></ErrorMessage>
          </label>
          <label
            className={`${labelStyles} ${
              errors.phone && touched.phone
                ? "border-[1px] border-error-input"
                : ""
            }`}
          >
            <p
              className={`${textLabelStyles} ${
                values.phone || status === "phone"
                  ? "top-[-8px] px-1.5 text-xs"
                  : "top-[14px] text-base"
              }`}
            >
              {t("WriteUs.phone")}
            </p>
            <Field
              as={MaskedInput}
              mask={PHONE_NUMBER_MASK}
              name="phone"
              type="text"
              autoComplete="on"
              placeholder={
                status === "phone" ? t("WriteUs.phonePlaceholder") : ""
              }
              onFocus={() => setStatus("phone")}
              className={`${fieldStyles} ${
                errors.phone && touched.phone ? "text-error-input" : ""
              }`}
            ></Field>
            <ErrorMessage
              name="phone"
              component="p"
              className={errorStyles}
            ></ErrorMessage>
          </label>
          <label
            className={`${teaxtAreaLabelStyles} ${
              errors.message && touched.message
                ? "border-[1px] border-error-input"
                : ""
            }`}
          >
            <p
              className={`${textLabelStyles} ${
                values.message || status === "message"
                  ? "top-[-8px] px-1.5 text-xs"
                  : "top-[16px] left-0 text-base"
              }`}
            >
              {t("WriteUs.message")}
            </p>
            <Field
              as="textarea"
              name="message"
              type="text"
              autoComplete="on"
              placeholder={
                status === "message" ? t("WriteUs.messagePlaceholder") : ""
              }
              onFocus={() => setStatus("message")}
              className={`${textAreaStyles} ${
                errors.message && touched.message ? "text-error-input" : ""
              }`}
            ></Field>
            <ErrorMessage
              name="message"
              component="p"
              className={errorStyles}
            ></ErrorMessage>
          </label>
          <div className="text-xs text-white-text ">
            <div className="flex gap-x-2 w-full mb-1.5">
              <span>*</span>
              <p>{t("WriteUs.requiredFields")}</p>
            </div>
            <p>
              {t("WriteUs.agreement")}
              <Link
                href={`policy`}
                locale={locale}
                className="outline-none  border-b-[1px] border-white-text laptop:hover:text-accent laptop:focus-visible:text-accent 
            laptop:hover:border-accent laptop:focus-visible:border-accent transition-[color] duration-[300ms] ease-out-quart"
              >
                {t("WriteUs.policy")}
              </Link>
            </p>
          </div>
          <div className="relative">
            <MainButton
              type="submit"
              disabled={!(dirty && isValid) || isLoading}
            >
              {t("Buttons.send")}
            </MainButton>
            <Image
              src={`/images/icons/loader.svg`}
              width="0"
              height="0"
              alt="loader icon"
              sizes="100%"
              className={`${
                isLoading ? "block" : "hidden"
              } absolute top-3 left-2 w-8 h-8 animate-rotation`}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
