import React, { ChangeEventHandler, FocusEventHandler } from "react";

type TextAreaProps = {
  error: boolean;
  value: string;
  changeHandler: ChangeEventHandler<HTMLTextAreaElement>;
  blurHandler: FocusEventHandler<HTMLTextAreaElement>;
  id: string;
  name: string;
  placeholder?: string;
};

function TextArea(props: TextAreaProps) {
  const { error, value, changeHandler, blurHandler, id, name, placeholder } = props;

  return (
    <textarea
      className={`${error ? "border-red-500 dark:border-amber-600" : "border-yellow-400"}
      w-full h-32 px-4 py-3 leading-tight border-b-4 appearance-none bg-yellow-50 dark:bg-neutral-800 dark:text-white text-neutral-800 placeholder:text-neutral-400 dark:placeholder:text-neutral-400 focus-visible:border-neutral-400 transition-colors placeholder:opacity-100 md:h-40`}
      value={value}
      onChange={changeHandler}
      onBlur={blurHandler}
      id={id}
      name={name}
      placeholder={placeholder}
    />
  );
}

TextArea.defaultProps = {
  placeholder: "",
};

export default TextArea;
