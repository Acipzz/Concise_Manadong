import React from "react";
import OutletIMG from "../assets/image 14.png";

function Outlet() {
  const outlets = [
    "Senopati, Petogogan",
    "Kebun Jeruk / Tanjung Duren",
    "Food Plaza PIK",
    "Kuningan - D’Kanteen",
    "Bintaro, Thelapan Square",
    "Gading Serpong",
    "Cipete",
    "Menteng",
  ];

  return (
    <>
      <div className="flex flex-col w-full md:flex-row">
        <div className="flex items-center justify-center w-full md:w-0">
          <img src={OutletIMG} alt="Outlet" className="w-full rounded-xl" />
        </div>
        <div className="flex flex-col justify-between w-full pt-5 md:pr-5 md:py-3 md:w-3/5">
          {outlets.map((outlet, index) => (
            <div
              key={index}
              className="flex justify-between w-full pb-2 border-b-2 border-slate-400"
            >
              <div>
                <h5 className="text-[0.75rem] md:text-md lg:text-lg">
                  {outlet}
                </h5>
              </div>
              <div>
                <h5 className="text-[0.75rem] text-red-500 cursor-pointer md:text-md lg:text-lg">
                  Purchase Here ➔
                </h5>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center w-0 md:w-2/5">
          <img src={OutletIMG} alt="Outlet" className="w-full rounded-xl" />
        </div>
      </div>
    </>
  );
}

export default Outlet;