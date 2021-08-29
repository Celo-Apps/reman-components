import React, { MouseEventHandler } from "react";

type ButtonProps = {
  title: String;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  before?: JSX.Element | null | Function;
  after?: JSX.Element | null | Function;
};

const DefaultButton: React.FC<ButtonProps> = ({
  title,
  onClick,
  type,
  before,
  after,
}) => {
  return (
    <button type={type} onClick={onClick} className="border-2 rounded py-2 px-4 flex items-center justify-center">
      {before}
      {title}
      {after}
    </button>
  );
};

export default DefaultButton;
