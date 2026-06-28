import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false, 
  onClick, 
  type = 'button',
  icon = null
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 border border-transparent",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500 border border-transparent",
    outline: "bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500 border border-gray-300 shadow-sm",
    ghost: "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 border border-transparent",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;