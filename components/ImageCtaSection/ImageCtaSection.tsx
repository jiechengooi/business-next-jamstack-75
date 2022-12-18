/* eslint-disable react/no-array-index-key */

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import {
  fadeInFromLeft,
  fadeInFromTop,
  wrapperAnimationProps,
} from "../../utils/animations";

type ImageCtaSectionProps = {
  id: string;
  title: string;
  paragraph: string;
  image: StaticImageData;
  alt: string;
};

function ImageCtaSection({ id, title, paragraph, image, alt }: ImageCtaSectionProps) {
  return (
    <section
      className="z-20 w-full min-h-screen bg-yellow-200 dark:bg-neutral-900 transition-colors grid place-items-center"
      title={title}
      id={id}
    >
      <motion.article
        {...wrapperAnimationProps}
        className="w-full px-8 py-24 place-items-center grid grid-cols-1 max-w-container gap-24 xl:grid-cols-2 lg:gap-12"
      >
        <div className="flex flex-col items-center mx-auto max-w-prose gap-6 lg:gap-12 lg:flex-1 xl:mx-0 xl:items-baseline">
          <motion.h2
            variants={fadeInFromLeft}
            className="text-4xl font-bold tracking-tight text-center text-neutral-900 transition-colors dark:text-white sm:text-6xl xl:text-7xl"
          >
            {title}
          </motion.h2>
          <motion.p className="text-sm grid gap-6 sm:gap-7 text-neutral-600 transition-colors dark:text-neutral-200 sm:text-base xl:text-lg">
            {paragraph.split("\n").map((item, index) => (
              //  Using item as a key causes a rerender and makes the translated content disappear
              //  since it's causing all the motion.spans to be in the initial state and not animated.
              <motion.span variants={fadeInFromLeft} key={index}>
                {item}
              </motion.span>
            ))}
          </motion.p>
        </div>
        <motion.div
          variants={fadeInFromTop}
          className="max-w-prose sm:m-16 xl:max-w-none"
        >
          <Image className="rounded" src={image} alt={alt} />
        </motion.div>
      </motion.article>
    </section>
  );
}

export default ImageCtaSection;
