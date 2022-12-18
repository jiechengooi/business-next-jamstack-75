import React from "react";
import { ISectionContact } from "../../types/generated/contentful";
import Form from "../Form";

type ContactProps = {
  content: ISectionContact;
};

function Contact({ content }: ContactProps) {
  const { title } = content.fields;

  return (
    <section
      className="z-20 w-full min-h-screen bg-yellow-50 dark:bg-neutral-700 transition-colors"
      id="contact"
    >
      <div className="w-full px-8 py-24 mx-auto max-w-container grid gap-12 place-items-center">
        <h2 className="text-4xl font-bold tracking-tight text-center text-neutral-900 dark:text-white transition-colors sm:text-6xl xl:text-7xl">
          {title}
        </h2>
        <Form content={content} />
      </div>
    </section>
  );
}

export default Contact;
