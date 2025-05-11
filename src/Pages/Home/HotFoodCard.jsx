import { Link } from "react-router-dom";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { useContext } from "react";
import { FaHandPointer } from "react-icons/fa";

const HotFoodCard = ({ food }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={`${theme === "dark" ? "bg-gray-500 text-white" : " text-black"} border border-gray-400 p-5 rounded-2xl shadow-xl hover:shadow-4xl transition-shadow duration-300 `}>
      <div className="relative">
        <img
          src={food.foodImage}
          alt={food.foodName}
          className="w-full h-56 object-cover rounded-lg"
        />
        <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
          {food.foodCategory}
        </span>
      </div>

      <div className="mt-4 space-y-2">
        <h3 className="text-2xl font-bold text-gray-800">{food.foodName}</h3>
        <p className="text-gray-600 text-lg font-medium">Price: <span className="text-green-600">${food.price}</span></p>
        <p className="text-sm text-gray-500">Available Quantity: {food.quantity}</p>
      </div>

      <div className="mt-5">
        <Link to={`/foods/${food._id}`}>
          <button
            className="flex items-center gap-3 px-6 py-2 rounded-full text-white font-semibold shadow-lg bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out text-lg"
          >
            <FaHandPointer className="text-xl" />  {/* Add your desired icon here */}
            <span>View Details</span>
          </button>


        </Link>
      </div>
    </div>
  );
};

export default HotFoodCard;
