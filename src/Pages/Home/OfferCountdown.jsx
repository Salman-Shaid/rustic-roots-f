import React, { useContext, useEffect, useState } from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { ThemeContext } from '../../Providers/ThemeProvider';

const OfferCountdown = () => {
  const offerEndDate = new Date('2025-05-20T00:00:00').getTime();
  const { theme } = useContext(ThemeContext);

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

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [offerEndDate]);

  return (
    <div
      className={`relative text-white px-4 py-16 sm:px-8 md:px-16 lg:px-24 ${
        theme === 'dark'
          ? 'bg-gradient-to-t from-gray-900 via-gray-600 to-gray-800 text-white'
          : 'bg-gradient-to-t from-[#83BE99] via-orange-600 to-green-300 text-gray-900'
      }`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url(/path/to/food-background.jpg)' }}
        aria-hidden="true"
      ></div>

      {/* Content Container */}
      <div className="relative container z-10 p-4 sm:p-6 md:p-10 rounded-xl hover:scale-[1.01] transition-transform duration-300 ease-in-out bg-white/30 backdrop-blur-md shadow-lg text-center  mx-auto">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
          🍔 <strong>10% OFF</strong> on All Orders 🍕
        </h3>
        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-3xl mx-auto">
          <strong>Hurry up!</strong> This offer expires soon. Don't miss out on the 10% discount! Shop now and save!
        </p>

        {/* Countdown Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-6 items-center justify-center max-w-xl mx-auto">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="bg-white/80 text-gray-800 p-4 sm:p-6 rounded-xl shadow-md flex flex-col items-center backdrop-blur-md dark:bg-gray-700 dark:text-white"
            >
              <h4 className="text-2xl sm:text-3xl font-bold">{value}</h4>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">{label}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <button className="flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-2 sm:py-3 rounded-full text-white font-semibold text-sm sm:text-base bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
          <FaPizzaSlice className="text-lg sm:text-2xl" />
          <span>Order Now & Get 10% Off</span>
        </button>
      </div>
    </div>
  );
};

export default OfferCountdown;
