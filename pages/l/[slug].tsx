import React from "react";
import { createClient } from "contentful";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as yup from "yup";
import jwt from "jsonwebtoken";
import { ILayout, ISectionSecretLinkForm } from "../../types/generated/contentful.d.tsxxxxx";
import Layout from "../../components/Layout";
import { Input, ErrorLabel, Label, Submit } from "../../components/Form";
import { RequestBody, ResponseData } from "../api/secret-links";

enum ValidationErrors {
  REQUIRED = "REQUIRED",
  WRONG_PASSWORD = "WRONG_PASSWORD",
}

type LinkRedirectPageProps = {
  layout: ILayout;
  secretLinkForm: ISectionSecretLinkForm;
};

function LinkRedirectPage({ layout, secretLinkForm }: LinkRedirectPageProps) {
  const {
    title,
    emptyFieldMessage,
    password,
    passwordPlaceholder,
    submit,
    wrongPasswordMessage,
  } = secretLinkForm.fields;

  const router = useRouter();
  const { slug } = router.query;

  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: yup.object({
      password: yup.string().trim().required(ValidationErrors.REQUIRED),
    }),
    onSubmit: async () => {
      try {
        const res = await fetch("/api/secret-links", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ slug, password: formik.values.password } as RequestBody),
        }).then((t) => t.json());

        const { token } = res as ResponseData;
        const { link } = jwt.decode(token) as { [key: string]: string };

        router.push(link);
      } catch (e) {
        formik.setFieldError("password", ValidationErrors.WRONG_PASSWORD);
      }
    },
  });

  return (
    <Layout content={layout} noindex nofollow>
      <div className="flex flex-col items-center justify-center h-screen px-8 gap-12">
        <h2 className="text-3xl font-bold sm:text-4xl xl:text-5xl">{title}</h2>
        <form
          className="w-full p-8 bg-yellow-100 max-w-prose grid space-y-8 dark:bg-neutral-600 transition-colors"
          onSubmit={formik.handleSubmit}
        >
          <div className="relative">
            <Label htmlFor="password">{password}</Label>
            <Input
              value={formik.values.password}
              changeHandler={formik.handleChange}
              blurHandler={formik.handleBlur}
              id="password"
              name="password"
              type="password"
              placeholder={passwordPlaceholder}
              error={formik.touched.password! && !!formik.errors.password}
            />
            <ErrorLabel>
              {formik.touched.password &&
                formik.errors.password &&
                formik.errors.password === ValidationErrors.REQUIRED &&
                emptyFieldMessage}
              {formik.touched.password &&
                formik.errors.password &&
                formik.errors.password === ValidationErrors.WRONG_PASSWORD &&
                wrongPasswordMessage}
            </ErrorLabel>
          </div>
          <Submit>{submit}</Submit>
        </form>
      </div>
    </Layout>
  );
}

async function getServerSideProps({ locale }: { locale: string }) {
  const space = process.env.CONTENTFUL_SPACE_ID!;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;

  const client = createClient({ space, accessToken });

  return {
    props: {
      layout: await client
        .getEntries({ content_type: "layout", locale })
        .then((res) => res.items[0]),
      secretLinkForm: await client
        .getEntries({ content_type: "sectionSecretLinkForm", locale })
        .then((res) => res.items[0]),
    },
  };
}

export { getServerSideProps };

export default LinkRedirectPage;
