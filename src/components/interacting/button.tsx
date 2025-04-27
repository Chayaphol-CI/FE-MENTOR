"use client";

import React from "react";

const Button = ({ text, onSubmit }: { text: string; onSubmit: () => void }) => {
  return (
    <button
      onClick={onSubmit}
      className="w-full bg-r-orange500 rounded-[22.5px] py-[12.5px] hover:bg-white cursor-pointer transition duration-300"
    >
      <p className="text-preset-5-semi-bold text-r-grey950">{text}</p>
    </button>
  );
};

export default Button;
