import React, { MouseEventHandler } from "react";

type ButtonProps = {
  title: String;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  before?: JSX.Element | null;
  after?: JSX.Element | null;
};

const DefaultButton: React.FC<ButtonProps> = ({
  title,
  onClick,
  type,
  before,
  after,
}) => {
  return (
    <button type={type} onClick={onClick} className="border-2 rounded p-3">
      {before}
      {title}
      {after}
    </button>
  );
};

export default DefaultButton;
