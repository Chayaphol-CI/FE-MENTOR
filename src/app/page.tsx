import Button from "@/components/ppcc/button";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <main className="bg-ppcc-cream min-h-screen flex-center">
      <section className="flex flex-col md:flex-row max-w-[350px] md:max-w-[600px] shadown-md">
        <Image
          className="rounded-t-[8px] md:hidden object-cover"
          src={"/ppcc/image-product-mobile.jpg"}
          width={350}
          height={342}
          alt="product"
        />
        <Image
          className="rounded-l-[8px] max-md:hidden object-cover"
          src={"/ppcc/image-product-desktop.jpg"}
          width={350}
          height={342}
          alt="product"
        />
        <div className="flex flex-col p-8 bg-white w-full rounded-b-lg md:rounded-r-lg gap-8">
          <div className="flex flex-col gap-6 ">
            <p className="text-preset-4 text-ppcc-grey">PERFUME</p>
            <h1 className="text-preset-1 text-ppcc-black">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="text-preset-3 text-ppcc-grey">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-row gap-4 items-center">
              <p className="text-preset-1 text-ppcc-green500">$149.99</p>
              <p className="text-ppcc-grey text-preset-5 line-through">
                $169.99
              </p>
            </div>
            <Button text="Add to Cart" />
          </div>
        </div>
      </section>
    </main>
  );
  // return (
  //   <main className="min-h-screen w-full bg-ppcc-cream flex-center">
  //     <section className="flex-center flex-col md:flex-row max-w-[600px] max-h-[456px] max-md:max-w-[350px] bg-red-500">
  //       <div className="relative w-full md:w-1/2 aspect-[3/4] md:aspect-auto">
  //         <Image
  //           className="rounded-l-[8px] max-md:hidden object-cover"
  //           src={"/ppcc/image-product-desktop.jpg"}
  //           fill
  //           alt="product"
  //         />
  //       </div>
  //       <Image
  //         className="rounded-t-[8px] md:hidden"
  //         src={"/ppcc/image-product-mobile.jpg"}
  //         width={350}
  //         height={342}
  //         alt="product"
  //       />
  //       <div className="flex flex-col bg-white p-8 gap-8 rounded-r-[8px] w-full">
  {
    /* <div className="flex flex-col gap-6 "> */
  }
  {
    /*   <p className="text-preset-4 text-ppcc-grey">PERFUME</p> */
  }
  {
    /*   <h1 className="text-preset-1 text-ppcc-black"> */
  }
  {
    /*     Gabrielle Essence Eau De Parfum */
  }
  {
    /*   </h1> */
  }
  {
    /*   <p className="text-preset-3 text-ppcc-grey"> */
  }
  {
    /*     A floral, solar and voluptuous interpretation composed by Olivier */
  }
  {
    /*     Polge, Perfumer-Creator for the House of CHANEL. */
  }
  {
    /*   </p> */
  }
  {
    /* </div> */
  }
  //         <div className="flex flex-col gap-8">
  //           <div className="flex flex-row gap-4 items-center">
  //             <p className="text-preset-1 text-ppcc-green500">$149.99</p>
  //             <p className="text-ppcc-grey text-preset-5 line-through">
  //               $169.99
  //             </p>
  //           </div>
  //           <Button text="Add to Cart" />
  //         </div>
  //       </div>
  //     </section>
  //   </main>
  // );
};
export default Home;
