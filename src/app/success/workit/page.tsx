import Button from "@/components/workit/button";
import { workitAside } from "@/utils/workit/aside";
import Image from "next/image";
import React from "react";

const classes = {
  mobile:
    "tablet:w-[514px] tablet:h-[296px]  desktop:w-[767px] desktop:h-[441px]",
  founder: "w-[280px] h-[280px] desktop:w-[477px] desktop:h-[477px]",
  founder_mobile_pos:
    "max-tablet:left-1/2 max-tablet:-translate-x-1/2 max-tablet:-translate-y-[20%]",
  founder_tablet_position: "tablet:left-0",
  founder_desktop: "",
  founder_section:
    "w-[335px] h-[625px] tablet:w-[680px] tablet:h-[558px] desktop:w-[1120px] desktop:h-[579px]",
};

const HomePage = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-wt-purple100">
      <section className="bg-wt-purple900 relative">
        <header className="flex flex-row items-center justify-between px-5 tablet:px-11 desktop:px-[160px] desktop:py-[56px] pt-8">
          <Image
            src={"/workit/logo-light.svg"}
            width={96}
            height={25}
            alt="logo-light"
          />
          <a className="text-preset5 text-white underline decoration-4 underline-offset-9 decoration-wt-green">
            Apply for access
          </a>
        </header>
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center px-5 pt-[56px] pb-[148px] tablet:pb-[200px] desktop:pb-[296px] ">
            <h1 className="text-preset1 mobile:text-[60px] tablet:text-[80px] text-center pb-10 ">
              Data{" "}
              <span className="underline decoration-4 underline-offset-9 decoration-wt-green ">
                tailored{" "}
              </span>{" "}
              to <br /> your needs.
            </h1>
            <Button text="Learn more" />
          </div>
          <div
            className={`max-desktop:hidden absolute left-0 -translate-x-20 -translate-y-1/2 top-1/2 `}
          >
            <Image
              width={270}
              height={215}
              src={"/workit/bg-pattern-3.svg"}
              alt="image-hero"
            />
          </div>
          <div
            className={`desktop:hidden max-tablet:hidden absolute left-0 -translate-x-1/2 -translate-y-1/2 top-1/2 `}
          >
            <Image
              width={270}
              height={215}
              src={"/workit/bg-pattern-1.svg"}
              alt="image-hero"
            />
          </div>
          <div
            className={`desktop:hidden max-tablet:hidden absolute left-0 -translate-x-1/2 -translate-y-1/2 top-1/2 `}
          >
            <Image
              width={270}
              height={215}
              src={"/workit/bg-pattern-1.svg"}
              alt="image-hero"
            />
          </div>
          <div
            className={`max-tablet:hidden absolute right-0 translate-x-1/2 top-1/2 `}
          >
            <Image
              width={141}
              height={112}
              src={"/workit/bg-pattern-2.svg"}
              alt="image-hero"
            />
          </div>
          <div
            className={`${classes.mobile} absolute bottom-0 left-1/2 translate-y-1/2 -translate-x-1/2 w-[320px] h-[184px] `}
          >
            <Image
              width={767}
              height={441}
              src={"/workit/image-hero.webp"}
              alt="image-hero"
            />
          </div>
        </div>
      </section>

      <section className=" mt-[80px] tablet:mt-[136px] flex-center flex-col desktop:flex-row gap-8 px-5 tablet:px-11 py-[64px] tablet:py-[56px] desktop:py-[88px] bg-wt-purple100">
        {workitAside.map((data) => (
          <div
            key={data.index}
            className="tablet:max-w-[900px] flex-center flex-col gap-6 tablet:flex-row tablet:gap-[56px] desktop:flex-col"
          >
            <div className="min-w-12 h-12 border border-wt-purple900 rounded-full flex items-center justify-center">
              <p className="text-preset1 text-[20px] text-wt-purple900">
                {data.index}
              </p>
            </div>
            <div className="flex-center flex-col gap-4 tablet:items-start desktop:items-center justify-center">
              <p className="text-mobile-preset3 text-wt-purple900">
                {data.header}
              </p>
              <p className="text-mobile-preset4 text-wt-purple900 text-center tablet:text-left desktop:text-center">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="flex flex-center">
        <div className={`${classes.founder_section} relative`}>
          <div
            className={`${classes.founder} ${classes.founder_mobile_pos} ${classes.founder_tablet_position} ${classes.founder_desktop} absolute`}
          >
            <Image
              src={"/workit/image-founder.webp"}
              width={477}
              height={477}
              alt="founder"
            />
          </div>
          <div className="bottom-0 tablet:right-0 absolute max-tablet:mx-5 flex-center tablet:items-start tablet:text-left text-center flex-col bg-wt-purple900 p-8 tablet:p-12 desktop:p-[64px] gap-8 tablet:w-[504px] desktop:w-[730px]">
            <h1 className="text-preset2 text-[32px]">Be the first to test</h1>
            <p className="text-preset4 text-[16px] ">
              Hi, I’m Louis Graham, the founder of the company. Book a demo call
              with me to become a beta tester for our app and kickstart your
              company. Apply for access below and I’ll be in touch to schedule a
              call
            </p>
            <Button text="Apply for access" />
            <Image
              className="max-tablet:hidden absolute bottom-0 right-0 desktop:right-20 max-desktop:translate-y-[50%] translate-y-[30%]"
              width={270}
              height={215}
              src={"/workit/bg-pattern-1.svg"}
              alt="image-hero"
            />
          </div>
        </div>
      </section>

      <footer className="flex-center p-20 bg-white flex-col gap-[56px]">
        <Image
          src={"/workit/logo-dark.svg"}
          width={96}
          height={25}
          alt="logo-light"
        />
        <div className="flex flex-row items-centor justify-center gap-7">
          <Image
            src={"/workit/icon-facebook.svg"}
            width={20}
            height={20}
            alt="logo-light"
          />
          <Image
            src={"/workit/icon-twitter.svg"}
            width={20}
            height={20}
            alt="logo-light"
          />
          <Image
            src={"/workit/icon-instagram.svg"}
            width={20}
            height={20}
            alt="logo-light"
          />
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
