import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

type NavLinkProps = {
  title: string;
  destination: string;
  clickHandler?: () => void;
};

function NavLink({ title, destination, clickHandler = () => {} }: NavLinkProps) {
  const linkClassNames = `
  text-2xl text-neutral-900 tracking-wide transition-colors
  hover:text-yellow-400 px-4 py-2 dark:text-white dark:hover:text-yellow-400
  md:text-base
  lg:text-lg`;

  const { pathname } = useRouter();

  const isUserOnHomepage = pathname === "/";
  const isDestinationAnId = destination.charAt(0) === "#";

  return (
    <li>
      {isUserOnHomepage && isDestinationAnId ? (
        <a href={destination} className={linkClassNames} onClick={clickHandler}>
          {title}
        </a>
      ) : (
        <Link legacyBehavior href={isDestinationAnId ? `/${destination}` : destination} passHref>
          <a className={linkClassNames} onClick={clickHandler}>
            {title}
          </a>
        </Link>
      )}
    </li>
  );
}

NavLink.defaultProps = {
  clickHandler: () => {},
};

export default NavLink;
