import React from 'react';
import { FaBell, FaCloudSun } from 'react-icons/fa';

function Header() {
  return (
    <header className="bg-gray-200 p-4 shadow-md flex justify-between items-center">
      <div className="flex items-center">
        <FaCloudSun className="w-8 h-8 mr-2 text-yellow-500" />
        <h1 className="text-2xl font-bold">Weather App</h1>
      </div>
      <div>
        <button className="relative">
          <FaBell className="w-6 h-6 text-red-600" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
