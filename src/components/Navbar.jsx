// src/components/Navbar.jsx
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Using react-icons for cart icon
import Logo from './Logo'; // Import the Logo component

const Navbar = ({ cartItems, toggleCart }) => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Logo /> {/* Include the logo here */}
        <h1 className="text-xl font-bold">Nike-Products</h1>
      </div>
      <div className="relative">
        <button onClick={toggleCart} className="flex items-center space-x-2">
          <FaShoppingCart size={24} />
          <span>{cartItems.length}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
