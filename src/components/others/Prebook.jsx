import React from 'react';
import { useLocation } from 'react-router-dom';

const Prebook = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  const description = queryParams.get('description');
  const imageUrl = queryParams.get('imageUrl');

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Pre Book</h1>
      <div className="flex items-center justify-around">
        <div className="w-1/3">
          <img src={imageUrl} alt={name} className="rounded-lg shadow-lg" />
        </div>
        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="text-gray-700 mb-4">{description}</p>
          <button className="bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Prebook;
