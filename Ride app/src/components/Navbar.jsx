import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo"; // Ensure Logo component exists and is correct

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-10 flex items-center justify-between shadow-lg">
      {/* Left Section - Logo & Navigation */}
      <div className="flex items-center space-x-8">
        <Link to="/" className="rounded-full overflow-hidden w-14 h-14 bg-gray-800 flex items-center justify-center">
          <Logo />
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-lg font-medium">
          <Link to="/create-ride" className="hover:text-blue-400 transition duration-200">
            Create Ride
          </Link>
          <Link to="/book-ride" className="hover:text-blue-400 transition duration-200">
            Book Ride
          </Link>
          <Link to="/settings" className="hover:text-blue-400 transition duration-200">
            Settings
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition duration-200">
            Contact
          </Link>
        </div>
      </div>

      {/* Right Section - Auth Buttons */}
      <div className="flex space-x-4">
        <Link to="/login" className="px-5 py-2 rounded-md bg-blue-200 text-black font-bold hover:bg-blue-400 transition duration-200">
          Sign In
        </Link>
        <Link to="/signup" className="px-5 py-2 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-500 transition duration-200">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
