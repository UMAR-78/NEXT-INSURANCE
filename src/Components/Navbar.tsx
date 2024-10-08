import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MdLanguage } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const timerRef = useRef<number | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timerRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 400); // Adjust the delay as needed
  };

  const handleLogout = () => {
    logout();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-screen-4xl mx-auto flex justify-between items-center py-4 px-6 md:px-6">
        <Link to="/" className="text-customLightBlue font-bold text-2xl md:text-4xl">
          NEXT
        </Link>
        <div className="hidden md:flex items-center justify-center space-x-7">
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('coverage')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="text-gray-900 text-xl hover:text-customBlue">
              Coverage
            </a>
            {activeDropdown === 'coverage' && (
              <div
                className="absolute top-full left-0 mt-6 w-48 bg-white border border-black shadow-lg rounded-lg"
                onMouseEnter={() => handleMouseEnter('coverage')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/business-insurance"
                  className="block px-4 py-2 text-gray-700 hover:text-customBlue"
                >
                  Business Insurance
                </Link>
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('insure')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="text-gray-900 text-xl hover:text-customBlue">
              Who We Insure
            </a>
            {activeDropdown === 'insure' && (
              <div
                className="absolute top-full left-0 mt-6 w-48 bg-white border border-black shadow-lg rounded-lg"
                onMouseEnter={() => handleMouseEnter('insure')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/auto-services"
                  className="block px-4 py-2 text-gray-700 hover:text-customBlue"
                >
                  Auto Services
                </Link>
              </div>
            )}
          </div>
          <a href="/pricing" className="text-gray-900 text-xl hover:text-customBlue">
            Pricing
          </a>
          <a href="#" className="text-gray-900 text-xl hover:text-customBlue">
            Partner
          </a>
          <a href="#" className="text-gray-900 text-xl hover:text-customBlue">
            Support
          </a>
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="text-gray-900 text-xl hover:text-customBlue">
              About Us
            </a>
            {activeDropdown === 'about' && (
              <div
                className="absolute top-full left-0 mt-6 w-48 bg-white border border-black shadow-lg rounded-lg"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/why-next"
                  className="block px-4 py-2 text-gray-700 hover:text-customBlue"
                >
                  Why Next?
                </Link>
              </div>
            )}
          </div>
          <a href="#" className="flex items-center gap-1 text-gray-900 text-xl">
            <MdLanguage /> ES
          </a>
          {isAuthenticated ? (
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('profile')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-black flex">
                <FaUserCircle className="text-2xl" />
              </button>
              {activeDropdown === 'profile' && (
                <div
                  className="absolute top-full right-0 mt-6 w-48 bg-white border border-black shadow-lg rounded-lg"
                  onMouseEnter={() => handleMouseEnter('profile')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:text-customBlue"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full px-4 py-2 text-gray-700 hover:text-customBlue text-left"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
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
          <button onClick={toggleMenu} className="text-black text-xl">
            <FiMenu />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-white border-t border-gray-300 md:hidden shadow-lg">
          <div className="flex flex-col items-center py-4">
            <a href="#" className="text-gray-900 text-xl hover:text-customBlue py-2">
              Coverage
            </a>
            <a href="#" className="text-gray-900 text-xl hover:text-customBlue py-2">
              Who We Insure
            </a>
            <a href="#" className="text-gray-900 text-xl hover:text-customBlue py-2">
              Certificate
            </a>
            <a href="#" className="text-gray-900 text-xl hover:text-customBlue py-2">
              Partner
            </a>
            <a href="#" className="text-gray-900 text-xl hover:text-customBlue py-2">
              Support
            </a>
            <a href="#" className="text-gray-900 text-xl hover:text-customBlue py-2">
              About Us
            </a>
            <a href="#" className="flex items-center gap-1 text-gray-900 text-xl py-2">
              <MdLanguage /> ES
            </a>
            {isAuthenticated ? (
              <>
                <button
                  className="text-black flex"
                  onMouseEnter={() => handleMouseEnter('profile')}
                  onMouseLeave={handleMouseLeave}
                >
                  <FaUserCircle className="text-3xl" />
                </button>
                {activeDropdown === 'profile' && (
                  <div
                    className="absolute top-[20rem] right-1 mt-2 w-48 bg-white border border-black shadow-lg rounded-lg"
                    onMouseEnter={() => handleMouseEnter('profile')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:text-customBlue"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-gray-700 hover:text-customBlue text-left"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <Link
                to="/login"
                className="text-gray-700 border border-gray-900 rounded-full px-4 py-1 transition duration-300 hover:bg-black hover:text-white py-2"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
