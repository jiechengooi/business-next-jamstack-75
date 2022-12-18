import React from "react";
import Hamburger from "hamburger-react";

type HamburgerButtonProps = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

function HamburgerButton({ opened, setOpened }: HamburgerButtonProps) {
  return (
    <i className="text-neutral-900 dark:text-yellow-400 transition-colors md:hidden">
      <Hamburger
        rounded
        direction="left"
        toggled={opened}
        toggle={setOpened}
        label="Menu"
        aria-expanded={opened}
      />
    </i>
  );
}

export default HamburgerButton;
