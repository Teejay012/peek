import React from "react";

export const Card = ({ children, className = "", highlighted = false }) => {
  return (
    <div
      className={`
        bg-white rounded-2xl p-5 shadow-md mt-20
        ${highlighted ? "border-2 border-teal-400 shadow-teal-100" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};
