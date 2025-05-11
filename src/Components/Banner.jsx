import React, { useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { NavLink } from 'react-router-dom';
import Lottie from 'react-lottie';
import { Fade } from 'react-awesome-reveal';

import image1 from '../assets/banner/1.jpg';
import image2 from '../assets/banner/2.jpg';
import image3 from '../assets/banner/3.jpg';

import titleLottieAnimation from '../assets/animation/Animation - 1735144071761.json';
import leftArrowAnimation from '../assets/animation/Animation - 1733653381871.json';
import rightArrowAnimation from '../assets/animation/Animation - 1733653518186.json';
import { FaHandPointer } from 'react-icons/fa';

//  Reusable Lottie config
const getLottieOptions = (animationData) => ({
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
});

//  Reusable slide data
const slides = [
  {
    image: image1,
    title: "A Journey to Authentic Flavors",
    description: "Discover the finest selection of flavorful dishes crafted to perfection. Rustic Roots brings you comfort food at its best.",
    buttonText: "Explore Our Foods",
    buttonLink: "/allFoods",
    textColor: "text-black",
  },
  {
    image: image2,
    title: "Rooted in Flavor, Inspired by Nature",
    description: "Welcome to Rustic Roots – where tradition meets taste. Explore our wholesome, nature-inspired culinary delights.",
    buttonText: "Our Foods",
    buttonLink: "/allFoods",
    textColor: "text-white",
  },
  {
    image: image3,
    title: "Rustic Roots: Discover the Heart of Comfort Food",
    description: "Step into deliciousness with meals that feel like home. Your taste journey starts here.",
    buttonText: "View More...",
    buttonLink: "/allFoods",
    textColor: "text-black",
  },
];

//  Slide component
const BannerSlide = ({ image, title, description, buttonText, buttonLink, textColor }) => (
  <div
    className="hero w-full h-full"
    style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <div className="hero-content text-center text-neutral-content flex flex-col lg:flex-row items-center justify-between w-full h-full">
      <div className="max-w-3xl p-6">
        <Fade bottom>
          <div className="mb-4">
            <Lottie options={getLottieOptions(titleLottieAnimation)} height={200} width={200} />
          </div>
        </Fade>

        <Fade bottom><h1 className={`text-4xl font-bold ${textColor}`}>{title}</h1></Fade>
        <Fade bottom delay={300}><p className="p-6 text-gray-600">{description}</p></Fade>
        <Fade bottom delay={600}>
          <NavLink to={buttonLink}>
           <div className="flex justify-center">
  <button
    className="flex items-center gap-3 px-6 py-3 rounded-full text-white font-semibold shadow-lg bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
  >
    <FaHandPointer className="text-xl" />
    <span>{buttonText}</span>
  </button>
</div>


          </NavLink>
        </Fade>
      </div>
    </div>
  </div>
);

//  Banner component
const Banner = () => {
  const swiperRef = useRef(null);

  const handleMouseEnter = useCallback(() => swiperRef.current?.swiper.autoplay.stop(), []);
  const handleMouseLeave = useCallback(() => swiperRef.current?.swiper.autoplay.start(), []);
  const slideNext = () => swiperRef.current?.swiper.slideNext();
  const slidePrev = () => swiperRef.current?.swiper.slidePrev();

  return (
    <div className="relative w-full sm:h-[500] md:h-[600px] lg:h-[900px]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}><BannerSlide {...slide} /></SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button onClick={slidePrev}><Lottie options={getLottieOptions(leftArrowAnimation)} height={40} width={40} /></button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button onClick={slideNext}><Lottie options={getLottieOptions(rightArrowAnimation)} height={40} width={40} /></button>
      </div>
    </div>
  );
};

export default Banner;
