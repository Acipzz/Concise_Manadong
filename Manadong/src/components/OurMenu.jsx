import React, { useState } from "react";

// import images menu
import AyamRica from "../assets/Ayam Rica.png";
import CumiHitam from "../assets/Cumi Hitam.png";
import CakalangTinorasak from "../assets/Cakalang Tinorasak.png";
import PerkedelJagung from "../assets/Perkedel.png";
import AyamWoku from "../assets/Ayam Woku.png";
import LaukFrozen from "../assets/Frozen.png";
import CakalangRabe from "../assets/Cakalang Rambe.png";

const Items = [
  {
    id: 1,
    name: "Ayam Rica",
    image: AyamRica,
    description:
      "Steamed Rice, 2 pieces of corn fritters, and spicy fried chicken.",
    price: "Rp. 40,000",
  },
  {
    id: 2,
    name: "Cumi Hitam",
    image: CumiHitam,
    description:
      "Steamed Rice, 2 pieces of corn fritters, and squid with black sauce.",
    price: "Rp. 40,000",
  },
  {
    id: 3,
    name: "Cakalang Tinorasak",
    image: CakalangTinorasak,
    description:
      "Steamed Rice, 2 pieces of corn fritters, and Cakalang Tinorasak.",
    price: "Rp. 40,000",
  },
  {
    id: 4,
    name: "Perkedel Jagung",
    image: PerkedelJagung,
    description:
      "Steamed Rice, 2 pieces of corn fritters, and Perkedel Jagung.",
    price: "Rp. 40,000",
  },
  {
    id: 5,
    name: "Ayam Woku",
    image: AyamWoku,
    description: "Steamed Rice, 2 pieces of corn fritters, and Ayam Woku.",
    price: "Rp. 40,000",
  },
  {
    id: 6,
    name: "Lauk Frozen",
    image: LaukFrozen,
    description: "Frozen side dishes that are ready to be cooked.",
    price: "Rp. 40,000",
  },
  {
    id: 7,
    name: "Cakalang Rabe",
    image: CakalangRabe,
    description: "Steamed Rice, 2 pieces of corn fritters, and Cakalang Rabe.",
    price: "Rp. 40,000",
  },
];

function OurMenu() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  
    const openPopup = (item) => {
      setSelectedMenuItem(item);
      setIsPopupOpen(true);
    };
  
    const closePopup = () => {
      setIsPopupOpen(false);
      setSelectedMenuItem(null);
    };
  
    return (
      <div className="flex flex-col w-full px-3 pt-10 pb-5 md:px-20" id="Menu">
        {/* Bagian judul dan daftar menu */}
        <div className="flex w-full mb-6 ">
          <h1 className="text-2xl font-bold text-blue-600">
            <span className="underline decoration-[3px] underline-offset-[6px] decoration-red-500">
              Our
            </span>{' '}
            Menu
          </h1>
        </div>
        <div className="grid grid-flow-row grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 MenuList">
          {Items.map((item) => (
            <div key={item.id} className={`Menu${item.id}`}>
              <button
                className="w-full text-sm font-bold text-black transition-all duration-150 rounded-md outline-none hover:shadow-lg focus:outline-none"
                type="button"
                onClick={() => openPopup(item)}
              >
                <img src={item.image} className="w-full" alt={item.name} />
                <h1 className="mt-2">{item.name}</h1>
              </button>
            </div>
          ))}
        </div>
  
        {/* Popup */}
        {isPopupOpen && selectedMenuItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-sm  mx-auto my-6">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">   
  
                <button
                  className="absolute top-0 right-0 m-4 text-gray-400 hover:text-gray-900"
                  onClick={closePopup}
                >
                <svg width="24" height="24" viewBox="0 0 24 24">
                    <rect width="100%" height="100%" fill="white" />
                    <path d="M18 6L6 18M6 6l12 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </button>
                <img
                  src={selectedMenuItem.image}   
  
                  className="w-full h-[90%] object-cover"
                  alt={selectedMenuItem.name}
                />
                <div className="p-4">
                  <h1 className="text-lg font-bold">{selectedMenuItem.name}</h1>
                  <p className="text-sm">{selectedMenuItem.description}</p>
                  <p className="font-bold text-red-500">{selectedMenuItem.price}</p>
                </div>
              </div>
            </div>
          </div>
        )}
  
        {/* Tombol Order Now */}
        <div className="flex justify-center">
          <a href="/order">
            <button className="px-4 py-2 mt-6 font-bold text-blue-600 bg-transparent border-2 border-blue-500 rounded-md hover:bg-blue-500 hover:text-white">
              Order Now
            </button>
          </a>
        </div>
      </div>
    );
  }
  
  export default OurMenu;