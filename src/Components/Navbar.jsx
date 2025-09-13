import React from 'react';
import logo from '../assets/logo.jpeg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-2 px-8 md:px-12
    lg:px-20 xl:px-[100px] w-full shadow-md">
      {/* Left side */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-12 h-12 md:w-14 md:h-14" />
        <span className="font-bold text-3xl md:text-4xl">EventNest</span>
      </Link>

      {/* Right side: Navigation links */}
      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className="text-gray-700 hover:text-gray-900 font-semibold
        text-xl">Home</Link>
        <Link to="/events" className="text-gray-700 hover:text-gray-900 font-semibold
        text-xl">Events</Link>

        <div className="relative">
          <Link to="/upcoming" className="bg-green-500 text-white px-4 py-2 rounded-full
           hover:bg-green-600 font-semibold">
            Upcoming
          </Link>

          <div className="absolute top-[-14px] right-0 w-5 h-5 bg-white rounded-full border
          border-green-500"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
