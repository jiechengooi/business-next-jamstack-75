import React, { ChangeEventHandler, FocusEventHandler } from "react";

type InputProps = {
  error: boolean;
  value: string;
  changeHandler: ChangeEventHandler<HTMLInputElement>;
  blurHandler: FocusEventHandler<HTMLInputElement>;
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
};

function Input(props: InputProps) {
  const { error, value, changeHandler, blurHandler, id, name, type, placeholder } = props;

  return (
    <input
      className={`${error ? "border-red-500 dark:border-amber-600" : "border-yellow-400"} 
      w-full px-4 py-3 leading-tight border-b-4 appearance-none bg-yellow-50 dark:bg-neutral-800 dark:text-white text-neutral-800 placeholder:text-neutral-400 dark:placeholder:text-neutral-400 focus-visible:border-neutral-400 transition-colors placeholder:opacity-100`}
      value={value}
      onChange={changeHandler}
      onBlur={blurHandler}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
    />
  );
}

Input.defaultProps = {
  type: "text",
  placeholder: "",
};

export default Input;
