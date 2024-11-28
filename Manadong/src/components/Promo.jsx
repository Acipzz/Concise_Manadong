import React from "react";

// Import Image
import Promo1 from "../assets/b2g1.jpg";
import Promo2 from "../assets/20off.png";
import Promo3 from "../assets/bundle deal.png";

const promotions = [
  {
    title: "Buy 2 Get 1",
    description: "Buy 2 and get 1 free, applicable to select variants.",
    imgSrc: Promo1,
    alt: "Buy 2 Get 1 Free Promotion",
  },
  {
    title: "Discount 20%",
    description:
      "Get a 20% discount on all purchases this weekend. Minimum purchase Rp. 50,000.",
    imgSrc: Promo2,
    alt: "20% Discount Promotion",
  },
  {
    title: "Bundle Deal",
    description:
      "Purchase Ayam Woku and Ayam Rica to save 30% on the total cost.",
    imgSrc: Promo3,
    alt: "Bundle Deal Promotion",
  },
];

function Promo() {
  return (
    <div className="flex flex-col w-full h-full px-20 py-10 bg-red-200 md:flex-row">
      <div className="w-4/12 PromotionTitle">
        <div className="flex flex-col justify-start h-full mb-3 md:mb-0 lg:justify-center ">
          <h1 className="text-2xl font-bold text-blue-600 ml-14" >
            <span className="underline decoration-[3px] underline-offset-[6px] decoration-red-500">
              Pro
            </span>
            motion
          </h1>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 md:w-8/12 md:grid-cols-2 lg:grid-cols-3">
        {promotions.map((promo, index) => (
          <div
            key={index}
            className="w-full overflow-hidden bg-white rounded shadow-md h-fit"
          >
            <img
              className="object-cover w-full"
              src={promo.imgSrc}
              alt={promo.alt}
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold text-blue-600">
                {promo.title}
              </div>
              <p className="text-base text-gray-700">{promo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Promo;