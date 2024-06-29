import React from 'react';
import { Link } from 'react-router-dom';

const Product3 = () => {
  const productDetails = {
    name: 'SE03 MAX',
    description: 'This Rhyno is tuned for long drives and no thrills. Like all other variants, this machine comes with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno, along with a perfect blend of battery capacity and motor power to provide up to 150 km range on a single charge. While it may not provide a thrilling ride, it promises a dependable and unwavering presence on the long stretches.',
    imageUrl: '/src/components/belongings/black.png',
  };

  return (
    <div className="flex max-h-[60vh]">
      <div className="flex-1 max-h-[80vh]">
        <img src={productDetails.imageUrl} alt={productDetails.name} className="h-full w-full object-contain" />
      </div>
      <div className="flex-1 p-10 overflow-auto">
        <h1 className="text-3xl font-bold mb-4">{productDetails.name}</h1>
        <p className="text-gray-700 mb-4">{productDetails.description}</p>
        <Link
          to={`/prebook?name=${encodeURIComponent(productDetails.name)}&description=${encodeURIComponent(productDetails.description)}&imageUrl=${encodeURIComponent(productDetails.imageUrl)}`}
          className="bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400"
        >
          Pre Book
        </Link>
      </div>
    </div>
  );
}

export default Product3;
