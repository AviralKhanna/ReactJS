import React, { useState, useEffect } from "react";

const ModeSelector = () => {
  const [mode, setMode] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) setMode("Morning Mode ☀️");
    else if (hour >= 12 && hour < 18) setMode("Day Mode 🌤️");
    else if (hour >= 18 && hour < 21) setMode("Evening Mode 🌆");
    else setMode("Night Mode 🌙");
  }, []);

  return (
    <div className="cursor-pointer hover:text-blue-500">
      <p className="font-semibold">Mode: {mode}</p>
    </div>
  );
};

export default ModeSelector;
