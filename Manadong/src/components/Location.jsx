import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const locations = [
  {
    title: "Senopati, Petogogan",
    description:
      "Santa Modern Market, Lt.1, Blok CKS 5, Jl. Cikpak I No.1, Petogogan, Jakarta Selatan",
  },
  {
    title: "Kebun Jeruk / Tanjung Duren",
    description:
      "Komplek Ruko GreenVille Maisonet Blok D Nomor 9, RT.7/RW.5, North Tanjung Duren, Jakarta Barat",
  },
  {
    title: "Food Plaza PIK",
    description:
      "Food Plaza PIK FMA-16, Kamal Muara, Penjaringan Jakarta Utara",
  },
  {
    title: "Kuningan - D'Kanteen",
    description: "D Kanteen, Jl. Komando Raya No.18, DKI Jakarta 12920",
  },
  {
    title: "Bintaro, Thelapan Square",
    description: "JL Jurang Mangu Bar. No.38, Kota Tangerang Selatan, Banten",
  },
  {
    title: "Gading Serpong",
    description:
      "Ruko Golden 8, Jl. Ki Hajar Dewantara Jl. Boulevard Raya Gading Serpong No. 25, Tangerang",
  },
  {
    title: "Cipete",
    description: "Jl. Cipete Raya No. 74c, RW.3, Cipete Jakarta Selatan 12410",
  },
  {
    title: "Menteng",
    description: "Jl H. Agus Salim No. 60, Menteng, Jakarta Pusat 10350",
  },
];

function Location() {
  return (
    <div className="px-20 py-10 bg-white">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-600 ml-14">
          <span className="underline decoration-[3px] underline-offset-[6px] decoration-red-500">
            Loc
          </span>
          ations
        </h1>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mx-14">
        {locations.map((promo, index) => (
          <div
            key={index}
            className="flex flex-col w-auro overflow-hidden bg-white border-2 rounded shadow-md md:flex-row"
          >
            <div className="w-full md:w-2/12">
              <div className="flex flex-col items-center justify-center h-full mb-3 md:mb-0">
                <div>
                  <FontAwesomeIcon
                    className="p-3 bg-red-500 rounded-md"
                    icon={faLocationDot}
                    style={{ color: "#FFFFFFFF" }}
                  />
                </div>
              </div>
            </div>
            <div className="w-full py-4 pl-3 pr-6 md:w-10/12">
              <div className="mb-2 text-xl font-bold text-blue-600">
                {promo.title}
              </div>
              <p className="text-base text-gray-700">{promo.description}</p>
              <div className="flex items-center gap-2 mt-3 underline decoration-2 underline-offset-4 decoration-red-500">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{ color: "#ff0000" }}
                />
                <h3 className="font-bold text-red-500">View Map</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Location;