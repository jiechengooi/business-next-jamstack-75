import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Label from "./Label";
import Input from "./Input";
import ErrorLabel from "./ErrorLabel";
import TextArea from "./TextArea";
import Submit from "./Submit";
import { ISectionContact } from "../../types/generated/contentful";

enum ValidationErrors {
  REQUIRED = "REQUIRED",
  PHONE_NUMBER = "PHONE_NUMBER",
  EMAIL = "EMAIL",
}

type FormProps = {
  content: ISectionContact;
};

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

function Form({ content }: FormProps) {
  const {
    formActionLink,
    fullName,
    fullNamePlaceholder,
    phoneNumber,
    phoneNumberPlaceholder,
    email,
    emailPlaceholder,
    message,
    messagePlaceholder,
    submit,
    emptyFieldMessage,
    invalidEmailMessage,
    invalidPhoneNumberMessage,
    emailSubject,
    thankYouPageUrl,
  } = content.fields;

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      message: "",
    },
    validationSchema: yup.object({
      fullName: yup.string().trim().max(60).required(ValidationErrors.REQUIRED),
      phoneNumber: yup
        .string()
        .trim()
        .matches(phoneRegExp, ValidationErrors.PHONE_NUMBER),
      email: yup
        .string()
        .trim()
        .max(40)
        .required(ValidationErrors.REQUIRED)
        .email(ValidationErrors.EMAIL),
      message: yup.string().trim().required(ValidationErrors.REQUIRED),
    }),
    onSubmit: () => {},
  });

  return (
    <form
      className="w-full p-8 bg-yellow-100 max-w-prose grid space-y-8 dark:bg-neutral-600 transition-colors"
      action={formActionLink}
      method="POST"
      onSubmit={(event) => {
        if (
          !formik.isValid ||
          formik.values.fullName === "" ||
          formik.values.email === "" ||
          formik.values.message === ""
        ) {
          event.preventDefault();
        }
      }}
    >
      <div className="relative">
        <Label htmlFor="fullName">{fullName}</Label>
        <Input
          value={formik.values.fullName}
          changeHandler={formik.handleChange}
          blurHandler={formik.handleBlur}
          id="fullName"
          name="fullName"
          type="text"
          placeholder={fullNamePlaceholder}
          error={formik.touched.fullName! && !!formik.errors.fullName}
        />
        <ErrorLabel>
          {formik.touched.fullName &&
            formik.errors.email === ValidationErrors.REQUIRED &&
            emptyFieldMessage}
        </ErrorLabel>
      </div>
      <div className="grid sm:grid-cols-2 gap-8 sm:gap-4">
        <div className="relative">
          <Label htmlFor="email">{email}</Label>
          <Input
            value={formik.values.email}
            changeHandler={formik.handleChange}
            blurHandler={formik.handleBlur}
            id="email"
            name="email"
            type="email"
            placeholder={emailPlaceholder}
            error={formik.touched.email! && !!formik.errors.email}
          />
          <ErrorLabel>
            {formik.touched.email &&
              ((formik.errors.email === ValidationErrors.EMAIL && invalidEmailMessage) ||
                (formik.errors.email === ValidationErrors.REQUIRED && emptyFieldMessage))}
          </ErrorLabel>
        </div>
        <div className="relative">
          <Label htmlFor="phoneNumber">{phoneNumber}</Label>
          <Input
            value={formik.values.phoneNumber}
            changeHandler={formik.handleChange}
            blurHandler={formik.handleBlur}
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            placeholder={phoneNumberPlaceholder}
            error={false}
          />
          <ErrorLabel>
            {formik.touched.phoneNumber &&
              formik.errors.phoneNumber === ValidationErrors.PHONE_NUMBER &&
              invalidPhoneNumberMessage}
          </ErrorLabel>
        </div>
      </div>
      <div className="relative">
        <Label htmlFor="message">{message}</Label>
        <TextArea
          value={formik.values.message}
          changeHandler={formik.handleChange}
          blurHandler={formik.handleBlur}
          id="message"
          name="message"
          placeholder={messagePlaceholder}
          error={formik.touched.message! && !!formik.errors.message}
        />
        <ErrorLabel>
          {formik.touched.message && formik.errors.message && emptyFieldMessage}
        </ErrorLabel>
      </div>
      <div className="hidden">
        <input type="hidden" name="_subject" value={emailSubject} />
        <input type="hidden" name="_next" value={thankYouPageUrl} />
      </div>
      <div className="pt-8">
        <Submit>{submit}</Submit>
      </div>
    </form>
  );
}

export default Form;
