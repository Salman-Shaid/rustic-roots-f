import React, { useEffect, useState } from 'react';
import HotFoodCard from '../Home/HotFoodCard';
import imageBackground2 from '../../assets/banner/Black and Orange Restaurant  & Fast Food Facebook Cover.jpg';
import { FaSpinner } from 'react-icons/fa';

const AllFoods = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('asc'); // Default sort: asc

    // Fetch foods from backend
    const fetchFoods = async (query = '', sort = 'asc') => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `http://localhost:5000/foods?name=${encodeURIComponent(query)}&sort=${sort}`
            );
            if (!response.ok) {
                throw new Error('Failed to fetch foods');
            }
            const data = await response.json();
            setFoods(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Debounce search & sort
    useEffect(() => {
        const timer = setTimeout(() => {
            fetchFoods(searchQuery, sortOrder);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchQuery, sortOrder]);

    return (
        <div>
            {/* Banner Section */}
            <div
                className="relative mb-10 h-60 flex items-center justify-center text-white"
                style={{
                    backgroundImage: `url(${imageBackground2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="hover:text-green-500 relative text-7xl font-bold bottom-10">
                    Explore a variety of dishes
                </h1>
                <div className="text-2xl absolute flex items-center mx-auto bottom-10">
                    <a href="/" className="hover:text-green-500 font-semibold text-white transition px-4 py-2 rounded">
                        Home
                    </a>
                    <span className="mx-2">||</span>
                    <a href="/gallery" className="font-semibold text-white hover:text-gray-200 transition px-4 py-2 rounded">
                        Food Gallery
                    </a>
                </div>
            </div>

            {/* Search and Sort */}
            <div className="text-center mb-10 flex flex-col md:flex-row justify-center items-center gap-4">
                <input
                    type="text"
                    placeholder="Search for a dish..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md w-72"
                />

                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md w-72"
                >
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                </select>
            </div>

            {/* Food Cards */}
            <div className="container mx-auto my-20">
                {loading ? (
                    <div className="col-span-full flex justify-center items-center my-10">
                        <FaSpinner className="animate-spin text-4xl text-green-500" />
                        <span className="ml-4 text-lg font-semibold text-gray-600">Please Wait...</span>
                    </div>
                ) : error ? (
                    <div className="text-center">
                        <p className="text-xl text-red-500">{error}</p>
                    </div>
                ) : foods.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {foods.map((food) => (
                            <HotFoodCard key={food._id} food={food} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-xl">No foods available at the moment.</p>
                )}
            </div>
        </div>
    );
};

export default AllFoods;
