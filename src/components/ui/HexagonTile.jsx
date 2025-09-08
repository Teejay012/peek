"use client";
import React from "react";

export const HexagonTile = ({
  children,
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

  return (
    <div
      className={`flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ${
        disabled ? "opacity-70 cursor-default" : "cursor-pointer"
      }`}
      style={baseStyle}
      onClick={!disabled ? onClick : undefined}
    >
      {children}
    </div>
  );
};
