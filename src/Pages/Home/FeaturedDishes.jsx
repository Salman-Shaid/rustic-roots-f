import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import imageBackground2 from "../../assets/banner/bgFeature.jpg";
import { ThemeContext } from "../../Providers/ThemeProvider"; // Assuming you're using a context

const FeaturedDishes = () => {
    const { theme } = useContext(ThemeContext); // Get theme from context

    const dishes = [
        {
            id: 1,
            name: "Grilled Salmon",
            description: "A perfectly grilled salmon fillet with a side of vegetables.",
            image: "https://i.ibb.co/MSSZH3v/combisteam-queen-bakedsalmonwithvegetables.jpg",
        },
        {
            id: 2,
            name: "Pasta Primavera",
            description: "A colorful pasta dish with fresh vegetables and a creamy sauce.",
            image: "https://i.ibb.co/y8ZS6Cw/Pasta-Primavera-bowl.webp",
        },
        {
            id: 3,
            name: "Margherita Pizza",
            description: "Classic pizza topped with fresh mozzarella, tomatoes, and basil.",
            image: "https://i.ibb.co/999qMVx/mozzarella-pizza-margherita-FT-RECIPE0621-11fa41ceb1a5465d9036a23da87dd3d4.webp",
        },
        {
            id: 4,
            name: "Sushi Platter",
            description: "A variety of fresh sushi rolls served with soy sauce and wasabi.",
            image: "https://i.ibb.co.com/993Bm79c/0ac13014da6f4fd1adee7eb7fc2f70eb-1080w.jpg",
        },
        {
            id: 5,
            name: "Steak & Veggies",
            description: "A perfectly cooked steak with grilled vegetables.",
            image: "https://i.ibb.co.com/8DmYsKTn/porterhouse-775x775.jpg",
        },
    ];

    return (
        <div className="container mx-auto border rounded-xl my-20 px-4 pb-5">
            {/* Section Header */}
            <div
                className="relative  mb-16 h-60 flex items-center justify-center text-white mt-5"
                style={{
                    backgroundImage: `url(${imageBackground2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <h1 className="hover:text-red-500 relative text-6xl font-bold">Our Featured Dishes</h1>
            </div>

            {/* Swiper Carousel */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30} // Ensures consistent spacing
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="mySwiper"
            >
                {dishes.map((dish) => (
                    <SwiperSlide key={dish.id}>
                        <div
                            className={`shadow-lg rounded-lg overflow-hidden flex flex-col justify-between h-[480px] hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 mb-14 ${
                                theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
                            }`}
                        >
                            {/* Image */}
                            <img src={dish.image} alt={dish.name} className="w-full h-64 object-cover" />

                            {/* Card Content */}
                            <div className="p-6 flex-grow">
                                <h3 className="text-2xl font-semibold">{dish.name}</h3>
                                <p className="mt-3 line-clamp-2">{dish.description}</p>
                            </div>

                            {/* Button */}
                            <NavLink to="/allFoods">
                                <button className="btn btn-success bg-green-700 rounded-t-none btn-md w-full text-white">
                                    View More...
                                </button>
                            </NavLink>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FeaturedDishes;
