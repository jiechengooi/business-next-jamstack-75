import React from "react";
import { ILayout } from "../../types/generated/contentful";
import { NavLink } from "../Navbar";

type FooterProps = {
  content: ILayout;
};

function Footer({ content }: FooterProps) {
  const { navigationLinks } = content.fields;

  return (
    <footer className="relative z-20 w-full bg-yellow-200 dark:bg-neutral-900 transition-colors">
      <nav className="flex flex-col-reverse items-center px-8 py-32 mx-auto max-w-container gap-12 md:justify-between md:gap-4 md:py-12 md:flex-row 2xl:px-0">
        <p className="absolute w-full text-sm font-medium text-center bottom-2 text-neutral-900 dark:text-neutral-400 transition-colors md:text-base md:text-left md:static md:w-auto">
          2021@ All right reserved. 
        </p>
        <ul className="flex flex-col text-center gap-6 md:flex-row">
          {navigationLinks.map(({ fields }) => (
            <NavLink
              title={fields.title}
              destination={fields.destination}
              key={fields.title}
            />
          ))}
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
