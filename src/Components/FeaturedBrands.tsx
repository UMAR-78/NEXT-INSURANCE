import React from "react";
import { IoStarHalfOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";

const featuredBrands = [
  { name: "Forbes", src: "./Forbes.svg" },
  { name: "Reuters", src: "./Reuters.svg" },
  { name: "CNN", src: "./CNN.svg" },
  { name: "The Wall Street Journal", src: "./TWSJ.svg" },
  { name: "CNBC", src: "./cnbc.svg" },
];

const FeaturedBrands: React.FC = () => {
  return (
    <div className="bg-[#231f20] py-4 mt-12">
      <div className="px-10 flex flex-wrap justify-center items-center text-white gap-4">
        <span className="text-lg font-semibold">Featured On</span>
        {featuredBrands.map((brand) => (
          <img
            key={brand.name}
            src={brand.src}
            alt={brand.name}
            className="h-10 mx-4"
          />
        ))}
        <div className="flex items-center">
          <div className="flex items-center">
            {[...Array(4)].map((_, i) => (
              <IoStar key={i} className="text-white " />
            ))}
            <IoStarHalfOutline className="text-white " />
          </div>
          <div className="flex flex-col items-center ml-4">
            <span className="text-sm">Rated 4.7/5</span>
            <span className="text-base">(5056 reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBrands;
