import { ErrorMessage, Field, FormikErrors, FormikTouched } from "formik";
import React from "react";

interface Values {
  [fieldName: string]: string;
}

interface CustomizedInputProps {
  fieldName: string;
  label: string;
  value: string;
  required: boolean;
  placeholder: string;
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
  fieldClassName?: string;
}

const labelStyles =
  "relative cursor-pointer flex items-center gap-x-2 w-full px-3 py-[14px] rounded-[12px] bg-white text-inputText text-xs transition duration-300 ease-out";
const fieldStyles =
  "relative cursor-pointer appearance-none size-5 rounded-full placeholder-inputText outline-none text-sm transition duration-300 ease-out";
const errorStyles = "absolute bottom-[-19px] right-0 text-xxs text-inputError";

export default function RadioButtonInput({
  errors,
  touched,
  fieldName,
  label = "",
  value = "",
  required = false,
  placeholder = "",
  fieldClassName = "",
}: CustomizedInputProps) {
  return (
    <label
      className={`shadow-radioBlue has-[:checked]:bg-backgroundLight ${labelStyles}`}
    >
      <Field
        name={fieldName}
        type="radio"
        value={value}
        autoComplete="on"
        placeholder={placeholder}
        className={`${fieldStyles} ${fieldClassName} ${
          errors[fieldName] && touched[fieldName]
            ? "border-inputErrorLight"
            : "shadow-inputStroke border-[6px] border-white checked:border-blueLight bg-white checked:shadow-blueLight"
        }`}
      ></Field>
      <p>
        {label}
        {required && <span className="text-inputError"> *</span>}
      </p>

      <ErrorMessage
        name={fieldName}
        component="p"
        className={errorStyles}
      ></ErrorMessage>
    </label>
  );
}
