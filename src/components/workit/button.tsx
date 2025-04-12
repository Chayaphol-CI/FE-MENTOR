import React from "react";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="bg-wt-green text-wt-button py-3 px-8 text-wt-purple900 border-2 border-wt-green hover:bg-wt-purple900 hover:text-wt-green cursor-pointer ">
      {text}
    </button>
  );
};
export default Button;
