import React from "react";
import Hero from "./Hero";
import FeaturedBrands from "./FeaturedBrands";
import Professions from "./Professions";

const Home: React.FC = () => {
  return (
    <div className="mt-32">
      <Hero />
      <FeaturedBrands />
      <Professions />
    </div>
  );
};

export default Home;
