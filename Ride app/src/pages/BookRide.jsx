import React from "react";
import { useSelector } from "react-redux";
import { FaUsers, FaCalendarAlt, FaClock } from "react-icons/fa";

const BookRide = () => {
  // Fetch rides from Redux store
  const rides = useSelector((state) => state.rides.list);

  // Format date to "13 Feb 2023"
  const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(date).toLocaleDateString("en-GB", options); // "13 Feb 2023"
  };

  return (
    <div
      className="h-screen w-full relative bg-cover bg-center flex flex-col items-center"
      style={{
        backgroundImage:
          "url('Images/WhatsApp Image 2024-10-13 at 17.18.01 copy.jpeg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-black/80"></div>

      {/* Page Header */}
      <div className="relative z-10 w-full text-center text-white mt-10">
        <h2 className="text-4xl md:text-5xl font-bold">Available Rides</h2>
      </div>

      {/* Rides List Section */}
      <div className="relative z-10 w-full max-w-5xl px-4 mt-10 overflow-y-auto">
        {rides.length === 0 ? (
          <p className="text-xl text-gray-300 text-center">
            No rides available at the moment.
          </p>
        ) : (
          <div className="flex flex-col gap-6">
            {rides.map((ride, index) => (
              <div
                key={index}
                className="flex items-center bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:bg-blue-50 hover:shadow-xl"
              >
                {/* Ride Details */}
                <div className="p-6 w-full">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {ride.startPoint} → {ride.destination}
                  </h3>
                  <p className="text-lg text-gray-600 mt-2 flex items-center">
                    <FaCalendarAlt className="mr-2 text-blue-600" />{" "}
                    {formatDate(ride.date)} |{" "}
                    <FaClock className="ml-2 text-blue-600" /> {ride.time}
                  </p>
                  <p className="text-lg text-gray-600 mt-2 flex items-center">
                    <FaUsers className="mr-2 text-blue-600" /> {ride.seats} Seats
                    Available
                  </p>

                  {/* Book Button */}
                  <button className="mt-4 w-full bg-blue-600 text-white font-bold py-3 rounded-lg transition-all duration-300 hover:bg-blue-700">
                    Book This Ride
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookRide;
