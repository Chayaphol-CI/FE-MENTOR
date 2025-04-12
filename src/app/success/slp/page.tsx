import ButtonSLP from "@/components/slp/Button";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-t-grey900 flex items-center justify-center">
      <div className="gap-300 bg-t-grey800 flex items-center justify-center flex-col p-500 rounded-xl">
        <Image
          className="rounded-full"
          src={"/slp/avatar-jessica.jpeg"}
          width={88}
          height={88}
          alt="Woman"
        />
        <div className="flex flex-col items-center justify-center">
          <p className="text-preset1">Jessica Randall</p>
          <p className="text-preset2-bold text-t-green">
            London, United Kingdom
          </p>
        </div>
        <div>
          <p className="text-preset2">Front-end developer and avid reader.</p>
        </div>
        <ButtonSLP>Github</ButtonSLP>
        <ButtonSLP>Frontend Mentor</ButtonSLP>
        <ButtonSLP>LinkedIn</ButtonSLP>
        <ButtonSLP>Twitter</ButtonSLP>
        <ButtonSLP>Instagram</ButtonSLP>
      </div>
    </div>
  );
};

export default Home;
