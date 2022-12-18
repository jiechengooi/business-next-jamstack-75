import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import type { Variants } from "framer-motion";

type CtaProps = {
  text: string;
  destination: string;
  variants?: Variants;
};

function Cta({ text, destination, variants = {} }: CtaProps) {
  return destination.charAt(0) === "#" ? (
    <motion.a
      variants={variants}
      href={destination}
      className="px-12 py-3 font-bold bg-yellow-400 border-2 border-yellow-600 w-max text-neutral-800 transition-colors hover:bg-transparent focus-visible:bg-transparent dark:focus-visible:text-yellow-400 dark:hover:text-yellow-400 md:px-16 md:py-4 md:text-lg"
    >
      {text}
    </motion.a>
  ) : (
    <Link href={destination} passHref>
      <motion.a
        variants={variants}
        className="px-12 py-3 font-bold bg-yellow-400 border-2 border-yellow-600 w-max text-neutral-800 transition-colors hover:bg-transparent focus-visible:bg-transparent dark:focus-visible:text-yellow-400 dark:hover:text-yellow-400 md:px-16 md:py-4 md:text-lg"
      >
        {text}
      </motion.a>
    </Link>
  );
}

Cta.defaultProps = {
  variants: {},
};

export default Cta;
