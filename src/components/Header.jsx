// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Ksymbol from '../assets/Ksymbol.png';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full px-9 py-7 flex justify-between items-center z-50 opacity-80">
      {/* Logo Section */}
      <Link to="/" className="flex items-center space-x-3 ">
        <img className="w-10 h-10" src={Ksymbol} alt="Logo" />
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-gray-900">Kishore J</h1>
          <p className="text-xs text-gray-800">DEVELOPER & CREATOR</p>
        </div>
        </Link>

      {/* Menu Icon and Text */}
      <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleMenu}>
        <span className="text-gray-900 font-semibold text-sm tracking-widest">MENU</span>
        <div className={`hamburger ${isOpen ? 'open' : ''}`}>
          <span className="line top-line"></span>
          <span className="line middle-line"></span>
          <span className="line bottom-line"></span>
        </div>
      </div>

      {/* Fullscreen Overlay Menu */}
      <div
        className={`fixed inset-0 bg-gray-900 text-white flex flex-col items-center justify-center space-y-6 text-2xl font-semibold transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transition: "transform 0.3s ease-in-out" }}
      >
        {/* Close Icon */}
        <div className="absolute top-5 right-5 cursor-pointer flex items-center space-x-2" onClick={toggleMenu}>
          <p className="font-semibold text-sm tracking-widest">CLOSE</p>
          <span className="text-white text-3xl font-bold">&times;</span>
        </div>

        {/* Menu Links */}
        <ul className="space-y-4 text-center text-5xl font-bold text-gray-400">
          <p className="text-base font-normal">MENU</p>
          < li className="text-gray-400 hover:text-white cursor-pointer">
            <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
          {/* <hr className="w-16 border-t-2 border-white mb-4" /> */}
          <li className=" hover:text-white cursor-pointer">
            <Link to="/about" onClick={toggleMenu}>About Me</Link>
          </li>
          <li className="text-gray-400 hover:text-white cursor-pointer">
            <Link to="/projects" onClick={toggleMenu}>Projects</Link>
          </li>
          <li className="text-gray-400 hover:text-white cursor-pointer">
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </li>
          <li className="text-gray-400 hover:text-white cursor-pointer">
            <a href="https://www.linkedin.com/in/kishore-j11/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
        </ul>

        {/* Footer */}
        <p className="text-xs text-gray-400 mt-10">
          © 2024 Kishore.
        </p>
      </div>
    </header>
  );
};

export default Header;
