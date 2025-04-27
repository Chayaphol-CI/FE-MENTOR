"use client";

import Button from "@/components/interacting/button";
import RateSelector from "@/components/interacting/rate-selector";
import Image from "next/image";
import React, { useState } from "react";

const Home = () => {
  const [isSubmit, setIsSumbit] = useState<boolean>(false);
  const [count, setCount] = useState<number>();

  const onSubmit = () => {
    setIsSumbit(true);
  };

  return (
    <div className="min-h-screen w-full bg-r-grey950 flex items-center justify-center">
      <div className="p-8 bg-gradient-dark w-[412px] rounded-4xl">
        <div className="flex flex-col gap-8">
          {!isSubmit ? (
            <>
              <div className="w-12 h-12 rounded-full bg-r-grey950 flex items-center justify-center">
                <Image
                  src={"./interacting/icon-star.svg"}
                  width={16}
                  height={16}
                  alt="star"
                />
              </div>
              <div className="text-preset-1">How did we do?</div>
              <p className="text-preset-4-reg">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
              <RateSelector selectCount={setCount} />
              <Button text="SUBMIT" onSubmit={onSubmit} />
            </>
          ) : (
            <div className="flex items-center justify-center flex-col gap-8">
              <Image
                src={"./interacting/illustration-thank-you.svg"}
                width={168}
                height={108}
                alt="star"
              />

              <div className="bg-r-grey900 py-[6px] px-[19.5px] rounded-2xl">
                <p className="text-preset-4-reg text-r-orange500">
                  {`Yout selected ${count} out of 5`}
                </p>
              </div>
              <div className="flex items-center justify-center flex-col gap-4">
                <div className="text-preset-1">Thank you!</div>
                <p className="text-preset-4-reg text-center text-r-grey500">
                  We appreciate you taking the time to give a rating. If you
                  ever need more support, don’t hesitate to get in touch!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
