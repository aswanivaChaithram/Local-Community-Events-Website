import React from 'react';
import communityImage from '../assets/community.jpg';

const Header = () => {
  return (
     <div className="flex flex-col md:flex-row items-center 
     justify-between px-4 sm:px-6 md:px-12 lg:px-20 xl:px-[100px] py-14">
    <div className="text-center md:text-left max-w-md sm:max-w-xl md:max-w-md lg:max-w-xl 
    space-y-4 md:mt-8">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
        Find <span className='text-blue-600'>events</span> close to you
      </h1>
      <p className="text-gray-600 text-md">
        Discover workshops, meetups, and fun activities near you.
      </p>
    </div>

    <div className="mt-10 md:mb-0">
      <img src={communityImage} alt="Events illustration" 
      className="w-75 sm:w-120 lg:w-160 h-auto mx-auto md:mx-0 lg:mt-8 rounded-md" />
    </div>

  </div>
  );
};

export default Header;
