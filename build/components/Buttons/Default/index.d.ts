import React, { MouseEventHandler } from "react";
declare type ButtonProps = {
    title: String;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    type?: "button" | "submit" | "reset" | undefined;
    before?: JSX.Element | null | Function;
    after?: JSX.Element | null | Function;
};
declare const DefaultButton: React.FC<ButtonProps>;
export default DefaultButton;
