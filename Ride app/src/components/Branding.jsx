import React from "react";
import { FaRoad } from "react-icons/fa"; // Placeholder icon for logo

const Branding = () => {
  return (
    <div className="relative w-full bg-blue-200 text-white flex items-center justify-between py-40">
      {/* Large Logo */}
      <div className="flex items-center space-x-4">
        <FaRoad className="px-5 text-9xl text-blue-900" /> {/* Replace with actual logo */}
        <h1 className="text-black text-7xl font-bold">RideConnect</h1>
      </div>

      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('Images/WhatsApp Image 2024-10-13 at 17.18.01 copy.jpeg')" }} // Replace with actual image
      ></div>

      {/* Motto */}
      <div className="relative text-right">
        <h2 className="text-black text-5xl font-semibold px-5">"Connecting Rides, Connecting People"</h2>
      </div>
    </div>
  );
};

export default Branding;
