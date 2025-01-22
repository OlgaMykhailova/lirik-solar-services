import { ErrorMessage, Field } from "formik";
import React from "react";

interface SelectInputProps {
  fieldName: string;
  label: string;
  required: boolean;
  placeholder?: string;
  options: { value: string; label: string }[];
  errors: { [fieldName: string]: string };
  touched: { [fieldName: string]: boolean };
  labelClassName?: string;
  wrapperClassName?: string;
  fieldClassName?: string;
}

const labelStyles =
  "relative flex flex-col gap-y-1 w-full text-inputLabel text-xs";
const fieldStyles =
  "relative w-full h-full px-3 py-[14px] text-black placeholder-inputText border rounded-[12px] outline-none text-sm transition duration-300 ease-out";
const fieldWrapperStyles =
  "relative group before:content-[''] before:absolute before:top-0 before:left-0 before:rounded-[12px] before:w-full before:h-full before:blur-[3px] before:transition before:duration-300 before:ease-out before:will-change-transform";
const errorStyles = "absolute bottom-[-19px] right-0 text-xxs text-inputError";

export default function SelectInput({
  fieldName,
  label,
  required = false,
  placeholder = "",
  options,
  errors,
  touched,
  labelClassName = "",
  wrapperClassName = "",
  fieldClassName = "",
}: SelectInputProps) {
  return (
    <label className={`${labelStyles} ${labelClassName}`}>
      <p>
        {label}
        {required && <span className="text-inputError"> *</span>}
      </p>
      <div
        className={`${fieldWrapperStyles} ${wrapperClassName} ${
          errors[fieldName] && touched[fieldName]
            ? "before:bg-inputError"
            : "before:bg-transparent group-hover:before:bg-blueLight focus-within:before:bg-blueLight"
        }`}
      >
        <Field
          as="select"
          name={fieldName}
          className={`${fieldStyles} ${fieldClassName} ${
            errors[fieldName] && touched[fieldName]
              ? "border-inputErrorLight"
              : "border-inputStroke focus:border-blueLight"
          }`}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
      </div>
      <ErrorMessage
        name={fieldName}
        component="p"
        className={errorStyles}
      ></ErrorMessage>
    </label>
  );
}
