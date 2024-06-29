import React from 'react';
import { Link } from 'react-router-dom';

const PrebookButton = () => {
  return (
    <Link to="/prebook" className="bg-gray-900 text-yellow-300 py-2 px-4 rounded-lg hover:bg-gray-800">
      Pre Book
    </Link>
  );
}

export default PrebookButton;
