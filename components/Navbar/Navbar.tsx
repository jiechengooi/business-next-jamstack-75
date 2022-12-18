import React, { useState } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import ThemeSwitcher from "../ThemeSwitcher";
import LocaleSwitcher from "../LocaleSwitcher";
import HamburgerButton from "./HamburgerButton";
import { ILayout } from "../../types/generated/contentful";

type NavbarProps = {
  content: ILayout;
};

function Navbar({ content }: NavbarProps) {
  const { themeSwitcherTitle, localeSwitcherTitle } = content.fields;

  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(false);
  };

  return (
    <header className="fixed top-0 z-40 flex items-center justify-between w-full px-8 py-6 max-w-container left-1/2 -translate-x-1/2 dark:bg-gradient-to-b dark:from-neutral-900 to-transparent md:dark:bg-none">
      <Logo content={content} clickHandler={handleClick} />
      <div className="md:flex md:gap-3 lg:gap-6">
        <Nav content={content} opened={opened} clickHandler={handleClick} />
        <ThemeSwitcher className="hidden md:grid" title={themeSwitcherTitle} />
        <LocaleSwitcher className="hidden md:grid" title={localeSwitcherTitle} />
      </div>
      <HamburgerButton opened={opened} setOpened={setOpened} />
    </header>
  );
}

export default Navbar;
