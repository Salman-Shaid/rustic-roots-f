import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo/logo.png';
import { ThemeContext } from "../Providers/ThemeProvider";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-[#83BE99] text-white"}`}>
            {/* Main Footer */}
            <footer className="footer container mx-auto p-10 flex flex-wrap justify-between items-start">
                {/* Logo & About */}
                <div className="max-w-xs">
                    <img className="w-40" src={logo} alt="Rustic Roots Logo" />
                    <p className=" text-sm">
                        Rustic Roots – Providing the best food since 1997.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h6 className="footer-title font-semibold text-lg mb-3">Home</h6>
                    <NavLink to="/allFoods" className="link link-hover block">All Foods</NavLink>
                    <NavLink to="/gallery" className="link link-hover block">Foods Gallery</NavLink>
                    <NavLink to="/" className="link link-hover block">Top Selling Foods</NavLink>
                    <NavLink to="/" className="link link-hover block">Featured Dishes</NavLink>
                </div>

                <div>
                    <h6 className="footer-title font-semibold text-lg mb-3">Quick Links</h6>
                    <NavLink to="/aboutUs" className="link link-hover block">About Us</NavLink>
                    <NavLink to="/allFoods" className="link link-hover block">All Foods</NavLink>
                    <NavLink to="/login" className="link link-hover block">Login</NavLink>
                    <NavLink to="/register" className="link link-hover block">Register</NavLink>
                </div>

                {/* Social Links */}
                <div>
                    <h6 className="footer-title font-semibold text-lg mb-3">Follow Us</h6>
                    <div className="flex gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={28} className="hover:text-blue-500 transition" />
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <FaYoutube size={28} className="hover:text-red-500 transition" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={28} className="hover:text-pink-500 transition" />
                        </a>
                    </div>
                </div>
            </footer>

            {/* Copyright Section */}
            <footer className="text-center py-4 border-t border-gray-600">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Rustic Roots LTD. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Footer;
