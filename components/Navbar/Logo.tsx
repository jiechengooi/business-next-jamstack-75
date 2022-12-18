import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { ILayout } from "../../types/generated/contentful.d.ts";

type LogoProps = {
  content: ILayout;
  clickHandler: () => void;
};

function Logo({ content, clickHandler }: LogoProps) {
  const { logoAlternativeText } = content.fields;

  return (
    <Link legacyBehavior href="/#top" passHref>
      <a className="inline-flex items-center gap-6" onClick={clickHandler}>
        <Image className="w-10 h-auto" src={logo} alt={logoAlternativeText} />
        <h1 className="text-xl font-bold text-neutral-900 dark:text-white transition-colors hover:text-yellow-400 dark:hover:text-yellow-400 md:text-2xl lg:text-3xl">
          The academy
        </h1>
      </a>
    </Link>
  );
}

export default Logo;
