import Image from "next/image";
import React from "react";

const ReceiptPage = () => {
  return (
    <div className="bg-stone101 min-h-screen flex items-start justify-center md:items-center">
      <div className="bg-white max-md:min-h-screen p-10 rounded-3xl max-md:p-0 max-md:rounded-none flex flex-col">
        <div className="w-full md:w-[536px] lg:w-[656px] ">
          <Image
            className="md:rounded-3xl object-cover h-auto w-full"
            width={656}
            height={300}
            src="/receip_page/image-omelette.jpeg"
            alt="Omelette"
          />
          <div className="flex flex-col gap-6 max-md:px-6">
            <div className="flex gap-6 flex-col mt-8 ">
              <p className="text-ys-lg text-black">Simple Omelette Recipe</p>
              <p className="text-of-reg text-stone601 break-normal">
                An easy and quick dish, perfect for any meal. This classic
                omelette combines beaten eggs cooked to perfection, optionally
                filled with your choice of cheese, vegetables, or meats.
              </p>
            </div>
            <div className="p-6 bg-rose-50">
              <p className="text-of-semibold text-rose801 mb-4">
                Preparation time
              </p>
              <ul>
                <li className="flex flex-row items-center justify-start gap-8">
                  <span className="h-1 w-1 rounded-full bg-rose801 flex" />
                  <span className="text-stone601 text-of-reg">
                    <strong>Total</strong>: Approximately 10 minutes
                  </span>
                </li>
                <li className="flex flex-row items-center justify-start gap-8">
                  <span className="h-1 w-1 rounded-full bg-rose801 flex" />
                  <span className="text-stone601 text-of-reg">
                    <strong>Preparation</strong>: 5 minutes
                  </span>
                </li>
                <li className="flex flex-row items-center justify-start gap-8">
                  <span className="h-1 w-1 rounded-full bg-rose801 flex" />
                  <span className="text-stone601 text-of-reg">
                    <strong>Cooking</strong>: 5 minutes
                  </span>
                </li>
              </ul>
            </div>
            {/* o */}
            <div className="max-sm:mx-4">
              <p className="text-brown801 text-ys-md mb-4">Ingredients</p>
              <ul>
                <li className="flex flex-row items-center justify-start gap-8">
                  <span className="h-1 w-1 rounded-full bg-rose801 flex" />
                  <span className="text-stone601 text-of-reg">
                    2-3 large eggs
                  </span>
                </li>
                <li className="flex flex-row items-center justify-start gap-8">
                  <span className="h-1 w-1 rounded-full bg-rose801 flex" />
                  <span className="text-stone601 text-of-reg">
                    Salt, to taste
                  </span>
                </li>
                <li className="flex flex-row items-center justify-start gap-8">
                  <span className="h-1 w-1 rounded-full bg-rose801 flex" />
                  <span className="text-stone601 text-of-reg">
                    Pepper, to taste
                  </span>
                </li>

                <li className="flex flex-row items-center justify-start gap-8">
                  <span className="h-1 w-1 rounded-full bg-rose801 flex" />
                  <span className="text-stone601 text-of-reg">
                    1 tablespoon of butter or oil
                  </span>
                </li>

                <li className="flex flex-row items-center justify-start gap-8">
                  <span className="h-1 w-1 rounded-full bg-rose801 flex" />
                  <span className="text-stone601 text-of-reg">
                    Optional fillings: cheese, diced vegetables, cooked meats,
                    herbs
                  </span>
                </li>
              </ul>
            </div>

            <div className="w-full border bg-stone151" />

            <div>
              <p className="mb-4 text-brown801 text-ys-md">Instructions</p>
              <ul>
                <li className="flex flex-row items-start justify-start gap-4">
                  <p className="text-of-bold text-brown801">1.</p>
                  <span className="text-stone601 text-of-reg">
                    <strong>Beat the eggs</strong>: In a bowl, beat the eggs
                    with a pinch of salt and pepper until they are well mixed.
                    You can add a tablespoon of water or milk for a fluffier
                    texture.
                  </span>
                </li>
                <li className="flex flex-row items-start justify-start gap-4">
                  <p className="text-of-bold text-brown801">2.</p>
                  <span className="text-stone601 text-of-reg">
                    <strong>Heat the pan</strong>: Place a non-stick frying pan
                    over medium heat and add butter or oil.
                  </span>
                </li>
                <li className="flex flex-row items-start justify-start gap-4">
                  <p className="text-of-bold text-brown801">3.</p>
                  <span className="text-stone601 text-of-reg">
                    <strong>Cook the omelette</strong>: Once the butter is
                    melted and bubbling, pour in the eggs. Tilt the pan to
                    ensure the eggs evenly coat the surface.
                  </span>
                </li>
                <li className="flex flex-row items-start justify-start gap-4">
                  <p className="text-of-bold text-brown801">4.</p>
                  <span className="text-stone601 text-of-reg">
                    <strong>Add fillings(optional)</strong>: When the eggs begin
                    to set at the edges but are still slightly runny in the
                    middle, sprinkle your chosen fillings over one half of the
                    omelette.{" "}
                  </span>
                </li>
                <li className="flex flex-row items-start justify-start gap-4">
                  <p className="text-of-bold text-brown801">5.</p>
                  <span className="text-stone601 text-of-reg">
                    <strong>Fold and serve</strong>: As the omelette continues
                    to cook, carefully lift one edge and fold it over the
                    fillings. Let it cook for another minute, then slide it onto
                    a plate.
                  </span>
                </li>
                <li className="flex flex-row items-start justify-start gap-4">
                  <p className="text-of-bold text-brown801">6.</p>
                  <span className="text-stone601 text-of-reg">
                    <strong>Enjoy</strong>: Serve hot, with additional salt and
                    pepper if needed.{" "}
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full border bg-stone151" />
            <div>
              <p className="text-brown801 text-ys-md mb-4">Nutrition</p>
              <p className="text-stone601 text-of-reg mb-4">
                The table below shows nutritional values per serving without the
                additional fillings.
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center justify-start ml-8">
                  <p className="text-stone601 text-of-reg flex-1">Calories</p>
                  <p className="text-brown801 text-of-bold flex-1">277kcal</p>
                </div>
                <div className="w-full border bg-stone151" />
                <div className="flex flex-row items-center justify-start ml-8">
                  <p className="text-stone601 text-of-reg flex-1">Carbs</p>
                  <p className="text-brown801 text-of-bold flex-1">0g</p>
                </div>
                <div className="w-full border bg-stone151" />
                <div className="flex flex-row items-center justify-start ml-8">
                  <p className="text-stone601 text-of-reg flex-1">Protein</p>
                  <p className="text-brown801 text-of-bold flex-1">20g</p>
                </div>
                <div className="w-full border bg-stone151" />
                <div className="flex flex-row items-center justify-start ml-8">
                  <p className="text-stone601 text-of-reg flex-1">Fat</p>
                  <p className="text-brown801 text-of-bold flex-1">22g</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPage;
