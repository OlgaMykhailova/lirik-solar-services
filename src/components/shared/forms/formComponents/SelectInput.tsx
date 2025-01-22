import { ErrorMessage, useFormikContext } from "formik";
import Image from "next/image";
import React, { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface Values {
  [fieldName: string]: string;
}

interface SelectProps {
  fieldName: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  options: Option[];
  labelClassName?: string;
  wrapperClassName?: string;
  fieldClassName?: string;
}

const labelStyles =
  "relative flex flex-col gap-y-1 w-full text-inputLabel text-xs";
const fieldStyles =
  "relative w-full h-full px-3 py-[14px] text-black placeholder-inputText border rounded-[12px] outline-none text-sm transition duration-300 ease-out cursor-pointer";
const fieldWrapperStyles =
  "relative before:content-[''] before:absolute before:top-0 before:left-0 before:rounded-[12px] before:w-full before:h-full before:blur-[3px] before:transition before:duration-300 before:ease-out before:will-change-transform";
const errorStyles = "absolute bottom-[-19px] right-0 text-xxs text-inputError";

export default function CustomizedSelect({
  fieldName,
  label,
  required = false,
  placeholder = "",
  options,
  labelClassName = "",
  wrapperClassName = "",
  fieldClassName = "",
}: SelectProps) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const { setFieldValue, values, errors, touched } = useFormikContext<Values>();

  const toggleDropdown = () => {
    setIsDropDownOpen((prev) => !prev);
  };

  const handleOptionClick = (value: string) => {
    setFieldValue(fieldName, value);
  };

  return (
    <label
      tabIndex={0}
      onClick={toggleDropdown}
      onBlur={() => setIsDropDownOpen(false)}
      className={`${labelStyles} ${labelClassName}`}
    >
      <p>
        {label}
        {required && <span className="text-inputError"> *</span>}
      </p>
      <div
        className={`${fieldWrapperStyles} relative flex items-center bg-white ${wrapperClassName} ${
          errors[fieldName] && touched[fieldName]
            ? "before:bg-inputError"
            : "before:bg-transparent group-hover:before:bg-blueLight focus-within:before:bg-blueLight"
        }`}
      >
        <div
          className={`${fieldStyles} ${fieldClassName} ${
            errors[fieldName] && touched[fieldName]
              ? "border-inputErrorLight"
              : "border-inputStroke focus:border-blueLight"
          } ${values[fieldName] ? "text-black" : "text-inputText"}`}
        >
          {values[fieldName] || placeholder}
          <Image
            src="/images/icons/selectArrow.svg"
            alt="arrow icon"
            width="24"
            height="24"
            className={`absolute right-3 bottom-3 transition duration-300 ease-out ${
              isDropDownOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        <ul
          className={`${
            isDropDownOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          } absolute top-full left-0 w-full bg-white border border-inputStroke rounded-[12px] z-20 mt-0.5 overflow-hidden shadow-select
          transition duration-300 ease-out`}
        >
          {options.map((option) => (
            <li
              key={option.value}
              className="relative group px-3 py-4 cursor-pointer text-sm text-black active:text-blue active:bg-backgroundLight focus-visible:text-blue focus-visible:bg-backgroundLight 
              laptop:hover:text-blue laptop:hover:bg-backgroundLight transition duration-300 ease-out"
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
              <Image
                src="/images/icons/check.svg"
                alt="arrow icon"
                width="24"
                height="24"
                className={`absolute right-3 bottom-3 opacity-0 group-active:opacity-100 group-focus:opacity-100 laptop:group-hover:opacity-100 
                    transition duration-300 ease-out`}
              />
            </li>
          ))}
        </ul>
      </div>
      <ErrorMessage
        name={fieldName}
        component="p"
        className={errorStyles}
      ></ErrorMessage>
    </label>
  );
}
