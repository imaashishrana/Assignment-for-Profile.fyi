// src/components/Logo.jsx
import React from 'react';

const Logo = () => {
  return (
    <img
      src="/nike-11.svg" // Make sure the SVG is in the public directory
      alt="Nike Logo"
      className="w-8 h-8" // Adjust size as needed
    />
  );
};

export default Logo;
