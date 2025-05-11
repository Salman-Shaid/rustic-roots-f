import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { ThemeContext } from "../Providers/ThemeProvider";
import logo from "../assets/logo/logo.png";
import { FaSun, FaMoon } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { authContext } from "../providers/AuthProvider";
const Navbar = () => {
  const { user, handleLogout } = useContext(authContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logout = () => {
    handleLogout();
    navigate("/login");
  };

  const baseLinks = [
    { path: "/", label: "Home" },
    { path: "/allFoods", label: "All Foods" },
    { path: "/gallery", label: "Gallery" },
    { path: "/aboutUs", label: "About Us" },
  ];

  const navLinks = user ? [...baseLinks, { path: "/myOrders", label: "My Orders" }] : baseLinks;

  const dropdownBg = theme === "dark" ? "bg-gray-800 text-white" : "bg-[#83BE99]";

  const navLinkClass = ({ isActive }) =>
    `px-3 py-1 rounded-md transition-all duration-300 focus:outline-none ${isActive
      ? "text-orange-600 font-semibold border-b-2 border-orange-600"
      : "text-white hover:text-orange-600 hover:border-b-2 border-orange-600"
    }`;


  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md bg-opacity-60 ${theme === "dark"
        ? "bg-gray-700/70 shadow-md"
        : "bg-green-700/50 shadow-md"
        } text-white`}
    >
      <div className="navbar container mx-auto p-4 flex justify-between items-center">
        {/* Left: Logo & Mobile Menu */}
        <div className="flex items-center gap-3">
          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden">
            <button className="btn btn-ghost">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <ul className={`menu menu-sm dropdown-content mt-3 shadow ${dropdownBg} rounded-box w-52`}>
              {navLinks.map(({ path, label }, i) => (
                <li key={i}>
                  <NavLink to={path} className={navLinkClass}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <img src={logo} alt="Website Logo" className="h-12 hover:scale-110 transition-transform" />
          </NavLink>
        </div>

        {/* Center: Desktop Menu */}
        <ul className="hidden lg:flex menu menu-horizontal gap-6">
          {navLinks.map(({ path, label }, i) => (
            <li key={i}>
              <NavLink to={path} className={navLinkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right: Theme Toggle & User */}
        <div className="flex items-center gap-4">
          {/* Theme Switch toggle */}
          <label className="cursor-pointer text-2xl">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
              className="hidden"
            />
            {theme === "dark" ? (
              <FaSun className="text-yellow-400 transition-transform duration-300 hover:rotate-180" />
            ) : (
              <FaMoon className="text-gray-300 -rotate-45 transition-transform duration-300 hover:rotate-45" />
            )}
          </label>


          {/* Auth Actions */}
          {user ? (
            <div className="dropdown dropdown-end">
              <button className="btn btn-ghost btn-circle avatar">
                <img
                  src={user.photoURL || "https://i.ibb.co.com/nsyKhrtx/placeholder.jpg"}
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full hover:scale-110 transition-transform"
                />
              </button>
              <ul className={`menu menu-sm dropdown-content mt-3 shadow ${dropdownBg} rounded-box w-52`}>
                <li><NavLink to="/myFoods" className={navLinkClass}>My Foods</NavLink></li>
                <li><NavLink to="/addFood" className={navLinkClass}>Add Food</NavLink></li>
                <li>
                  <button
                    onClick={logout}
                    className="text-red-600 mt-1 px-4 py-2 hover:bg-red-600 hover:text-white rounded-full font-bold"
                  >
                    <IoMdLogOut />Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink to="/login">
              <button className="px-6 btn-sm bg-gradient-to-r from-green-400 to-green-700 text-white text-lg font-semibold rounded-md shadow-xl hover:rounded-full hover:from-green-900 hover:to-green-800 transform hover:scale-105 transition-all duration-300">
                Login
              </button>
            </NavLink>

          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
