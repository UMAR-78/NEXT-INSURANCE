import React from "react";

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
    <div className="px-6">
      <h1 className="text-5xl font-extrabold text-center mb-4">
        WE’RE 100% DEDICATED TO SMALL BUSINESS.
      </h1>
      <p className="text-center text-3xl mb-6">
        Tailored business insurance. Zero hassle. Big savings.
      </p>
      <p className="text-center text-lg mb-6">
        Choose your primary coverage to get started:
      </p>
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-7">
          {options.map((option) => (
            <a
              href={option.link}
              key={option.name}
              className="group flex flex-col items-center p-4 border-2 border-gray-300 cursor-pointer rounded-lg transition duration-300 w-52 h-64 hover:border-customBlue"
            >
              <img
                src={option.icon}
                alt={option.name}
                className="w-36 h-36 grayscale group-hover:grayscale-0 transition duration-300"
              />
              <h2 className="text-sm font-semibold text-center  mb-4">
                {option.name}
              </h2>
              <button className="text-sm text-blue-600 border border-blue-600 rounded-full px-6 py-2 transition duration-300 group-hover:bg-customBlue group-hover:text-white">
                Get a Quote
              </button>
            </a>
          ))}
        </div>
        <a href="#" className="text-customBlue mt-4">Return to Quote</a>
      </div>
    </div>
  );
};

export default Hero;
