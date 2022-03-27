import React from "react";

type InputProp = {
  type: "text" | "password";
};

const Input = ({ type }: InputProp) => {
  return <input type={type} />;
};

export default Input;
