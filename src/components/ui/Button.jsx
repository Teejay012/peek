import React from "react";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  onClick,
  icon,
}) => {
  const baseClasses =
    "font-medium rounded-full transition-all duration-200 flex items-center justify-center";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-teal-400 to-teal-500 text-white hover:shadow-lg hover:from-teal-500 hover:to-teal-600 active:scale-95",
    secondary:
      "bg-gradient-to-r from-purple-400 to-purple-500 text-white hover:shadow-lg hover:from-purple-500 hover:to-purple-600 active:scale-95",
    outline:
      "border-2 border-teal-400 text-teal-500 hover:bg-teal-50 active:scale-95",
    ghost: "text-gray-700 hover:bg-gray-100 active:scale-95",
  };

  const sizeClasses = {
    sm: "text-sm py-1 px-4",
    md: "text-base py-2 px-6",
    lg: "text-lg py-3 px-8",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass}`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
