import {
  ErrorMessage,
  Field,
  FormikErrors,
  FormikTouched,
  useFormikContext,
} from "formik";
import React, { Dispatch, SetStateAction, useState } from "react";

import { CustomValues } from "@/components/application/applicationForm/ApplicationForm";

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
  customValue: CustomValues;
  setCustomValue: Dispatch<SetStateAction<CustomValues>>;
}

const labelStyles =
  "relative cursor-pointer flex items-center gap-x-2 w-full px-3 py-[14px] rounded-[12px] bg-white text-inputText text-xs transition duration-300 ease-out";
const fieldStyles =
  "relative cursor-pointer appearance-none size-5 rounded-full placeholder-inputText outline-none text-sm transition duration-300 ease-out";
const errorStyles = "absolute bottom-[-19px] right-0 text-xxs text-inputError";

export default function RadioButtonTextInput({
  errors,
  touched,
  fieldName,
  label = "",
  value = "",
  required = false,
  placeholder = "",
  fieldClassName = "",
  customValue,
  setCustomValue,
}: CustomizedInputProps) {
  const [customInputVisible, setCustomInputVisible] = useState(false);
  const { setFieldValue, handleBlur } = useFormikContext<Values>();

  const handleCustomInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCustomValue((prev) => ({
      ...prev,
      [fieldName]: event.target.value,
    }));
    setFieldValue(fieldName, event.target.value);
  };

  const handleCustomInputBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!customValue[fieldName]) {
      setCustomInputVisible(false);
    }

    handleBlur(e);
  };

  console.log(!customValue[fieldName]);
  console.log(customInputVisible);

  return (
    <label
      htmlFor={`custom${fieldName}`}
      className={`shadow-radioBlue has-[:checked]:bg-backgroundLight ${labelStyles}`}
    >
      <Field
        name={fieldName}
        type="radio"
        value={customValue[fieldName] || value}
        autoComplete="on"
        placeholder={placeholder}
        className={`${fieldStyles} ${fieldClassName} ${
          errors[fieldName] && touched[fieldName]
            ? "border-inputErrorLight"
            : "shadow-inputStroke border-[6px] border-white checked:border-blueLight bg-white checked:shadow-blueLight"
        }`}
      ></Field>

      <input
        id={`custom${fieldName}`}
        type="text"
        value={customValue[fieldName]}
        onChange={handleCustomInputChange}
        onBlur={handleCustomInputBlur}
        placeholder={
          customInputVisible || customValue[fieldName]
            ? "Введіть своє значення"
            : ""
        }
        className={`w-full px-1 rounded-[12px] bg-transparent outline-none`}
      />

      <p
        onClick={() => setCustomInputVisible(true)}
        className={`${
          customInputVisible || customValue[fieldName] ? "hidden" : "block"
        } absolute left-10 w-full`}
      >
        {label}
      </p>

      <p>{required && <span className="text-inputError"> *</span>}</p>

      <ErrorMessage
        name={fieldName}
        component="p"
        className={errorStyles}
      ></ErrorMessage>
    </label>
  );
}
