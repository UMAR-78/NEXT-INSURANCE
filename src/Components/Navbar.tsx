import React from "react";
import { MdLanguage } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white ">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-6 md:px-8">
        <a href="#" className="text-customLightBlue font-bold text-2xl md:text-4xl">
          NEXT
        </a>
        <div className="hidden md:flex items-center justify-center space-x-7">
          <a href="#" className="text-gray-900 text-lg hover:text-customBlue">
            Coverage
          </a>
          <a href="#" className="text-gray-900 text-lg hover:text-customBlue">
            Who We Insure
          </a>
          <a href="#" className="text-gray-900 text-lg hover:text-customBlue">
            Certificate
          </a>
          <a href="#" className="text-gray-900 text-lg hover:text-customBlue">
            Partner
          </a>
          <a href="#" className="text-gray-900 text-lg hover:text-customBlue">
            Support
          </a>
          <a href="#" className="text-gray-900 text-lg hover:text-customBlue">
            About Us
          </a>
          <a href="#" className="flex items-center gap-1 text-gray-900">
            <MdLanguage /> ES
          </a>
          <a
            href="#"
            className="text-gray-700 border border-gray-900 rounded-full px-4 py-1 transition duration-300 hover:bg-black hover:text-white"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-customBlue transition-all text-white rounded-full px-4 py-1 hover:bg-customLightBlue"
          >
            Get Instant Quote
          </a>
          <a href="#" className="text-customLightBlue">
            <IoSearchOutline className="text-customLightBlue" />
          </a>
        </div>
        <div className="flex items-center space-x-4 md:hidden">
          <button className="bg-customBlue text-white px-3 py-1 rounded-full text-sm font-semibold hover:bg-customLightBlue transition">
            Get Instant Quote
          </button>
          <IoSearchOutline className="text-black text-xl" />
          <FiMenu className="text-black text-xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
