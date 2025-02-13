import React from "react";

const Input = ({ label, type = "text", className = "", ...props }) => {
  return (
    <div className="space-y-2">
      <label className="text-gray-700 font-medium">{label}</label>
      <input
        type={type}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
