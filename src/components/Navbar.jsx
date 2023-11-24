import React from 'react';
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Left Side: Logo and Text */}
        <div className="flex items-center space-x-4">
          <img src="logo.png" alt="Logo" className="w-8 h-8" />
          <span className="text-lg text-white font-semibold">Rahat Commerce</span>
        </div>

        {/* Center: Search Bar */}
        <div className="flex-grow mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Product"
              className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button className="absolute inset-y-0 right-0 px-4 py-2 bg-blue-900 text-white rounded-md">
              Search
            </button>
          </div>
        </div>

        {/* Right Side: Icons */}
        <div className="flex items-center space-x-4">
          {/* Favorite Icon */}
          <span className="text-white">
            <FaHeart />
          </span>

          {/* Cart Icon */}
          <span className="text-white">
            <FaShoppingCart />
          </span>

          {/* User Icon */}
          <span className="text-white">
            <FaUser />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
