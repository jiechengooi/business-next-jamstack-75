import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ISectionNotFound, ISectionThankYou } from "../../types/generated/contentful.d.ts";

type RedirectSectionProps = {
  content: ISectionNotFound | ISectionThankYou;
  illustration: StaticImageData;
};

function RedirectSection({ content, illustration }: RedirectSectionProps) {
  const { title, paragraph, redirectLink } = content.fields;

  return (
    <section aria-label={title}>
      <div className="flex flex-col items-center justify-center h-screen px-8 text-center gap-4">
        <h2 className="text-3xl font-bold sm:text-4xl xl:text-5xl">{title}</h2>
        <p className="text-lg dark:text-neutral-200 text-neutral-600 transition sm:text-xl">
          {paragraph}
        </p>
        <Link legacyBehavior href="/" passHref>
          <a className="underline dark:text-neutral-200 text-neutral-800 transition-colors hover:text-yellow-400 focus-visible:text-yellow-400 dark:hover:text-yellow-400 dark:focus-visible:text-yellow-400">
            {redirectLink}
          </a>
        </Link>
        <Image src={illustration} alt="" />
      </div>
    </section>
  );
}

export default RedirectSection;
