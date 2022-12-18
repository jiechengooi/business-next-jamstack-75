import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IconLoader, IconSun, IconMoon } from "@tabler/icons";
import CircleButton from "../CircleButton";

enum Themes {
  SYSTEM = "system",
  DARK = "dark",
  LIGHT = "light",
}

type ThemeSwitcherProps = {
  title: string;
  className?: string;
};

function ThemeSwitcher({ title, className }: ThemeSwitcherProps) {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const getIconBasedOnTheme = () => {
    if (!mounted) return <IconLoader className="w-full h-auto animate-spin" />;

    const currentTheme = theme === Themes.SYSTEM ? systemTheme : theme;

    if (currentTheme === Themes.DARK) {
      return <IconSun className="w-full h-auto" />;
    }
    return <IconMoon className="w-full h-auto" />;
  };

  const handleClick = () => {
    if (theme === Themes.DARK) {
      setTheme(Themes.LIGHT);
    } else {
      setTheme(Themes.DARK);
    }
  };

  return (
    <CircleButton
      className={className}
      title={title}
      icon={getIconBasedOnTheme()}
      clickHandler={handleClick}
    />
  );
}

ThemeSwitcher.defaultProps = {
  className: "",
};

export default ThemeSwitcher;
