import React from "react";

const Logo = ({ className = "" }) => {
  return (
    <div className={`w-24 h-24 rounded-full overflow-hidden ${className}`}>
      <img src="Images/WhatsApp Image 2024-10-13 at 17.18.01 copy.jpeg" alt="Ride App Logo" className="w-full h-full object-cover" />
    </div>
  );
};

export default Logo;
