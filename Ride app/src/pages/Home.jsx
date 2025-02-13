import React from "react";
import { Sidebar, Branding } from "../components"; // Import Branding Component
import { FaCarSide, FaUserFriends, FaShieldAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Branding Section */}
      <Branding />

      {/* Main Content Section */}
      <div className="flex flex-grow bg-blue-50 text-gray-800">
        <div className="flex-grow p-10 flex flex-col items-center">
          
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-center text-black">
            No Rides? <span className="text-blue-500">We got You!</span>
          </h1>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-8">
            
            {/* Card 1: Easy Ride Booking */}
            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
              <FaCarSide className="text-blue-600 text-5xl mb-4" />
              <h2 className="text-2xl font-semibold text-blue-700">Easy Ride Booking</h2>
              <p className="mt-2 text-gray-600">
                Quickly find and book rides to your destination with just a few clicks.
              </p>
            </div>

            {/* Card 2: Connect with Students */}
            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
              <FaUserFriends className="text-blue-600 text-5xl mb-4" />
              <h2 className="text-2xl font-semibold text-blue-700">Connect with Students</h2>
              <p className="mt-2 text-gray-600">
                Share rides with fellow students to save money and build connections.
              </p>
            </div>

            {/* Card 3: Safe & Secure */}
            <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
              <FaShieldAlt className="text-blue-600 text-5xl mb-4" />
              <h2 className="text-2xl font-semibold text-blue-700">Safe & Secure</h2>
              <p className="mt-2 text-gray-600">
                Enjoy verified rides with trusted users, ensuring a safe journey.
              </p>
            </div>

          </div>
        </div>

        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
