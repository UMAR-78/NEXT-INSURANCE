import React from "react";
import { BsChevronRight } from "react-icons/bs";

const options = [
  {
    name: "General Liability",
    icon: "./lob-selector-gl-color_hover.png",
    link: "#",
  },
  {
    name: "Workers’ Compensation",
    icon: "./lob-selector-wc-color_hover.png",
    link: "#",
  },
  {
    name: "Business Owner’s Policy",
    icon: "./lob-selector-bop-color_hover.png",
    link: "#",
  },
  {
    name: "Professional Liability",
    icon: "./lob-selector-pl-color_hover.png",
    link: "#",
  },
  {
    name: "Other Coverages",
    icon: "./lob-selector-um-color_hover.png",
    link: "#",
  },
];

const Hero: React.FC = () => {
  return (
    <div className="max-w-screen-4xl mx-auto p-4 md:px-6">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center mb-4 md:leading-none leading-9">
        WE’RE 100% DEDICATED TO SMALL BUSINESS.
      </h1>
      <p className="text-center text-xl sm:text-2xl md:text-3xl mb-6">
        Tailored business insurance. Zero hassle. Big savings.
      </p>
      <p className="text-center text-base sm:text-lg md:text-xl mb-6">
        Choose your primary coverage to get started:
      </p>
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-2">
          {options.map((option) => (
            <a
              href={option.link}
              key={option.name}
              className="group flex items-center md:flex-col justify-between p-2 md:p-4 border-2 border-gray-300 cursor-pointer rounded-lg transition duration-300 w-64 md:w-52 lg:w-56 md:h-64 hover:border-customBlue"
            >
              <img
                src={option.icon}
                alt={option.name}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 grayscale group-hover:grayscale-0 transition duration-300"
              />
              <div className="flex flex-col ml-6 md:ml-0 justify-between w-full">
                <h2 className="text-lg sm:text-base md:text-sm font-semibold md:text-center mb-4">
                  {option.name}
                </h2>
                <button className="hidden md:block text-sm text-blue-600 border border-blue-600 rounded-full px-6 py-2 transition duration-300 group-hover:bg-customBlue group-hover:text-white">
                  Get a Quote
                </button>
              </div>
              <BsChevronRight className="block md:hidden text-2xl" />
            </a>
          ))}
        </div>
        <a href="#" className="text-customBlue mt-4">
          Return to Quote
        </a>
      </div>
    </div>
  );
};

export default Hero;
