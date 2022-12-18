import React from "react";

type ErrorLabelProps = {
  children: React.ReactNode;
};

function ErrorLabel({ children }: ErrorLabelProps) {
  return (
    <strong
      className={`${children == null ? "opacity-0" : "opacity-100"}
      absolute bottom-0 w-full text-sm italic text-red-500 left-1/2 -translate-x-1/2 translate-y-[calc(100%+0.25rem)] dark:text-amber-600 transition
      `}
    >
      {children}
    </strong>
  );
}

export default ErrorLabel;
