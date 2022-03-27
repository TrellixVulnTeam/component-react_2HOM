/// <reference types="react" />
declare type InputProp = {
    type: "text" | "password";
};
declare const Input: ({ type }: InputProp) => JSX.Element;
export default Input;
