import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        
        <p className="text-sm">
          © {new Date().getFullYear()} Nike-Products. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
