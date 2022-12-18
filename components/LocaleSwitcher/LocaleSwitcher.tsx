import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { IconWorld } from "@tabler/icons";
import CircleButton from "../CircleButton";

import flagPoland from "../../public/icons/flags/pl.svg";
import flagUnitedStates from "../../public/icons/flags/us.svg";

type LocaleSwitcherProps = {
  title: string;
  className?: string;
};

enum Locales {
  MALAY = "ms-MY",
  ENGLISH = "en-US",
}

function LocaleSwitcher({ title, className }: LocaleSwitcherProps) {
  const [opened, setOpened] = useState(false);

  const { pathname, query } = useRouter();

  const handleButtonClick = () => {
    setOpened((state) => !state);
  };

  const handleLinkClick = () => {
    setOpened(false);
  };

  return (
    <div className="relative">
      <CircleButton
        className={className}
        title={title}
        icon={<IconWorld className="w-full h-auto" />}
        clickHandler={handleButtonClick}
      />
      <ul
        className={`
        ${opened ? "visible scale-100 opacity-100" : "invisible scale-0 opacity-0"}
        transition-all grid gap-2 px-8 py-4 z-50 bg-white/90
          shadow-md dark:bg-neutral-900/90 backdrop-blur-md rounded w-max origin-bottom-right
        absolute -left-3 -translate-x-full bottom-0
        md:left-auto md:translate-x-0 md:-bottom-3 md:right-0 md:translate-y-full md:origin-top-right`}
      >
        <li>
          <Link legacyBehavior
            href={{ pathname, query }}
            locale={Locales.ENGLISH}
            passHref
            scroll={false}
          >
            <a
              className="flex justify-between w-full text-xl gap-4 transition-colors text-neutral-900 hover:text-yellow-400 dark:text-white dark:hover:text-yellow-400"
              onClick={handleLinkClick}
            >
              <i className="relative w-8 h-6">
                <Image src={flagUnitedStates} alt="Flag of the United States" fill />
              </i>
              English
            </a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior
            href={{ pathname, query }}
            locale={Locales.MALAY}
            passHref
            scroll={false}
          >
            <a
              className="flex items-center justify-between w-full text-xl gap-4 transition-colors text-neutral-900 hover:text-yellow-400 dark:text-white dark:hover:text-yellow-400"
              onClick={handleLinkClick}
            >
              <i className="relative w-8 h-6">
                <Image src={flagPoland} alt="Flaga Polski" fill />
              </i>
              Malay
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

LocaleSwitcher.defaultProps = {
  className: "",
};

export default LocaleSwitcher;
