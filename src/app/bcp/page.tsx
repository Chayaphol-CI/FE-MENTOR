import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-bpc-yellow flex items-center justify-center">
      <div className="relative">
        <div className="w-full h-full bg-black rounded-[20px] absolute top-2 left-2"></div>
        <div className="flex flex-col p-6 bg-white rounded-[20px] w-[336px] border border-bpc-grey950 relative">
          <Image
            className="w-full object-cover h-auto"
            src={"/bcp/bcp.png"}
            width={336}
            height={200}
            alt="bcp"
          />
          <div className="flex flex-col items-start justify-center mt-6 gap-3">
            <p className="py-1 px-3 bg-bpc-yellow text-preset3-bold text-bpc-grey950 rounded-[4px]">
              Learning
            </p>
            <p className="text-preset3 text-bpc-grey950">
              Published 21 Dec 2023
            </p>
            <p className="text-preset1 text-bpc-grey950 hover:text-bpc-yellow cursor-pointer">
              HTML & CSS foundations
            </p>
            <p className="text-preset2 text-bpc-grey500">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
          </div>
          <div className="flex flex-row mt-6 items-center justify-start gap-3">
            <Image
              src={"/bcp/userpic.png"}
              width={32}
              height={32}
              alt="profile"
            />
            <p className="text-preset3-bold text-bpc-grey950">Greg Hooper</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
