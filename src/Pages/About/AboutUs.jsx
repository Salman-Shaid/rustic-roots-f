import React, { useState } from "react";
import leftImg from "../../assets/about-us/left.png";
import rightImg from "../../assets/about-us/right.png";
import { motion } from "framer-motion";
const AboutUs = () => {
    const [showFullText, setShowFullText] = useState(false);

    const shortText =
        "Welcome to Rustic Roots, where passion for fresh, organic, and farm-to-table dining meets an unwavering commitment to sustainability. Our journey began with a simple yet profound belief—great food starts with great ingredients. That’s why we source the freshest seasonal produce, ethically raised meats, and high-quality dairy directly from local farmers and artisans. Every dish on our menu is a celebration of natural flavors, carefully crafted to bring out the richness and authenticity of each ingredient.";

        const fullText = (
            <>
                <p className="leading-relaxed">
                    Welcome to <strong>Rustic Roots</strong>, where passion for fresh, organic, and farm-to-table dining meets an unwavering commitment to sustainability. 
                    Our journey began with a simple yet profound belief—<strong>great food starts with great ingredients</strong>. 
                    That’s why we source the freshest seasonal produce, ethically raised meats, and high-quality dairy directly from <strong>local farmers and artisans</strong>. 
                    Every dish on our menu is a celebration of natural flavors, carefully crafted to bring out the richness and authenticity of each ingredient.
                </p>
                <br />
                <p className="leading-relaxed">
                    At <strong>Rustic Roots</strong>, we don’t just serve food—we <strong>create experiences</strong>. 
                    Our chefs blend traditional cooking techniques with modern culinary artistry to present meals that are not only nourishing but also unforgettable. 
                    Whether it’s a comforting bowl of slow-cooked stew, a vibrant farm-fresh salad, or a perfectly grilled pasture-raised steak, 
                    every bite reflects our dedication to wholesome, delicious eating.
                </p>
                <br />
                <p className="leading-relaxed">
                    Beyond the plate, we are deeply committed to <strong>sustainability and eco-conscious practices</strong>. 
                    We minimize waste, use compostable packaging, and ensure that every ingredient is ethically sourced. 
                    Our cozy, rustic ambiance reflects our love for nature, with <strong>wooden accents, earthy tones, and a warm, inviting atmosphere</strong> where everyone feels at home.
                </p>
                <br />
                <p className="leading-relaxed">
                    We take pride in our close relationships with farmers, foragers, and producers who share our values. 
                    By sourcing locally and seasonally, we support small businesses and help sustain agricultural communities. 
                    This not only guarantees the freshest ingredients but also reduces our carbon footprint, making each meal a step towards a greener planet.
                </p>
                <br />
                <p className="leading-relaxed">
                    <strong>Rustic Roots</strong> is more than just a restaurant—it’s a gathering place for those who appreciate good food and meaningful connections.  
                    Whether you’re dining with family, sharing a romantic evening, or celebrating a milestone, our goal is to make every moment special.  
                    We invite you to slow down, savor the flavors, and immerse yourself in an experience that goes beyond just a meal.
                </p>
                <br />
                <p className="leading-relaxed">
                    Our menu is ever-changing, reflecting the seasons and the best of what nature has to offer.  
                    From summer’s ripe tomatoes and fragrant herbs to winter’s hearty root vegetables, every dish tells a story of time and place.  
                    We believe in the magic of food—its power to bring people together, spark conversations, and create lasting memories.
                </p>
                <br />
                <p className="leading-relaxed">
                    Join us on this <strong>flavorful journey</strong> as we redefine farm-to-table dining.  
                    At <strong>Rustic Roots</strong>, we believe that food should not only nourish the body but also tell a story—  
                    a story of community, tradition, and a shared love for all things fresh and natural.
                </p>
                <br />
                <p className="leading-relaxed">
                    Thank you for being a part of our journey. We can’t wait to welcome you and share the heart and soul of Rustic Roots with every dish we serve.
                </p>
            </>
        );
        

    return (
        <motion.div 
            className="flex flex-col md:flex-row items-start gap-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            {/* Left Image */}
            <motion.div
                className="w-full md:w-1/4 min-h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${leftImg})` }}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            ></motion.div>

            {/* Middle Text */}
            <motion.div 
                className="w-full md:w-1/2 text-center flex flex-col justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <h2 className="text-3xl  md:text-5xl font-bold mt-20 mb-4 text-green-700">
                    About Us
                </h2>

                <motion.p 
                    className="text-lg text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    {showFullText ? fullText : shortText}
                </motion.p>

                <motion.button
                    className="mt-4 text-green-700 font-semibold  hover:text-green-500 transition-all"
                    onClick={() => setShowFullText(!showFullText)}
                    whileTap={{ scale: 0.9 }}
                >
                    {showFullText ? "Thank You" : "See More..."}
                </motion.button>
            </motion.div>

            {/* Right Image */}
            <motion.div
                className="w-full md:w-1/4 min-h-screen bg-cover bg-center bg-repeat"
                style={{ backgroundImage: `url(${rightImg})` }}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            ></motion.div>
        </motion.div>
    );
};
export default AboutUs;
