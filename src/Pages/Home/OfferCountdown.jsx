import React, { useEffect, useState } from 'react';
import { FaHamburger, FaPizzaSlice, FaClock } from 'react-icons/fa';

const OfferCountdown = () => {
  // Set the offer expiration date (for example, 5 days from now)
  const offerEndDate = new Date('2025-05-20T00:00:00').getTime(); // Set your target date here

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = offerEndDate - now;

      // Calculate time components
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [offerEndDate]);

  return (
    <div className="relative bg-gradient-to-r from-[#83BE99] via-orange-600 to-blue-600 text-white p-10 rounded-lg shadow-2xl ">
      {/* Background image for glass effect */}
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: 'url(/path/to/food-background.jpg)' }}></div>

      {/* container */}
      <div className="relative z-10 p-6 rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out bg-white/30 backdrop-blur-md shadow-lg text-center mx-20">
        <h3 className="text-4xl font-semibold mb-6 text-shadow-lg">
          🍔 **10% OFF** on All Orders 🍕
        </h3>
        <p className="text-xl mb-6 max-w-4xl mx-auto">
          **Hurry up!** This offer expires soon. Don't miss out on the 10% discount! Shop now and save!
        </p>

        {/* Countdown */}
        <div className="grid grid-cols-4 max-w-[700px] gap-6 mb-6 item-center justify-center mx-auto">
          <div className="bg-white/80 text-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center backdrop-blur-md">
            <h4 className="text-4xl font-bold">{timeLeft.days}</h4>
            <p className="text-sm text-gray-500">Days</p>
          </div>
          <div className="bg-white/80 text-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center backdrop-blur-md">
            <h4 className="text-4xl font-bold">{timeLeft.hours}</h4>
            <p className="text-sm text-gray-500">Hours</p>
          </div>
          <div className="bg-white/80 text-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center backdrop-blur-md">
            <h4 className="text-4xl font-bold">{timeLeft.minutes}</h4>
            <p className="text-sm text-gray-500">Minutes</p>
          </div>
          <div className="bg-white/80 text-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center backdrop-blur-md">
            <h4 className="text-4xl font-bold">{timeLeft.seconds}</h4>
            <p className="text-sm text-gray-500">Seconds</p>
          </div>
        </div>

        {/* Action Button */}
        <button
          className="flex items-center justify-center space-x-3 px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
        >
          <FaPizzaSlice className="text-2xl" />
          <span>Order Now & Get 10% Off</span>
        </button>
      </div>
    </div>
  );
};

export default OfferCountdown;
