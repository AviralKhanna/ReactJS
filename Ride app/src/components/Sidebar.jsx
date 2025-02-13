import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const rides = useSelector((state) => state.rides.list); // Fetch rides from Redux state

  // Function to format date as "12 Feb 2025"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  return (
    <aside className="w-96 h-screen bg-blue-800 text-white p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Available Rides</h2>
      <div className="space-y-4">
        {rides.length > 0 ? (
          rides.map((ride, index) => (
            <div key={index} className="p-4 bg-blue-500 rounded-lg shadow-lg">
              {/* Destination and Time Row */}
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold">{ride.startPoint} ➝ {ride.destination}</p>
                <p className="text-md font-medium text-gray-300">{ride.time}</p>
              </div>
              {/* Seats Available and Date Row */}
              <div className="flex justify-between items-center text-md text-gray-300">
                <p>Seats Available: {ride.seats}</p>
                <p>{formatDate(ride.date)}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-300">No rides available.</p>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
