import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Cta from "../Cta";
import { fadeInFromLeft, wrapperAnimationProps } from "../../utils/animations";

import imageHero from "../../public/images/education.jpeg";
import { ISectionHero } from "../../types/generated/contentful.d.tsxxxxx";

type HeroProps = {
  content: ISectionHero;
};

function Hero({ content }: HeroProps) {
  const { title, paragraph, ctaContact, imageAlternativeText } = content.fields;

  const [firstTitleWord, secondTitleWord] = title.split(" ");

  return (
    <>
      <section
        className="fixed z-10 flex flex-col h-screen pt-12 bg-yellow-100 dark:bg-neutral-800 transition xl:w-full xl:pt-0 xl:flex-row xl:items-center"
        aria-label="Hero"
      >
        <div className="w-full px-8 py-24 max-w-container md:py-32 xl:py-0 xl:mx-auto">
          <motion.div
            {...wrapperAnimationProps}
            className="flex flex-col items-center mx-auto max-w-prose gap-6 lg:gap-12 xl:mx-0 xl:items-baseline"
          >
            <motion.h2
              variants={fadeInFromLeft}
              className="text-4xl font-bold tracking-tight text-center text-neutral-900 transition-colors dark:text-white sm:text-6xl lg:text-7xl xl:text-8xl xl:text-left"
            >
              {firstTitleWord}
              <span className="text-yellow-900 dark:text-yellow-400 transition-colors">
                {" "}
                {secondTitleWord}
              </span>
            </motion.h2>
            <motion.p
              variants={fadeInFromLeft}
              className="text-center text-neutral-600 transition-colors dark:text-neutral-200 sm:text-xl xl:text-left"
            >
              {paragraph}
            </motion.p>
            <Cta variants={fadeInFromLeft} text={ctaContact} destination="#contact" />
          </motion.div>
        </div>
        <div className="xl:trapezoid dark:brightness-75 transition xl:left-1/2 xl:inset-y-0 xl:absolute">
          <Image
            src={imageHero}
            alt={imageAlternativeText}
            className="object-cover object-center h-full"
            priority
          />
        </div>
      </section>
      <div className="mt-[calc(100vh-2rem)]" aria-hidden />
    </>
  );
}

export default Hero;
