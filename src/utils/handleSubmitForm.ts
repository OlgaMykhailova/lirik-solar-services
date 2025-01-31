import { sendGTMEvent } from "@next/third-parties/google";
import axios from "axios";
import { FormikHelpers } from "formik";
import { Dispatch, SetStateAction } from "react";

import { ValuesCallBackFormType } from "@/components/shared/forms/CallbackForm";
import { ValuesWriteUsFormType } from "@/components/shared/forms/WriteUsForm";

export const handleSubmitForm = async <T>(
  { resetForm }: FormikHelpers<T>,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setIsError: Dispatch<SetStateAction<boolean>>,
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>,
  data: string,
  values: ValuesCallBackFormType | ValuesWriteUsFormType,
  applicationName: string,
  setIsPopUpShown?: Dispatch<SetStateAction<boolean>>,
  setCurrentStep?: Dispatch<SetStateAction<number>>,
  step?: number,
  scrollToTop?: boolean
) => {
  try {
    setIsLoading(true);

    await axios({
      method: "post",
      url: "/api/sendDataTelegram",
      data,
      headers: {
        "Content-Type": "application/json",
      },
    });

    resetForm();

    if (setIsPopUpShown) {
      setIsPopUpShown(false);
    }
    if (setCurrentStep && step) {
      setCurrentStep(step);
    }
    if (scrollToTop) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    sendGTMEvent({ event: applicationName.replaceAll(" ", "_"), ...values });
  } catch (error) {
    setIsError(true);
    return error;
  } finally {
    setIsLoading(false);
    setIsNotificationShown(true);
  }
};
