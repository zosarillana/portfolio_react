// Preloader.jsx

import React from "react";

const Preloader = () => {
  const textStyle = {
    animation: "wave 1s ease-in-out infinite", // Reference the keyframe animation
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center bg-gray-50">
        <img src="/walking.gif" alt="Loading..." className="w-60 h-60 mb-5" />
        <div className="spinner w-50 h-50 rounded-full mb-4"></div>
        <p
          className="text-center font-bold text-2xl text-black"
          style={textStyle}>
          walking and loading...
        </p>
      </div>
    </div>
  );
};

export default Preloader;
