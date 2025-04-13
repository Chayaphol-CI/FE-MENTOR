import Image from "next/image";
import React from "react";

const sumData = [
  { title: "Reaction", score: 80, icon: "icon-reaction.svg", bg: "#FF5555" },
  { title: "Memory", score: 92, icon: "icon-memory.svg", bg: "#FFB21E" },
  { title: "Verbal", score: 61, icon: "icon-verbal.svg", bg: "#00BB8F" },
  { title: "Visual", score: 73, icon: "icon-visual.svg", bg: "#1125D6" },
];

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-r-lightblue flex items-center justify-center max-desktop:items-start">
      <div className="flex flex-col desktop:flex-row max-w-[767px]">
        <div className="bg-gradient-purple1 flex flex-1 flex-col items-center justify-center max-desktop:rounded-b-4xl desktop:rounded-l-4xl  p-10 gap-[35px]">
          <div className="text-grotesk text-[24px] text-r-lightblue">
            Your Result
          </div>
          <div className="pt-[35px] pb-[28px] flex flex-col items-center justify-center bg-gradient-purple2 rounded-full w-[200px] h-[200px]">
            <h1 className="text-white text-grotesk-XL ">76</h1>
            <p className="text-grotesk-B text-r-lightblue">of 100</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-[14px]">
            <h1 className="text-grotesk text-[32px]">Greate</h1>
            <p className="text-grotesk-medium text-[18px] text-center ">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div className="p-10 bg-white flex flex-1 flex-col items-start desktop:rounded-r-4xl gap-[28px]">
          <h1 className="text-grotesk text-[24px] text-r-darknavy">Summary</h1>
          <div className="flex flex-col gap-4 w-full">
            {sumData.map((data) => (
              <div
                key={data.title}
                className="flex flex-row justify-start items-center w-full p-4 rounded-4xl "
                style={{ background: `${data.bg}09` }}
              >
                <div className="flex items-center flex-row flex-1 gap-3">
                  <Image
                    src={`/result_sm/${data.icon}`}
                    width={20}
                    height={20}
                    alt={data.title}
                  />
                  <p className="text-grotesk" style={{ color: data.bg }}>
                    {data.title}
                  </p>
                </div>
                <div className="flex-center flex-row gap-2">
                  <p className="text-r-darknavy text-grotesk">{`${data.score}`}</p>
                  <p className="text-gray-400 text-grotesk">{`/100`}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="cursor-pointer hover:bg-gradient-purple1 bg-r-darknavy flex items-center justify-center py-[17px] w-full rounded-4xl text-grotesk-B transition duration-700">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
