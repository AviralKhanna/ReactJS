import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRide } from "../redux/slices/RideSlice";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaUsers, FaCalendarAlt, FaClock } from "react-icons/fa";

const CreateRide = () => {
  const [form, setForm] = useState({
    startPoint: "",
    destination: "",
    date: "",
    time: "",
    seats: 1,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRide(form));
    navigate("/");
  };

  return (
    <div className="h-screen w-full relative bg-cover bg-center"
         style={{ backgroundImage: "url('/your-background-image.jpg')" }}>
      
      {/* Darker Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-black/80"></div>

      {/* Ride Creation Section */}
      <div className="relative z-10 h-1/2 flex flex-col justify-center px-10 text-white w-full">
        <h2 className="text-5xl font-bold mb-8 text-center text-white">Create Your Ride</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          <div className="flex items-center bg-black/50 p-4 rounded-lg text-lg">
            <FaMapMarkerAlt className="text-gray-300 mr-3" />
            <input type="text" name="startPoint" placeholder="Start Point" required 
                   onChange={handleChange} className="w-full bg-transparent outline-none text-gray-200 placeholder-gray-400" />
          </div>

          <div className="flex items-center bg-black/50 p-4 rounded-lg text-lg">
            <FaMapMarkerAlt className="text-gray-300 mr-3" />
            <input type="text" name="destination" placeholder="Destination" required 
                   onChange={handleChange} className="w-full bg-transparent outline-none text-gray-200 placeholder-gray-400" />
          </div>

          <div className="flex items-center bg-black/50 p-4 rounded-lg text-lg">
            <FaCalendarAlt className="text-gray-300 mr-3" />
            <input type="date" name="date" required 
                   onChange={handleChange} className="w-full bg-transparent outline-none text-gray-200" />
          </div>

          <div className="flex items-center bg-black/50 p-4 rounded-lg text-lg">
            <FaClock className="text-gray-300 mr-3" />
            <input type="time" name="time" required 
                   onChange={handleChange} className="w-full bg-transparent outline-none text-gray-200" />
          </div>

          <div className="flex items-center bg-black/50 p-4 rounded-lg col-span-2 text-lg">
            <FaUsers className="text-gray-300 mr-3" />
            <input type="number" name="seats" min="1" placeholder="Seats Available" required 
                   onChange={handleChange} className="w-full bg-transparent outline-none text-gray-200 placeholder-gray-400" />
          </div>

          <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 text-lg rounded-lg col-span-2">
            Create Ride
          </button>
        </form>
      </div>

      {/* Website Advantages Section */}
      <div className="relative z-10 h-1/2 flex flex-col justify-center items-center text-white px-10 bg-gradient-to-t from-black to-transparent w-full">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Why Choose Us?</h2>
        
        {/* Advantage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          
          {/* Card 1 - Cost Savings */}
          <div className="h-80 flex flex-col justify-center items-center bg-cover bg-center rounded-lg text-center p-6 relative text-white"
               style={{ backgroundImage: "url('Images/WhatsApp Image 2024-10-13 at 17.18.01 copy.jpeg')" }}>
            <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            <h3 className="text-3xl font-bold relative z-10">Save Money</h3>
            <p className="text-lg relative z-10 mt-2">Split your travel costs and save big with carpooling.</p>
          </div>

          {/* Card 2 - Eco-Friendly */}
          <div className="h-80 flex flex-col justify-center items-center bg-cover bg-center rounded-lg text-center p-6 relative text-white"
               style={{ backgroundImage: "url('Images/WhatsApp Image 2024-10-13 at 17.18.01 copy.jpeg')" }}>
            <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            <h3 className="text-3xl font-bold relative z-10">Go Green</h3>
            <p className="text-lg relative z-10 mt-2">Reduce carbon footprint by sharing your ride.</p>
          </div>

          {/* Card 3 - Community */}
          <div className="h-80 flex flex-col justify-center items-center bg-cover bg-center rounded-lg text-center p-6 relative text-white"
               style={{ backgroundImage: "url('Images/WhatsApp Image 2024-10-13 at 17.18.01 copy.jpeg')" }}>
            <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            <h3 className="text-3xl font-bold relative z-10">Meet New People</h3>
            <p className="text-lg relative z-10 mt-2">Connect with fellow students & commuters.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreateRide;
