import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HotFoodCard from "./HotFoodCard";
import imageBackground2 from "../../assets/banner/Orange and Black Simple Food Banner.jpg";
import { FaSpinner } from "react-icons/fa";

const HotFoods = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://rustic-roots-server.vercel.app/top-selling-foods")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setFoods(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching top-selling foods:", error);
                setError("Failed to load top-selling foods. Please try again later.");
                setLoading(false);
            });
    }, []);

    return (
        <div className="container mx-auto my-20 px-4 border rounded-xl">
            {/* Section Header */}
            <div className="relative mb-10 h-60 flex items-center justify-center text-white mt-5"
                style={{
                    backgroundImage: `url(${imageBackground2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="hover:text-red-500 relative text-6xl font-bold">Our Top Selling Foods</h1>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                    // Loading Spinner
                    <div className="col-span-full flex justify-center items-center my-10">
                        <FaSpinner className="animate-spin text-4xl text-blue-500" />
                    </div>
                ) : error ? (
                    <p className="text-center text-lg text-red-500">{error}</p>
                ) : foods.length === 0 ? (
                    <p className="text-center text-lg text-gray-500">No top-selling foods available.</p>
                ) : (
                    foods.map((food) => <HotFoodCard key={food._id} food={food} />)
                )}
            </div>

            {/* See All Button */}
            <div className="mt-8 mb-8 text-center">
                <Link to="/allFoods">
                    <button className="btn  btn-wide btn-outline btn-success   hover:bg-green-700 text-white py-4 px-10 rounded-full transition duration-300">
                        See All
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HotFoods;
