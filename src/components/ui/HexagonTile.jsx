"use client";
import React from "react";

export const HexagonTile = ({
  front,
  back,
  flipped = false,
  onClick,
  size = "md",
  color = "#2DD4BF",
  disabled = false,
}) => {
  const sizeMap = {
    sm: { width: 60, height: 70 },
    md: { width: 80, height: 90 },
    lg: { width: 100, height: 115 },
  };

  const { width, height } = sizeMap[size];

  const baseStyle = {
    width: `${width}px`,
    height: `${height}px`,
    clipPath:
      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    backgroundColor: color,
  };

  const handleClick = () => {
    if (!disabled && onClick) onClick();
  };

  return (
    <div
      className="relative m-1"
      style={{ perspective: "600px" }}
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform ${
          flipped ? "rotate-y-180" : ""
        } ${disabled ? "opacity-70 cursor-default" : "cursor-pointer"}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 backface-hidden"
          style={baseStyle}
        >
          {front}
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex items-center justify-center shadow-md backface-hidden rotate-y-180"
          style={baseStyle}
        >
          {back}
        </div>
      </div>
    </div>
  );
};
