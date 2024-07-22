import React from "react";

const featuredBrands = [
  { name: "Forbes", src: "./Forbes.svg" },
  { name: "Reuters", src: "./Reuters.svg" },
  { name: "CNN", src: "./CNN.svg" },
  { name: "The Wall Street Journal", src: "./TWSJ.svg" },
  { name: "CNBC", src: "./cnbc.svg" },
];

const FeaturedBrands: React.FC = () => {
  return (
    <div className="bg-black py-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center text-white gap-4">
        <span className="text-lg font-semibold">Featured On</span>
        {featuredBrands.map((brand) => (
          <img key={brand.name} src={brand.src} alt={brand.name} className="h-8 mx-4" />
        ))}
        <div className="flex items-center ml-auto">
          <span className="text-lg font-semibold">Rated 4.7/5</span>
          <div className="flex items-center ml-2">
            {/* {[...Array(5)].map((_, i) => (
            //   <FontAwesomeIcon key={i} icon={faStar} className="text-white mx-1" />
            ))} */}
          </div>
          <span className="text-sm ml-2">(5056 reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBrands;
