import React from "react";
import Hero from "./Hero";
import FeaturedBrands from "./FeaturedBrands";

const Home: React.FC = () => {
  return (
    <div className="mt-32">
      <Hero />
      <FeaturedBrands />

    </div>
  );
};

export default Home;
