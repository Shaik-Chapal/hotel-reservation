// ReserveScreen.js
import React, { useContext, useState } from 'react';
import { HotelDetail } from '../Detail/HotelDetail';
import Contex from '../contextApi/Contex';

const ReserveScreen = () => {
  const { Room, Guest, PriceRange } = useContext(Contex);
  const [selectedHotel, setSelectedHotel] = useState(null);

  // Filter hotels based on context values
  let hotels = HotelDetail;
  if (Room !== '' && Room !== 'All') {
    hotels = HotelDetail.filter((hotel) => hotel.type === Room);
  }
  if (Guest !== '') {
    hotels = hotels.filter((hotel) => hotel.capacity === Guest);
  }
  if (PriceRange !== '') {
    hotels = hotels.filter((hotel) => hotel.price === PriceRange);
  }

  // Function to handle hotel selection
  const handleSelectHotel = (hotel) => {
    setSelectedHotel(hotel);
  };

  return (
    <div className="bg-[#48a5d2]">
      <div className="flex flex-col items-center pt-8">
        <h1 className="text-3xl font-semibold text-white mb-4">Select a Hotel for Reservation</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className={`bg-white rounded p-4 cursor-pointer transition-transform transform hover:scale-105 ${
                selectedHotel === hotel ? 'border-4 border-[#48a5d2]' : ''
              }`}
              onClick={() => handleSelectHotel(hotel)}
            >
              <img className="rounded mb-2" src={hotel.image} alt={hotel.title} />
              <h2 className="text-lg font-semibold">{hotel.title}</h2>
              <p className="text-gray-600">{hotel.desc}</p>
            </div>
          ))}
        </div>
        {selectedHotel && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-white mb-4">Reservation Details</h2>
            <p className="text-white">{`Selected Hotel: ${selectedHotel.title}`}</p>
            {/* Add more reservation details as needed */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReserveScreen;
