import React from "react";
import { Link } from "react-router-dom";

const AutoServicesSection: React.FC = () => {
  return (
    <>
    <div className="max-w-screen-4xl mx-auto p-4 md:px-6 mt-16 md:mt-32">
      <section className="min-h-screen bg-[#c2ffab] mt-20 flex flex-col md:gap-16 md:flex-row items-center justify-center py-16 px-8 md:px-16">
        <div className="md:w-[67%] flex justify-center mb-8 md:mb-0">
          <img
            src="./Flamingo_Auto_1474x984.jpg"
            alt="Auto Services"
            className=""
          />
        </div>
        <div className="md:w-1/2 flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tune up your business with customized auto service insurance
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            NEXT’s auto service and repair insurance provides tailored coverage
            at an affordable price for car wash, repair shop or body shop
            businesses.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Whether you’re opening your first location or expanding your
            services, we’ll help you quickly get set up online so you don’t need
            to pump the brakes on your business.
          </p>
          <a
            href="#"
            className="bg-customBlue text-white rounded-full px-4 py-1 text-lg font-semibold transition duration-300 hover:bg-customLightBlue"
          >
            Get Instant Quote
          </a>
        </div>
      </section>
      <section className="bg-white py-16 px-8 md:px-16 text-center">
        <h2 className="text-xl md:text-xl font-bold text-gray-900 mb-4">
          We specialize in insurance for auto service and repair trades
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Choose your line of work to find out more
        </p>
        <div className="flex flex-wrap justify-center space-x-2 text-[#6d6e71] text-2xl md:text-4xl  mb-8">
          <Link
            to="/auto-body-shop"
            className=" hover:text-customLightBlue  transition duration-300"
          >
            Auto Body Shop
          </Link>
          ,
          <Link
            to="/auto-parts-store"
            className="hover:text-[#ff32a0] transition duration-300"
          >
            Auto Parts Store
          </Link>
          ,
          <Link
            to="/auto-repair-shop"
            className="hover:text-[#ff4100] transition duration-300"
          >
            Auto Repair Shop
          </Link>
          ,
          <Link
            to="/car-wash"
            className="hover:text-[#dcf000] transition duration-300"
          >
            Car Wash
          </Link>
          ,
          <Link
            to="/oil-change-station"
            className="hover:text-[#00e650] transition duration-300"
          >
            Oil Change Station
          </Link>
          ,
          <Link
            to="/tire-shop"
            className="hover:text-customBlue transition duration-300"
          >
            Tire Shop
          </Link>
        </div>
        <a
          href="#"
          className="text-black border border-black rounded-full px-4 py-1 text-lg font-semibold transition duration-300 hover:bg-black hover:text-white inline-flex items-center"
        >
          Get Instant Quote
          <span className="ml-2">→</span>
        </a>
      </section>
      <section className="bg-[#e5feff] flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-16">
        <div className="md:w-[64%] flex flex-col items-start md:mr-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why do auto service and repair businesses need business insurance?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Auto service and repair business insurance gives you peace of mind
            while you’re working on cars. A lot can go wrong when you deal with
            large, expensive and complex machinery.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            For example, a mechanic could accidentally damage a customer’s car
            or someone might file a lawsuit claiming you did shoddy work.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Having the right types of insurance for your shop or car wash means
            you won’t have to pay entirely out of pocket if an accident does
            happen.
          </p>
          <a
            href="#"
            className="bg-blue-500 text-white rounded-full px-4 py-1 text-lg font-semibold transition duration-300 hover:bg-blue-700 inline-flex items-center"
          >
            Get Instant Quote
          </a>
        </div>
        <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
          <img
            src="./dedicated-1.png"
            alt="Business Insurance"
            className=""
          />
        </div>
      </section>
      </div>
    </>
  );
};

export default AutoServicesSection;
