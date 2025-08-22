import React, { memo } from "react";

export const Logo = ({ size = "large" }) => {
  const sizeClasses = {
    small: "h-10",
    medium: "h-16",
    large: "h-24",
  };

  return (
    <div className={`flex flex-col items-center ${sizeClasses[size]}`}>
      <div className="relative">
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent">
          Peek
        </div>

        {/* Eyes animation */}
        <div
          className="absolute w-full flex justify-center"
          style={{ top: "-10px" }}
        >
          <div className="flex gap-4">
            <div className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-white rounded-full flex items-center justify-center shadow-md">
              <div className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-black rounded-full animate-pulse"></div>
            </div>
            <div className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 bg-white rounded-full flex items-center justify-center shadow-md">
              <div className="w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-black rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {size === "large" && (
        <p className="text-gray-600 text-lg mt-4">
          Test your memory with a twist!
        </p>
      )}
    </div>
  );
};
