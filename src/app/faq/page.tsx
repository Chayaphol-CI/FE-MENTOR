import TextCollapse from "@/components/faq/TextCollapse";
import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-faq-lightpink relative overflow-hidden flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-[320px] max-sm:block">
        <Image
          src={"/faq/bgdesktop.svg"}
          className="object-cover"
          alt="desktop"
          fill
          priority
        />
      </div>
      <section className="flex items-start justify-center relative bg-white p-10 max-sm:p-6 rounded-2xl gap-8 flex-col w-[600px] sm:w-[372px] max-sm:m-6">
        <div className="flex items-center justify-start gap-6 py-[13px]">
          <Image src={"/faq/icon-star.svg"} width={40} height={40} alt="star" />
          <p className="text-header text-faq-darkpurple">FAQs</p>
        </div>
        <div className="flex flex-col gap-6">
          <TextCollapse
            label="What is Frontend Mentor, and how will it help me?"
            describe="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
          />
          <div className="w-full border border-faq-lightpink" />
          <TextCollapse
            label="Is Frontend Mentor free?"
            describe="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
          />
          <div className="w-full border border-faq-lightpink" />
          <TextCollapse
            label="Can i use Frontend Mentor projects in my portfolio"
            describe="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
          />
          <div className="w-full border border-faq-lightpink" />
          <TextCollapse
            label="How can I get help if I'm stuck on a challenge?"
            describe="Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It’s suitable for all levels and ideal for portfolio building."
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
