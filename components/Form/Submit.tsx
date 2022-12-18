import React from "react";

type SubmitProps = {
  children: React.ReactNode;
};

function Submit({ children }: SubmitProps) {
  return (
    <button
      type="submit"
      className="w-full px-12 py-3 font-bold bg-yellow-400 border-2 border-yellow-600 text-neutral-800 transition-colors hover:bg-transparent focus-visible:bg-transparent dark:focus-visible:text-yellow-400 dark:hover:text-yellow-400"
    >
      {children}
    </button>
  );
}

export default Submit;
