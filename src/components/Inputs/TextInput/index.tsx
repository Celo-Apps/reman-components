import React, { ChangeEventHandler } from "react";

type TextInputProps = {
  value: any;
  onChange: ChangeEventHandler;
  invalid?: boolean;
  label?: string;
  id?: string;
  disabled?: boolean;
  theme?: string;
  placeholder?: string;
  className?: string;
};

export default function TextInput({
  value,
  onChange,
  invalid = false,
  placeholder = "Enter text",
  id = "value",
  disabled = false,
  className = "",
  theme = "dark",
}: TextInputProps) {
  const themeStyles =
    theme === "dark"
      ? "bg-white placeholder-gray-450 text-gray-700 focus:ring-black"
      : "bg-gray-600 bg-opacity-25 focus:ring-white placeholder-gray-450 text-black";

  return (
    <input
      id={id}
      name={id}
      type="text"
      value={value ?? ""}
      onChange={onChange}
      disabled={disabled}
      className={`form-input px-3 py-3 block w-full sm:text-sm sm:leading-5 border-none focus:border-black rounded shadow-sm ring-1 transition duration-500 ease-in-out focus:outline-none disabled:opacity-75 ${themeStyles} ${
        invalid ? "ring-red-600" : "ring-transparent"
      } ${className}`}
      placeholder={placeholder}
    />
  );
}
