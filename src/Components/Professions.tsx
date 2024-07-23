import React from "react";
import { BsChevronRight } from "react-icons/bs";

const professions = [
  { name: "Food & Beverage", img: "./food-inline-2.jpg" },
  { name: "Contractors", img: "./construction2inlin.png" },
  { name: "Retail", img: "./retail_inline.png" },
  { name: "Cleaning", img: "./Cleaning_inline.png" },
  { name: "Fitness", img: "./fitness-inline-2.jpg" },
  { name: "Amazon Sellers", img: "./amazon_inline.png" },
  { name: "Engineers & Architects", img: "./Archi_inline.png" },
  { name: "Entertainment", img: "./Entertainment_inline.png" },
];

const Professions: React.FC = () => {
  return (
    <div className="max-w-screen-4xl mx-auto p-4 md:p-6 mt-10 md:mt-20 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center mb-8">
        Tailored insurance by profession
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 cursor-pointer">
        {professions.map((profession) => (
          <div
            key={profession.name}
            className="md:w-[258px] h-54 group border rounded-lg overflow-hidden transition duration-300 hover:bg-customLightBlue"
          >
            <img
              src={profession.img}
              alt={profession.name}
              className="w-full h-2/3 p-3 object-cover"
            />
            <div className="pt-2 pl-4 pr-4">
              <p className="flex items-center gap-2">
                {profession.name} <BsChevronRight className="text-sm font-extralight" />
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-14 mb-10 group">
        <a href="#" className="border border-black rounded-full px-12 py-4 text-xl group-hover:bg-black group-hover:text-white transition">
          More Professions
        </a>
      </div>
    </div>
  );
};

export default Professions;
