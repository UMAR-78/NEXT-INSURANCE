import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MdLanguage } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const timerRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = window.setTimeout(() => {
      setIsDropdownVisible(false);
    }, 100); // Adjust the delay as needed
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white">
      <div className="max-w-screen-4xl mx-auto flex justify-between items-center py-4 px-6 md:px-6">
        <Link to='/' className="text-customLightBlue font-bold text-2xl md:text-4xl">
          NEXT
        </Link>
        <div className="hidden md:flex items-center justify-center space-x-7">
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="text-gray-900 text-xl hover:text-customBlue">
              Coverage
            </a>
            {isDropdownVisible && (
              <div
                className="absolute top-full left-0 mt-6 w-48 bg-white border border-black shadow-lg rounded-lg"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/business-insurance" // Change this to the URL of the new page
                  className="block px-4 py-2 text-gray-700 hover:text-customBlue"
                >
                  Business Insurance
                </Link>
              </div>
            )}
          </div>
          <a href="#" className="text-gray-900 text-xl hover:text-customBlue">
            Who We Insure
          </a>
          <a href="#" className="text-gray-900 text-xl hover:text-customBlue">
            Certificate
          </a>
          <a href="#" className="text-gray-900 text-xl hover:text-customBlue">
            Partner
          </a>
          <a href="#" className="text-gray-900 text-xl hover:text-customBlue">
            Support
          </a>
          <a href="#" className="text-gray-900 text-xl hover:text-customBlue">
            About Us
          </a>
          <a href="#" className="flex items-center gap-1 text-gray-900 text-xl">
            <MdLanguage /> ES
          </a>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="text-gray-700 border border-gray-900 rounded-full px-4 py-1 transition duration-300 hover:bg-black hover:text-white"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-gray-700 border border-gray-900 rounded-full px-4 py-1 transition duration-300 hover:bg-black hover:text-white"
            >
              Login
            </Link>
          )}
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
