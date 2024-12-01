import React from "react";

import GrabFood from "../assets/Grab.jpg";
import Gofood from "../assets/Gojek.png";
import ShopeeFood from "../assets/Shopee.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Order() {
  return (
    <div className="py-16 px-14 md:px-20">
      <div className="flex flex-row items-center gap-2 px-2 border-2 divide-x-2 rounded-lg header ">
        <div>
          <a
            href="/"
            className="flex items-center justify-center gap-2 text-red-500"
          >
            <span>
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ color: "#ff0000" }}
              />
            </span>{" "}
            Back
          </a>
        </div>
        <div className="pl-2 text-sm breadcrumbs">
          <ul>
            <li>
              <a className="text-blue-600" href="/">
                Home
              </a>
            </li>
            <li>
              <a>Order Now</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full mx-auto my-10 md:w-3/5">
        <div className="flex justify-center w-full mb-16 OrderTitle">
          <h1 className="text-2xl font-bold text-blue-600">
            <span className="underline decoration-[3px] underline-offset-[6px] decoration-red-500">
              Ord
            </span>
            er Now On :
          </h1>
        </div>
        <div className="grid grid-flow-row grid-cols-2 gap-24 md:grid-cols-3">
          <div className="flex flex-col justify-between w-full">
            <div className="flex items-center justify-center w-full h-full rounded-full">
              <img src={GrabFood} alt="GrabFood" className="w-40 h-fit" />
            </div>
            <a
              href="/grabfood"
              className="flex items-end justify-center w-full "
            >
              <button className="px-4 py-2 mt-6 text-sm font-bold text-white bg-blue-600 rounded-md hover:bg-blue-950 hover:text-white w-fit">
                Order Now
              </button>
            </a>
          </div>
          <div className="flex flex-col justify-between w-full">
            <div className="flex items-center justify-center w-full h-full rounded-full">
              <img src={Gofood} alt="Gofood" className="w-full h-fit" />
            </div>
            <a href="/gofood" className="flex items-end justify-center w-full ">
              <button className="px-4 py-2 mt-6 text-sm font-bold text-white bg-blue-600 rounded-md hover:bg-blue-950 hover:text-white w-fit">
                Order Now
              </button>
            </a>
          </div>
          <div className="flex flex-col justify-between w-full">
            <div className="flex items-center justify-center w-full h-full rounded-full">
              <img src={ShopeeFood} alt="ShopeeFood" className="w-full h-fit" />
            </div>
            <a
              href="/shopeefood"
              className="flex items-end justify-center w-full "
            >
              <button className="px-4 py-2 mt-6 text-sm font-bold text-white bg-blue-600 rounded-md hover:bg-blue-950 hover:text-white w-fit">
                Order Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;