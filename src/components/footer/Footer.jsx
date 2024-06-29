import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-100 p-4 flex justify-around">
      <ul>
        <li className="text-xs underline hover:text-sm hover:text-blue-500 p-2">Products</li>
        <li className="text-xs underline hover:text-sm hover:text-blue-500 p-2">Contact Us</li>
        <li className="text-xs underline hover:text-sm hover:text-blue-500 p-2">Career</li>
      </ul>
      <ul>
        <li className="text-xs underline hover:text-sm hover:text-blue-500 p-2">Privacy Policy</li>
        <li className="text-xs underline hover:text-sm hover:text-blue-500 p-2">Refund Policy</li>
        <li className="text-xs underline hover:text-sm hover:text-blue-500 p-2">Website Policy</li>
      </ul>
      <ul>
        <li className="text-xs underline hover:text-sm hover:text-blue-500 p-2">Rentals</li>
        <li className="text-xs underline hover:text-sm hover:text-blue-500 p-2">Instagram</li>
        <li className="text-xs underline hover:text-sm hover:text-blue-500 p-2">LinkedIn</li>
      </ul>
    </div>
  );
}

export default Footer;
