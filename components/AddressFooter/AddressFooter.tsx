import React from "react";
import { ISectionOurLocation } from "../../types/generated/contentful";

type AddressFooterProps = {
  content: ISectionOurLocation;
};

function AddressFooter({ content }: AddressFooterProps) {
  const { title, companyName, city, zipCode, street, streetNumber, nip, regon, email } =
    content.fields;

  return (
    <section
      className="z-20 w-full px-8 py-32 bg-yellow-100 min-h-[24rem] dark:bg-neutral-800 transition xl:py-12"
      aria-label={title}
      id="address"
    >
      <div className="flex flex-col items-center justify-between h-full mx-auto max-w-container gap-12 lg:flex-row">
        <h2 className="text-2xl font-bold tracking-tight text-center text-neutral-900 transition dark:text-white sm:text-2xl lg:text-3xl xl:text-4xl">
          {title}
        </h2>
        <address className="text-lg not-italic leading-relaxed text-center text-neutral-600 transition dark:text-neutral-200 grid gap-2 sm:text-xl md:text-left">
          <ul>
            <li className="mb-2 text-2xl text-neutral-900 dark:text-yellow-400 sm:text-3xl">
              <strong>{companyName}</strong>
            </li>
            <li>
              {city}, {zipCode}
            </li>
            <li>
              {street} {streetNumber}
            </li>
            <li className="mt-2">
              <span className="font-bold">NIP: </span>
              {nip}
            </li>
            <li>
              <span className="font-bold">REGON: </span>
              {regon}
            </li>
            <li className="mt-2">
              <span className="font-bold">E-mail: </span>
              <a
                className="font-bold underline dark:text-neutral-200 text-neutral-800 transition-colors hover:text-yellow-400 focus-visible:text-yellow-400 dark:hover:text-yellow-400 dark:focus-visible:text-yellow-400"
                href={`mailto:${email}`}
              >
                {email}
              </a>
            </li>
          </ul>
        </address>
      </div>
    </section>
  );
}

export default AddressFooter;
