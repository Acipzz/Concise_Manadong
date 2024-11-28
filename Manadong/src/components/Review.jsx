import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const reviews = [
  {
    name: "Jennifer",
    text: "Such a good value for your money. Really good Manadonese Food. Well recommended!",
  },
  {
    name: "A********a",
    text: "Cakalangnya terbaikkkkkkk, the best cakalang everrrr",
  },
  {
    name: "Nadia",
    text: "Dari semua menu manadong, ini kesukaan suami saya. Ngebantu gak sempet masak. Tinggal masak nasi, microwave ayam rica trs BUDUM DUNG TESS.. beres deh tanggung jawab",
  },
];

export default function Review() {
  return (
    <div className="px-20 py-10 bg-slate-300">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-600 ml-14">
          <span className="underline decoration-[3px] underline-offset-[6px] decoration-red-500">
            Revi
          </span>
          ews
        </h1>
      </div>
      <div className="flex space-x-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="px-10 py-2 bg-white rounded-md h-fit flex-1 relative ml-14"
          >
            <div className="flex flex-col">
              <div className="absolute top-2 left-2">
                <FontAwesomeIcon
                  icon={faQuoteRight} 
                  size="2xl"
                  style={{ color: "#FFD43B" }}
                  aria-hidden="true"
                />
              </div>
              <div className="flex flex-col p-1">
                <h1 className="font-bold text-blue-600 text-md mb-2 mt-8">
                  {review.name}
                </h1>
                <p className="mb-8">{review.text}</p>
              </div>
              <div className="absolute bottom-2 right-2">
                <FontAwesomeIcon
                  icon={faQuoteLeft} 
                  size="2xl"
                  style={{ color: "#FFD43B" }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
