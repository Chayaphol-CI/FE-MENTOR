import React from "react";

interface ButtonLSP {
  children: React.ReactNode;
}

const ButtonSLP = ({ children }: ButtonLSP) => {
  return (
    <button className="text-preset2-bold text-white hover:text-black bg-t-grey700 hover:bg-t-green p-3 rounded-lg w-[304px] flex items-center justify-center ">
      {children}
    </button>
  );
};

export default ButtonSLP;
