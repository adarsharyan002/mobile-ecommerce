'use client'

import { useState } from 'react';
import { FaAlignJustify } from "react-icons/fa6";

interface NavbarProps {
  // Add any necessary props here
}

const Navbar: React.FC<NavbarProps> = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white">
      <header>
        <div className="container mx-auto px-6 ">
          <div className="flex items-center justify-between">
            <div className="hidden w-full text-gray-600 md:flex md:items-center">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* ... SVG path ... */}
              </svg>
            </div>
            <div className="w-full flex justify-center content-center text-gray-700 md:text-center text-2xl font-semibold">
              Mobile 
            </div>
            <div className="flex items-center justify-end w-full">
              <button
                onClick={() => setCartOpen(!cartOpen)}
                className="text-gray-600 focus:outline-none mx-4 sm:mx-0"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* ... SVG path ... */}
                </svg>
              </button>

              <div className="flex sm:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500 text-2xl"
                  aria-label="toggle menu"
                >
                  
                  <FaAlignJustify/>
                </button>
              </div>
            </div>
          </div>
          <nav className={isOpen ? 'sm:flex sm:justify-center sm:items-center mt-4' : 'hidden sm:flex sm:justify-center sm:items-center mt-4'}>
            <div className="flex flex-col sm:flex-row">
              <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">
                Home
              </a>
              <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">
                Shop
              </a>
              <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">
                Categories
              </a>
              <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">
                Contact
              </a>
              <a className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0" href="#">
                About
              </a>
            </div>
          </nav>
          <div className="relative mt-6 max-w-lg mx-auto">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <svg
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
              >
                {/* ... SVG path ... */}
              </svg>
            </span>

          
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
