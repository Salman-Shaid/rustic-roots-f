import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../assets/team/1.jpg'
import img2 from '../../assets/team/2.jpg'
import img3 from '../../assets/team/3.jpg'
import img4 from '../../assets/team/4.jpg'
import img5 from '../../assets/team/5.jpg'
import { ThemeContext } from "../../Providers/ThemeProvider";
const chefs = [
    {
        name: 'John Doe',
        role: 'Head Chef',
        image: `${img1}`,
        description: 'With over 15 years of culinary experience, John leads our kitchen with passion and creativity.'
    },
    {
        name: 'Jane Smith',
        role: 'Pastry Chef',
        image: `${img2}`,
        description: 'Jane crafts the most delicate and delicious desserts with an artistic touch.'
    },
    {
        name: 'Michael Brown',
        role: 'Sous Chef',
        image: `${img4}`,
        description: 'Michael ensures that every dish is executed flawlessly behind the scenes.'
    },
    {
        name: 'Emily Davis',
        role: 'Grill Chef',
        image: `${img3}`,
        description: 'Emily masters the flame and delivers grilled perfection every time.'
    },
    {
        name: 'William Wilson',
        role: 'Line Cook',
        image: `${img5}`,
        description: 'William brings speed and precision to every plate that leaves our kitchen.'
    },
];


const Teams = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <section className=" md:py-20 mb-8  text-gray-900">
            <div className=''>
                <div className={`max-w-screen-2xl bg-base-200 mx-auto px-4  sm:px-6 lg:px-8 text-center rounded-xl ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pt-10 mb-4 text-center">
                        Meet Our World-Class Chefs
                    </h2>

                    <p className="text-base md:text-lg mb-10 max-w-2xl mx-auto">
                        Behind every exquisite dish is a passionate chef with a story, skill, and love for the art of cooking.
                        Our culinary team is composed of dedicated professionals who blend tradition with innovation to bring you unforgettable flavors.
                    </p>


                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {chefs.map((chef, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 mb-10  h-[20rem] md:h-[22rem]">
                                    <img
                                        src={chef.image}
                                        alt={chef.name}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition duration-300 p-4 md:p-6 text-left text-white">
                                        <h3 className="text-lg md:text-xl font-semibold">{chef.name}</h3>
                                        <p className="text-sm text-green-300">{chef.role}</p>
                                        <p className="text-xs md:text-sm mt-1 md:mt-2">{chef.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>

    );
};

export default Teams;
