import React from "react";
import Hero from "./Hero";
import FeaturedBrands from "./FeaturedBrands";
import Professions from "./Professions";
import InsuranceSection from "./InsurranceSection";

const Home: React.FC = () => {
  return (
    <div className="mt-16 md:mt-32">
      <Hero />
      <FeaturedBrands />
      <Professions />
      <InsuranceSection />
    </div>
  );
};

export default Home;
