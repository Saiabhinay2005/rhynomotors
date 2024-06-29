import React from 'react';
import { Link } from 'react-router-dom';

const Rental = () => {
  const bikes = [
    { id: 1, name: 'SE03 LITE' ,   description: 'Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!', imageUrl: './src/components/belongings/bike.png' },
    { id: 2, name: 'SE03 PRO',
      description: ' Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!', imageUrl: './src/components/belongings/bike2.png' },
    { id: 3, name: 'SE03 MAX',
      description: 'This Rhyno is tuned for long drives and no thrills. Like all other variants, this machine comes with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno, along with a perfect blend of battery capacity and motor power to provide up to 150 km range on a single charge. While it may not provide a thrilling ride, it promises a dependable and unwavering presence on the long stretches.', imageUrl: './src/components/belongings/bike3.png' },
  ];

  return (
    <div>
      <div className='p-20'>
        <h1 className="text-2xl font-bold mb-4">Explore Our Bikes for Rent</h1>
        <div className="grid grid-cols-3 gap-4">
          {bikes.map((bike) => (
            <div key={bike.id} className="relative">
              <img src={bike.imageUrl} alt={`Bike ${bike.id}`} className="rounded-lg shadow-lg" />
              <Link to={`/prebook?name=${bike.name}&description=${bike.description}&imageUrl=${bike.imageUrl}`}
                className="absolute bottom-0 left-0 right-0 p-2 bg-gray-900 text-white text-center rounded-b-lg hover:bg-gray-800">
                Rent this!
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rental;
