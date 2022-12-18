import React from "react";
import { motion } from "framer-motion";
import OurValuesCard from "./OurValuesCard";
import { ISectionOurValues } from "../../types/generated/contentful.d.ts";
import { fadeInFromTop, wrapperAnimationProps } from "../../utils/animations";

import imagePeople from "../../public/images/training.jpg";
import imageGrowth from "../../public/images/education.jpeg";
import imageQuality from "../../public/images/audit.jpg";

import iconPeople from "../../public/images/training.svg";
import iconGrowth from "../../public/images/education.svg";
import iconQuality from "../../public/images/audit.svg";

type OurValuesProps = {
  content: ISectionOurValues;
};

function OurValues({ content }: OurValuesProps) {
  const {
    title,
    peopleTitle,
    peopleParagraph,
    peopleImageAlternativeText,
    growthTitle,
    growthParagraph,
    growthImageAlternativeText,
    qualityTitle,
    qualityParagraph,
    qualityImageAlternativeText,
  } = content.fields;

  return (
    <motion.section
      {...wrapperAnimationProps}
      className="z-20 w-full min-h-screen bg-yellow-100 dark:bg-neutral-800 transition-colors"
      aria-label={title}
      id="values"
    >
      <div className="w-full px-8 py-24 mx-auto max-w-container grid gap-11 place-items-center xl:gap-24">
        <motion.h2
          variants={fadeInFromTop}
          className="text-4xl font-bold tracking-tight text-center text-neutral-900 transition-colors dark:text-white sm:text-6xl xl:text-7xl"
        >
          {title}
        </motion.h2>
        <article className="grid grid-cols-1 gap-10 max-w-[20rem] place-items-center lg:grid-cols-3 lg:gap-16 lg:max-w-none">
          <OurValuesCard
            variants={fadeInFromTop}
            title={peopleTitle}
            paragraph={peopleParagraph}
            alt={peopleImageAlternativeText}
            image={imagePeople}
            icon={iconPeople}
          />
          <OurValuesCard
            variants={fadeInFromTop}
            title={growthTitle}
            paragraph={growthParagraph}
            alt={growthImageAlternativeText}
            image={imageGrowth}
            icon={iconGrowth}
          />
          <OurValuesCard
            variants={fadeInFromTop}
            title={qualityTitle}
            paragraph={qualityParagraph}
            alt={qualityImageAlternativeText}
            image={imageQuality}
            icon={iconQuality}
          />
        </article>
      </div>
    </motion.section>
  );
}

export default OurValues;
