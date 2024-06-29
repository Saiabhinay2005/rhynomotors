import React from 'react';
import { Link } from 'react-router-dom';

const Product1 = () => {
  const productDetails = {
    name: 'SE03 LITE',
    description: 'Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!',
    imageUrl: '/src/components/belongings/bike.png',
  };

  return (
    <div className="flex  h-[60vh] ">
      <div className="flex-1">
        <img src={productDetails.imageUrl} alt={productDetails.name} className="h-full w-full object-cover" />
      </div>
      <div className="flex-1 p-10">
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

export default Product1;
