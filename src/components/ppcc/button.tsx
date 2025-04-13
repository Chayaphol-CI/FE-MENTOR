import Image from "next/image";
import React from "react";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="flex flex-row items-center justify-center gap-100 bg-ppcc-green500 hover:bg-ppcc-green700 cursor-pointer transition duration-300 w-[236px] h-[50px] rounded-[8px]">
      <Image src={"/ppcc/icon-cart.svg"} width={18} height={18} alt="cart" />
      <p className="text-preset-2 text-white">{text}</p>
    </button>
  );
};

export default Button;
