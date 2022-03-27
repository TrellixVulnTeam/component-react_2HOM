import React from "react";

type ButtonProp = {
  label: string;
};

const Button = ({ label }: ButtonProp) => {
  return <button>{label}</button>;
};

export default Button;
