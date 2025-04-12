import Button from "@/components/workit/button";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full">
      <nav className="bg-wt-purple900 flex flex-row items-center justify-between px-5 pt-8">
        <Image
          src={"/workit/logo-light.svg"}
          width={96}
          height={25}
          alt="logo-light"
        />
        <p className="text-preset5 text-white">Apply for access</p>
      </nav>
      <div className="bg-wt-purple900 flex items-center justify-center pb-[144px] relative">
        <section className="flex flex-col items-center justify-center px-4.5 pt-14">
          <p className="text-mobile-preset1 text-center pb-10">
            Data tailored to <br /> your needs.
          </p>
          <Button text="Learn more" />
          <Image
            className="absolute bottom-0 translate-y-[84px]"
            src={"/workit/image-hero.webp"}
            width={292}
            height={168}
            alt="image-hero"
          />
        </section>
      </div>

      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default HomePage;
