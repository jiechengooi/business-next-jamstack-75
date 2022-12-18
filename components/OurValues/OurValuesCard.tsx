import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import type { Variants } from "framer-motion";

type OurValuesCardProps = {
  icon: StaticImageData;
  image: StaticImageData;
  alt: string;
  title: string;
  paragraph: string;
  variants?: Variants;
};

function OurValuesCard({
  icon,
  image,
  alt,
  title,
  paragraph,
  variants = {},
}: OurValuesCardProps) {
  return (
    <motion.figure variants={variants} className="flex flex-col items-center gap-12">
      <div className="relative w-80 h-80">
        <Image
          style={{ borderRadius: "50%" }}
          src={image}
          alt={alt}
          fill
          sizes="
          (max-width: 640px) 100vw,
          (max-width: 1024px) 50vw,
          33vw"
        />
        <i className="absolute bottom-0 w-24 h-24 bg-white rounded-full grid place-items-center left-1/2 -translate-x-1/2 translate-y-1/4">
          <Image className="scale-[0.625]" src={icon} alt="" width={96} height={96} />
        </i>
      </div>
      <figcaption className="max-w-prose">
        <h3 className="mb-4 text-3xl font-bold tracking-wide text-center uppercase text-neutral-900 transition dark:text-yellow-400 md:text-4xl md:mb-6">
          {title}
        </h3>
        <p className="text-center text-neutral-600 transition dark:text-neutral-200 sm:text-xl">
          {paragraph}
        </p>
      </figcaption>
    </motion.figure>
  );
}

OurValuesCard.defaultProps = {
  variants: {},
};

export default OurValuesCard;
