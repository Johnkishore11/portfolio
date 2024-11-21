import { footer } from "framer-motion/client";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import './Footer.css';

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
        <footer>
            <hr />
            <a href="/contact"></a>
            <Link to="/contact" onClick={toggleMenu}><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold p-20 text-center hover:underline">Work with me →</h1></Link>
            <hr className="border-gray-300" />
            <div className="flex justify-between p-20">
            <div>
                <h3 className="text-2xl font-bold">Contact information —</h3>
                <p className="text-gray-500 font-semibold">Feel free to reach out to me any time. I prefer to talk over email, especially since we may be a few time zones away.    </p>
                <p className="text-gray-500 mt-3">Email: <a className="text-black hover:underline" href="">johnkishore43@gmail.com</a></p>
                <p className="text-gray-500">Phone: <a className="text-black hover:underline" href="">9965641297</a></p>
            </div>

            <div className="flex flex-col">
                <h3 className="text-2xl font-bold ">Follow me on -</h3>
                <a href="https://www.linkedin.com/in/kishore-j11/" target="_blank">LinkedIn</a>
                <a href="https://github.com/Johnkishore11/" target="_blank">GitHub</a>
                <a href="https://www.instagram.com/__johnkishore__/" target="_blank">Instagram</a>
            </div>
            </div>
        <p>©2024 Kishore J.</p>
        </footer>
    );
};

export default Footer;