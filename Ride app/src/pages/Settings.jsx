import React, { useState } from "react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [isCollegeStudent, setIsCollegeStudent] = useState(false);
  const [formData, setFormData] = useState({
    avatar: null,
    firstName: "",
    lastName: "",
    sapId: "",
    year: "",
    course: "",
    frequentPlaces: ["", "", "", "", ""],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePlaceChange = (index, value) => {
    const updatedPlaces = [...formData.frequentPlaces];
    updatedPlaces[index] = value;
    setFormData({ ...formData, frequentPlaces: updatedPlaces });
  };

  return (
    <div className="min-h-screen flex bg-blue-50">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-blue-900 text-white p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-8">Settings</h2>
          <ul className="space-y-6">
            {["Profile", "Modes", "Verify College ID", "FAQs"].map((item) => (
              <li
                key={item}
                className={`cursor-pointer text-lg py-2 px-4 rounded-lg transition ${
                  activeTab === item ? "bg-blue-500 text-white" : "hover:bg-blue-700"
                }`}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Sign Out Button */}
        <div className="mt-6">
          <button className="w-full py-3 text-lg bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition">
            Sign Out
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className="w-3/4 p-10 bg-gradient-to-r from-white to-blue-100 rounded-l-lg">
        <h2 className="text-4xl font-bold text-blue-800 mb-6">{activeTab}</h2>

        {/* Profile Section */}
        {activeTab === "Profile" && (
          <div className="space-y-6">
            {/* Avatar Upload */}
            <div>
              <label className="block text-lg font-semibold mb-2">Upload Avatar:</label>
              <input
                type="file"
                accept="image/*"
                className="p-2 border border-gray-300 rounded-lg w-full bg-white"
                onChange={(e) => setFormData({ ...formData, avatar: e.target.files[0] })}
              />
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-lg font-semibold mb-2">First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-lg w-full bg-white"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-2">Last Name:</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="p-2 border border-gray-300 rounded-lg w-full bg-white"
                />
              </div>
            </div>

            {/* College Student Yes/No */}
            <div>
              <label className="block text-lg font-semibold mb-2">Are you a college student?</label>
              <div className="flex space-x-6">
                <button
                  className={`px-6 py-2 rounded-lg text-lg font-semibold transition ${
                    isCollegeStudent ? "bg-blue-600 text-white" : "bg-gray-300 text-black"
                  }`}
                  onClick={() => setIsCollegeStudent(true)}
                >
                  Yes
                </button>
                <button
                  className={`px-6 py-2 rounded-lg text-lg font-semibold transition ${
                    !isCollegeStudent ? "bg-blue-600 text-white" : "bg-gray-300 text-black"
                  }`}
                  onClick={() => setIsCollegeStudent(false)}
                >
                  No
                </button>
              </div>
            </div>

            {/* College Student Details */}
            {isCollegeStudent && (
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-lg font-semibold mb-2">SAP ID:</label>
                  <input
                    type="text"
                    name="sapId"
                    value={formData.sapId}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 rounded-lg w-full bg-white"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-2">Year:</label>
                  <input
                    type="text"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 rounded-lg w-full bg-white"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-2">Course:</label>
                  <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    className="p-2 border border-gray-300 rounded-lg w-full bg-white"
                  />
                </div>
              </div>
            )}

            {/* Top 5 Frequently Visiting Places */}
            <div>
              <label className="block text-lg font-semibold mb-2">Top 5 Frequently Visiting Places:</label>
              {formData.frequentPlaces.map((place, index) => (
                <input
                  key={index}
                  type="text"
                  value={place}
                  onChange={(e) => handlePlaceChange(index, e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg w-full bg-white mb-2"
                  placeholder={`Place ${index + 1}`}
                />
              ))}
            </div>

            {/* Save Button */}
            <button className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg font-semibold hover:bg-green-600 transition">
              Save Changes
            </button>
          </div>
        )}

        {/* FAQs Section */}
        {activeTab === "FAQs" && (
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <details className="bg-white p-4 rounded-lg shadow-md">
                <summary className="font-semibold cursor-pointer text-lg text-blue-600">How does ride-sharing work?</summary>
                <p className="mt-2 text-gray-600">
                  Simply create or book a ride, connect with verified users, and enjoy a safe journey.
                </p>
              </details>
              <details className="bg-white p-4 rounded-lg shadow-md">
                <summary className="font-semibold cursor-pointer text-lg text-blue-600">Is my data secure?</summary>
                <p className="mt-2 text-gray-600">
                  Yes, we prioritize user privacy and security with end-to-end encryption.
                </p>
              </details>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
