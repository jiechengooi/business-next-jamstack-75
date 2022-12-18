import React from "react";

type CircleButtonProps = {
  className?: string;
  title: string;
  icon: React.ReactNode;
  clickHandler: () => void;
};

function CircleButton({ className = "", title, icon, clickHandler }: CircleButtonProps) {
  return (
    <button
      className={`
      ${className} 
      p-2 rounded-full shadow-md text-neutral-900 w-11 h-11 bg-white/90 dark:bg-neutral-900/90 dark:text-white dark:hover:text-yellow-400 backdrop-blur-md grid place-items-center transition-colors hover:text-yellow-400
      `}
      type="button"
      title={title}
      onClick={clickHandler}
    >
      {icon}
    </button>
  );
}

CircleButton.defaultProps = {
  className: "",
};

export default CircleButton;
