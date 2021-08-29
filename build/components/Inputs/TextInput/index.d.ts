import { ChangeEventHandler } from "react";
declare type TextInputProps = {
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
export default function TextInput({ value, onChange, invalid, placeholder, id, disabled, className, theme, }: TextInputProps): JSX.Element;
export {};
