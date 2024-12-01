import React from "react";

import Navbar from "../components/Navbar";
import OutletOnline from "../components/Outlet";
import Footer from "../components/Footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function GoFood() {
  return (
    <div>
      <Navbar />
      <div className="px-8 py-16 md:px-20">
        <div className="flex flex-row items-center gap-2 px-2 border-2 divide-x-2 rounded-lg header ">
          <div>
            <a
              href="/order"
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
                <a className="text-blue-600" href="/order">
                  Order Now
                </a>
              </li>
              <li>
                <a>GoFood Outlet</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex w-full mt-6 mb-8 OrderTitle">
          <h1 className="text-2xl font-bold text-blue-600">
            <span className="underline decoration-[3px] underline-offset-[6px] decoration-red-500">
              Go
            </span>
            Food Outlet
          </h1>
        </div>

        <OutletOnline />
      </div>
      <Footer />
    </div>
  );
}

export default GoFood;